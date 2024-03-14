import { GroupMockDebug } from '../../@types';

export const groupMockDebugsCallbackMock: GroupMockDebug[] = [
  {
    title: 'TESTE',
    type: 'callback', // TODO no componente usa esse aqui
    list: [
      {
        title: 'mock-test-MSW',
        path: '/mock-test-MSW',
        method: 'get',
        delay: 1000,
        type: 'callback', // TODO faz sentido esse callback aqui?
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
