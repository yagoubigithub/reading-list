import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';


const BookList = () => {
    const {books} = useContext(BookContext);
    return books.length > 0 ? (<div className="book-list">
    <ul>
        {books.map(book=>{
            return (
                <BookDetail key={book.id} book={book} />
            )
        })}
    </ul>

    </div>) : 
    (<div className="empty">
    There  are no books to read ,Hello free time

    </div>);
}
 
export default BookList;