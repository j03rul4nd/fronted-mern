import { useState } from "react"
import { useMutation } from "@apollo/client"
import { Getprojects, Create_Project } from "../graphql/projects.js"

export function Projectform() {

    const [project, setProject] = useState({
        name: '',
        description: ''
    });

    const [createproject, {loading, error}] = useMutation(Create_Project, {
      refetchQueries: [
        {
          query: Getprojects, 
        }, 
        
        "Getprojects",

      ],
    });

    const handleChange = ({ target: {name, value}}) => {
        setProject({
            ...project,
            [name]: value,
        })
    }

    const handleSubmit = (e) => { 
      e.preventDefault(); 
      createproject({ 
        variables:{
          name: project.name,
          description: project.description
        }}) 
    }


  return (
    <div >
      <form 
      className="lg:max-w-xl block max-w-sm p-6 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "
      onSubmit={handleSubmit} >
        <label className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add new <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Project</span> </label>
        <input className="mt-5 bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={handleChange}   type="text" name="name" placeholder="Write a title" />
        <textarea 
        className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange} name="description" placeholder="Write a description*"  rows="3"></textarea>

        <button
        className="text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={!project.name || !project.description || loading}
       
        >
            Save
        </button>




      {error && <p> error.message </p>}




      </form>
    </div>
  )
}
