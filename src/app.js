import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const changeHandler = (e) => {
    const userInput = e.target.value;
    checkMeaning(userInput);
  };
  const primaryTextColor = "#EF4444";

  const animalDictionary = {
    "🐼": "Panda",
    "🦔": "Hedgehog",
    "🦩": "Flamingo",
    "🦥": "Sloth",
    "🐾": "Paw Prints",
    "🦇": "Bat",
    "🦖": "T-Rex",
    "🐋": "Whale",
    "🦘": "Kangaroo",
    "🐲": "Dragon",
    "🐝": "Honeybee",
    "🐽": "Pig Nose",
    "🐏": "Ram",
    "🐑": "Ewe",
    "🐐": "Goat",
    "🐪": "Camel",
    "🐫": "Two-Hump Camel",
    "🦙": "Llama",
    "🦒": "Giraffe",
    "🐘": "Elephant",
    "🦏": "Rhinoceros",
    "🦛": "Hippopotamus",
    "🐭": "Mouse Face",
    "🐁": "Mouse",
    "🐀": "Rat",
    "🐹": "Hamster",