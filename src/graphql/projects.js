import { gql } from "@apollo/client";
export const Getprojects = gql`
{
    projects {
        _id
        name
        description
    }
}
`

export const Create_Project = gql`

mutation (
    $name: String,
    $description: String
    ){
        createProject(name: $name, description: $description){
            _id
            name
            description
        }
    }


`;

export const get_project = gql`
query getProject($id: ID!) {
  project(_id: $id) {
    _id
   name 
   createdAt
    description
    updatedAt
    
    tasks {
      _id
      title
      createdAt
      updatedAt
    }
   
  }
}

`

export const DELETE_PROJECT = gql`
	mutation DeleteProject($id: ID!) {
		deleteProject(_id: $id) {
			_id
		}
	}
`;