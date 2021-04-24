<template>
    <table class="mx-auto">
        <tr v-for="row in 9" :key="'row-' + row">
            <cell
                v-for="col in 9"
                :key="'cell-' + row + col"
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
};
</script>