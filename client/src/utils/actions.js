import * as actionTypes from './types'

export const addtoCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}
export const updateProducts = (itemID,value) => {
    return {
        type: actionTypes.UPDATE_PRODUCTS,
        payload: {
            id: itemID,
            qty:value
        }
    }
    
}
export const addMultipleToCart = (itemID,value) => {
    return {
        type: actionTypes.ADD_MULTIPLE_TO_CART,
        payload: {
            id: itemID,
            qty: value
        }
    }
    
}
export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            qyt: itemID
        }
    }
    
}
export const clearCart = (itemID) => {
    return {
        type: actionTypes.CLEAR_CART,
        payload: {
            id: itemID
        }
    }
    
}
export const updateCartQuantity = (itemID,value) => {
    return {
        type: actionTypes.UPDATE_CART_QUANTITY,
        payload: {
            id: itemID,
            qty: value
        }
    }
    
}
export const toggleCart = (itemID) => {
    return {
        type: actionTypes.TOGGLE_CART,
        payload: {
            id: itemID
        }
    }
    
}
export const updateCatagories = (itemID, value) => {
    return {
        type: actionTypes.UPDATE_CATEGORIES,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const updateCurrentCatagory = (itemID,value) => {
    return {
        type: actionTypes.UPDATE_CURRENT_CATEGORY,
        payload: {
            id: itemID,
            qty:value
        }
    }
    
}