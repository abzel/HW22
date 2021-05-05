import { ADD_ORDER1 } from "../actions";
import { ADD_ORDER } from "../actions";

const defaultState = {
    orders: [],
    totalPrice: 0,
    totalCount: 0,
};

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            // findIndex
            let is_chosen = state.orders.findIndex(
                (item) => item.title === action.payload.title
            );

            if (is_chosen !== -1) {
                //стордун orders ключтун копиясын жасайбыз
                let arr = [...state.orders];
                // orders тен is_chosen индекс менен бизге керектуу элементтти таап count деген ключун перезапись кылабыз
                arr[is_chosen].count = arr[is_chosen].count + 1;
                arr[is_chosen].sum = arr[is_chosen].sum + action.payload.price;
                return {
                    ...state,
                    orders: arr,
                };
            } else {
                return {
                    ...state,
                    orders: [
                        ...state.orders,
                        {
                            title: action.payload.title,
                            price: action.payload.price,
                            count: 1,
                            sum: action.payload.price
                        },
                    ],
                };
            };

        case ADD_ORDER1:
            // findIndex
            let is_chosen1 = state.orders.findIndex(
                (item) => item.title === action.payload.title
            );

            if (is_chosen1 !== -1) {
                //стордун orders ключтун копиясын жасайбыз
                let arr = [...state.orders];
                // orders тен is_chosen индекс менен бизге керектуу элементтти таап count деген ключун перезапись кылабыз
                arr[is_chosen1].count = arr[is_chosen1].count - 1;
                arr[is_chosen1].sum = arr[is_chosen1].sum - action.payload.price;
                return {
                    ...state,
                    orders: arr,
                };
            } else {
                return {
                    ...state,
                    orders: [
                        ...state.orders,
                        {
                            title: action.payload.title,
                            price: action.payload.price,
                            count: 1,
                            sum: action.payload.price
                        },
                    ],
                };
            }

        default:
            return state;
    }
};