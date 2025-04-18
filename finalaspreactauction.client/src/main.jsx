import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Account from './Account/Account';
import AddCar1 from './Components/Fetch/AddCar1';
import AdminSide from './Components/Admin/AdminSide';
import CarList from './Components/Fetch/CarList';
import AdminLayout from './Components/Page/AdminLayout';
import NotFound from './Components/Page/NotFound';
import GetCarByMake from './Components/Fetch/GetCarByMake';
import UpdateMakeForm from './Components/Admin/UpdateMake';
import UpdateModelForm from './Components/Admin/UpdateModel';
import ResponsiveAutoExample from './Components/Example/ResponsiveAutoExample';
import ExitAnimation from './Components/Example/Animation';
import GetCarById from './Components/Fetch/GetCarById';
import { Link } from 'react-router-dom';

const button = {
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#0f1115",
    cursor: "pointer",
    fontSize: "16px",
    height: "min-content",
    textDecoration: "none",
    margin: "10px"
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} key={location.key} />
                <Route path="/login" element={<Account />} key={location.key} />
                <Route path="/car/:id" element={<GetCarById />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<ResponsiveAutoExample />} />
                    <Route path="addNew" element={<ExitAnimation />} />
                    <Route path="delete" element={<CarList />} />
                    <Route path="addmakeormodel" element={<AdminSide />} />
                    <Route path="UpdateMakeForm" element={<UpdateMakeForm />} />
                    <Route path="UpdateModel" element={<UpdateModelForm />} />
                    <Route path="adminside" element={<div className="m-2 flex flex-row px-3 gap-2">
                        {<AdminSide  />}
                        {<ExitAnimation />}
                        <Link to="/admin/delete" style={button}>Delete</Link>
                    </div>} key={location.key} />
                </Route>

                <Route path={`/getCarByBrand/:id`} element={<GetCarByMake />} key={location.key}></Route>
                <Route path="*" element={<NotFound />} key={location.key}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
