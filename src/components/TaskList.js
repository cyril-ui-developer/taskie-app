import Task from './Task'

const TaskList = ({ tasks }) => (
    <div>
      <div>
        {tasks.map(task => (
          <div className="solid" key={task.id} >
            <Task task={task} />
          </div>
        ))}
  
      </div>
    </div>
  )

  export default TaskList