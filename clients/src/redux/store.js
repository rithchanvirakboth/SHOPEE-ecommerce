import React from 'react'
import { createStore } from 'redux';
import rootReducer from './Reducers/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

function DataProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default DataProvider