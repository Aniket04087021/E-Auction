import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import MyAuctions from "./pages/MyAuctions";
import Footer from "./Components/Footer";
import AuctionDetails from "./pages/AuctionDetails";
import Auction from "./pages/Auction";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auction/:id" element={<AuctionDetails />} />
        <Route path="/my-auctions" element={<MyAuctions />} />
        <Route path="/Auction" element={<Auction/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
