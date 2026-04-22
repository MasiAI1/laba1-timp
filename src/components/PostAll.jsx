import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { createRef } from 'react';

function PostAll({books,remove,update}) {
  if(!books.length) return <h1> Инцидентов нет!!!</h1>
  return (
    <div>
       <h1> Список инцидентов</h1>
      <TransitionGroup>
          {books.map((book,index)=>{
            const nodeRef=createRef(null);
            return (<CSSTransition
              key={book.id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="post"
            >
              <div ref={nodeRef}>
                <PostItem  post={book} index={index+1} remove={remove} update={update}/>
              </div>
              
            </CSSTransition>)}
          )}
        </TransitionGroup>
     
        
    </div>
  )
}

export default PostAll