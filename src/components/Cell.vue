<template>
    <div
        class="flex items-center justify-center bg-white border-2 border-gray-200 rounded-md "
        :class="[
            colorCell,
            col % 3 === 0 ? ' border-r-4 border-gray-200' : '',
            row % 3 === 0 ? ' border-b-4 border-gray-200' : '',
        ]"
        :style="{ width: size + 'px', height: size + 'px' }"
    >
        <span
            class="flex items-center justify-center text-lg text-gray-900 select-none md:text-2xl lg:text-3xl sm:text-xl"
            v-text="cell.number"
        ></span>
    </div>
</template>

<script>
export default {
    name: "Cell",

    props: {
        cell: Object,
        row: Number,
        col: Number,
    },

    data() {
        return {
            size: 0,
        };
    },

    mounted() {
        this.sizePerCell();

        addEventListener("resize", this.sizePerCell);
        addEventListener("orientationchange", this.sizePerCell);
    },

    computed: {
        colorCell() {
            if (this.cell.selected) {
                return "bg-yellow-400";
            }

            if (this.cell.visited && this.cell.correct) {
                return "bg-green-400";
            }

            if (this.cell.visited && !this.cell.correct) {
                return "bg-red-500";
            }

            return "";
        },
    },

    methods: {
        sizePerCell() {
            let height = parseInt(
                (Math.min(window.innerHeight - 200, 1152) + 8) / 9
            );
            let width = parseInt((window.innerWidth - 20 + 8) / 9);

            this.size = Math.max(Math.min(height, width), 25);
        },
    },
};
</script>