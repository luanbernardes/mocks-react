import React, { useEffect, useState } from 'react';
import { Form, EachMock, Label, Wrapper, Buttons, Hr } from './select-mock.styles';
import { MockDebug, GroupMockDebug } from '../../@types';
import { addListMock, clear, setActiveMock, getListMock } from '../../services';

export interface SelectMockComponentProps {
  mockDebugList: GroupMockDebug[];
}

export function SelectMockComponent(props: SelectMockComponentProps) {
  const { mockDebugList } = props;
  const [listMock, setListMock] = useState<MockDebug | Record<string, never>>({});

  // when reload come selected
  useEffect(() => {
    const mocksParsed = getListMock();
    setListMock(mocksParsed);
  }, []);

  useEffect(() => {
    addListMock(listMock);
  }, [listMock]);

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>, mock: MockDebug) {
    const selectValue = event.target.value;
    const copyListMock = JSON.parse(JSON.stringify(listMock));

    // when select '' remove mock
    if (selectValue === '') {
      delete copyListMock[mock.title];
    } else {
      copyListMock[mock.title] = selectValue;
    }

    setActiveMock();
    setListMock(copyListMock);
  }

  function onDeactivateAllMocks() {
    clear();
    location.reload();
  }

  function optionSelected(mockTitle: string) {
    return listMock[mockTitle];
  }

  return (
    <>
      <Wrapper>
        {mockDebugList.map((mocks) => {
          return (
            <div key={mocks.title}>
              <h1>{mocks.title}</h1>

              <Form>
                {mocks.list.map((mock) => (
                  <EachMock key={`each-mock-${mock.title}`}>
                    <Label>{mock.title}</Label>

                    <select
                      name="mock-debug"
                      id={`select-mock-debug-${mock.title}`}
                      onChange={(e) => handleSelect(e, mock)}
                      style={{ width: '100%' }}
                      value={optionSelected(mock.title)}
                    >
                      <option value="">-</option>
                      {mock.options.map((option: any) => (
                        <option key={option.id} value={option.id}>
                          {option.title}
                        </option>
                      ))}
                    </select>
                  </EachMock>
                ))}
              </Form>

              <Hr />
            </div>
          );
        })}
      </Wrapper>
      <Buttons>
        <button onClick={() => location.reload()}>page reload</button>
        <button onClick={() => onDeactivateAllMocks()}>deactivate mocks</button>
      </Buttons>
    </>
  );
}
