import { addListMock, clear, getIsActive, getListMock, setActiveMock } from '../service';

describe('service', () => {
  describe('getListMock', () => {
    it('should return parsed', () => {
      Storage.prototype.getItem = jest.fn(() => '{"list-mocks-active": "true"}');

      const result = getListMock();

      expect(result).toEqual({ 'list-mocks-active': 'true' });
    });

    it('should return empty object when not can get', () => {
      Storage.prototype.getItem = jest.fn(() => null);

      const result = getListMock();

      expect(result).toEqual({});
    });
  });

  describe('getIsActive', () => {
    it('should return parsed', () => {
      Storage.prototype.getItem = jest.fn(() => '{"list-mocks-active": "true"}');

      const result = getIsActive();

      expect(result).toEqual(true);
    });

    it('should return empty object when not can get', () => {
      Storage.prototype.getItem = jest.fn(() => null);

      const result = getIsActive();

      expect(result).toEqual(false);
    });
  });

  describe('setActiveMock', () => {
    it('should set "active true" in localStorage', () => {
      jest.spyOn(Storage.prototype, 'setItem');
      Storage.prototype.setItem = jest.fn();

      setActiveMock();

      expect(localStorage.setItem).toHaveBeenCalledWith('is-active-mock-service-worker', 'true');
    });
  });

  describe('addListMock', () => {
    it('should set listMock stringify in localStorage', () => {
      const listMock: any = { a: 1 };
      jest.spyOn(Storage.prototype, 'setItem');
      Storage.prototype.setItem = jest.fn();

      addListMock(listMock);

      expect(localStorage.setItem).toHaveBeenCalledWith('list-mocks-active', '{"a":1}');
    });
  });

  describe('clear', () => {
    it('should remove "is-active-mock-service-worker" and "list-mocks-active" in localStorage', () => {
      jest.spyOn(Storage.prototype, 'removeItem');
      Storage.prototype.removeItem = jest.fn();

      clear();

      expect(localStorage.removeItem['mock'].calls[0][0]).toEqual('is-active-mock-service-worker');
      expect(localStorage.removeItem['mock'].calls[1][0]).toEqual('list-mocks-active');
    });
  });
});
