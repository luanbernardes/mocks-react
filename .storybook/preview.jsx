import theme from './theme';

const preview = {
  decorators: [
    (Story) => {
      return <Story />;
    }
  ],
  parameters: {
    docs: {
      theme
    },
    actions: { argTypesRegex: '^on[A-Z].*' }
  }
};

export default preview;
