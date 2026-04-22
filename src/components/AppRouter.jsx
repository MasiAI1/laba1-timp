import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import MyLoader from '../Ui/Loader/MyLoader';
function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader/>
  }

  return (
    <Routes>
      {isAuth
        ? <>
            {privateRoutes.map(route =>
              <Route 
                key={route.path} 
                element={<route.component/>} 
                path={route.path} 
              />
            )}
            <Route path="/login" element={<Navigate to="/posts" replace />} />
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </>
        : <>
            {publicRoutes.map(route =>
              <Route 
                key={route.path} 
                element={<route.component/>} 
                path={route.path} 
              />
            )}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
      }
    </Routes>
  );
}

export default AppRouter