
import './App.css';
import Header from './Header/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Main/Home/Home/Home';
import AddItem from './Main/AddItem/AddItem';
import SignUp from './Main/Login/SignUp/SignUp';
import Login from './Main/Login/Login/Login';
import Blogs from './Main/Blogs/Blogs';
import RequireAuth from './Main/Login/RequireAuth/RequireAuth';
import AllItem from './Main/AllItem/AllItem';
import MyItems from './Main/MyItems/MyItems/MyItems';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/manageitems' element={<RequireAuth><AllItem></AllItem></RequireAuth>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
