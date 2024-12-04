# Typing speed

## 🎮 Overview

The **Typing speed** is a web-based application designed to test and improve your typing speed. Challenge yourself by typing random paragraphs as quickly and accurately as possible within a set time limit. Metrics like **Words Per Minute (WPM)** and **mistakes** are tracked to measure performance.

---
![Screenshot 2024-12-05 010333](https://github.com/user-attachments/assets/3fa4d02f-588a-491e-876a-94e555bfcb31)

## 🚀 Features

- **Random Paragraphs**: A new paragraph is generated each round to keep it fresh.
- **Live Performance Metrics**:
  - **Time Left**: Countdown timer (120 seconds default).
  - **Mistakes**: Tracks typing errors.
  - **Words Per Minute (WPM)** and **Characters Per Minute (CPM)**.
- **Interactive Sound Effects**:
  - Typing feedback sound.
  - Sound effect when resetting the game.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## 🛠️ Technologies Used

- **HTML**: For the structure of the game.
- **CSS**: For styling the user interface.
- **JavaScript**: For game logic and interactivity.
- **Audio**: Sound effects for better user experience.

---

## 📂 File Structure

```
Speed-Typing-Game/
│
├── index.html         # Main HTML structure of the game
├── style.css          # Stylesheet for layout and design
├── script.js          # JavaScript for game logic
├── m3.wav             # Reset sound effect
├── beep1.mp3          # Typing feedback sound effect
├── README.md          # This README file
```

---

## 📖 How to Use

1. **Clone this Repository**:
   ```bash
   git clone https://github.com/<your-username>/Speed-Typing-Game.git
   ```
2. **Open the Game**:
   - Navigate to the project folder.
   - Open `index.html` in your preferred browser.
3. **Play the Game**:
   - Type the paragraph as quickly and accurately as you can.
   - Track your stats in real-time.
   - Click "Try Again" to reset the game.

---

## ✨ How It Works

### Paragraph Generation
- A random paragraph is selected from a predefined list and displayed character by character. Each character is wrapped in a `<span>` to apply individual styles.

### Typing Metrics
- **Correct Characters**: Highlighted in white.
- **Incorrect Characters**: Highlighted in red.
- **Words Per Minute (WPM)**: Calculated as `(Typed Characters - Mistakes) / 5` divided by elapsed time in minutes.
- **Characters Per Minute (CPM)**: Total characters typed minus mistakes.

### Timer
- The countdown starts on the first keypress.
- The game ends when time runs out or the paragraph is completed.

### Reset Functionality
- Clicking "Try Again" resets the timer, metrics, and paragraph.

---

## 🎯 Future Improvements

- Add difficulty levels (Easy, Medium, Hard) with varying time limits and text lengths.
- Leaderboard for saving and comparing high scores.
- Dark mode and customizable themes.
- More engaging animations and sound effects.

---

## 📄 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🌟 Contributions

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

---

## 🎉 Demo

Check out a live demo here: [Speed Typing Game](#) *(Add your GitHub Pages or live URL here)*

---

Enjoy the game and improve your typing skills! 🚀
