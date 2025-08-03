import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Placeholder auction data (should be fetched from backend in real app)
const AUCTIONS = [
  { id: 1, title: "Antique Vase", currentBid: 0.5, image: "/assets/vase.webp", description: "A beautiful antique vase from the 19th century." },
  { id: 2, title: "Vintage Watch", currentBid: 1.2, image: "/assets/vintage watch.webp", description: "A rare vintage watch in excellent condition." },
  { id: 3, title: "Rare Painting", currentBid: 2.8, image: "/assets/painting.avif", description: "A rare painting by a famous artist." },
  { id: 4, title: "Classic Car Model", currentBid: 3.5, image: "/assets/classic car.webp", description: "A collectible classic car model." },
  { id: 5, title: "Old Coin", currentBid: 0.8, image: "/assets/old coin.webp", description: "A rare old coin for collectors." },
  { id: 6, title: "Old Coin", currentBid: 0.8, image: "/assets/old coin.webp", description: "A rare old coin for collectors." },
  { id: 7, title: "Old Coin", currentBid: 0.8, image: "/assets/old coin.webp", description: "A rare old coin for collectors." },
  { id: 8, title: "Old Coin", currentBid: 0.8, image: "/assets/old coin.webp", description: "A rare old coin for collectors." },
];

const AuctionDetails = () => {
  const { id } = useParams();
  const auction = AUCTIONS.find(a => a.id === Number(id));
  const [bid, setBid] = useState(auction ? auction.currentBid + 0.1 : 0);
  const [message, setMessage] = useState("");

  if (!auction) {
    return <div style={{ padding: 32, textAlign: "center" }}>Auction not found.</div>;
  }

  const handleBid = (e) => {
    e.preventDefault();
    if (bid > auction.currentBid) {
      setMessage(`Your bid of ${bid} ETH has been placed!`);
      // In a real app, send bid to backend here
    } else {
      setMessage("Bid must be higher than current bid.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", background: "#fff", borderRadius: 12, boxShadow: "var(--color-shadow)", padding: 32 }}>
      <img src={auction.image} alt={auction.title} style={{ width: "100%", borderRadius: 8, marginBottom: 18, objectFit: "cover", maxHeight: 260 }} />
      <h2 style={{ color: "var(--color-primary)", marginBottom: 8 }}>{auction.title}</h2>
      <div style={{ color: "var(--color-text-secondary)", marginBottom: 16 }}>{auction.description}</div>
      <div style={{ fontSize: 20, marginBottom: 18 }}><strong>Current Bid:</strong> {auction.currentBid} ETH</div>
      <form onSubmit={handleBid} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <input
          type="number"
          min={auction.currentBid + 0.01}
          step="0.01"
          value={bid}
          onChange={e => setBid(Number(e.target.value))}
          style={{ padding: "8px 12px", borderRadius: 6, border: "1px solid #ccc", fontSize: 16, flex: 1 }}
        />
        <button type="submit" style={{ background: "var(--color-primary)", color: "#fff", border: "none", borderRadius: 6, padding: "8px 18px", fontWeight: "bold", fontSize: 16, cursor: "pointer" }}>
          Place Bid
        </button>
      </form>
      {message && <div style={{ color: "var(--color-accent)", marginTop: 8 }}>{message}</div>}
    </div>
  );
};

export default AuctionDetails;