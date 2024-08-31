// rrd imports
import { Link } from "react-router-dom";

// hooks custom
import { useFetch } from "../hooks/useFetch";

// components
import Loader from "./loader/Loader";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://api.jsonsilo.com/public/5fc53cbb-a0bc-41d1-89c6-62861746ac4b");
  return (
    <div>
      {isPending && <Loader/> }
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.quizzes.map((item) => {
            return (
              <Link
                to={`/quiz/${item.title}`}
                key={item.title}
                className="menu-item header-logo"
              >
                <figure className={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
