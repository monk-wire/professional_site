const all_puzzles = [[6,0,0,0,0,8,0,0,0,0,0,0,6,0,0,8,0,9,0,0,1,3,0,0,0,0,0,0,0,6,0,0,4,1,0,5,0,0,0,0,0,0,0,0,0,8,0,4,7,0,0,3,0,0,0,0,0,0,0,7,2,0,0,2,0,3,0,0,9,0,0,0,0,0,0,1,0,0,7,0,6], [2,0,0,0,0,0,0,0,0,9,0,0,8,0,4,6,0,0,0,0,5,0,0,0,2,1,0,0,0,0,0,6,0,0,2,0,5,0,8,0,0,0,3,0,6,0,1,0,0,8,0,0,0,0,0,9,3,0,0,0,7,0,0,0,0,6,7,0,5,0,0,9,0,0,0,0,0,0,0,0,1]]

for (let puz of all_puzzles) {
    console.log(puz)
    console.log(puz.length)
}

exports.get_random_puzzle = function() {
    return all_puzzles[Math.floor(Math.random() * all_puzzles.length)];
}

