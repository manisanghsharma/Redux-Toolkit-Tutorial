import { useState } from 'react'
import Input from './components/Input';
import Todo from './components/Todo';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import { PenTool } from 'react-feather';

function App() {
  const todos = useSelector(state => state.todo.todos)
  console.log(todos);
  return (
		<div className='max-w-[600px] min-w-[200px] flex-col items-center justify-center mx-auto p-3'>
      <h1 className='text-4xl font-medium mt-5 mb-10 flex items-center gap-3 justify-center'>Toodify <PenTool size={35}/></h1>
			<Input />
			<div className='flex flex-col gap-4 mt-7'>
				{todos.length != 0 && todos.map((item) => (
					<Todo key={item.id} item={item} />
				))}
        {!todos.length && <p className='text-[25px] text-center'>No pending tasks!</p>}
			</div>
      <Footer />
		</div>
	);
}

export default App
