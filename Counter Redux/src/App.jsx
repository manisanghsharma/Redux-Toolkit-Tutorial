import { Plus, Minus } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/slices/counter';
function App() {

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(increment());
  }
  const dec = () => {
    dispatch(decrement());
  }
  return (
		<div className='w-full h-screen flex items-center justify-center'>
			<button onClick={inc} className='p-1 border-4 border-black rounded-lg hover:text-white hover:bg-black transition-all'>
				<Plus size={45} />
			</button>
			<div>
        <p className='text-5xl mx-10'>{count}
        </p>
      </div>
			<button onClick={dec} className='p-1 border-4 border-black rounded-lg hover:text-white hover:bg-black transition-all'>
				<Minus size={45} />
			</button>
		</div>
	);
}

export default App
