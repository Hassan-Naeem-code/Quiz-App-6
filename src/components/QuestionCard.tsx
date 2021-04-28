import React from 'react'

type Props ={
    questions : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNumber : number;
    totalQuestions : number;
}
const QuestionCard= () => {
    return (
        <div>
           <p>Question
               {/* Questions: {questionNumber} / {totalQuestions} */}
           </p>
           {/* <p dangerouslySetInnerHTML={{_html: questions}} />
           <div>
               {answers.map((item,index)=>{
                   return(
                       <div key={index}>
                           <button onClick={callback} disabled={userAnswer}>
                               <span dangerouslySetInnerHTML={{_html: item}} />
                           </button>
                       </div>
                   )
               })}
           </div> */}
        </div>
    )
}
export default QuestionCard;