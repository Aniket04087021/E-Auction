import React, { useState } from "react";
import { useParams } from "react-router-dom";
import auctionCategories from "../data/auctions.json"; // Adjust path based on your project structure

const AuctionDetails = () => {
  const { category, id } = useParams();
  const auctions =
    category && auctionCategories[category]
      ? auctionCategories[category]
      : Object.values(auctionCategories).flat();
  const auction = auctions.find((a) => a.id === Number(id));
  const [bid, setBid] = useState(
    auction ? Number(auction.currentBid.replace(" ETH", "")) + 0.1 : 0
  );
  const [message, setMessage] = useState("");

  if (!auction) {
    return <div className="auction-not-found">Auction not found.</div>;
  }

  const handleBid = (e) => {
    e.preventDefault();
    const currentBidValue = Number(auction.currentBid.replace(" ETH", ""));
    if (bid > currentBidValue) {
      setMessage(`Your bid of ${bid.toFixed(2)} ETH has been placed!`);
      // In a real app, send bid to backend here
    } else {
      setMessage("Bid must be higher than the current bid.");
    }
  };

  return (
    <div className="auction-details-container">
      <div className="auction-details-content">
        <div className="auction-details-main">
          <div className="auction-card auction-details-card">
            <img
              src={auction.image}
              alt={auction.title}
              className="auction-image auction-details-image"
            />
            <h2 className="auction-title">{auction.title}</h2>
            <p className="auction-description">{auction.description}</p>
            <div className="auction-bid">
              <strong>Current Bid:</strong> {auction.currentBid}
            </div>
            <form onSubmit={handleBid} className="bid-form">
              <input
                type="number"
                min={Number(auction.currentBid.replace(" ETH", "")) + 0.01}
                step="0.01"
                value={bid.toFixed(2)}
                onChange={(e) => setBid(Number(e.target.value))}
                className="bid-input"
                aria-label="Enter your bid amount"
              />
              <button type="submit" className="view-button">
                Place Bid
              </button>
            </form>
            {message && <div className="bid-message">{message}</div>}
          </div>
        </div>
        <div className="auction-history">
          <h3 className="history-title">Bid History</h3>
          {auction.history.length > 0 ? (
            <ul className="history-list">
              {auction.history.map((entry, index) => (
                <li key={index} className="history-item">
                  <span>{entry.bidder}</span> bid{" "}
                  <strong>{entry.amount}</strong> on {entry.timestamp}
                </li>
              ))}
            </ul>
          ) : (
            <p className="history-empty">No bids yet.</p>
          )}
        </div>
      </div>
      <div className="auction-stats">
        <h3 className="stats-title">Auction Stats</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <strong>Starting Bid:</strong> {auction.stats.startingBid}
          </div>
          <div className="stat-item">
            <strong>Number of Bids:</strong> {auction.stats.bidCount}
          </div>
          <div className="stat-item">
            <strong>Start Time:</strong> {auction.stats.startTime}
          </div>
          <div className="stat-item">
            <strong>End Time:</strong> {auction.stats.endTime}
          </div>
          <div className="stat-item">
            <strong>Category:</strong> {auction.stats.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
