import { rest } from 'msw';
import { getListMock } from '../services';
import { GroupMockDebug, MockDebug, MockDebugMethod, MockDebugRequest } from '../@types';

function createRestHandler(
  option: MockDebugRequest,
  mockMethod: MockDebugMethod,
  mockPath: string,
  delay: number
) {
  return rest[mockMethod](mockPath, (req, res, ctx) => {
    return res(ctx.status(option.status), ctx.json(option.data), ctx.delay(delay));
  });
} // <-- é array disso aqui

export function createHandler(groupMockDebugs: GroupMockDebug[]) {
  const activeMocks: MockDebug | object = getListMock();
  const allHandlers: any = [];

  Object.entries(activeMocks).forEach(([key, value]) => {
    groupMockDebugs.forEach((mocks) => {
      mocks.list.forEach((mock) => {
        if (mock.title === key) {
          mock.options.forEach((option) => {
            if (option.id === value && 'status' in option) {
              allHandlers.push(
                createRestHandler(option as MockDebugRequest, mock.method, mock.path, mock.delay)
              );
            }
          });
        }
      });
    });
  });

  return allHandlers;
}
