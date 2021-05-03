import React from 'react';
import { Wrapper, ButtonWrapper } from './QuestionCard.style';
// import "./QuizCard.css";

type Props ={
    questions : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNumber : number;
    totalQuestions : number;
}
const QuestionCard: React.FC<Props> = ({
    questions,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
  }) => {
    return (
        <Wrapper>
           <p>Questions: {questionNumber} / {totalQuestions}
           </p>
           <p dangerouslySetInnerHTML={{__html: questions}} />
           <div>
               {answers.map((item,index)=>{
                   return(
                       <ButtonWrapper key={index}
                        correct={userAnswer?.correctAnswer === item}
                        userClicked={userAnswer?.answer === item}
                        >
                           <button onClick={callback} value={item} disabled={userAnswer}>
                               <span dangerouslySetInnerHTML={{__html: item}} />
                           </button>
                       </ButtonWrapper>
                   )
               })}
           </div>
        </Wrapper>
    )
}
export default QuestionCard;