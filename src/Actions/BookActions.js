export const addBook = (bookDetail) => {
    return {
        type: 'ADD_BOOK',
        payload: bookDetail
    }
}