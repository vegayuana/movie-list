import Wrapper from '../index';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'react-jss';
import { theme } from '../../../styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Main Page', () => {
  it('renders correctly', () => {
    const store = mockStore({
      list: {},
      detail: {},
    });
    create(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Wrapper/>
          </Router>
        </Provider>
      </ThemeProvider>
    ).root;
  });
});
