import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ItemPage from './pages/ItemPage/ItemPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/catalog'} element={<CatalogPage/>}/>
                    <Route path={'/item'} element={<ItemPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
