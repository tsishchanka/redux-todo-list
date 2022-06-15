import React from 'react'

import { Routes, Route } from 'react-router-dom'
import TodoItemContainer from '../../containers/TodoItemContainer'

const RoutesComponent = () => (
  <div>
    <Routes>
      <Route
        exact
        path="/"
        element={<TodoItemContainer />}
      />
    </Routes>
  </div>
)

export default RoutesComponent
