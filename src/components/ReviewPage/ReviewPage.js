import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ReviewPage() {
    const accessToken = '24.b2345398488190e56c88620c988d3d7e.2592000.1699923576.282335-41070384';
    const url = `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/eb-instant?access_token=${accessToken}`;

    const location = useLocation();
    const bookName = location.state.name;
    const [reviewCount, setReviewCount] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [currentWord, setCurrentWord] = useState('');
    const words = require(`../../data/${bookName}.json`);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetchData().then();
        // eslint-disable-next-line
    }, [bookName]);

    const fetchData = async () => {
        const wordKeys = Object.keys(words);
        const randomIndex = Math.floor(Math.random() * wordKeys.length);
        const randomWord = wordKeys[randomIndex];
        const theme="美食、健康、自然、个人成长、科学、职业生涯、生活常识、冷知识"
        const payload = {
            messages: [
                {
                    role: 'user',
                    content:  "英语单词："+randomWord+"主题列表："+theme+"。使用给定的英语单词，在主题列表中只选择一个来构造简单的英语句子，确保句子能够清楚地表达单词的意思。按照“主题：...，造句：...，翻译：...”格式返回，不需要多余的结构。"
                }
            ]
        };

        setReviewText(randomWord);
        setCurrentWord(words[randomWord]);

        try {
            const result = await axios.post(url, payload);
            setResponse(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleNext = () => {
        setReviewCount(prevCount => prevCount + 1);

        fetchData().then();
    };

    return (
        <div>
            <h1>复习界面</h1>
            <h2>书籍名称: {bookName}</h2>
            <p>本次复习个数: {reviewCount}</p>
            <p>复习内容: {reviewText}</p>
            <p>当前英语单词: {currentWord}</p>
            <p>返回结果: {response?.result}</p>
            <button onClick={handleNext}>下一个</button>
        </div>
    );
}

export default ReviewPage;