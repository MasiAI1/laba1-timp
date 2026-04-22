import React from 'react';
import cl from './MyLoader.module.css';

const MyLoader = () => {
  return (
    <div className={cl.loaderWrapper}>
      <div className={cl.loaderContent}>
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" 
          alt="Центр мониторинга безопасности" 
          className={cl.loaderGif}
        />
        <p className={cl.loaderText}>Подготавливаем данные мониторинга...</p>
      </div>
    </div>
  );
};

export default MyLoader;