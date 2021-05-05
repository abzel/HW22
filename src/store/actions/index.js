export const ADD_ORDER = "ADD_ORDER";

// export const add_order = () => {
//   return {
// type: ADD_ORDER,
//   };
// };

export const add_order = (item) => ({
    type: ADD_ORDER,
    payload: item
});

export const ADD_ORDER1 = "ADD_ORDER1";

// export const add_order = () => {
//   return {
// type: ADD_ORDER,
//   };
// };

export const add_order1 = (item) => ({
    type: ADD_ORDER1,
    payload: item
});