# Sinag ☀️

## Features

- 🔍 Location search (geocoded via Geocodify)
- ☀️ Current and peak UV index for the day
- 🧴 Safe exposure time broken down by skin type (I–VI)
- 🏃 Best outdoor windows (golden hours, safe-run window, dusk)
- 🌅 Full sun timeline (nautical dawn, sunrise, solar noon, sunset, night, ozone)
- 📱 Responsive layout for mobile and desktop

## Tech stack

- [React](https://react.dev/) 19 + [Vite](https://vitejs.dev/)
- [MUI](https://mui.com/) (Material UI) for components and layout
- [Axios](https://axios-http.com/) for API requests
- [Geocodify](https://www.geocodify.com/) for geocoding
- [OpenUV](https://www.openuv.io/) for UV index data

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/sinag.git
cd sinag
npm install
```

### Environment variables

Copy the example env file and add your own API keys:

```bash
cp .env.example .env
```

Then edit `.env`:

```
VITE_GEOCODIFY_API_KEY=your_geocodify_api_key_here
VITE_OPENUV_API_KEY=your_openuv_api_key_here
```

You can get free API keys from:

- [Geocodify](https://www.geocodify.com/)
- [OpenUV](https://www.openuv.io/)

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or whichever port Vite prints in the terminal).

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Project structure

```
src/
├── App.jsx           # Main layout and search/UV data handling
├── Search.jsx         # Location search input
├── CurrentUV.jsx       # Current UV level display
├── Exposure.jsx        # Safe exposure section (by skin type)
├── ExposureCard.jsx    # Individual skin-type card
├── Outdoor.jsx         # Best outdoor windows section
├── OutdoorCard.jsx     # Individual outdoor window card
├── SunTimeline.jsx     # Full sun timeline section
├── TimelineCard.jsx    # Individual timeline event card
├── FactCard.jsx        # Random UV fact card
└── Footer.jsx          # Footer
```

## Notes

- UV data is cached in `localStorage` so the last search persists across page reloads.
- Never commit your `.env` file — it's excluded via `.gitignore`. Use `.env.example` as the template for required variables.

## License

MIT
