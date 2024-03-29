import './styles.css';
import { useState } from 'react';

export default function App() {
  const [meaning, setMeaning] = useState('');

  const changeHandler = (e) => {
    const userInput = e.target.value;
    checkMeaning(userInput);
  };
  const primaryTextColor = '#EF4444';

  const animalDictionary = {
    '🐼': 'Panda',
    '🦔': 'Hedgehog',
    '🦩': 'Flamingo',
    '🦥': 'Sloth',
    '🐾': 'Paw Prints',
    '🦇': 'Bat',
    '🦖': 'T-Rex',
    '🐋': 'Whale',
    '🦘': 'Kangaroo',
    '🐲': 'Dragon',
    '🐝': 'Honeybee',
    '🐽': 'Pig Nose',
    '🐏': 'Ram',
    '🐑': 'Ewe',
    '🐐': 'Goat',
    '🐪': 'Camel',
    '🐫': 'Two-Hump Camel',
    '🦙': 'Llama',
    '🦒': 'Giraffe',
    '🐘': 'Elephant',
    '🦏': 'Rhinoceros',
    '🦛': 'Hippopotamus',
    '🐭': 'Mouse Face',
    '🐁': 'Mouse',
    '🐀': 'Rat',
    '🐹': 'Hamster',
    '🐰': 'Rabbit Face',
    '🐇': 'Rabbit',
    '🐿️': 'Chipmunk',
  };

  const allEmoji = Object.keys(animalDictionary);

  const checkMeaning = (input) => {
    if (input in animalDictionary) {
      const meaning = animalDictionary[input];
      setMeaning(meaning);
    } else {
      setMeaning('Sorry! Not found!');
    }
  };

  const emojiClickHandler = (emoji) => {
    const meaning = animalDictionary[emoji];
    setMeaning(meaning);
  };
  return (
    <div
      className="App"
      style={{
        height: 600,
        paddingTop: 50,
        justifyContent: 'center',
        alignItem: 'center',
        alignContent: 'center',
      }}
    >
      <h1 style={{ color: primaryTextColor }}>Animal Emoji Intrepretor</h1>
      <input
        style={{
          fontSize: '1.2rem',
          padding: '1rem',
          borderRadius: '10px',
          margin: '2rem',
        }}
        onChange={changeHandler}
      />
      <div
        style={{
          color: primaryTextColor,
          margin: 30,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        {meaning}
      </div>
      <h3
        style={{
          color: primaryTextColor,
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Emojis we know
      </h3>
      <div
        style={{
          width: 400,
          margin: 'auto',
        }}
      >
        {allEmoji.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: '2rem',
                padding: '1rem',
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
