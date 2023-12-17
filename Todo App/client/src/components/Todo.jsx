import { useDispatch, useSelector } from "react-redux"
import { toggleCheck, deleteTodo } from "../store/slices/todoSlice"
import { increment, decrement } from "../store/slices/counterSlice";
import { Trash2 } from "react-feather";
import Unchecked from "./Unchecked";
import Checked from "./Checked"
const Todo = ({item}) => {
    const dispatch = useDispatch();
	const handleCheck = () => {
		if (!item.checked) {
			dispatch(decrement());
		}
		if(item.checked) {
			dispatch(increment());
		}
		dispatch(toggleCheck(item.id));
	}
	const handleDelete = () => {
		if (!item.checked) {
			dispatch(decrement());
		}
		dispatch(deleteTodo(item.id));
	}
    return (
			<div className='w-full flex gap-5 justify-between items-center'>
				<div onClick={handleCheck} className='flex items-center gap-5'>
					<div >
						{item.checked && <Checked />}
						{!item.checked && <Unchecked />}
					</div>
					<p style={{textDecoration: item.checked ? "line-through" : null}} className='text-[22px] cursor-pointer'>
						{item.item}
					</p>
				</div>
				<Trash2
					size={30}
					role='button'
					onClick={handleDelete}
				/>
			</div>
		);
}
export default Todo