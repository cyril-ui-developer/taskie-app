import Accordion from './Accordion'

const Task = ({ task , onDeleteTask, onToggleTaskStatus}) => (

<>

<Accordion key={task.id} title={task.title} id={task.id} active={task.active}>
              
              <label
                className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                htmlFor={task.id}
              >
                <input
                className=""
                type="checkbox"
                id={task.id}
                value={task.completed}
                checked={task.completed}
                 onChange={()=> onToggleTaskStatus(task.id)}
              />
                 <span className={`${task.completed ? 'ml-4 text-sm  line-through' : 'ml-4 text-sm '}`}>{task.description}</span>
            </label>
              
<span className='my-2 grid justify-items-end'>
  <button className="hover:bg-red-400 group  rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" 
              type="button"
              onClick={() => onDeleteTask(task.id)}
            >
              
              Delete
            </button>
            </span>
            </Accordion>
            </>
)
export default Task

