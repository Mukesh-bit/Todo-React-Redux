import { useDispatch, useSelector } from "react-redux";
import { deleteTodo} from "../features/todoSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();



  return (
    <>
      <div className="todoListContainer">

        {/* here we shows the all input values of a user */}
        {todos.map((todo) => (
          <div className="todoList" key={todo.id}>
            <li>{todo.text}
            
            <button onClick={() => dispatch(deleteTodo(todo.id))} type="button" class="btn btn-danger"><i class="ri-delete-bin-2-line"></i></button>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodosList;
