import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { groupMockDebugsMock } from '@fixtures/group-mock-debug';

import { SelectMockComponent } from '../select-mock.component';

const mockAddListMock = jest.fn();
const mockClear = jest.fn();
let mockGetListMock: any = {};

jest.mock('services', () => ({
  addListMock: jest.fn((e) => mockAddListMock(e)),
  clear: jest.fn(() => mockClear()),
  setActiveMock: jest.fn(() => ''),
  getListMock: jest.fn(() => mockGetListMock)
}));

describe('SelectMockComponent', () => {
  beforeEach(() => {
    mockGetListMock = {};
  });
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() }
    });
  });

  it('should deactivate all mocks', () => {
    render(<SelectMockComponent mockDebugList={groupMockDebugsMock} />);

    fireEvent.click(screen.getByText('deactivate mocks'));

    expect(mockClear).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });

  describe('type request', () => {
    it('should init with "mock - success" selected', async () => {
      mockGetListMock = { 'mock-test-MSW': 'mock-bill-success' };
      render(<SelectMockComponent mockDebugList={groupMockDebugsMock} />);

      expect(screen.getByRole('option', { name: 'mock - success' })['selected']).toBeTruthy();
      expect(screen.getByRole('option', { name: 'mock - error 400' })['selected']).toBeFalsy();
      expect(screen.getByRole('option', { name: '-' })['selected']).toBeFalsy();
    });

    it('should when selected save in local storage', async () => {
      mockGetListMock = { 'mock-test-MSW': 'mock-bill-success' };
      render(<SelectMockComponent mockDebugList={groupMockDebugsMock} />);

      fireEvent.change(screen.getByRole('option', { name: 'mock - success' }), {
        target: { value: 2 }
      });

      expect(screen.getByRole('option', { name: 'mock - success' })['selected']).toBeTruthy();
      expect(mockAddListMock).toHaveBeenCalledTimes(2);
      expect(mockAddListMock.mock.calls[1][0]).toEqual({
        'mock-test-MSW': 'mock-bill-success'
      });
    });
  });
});
