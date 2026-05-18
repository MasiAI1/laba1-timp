export const SEVERITY_LEVELS = [
    { value: 'Критический', name: 'Критический' },
    { value: 'Высокий', name: 'Высокий' },
    { value: 'Средний', name: 'Средний' },
    { value: 'Низкий', name: 'Низкий' },
];

export const INCIDENT_STATUSES = [
    { value: 'Новый', name: 'Новый' },
    { value: 'В работе', name: 'В работе' },
    { value: 'Решён', name: 'Решён' },
    { value: 'Закрыт', name: 'Закрыт' },
];

export const INCIDENT_CATEGORIES = [
    { value: 'Пожарная безопасность', name: 'Пожарная безопасность' },
    { value: 'СКУД', name: 'СКУД' },
    { value: 'Видеонаблюдение', name: 'Видеонаблюдение' },
    { value: 'Охрана', name: 'Охрана' },
    { value: 'Инфраструктура', name: 'Инфраструктура' },
    { value: 'Периметр', name: 'Периметр' },
];

export const INCIDENT_ZONES = [
    { value: 'ТЦ', name: 'Торговый центр' },
    { value: 'Аэропорт', name: 'Аэропорт' },
    { value: 'Вокзал', name: 'Вокзал' },
];

export const STATUS_CLASS = {
    'Новый': 'status--new',
    'В работе': 'status--progress',
    'Решён': 'status--resolved',
    'Закрыт': 'status--closed',
};

export const SEVERITY_CLASS = {
    'Критический': 'dot--critical blink',
    'Высокий': 'dot--high',
    'Средний': 'dot--medium',
    'Низкий': 'dot--low',
};
