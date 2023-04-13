import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage"
import NewsPage from "./pages/NewsPage"
import SingleNews from "./pages/SingleNews";


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/news/:newsId" element={<SingleNews />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}



export default Router;