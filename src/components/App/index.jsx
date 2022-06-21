import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header';

import { HOME_PAGE_ROUTE } from '@/constants';

import TodoListContainer from '@/containers/TodoListContainer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path={HOME_PAGE_ROUTE} element={<TodoListContainer />} />
      </Routes>
    </div>
  );
};

export default App;
