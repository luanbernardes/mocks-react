import { GroupMockDebug } from '../../@types';

export const groupMockDebugsMock: GroupMockDebug[] = [
  {
    title: 'TESTE',
    type: 'request',
    list: [
      {
        title: 'mock-test-MSW',
        path: '/mock-test-MSW',
        method: 'get',
        delay: 1000,
        type: 'request',
        options: [
          {
            id: 'mock-bill-success',
            title: 'mock - success',
            status: 200,
            data: {
              test: '123qwe',
              test2: '456rty'
            }
          },
          {
            id: 'mock-bill-error',
            title: 'mock - error 400',
            status: 400,
            data: 'error'
          }
        ]
      }
    ]
  }
];
