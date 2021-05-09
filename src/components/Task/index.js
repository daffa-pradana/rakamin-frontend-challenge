import React from 'react'
import Progress from '../Progress'
import { TaskDescription, TaskProgress, TaskWrapper } from './TaskComponents'

const Task = () => {
    return (
        <TaskWrapper>
            <TaskDescription>
                Re-designed the zero-g doggie bags. No more Spills!
            </TaskDescription>
            <TaskProgress>
                <Progress progress={'20%'}/>
            </TaskProgress>
        </TaskWrapper>
    )
}

export default Task
