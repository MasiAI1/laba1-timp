import React from 'react';
import cl from './About.module.css'; // Создадим этот файл стилей

function About() {
  return (
    <div className={cl.aboutWrapper}>
      <div className={cl.aboutContent}>
        <div className={cl.textBlock}>
          <h1 className={cl.mainTitle}>О проекте мониторинга общественной безопасности</h1>
          
          <p className={cl.philosophicalText}>
            Платформа предназначена для фиксации и контроля инцидентов в общественных местах.
          </p>
          
          <blockquote className={cl.quote}>
            «Главная цель системы - быстрое выявление рисков и координация реакции служб безопасности
            в ТЦ, на вокзалах и в аэропортах».
          </blockquote>
          
          <p className={cl.subText}>
            Здесь ведется учет происшествий, отслеживается критичность и сохраняется оперативная информация
            для принятия решений дежурными сменами.
          </p>
        </div>

        <div className={cl.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80" 
            alt="Центр мониторинга безопасности" 
            className={cl.wednesdayImage}
          />
          <div className={cl.imageCaption}>Единый мониторинговый центр общественной безопасности</div>
        </div>
      </div>
    </div>
  );
}

export default About;