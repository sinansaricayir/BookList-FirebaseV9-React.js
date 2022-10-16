import { useState } from "react";

const BookForm = () => {

    const [newBook,setNewBook] = useState('');

    const handleSubmit = async(e) =>{
         e.preventDefault()
         console.log(newBook)
         setNewBook('')
    }    

    
  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Yeni Kitap Ekle</span>
            <input 
                required
                type='text'
                value={newBook}
                onChange={(e)=>setNewBook(e.target.value)}
            />
        </label>
        <button>EKLE</button>
    </form>
  )
}

export default BookForm