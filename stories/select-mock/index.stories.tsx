import React, { useState } from 'react';
import { initMockServiceWorker } from '../../src/config';
import { SelectMockContainer as SystemSelectMockContainer } from '../../src/components/select-mock/select-mock.container';
import { GroupMockDebug } from '../../src/@types';

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
              test: 'value mocked success',
              foo: 'any another value'
            }
          },
          {
            id: 'mock-bill-error',
            title: 'mock - error 400',
            status: 400,
            data: 'value mocked error'
          }
        ]
      }
    ]
  }
];

export function SelectMockContainer() {
  initMockServiceWorker(groupMockDebugsMock);

  const [response, setResponse] = useState<any>();
  const [responseLoading, setResponseLoading] = useState<boolean>(false);

  async function onClick() {
    setResponseLoading(true);

    fetch('/mock-test-MSW', {
      method: 'GET'
    })
      .then(async (response) => {
        const responseJson = await response.json();
        const r = JSON.stringify(responseJson, undefined, 2);

        setResponse(r);
      })
      .finally(() => {
        setResponseLoading(false);
      });
  }

  return (
    <div>
      <button onClick={() => onClick()}>Request to /mock-test-MSW</button>

      <SystemSelectMockContainer render mocks={groupMockDebugsMock} />

      <div>
        <h2>Response</h2>

        {responseLoading && <span>Loading...</span>}
        {!responseLoading && <pre id="response">{response}</pre>}
      </div>
    </div>
  );
}

export default {
  title: 'SelectMock',
  component: SelectMockContainer
};
