import React from 'react'

const BookList = ({books}) => {

    const handleClick = (id) =>{
        console.log(id)
    }

  return (
    <div className='book-list'>
        <ul>
            {books.map(book=>(
                <li key={book.id} onClick={()=>handleClick(book.id)}>{book.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default BookList