import style from "./App.module.css";
import rocket from "./assets/rocket.svg";
import { Taskbar } from "./components/Taskbar";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { ITask } from "./models/ITask";
import { v4 as randomUUID } from "uuid";

function App() {
  const tasks: ITask[] = [
    {
      id: randomUUID(),
      content: "This is a task",
      done: false,
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
  ];

  return (
    <div>
      <Header />
      <main className={style.mainContent}>
        <Taskbar />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
