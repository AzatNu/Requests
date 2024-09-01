import style from "./App.module.css";
import { useState, useEffect } from "react";
export const App = () => {
  const [TODOLIST, setTODOLIST] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTODOLIST(json));
  }, []);

  return (
    <div className={style["App"]}>
      <h1 className={style["title"]}>TODOLIST</h1>
      <div className={style["content"]}>
        {TODOLIST.map((item) => (
          <div className={style["item"]} key={item.id}>
            <input className={style["checkbox"]} type="checkbox" />
            {item.id} --- {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
