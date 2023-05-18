// v2 > uni_b2b -->

export default {
    props: {},

    emits: ['done', 'loading'],

    components: {},

    data() {
        return {
            loading: false,
            inited: false,
            done: false,
            reset_done_after_second: false,
            vueForm: new VueForm(),
        }
    },

    methods: {
        onEnter(event) {
            // don't fire on textarea
            if (event.target.nodeName !== 'INPUT') {
                return;
            }

            this.onSubmit();
        },
        onSuccess(response, callbackfunction = null) {
            this.setDone(true);
            this.setLoading(false);

            if (this.reset_done_after_second) {
                setTimeout(() => { this.done = false }, this.reset_done_after_second * 1000);
            }

            if (callbackfunction) {
                callbackfunction.call(response);
            }
        },
        onError(response) {
            this.setLoading(false);
        },
        onLoadDataSuccess() {
            this.setLoading(false);
            this.inited = true;
        },
        setLoading(status) {
            this.loading = status;
            this.$emit('loading', status);
        },
        setDone(status) {
            this.done = status;
            this.$emit('done', status);
        },
        initEdit() {
            if (this.form_type !== 'edit') {
                return;
            }

            // set loading when downloading data
            this.setLoading(true);

            // load data
            this.loadData();
        },
        refreshDataLoader(data_field) {
            this.emitter.emit("load-data", data_field);
        },
    },

    mounted() {
    },

    created() {
    },

    computed: {}
}
