import style from "./index.module.css";
import plusIcon from "../../assets/plus.svg";
import React, { SetStateAction } from "react";
import { ITask } from "../../models/ITask";
import {v4 as randomUUID} from "uuid";

interface TaskbarProps {
  newTask: ITask,
  setNewTask: React.Dispatch<SetStateAction<ITask>>
  setTasks: React.Dispatch<SetStateAction<ITask[]>>
}

export const Taskbar = ({newTask, setNewTask, setTasks}:TaskbarProps) => {

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>){
    const value = e.target.value;

    setNewTask((task) => ({
      ...task,
      content: value
    }));
  }

  function handleAddNewTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    var task = {
      ...newTask,
      id: randomUUID(),
    }

    setTasks(currentState => {
      const newState = currentState.slice();
      newState.push(task);
      return newState;
    })

    setNewTask({
      id: "",
      content: "",
      done: false,
    })
  }

  return (
    <main className={style.main}>
      <input 
        className={style.input}
        placeholder="Adicione uma nova tarefa"
        value={newTask.content}
        onChange={(e) => handleInputOnChange(e)}
      />
      <button 
        className={style.button}
        onClick={(e) => handleAddNewTask(e)}
      >
        Criar
        <img className={style.plus} src={plusIcon} />
      </button>
    </main>
  );
};
