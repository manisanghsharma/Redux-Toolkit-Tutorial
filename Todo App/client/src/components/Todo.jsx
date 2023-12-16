import { useDispatch, useSelector } from "react-redux"
import { toggleCheck, deleteTodo } from "../store/slices/todoSlice"
import { Trash2 } from "react-feather";
import Unchecked from "./Unchecked";
import Checked from "./Checked"
const Todo = ({item}) => {
    const dispatch = useDispatch();
    return (
			<div className='w-full flex gap-5 justify-between items-center'>
				<div className='flex items-center gap-5'>
					<div onClick={() => dispatch(toggleCheck(item.id))}>
						{item.checked && <Checked />}
						{!item.checked && <Unchecked />}
					</div>
					<p style={{textDecoration: item.checked ? "line-through" : null}} onClick={() => dispatch(toggleCheck(item.id))} className='text-[22px] cursor-pointer'>
						{item.item}
					</p>
				</div>
				<Trash2
					size={30}
					role='button'
					onClick={() => dispatch(deleteTodo(item.id))}
				/>
			</div>
		);
}
export default Todo