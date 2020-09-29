const initialState = {
    books: []
}
const BookReducers = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return {...state, books:[...state.books,action.payload]}
        default : 
            return state;
    }
}

export default BookReducers;