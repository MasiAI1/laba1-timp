import React from 'react'
import MyButton from '../Ui/Mybutton/MyButton'
import { useNavigate } from 'react-router-dom'

function PostItem({post, index, remove, update}) {
  const navigate = useNavigate();

  // Функция для определения класса индикатора
  const getStatusClass = (severity) => {
    switch (severity) {
      case 'Критический': return 'dot--critical blink'; // Ярко-красный мигающий
      case 'Высокий':     return 'dot--high';     // Оранжевый
      case 'Средний':     return 'dot--medium';   // Желтый
      case 'Низкий':      return 'dot--low';      // Фиолетовый (твой фирменный)
      default:            return 'dot--default';  // Серый
    }
  };

  return (
    <div className='post'>
      <div className='post_content'>
        <div className='post_title_block'>
           {/* Динамический класс для точки */}
           <span className={`status-dot ${getStatusClass(post.severity)}`}></span>
           <strong>{index}. {post.title}</strong>
        </div>
        <div className='post_status_block'>
          <span className='post_severity'>Уровень: {post.severity}</span>
        </div>
      </div>

      <div className='button_content'>
        <MyButton onClick={() => update({...post, title: prompt('Новое название', post.title)})}>
            Редактировать
        </MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Подробнее</MyButton>
      </div>
    </div>
  );
}

export default PostItem