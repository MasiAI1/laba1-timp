import { useState } from 'react'
import MyButton from '../Ui/Mybutton/MyButton';
import MyInput from '../Ui/MyInput/MyInput';
import MySelect from '../Ui/MySelect/MySelect';
import {
    SEVERITY_LEVELS,
    INCIDENT_STATUSES,
    INCIDENT_CATEGORIES,
    INCIDENT_ZONES,
} from '../constants/incidentAttributes';

const emptyPost = {
    title: '',
    severity: '',
    category: '',
    status: 'Новый',
    zone: '',
    location: '',
    ip: '',
    assignedTo: '',
    reportedBy: '',
    responseTime: '',
    body: '',
};

function PostCreate({ create }) {
    const [post, setPost] = useState(emptyPost);

    const setField = (field) => (event) =>
        setPost({ ...post, [field]: event.target.value });

    const CreatePost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
            date: new Date().toLocaleTimeString().slice(0, 5),
            responseTime: Number(post.responseTime) || 0,
            location: post.location || 'Зона уточняется',
            ip: post.ip || 'Источник уточняется',
            assignedTo: post.assignedTo || 'Не назначен',
            reportedBy: post.reportedBy || 'Диспетчер',
            body: post.body || 'Описание происшествия будет добавлено оператором.',
        };
        create(newPost);
        setPost(emptyPost);
    };

    return (
        <form onSubmit={CreatePost}>
            <MyInput
                type="text"
                placeholder="Название происшествия..."
                value={post.title}
                onChange={setField('title')}
            />
            <MySelect
                defaultSel="Уровень критичности"
                opt={SEVERITY_LEVELS}
                selectSort={post.severity}
                onChange={(value) => setPost({ ...post, severity: value })}
            />
            <MySelect
                defaultSel="Категория"
                opt={INCIDENT_CATEGORIES}
                selectSort={post.category}
                onChange={(value) => setPost({ ...post, category: value })}
            />
            <MySelect
                defaultSel="Статус"
                opt={INCIDENT_STATUSES}
                selectSort={post.status}
                onChange={(value) => setPost({ ...post, status: value })}
            />
            <MySelect
                defaultSel="Зона объекта"
                opt={INCIDENT_ZONES}
                selectSort={post.zone}
                onChange={(value) => setPost({ ...post, zone: value })}
            />
            <MyInput
                type="text"
                placeholder="Локация (здание, этаж, участок)..."
                value={post.location}
                onChange={setField('location')}
            />
            <MyInput
                type="text"
                placeholder="Источник сигнала (камера, датчик, пульт)..."
                value={post.ip}
                onChange={setField('ip')}
            />
            <MyInput
                type="text"
                placeholder="Ответственный оператор..."
                value={post.assignedTo}
                onChange={setField('assignedTo')}
            />
            <MyInput
                type="text"
                placeholder="Кто сообщил..."
                value={post.reportedBy}
                onChange={setField('reportedBy')}
            />
            <MyInput
                type="number"
                min="0"
                placeholder="Время реакции (мин)..."
                value={post.responseTime}
                onChange={setField('responseTime')}
            />
            <MyInput
                type="text"
                placeholder="Описание инцидента..."
                value={post.body}
                onChange={setField('body')}
            />
            <MyButton>Зарегистрировать инцидент</MyButton>
        </form>
    );
}

export default PostCreate;
