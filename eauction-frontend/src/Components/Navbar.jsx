import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", search);
    setShowMobileSearch(false);
  };

  

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__row">
          <div className="navbar__brand">
            <span className="navbar__brand-e">Bid</span>
            <span className="navbar__brand-auction">-Sphere</span>
          </div>
          <div className="navbar__icons">
            <button
              className="hamburger"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger__icon">{open ? "\u2715" : "\u2630"}</span>
            </button>
            <button
              className="navbar__search-icon"
              style={{ display: showMobileSearch ? 'none' : undefined }}
              onClick={() => setShowMobileSearch(true)}
              aria-label="Show search"
            >
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
          <div className="desktop-links">
            <Link to="/" className="desktop-links__link">Home</Link>
            <Link to="/auction" className="desktop-links__link">Auctions</Link>
            <Link to="/my-auctions" className="desktop-links__link">My Auctions</Link>
          </div>
        </div>
        <form
          onSubmit={handleSearchSubmit}
          className={`navbar__search-form${showMobileSearch ? ' navbar__search-form--mobile-active' : ''}`}
          style={{ display: showMobileSearch ? 'flex' : undefined }}
        >
          <input
            type="text"
            placeholder="Search auctions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="navbar__search-input"
            autoFocus={showMobileSearch}
          />
          <button type="submit" className="navbar__search-button">Search</button>
          <button
            type="button"
            className="navbar__search-close"
            onClick={() => setShowMobileSearch(false)}
            aria-label="Close search"
          >
            ✕
          </button>
        </form>
      </div>
      {open && (
        <div className="navbar__mobile-menu">
          <Link to="/" className="navbar__mobile-link" onClick={() => setOpen(false)}>Home</Link>
          
          <Link to="/auction" className="navbar__mobile-link" onClick={() => setOpen(false)}>Auctions</Link>

          <Link to="/my-auctions" className="navbar__mobile-link" onClick={() => setOpen(false)}>My Auctions</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;