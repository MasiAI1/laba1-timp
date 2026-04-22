import { useMemo } from "react";

export const useSortedBooks = (sort, books) => {
  const selectedBooks = useMemo(() => {
    if (sort === 'severity') {
      const priorityMap = {
        'Критический': 1,
        'Высокий': 2,
        'Средний': 3,
        'Низкий': 4
      };
      return [...books].sort((a, b) => {
        const priorityA = priorityMap[a.severity] || 99;
        const priorityB = priorityMap[b.severity] || 99;
        return priorityA - priorityB;
      });
    }
    if (sort === 'title') {
      return [...books].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return books;
  }, [sort, books]);
  return selectedBooks;
};
export const useSoredSearchedBooks=(sort,search,books)=>{
    const sortedIncidents = useSortedBooks(sort, books);
    const sortedAndSearchedIncidents = useMemo(() => {
        return sortedIncidents.filter(book => 
            book.title.toLowerCase().includes(search.toLowerCase())
        )
    }, [sortedIncidents, search]);

    return sortedAndSearchedIncidents;
}