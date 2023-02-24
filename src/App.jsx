import React from 'react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Projects } from "./pages/Projects.jsx";
import { ProjectTasks } from "./pages/ProjectTasks.jsx";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className=" m-auto  flex gap-1 items-center justify-center">
      <Routes>
          <Route path="/" element={<Navigate to="/projects" ></Navigate>} ></Route>
          <Route path='/projects' element={<Projects></Projects>} ></Route>
          <Route path='/projects/:id' element={<ProjectTasks></ProjectTasks>} ></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

