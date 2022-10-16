import React, { useState } from 'react'
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Home = () => {

    const [books,setBooks] = useState([
        {title:'Kitap 1', id:1},
        {title:'Kitap 2', id:2},
        {title:'Kitap 3', id:3},
        {title:'Kitap 4', id:4},
    ]);

  return (

    <div className='App'>
        {books && <BookList books={books} />}
        <BookForm />
    </div>
  )
}

export default Home