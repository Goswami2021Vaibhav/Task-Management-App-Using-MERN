import React, { useEffect, useState } from "react";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import Task from "../components/Task";
import { showToast } from "../helper/showToast";
const TaskListPage = () => {
    const [referesh, setReferesh] = useState(false)
    const [tasks, setTasks] = useState()
    useEffect(() => {
        setReferesh(false)
        const getTask = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/get-all-task`)
            const responseData = await response.json()
            setTasks(responseData)
        }
        getTask()
    }, [referesh])

    const deleteTask = async (taskid) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/delete-task/${taskid}`, {
                method: 'DELETE'
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setReferesh(true)
            showToast('success', responseData.message)
        } catch (error) {
            showToast('error', error.message)
        }
    }

    return (
        <div className="pt-5">
            <h1 className="text-2xl font-bold mb-5">My Tasks</h1>

            {tasks && tasks.status ?
                tasks.taskData.length > 0 ? tasks.taskData.map((task) => <Task key={task._id} props={task} onDelete={deleteTask} />) : <>0 Task.</>
                :
                <>Loading...</>
            }

        </div>
    );
};

export default TaskListPage;