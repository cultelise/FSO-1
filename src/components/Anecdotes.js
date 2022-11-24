import React from "react";
import { useState } from "react";
import Button from "./Button";

const anecdotes = [
  { voteTotal: 0, text: 'If it hurts, do it more often.' },
  { voteTotal: 0, text: 'Adding manpower to a late software project makes it later!' },
  { voteTotal: 0, text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
  { voteTotal: 0, text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
  { voteTotal: 0, text: 'Premature optimization is the root of all evil.' },
  { voteTotal: 0, text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' },
  { voteTotal: 0, text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.' },
]

const Anecdotes = () => {
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const randomNum = () => Math.floor(Math.random() * 7);

  const setRandom = () => {
    const random = randomNum()
    setSelected(random)
    setVote(anecdotes[random].voteTotal)
  }
  
  const incrementVote = () => {
    anecdotes[selected].voteTotal++;
    setVote(anecdotes[selected].voteTotal)
    getMostPopularAnecdote();
  }

  const getMostPopularAnecdote = () => {
    let votes = 0,
      mostPop = 0;
    for (let anecdote of anecdotes) {
      if (anecdote.voteTotal > votes) {
        votes = anecdote.voteTotal;
        mostPop = anecdote;
      } 
    }
    return mostPop;
  }

  return (
    <div>
        <h2>Daily Anecdote</h2>
        <p>{anecdotes[selected].text}</p>
        <p>Votes: {vote}</p>
      <Button onClick={incrementVote} text='Vote' />
      <Button onClick={setRandom} text='Random Anecdote' />
      <h2>
        Anecdote with most votes
      </h2>
      <p>{getMostPopularAnecdote().text}</p>
      <p>{getMostPopularAnecdote().voteTotal}</p>
    </div>
  )
}

export default Anecdotes