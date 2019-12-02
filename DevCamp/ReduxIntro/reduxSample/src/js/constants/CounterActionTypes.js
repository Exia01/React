export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_INCREMENT = "ADD_INCREMENT";
export const SUBTRACT_INCREMENT = "SUBTRACT_INCREMENT";


//Action Creator 
export const storeResult = (result) => {
    return {type: 'STORE_RESULT', payload: {result}};
}