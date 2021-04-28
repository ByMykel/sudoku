import SudokuToolCollection from "sudokutoolcollection";

function convertToGrid(grid) {
    return modifyGrid(SudokuToolCollection().conversions.stringToGrid(grid));
}

function modifyGrid(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const number =
                grid[row][col] === "."
                    ? ""
                    : parseInt(grid[row][col]);

            grid[row][col] = {
                number: number,
                selected: false,
                visited: null,
                correct: null,
            };
        }
    }

    return grid;
}

export default {

    getEasy() {
        return convertToGrid(SudokuToolCollection().generator.generate("easy"));
    },

    getMedium() {
        return convertToGrid(SudokuToolCollection().generator.generate("medium"));
    },

    getHard() {
        return convertToGrid(SudokuToolCollection().generator.generate("hard"));
    },

    getVeryHard() {
        return convertToGrid(SudokuToolCollection().generator.generate("very-hard"));
    },

    getInsane() {
        return convertToGrid(SudokuToolCollection().generator.generate("insane"));
    },

    getInhuman() {
        return convertToGrid(SudokuToolCollection().generator.generate("inhuman"));
    },
}