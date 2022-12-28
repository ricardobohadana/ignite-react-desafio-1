import style from "./index.module.css";
import rocket from "../../assets/rocket.svg";

export const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.rocket} src={rocket} alt="rocket"></img>
      <h1 className={style.title}>
        to
        <span className={style.do}>do</span>
      </h1>
    </header>
  );
};
