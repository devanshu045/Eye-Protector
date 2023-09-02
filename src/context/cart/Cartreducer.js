import { SINGLE_ITEM, ADD_TO_CART, REMOVE_ITEM } from "../Type";



const Cartreducer = (state,action) => {
      switch (action.type) {
        case ADD_TO_CART:{
            return{
                ...state,
                cartItem:[...state.cartItem,action.payload],

            }
        }
        case REMOVE_ITEM:{
                return{
                    ...state,
                    cartItem: state.cartItem.filter(
                        (item) => item._id !== action.payload
                      ),
                }
        }

        case SINGLE_ITEM:{
            return{
                ...state,
                singleItem:[action.payload],
            }
        }
        
        default:
            return state;
      }
}

export default Cartreducer