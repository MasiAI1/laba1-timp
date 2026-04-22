import { useEffect, useState } from 'react';
import PostServ from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import { useSoredSearchedBooks } from '../components/hooks/usePosts';
import PostAll from '../components/PostAll';
import PostCreate from '../components/PostCreate';
import '../styles/App.css';
import MyLoader from '../Ui/Loader/MyLoader';
import MyButton from '../Ui/Mybutton/MyButton';
import MyModal from '../Ui/MyModal/MyModal';
import PostFilter from '../components/PostFilter';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../Ui/pagination/Pagination';

function App() {
  const [books,setBook]=useState([]);
  const [filter,setFilter]=useState({
    sort:"",search:""
  })
  const[modal,setModal]=useState(false);
  const [totalPages,setTotalPages]=useState(0);
  const [limit,setLimit]=useState(10);
  const [page,setPage]=useState(1);
  const selecledSearch=useSoredSearchedBooks(filter.sort,filter.search,books);
  
  const remove=async (post)=>{
    await PostServ.delete(post.id);
    setBook(books.filter(b=> b.id!==post.id));
  }
  const createPost=async (newPost)=>{
    const response = await PostServ.create(newPost);
    setBook([...books, response.data]);
    setModal(false);
  }
    const [fetchPosts,isPostLoading,bookError]=useFetching(async (limit,page)=>{const response= await PostServ.getAll(limit,page);
      setBook(response.data);
      //const totalCount=response.headers["x-total-count"];
        //setTotalPages(getPageCount( totalCount,limit))
        const totalCount = 20; 
        setTotalPages(Math.ceil(totalCount / limit));

      });
      useEffect(()=>{fetchPosts(limit,page)},[]);

      const changePage=(page)=>{
        setPage(page);
        fetchPosts(limit,page)
      }
      const updatePost = async (updatedPost) => {
    try {
        await PostServ.update(updatedPost);
        setBook(books.map(b => b.id === updatedPost.id ? updatedPost : b));
    } catch (e) {
        alert("Не удалось обновить: " + e.message);
    }
}
  return (
   <div className='App'>
    <MyButton onClick={()=>setModal(true)}>Создать инцидент</MyButton>
    <MyModal visible={modal} setVisible={setModal}> <PostCreate create={createPost}/></MyModal>
       <PostFilter filter={filter} setFilter={setFilter}/>
        {bookError &&
          <h1> Произошла ошибка ${bookError}</h1>

        }
        {isPostLoading
        ? <MyLoader/> 
         : <PostAll books={selecledSearch} remove={remove} update={updatePost}/> }
    <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
       
        
        
   </div>
  )
}

export default App
