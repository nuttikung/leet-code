const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
	["PHX", "LAX"],
	["PHX", "JFK"],
	["JFK", "OKC"],
	["JFK", "HEL"],
	["JFK", "LOS"],
	["MEX", "LAX"],
	["MEX", "BKK"],
	["MEX", "LIM"],
	["MEX", "EZE"],
	["LIM", "BKK"],
];

// COMMENT: The grpah
let adjacencyList = new Map();

// TODO: Add node
const addNode = (airport) => {
	adjacencyList.set(airport, []);
};

// TODO: Add edge
const addEdge = (origin, destination) => {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
};

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// COMMENT: BFS Breadth First Search
function bfs(start) {
	const visited = new Set();
	const queue = [start];
	while (queue.length > 0) {
		const airport = queue.shift();
		const destinations = adjacencyList.get(airport);
		for (const destination of destinations) {
			if (destination === "BKK") {
				console.log("found");
			}
			if (!visited.has(destination)) {
				visited.add(destination);
				queue.push(destination);
				console.log(destination);
			}
		}
	}
}

// console.log(adjacencyList);
bfs("PHX");

let start = Date.now();
// subsetsWithDup([1,2,2]);
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
