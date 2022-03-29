import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/LoginPage'
import Home from '../pages/HomePage'
import Weather from '../pages/WeatherPage'
import Contacts from '../pages/ContactsPage'
import ToDo from '../pages/ToDoPage'
import NotFound from '../pages/NotFoundPage'

import EmptyLayout from "../layout/EmptyLayout";
import MainLayout from "../layout/MainLayout";

function RoutesComponent() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout auth={true}/>}>
        <Route path="/" element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="todo" element={<ToDo />} />
      </Route>

      <Route path="/" element={<MainLayout auth={false}/>}>
        <Route path="test" element={<ToDo />} />
      </Route>

      <Route path="/auth/" element={<EmptyLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent;