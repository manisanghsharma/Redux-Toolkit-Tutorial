import { Plus } from "react-feather"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const Input = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addItem = (e) => {
        e.preventDefault();
        if(input){
            dispatch(addTodo(input));
			setInput("");
        }
    }
  return (
        <form className="max-w-full min-w-[200px] flex items-center gap-3 " onSubmit={addItem}>
            <input type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border-[3px] border-black rounded-lg w-full py-3 pl-5 outline-none text-xl"
                placeholder="Enter a task..."
            />

            <button className="h-full p-[2px] border-[3px] border-black rounded-lg">
                <Plus size={45} />
            </button>
        </form>
  )
}
export default Input