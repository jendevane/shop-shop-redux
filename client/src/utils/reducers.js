import * as actionTypes from './types'

const INITIAL_STATE = {
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1',
  cart: [
    {
      _id: '1',
      name: 'Soup',
      purchaseQuantity: 1
    },
    {
      _id: '2',
      name: 'Bread',
      purchaseQuantity: 2
    }
  ],
  cartOpen: false
};
  



function shopReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case actionTypes.ADD_TO_CART:
      const item = state.products.find(prod => prod.id === action.payload.id)
      return {
        ...state,
        cartOpen: true,
        cart: [...state, action.product],
      }

    case actionTypes. ADD_MULTIPLE_TO_CART: return {
      ...state,
      cart: [...state, ...action.products],
    };

    case actionTypes.UPDATE_CART_QUANTITY: return {
      ...state,
      cartOpen: true,
      cart: state.cart.map(product => {
        if (action._id === product._id) {
          product.purchaseQuantity = action.purchaseQuantity;
        }
        return product;
      })
    };

    case actionTypes.REMOVE_FROM_CART: state.cart.filter(product => {
     return product._id !== action._id;
    });

      return {
       ...state,
      
       cart: state.cart.filter(item => item.id !== action.payload.id)
      };

    case actionTypes.CLEAR_CART: return {
      ...state,
      cartOpen: false,
      cart: []
    };

    case actionTypes.TOGGLE_CART: return {
      ...state,
      cartOpen: !state.cartOpen
    };

    case actionTypes.UPDATE_CATEGORIES: return {
      ...state,
      categories: [...action.categories],
    };

    case actionTypes.UPDATE_CURRENT_CATEGORY: return {
      ...state,
      currentCategory: action.currentCategory
    };

    default:
      return state;
  }
};

export function shopreducer() { }
  
