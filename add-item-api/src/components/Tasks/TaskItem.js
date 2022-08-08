import "../Tasks/TaskItem.css";

const TaskItem = (props) => {
  return <li className="li-style">{props.children}</li>;
};

export default TaskItem;
