
import groceryItems from "./grocery-list.json";
import {createSelector} from "reselect";


// Actions

const INIT_GROCERY_LIST = 'INIT_GROCERY_LIST';
const ADD_TO_GROCERY_LIST = 'ADD_TO_GROCERY_LIST';
const CLEAR_GROCERY_LIST = 'CLEAR_GROCERY_LIST';
const UPDATE_PANTRY = 'UPDATE_PANTRY';
const DEBIT_ACCOUNT = 'DEBIT_ACCOUNT';


// Action creators

export const initGroceryList = () => {
    return {
        type: INIT_GROCERY_LIST
    };
};

export const addToGroceryList = (item) => {
    return {
        type: ADD_TO_GROCERY_LIST,
        payload: item
    };
};

export const clearGroceryList = () => {
    return {
        type: CLEAR_GROCERY_LIST
    };
};

export const updatePantry = (items) => {
    return {
        type: UPDATE_PANTRY,
        payload: {
            items
        }
    };
};

export const debitAccount = (amount) => {
    return {
        type: DEBIT_ACCOUNT,
        payload: {
            amount
        }
    };
};


// Initial state

const initialState = {
    groceryItems: [],
    groceryList: {},
    pantry: {},
    account: [
        { credit: 100.0, debit: 0, balance: 100.0 }
    ]
};


// Reducer

export function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case INIT_GROCERY_LIST:
            return {
                ...state,
                groceryItems
            };
        case ADD_TO_GROCERY_LIST: {
            const {name} = payload;
            return {
                ...state,
                groceryList: {
                    ...state.groceryList,
                    [name]: (state.groceryList[name] || 0) + 1
                }
            }
        }
        case CLEAR_GROCERY_LIST:
            return {
                ...state,
                groceryList: {}
            };
        case UPDATE_PANTRY: {
            const {items} = payload;
            return {
                ...state,
                pantry: items.reduce((pantry, item) => {
                    const {name, quantity} = item;
                    pantry[name] = (pantry[name] || 0) + quantity;
                    return pantry;
                }, { ...state.pantry })
            }
        }
        case DEBIT_ACCOUNT: {
            const {balance} = state.account[state.account.length - 1];
            const {amount} = payload;
            return {
                ...state,
                account: [
                    ...state.account,
                    { credit: 0, debit: amount, balance: balance - amount }
                ]
            }
        }
        default:
            return state;
    }
}


// Selectors

const currentPantryState = (state) => state.pantry;

export const currentGroceryItemsSelector = createSelector(
    currentPantryState,
    ({groceryItems}) => ({
        groceryItems
    })
);

export const currentGroceryListSelector = createSelector(
    currentPantryState,
    ({groceryItems, groceryList}) => {
        groceryList = Object
            .entries(groceryList)
            .map(([name, quantity]) => {
                const item = groceryItems.find(item => item.name === name);
                const unitPrice = item ? item.price : 0;
                const price = unitPrice * quantity;
                return { name, quantity, unitPrice, price };
            });
        return {
            groceryList,
            totalPrice: groceryList.reduce((p, i) => p + i.price, 0),
            totalQuantity: groceryList.reduce((q, i) => q + i.quantity, 0)
        };
    }
);

export const currentPantryInventorySelector = createSelector(
    currentPantryState,
    ({pantry}) => ({
        pantry
    })
);

export const currentPantryAccountSelector = createSelector(
    currentPantryState,
    ({account}) => ({
        account
    })
);
