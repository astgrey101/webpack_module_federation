import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "remixicon/fonts/remixicon.css"

import "./index.scss";

import Header from "home/Header"
import Footer from "home/Footer"
import SafeComponent from "./SafeComponent"
import PDPContent from "pdp/PDPContent"
import HomeContent from "home/HomeContent"
import CartContent from "cart/CartContent"

const MainLayout = () => (
    <Router>
        <div className="text-3xl mx-auto max-w-6xl">
            <SafeComponent>
                <Header />
            </SafeComponent>
            <div className='my-10'>
                <Routes>
                    <Route path="/product/:id" element={<PDPContent />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    </Router>
);
