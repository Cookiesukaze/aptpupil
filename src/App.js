import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import BookInner from './components/BookInner/BookInner';
import ReviewPage from './components/ReviewPage/ReviewPage';
import StudyPage from './components/StudyPage/StudyPage';
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/aptpupil" element={<BookList />} />
                <Route path="/aptpupil/book/:name" element={<BookInner />} />
                <Route path="/aptpupil/review" element={<ReviewPage  />} />
                <Route path="/aptpupil/continue" element={<StudyPage  />} />
                <Route path="*" element={<Navigate to="/aptpupil" />} />
            </Routes>
        </Router>
    );
}

export default App;