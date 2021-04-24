import SudokuToolCollection from "sudokutoolcollection";

export default {
    convertToGrid(grid) {
        return SudokuToolCollection().conversions.stringToGrid(grid);
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