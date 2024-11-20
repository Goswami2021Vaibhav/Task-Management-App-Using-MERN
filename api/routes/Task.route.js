import express from 'express'
import { createTask, deleteTask, getAllTask, showTask, updateTask } from '../controllers/Task.controller.js'

const Taskrouter = express.Router()

Taskrouter.post('/create-task', createTask)
Taskrouter.get('/get-all-task', getAllTask)
Taskrouter.get('/show-task/:taskid', showTask)
Taskrouter.put('/update-task/:taskid', updateTask)
Taskrouter.delete('/delete-task/:taskid', deleteTask)

export default Taskrouter