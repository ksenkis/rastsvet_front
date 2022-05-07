import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Gallery from './views/Gallery/Gallery';
import Algorithm from './views/Algorithm/Algorithm';
import ImageColorization from './views/ImageColorization/ImageColorization';

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ isAuthenticated, children }: any) {
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/login/',
      }}
      state={{ from: location }}
    />
  );
}

function Urls(props: any) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login/" element={<Login {...props} />} />
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={props.isAuthenticated}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/image/"
            element={
              <PrivateRoute isAuthenticated={props.isAuthenticated}>
                <ImageColorization />
              </PrivateRoute>
            }
          />
          <Route
            path="/gallery/"
            element={
              <PrivateRoute isAuthenticated={props.isAuthenticated}>
                <Gallery />
              </PrivateRoute>
            }
          />
          <Route
            path="/algorithm/"
            element={
              <PrivateRoute isAuthenticated={props.isAuthenticated}>
                <Algorithm />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Urls;
