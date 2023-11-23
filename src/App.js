import { useEffect, useContext } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BooksContext from './context/Books';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    //used to run code in specific point in time
    //in this case runs on initial render only
    useEffect(() => { 
        fetchBooks();
    }, [fetchBooks]);
    

    return <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>;
}

export default App;