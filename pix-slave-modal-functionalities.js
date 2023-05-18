export default {

    // this is needed to make sure classes of the button trigger will not be appied to the modal
    inheritAttrs: false,

    data() {
        return {
            loading: false,
        }
    },

    methods: {
        closeModal() {
            this.emitter.emit('close-modal');
        },
        setLoading(status) {
            this.loading = status;
            this.$emit('loading', status);
        },
    },

    // as example
    mounted() {
        // this.$emit('set-size', 'xl')
    },
}
