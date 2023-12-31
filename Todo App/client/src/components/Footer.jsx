import { useSelector } from "react-redux";

const Footer = () => {
    const count = useSelector(state => state.counter.counter)
    return (
		<div className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] translate-y-[-50%]">
			{count>0 && (
				<p className='text-xl'>
					{count} {count > 1 ? " tasks" : " task"} remaning
				</p>
			)}
			{count === 0 && <p className="text-xl">All tasks completed!</p>}
		</div>
	);
}
export default Footer