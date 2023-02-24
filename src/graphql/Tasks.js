import {gql} from "@apollo/client";

export const Create_task = gql`

mutation($title: String, $projectId: ID){
  createTask(title: $title, projectId: $projectId) {
    title
    project {
      _id
    }
  }
}

`;
export const DeleteTask = gql`
	mutation ($id: ID!) {
		deleteTask(_id: $id) {
			_id
			title
		}
	}
`