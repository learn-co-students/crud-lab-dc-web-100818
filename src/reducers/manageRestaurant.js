
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case ('ADD_RESTAURANT'):
       
            let restaurantInfo = {
                text: action.text, 
                id: cuidFn()
            }
            return {
                ...state, restaurants: [...state.restaurants, restaurantInfo ]
            }
        case('DELETE_RESTAURANT'):
            let rest = state.restaurants.filter((restaurant) => restaurant.id !== action.id)
            return {
                ...state, restaurants: rest
            }
        case('ADD_REVIEW'):
            let reviewInfo = {
                text: action.review.review,
                id: cuidFn(),
                restaurantId: action.review.restaurantId
            }
            return {
                ...state, reviews: [...state.reviews, reviewInfo]
            }
        case('DELETE_REVIEW'):
            let reveiwsAfterDeletion = state.reviews.filter((review) => action.id!==review.id )
            return{
                ...state, reviews: reveiwsAfterDeletion
            }
        default:
        return state
    }

}
