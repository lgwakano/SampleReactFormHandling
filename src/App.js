import { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    //used to run code in specific point in time
    //in this case runs on initial render only
    useEffect(() => { 
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',{
            title
        });

        setBooks([...books, response.data]);
    };

    const editBookById = (id, title) => {
        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, title};
            }

            return book;
        });
        
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    return <div className='app'>
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
        <BookCreate onCreateBook={createBook} />
    </div>;
}

export default App;