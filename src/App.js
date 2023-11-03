import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('create book', title);
        setBooks([...books, {
            id: Math.round(Math.random() * 9999),
            title
        }]);
    };

    const editBook = () => {

    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    return <div className='app'>
        <BookList onDelete={deleteBookById} books={books} />
        <BookCreate onCreateBook={createBook} />
    </div>;
}

export default App;