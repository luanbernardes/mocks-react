import { GroupMockDebug } from '../../@types';

export const groupMockDebugsCallbackMock: GroupMockDebug[] = [
  {
    title: 'TESTE',
    type: 'callback',
    list: [
      {
        title: 'mock-test-MSW',
        path: '/mock-test-MSW',
        method: 'get',
        delay: 1000,
        type: 'callback',
        options: [
          {
            id: 'mock-bill-success',
            callback: () => 'callback'
          },
          {
            id: 'mock-bill-error',
            callback: () => 'callback'
          }
        ]
      }
    ]
  }
];
