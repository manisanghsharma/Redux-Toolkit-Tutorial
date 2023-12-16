# Redux-Toolkit
Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.

# Understanding Redux 
![Redux](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## Store
There is a single store which contains all the states inside your application.

The only way to change the state is to dispatch an action, an object describing what happened. 

## Action

Action is just a text describing what happened, it work not tells how the state changes.

Example: In a counter app. If you want to increment the counter, you need to dispatch an action with type: `'INCREMENT'`. 

If you want to decrement the counter, you need to dispatch an action with type: `'DECREMENT'`.

## Reducer

Reducer is a function that takes the current state and an action as arguments, and returns a new state result. 

Redux Example: 
```js   
    const counterReducer = (state = 0, action) => {
        switch(action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }
```

In redux toolkit, we use `createSlice` to create a reducer. A store can have multiple slices. Each slice can contain multiple actions.
This way state management becomes easy.

```js
    const counterSlice = createSlice({
        name: 'counter',
        initialState: 0,
        reducers: {
            increment: state => state + 1,
            decrement: state => state - 1
        }
    })
```
`initialState` is the initial value of the state, that is `0`.Here increment and decrement are actions. Based on the action type, the reducer will return a new state ie. `state + 1` or `state - 1`.

## Dispatch

Dispatch is used to send actions to the store, in order to update the state.
In redux toolkit, we use `useDispatch` hook to dispatch actions.

```js
    const dispatch = useDispatch();
    dispatch(increment());
```

## Selector
Selectors are functions that are used to read a value from the store.

In redux toolkit, we use `useSelector` hook to select a value from the store.

```js
    const counter = useSelector(state => state.counter);
```

## Configuring Redux-Toolkit in React App

### 1. Install Redux Toolkit & React Redux
```bash
    npm install @reduxjs/toolkit react-redux
```

### 2. Create a store
Create a file  `store.js` in `src` folder and add the following code.

```js
    import { configureStore } from '@reduxjs/toolkit';
    import Slice Name from 'Slice Location';

    export default configureStore({
        reducer: {Slice Name}
    })
```

This store will contain all the reducers.

### 3. Wrap the app with Provider
Wrap the app with `Provider` component from `react-redux` and pass the store as a prop.

```js
    import { Provider } from 'react-redux';
    import store from './store';

    <Provider store={store}>
        <App />
    </Provider>
```

### 4. Create a Slice
Again, slices are just reducers with actions. Create a folder slices in `src` folder and make a file `counter.js` and add the following code.

```js
    import { createSlice } from '@reduxjs/toolkit';

    const counterSlice = createSlice({
        name: 'counter',
        initialState: 0,
        reducers: {
            increment: state => state + 1,
            decrement: state => state - 1
        }
    })

    export const { increment, decrement } = counterSlice.actions;
    export default counterSlice.reducer;
```

use `createSlice` to create a slice. Here `name` is the name of the slice, `initialState` is the initial value of the state and `reducers` is an object containing all the actions.

Lastly, export the actions and reducer using `export` keyword.

### 5. Add the slice to the store
Import the slice in `store.js` and add it to the `reducer` object.

Note: Don't use curly braces while importing the slice.

```js
    import counterReducer from '.slices/counterSlice';

    export default configureStore({
        reducer: {
            counter: counterReducer
        }
    })
```

### 6. Dispatch actions
Import the actions in the component where you want to dispatch the actions.

```js
    import { increment, decrement } from './slices/counterSlice';
```

Use `useDispatch` hook to dispatch the actions. Always make a variable `dispatch` and use it to dispatch the actions as `useDispatch` is a hook and can't be used inside a function.

```js
    const dispatch = useDispatch();
    dispatch(increment());
```

### 7. Select values from the store

Import the selector in the component where you want to select the value from the store.

```js
    import { useSelector } from 'react-redux';
```

Use `useSelector` hook to select the value from the store.

```js
    const counter = useSelector(state => state.counter);
```

Here the slice name `counter` must match with the reducer name in `store.js`.