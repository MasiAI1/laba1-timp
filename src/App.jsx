import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './Ui/navbar/Navbar';
import Calculator from './Ui/Calculator/Calculator';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

function App() {
    const[isAuth,setIsAuth]=useState(false);
     const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{if(localStorage.getItem("auth")){
        setIsAuth(true);
    }
    setIsLoading(false);
},[]);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading

        }}>
             <BrowserRouter>
        <Navbar/>
            <Calculator />
            <AppRouter/>
      
      </BrowserRouter>

        </AuthContext.Provider>
     
    )
}

export default App
