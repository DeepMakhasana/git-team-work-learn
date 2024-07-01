import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const TodoInfo = () => {
    const [todo, setTodo] = useState({});
    const { id } = useParams();

    const todoFetch = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json();
        console.log(data);
        setTodo(data);
    }

    useEffect(() => {
        todoFetch(id);
    }, [])

    return (
        <div>
            <p>User id: {id}</p>
            <h1>Title: {todo.title}</h1>
            <p>isCompeted: {todo.completed ? "Yes" : "No"}</p>
        </div>
    )
}

export default TodoInfo