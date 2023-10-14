import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ReviewPage() {
    const location = useLocation();
    const bookName  = location.state.name;

    const [reviewCount, setReviewCount] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [currentWord, setCurrentWord] = useState('');
    const words = require(`../../data/${bookName}.json`);

    useEffect(() => {
        const wordKeys = Object.keys(words);
        const randomIndex = Math.floor(Math.random() * wordKeys.length);
        const randomWord = wordKeys[randomIndex];

        setReviewText(randomWord);
        setCurrentWord(words[randomWord]);
    }, [bookName, words]);

    const handleNext = () => {
        setReviewCount(prevCount => prevCount + 1);

        const wordKeys = Object.keys(words);
        const randomIndex = Math.floor(Math.random() * wordKeys.length);
        const randomWord = wordKeys[randomIndex];

        setReviewText(randomWord);
        setCurrentWord(words[randomWord]);
    };

    return (
        <div>
            <h1>复习界面</h1>
            <h2>书籍名称: {bookName}</h2>
            <p>本次复习个数: {reviewCount}</p>
            <p>复习内容: {reviewText}</p>
            <p>当前英语单词: {currentWord}</p>
            <button onClick={handleNext}>下一个</button>
        </div>
    );
}

export default ReviewPage;