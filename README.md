# Casino Slots Game 🎰

A responsive browser-based slot machine game built with React. This project demonstrates a simple yet engaging implementation of a classic casino slot machine with modern web technologies.

## 🎮 Features

### Core Features
- 3 spinning reels with smooth animations
- 12 unique symbols per reel
- Random outcome generation
- Win detection system (2 or more matching symbols)
- Responsive design for mobile and tablet screens
- Visual win celebrations
- Clean and intuitive UI

### Technical Highlights
- Built with React (Create React App)
- Pure CSS animations
- Component-based architecture
- No external dependencies beyond React
- Modular and maintainable code structure

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/casino-slots-game.git
cd casino-slots-game
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Building for Production
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Reel.js         # Individual reel component
│   ├── SlotMachine.js  # Main game component
│   ├── SpinButton.js   # Spin control button
│   └── WinDisplay.js   # Win notification component
├── constants/
│   └── gameConstants.js # Shared game constants
├── styles/             # CSS styles
│   ├── App.css
│   ├── Reel.css
│   ├── SlotMachine.css
│   ├── SpinButton.css
│   └── WinDisplay.css
├── App.js              # Root component
└── index.js           # Entry point
```

## 🎯 How to Play

1. Open the game in your browser
2. Click the "SPIN" button to start the reels
3. Wait for all reels to stop spinning
4. If you get 2 or more matching symbols in a line, you win!
5. The game will display a celebration animation for winning combinations

## 🛠️ Technical Implementation

### Components

#### SlotMachine
- Main game logic
- State management for game status
- Win detection
- Coordinates reel animations

#### Reel
- Handles individual reel animation
- Manages symbol display and positioning
- Controls spinning and stopping mechanics

#### SpinButton
- User interface for game control
- Disabled state handling during spins

#### WinDisplay
- Manages win animations and notifications
- Conditional rendering based on game state

## 🎨 Customization

### Modifying Symbols
To change the game symbols, edit the `SYMBOLS` array in `src/constants/gameConstants.js`:

```javascript
export const SYMBOLS = ['🍒', '🍋', '🍊', '🍇', '🍎', '💎', '7️⃣', '🎰', '⭐', '🔔', '🎲', '🃏'];
```

### Styling
All styling is done through CSS files in the `src/styles` directory. Each component has its own CSS file for easy customization.

## 🚧 Future Enhancements

- [ ] Add betting system
- [ ] Implement credit system
- [ ] Add sound effects
- [ ] Multiple pay lines
- [ ] More winning combinations
- [ ] Persistent high scores
- [ ] Theme customization
- [ ] Additional animations
- [ ] Cabinet graphics

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👏 Acknowledgments

- Emoji symbols provided by Unicode Common Locale Data Repository
- Inspired by classic casino slot machines
- Built with React and Create React App

## 📫 Contact

Karl Vestinsson - [vestinsson.email@outlook.com](mailto:vestinsson.email@outlook.com)

Project Link: [https://github.com/yourusername/casino-slots-game](https://github.com/vestinsson/casino-slots-game)
