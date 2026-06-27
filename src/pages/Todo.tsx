import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo } from "../features/slices/TodoSlice"
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import type { TodoItem } from "../features/slices/TodoSlice"
import type { RootState } from "../store/store";

const Todo = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const intRef = useRef<HTMLInputElement>(null);
  const todos = useSelector((state: RootState) => state.todos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && document.activeElement === intRef.current) {
        btnRef.current?.click();
      }
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    }

  }, []);


  const [todo, setTodo] = useState<TodoItem>({
    id: uuidv4(),

    dets: "",
  });

  const delTodo = (val: string) => {
    dispatch(deleteTodo(val));
    toast("X Delete Todo");
  };

  const edit = (todo: TodoItem) => {
    setTodo({ ...todo, dets: todo.dets });
    dispatch(deleteTodo(todo.id));
  };

  const add = () => {
    if (todo.dets.length < 3) {
      toast("Todo should be at least 3 charaters long")
    } else if (todos.some((item) => item.dets === todo.dets)) {
      toast("Todo already existed");
    } else {
      dispatch(addTodo(todo));
      toast("New todo Add");
      setTodo({ id: uuidv4(), dets: "" });
    }
  }

  const [checkedTodos, setCheckedTodos] = useState<TodoItem[]>(() => {
    const checkedTodosStored = localStorage.getItem("checkedTodos");
    return checkedTodosStored ? JSON.parse(checkedTodosStored) : [];
  });


  useEffect(() => {
    localStorage.setItem("checkedTodos", JSON.stringify(checkedTodos))
  }, [checkedTodos]);

  const handleCheckboxChange = (todo: TodoItem) => {
    setCheckedTodos((prev) =>
      prev.some((item) => item.id === todo.id)
        ? prev.filter((item) => item.id !== todo.id)
        : [...prev, todo]
    );
  };


  return (
    <>
      <div className="bg-[#111] width container mx-auto text-white min-h-screen ">
        <h2 className="text-white font-semibold text-2xl text-center py-12">TODO LIST</h2>
        <div className="max-w-lg w-full mx-auto px-4 flex gap-3 max-[350px]:flex-col max-[350px]:gap-y-3">
          <input
            ref={intRef}
            required
            value={todo.dets}
            onChange={(e) => setTodo({ ...todo, dets: e.target.value })}
            className="flex-1 border border-gray-500 p-3 rounded-lg focus:border-[#fa0060] focus:outline-none" type="text" placeholder="Add Todo" />
          <button
            id="Add"
            ref={btnRef}
            onClick={add}
            className="px-6 py-3 border border-gray-500 rounded-lg"
          >
            {" "}
            Add{" "}
          </button>
        </div>

        <div className="mx-6 max-sm:mx-2">
          {todos.length === 0 ? (
            <p className="text-center border border-gray-500 py-2 mx-4 rounded-lg text-gray-400 mt-16 my-5">List Is Empty...</p>
          ) : (
            <div className="">
              {todos.map((e, i) => (
                <div key={i} className=" mt-16 border border-gray-500 p-8 rounded-lg flex justify-between items-center gap-2 m-2 max-[350px]:flex-col max-[350px]:gap-y-6">
                  <p className={`${checkedTodos.some((item) => item.id === e.id)
                    ? "text-pink-400 line-through"
                    : ""
                    }  text-xl rounded-full flex justify-between items-center gap-2 `}>

                    <div className="">
                      <label htmlFor={`checkbox-${e.id}`} className="checkbox-btn">
                        <input type="checkbox"
                          id={`checkbox-${e.id}`}
                          onChange={() => handleCheckboxChange(e)}
                          checked={checkedTodos.some((item) => item.id === e.id)}
                          className=""
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <label
                      style={{ userSelect: "none" }}
                      htmlFor={`checkbox-${e.id}`}
                      className="checkbox-label text-2xl font-medium cursor-pointer"
                    >
                      {e.dets}
                    </label>
                  </p>


                  <div className="flex gap-4 ">
                    <button
                      onClick={() => delTodo(e.id)}
                      className=" text-white border border-gray-500 px-4 py-4 rounded-2xl uppercase cursor-pointer max-[350px]:px-3 max-[350px]:py-0"><MdDeleteForever /></button>

                    <span className="">
                      {checkedTodos.some((item) => item.id === e.id) ? (
                        ""
                      ) : (
                        <button onClick={() => edit(e)} className=" text-white border border-gray-500 p-4 rounded-2xl uppercase cursor-pointer max-[350px]:p-3">
                          <CiEdit />
                        </button>
                      )}
                    </span>

                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Todo