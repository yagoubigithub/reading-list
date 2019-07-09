import React, { createContext ,useState} from 'react'
import uuid from 'uuid';
export const BookContext = createContext();



export const BookContextProvider = (props) =>{
    const [books, setBooks] = useState([
        {title  : "The way of the hell", author : "satan", id: 1},
        {title  : "The final empire", author : "brandon sanderson", id: 2},
    ]);

    const addBook = (title,author)=>{
        setBooks([...books,{title,author,id : uuid() }]);
    }

   const  removeBook = (id)=>{
       setBooks (books.filter(book=>book.id !== id));
    }

    return(
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}