import React from "react";
 // Make sure to create this file

const myAuctions = [
  {
    id: 101,
    title: "Signed Football",
    currentBid: "0.9 ETH",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    status: "Active",
  },
  {
    id: 102,
    title: "Rare Comic Book",
    currentBid: "1.5 ETH",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    status: "Ended",
  },
  {
    id: 103,
    title: "Vintage Camera",
    currentBid: "2.1 ETH",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    status: "Active",
  },
  {
    id: 104,
    title: "Classic Guitar",
    currentBid: "3.0 ETH",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    status: "Ended",
  },
];

const MyAuctions = () => (
  <div className="my-auctions-container">
    <h2 className="auctions-heading">My Auctions</h2>
    <div className="auction-grid">
      {myAuctions.map((auction) => (
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
          <button className="auction-button">View Details</button>
        </div>
      ))}
    </div>
  </div>
);

export default MyAuctions;
