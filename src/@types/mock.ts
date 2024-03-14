export type MockDebugMethod = 'get' | 'post';

export type MockDebugType = 'callback' | 'request';

export type MockDebugCallback = {
  id: string;
  callback: () => void;
};

export interface MockDebugRequest {
  id: string;
  title: string;
  status: number;
  data: any;
}

export interface MockDebug {
  title: string;
  path: string;
  method: MockDebugMethod;
  delay: number;
  options: MockDebugRequest[] | MockDebugCallback[];
  type?: MockDebugType;
}

export interface GroupMockDebug {
  title: string;
  list: MockDebug[];
  type?: MockDebugType;
}

export enum ActiveMockService {
  isActive = 'is-active-mock-service-worker',
  list = 'list-mocks-active'
}
