/* A Queue object for queue-like functionality over JavaScript arrays. */
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(object) {
        this.items.push(object);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

/* A Storage object to associate a board square with info specific to the knight's path on this run-through */
class AdjacencyItem {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.moves = this.getValidMoves();
        this.distance = null;
        this.predecessor = null;
        this.visited = false;
    }

    getValidMoves(x = this.x, y = this.y) {
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
}

/* An Adjacency List container that populates itself upon instantiation with Adjacency Items for every square */
class AdjacencyList {
    constructor() {
        this.list = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.list.push(new AdjacencyItem(i, j));
            }
        }
    }

    get(x, y) {
        return this.list.find((element) => element.x === x && element.y === y);
    }
}

function knightMoves(source, end) {
    const adjList = new AdjacencyList();
    const sourceItem = adjList.get(source[0], source[1]);
    sourceItem.distance = 0;

    const queue = new Queue();
    queue.enqueue(sourceItem);

    while (!queue.isEmpty()) {
        const current = queue.dequeue();
        current.visited = true;

        // If the object we just grabbed from the front of the queue is our end node, we can stop
        if (current.x === end[0] && current.y === end[1]) {
            const path = [];
            findPath(current, path, sourceItem);
            const msg = `You made it in ${current.distance} moves! Here's your path:`;
            console.log(msg);
            path.reverse().forEach((coord) => {
                console.log(coord);
            });
            return path;
        } else {
            current.moves.forEach((move) => {
                let moveItem = adjList.get(move[0], move[1]);
                if (
                    (moveItem.visited &&
                        moveItem.distance > current.distance + 1) ||
                    // or if we just haven't visited it yet at all...
                    !moveItem.visited
                ) {
                    moveItem.distance = current.distance + 1;
                    moveItem.predecessor = current;
                    queue.enqueue(moveItem);
                }
            });
        }
    }
}

/* Recursive function to retrace path upon encountering endpoint */
function findPath(node, array, source) {
    array.push([node.x, node.y]);
    if (node.x === source.x && node.y === source.y) {
        return;
    } else {
        return findPath(node.predecessor, array, source);
    }
}

knightMoves([0, 0], [1, 2]);
