//rrd import
import { useParams } from "react-router-dom";

// custom hooks
import { useFetch } from "../hooks/useFetch";

// react hooks
import { useEffect } from "react";

// components
import { Test } from "../components";
import Loader from "../components/loader/Loader";

function Quiz() {

  const { title } = useParams();

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://api.jsonsilo.com/public/5fc53cbb-a0bc-41d1-89c6-62861746ac4b`
  );

  let index = 0;
  if (title == "HTML") {
    index = 0;
  } else if (title == "CSS") {
    index = 1;
  } else if (title == "JavaScript") {
    index = 2;
  } else if (title == "Accessibility") {
    index = 3;
  }
  // API error fix end
  // console.log(quizzes && quizzes.quizzes[index])

  return (
    <section className="quiz-container container">
      {isPending && <Loader />}
      {error && <h3>{error.message}</h3>}
      {quizzes && <Test questions={quizzes.quizzes[index]} /> }
    </section>
  );
}

export default Quiz;
