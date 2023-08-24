import { GET_TASK } from "../actions/actionType"

const initialState={
    task:[]
}
 const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_TASK:
            return {...state.task,task:payload} 
        default:
            return state
    }
}
export default rootReducer