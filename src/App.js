
import './App.css';
import Another from './components/Another';
import Auth from './components/Auth';
import AuthObj from './components/AuthObj';
import {ArrayProvider}  from './components/context'
import Product from './components/Product';


function App() {
  // const [authstatus, setauthstatus] = useState(false);
  // const login = () => {
  //   setauthstatus(true);
  // }
  return (
    <div className="App">
       < ArrayProvider>
        <Auth/>
        <Another/> 
        <AuthObj/>
     
        </ ArrayProvider> 
    </div>
  );
}

export default App;
