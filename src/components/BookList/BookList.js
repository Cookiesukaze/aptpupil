import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import book1 from '../../data/扇贝完整乱序.txt';
import book2 from '../../data/扇贝精简乱序.txt';

function BookList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {

        const book1Info = {
            name: '扇贝完整乱序',
            desc: '无描述',
            path: book1
        };

        const book2Info = {
            name: '扇贝精简乱序',
            desc: '无描述',
            path: book2
        };

        setBooks([book1Info, book2Info]);
    }, []);

    const openBook = (book) => {
        navigate(`/aptpupil/book/${book.name}`, { state: book });
    };

    return (
        <div>
            {books.map((book) => (
                <div key={book.name}>
                    <h3>{book.name}</h3>
                    <p>{book.desc}</p>
                    <button onClick={() => openBook(book)}>打开书籍</button>
                </div>
            ))}
        </div>
    );
}

export default BookList;