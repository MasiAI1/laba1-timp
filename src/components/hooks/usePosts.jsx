import { useMemo } from "react";

const SEVERITY_PRIORITY = {
    'Критический': 1,
    'Высокий': 2,
    'Средний': 3,
    'Низкий': 4,
};

const STATUS_PRIORITY = {
    'Новый': 1,
    'В работе': 2,
    'Решён': 3,
    'Закрыт': 4,
};

export const useSortedBooks = (sort, books) => {
    const selectedBooks = useMemo(() => {
        if (sort === 'severity') {
            return [...books].sort((a, b) => {
                const priorityA = SEVERITY_PRIORITY[a.severity] || 99;
                const priorityB = SEVERITY_PRIORITY[b.severity] || 99;
                return priorityA - priorityB;
            });
        }
        if (sort === 'status') {
            return [...books].sort((a, b) => {
                const priorityA = STATUS_PRIORITY[a.status] || 99;
                const priorityB = STATUS_PRIORITY[b.status] || 99;
                return priorityA - priorityB;
            });
        }
        if (sort === 'responseTime') {
            return [...books].sort((a, b) => (a.responseTime || 0) - (b.responseTime || 0));
        }
        if (sort === 'title' || sort === 'zone' || sort === 'category') {
            return [...books].sort((a, b) =>
                (a[sort] || '').localeCompare(b[sort] || '', 'ru')
            );
        }
        return books;
    }, [sort, books]);
    return selectedBooks;
};

export const useSoredSearchedBooks = (filter, books) => {
    const { sort, search, status, category, zone } = filter;
    const sortedIncidents = useSortedBooks(sort, books);

    const sortedAndSearchedIncidents = useMemo(() => {
        const query = search.toLowerCase();
        return sortedIncidents.filter((book) => {
            const matchesSearch = !query || [
                book.title,
                book.location,
                book.assignedTo,
                book.reportedBy,
                book.category,
                book.zone,
            ].some((field) => (field || '').toLowerCase().includes(query));

            const matchesStatus = !status || book.status === status;
            const matchesCategory = !category || book.category === category;
            const matchesZone = !zone || book.zone === zone;

            return matchesSearch && matchesStatus && matchesCategory && matchesZone;
        });
    }, [sortedIncidents, search, status, category, zone]);

    return sortedAndSearchedIncidents;
};
