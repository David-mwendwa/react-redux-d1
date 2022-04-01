import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <IceCreamContainer />
        <hr />
        <HooksCakeContainer />
        <hr/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
