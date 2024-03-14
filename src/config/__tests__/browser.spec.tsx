import { groupMockDebugsMock } from '@fixtures/group-mock-debug';

const mockStart = jest.fn().mockReturnValue({
  start: jest.fn()
});
const mockGetIsActive = jest.fn().mockReturnValue(true);

jest.mock('msw', () => ({
  setupWorker: jest.fn().mockReturnValue({
    start: jest.fn(() => mockStart())
  })
}));

jest.mock('../handlers', () => ({
  createHandler: jest.fn(() => [])
}));

jest.mock('../../services', () => ({
  getIsActive: jest.fn(() => mockGetIsActive())
}));

import { initMockServiceWorker } from '../browser';

describe('initMockServiceWorker', () => {
  it('should start', () => {
    mockGetIsActive.mockReturnValue(true);

    initMockServiceWorker(groupMockDebugsMock);

    expect(mockStart).toHaveBeenCalled();
  });

  it('should not start ', () => {
    mockGetIsActive.mockReturnValue(false);

    initMockServiceWorker(groupMockDebugsMock);

    expect(mockStart).not.toHaveBeenCalled();
  });
});
