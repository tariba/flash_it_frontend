# Flash It! 🚀

A React-based flashcard application designed to help users practice interview questions with an interactive and engaging interface.

![Flash It App](https://flash-it-front-end.onrender.com/)

## 🌟 Features

- **Interactive Flashcards**: Click to reveal answers with smooth flip animations
- **Multiple Categories**: 
  - Technical questions for coding interviews
  - Behavioral questions for soft skills assessment
  - Random mode for mixed practice
- **Dynamic Question Loading**: Questions are fetched from a backend API
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Clean UI**: Modern, intuitive interface with Flash superhero branding

## 🚀 Live Demo

**Deployed Application**: [https://flash-it-front-end.onrender.com/](https://flash-it-front-end.onrender.com/)

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **HTTP Client**: Axios 1.6.7
- **Styling**: CSS3 with custom animations
- **Testing**: React Testing Library
- **Build Tool**: Create React App
- **Deployment**: Render

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/tariba/flash_it_frontend.git
   cd flash_it_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_URL=your_backend_api_url
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── App/
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   └── App.test.js     # App tests
├── NavBar/
│   ├── NavBar.js       # Navigation component
│   ├── NavBar.css      # Navigation styles
│   └── *.png           # Logo assets
├── Cards/
│   └── Card/           # Flashcard components
├── index.js            # Application entry point
└── index.css           # Global styles
```

## 🎯 How It Works

1. **Question Categories**: Users can select from Technical, Behavioral, or Random questions
2. **Card Interaction**: Click on the answer card to reveal/hide the answer
3. **Navigation**: Use "Next Question" to get a new random question from the selected category
4. **State Management**: React hooks manage the application state including:
   - Current question/answer pair
   - Selected category
   - Card flip state

## 🔧 Key Functions

- `getRandomObject(dataArr)`: Returns a random object from any array
- `filterArrBySubject(dataArr, subject)`: Filters questions by category
- `navClick(event)`: Handles category selection
- `nextClick()`: Loads the next question based on current category
- `flipAnswerCard()`: Toggles answer visibility

## 📱 API Integration

The app connects to a backend API to fetch interview questions. Questions are loaded on component mount using axios and stored in React state.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🚀 Deployment

The app is deployed on Render and automatically builds from the main branch.

To deploy your own instance:
1. Fork this repository
2. Connect your Render account to GitHub
3. Create a new web service pointing to your fork
4. Set the build command: `npm run build`
5. Set the start command: `serve -s build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tariq** - [GitHub Profile](https://github.com/tariba)

---

## 📝 Development Notes

### Recent Updates
- Updated all dependencies to latest versions (January 2024)
- Improved code organization with helper functions
- Enhanced state management for better performance
- Refactored random question selection logic

### Refactoring History
- Consolidated duplicate random selection logic into `getRandomObject()` function
- Created `filterArrBySubject()` for cleaner data filtering
- Renamed `flip` state to `flipped` for clarity
- Renamed `flipIt` function to `flipAnswerCard` for better naming convention
