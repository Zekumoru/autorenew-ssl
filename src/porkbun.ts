import axios from 'axios';
import {
  BaseResponse,
  DNSOptions,
  DNSRetrieveResponse,
  IdResponse,
  PorkbunOptions,
} from '../types/porkbun';

const porkbun = (options: PorkbunOptions) => {
  const domain = options.domain;
  const _axios = axios.create({
    baseURL: 'https://api.porkbun.com/api/json/v3/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  _axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        secretapikey: options.secretapikey,
        apikey: options.apikey,
      };
    }
    return config;
  });

  const ping = async (): Promise<BaseResponse> => {
    return (await _axios.post('/ping')).data;
  };

  const dns = {
    create: async (options: DNSOptions): Promise<IdResponse> => {
      return (await _axios.post(`/dns/create/${domain}`, options)).data;
    },
    edit: async (id: string, options: DNSOptions): Promise<BaseResponse> => {
      return (await _axios.post(`/dns/retrieve/${domain}/${id}`, options)).data;
    },
    retrieve: async (): Promise<DNSRetrieveResponse> => {
      return (await _axios.post(`/dns/retrieve/${domain}`)).data;
    },
    delete: async (id: string): Promise<BaseResponse> => {
      return (await _axios.post(`/dns/delete/${domain}/${id}`)).data;
    },
  };

  return {
    ping,
    dns,
  };
};

export default porkbun;
