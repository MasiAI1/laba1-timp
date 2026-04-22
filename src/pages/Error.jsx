import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Error.module.css';

const Error = () => {
    return (
        <div className={cl.errorWrapper}>
            <div className={cl.errorContent}>
                <img 
                    src="https://media1.tenor.com/m/Ib_0-HoBDYoAAAAd/%D0%BC%D1%8D%D0%B4%D0%B4%D0%B8%D1%81%D0%BE%D0%BD-maddyson.gif" 
                    alt="Мэддисон одобряет" 
                    className={cl.errorImage}
                />
                
                <h1 className={cl.errorTitle}>
                    Нужно быть аккуратней со ссылками
                </h1>
                
                <p style={{ color: '#666', marginBottom: '20px' }}>
                    Похоже, ты забрел куда-то не туда...
                </p>

                <Link to="/posts" className={cl.errorButton}>
                    Вернуться к инцидентам
                </Link>
            </div>
        </div>
    );
};

export default Error;