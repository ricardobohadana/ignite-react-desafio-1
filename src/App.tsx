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
      content: "Task number 1 (done)",
      done: true,
    },
    {
      id: randomUUID(),
      content: "Task number 2",
      done: false,
    },
    {
      id: randomUUID(),
      content: "Task number 3 (done)",
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
