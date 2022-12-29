import style from "./index.module.css";
import plusIcon from "../../assets/plus.svg";
import React, { SetStateAction, useState } from "react";
import { ITask } from "../../models/ITask";
import {v4 as randomUUID} from "uuid";
import { Error } from "../Error";

interface TaskbarProps {
  newTask: string,
  setNewTask: React.Dispatch<SetStateAction<string>>
  setTasks: React.Dispatch<SetStateAction<ITask[]>>
}

export const Taskbar = ({newTask, setNewTask, setTasks}:TaskbarProps) => {

  const [error, setError] = useState<null | string>(null);

  function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>){
    if(error)
      setError(null);
    const value = e.target.value;
    setNewTask(value);
  }

  function handleAddNewTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    if(newTask.trim().length > 0){
      var task: ITask = {
        content: newTask,
        done: false,
        id: randomUUID(),
      };
  
      setTasks(currentState => {
        const newState = currentState.slice();
        newState.unshift(task);
        return newState;
      });
      setNewTask('');
    } else {
      setError("Não é possível registrar uma tarefa vazia!");
    }
  }

  return (
    <>
      <main className={style.main}>
        <input 
          className={style.input}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => handleInputOnChange(e)}
          />
        <button 
          className={style.button}
          onClick={(e) => handleAddNewTask(e)}
          disabled={!!error}
        >
          Criar
          <img className={style.plus} src={plusIcon} />
        </button>
      </main>
      {error && <Error label={error}/> }
      
    </>
  );
};
