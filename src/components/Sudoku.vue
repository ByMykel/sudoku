<template>
    <div class="mt-5">
        <div class="flex items-center justify-center my-3">
            <button class="mr-2" @click="startResolving()">
                <svg
                    :class="[resolving ? 'text-green-500' : 'text-gray-800']"
                    class="w-10 h-10 hover:text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>

            <dropdown
                title="Difficulty"
                :options="[
                    'Easy',
                    'Medium',
                    'Hard',
                    'Very hard',
                    'Insane',
                    'Inhuman',
                ]"
                event="change-difficulty"
                @change-difficulty="createBoard($event)"
            ></dropdown>

            <dropdown
                title="Speed"
                :options="['Slow', 'Medium', 'Fast']"
                event="change-speed"
                @change-speed="changeSpeed($event)"
            ></dropdown>
        </div>

        <div class="mx-auto w-auto">
            <grid :board="board"></grid>
        </div>

        <div class="flex justify-center mt-1">
            {{ counter }}
        </div>
    </div>
</template>

<script>
import Grid from "./Grid.vue";
import Dropdown from "./Dropdown.vue";
import sudoku from "../sudoku";

export default {
    name: "Sudoku",

    components: {
        Grid,
        Dropdown,
    },

    data() {
        return {
            board: [],
            resolving: false,
            speed: 200,
            counter: 0,
        };
    },

    created() {
        this.createBoard();
    },

    methods: {
        sleep() {
            return new Promise((resolve) => setTimeout(resolve, this.speed));
        },

        changeSpeed(speed) {
            this.speed = { Slow: 200, Medium: 100, Fast: 0 }[speed];
        },

        startResolving() {
            if (this.resolving) return;

            this.resolving = true;
            this.solve();
        },

        createBoard(difficulty = "Easy") {
            this.resolving = false;
            this.counter = 0;
            this.board = [];

            const board = {
                Easy: sudoku.getEasy(),
                Medium: sudoku.getMedium(),
                Hard: sudoku.getHard(),
                "Very hard": sudoku.getVeryHard(),
                Insane: sudoku.getInsane(),
                Inhuman: sudoku.getInhuman(),
            }[difficulty];

            for (let row = 0; row < 9; row++) {
                this.board.push([]);

                for (let col = 0; col < 9; col++) {
                    let number =
                        board[row][col] === "."
                            ? ""
                            : parseInt(board[row][col]);

                    this.board[row].push({
                        number: number,
                        visited: null,
                        correct: null,
                    });
                }
            }
        },

        empty() {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (this.board[row][col].number === "") {
                        return [row, col];
                    }
                }
            }

            this.resolving = false;

            return [-1, -1];
        },

        check(number, row, col) {
            for (let i = 0; i < 9; i++) {
                if (this.board[row][i].number === number) {
                    return false;
                }
            }

            for (let i = 0; i < 9; i++) {
                if (this.board[i][col].number === number) {
                    return false;
                }
            }

            const rowStart = 3 * Math.trunc(row / 3);
            const rowStop = 3 * Math.trunc(row / 3) + 3;
            const colStart = 3 * Math.trunc(col / 3);
            const colStop = 3 * Math.trunc(col / 3) + 3;

            for (let i = rowStart; i < rowStop; i++) {
                for (let j = colStart; j < colStop; j++) {
                    if (this.board[i][j].number === number) {
                        return false;
                    }
                }
            }

            return true;
        },

        async solve() {
            if (!this.resolving) return true;

            this.counter++;

            await this.sleep();

            const [row, col] = this.empty();

            if (row === -1) {
                return true;
            }

            for (let i = 1; i < 10; i++) {
                if (this.check(i, row, col)) {
                    this.board[row].splice(col, 1, {
                        number: i,
                        visited: true,
                        correct: true,
                    });

                    if (await this.solve()) {
                        return true;
                    }

                    this.board[row].splice(col, 1, {
                        number: "",
                        visited: true,
                        correct: false,
                    });
                }
            }

            return false;
        },
    },
};
</script>