import { useSelector } from "react-redux";

const Footer = () => {
    const count = useSelector(state => state.todo.count)
    return (
		<div className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] translate-y-[-50%]">
			{/* {count>0 && ( */}
				<p className='text-xl'>
					{count} {count > 1 ? " tasks" : " task"} remaning
				</p>
			{/* )} */}
		</div>
	);
}
export default Footer