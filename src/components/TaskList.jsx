// src/components/TaskList.jsx
import { List, Typography } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => (
  <div>
    {tasks.length === 0 ? (
      <Typography variant="h6">No tasks yet!</Typography>
    ) : (
      <List>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => onDelete(index)} />
        ))}
      </List>
    )}
  </div>
);

export default TaskList;
