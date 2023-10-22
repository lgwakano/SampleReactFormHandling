import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App(){
    const [books, setBooks] = useState({});

    return <div>
        <BookList/>
        <BookCreate/>
    </div>;
}

export default App;