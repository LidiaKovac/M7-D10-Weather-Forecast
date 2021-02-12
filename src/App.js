import logo from './logo.svg';
import './App.scss';
import {useState} from 'react'
import Landing from './app/pages/Landing';
import { ThemeContext, initialState } from "./context/theme"
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './app/pages/Dashboard';
function App() {
  const [theme, setTheme] = useState(initialState)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <BrowserRouter>
      <Route exact path ='/'><Landing/></Route>
      <Route exact path ='/forecast'><Dashboard/></Route>
      </BrowserRouter>
    
    </ThemeContext.Provider>
  );
}

export default App;
