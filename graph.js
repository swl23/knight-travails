class LegalMoves {
    constructor(coord, moves) {
        this.coord = coord;
        this.moves = moves;
    }
}

const gameboard = () => {
    const gameboard = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = [i, j];
            gameboard.push(square);
        }
    }
    return gameboard;
};

export const adjacencyList = [];

export function getValidMoves(coords) {
    const x = coords[0];
    const y = coords[1];
    const allMoves = [
        [x + 2, y + 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x - 1, y - 2],
        [x + 1, y - 2],
        [x + 2, y - 1],
    ];
    const validMoves = [];
    allMoves.forEach((pair) => {
        const x = pair[0];
        const y = pair[1];
        if (x < 0 || x > 7) {
            return;
        } else if (y < 0 || y > 7) {
            return;
        } else {
            validMoves.push(pair);
        }
    });
    return validMoves;
}

gameboard().forEach((coord) => {
    const pair = new LegalMoves(coord, getValidMoves(coord));
    adjacencyList.push(pair);
});
