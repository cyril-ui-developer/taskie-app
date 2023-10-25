const Task = ({ task }) => (
  <>
    <h5 className="title">{task.title} </h5>
    <p className="description">
      {task.description}
    </p>
  </>
)
export default Task