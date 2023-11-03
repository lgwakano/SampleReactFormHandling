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

    const deleteBook = () => {

    };

    return <div className='app'>
        <BookList books={books} />
        <BookCreate onCreateBook={createBook} />
    </div>;
}

export default App;