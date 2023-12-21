const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "User interface framework", isCorrect: true },
      { id: 2, text: "Both a and b", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: "Pair of current state and function updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid React component return?",
    options: [
      { id: 0, text: "1", isCorrect: true },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "4", isCorrect: false },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "Java and XML", isCorrect: false },
      { id: 2, text: "JSON and XML", isCorrect: false },
      { id: 3, text: "JavaScript Extension", isCorrect: false },
    ],
  },

  {
    text: "What is the purpose of React Router?",
    options: [
      { id: 0, text: "Data fetching in React components", isCorrect: false },
      { id: 1, text: "State management in React applications", isCorrect: false },
      { id: 2, text: "Navigation in single-page applications", isCorrect: true },
      { id: 3, text: "Form handling in React", isCorrect: false },
    ],
  },

  {
    text: "What are controlled components in React?",
    options: [
      { id: 0, text: "Components that handle their own state", isCorrect: false },
      { id: 1, text: "Components that receive state from a parent component", isCorrect: false },
      { id: 2, text: "Components whose state is controlled by React", isCorrect: true },
      { id: 3, text: "Components that are managed by Redux only", isCorrect: false },
    ],
  },

  {
    text: "In React, what is the purpose of useEffect() hook?",
    options: [
      { id: 0, text: "To perform side effects in functional components", isCorrect: true },
      { id: 1, text: "To declare a state variable", isCorrect: false },
      { id: 2, text: "To handle form submissions", isCorrect: false },
      { id: 3, text: "To create custom hooks", isCorrect: false },
    ],
  },

  {
    text: "What is the purpose of the key prop in React lists?",
    options: [
      { id: 0, text: "To identify elements in the list uniquely", isCorrect: true },
      { id: 1, text: "To set the order of elements in the list", isCorrect: false },
      { id: 2, text: "To provide additional styling to list items", isCorrect: false },
      { id: 3, text: "To control the visibility of list items", isCorrect: false },
    ],
  },

];

export default questions;
