import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import {
    signedUpUserLoginReducer,
    userSignUpReducer
} from './reducers/userReducers';
import {
    businessSignUpReducer,
    signedUpBusinessLoginReducer
} from './reducers/businessReducer';

const reducer = combineReducers({
    //this will contain our reducers
    signedUpUserLogin: signedUpUserLoginReducer,
    signedUpBusinessLogin: signedUpBusinessLoginReducer,
    userSignUp: userSignUpReducer,
    businessSignUp: businessSignUpReducer

})

const userInfoFromStorage = localStorage.getItem("signedUpUserInfo") ?
    JSON.parse(localStorage.getItem("signedUpUserInfo")) :
    null;

const businessInfoFromStorage = localStorage.getItem('signedUpBusinessInfo') ?
    JSON.parse(localStorage.getItem("signedUpBusinessInfo")) :
    null;

const InitialState = {
    signedUpUserLoginReducer: {
        signedUpUserInfo: userInfoFromStorage
    },
    signedUpBusinessLoginReducer: {
        signedUpBusinessInfo: businessInfoFromStorage
    }
};



// eslint-disable-next-line no-unused-vars
const businessInitialState = {
    signedUpBusinessLoginReducer: {
        signedUpBusinessInfo: businessInfoFromStorage
    }
}


const middleware = [thunk]

const store = createStore(
    reducer,
    InitialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store