import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "src/pages/AdminPage";

import Login from 'src/pages/LoginPage'
import Register from "src/pages/RegisterPage";
import Home from 'src/pages/HomePage'
import Weather from 'src/pages/WeatherPage'
import Contacts from 'src/pages/ContactsPage'
import ToDo from 'src/pages/ToDoPage'
import NotFound from 'src/pages/NotFoundPage'
import UserPage from "src/pages/UserPage";

import Landing from 'src/pages/LandingPage'

import EmptyLayout from "src/layout/EmptyLayout";
import MainLayout from "src/layout/MainLayout";

import { RequireAuth } from 'src/hoc/RequireAuth'

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
        <Route path="user/" element={
          <RequireAuth>
            <UserPage />
          </RequireAuth>
        } />
      </Route>

      <Route path="/auth/" element={<EmptyLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/landing" element={<Landing />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;