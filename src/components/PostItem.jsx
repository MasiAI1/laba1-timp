import MyButton from '../Ui/Mybutton/MyButton'
import { useNavigate } from 'react-router-dom'
import { SEVERITY_CLASS, STATUS_CLASS } from '../constants/incidentAttributes'

function PostItem({ post, index, remove, update }) {
  const navigate = useNavigate();

  const severityClass = SEVERITY_CLASS[post.severity] || 'dot--default';
  const statusClass = STATUS_CLASS[post.status] || 'status--default';

  return (
    <div className='post'>
      <div className='post_content'>
        <div className='post_title_block'>
          <span className={`status-dot ${severityClass}`}></span>
          <strong>{index}. {post.title}</strong>
        </div>
        <div className='post_meta'>
          <span className='post_severity'>Уровень: {post.severity}</span>
          <span className={`post_status ${statusClass}`}>{post.status}</span>
          <span className='post_tag'>{post.category}</span>
          <span className='post_tag post_tag--zone'>{post.zone}</span>
        </div>
        <div className='post_details'>
          <span>📍 {post.location}</span>
          <span>👤 {post.assignedTo}</span>
          <span>⏱ {post.responseTime} мин</span>
        </div>
      </div>

      <div className='button_content'>
        <MyButton onClick={() => update({ ...post, status: prompt('Новый статус', post.status) })}>
          Статус
        </MyButton>
        <MyButton onClick={() => update({ ...post, title: prompt('Новое название', post.title) })}>
          Редактировать
        </MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Подробнее</MyButton>
      </div>
    </div>
  );
}

export default PostItem
