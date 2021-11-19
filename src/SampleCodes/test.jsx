import React, { useState } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "black",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        style={squareStyle}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          squares: Array(9).fill(null),
        },
      ],
      isXNext: true,
    };
  }
  handleClick = (i) => {
    const records = this.state.records;
    const current = records[records.length - 1];
    const squares = current.squares;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXNext ? "X" : "O";
    this.setState({
      records: records.concat([
        {
          squares: squares,
        },
      ]),
      isXNext: !this.state.isXNext,
    });
  };
  generateSquare = (i) => {
    return (
      <Square
        value={this.state.records[0].squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };
  render() {
    const records = this.state.records;
    const current = records[records.length - 1];
    const winner = calculateWinner(current.squares);

    return (
      <div style={containerStyle} className="gameBoard">
        {winner ? (
          <div id="winnerArea" className="winner" style={instructionsStyle}>
            Winner: <span>{winner}</span>
          </div>
        ) : (
          <div id="statusArea" className="status" style={instructionsStyle}>
            Next player: <span>{this.state.isXNext ? "X" : "0"}</span>
          </div>
        )}
        <button
          style={buttonStyle}
          onClick={() =>
            this.setState({
              records: [
                {
                  squares: Array(9).fill(null),
                },
              ],
              isXNext: true,
            })
          }
        >
          Reset
        </button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            {this.generateSquare(0)}
            {this.generateSquare(1)}
            {this.generateSquare(2)}
          </div>
          <div className="board-row" style={rowStyle}>
            {this.generateSquare(3)}
            {this.generateSquare(4)}
            {this.generateSquare(5)}
          </div>
          <div className="board-row" style={rowStyle}>
            {this.generateSquare(6)}
            {this.generateSquare(7)}
            {this.generateSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}
export default Game;
// ReactDOM.render(<Game />, document.getElementById("root"));
