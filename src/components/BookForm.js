import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  const handelSubmit = (e)=>{

    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
       <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      /> 
      <input type="submit"   value="add book" />
    </form>
  );
};

export default BookForm;
