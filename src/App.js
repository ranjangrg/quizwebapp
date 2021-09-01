
import './App.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import AppHeader from './components/header';
import AppWrapper from './components/appWrapper';

const global_store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (<Provider store={global_store}>
    <div className="App">
      <AppHeader />
      <AppWrapper />
    </div>
  </Provider>);
}

export default App;
