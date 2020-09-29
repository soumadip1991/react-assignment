const initialState = {
    value: 0
}
const ValueReducers = (state = initialState, action) => {
    console.log('red')
    switch(action.type){
        case 'INCREMENT_ASYNC':
            return {...state, value: state.value +1}
        case 'DECREMENT':
            return {...state, value: state.value -1}
        default : 
            return state;
    }
}

export default ValueReducers;