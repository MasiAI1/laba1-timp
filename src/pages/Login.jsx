import React, { useContext } from 'react';
import cl from './Login.module.css';
import MyInput from '../Ui/MyInput/MyInput';
import MyButton from '../Ui/Mybutton/MyButton';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth,setIsAuth}=useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth","true");
    }

    return (
        <div className={cl.loginWrapper}>
            <div className={cl.loginCard}>
                <div className={cl.loginHeader}>
                    <div className={cl.logo}>Public Safety Watch</div>
                    <h1>Авторизация</h1>
                    <p>Введите данные для доступа к журналу общественной безопасности</p>
                </div>
                
                <form onSubmit={login} className={cl.loginForm}>
                    <div className={cl.inputGroup}>
                        <label>Логин</label>
                        <MyInput type="text" placeholder="Введите логин..." />
                    </div>
                    
                    <div className={cl.inputGroup}>
                        <label>Пароль</label>
                        <MyInput type="password" placeholder="Введите пароль..." />
                    </div>

                    <MyButton style={{width: '100%', marginTop: '10px'}}>
                        Войти в систему
                    </MyButton>
                </form>
                
                <div className={cl.loginFooter}>
                    <p>Забыли доступ? Обратитесь к дежурному администратору системы.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;