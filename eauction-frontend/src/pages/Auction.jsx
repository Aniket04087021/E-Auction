import React, { useState } from "react";
import { Link } from "react-router-dom";
import auctionCategories from "../data/auctions.json"; // Adjust path based on your project structure

const Auction = () => {
  const categoryTitles = {
    antiques: "Antiques",
    art: "Art & Paintings",
    vehicles: "Vehicles",
    jewelry: "Jewelry",
    collectibles: "Collectibles",
  };

  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to 'all' auctions

  // Combine all auctions for the 'all' category
  const allAuctions = Object.values(auctionCategories).flat();

  // Determine which auctions to display
  const displayedAuctions =
    selectedCategory === "all"
      ? allAuctions
      : auctionCategories[selectedCategory] || [];

  return (
    <div className="home-container">
      {/* Subcategory Selector */}
      <div className="category-selector">
        <button
          className={`category-button ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All Auctions
        </button>
        {Object.keys(auctionCategories).map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {categoryTitles[category]}
          </button>
        ))}
      </div>

      {/* Auction Grid */}
      <div className="auction-category-section">
        <h3 className="section__title"></h3>
        <div className="auction-grid">
          {displayedAuctions.length > 0 ? (
            displayedAuctions.map((auction) => (
              <div key={auction.id} className="auction-card">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="auction-image"
                />
                <h4 className="auction-title">{auction.title}</h4>
                <div className="auction-bid">
                  <strong>Current Bid:</strong> {auction.currentBid}
                </div>
                <Link to={`/auction/${auction.id}`} className="view-button">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No auctions found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auction;
