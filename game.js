class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

const graph = () => {
    const graph = [];
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            const pair = [i, j];
            graph.push(pair);
        }
    }
    return graph;
};

function getValidMoves(coords) {
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

const paths = [];

graph().forEach((coord) => {
    paths.push({ position: coord, moves: getValidMoves(coord) });
});
