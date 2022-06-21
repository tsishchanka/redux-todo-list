import React from 'react';

import { Provider } from 'react-redux';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '../Header';

import store from '@/store/configureStore';

import { HOME_PAGE_ROUTE } from '@/constants';

import TodoListContainer from '@/containers/TodoListContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route exact path={HOME_PAGE_ROUTE} element={<TodoListContainer />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
