import React, { useState, useEffect } from 'react';
import './styles.css';

const MazeGame = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });
  const [maze, setMaze] = useState([
    [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
    [1,0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
    [1,0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
  ]);

  const isWall = (x, y) => {
    if (x < 0 || y < 0 || x >= maze.length || y >= maze[x].length) {
      return true;
    }
    return maze[x][y] === 1;
  };

  const isExit = (x, y) => {
    console.log(maze.length)
    console.log(maze[x].length)
    if (x < 0 || y < 0 || x >= maze.length || y >= maze[x].length) {
      return false;
    }
    return maze[x][y] === 2;
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    let newPosition = { ...playerPosition };

    switch (key) {
      case 'ArrowUp':
        newPosition.x -= 1;
        break;
      case 'ArrowDown':
        newPosition.x += 1;
        break;
      case 'ArrowLeft':
        newPosition.y -= 1;
        break;
      case 'ArrowRight':
        newPosition.y += 1;
        break;
      default:
        return;
    }

    if (!isWall(newPosition.x, newPosition.y)) {
      setPlayerPosition(newPosition);
    }

    if (isExit(newPosition.x, newPosition.y)) {
      alert('Parabéns, você encontrou a saída!');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPosition]);

  return (
    <div className="maze-container">
      {maze.map((row, rowIndex) => (
        <div className="maze-row" key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <div
              className={`maze-cell ${cell === 1 ? 'wall' : ''} ${cell === 2 ? 'exit' : ''} ${
                playerPosition.x === rowIndex && playerPosition.y === columnIndex ? 'player' : ''
              }`}
              key={columnIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MazeGame;

