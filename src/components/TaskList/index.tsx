import { ITask } from "../../models/ITask";
import style from "./index.module.css";
import clipboard from "../../assets/clipboard.svg";
import { Task } from "../Task";
import { SetStateAction, useState } from "react";
import {v4 as randomUUID} from "uuid"
import { DoneTask } from "../DoneTask";

interface TaskListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<SetStateAction<ITask[]>>
}

export const TaskList = ({tasks, setTasks}: TaskListProps) => {
  

  const createdTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.done).length;

  function handleOnClickDoneCheckbox(id: string) {
    let index = 0;
    tasks.forEach((t, i) => {
      if(t.id === id)
      index = i; 
    })
    
    var newTasks = tasks.slice();
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  function handleOnClickDelete(id: string){
    setTasks((currentState) => currentState.filter(state => state.id !== id));
  }

  return (
    <>
      <main className={style.main}>
        <p className={style.created}>
          Tarefas criadas{" "}
          <span className={style.taskCount}>{createdTasks}</span>
        </p>
        <p className={style.done}>
          Concluídas{" "}
          <span className={style.taskCount}>
            {doneTasks} de {createdTasks}
          </span>
        </p>
      </main>
      <main className={style.tasks}>
        {createdTasks > 0 ? (
          tasks.sort((a, b) => Number(a.done) - Number(b.done)).map((t) => (
            t.done ? 
            <DoneTask 
              key={t.id}
              {...t}
              handleOnClickDoneCheckbox={handleOnClickDoneCheckbox}
              handleOnClickDelete={handleOnClickDelete}
            /> :
            <Task
              key={t.id}
              {...t}
              handleOnClickDoneCheckbox={handleOnClickDoneCheckbox}
              handleOnClickDelete={handleOnClickDelete}
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
