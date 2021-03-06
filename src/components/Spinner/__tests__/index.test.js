import Wrapper from '../index';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../../styles';

describe('Spinner', () => {
  it('renders correctly', () => {
    create(
      <ThemeProvider theme={theme}>
        <Wrapper/>
      </ThemeProvider>
    ).root;
  });
});
