import style from "./App.module.css";
import rocket from "./assets/rocket.svg";
import { Taskbar } from "./components/Taskbar";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { ITask } from "./models/ITask";
import { v4 as randomUUID } from "uuid";
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: randomUUID(),
      content: "This is a task",
      done: true,
    },
    {
      id: randomUUID(),
      content: "This is a task",
      done: false,
    },
    {
      id: randomUUID(),
      content: "This is a task",
      done: true,
    },
  ]);
  return (
    <div>
      <Header />
      <main className={style.mainContent}>
        <Taskbar newTask={newTask} setNewTask={setNewTask} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </main>
    </div>
  );
}

export default App;
