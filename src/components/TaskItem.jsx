// src/components/TaskItem.jsx
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";


const TaskItem = ({ task, onDelete }) => (
  <ListItem
    secondaryAction={
      <IconButton edge="end" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    }
  >
    <ListItemText primary={task} />
  </ListItem>
);

export default TaskItem;
