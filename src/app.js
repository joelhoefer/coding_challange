const symbolSign = 'X';     // Every Symbol for the Tree
const spaceSysmbol = ' ';   // ^
const starSign = '*';       // |
const endSign = 'I';        // |

const getString = (i, treeHeight) => {
    const starRepeat = i < 0 ? 1 : i * 2 + 3; // Get the Ammount of Symbols need for the cur Line
    const stars = symbolSign.repeat(starRepeat); // The final String
    
    const spaceRepat = Math.floor((treeHeight - i)); // Count for the Spaces(' ') need
    const space = spaceSysmbol.repeat(spaceRepat); // The final String

    return space + stars;
};

const logLoop = (treeHeight) => { // Log's the main Body from the Tree to the Console
    for (let i = 0; i < treeHeight; i++) {
        const logLine = getString(i - 1, treeHeight);

        console.log(logLine);
    }
};

const logTree = (treeHeight, star) => {
    if (star) console.log(spaceSysmbol.repeat(treeHeight + 1) + starSign); // Star on Top

    logLoop(treeHeight);

    console.log(spaceSysmbol.repeat(treeHeight + 1) + endSign);

    console.log('');
    console.log(`Tree height: ${treeHeight} | Star on top ${star}`);
};

logTree(5, true);
// logTree(tree Height(int), star on Top (bool));