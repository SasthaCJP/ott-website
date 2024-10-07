import React from 'react';
import './App.css';  // Import the CSS file

const ottPlatforms = [
  { name: 'Netflix', url: 'https://www.netflix.com' },
  { name: 'Amazon Prime', url: 'https://www.primevideo.com' },
  { name: 'Disney+ Hotstar', url: 'https://www.hotstar.com' },
  { name: 'Hulu', url: 'https://www.hulu.com' },
  { name: 'HBO Max', url: 'https://www.hbomax.com' },
  { name: 'Apple TV+', url: 'https://tv.apple.com' },
  { name: 'Peacock', url: 'https://www.peacocktv.com' },
  { name: 'Paramount+', url: 'https://www.paramountplus.com' },
  { name: 'YouTube Premium', url: 'https://www.youtube.com/premium' },
  { name: 'Sling TV', url: 'https://www.sling.com' },
  { name: 'Discovery+', url: 'https://www.discoveryplus.com' },
  { name: 'Vudu', url: 'https://www.vudu.com' },
  { name: 'Crackle', url: 'https://www.crackle.com' },
  { name: 'FuboTV', url: 'https://www.fubo.tv' },
  { name: 'Crunchyroll', url: 'https://www.crunchyroll.com' },
  { name: 'Kanopy', url: 'https://www.kanopy.com' },
  { name: 'Tubi TV', url: 'https://tubitv.com' },
  { name: 'Shudder', url: 'https://www.shudder.com' },
  { name: 'Acorn TV', url: 'https://acorn.tv' },
  { name: 'Pluto TV', url: 'https://pluto.tv' },
];

function App() {
  return (
    <div className="app-container">
      <h1>Top 20 OTT Platforms</h1>
      <ul>
        {ottPlatforms.map((platform, index) => (
          <li key={index}>
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              {platform.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
