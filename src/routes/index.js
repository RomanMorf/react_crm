import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/LoginPage'
import Register from "../pages/RegisterPage";
import Home from '../pages/HomePage'
import Weather from '../pages/WeatherPage'
import Contacts from '../pages/ContactsPage'
import ToDo from '../pages/ToDoPage'
import NotFound from '../pages/NotFoundPage'

import EmptyLayout from "../layout/EmptyLayout";
import MainLayout from "../layout/MainLayout";

import { RequireAuth } from '../hoc/RequireAuth'

function RoutesComponent() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path="weather" element={
          <RequireAuth>
            <Weather />
          </RequireAuth>
        } />
        <Route path="contacts" element={
          <RequireAuth>
            <Contacts />
          </RequireAuth>
        } />
        <Route path="todo" element={
          <RequireAuth>
            <ToDo />
          </RequireAuth>
        } />
      </Route>

      <Route path="/auth/" element={<EmptyLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;