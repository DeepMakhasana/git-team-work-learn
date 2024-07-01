import { Link } from "react-router-dom"


const Todo = ({ todo }) => {
    return (
        <div>
            <Link to={`/todo/${todo?.id}`}>
                <p>{todo?.title}</p>
            </Link>
        </div>
    )
}

export default Todo