// src/components/TaskInput.jsx
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField
        label="Add a task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
};

export default TaskInput;
