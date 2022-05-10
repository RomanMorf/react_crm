import React from "react";
import { Routes, Route } from "react-router-dom";

import TestPage from "src/pages/TestPage";

import LoginPage from 'src/pages/LoginPage'
import RegisterPage from "src/pages/RegisterPage";
import HomePage from 'src/pages/HomePage'
import WeatherPage from 'src/pages/WeatherPage'
import TasksPage from 'src/pages/TasksPage'
import ToDoPage from 'src/pages/ToDoPage'
import NotFoundPage from 'src/pages/NotFoundPage'
import UserPage from "src/pages/UserPage";

import LandingPage from 'src/pages/LandingPage'

import EmptyLayout from "src/layout/EmptyLayout";
import MainLayout from "src/layout/MainLayout";

import { RequireAuth } from 'src/hoc/RequireAuth'

function RoutesComponent() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        } />
        <Route path="weather" element={
          <RequireAuth>
            <WeatherPage />
          </RequireAuth>
        } />
        <Route path="tasks" element={
          <RequireAuth>
            <TasksPage />
          </RequireAuth>
        } />
        <Route path="todo" element={
          <RequireAuth>
            <ToDoPage />
          </RequireAuth>
        } />
        <Route path="user/" element={
          <RequireAuth>
            <UserPage />
          </RequireAuth>
        } />
      </Route>

      <Route path="/auth/" element={<EmptyLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="/landing" element={<LandingPage />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="/test" element={<TestPage />} />
      </Route>

      <Route path="/*" element={<NotFoundPage/>} />
    </Routes>
  )
}

export default RoutesComponent;