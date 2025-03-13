// src/App.jsx
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </Container>
  );
};

export default App;
