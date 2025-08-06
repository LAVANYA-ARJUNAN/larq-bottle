import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './Contents/Nav.css'
import Larq from './Contents/Home';

import './Contents/styles.css';
import Bottles from './Contents/Shop';
import Water from './Contents/Water';
import Bottles1 from './Contents/Bottles';
// import Cart from './Contents/Cart';
import Pitchers from './Contents/Pitchers';
import Technology from './Contents/Technology';
import './Contents/Navbar.css';
import './Contents/Larq.css';

import Cart from './Contents/Cart';
import Dashboard from './admin/Dashboard';
import Upload from './admin/Upload';
import Update from './admin/Update';
import Create from './Contents/Create';
import Register from './Contents/Register';
import Signin from './Contents/Signin';
import Bottledash from './admin/Bottledash';
import Pitchersdash from './admin/Pitchersdash';
import Shopall from './admin/Shopall';
import UploadPitcher from './admin/UploadPitcher';
import UploadShop from './admin/UploadShop';
import Pitcherupdate from './admin/Pitcherupdate';
import Shopupdate from './admin/Shopupdate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Larq/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/shop' element={<Bottles/>}></Route>
        <Route path='/water' element={<Water/>}></Route>
        <Route path='/bottle' element={<Bottles1/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/pitchers' element={<Pitchers/>}></Route>
        <Route path='/tech' element={<Technology/>}></Route>
        <Route path='/admin' element={<Dashboard/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/uploadpit' element={<UploadPitcher/>}></Route>
        <Route path='/uploadshop' element={<UploadShop/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/bottles' element={<Bottledash/>}></Route>
        <Route path='/shops' element={<Shopall/>}></Route>
        <Route path='/pitcher' element={<Pitchersdash/>}></Route>
        <Route path='/shopupdate/:id' element={<Shopupdate/>} loader={({params})=>fetch(`http://localhost:4000/shopone/${params.id}`)}></Route>
        <Route path='/pitupdate/:id' element={<Pitcherupdate/>} loader={({params})=>fetch(`http://localhost:4000/onepitcher/${params.id}`)}></Route>
        <Route path='/update/:id' element={<Update/>} loader={({params})=>fetch(`http://localhost:4000/oneproduct/${params.id}`)}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
