import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import BookInner from './components/BookInner/BookInner';
import ReviewPage from './components/ReviewPage/ReviewPage';
import StudyPage from './components/StudyPage/StudyPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:name" element={<BookInner />} />
                <Route path="/review" element={<ReviewPage  />} />
                <Route path="/continue" element={<StudyPage  />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;