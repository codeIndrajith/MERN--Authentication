import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

function PrivateRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;

// what is the purpose of <Outlet /> component

// The primary purpose of the <Outlet /> component is to facilitate the rendering of child routes within a parent route.
// It is used as a placeholder in a parent route or layout component to indicate where child routes should be rendered.
