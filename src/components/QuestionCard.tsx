import React from 'react';

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
        <div>
           <p>Questions: {questionNumber} / {totalQuestions}
           </p>
           <p dangerouslySetInnerHTML={{__html: questions}} />
           <div>
               {answers.map((item,index)=>{
                   return(
                       <div key={index}>
                           <button onClick={callback} value={item} disabled={userAnswer}>
                               <span dangerouslySetInnerHTML={{__html: item}} />
                           </button>
                       </div>
                   )
               })}
           </div>
        </div>
    )
}
export default QuestionCard;