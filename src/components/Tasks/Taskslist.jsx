import { TaskCard } from "./TaskCard.jsx";

export function Taskslist({tasks}) {
  return (
    <div>
      {tasks.map(task =>(
        <TaskCard task={task} key={task._id} ></TaskCard>
      ))}
    </div>
  )
}

