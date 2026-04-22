import { useState } from 'react'
import React from 'react'
import MyButton from '../Ui/Mybutton/MyButton';
import MyInput from '../Ui/MyInput/MyInput';

function PostCreate({create}) {
    const [post, setPost] = useState({
        title: "", 
        severity: ""
    });

    const CreatePost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, 
            id: Date.now(),
            date: new Date().toLocaleTimeString().slice(0, 5), 
            location: "Зона уточняется", 
            ip: "Источник уточняется",
            body: "Описание происшествия будет добавлено оператором."
        };
        create(newPost);

        setPost({title: "", severity: ""});
    }

    return (
        <form onSubmit={CreatePost}>
            <MyInput 
                type="text"
                placeholder='Название происшествия...'
                value={post.title}
                onChange={(event) => setPost({...post, title: event.target.value})}
            />
            <MyInput 
                type="text"
                placeholder='Уровень критичности...'
                value={post.severity}
                onChange={(event) => setPost({...post, severity: event.target.value})}
            />
            <MyButton>Зарегистрировать инцидент</MyButton>
        </form>
    )
}

export default PostCreate