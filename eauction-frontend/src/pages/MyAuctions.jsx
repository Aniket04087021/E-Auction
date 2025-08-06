import React from "react";
import { Link } from "react-router-dom";
import auctionCategories from "../data/auctions.json"; // Adjust path based on your project structure

const MyAuctions = () => {
  // Combine all auctions and filter by userId
  const myAuctions = Object.values(auctionCategories)
    .flat()
    .filter((auction) => auction.userId === "user123");

  return (
    <div className="my-auctions-container">
      <h2 className="my-auctions-heading">My Auctions</h2>
      <div className="auction-grid">
        {myAuctions.length > 0 ? (
          myAuctions.map((auction) => (
            <div className="auction-card" key={auction.id}>
              <img
                src={auction.image}
                alt={auction.title}
                className="auction-image"
              />
              <h3 className="auction-title">{auction.title}</h3>
              <div className="auction-bid">
                <strong>Current Bid:</strong> {auction.currentBid}
              </div>
              <div
                className={`auction-status ${
                  auction.status === "Active" ? "active" : "ended"
                }`}
              >
                {auction.status}
              </div>
              <Link to={`/auction/${auction.id}`} className="auction-button">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No auctions found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default MyAuctions;
