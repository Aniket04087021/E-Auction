import React from "react";
import { Link } from "react-router-dom";

const Auction = () => {
  // Placeholder auction data with images
  const auctions = [
    { id: 1, title: "Antique Vase", currentBid: "0.5 ETH", image: "/assets/vase.webp" },
    { id: 2, title: "Vintage Watch", currentBid: "1.2 ETH", image: "/assets/vintage watch.webp" },
    { id: 3, title: "Rare Painting", currentBid: "2.8 ETH", image: "/assets/painting.avif" },
    { id: 4, title: "Classic Car Model", currentBid: "3.5 ETH", image: "/assets/classic car.webp" },
    { id: 5, title: "Old Coin", currentBid: "0.8 ETH", image: "/assets/old coin.webp" },
    { id: 6, title: "Old Coin", currentBid: "0.8 ETH", image: "/assets/old coin.webp" },
    { id: 7, title: "Old Coin", currentBid: "0.8 ETH", image: "/assets/old coin.webp" },
    { id: 8, title: "Old Coin", currentBid: "0.8 ETH", image: "/assets/old coin.webp" },

  ];

  return (
    <div style={{ maxWidth: 1200, margin: "40px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32, color: "var(--color-primary)" }}>Active Auctions</h2>
      <div className="auction-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 24,
        justifyContent: "center"
      }}>
        {auctions.map((auction) => (
          <div
            key={auction.id}
            style={{
              background: "var(--color-surface)",
              borderRadius: 12,
              boxShadow: "var(--color-shadow)",
              padding: 24,
              textAlign: "center",
              transition: "box-shadow 0.2s",
              color: "var(--color-text)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              src={auction.image}
              alt={auction.title}
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 12,
                boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
                maxWidth: 240
              }}
            />
            <h3 style={{ margin: "0 0 12px", color: "var(--color-primary)" }}>{auction.title}</h3>
            <div style={{ fontSize: 18, marginBottom: 16, color: "var(--color-text-secondary)" }}>
              <strong>Current Bid:</strong> {auction.currentBid}
            </div>
            <Link
              to={`/auction/${auction.id}`}
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "8px 18px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 16,
                transition: "background 0.2s",
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <style>{`
        @media (min-width: 900px) {
          .auction-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 899px) and (min-width: 600px) {
          .auction-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 599px) {
          .auction-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Auction;