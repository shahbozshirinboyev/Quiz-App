// import react
import { useState } from "react";

function Test({ questions: { color, icon, questions, title } }) {
    const [answeredQuestions, setAnsweredQuestions] = useState(1);
    const [correctAnswerCount, setcorrectAnswerCount] = useState(0);
    const [questionIndex, setquestionIndex] = useState(0);
    const [selectedAnswer, setAselectedAnswer] = useState(null);
    const [answerStatus, setanswerStatus] = useState(null);
    const [statusDisabled, setstatusDisabled] = useState(false);
    const [showNextButton, setshowNextButton] = useState(false);
  return <section className="test-container container">
    <div className="text-content">1</div>
    <div className="text-questions">2</div>
    <div>1:33:02</div>
  </section>;
}

export default Test;
