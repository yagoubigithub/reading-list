import React, { createContext ,useReducer} from 'react'

import { bookReducer } from '../reducers/BookReducer';
export const BookContext = createContext();



export const BookContextProvider = (props) =>{
    const [books, dispatch] = useReducer(bookReducer, [])
   /*  const [books, setBooks] = useState([
        {title  : "The way of the hell", author : "satan", id: 1},
        {title  : "The final empire", author : "brandon sanderson", id: 2},
    ]); */

    

    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}