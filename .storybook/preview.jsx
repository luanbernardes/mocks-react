import theme from './theme';
import { ThemeProvider } from '@emotion/react';

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
