import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ROUTES } from './configs';
import pages from './pages';
import configureStore from './store/configureStore';
const store = configureStore;
import 'antd/dist/antd.css';
import 'typeface-montserrat';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <div className={'container'}>
              <Route exact path={ROUTES.MAIN()} component={pages.Main} />
              <Route exact path={ROUTES.MOVIE_DETAIL()} component={pages.MovieDetail} />
            </div>
          </Switch>
        </Router>
       </Provider>
    </ThemeProvider>
  );
};
export default App;
