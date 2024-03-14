import { render, screen } from '@testing-library/react';
import React from 'react';
import { mockComponent } from '@fixtures/mocks';
import { groupMockDebugsMock } from '@fixtures/group-mock-debug';

import { SelectMockContainer } from '../index';

jest.mock('../select-mock.component', () => mockComponent(['SelectMockComponent']));

describe('SelectMockContainer', () => {
  it('should render SelectMockComponent', () => {
    render(<SelectMockContainer mocks={groupMockDebugsMock} render />);

    expect(screen.getByText('SelectMockComponent')).toBeInTheDocument();
  });

  it('should not render SelectMockComponent when render is false', () => {
    render(<SelectMockContainer mocks={groupMockDebugsMock} render={false} />);

    expect(screen.queryByText('SelectMockComponent')).not.toBeInTheDocument();
  });

  it('should not render SelectMockComponent when localStorage is not defined', () => {
    const storage = window.localStorage;
    //@ts-ignore
    delete window.localStorage;

    render(<SelectMockContainer mocks={groupMockDebugsMock} render />);

    Object.assign(window, { localStorage: storage });

    expect(screen.queryByText('SelectMockComponent')).not.toBeInTheDocument();
  });

  it('should not render SelectMockComponent when sessionStorage is not defined', () => {
    const storage = window.sessionStorage;
    //@ts-ignore
    delete window.sessionStorage;

    render(<SelectMockContainer mocks={groupMockDebugsMock} render />);

    Object.assign(window, { sessionStorage: storage });

    expect(screen.queryByText('SelectMockComponent')).not.toBeInTheDocument();
  });
});
