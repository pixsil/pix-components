
import EventBus from "../../EventBus.js";

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
            EventBus.emit('close-modal');
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
