import { useState } from 'react'
import './App.css'

const choices = ["Rock", "Paper", "Scissors"] as const;
type Choice = typeof choices[number];

const getRandomChoice = (): Choice => {
    return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (playerChoice: Choice, computerChoice: Choice): string => {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win! 🎉";
    }
    return "You lose! 😢";
}

export default function App() {
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string | null>(null);

    const handlePlayerChoice = (playerChoice: Choice) => {
        const computerChoice = getRandomChoice();
        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);
        setResult(getResult(playerChoice, computerChoice));
    }

  return (
      <div className="game-container">
          <h1>Rock Paper Scissors</h1>
          <div className="choices">
              {choices.map((choice) => (
                  <button key={choice} onClick={() => handlePlayerChoice(choice)}>
                      {choice}
                  </button>
              ))}
          </div>
          {playerChoice && (
              <div className="result">
                  <p>You chose: <strong>{playerChoice}</strong></p>
                  <p>Computer chose: <strong>{computerChoice}</strong></p>
                  <h2>{result}</h2>
              </div>
          )}
      </div>
  );
}