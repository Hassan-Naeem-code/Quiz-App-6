import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import {fetchQuestions , Difficulty, QuestionState} from './API';
import {GlobalStyle,Wrapper} from './App.styles';

const TOTAL_QUESTIONS = 10;
type AnswerObject = {
  question : string;
  answer : string;
  correct : boolean;
  correctAnswer : string;
}
function App() {
  const [loading,setLoading] = useState(false);
  const [question,setQuestion] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);
  const startQuiz =async()=>{
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY);
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const nextQuestion =async()=>{
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } 
    else{
      setNumber(nextQuestion);
    }
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = question[number].correct_answer === answer;
      if(correct) setScore(prev=>prev + 1);
      const answerObject = {
        question: question[number].question,
        answer,
        correct,
        correctAnswer : question[number].correct_answer
      }
      setUserAnswers(prev=>[...prev,answerObject]);
    }
  };
  console.log('Data hhg',question);
  return (
    <>
    <GlobalStyle />
      <Wrapper>
              <h1>Quiz</h1>
              {
                gameOver || userAnswers.length == TOTAL_QUESTIONS ? (

                  <button className="start" onClick={startQuiz}>Begin Quiz</button>
                ) : null
              }
              {
                !gameOver ?  (
                  <p className="score">Score: {score} </p>
                ) : null
              }
              {
                loading ? (
                  <p>Loading</p>
                ) : null
              }
              {
                !loading && !gameOver ? (
        <QuestionCard 
              questionNumber = {number + 1}
              totalQuestions = {TOTAL_QUESTIONS}
              questions = {question[number].question}
              answers = {question[number].answers}
              userAnswer ={userAnswers ? userAnswers[number] : undefined}
              callback = {checkAnswer}
              />
                ) : null
              }
              {
                !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                  <button onClick={nextQuestion} className="next">Next</button>
                ) : null
              }
      </Wrapper>
    </>
  );
}

export default App;

// https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple
