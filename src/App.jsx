import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  async function fetchTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
    setTodo(data);
  }

  useEffect(() => {
    fetchTodo();
  }, [count])

  return (
    <Container component="main" maxWidth="lg">
      <Hero />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography component="p" variant='h5' mb={2}>Count: {count}</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button sx={{ paddingX: 4 }} variant='contained' onClick={() => setCount(pre => pre + 1)}>Increment</Button>
          <Button variant='contained' onClick={() => setCount(pre => pre - 1)}>Decrement</Button>
        </Box>
      </Box>
      <Box component="section">
        <Typography component="h1" variant='h4' mt={4}>
          Todo List
        </Typography>
        <Grid container spacing={4} mt={4}>
          {
            todo.map((todo) => (
              <Grid key={todo.id} item xs={6} sm={4} lg={3} padding={0}>
                <Todo todo={todo} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
      <Typography component="p" mt={2}>
        Footer
      </Typography>
    </Container>
  )
}

export default App
