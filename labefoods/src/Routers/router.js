import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../Pages/Login/login'
import Cart from '../Pages/Cart/cart'
import Feed from '../Pages/Feed/feed'
import Profile from '../Pages/Profile/profile'
import Restaurant from '../Pages/Restaurant/restaurant'
import SignUp from '../Pages/SignUp/signUp'
import SignUpAddress from '../Pages/SignUpAddress/signUpAddress'

const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/feed' element={<Feed/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/feed/:restaurantId' element={<Restaurant/>} />
                <Route path='/signUp' element={<SignUp/>} />
                <Route path='/signUp/address' element={<SignUpAddress/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router 