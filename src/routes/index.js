import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from 'src/pages/LoginPage'
import Register from "src/pages/RegisterPage";
import Home from 'src/pages/HomePage'
import Weather from 'src/pages/WeatherPage'
import Contacts from 'src/pages/ContactsPage'
import ToDo from 'src/pages/ToDoPage'
import NotFound from 'src/pages/NotFoundPage'

import EmptyLayout from "src/layout/EmptyLayout";
import MainLayout from "src/layout/MainLayout";

import { RequireAuth } from 'src/hoc/RequireAuth'

function RoutesComponent() {

  return (
    <Routes>
      <Route path="/react_crm/" element={<MainLayout />}>
        <Route path="/react_crm/" element={
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

      <Route path="/react_crm/auth/" element={<EmptyLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
      <Route path="/react_crm/*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;