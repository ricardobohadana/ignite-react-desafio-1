import style from "./index.module.css";
import plusIcon from "../../assets/plus.svg";

export const Taskbar = () => {
  return (
    <main className={style.main}>
      <input className={style.input} placeholder="Adicione uma nova tarefa" />
      <button className={style.button}>
        Criar
        <img className={style.plus} src={plusIcon} />
      </button>
    </main>
  );
};
