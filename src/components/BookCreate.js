import { useState } from "react";

function BookCreate({onCreateBook}){
    const [title, setTitle] = useState('');    
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreateBook(title);
        setTitle('');
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input onChange={handleChange} value={title}/>
            <button>Create!</button>
        </form>
    </div>;
}

export default BookCreate;