import { Route, Routes as Switch } from 'react-router-dom'
import React, { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))

export default (
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='*'  element={<div>404 Page not found</div>} />
    </Switch>
)
