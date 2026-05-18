import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostServ from '../API/PostService';
import cl from './PostIdPage.module.css';
import MyLoader from '../Ui/Loader/MyLoader';
import { STATUS_CLASS } from '../constants/incidentAttributes';

function PostIdPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [fetchPostsById, isLoading] = useFetching(async (id) => {
        const response = await PostServ.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostsById(params.id);
    }, []);

    const statusClass = STATUS_CLASS[post.status] || 'status--default';
    const isHighSeverity = post.severity === 'Критический' || post.severity === 'Высокий';

    return (
        <div className={cl.container}>
            {isLoading
                ? <MyLoader />
                : <div className={cl.card}>
                    <button onClick={() => navigate('/posts')} className={cl.backBtn}>
                        ← Назад к списку
                    </button>

                    <div className={cl.header}>
                        <div className={cl.headerTags}>
                            <span className={cl.idTag}>ID: {post.id}</span>
                            <span className={`${cl.statusBadge} ${statusClass}`}>{post.status}</span>
                            <span className={cl.categoryBadge}>{post.category}</span>
                        </div>
                        <h1 className={cl.title}>{post.title}</h1>
                    </div>

                    <div className={cl.infoGrid}>
                        <div className={cl.infoItem}>
                            <strong>Важность:</strong>
                            <span className={isHighSeverity ? cl.highSeverity : cl.normalSeverity}>
                                {post.severity}
                            </span>
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Зона:</strong> {post.zone}
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Локация:</strong> {post.location}
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Источник сигнала:</strong> <code className={cl.ip}>{post.ip}</code>
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Время обнаружения:</strong> {post.date}
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Время реакции:</strong> {post.responseTime} мин
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Ответственный:</strong> {post.assignedTo}
                        </div>
                        <div className={cl.infoItem}>
                            <strong>Источник сообщения:</strong> {post.reportedBy}
                        </div>
                    </div>

                    <div className={cl.description}>
                        <h3>Описание инцидента:</h3>
                        <p>{post.body}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default PostIdPage;
