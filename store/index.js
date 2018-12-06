import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import reducer from './reducer';
import initalState from './state';

const enhancers = compose(
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' ?
    window.devToolsExtension && window.devToolsExtension() :
    f => f
)
const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}
const createStoreWithMiddleware = applyMiddleware()(createStore);
export default state => createStoreWithMiddleware(reducer, initalState, enhancers);