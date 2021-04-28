<template>
    <table class="mx-auto">
        <tr v-for="row in 9" :key="rowKey(row)">
            <cell
                v-for="col in 9"
                :key="cellKey(row, col)"
                :cell="board[row - 1][col - 1]"
            ></cell>
        </tr>
    </table>
</template>

<script>
import Cell from "./Cell.vue";

export default {
    name: "Grid",

    components: {
        Cell,
    },

    props: {
        board: Array,
    },

    methods: {
        rowKey(row) {
            return "row-" + row;
        },

        cellKey(row, col) {
            return "cell-" + row + col;
        },
    },
};
</script>