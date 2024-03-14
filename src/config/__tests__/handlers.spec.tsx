import { groupMockDebugsMock } from '@fixtures/group-mock-debug';
import { groupMockDebugsCallbackMock } from '@fixtures/group-mock-debug/group-mock-debug-callback';

let mockGetListMock: any = {
  'mock-test-MSW': 'mock-test-MSW'
};

jest.mock('msw', () => ({
  rest: {
    get: jest.fn((mockPath, functionM) => {
      const ctx = {
        status: jest.fn(() => 200),
        json: jest.fn(() => ({
          test: '123qwe',
          test2: '456rty'
        })),
        delay: jest.fn(() => 123)
      };

      const res = {
        status: 200,
        json: {
          test: '123qwe',
          test2: '456rty'
        },
        delay: 123
      };

      const createRestHandler = functionM('request', () => res, ctx);

      return {
        method: 'get',
        mockPath: mockPath,
        createRestHandler: createRestHandler
      };
    }),
    post: jest.fn((mockPath) => `rest post - ${mockPath}`)
  }
}));

jest.mock('services', () => ({
  getListMock: jest.fn(() => mockGetListMock)
}));

import { createHandler } from '../handlers';

describe('createHandler', () => {
  it('should createRestHandler with all params', () => {
    mockGetListMock = {
      'mock-test-MSW': 'mock-bill-success'
    };

    const result = createHandler(groupMockDebugsMock);

    expect(result[0]).toEqual({
      method: 'get',
      mockPath: '/mock-test-MSW',
      createRestHandler: {
        delay: 123,
        json: { test: '123qwe', test2: '456rty' },
        status: 200
      }
    });
  });

  it('should return empty when not find activeMock', () => {
    mockGetListMock = {
      'not exist': ''
    };
    const result = createHandler(groupMockDebugsMock);

    expect(result).toEqual([]);
  });

  it('should return empty when type is callback', () => {
    mockGetListMock = {
      'mock-test-MSW': 'mock-bill-success'
    };

    const result = createHandler(groupMockDebugsCallbackMock);

    expect(result).toEqual([]);
  });
});
