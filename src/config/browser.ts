import { setupWorker } from 'msw';
import { createHandler } from './handlers';
import { getIsActive } from '../services';
import { GroupMockDebug } from '../@types';

export const initMockServiceWorker = (groupMockDebugs: GroupMockDebug[]) => {
  if (getIsActive()) {
    // This configures a Service Worker with the given request handlers.
    setupWorker(...createHandler(groupMockDebugs)).start({
      onUnhandledRequest: 'bypass'
    });
  }
};
