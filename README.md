
# Vocabulary Learning Web App 🌐

Welcome to the **Vocabulary Learning Web App**! This project is designed to provide an intuitive and engaging platform for learning new vocabulary with dynamic content and interactive features. It allows users to explore vocabulary words, get their pronunciations, and more, all within a beautifully responsive and user-friendly interface.

## Features ✨

- **Dynamic Vocabulary Section**: 
  - Lessons and words are fetched dynamically from APIs.
  - Word meanings, pronunciations, and more displayed in an interactive card format.
  - No data found messages are displayed when no words exist for a lesson.

- **Voice Pronunciation**: 
  - Use the built-in browser SpeechSynthesis API to pronounce words when clicked.
  
- **Interactive FAQ Section**: 
  - Covers important JavaScript concepts like `var vs let vs const`, `map vs forEach vs filter`, and more.

- **Modal for Word Details**: 
  - Open a modal on clicking the details icon to see synonyms, example sentences, and more.
  
- **Responsive Design**: 
  - Fully optimized for mobile, tablet, and desktop screens using TailwindCSS and DaisyUI for a seamless user experience.

- **Smooth Scrolling**: 
  - Smooth scrolling implemented for navigation between sections like FAQ and Learn.

- **SweetAlert2 Integration**: 
  - Polished alert system replacing the default browser alerts with SweetAlert2 for a better user experience.

## Technologies Used 💻

- **HTML/CSS**: For the structure and styling of the app.
- **TailwindCSS**: For utility-first responsive design and custom components.
- **DaisyUI**: For pre-built, customizable components.
- **JavaScript**: For dynamic functionality and API interactions.
- **SpeechSynthesis API**: For voice pronunciation of vocabulary words.
- **SweetAlert2**: For elegant pop-up alerts.

## Installation 🚀

Clone this repository to your local machine:

```bash
git clone https://github.com/abdullahalnoman003/English-Janala.git
```

Navigate into the project directory:

```bash
cd English-Janala
```

Open the `index.html` file in your browser to start the app.

## How It Works 🔧

1. **Login Functionality**: 
   - Users are prompted to enter a name and password for access. A default password of `123456` is used.
   
2. **API Integration**: 
   - Vocabulary lessons and words are fetched from APIs and displayed dynamically.

3. **Word Details Modal**: 
   - Clicking the "details" icon opens a modal with additional information about the word.

4. **Voice Pronunciation**: 
   - Clicking the speaker icon pronounces the word using the browser’s built-in SpeechSynthesis API.


## Challenges & Learnings 📚

- **Dynamic Content Loading**: Learned how to load dynamic content using APIs and manipulate it for user interaction.
- **Responsive Design**: Mastered how to make web apps responsive using TailwindCSS, ensuring a smooth experience across devices.
- **API Integration**: Integrated multiple APIs to fetch data and present it in an engaging format.

## Future Improvements 💡

- **User Authentication**: Implement a secure login system with real user authentication.
- **User Progress Tracking**: Track the user’s progress in learning vocabulary and provide feedback.
- **Search Functionality**: Allow users to search for specific words or lessons.
- **Gamification**: Add quizzes or mini-games to make vocabulary learning more fun!
