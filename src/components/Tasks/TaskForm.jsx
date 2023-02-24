import {useMutation} from '@apollo/client'
import {Create_task} from '../../graphql/Tasks.js'
import {useParams} from 'react-router-dom'
export function Tasksform() {
    const [creartarea] = useMutation(Create_task, {
        refetchQueries: ["getProject"],
      });
    const params = useParams();
  const handleSubmit = async (e) =>{

    e.preventDefault();
   const data = await creartarea({
        variables:{
            title: e.target.title.value,
            projectId: params.id
        }
    });
    console.log(data);
    e.target.reset();
    e.target.title.focus();
  }
    return (
        <form 
        className="block max-w-sm p-6 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
        onSubmit={handleSubmit}>
            <input 
            className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='New task'
            type="text" name="title" />
            <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Add task</button>
        </form>
    )
}
