
import './App.css';
import Header from './Header/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Main/Home/Home/Home';
import AddItem from './Main/AddItem/AddItem';
import SignUp from './Main/Login/SignUp/SignUp';
import Login from './Main/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
