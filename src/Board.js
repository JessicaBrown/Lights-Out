import React, { useState, useEffect } from "react";
import { Cell } from "./Cell";
import "./Board.css";

export const Board = ({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) => {
	const [board, setBoard] = useState();
	const [hasWon, setHasWon] = useState(false);

	// function createBoard() {
	const createBoard = () => {
		let initialBoard = [];
		for (let y = 0; y < nrows; y++) {
			let row = [];
			for (let x = 0; x < ncols; x++) {
				row.push(Math.random() < chanceLightStartsOn);
			}
			initialBoard.push(row);
		}
		setBoard(initialBoard);
	};

	const flipCellsAround = (coord) => {
		setBoard((oldBoard) => {
			const [y, x] = coord.split("-").map(Number);

			const flipCell = (y, x, boardCopy) => {
				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					boardCopy[y][x] = !boardCopy[y][x];
				}
			};

			const boardCopy = oldBoard.map((row) => [...row]);

			flipCell(y, x, boardCopy);
			flipCell(y, x - 1, boardCopy);
			flipCell(y, x + 1, boardCopy);
			flipCell(y - 1, x, boardCopy);
			flipCell(y + 1, x, boardCopy);
			let winner = boardCopy.map(
				(d) => console.log(!d.includes(true))
				// !d.includes(true) ? setHasWon(true) : setHasWon(false)
			);

			console.log(
				winner,
				boardCopy.map((d) => !d.includes(true))
			);
			return boardCopy;
		});
	};
	//	console.log(hasWon);
	// if (hasWon) {
	// 	return <div className="animate-charcter">You Win!</div>;
	// }

	let tblBoard = [];

	for (let y = 0; y < nrows; y++) {
		let row = [];
		for (let x = 0; x < ncols; x++) {
			let coord = `${y}-${x}`;
			row.push(
				<Cell
					key={coord}
					isLit={board && board[y][x]}
					flipCellsAroundMe={() => flipCellsAround(coord)}
				/>
			);
		}
		tblBoard.push(<tr key={y}>{row}</tr>);
	}
	useEffect(() => {
		createBoard();
		// console.log(board);
		// hasWon();
	}, []);
	return (
		<div>
			<div className="Board-title">
				<div className="neon-orange">Lights</div>
				<div className="neon-blue">Out</div>
			</div>
			<table className="Board">
				<tbody>{tblBoard}</tbody>
			</table>
		</div>
	);
};
