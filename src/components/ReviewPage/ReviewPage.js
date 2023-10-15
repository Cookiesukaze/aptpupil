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
        const theme="" +
            "健康：饮食习惯、锻炼方式、心理健康、健康管理...\n" +
            "自然：山水风景、季节变化...\n" +
            "个人成长：目标设定、学习方法、自我反思、挑战克服...\n" +
            "职业生涯：职业规划、职业发展、技能培养、工作环境...\n" +
            "冷知识：有趣的事实、文化知识、奇特现象、历史趣闻...\n" +
            "美食：烹饪方法、烹饪技巧、食材选择..."
        const payload = {
            messages: [
                {
                    role: 'user',
                    content:  "英语单词："+randomWord+"。使用给定的英语单词，造一个不生硬的简单的英语句子，希望能容易看出句子中这个英语单词的意思。按照“造句：...，翻译：...”格式返回一个英语句子和中文翻译，不需要多余的结构。"
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