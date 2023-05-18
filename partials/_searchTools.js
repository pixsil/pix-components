export default {

    props: {},

    components: {},

    data() {
        return {
            search_field: null,
        }
    },

    methods: {
        onPaginationChange(page) {
            this.$emit('onPaginationChange', page);

            if (typeof this.onPaginationChange === "function") {
                this.onPaginationChange(page);
            }
        },
        onSearch() {
            this.$emit('onSearch', this.search_field);

            if (typeof this.onSearch === "function") {
                this.onSearch(this.search_field);
            }
        },
        onSearchClear() {
            this.search_field = null;
            this.$emit('onSearch', null);

            if (typeof this.onSearch === "function") {
                this.onSearch(null);
            }
        },
    },

    mounted() {

    },

    created() {
    },

    computed: {}
}
