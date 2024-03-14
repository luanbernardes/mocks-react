import { styled } from 'styled-components';

export const SelectMockRoot = styled('div')<{ show: boolean }>(({ show }) => ({
  boxSizing: 'border-box',
  position: 'fixed',
  zIndex: 9999,
  left: '0',
  bottom: show ? '0' : '-600px',
  width: '100%',
  height: '600px',
  backgroundColor: '#000',
  padding: '10px',
  color: '#fff'
}));

export const Icon = styled('div')(() => ({
  backgroundColor: '#000',
  margin: '-35px 0 0 0px',
  width: '25px',
  height: '25px',
  transform: 'rotate(90deg)',
  fontSize: '19px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}));

export const Wrapper = styled('div')(() => ({
  overflow: 'auto',
  height: '480px',
  paddingBottom: 80
}));

export const Form = styled('form')(() => ({
  display: 'flex',
  flexWrap: 'wrap'
}));
export const EachMock = styled('div')(() => ({
  width: '180px',
  padding: '0 5px 15px 0'
}));

export const Label = styled('label')(() => ({
  fontSize: '14px'
}));

export const Hr = styled('hr')(() => ({
  borderColor: '#727272'
}));

export const Buttons = styled('div')(() => ({
  backgroundColor: '#484848',
  padding: '5px'
}));
