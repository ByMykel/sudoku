import SudokuToolCollection from "sudokutoolcollection";

export default {
    convertToGrid(grid) {
        return this.modifyGrid(SudokuToolCollection().conversions.stringToGrid(grid));
    },

    modifyGrid(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let number =
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
    },

    getEasy() {
        return this.convertToGrid(SudokuToolCollection().generator.generate("easy"));
    },

    getMedium() {
        return this.convertToGrid(SudokuToolCollection().generator.generate("medium"));
    },

    getHard() {
        return this.convertToGrid(SudokuToolCollection().generator.generate("hard"));
    },

    getVeryHard() {
        return this.convertToGrid(SudokuToolCollection().generator.generate("very-hard"));
    },

    getInsane() {
        return this.convertToGrid(SudokuToolCollection().generator.generate("insane"));
    },

    getInhuman() {
        return this.convertToGrid(SudokuToolCollection().generator.generate("inhuman"));
    },
}