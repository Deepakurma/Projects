import { useState } from "react";

const Matter = [
  {
    question: "What does HTML stand for?",
    answeroptions: [
      { option: "Hyper Transfer Markup Language", iscorrect: false },
      { option: "Hyper Text Markup Language", iscorrect: true },
      { option: "High Tech Markup Language", iscorrect: false },
      { option: "Hyperlink and Text Markup Language", iscorrect: false },
    ],
  },

  {
    question: "What does CSS stand for?",
    answeroptions: [
      { option: "Computer Style Sheet", iscorrect: false },
      { option: "Cascading Style Sheet", iscorrect: true },
      { option: "Creative Style Selector", iscorrect: false },
      { option: "Colorful Style Syntax", iscorrect: false },
    ],
  },

  {
    question:
      "Which programming language is often used for web development alongside HTML and CSS?",
    answeroptions: [
      { option: "Java", iscorrect: false },
      { option: "Python", iscorrect: false },
      { option: "JavaScript", iscorrect: true },
      { option: "C#", iscorrect: false },
    ],
  },

  {
    question: "What is the purpose of JavaScript in web development?",
    answeroptions: [
      { option: "Styling web pages", iscorrect: false },
      { option: "Creating web content", iscorrect: false },
      { option: "Adding interactivity to websites", iscorrect: true },
      { option: "Managing databases", iscorrect: false },
    ],
  },

  {
    question: "Which HTML tag is used to create a hyperlink?",
    answeroptions: [
      { option: "<link>", iscorrect: false },
      { option: "<a>", iscorrect: true },
      { option: "<h1>", iscorrect: false },
      { option: "<p>", iscorrect: false },
    ],
  },

  {
    question: "What is the purpose of the HTML <div> element?",
    answeroptions: [
      { option: "Displaying images", iscorrect: false },
      {
        option: "Defining a division or section in a web page",
        iscorrect: true,
      },
      { option: "Creating lists", iscorrect: false },
      { option: "Styling text", iscorrect: false },
    ],
  },
];

export default Matter;
