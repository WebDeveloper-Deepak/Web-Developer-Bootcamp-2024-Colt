import * as React from 'react';
import { List, Box, Typography } from '@mui/material';

import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useEffect } from 'react';

const initialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));

    if (!data) {
        return [];
    } else {
        return data;
    }
}

export default function TodoList() {

    const [todos, setTodos] = useState(initialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    };

    const addTodo = (text) => {
        setTodos(prevTodo => {
            return [...prevTodo, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 5,
        }}>
            <Typography variant='h2' component="h1" sx={{flexGrow: 1}}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        remove={removeTodo}
                        toggle={() => toggleTodo(todo.id)}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );
};