<template>
    <div class="grid grid-cols-9 border-2 border-gray-200">
        <cell
            v-for="index in 81"
            :key="index"
            :cell="board[row(index)][col(index)]"
            :row="row(index) + 1"
            :col="col(index) + 1"
        ></cell>
    </div>
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
        row(index) {
            return parseInt((index + 8) / 9) - 1;
        },

        col(index) {
            return (index % 9 === 0 ? 9 : index % 9) - 1;
        },
    },
};
</script>