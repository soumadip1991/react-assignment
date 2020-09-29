import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './Actions/ValueActions';


const App = (props) => {
  console.log('called');
  return (
    <div className="App">
      <h1>This is a Redux App</h1>
      <div className='side-by-side'>
        <button onClick={props.increment}>Increment</button>
      </div>
      <div className='side-by-side'>
        <button onClick={props.decrement}>Decrement</button>
      </div>
      <div>The Value is {props.value}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => { dispatch(increment()) },
    decrement: () => { dispatch(decrement()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
