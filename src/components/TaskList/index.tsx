import { ITask } from "../../models/ITask";
import style from "./index.module.css";
import clipboard from "../../assets/clipboard.svg";
import { Task } from "../Task";

interface TaskListProps {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const createdTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.done).length;

  return (
    <>
      <main className={style.main}>
        <p className={style.created}>
          Tarefas criadas{" "}
          <span className={style.taskCount}>{createdTasks}</span>
        </p>
        <p className={style.done}>
          Concluídas <span className={style.taskCount}>{doneTasks}</span>
        </p>
      </main>
      <main className={style.tasks}>
        {createdTasks > 0 ? (
          tasks.map((t) => (
            <Task
              key={t.id}
              {...t}
              handleOnClickDoneCheckbox={() => {}}
              handleOnClickDelete={() => {}}
            />
          ))
        ) : (
          <div className={style.noTask}>
            <img src={clipboard} alt="clipboard" />
            <p className={style.mainMessage}>
              Você ainda não tem tarefas cadastradas <br />
              <span>Crie tarefas e Organize seus itens a fazer</span>
            </p>
          </div>
        )}
      </main>
    </>
  );
};
