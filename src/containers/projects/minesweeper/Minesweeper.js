
import React, { Component } from "react"
import '../../../common/Colors.css'
import './Minesweeper.css'
import Board from './Board'

export default class Minesweeper extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isHidden: true
        };
    }

    render() {
      return (
        <section>
            <section className="project background--gray">
                <div  className="color--cloud info">
                    <div className="color--cloud">
                        <h3>Solving Minesweeper</h3>
                    </div>
                </div>
            </section>

            <section className="background--cloud">
              <p>
                Air travel is boring. Yes, I know, stating the obvious much, right? Well,
                the other day I was stuck on a plane for a few hours going across the beautiful US of A,
                when I decided to take out my phone and play one of my all time favorite 
                games - Minesweeper. Wow, now I sound boring. 
              </p>
              <p>
                Anyway unfortunately for me, I didn't have Minesweeper installed on my phone, and - since I refuse 
                to pay for WiFi on any domestic flight - I decided to do what any other bored software engineer
                would do; I coded it myself.
              </p>
              <p>
                Of course, I couldn't just code Minesweeper without adding something to it. But what could 
                I add to such a classic game?
              </p>
              
              <p>
                And then I remembered, 
                while Minesweeper is fun, sometimes I'll be looking at the map and be unable to find any
                safe spot to clik or mine to flag. Maybe it's because I'm tired, maybe it's because I'm just horrible at 
                the game, but there have always been moments where I would have loved a "hint" button or 
                someone to just point out where a mine is. So I did just that. And then I used these features
                to create an algorithm that will attempt to solve the board for you given the current state.
              </p>

              <p>
                Of course, I couldn't just create an algorithm that would pick a random hidden spot on the board and 
                declare it safe or a mine. The spot chosen had to be a spot that the player could have found on their own.
                Otherwise the data given could be potentially useless. I also didn't want to create an algorithm that
                would return a hidden spot next to an already revealed one. Coding that would just require a few for loops
                and no real logic. No. I wanted to create an algorithm that could solve any board using only the PLAYER's
                knowledge of said board.
              </p>

              <p>
                Below you will find the fruit of my labor. A simple Minesweeper game translated from Python into React
                with a few helpful buttons that will find bombs, give you hints, and even solve the game for you.
              </p>

            </section>

            <section className="game background--cloud">
                <Board height={10} width={10} numMines={12}></Board>
            </section>
        
        </section>
      );
    }
  }
  