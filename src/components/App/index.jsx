import React from 'react';

import { Provider } from 'react-redux';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from '../Header';

import store from '@/store/configureStore';

import { HOME_PAGE_ROUTE } from '@/constants';

import TodoListContainer from '@/containers/TodoListContainer';
import theme from '@/theme/';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route
              exact
              path={HOME_PAGE_ROUTE}
              element={<TodoListContainer />}
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
