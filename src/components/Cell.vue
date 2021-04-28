<template>
    <td
        :class="[colorCell]"
        class="bg-white border border-black w-8 h-8 sm:w-14 sm:h-14"
    >
        <span
            class="flex items-center justify-center"
            v-text="cell.number"
        ></span>
    </td>
</template>

<script>
export default {
    name: "Cell",

    props: {
        cell: Object,
    },

    computed: {
        colorCell() {
            if (this.cell.selected) {
                return "bg-yellow-200";
            }

            if (this.cell.visited && this.cell.correct) {
                return "bg-green-200";
            }

            if (this.cell.visited && !this.cell.correct) {
                return "bg-red-200";
            }

            return "";
        },
    },
};
</script>