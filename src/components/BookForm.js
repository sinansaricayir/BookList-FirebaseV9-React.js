import { useState } from "react";
import {db} from '../firebase/config';
import { collection,addDoc } from "firebase/firestore";

const BookForm = () => {

    const [newBook,setNewBook] = useState('');

    const handleSubmit = async(e) =>{
         e.preventDefault()
        //  console.log(newBook)

        const ref = collection(db,'books');

        await addDoc(ref,{
          title:newBook
        });

         setNewBook('')
    }    

    
  return (
    <form onSubmit={handleSubmit} className='add-book'>
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