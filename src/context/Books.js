import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        
        setBooks(response.data);
    };

    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title
        });
        
        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, ...response.data};
            }

            return book;
        });
        
        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',{
            title
        });

        setBooks([...books, response.data]);
    };

    const valueToShare = {
        books,
        fetchBooks,
        editBookById,
        deleteBookById,
        createBook
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;

//Example of import:
//import BooksContext, {Provider} from "../context/Books";