import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from '@/constants'
import TodoListContainer from '@/containers/TodoListContainer'

const RoutesComponent = () => (
  <Routes>
    <Route
      exact
      path={HOME_PAGE_ROUTE}
      element={<TodoListContainer />}
    />
  </Routes>
)

export default RoutesComponent
