//rrd import
import { useParams } from "react-router-dom";

// custom hooks
import { useFetch } from "../hooks/useFetch";

// react hooks
import { useEffect } from "react";

// components
import { Test } from "../components";

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
    `https://run.mocky.io/v3/85d154a6-2e13-4ac1-aeb2-1e246e684fa5?title=${title}`
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
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {quizzes && <Test questions={quizzes.quizzes[index]} /> }
    </section>
  );
}

export default Quiz;
