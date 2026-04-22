import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostServ from '../API/PostService';
import cl from './PostIdPage.module.css';
import MyLoader from '../Ui/Loader/MyLoader';

function PostIdPage() {
    const params = useParams();
    const navigate = useNavigate(); 
    const [post, setPost] = useState({});
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServ.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostsById(params.id);
    }, []);

    return (
        <div className={cl.container}>
            {isLoading 
                ? <MyLoader /> 
                : <div className={cl.card}>
                    <button onClick={() => navigate('/posts')} className={cl.backBtn}>
                        ← Назад к списку
                    </button>
                    
                    <div className={cl.header}>
                        <span className={cl.idTag}>ID: {post.id}</span>
                        <h1 className={cl.title}>{post.title}</h1>
                    </div>

                    <div className={cl.infoGrid}>
                        <div className={cl.infoItem}>
                            <strong>Важность:</strong> 
                            <span className={post.severity === 'Высокий' ? cl.highSeverity : cl.normalSeverity}>
                                {post.severity}
                            </span>
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