export interface PorkbunOptions {
  secretapikey: string;
  apikey: string;
  domain: string;
}

export type RecordType =
  | 'A'
  | 'MX'
  | 'CNAME'
  | 'ALIAS'
  | 'TXT'
  | 'NS'
  | 'AAAA'
  | 'SRV'
  | 'TLSA'
  | 'CAA'
  | 'HTTPS'
  | 'SVCB';

export interface BaseResponse {
  status: string;
}

export interface PingResponse extends BaseResponse {
  yourIp: string;
}

export interface IdResponse extends BaseResponse {
  id: string;
}

export interface DNSRetrieveResponse extends BaseResponse {
  records: [
    {
      id: string;
      name: string;
      type: RecordType;
      content: string;
      ttl: string;
      prio: string;
      notes: string;
    }
  ];
}

export interface DNSOptions {
  name?: string;
  type: RecordType;
  content: string;
  ttl?: number;
  prio?: number;
}
