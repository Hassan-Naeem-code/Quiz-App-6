import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';

function App() {
  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);
  const startQuiz =async()=>{};
  const nextQuestion =async()=>{};
  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startQuiz}>Begin Quiz</button>
      <p className="score">Score:</p>
      <p>Loading</p>
      <QuestionCard />
      <button onClick={nextQuestion} className="next">Next</button>
    </div>
  );
}

export default App;

// https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple
