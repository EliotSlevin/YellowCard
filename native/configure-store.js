import { createStore, applyMiddleware } from 'redux';
import { createRootEpicMiddleware, createRootReducer } from './modules/root'

export default function configureStore() {
  const rootEpicMiddleware = createRootEpicMiddleware()
  const rootReducer = createRootReducer()

  const store = createStore(
    rootReducer,
    applyMiddleware(rootEpicMiddleware)
  );

  return store;
}
