import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App(){
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('create book', title);
        setBooks([...books,{title: title}]);
    };

    const editBook = () => {
        
    };

    const deleteBook = () => {
        
    };

    return <div>
        <BookList/>
        <BookCreate onCreateBook={createBook}/>
    </div>;
}

export default App;