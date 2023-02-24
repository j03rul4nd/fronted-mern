import { useMutation } from "@apollo/client";
import {DeleteTask} from '../../graphql/Tasks.js'
export function TaskCard({task}) {
  const [deleteTask] = useMutation(DeleteTask, {
     refetchQueries: ["getProject"]
  })
    return (
      <div
      className="block max-w-sm p-6 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
      >
        <h1 className="mb-2" >{task.title}</h1>
        <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"

        onClick={() => {deleteTask(
          {
            variables:
            { 
              id: task._id
            } 
          }
          )}}
        >Delete task</button>
      </div>
    )

}
