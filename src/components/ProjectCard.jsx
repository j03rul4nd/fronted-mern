import { useNavigate } from "react-router-dom";

export function ProjectCard({project}) {

  const navigate = useNavigate();
  return (
    <div
    className="lg:max-w-xl mb-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h2>
      <p
      className="font-normal text-gray-700 dark:text-gray-400"
      >{project.description}</p>
    </div>
  )
}
