import { adjacencyList } from "./graph.js";

class QueueItem {
    constructor(from, to, cost) {
        this.from = from;
        this.to = to;
        this.cost = cost;
        this.path = false;
    }
}

class Table {
    constructor(vertex, path, cost) {
        this.vertex = vertex;
        this.path = path;
        this.cost = cost;
        this.found = false;
    }
}

const pathCostTable = [];
for (let i = 0; i < adjacencyList.length; i++) {
    const pathTable = new Table(adjacencyList[i].coord, undefined, undefined);
    pathCostTable.push(pathTable);
}

function knightMoves(startCoordinates /* , endCoordinates */) {
    const queue = [];
    while (queue.length > 0 /*  &&  */) {}
}

const startCoordinates = [0, 0];
knightMoves(startCoordinates);

function addEdgesFromNodeToQueue(coord) {
    // find every square connected to "coord" and make a queue item out of it
    const target = adjacencyList.find(
        (node) => JSON.stringify(node.coord) === JSON.stringify(coord)
    );
    target.moves.forEach((move) => {
        const item = new QueueItem(target.coord, move, calculateCost(item));
        queue.push(item);
    });
}

/* function moveItemFromQueueToTable(item) {
	const destination = pathCostTable.find(
        (node) => JSON.stringify(node.coord) === JSON.stringify(item.from)
    );
	if (!destination) {
		item.path = true;
		pathCostTable.push(item)
	} else if {}
} */

function calculateCost(queueItem, startCoord) {
    // for every square, the path to itself is 0
    if (queueItem.from === queueItem.to) {
        return 0;
        // any square stemming from start square has relationship of 1
    } else if (queueItem.from === startCoord) {
        return 1;
    } else {
        //
        calculateCost();
    }
}
