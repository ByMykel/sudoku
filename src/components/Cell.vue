<template>
    <td
        class="bg-white border border-black w-8 h-8 sm:w-14 sm:h-14"
        :class="[colorCell]"
    >
        <div class="flex items-center justify-center">
            <span>{{ cell.number }}</span>
        </div>
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