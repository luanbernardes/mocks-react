import React, { useEffect, useState } from 'react';
import { SelectMockComponent } from './select-mock.component';
import { GroupMockDebug } from '../../@types';
import { Icon, SelectMockRoot } from './select-mock.styles';

export type SelectMockContainerProps = {
  render: boolean;
  mocks: GroupMockDebug[];
};

export function SelectMockContainer({ render, mocks }: SelectMockContainerProps) {
  const [isBoxShow, setIsBoxShow] = useState(false);
  const [isSafeToRender, setSafeToRender] = useState(false);

  useEffect(() => {
    try {
      if (localStorage && sessionStorage) setSafeToRender(true);
    } catch (error) {
      setSafeToRender(false);
    }
  }, []);

  function toggleBox() {
    setIsBoxShow((prevValue) => !prevValue);
  }

  return render && isSafeToRender ? (
    <SelectMockRoot show={isBoxShow}>
      <Icon onClick={toggleBox}>{'>'}</Icon>

      <SelectMockComponent mockDebugList={mocks} />
    </SelectMockRoot>
  ) : (
    <></>
  );
}
