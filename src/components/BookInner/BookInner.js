import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bookProgress from "../../data/bookProgress";

function BookInner() {
    const [learnedCount, setLearnedCount] = useState(0);
    const [unlearnedCount, setUnlearnedCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state;

    useEffect(() => {
        const progress = bookProgress[book.name];

        if (progress) {
            setLearnedCount(progress.learnedCount);
            setUnlearnedCount(progress.unlearnedCount);
        }
    }, [book]);

    const handleReview = () => {
        navigate('/review', {
            state: book // 替换为实际的书名
        });
    };

    const handleContinue = () => {
        navigate(`/continue`);
    };

    return (
        <div>
            <h1>{book.name}</h1>
            <p>{book.desc}</p>

            <p>已学习: {learnedCount} 个单词</p>
            <p>未学习: {unlearnedCount} 个单词</p>

            <button onClick={handleReview}>复习</button>
            <button onClick={handleContinue}>继续学习</button>
        </div>
    );
}

export default BookInner;