import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/Books";

function BookList({ books, onEdit, onDelete }) {
    const {count, incrementCount} = useContext(BooksContext);


    const renderedBooks = books.map((book) => {
        return (<BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />);
    });

    return (<div className="book-list">
        {value}
        {renderedBooks}
    </div>);

}

export default BookList;