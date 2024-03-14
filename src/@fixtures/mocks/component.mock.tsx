import React from 'react';

export function Mock({ children }: any) {
  return <div>{children}</div>;
}

export const mockComponent = (componentsName: string[] = []) => {
  const composed: { [key: string]: any } = {};

  componentsName.forEach((name: string) => {
    composed[name] = () => <Mock>{name}</Mock>;
  });

  return composed;
};
