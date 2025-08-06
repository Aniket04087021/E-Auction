Bid-Sphere Auction Platform
Bid-Sphere is a React-based web application for browsing, bidding on, and managing auctions across various categories such as antiques, art, vehicles, jewelry, and collectibles. It features a clean user interface, category filtering, user-specific auction views, and detailed auction pages with bid history and statistics.
Table of Contents

Features
Project Structure
Setup Instructions
Usage
Components
Data Structure
Routing
Styling
Future Enhancements
Contributing
License

Features

Browse Auctions: View auctions by category (e.g., antiques, art) or all auctions, with a responsive grid layout.
Category Filtering: Select specific categories to filter auctions dynamically.
Auction Details: View detailed information for each auction, including description, current bid, bid history, and stats (starting bid, bid count, start/end time, category).
User-Specific Auctions: Display auctions associated with the user (e.g., created or bid on) in the "My Auctions" section.
Responsive Design: Mobile-friendly layout with a two-column view for auction details on desktop and stacked layout on mobile.
Centralized Data: Auction data stored in a single auctions.json file for easy maintenance.
Routing: Supports routes like /auction/:id and optionally /auction/:category/:id for navigation.
Accessibility: Includes ARIA attributes (e.g., aria-label on bid input) for better accessibility.

Project Structure
bid-sphere/
├── public/
│   ├── assets/                   # Image assets (e.g., vase.webp, football.webp)
│   ├── index.html               # Main HTML file
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Auction.jsx          # Displays auction grid with category filter
│   │   ├── AuctionDetails.jsx   # Shows detailed auction info, bid form, history, and stats
│   │   └── MyAuctions.jsx       # Lists user-specific auctions
│   ├── data/
│   │   └── auctions.json        # Centralized auction data
│   ├── App.css                  # Global styles
│   ├── App.jsx                  # Main app component with routing
│   ├── index.jsx                # Entry point
│   └── index.css                # Additional global styles (if needed)
├── package.json                 # Project dependencies and scripts
├── README.md                    # This file
└── .gitignore                   # Git ignore file

Setup Instructions

Clone the Repository:
git clone https://github.com/your-repo/bid-sphere.git
cd bid-sphere


Install Dependencies:Ensure Node.js (v16 or higher) is installed. Then run:
npm install

Required dependencies:

react
react-dom
react-router-dom


Add Image Assets:Place auction images in public/assets/ matching paths in auctions.json (e.g., /assets/vase.webp, /assets/football.webp). Add a fallback image (/assets/fallback.webp) for error handling.

Run the Application:Start the development server:
npm start

The app will run at http://localhost:3000.

Build for Production:Create a production build:
npm run build

The output will be in the build/ directory.


Usage

Browse Auctions: Navigate to /auction to view all auctions or filter by category (e.g., Antiques, Art & Paintings).
View Auction Details: Click "View Details" on an auction card to visit /auction/:id (e.g., /auction/11) for detailed info, bid history, and stats. Place bids using the form (currently client-side only).
My Auctions: Go to /my-auctions to see auctions associated with the user (filtered by userId: "user123" in auctions.json).
Responsive Design: Test on mobile devices to ensure the layout adapts (e.g., auction details stack vertically on screens < 768px).

Components

Auction.jsx:
Displays a grid of auctions with a category selector.
Filters auctions by category (all, antiques, art, etc.).
Links to /auction/:id for each auction.
Uses auctions.json for data.


AuctionDetails.jsx:
Shows detailed auction info (image, title, description, current bid).
Includes a bid form, bid history, and stats (starting bid, bid count, start/end time, category).
Supports routes /auction/:id and /auction/:category/:id.


MyAuctions.jsx:
Lists auctions where userId matches the current user (hardcoded as "user123").
Displays title, current bid, status (Active/Ended), and a link to /auction/:id.



Data Structure
The auction data is stored in src/data/auctions.json with the following structure:
{
  "category": [
    {
      "id": Number,           // Unique ID (e.g., 11, 21)
      "title": String,        // Auction title (e.g., "Antique Vase")
      "currentBid": String,   // Current bid (e.g., "0.5 ETH")
      "image": String,        // Image path (e.g., "/assets/vase.webp")
      "description": String,  // Auction description
      "history": [           // Bid history
        {
          "bidder": String,  // Bidder name
          "amount": String,  // Bid amount (e.g., "0.4 ETH")
          "timestamp": String // Bid timestamp (e.g., "2025-08-05 10:00 AM")
        }
      ],
      "stats": {             // Auction stats
        "startingBid": String, // Starting bid (e.g., "0.3 ETH")
        "bidCount": Number,    // Number of bids
        "startTime": String,   // Start time (e.g., "2025-08-04 08:00 AM")
        "endTime": String,     // End time (e.g., "2025-08-10 20:00:00 +0530")
        "category": String     // Category name (e.g., "Antiques")
      },
      "status": String,      // "Active" or "Ended"
      "userId": String|null  // User ID (e.g., "user123") or null
    }
  ]
}


Categories: antiques, art, vehicles, jewelry, collectibles.
Unique IDs: 11–14 (antiques), 21–23 (art), 31–33 (vehicles), 41–43 (jewelry), 51–56 (collectibles).
Images: Stored in public/assets/ (e.g., /assets/vase.webp).

Routing
The app uses react-router-dom with the following routes:

/auction: Displays all auctions (Auction.jsx).
/auction/:id: Shows auction details (AuctionDetails.jsx).
/my-auctions: Lists user-specific auctions (MyAuctions.jsx).
Optional: /auction/:category/:id (supported by AuctionDetails.jsx).

Example router setup in App.jsx:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auction from "./components/Auction";
import AuctionDetails from "./components/AuctionDetails";
import MyAuctions from "./components/MyAuctions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auction" element={<Auction />} />
        <Route path="/auction/:id" element={<AuctionDetails />} />
        <Route path="/auction/:category/:id" element={<AuctionDetails />} />
        <Route path="/my-auctions" element={<MyAuctions />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

Styling
Styles are defined in src/App.css with CSS custom properties for consistency:

--color-primary: Main brand color (e.g., blue).
--color-accent: Secondary color (e.g., gradient or pink).
--color-text, --color-text-secondary, --color-surface, --color-shadow: Text and background styles.
Responsive design with media queries for mobile (max-width: 767px, 599px, etc.).
Key classes:
home-container, auction-grid, auction-card: Auction list layout.
category-selector, category-button: Category filter buttons.
auction-details-container, auction-details-content, auction-history, auction-stats: Two-column layout for auction details.
my-auctions-container, my-auctions-heading, auction-status: User auction styles.



Future Enhancements

Backend Integration: Replace auctions.json with an API (e.g., /api/auctions, /api/user/auctions) using useEffect for dynamic data fetching.
User Authentication: Add login/register functionality to dynamically filter MyAuctions based on the authenticated user’s ID.
Real-Time Bidding: Implement WebSocket or polling for live bid updates in AuctionDetails.
Search and Sort: Add search bar and sorting options (e.g., by bid amount, end time) in Auction and MyAuctions.
Pagination: Paginate long auction lists in Auction and MyAuctions.
Countdown Timer: Display a countdown for stats.endTime in AuctionDetails using a library like date-fns.
Image Fallback: Add a fallback image for missing assets in all components.
Accessibility: Enhance with aria-live for bid updates and role="region" for history/stats sections.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure:

Code follows ESLint/Prettier standards (if configured).
Tests are added for new features (if testing framework is set up).
Image assets are added to public/assets/ for new auction items.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Last updated: August 6, 2025, 2:26 PM IST
