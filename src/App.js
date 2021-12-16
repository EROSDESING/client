import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Container } from '@mui/material'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          {/* Edit Router */}
          <Route path="/tasks/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
