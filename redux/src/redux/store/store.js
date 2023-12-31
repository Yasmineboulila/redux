import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export default store;