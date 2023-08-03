// v2 > uni_b2b -->

import { Modal } from "bootstrap";
import EventBus from "../../EventBus.js";


export default {
    props: {},

    components: {},

    data() {
        return {
            loading: false,
            component: null,
            attributes: {},
            modalElement: null,
            size: 'md',
        }
    },

    methods: {
        openModal({component, attributes}) {
            this.component = component;
            this.attributes = attributes;
            this.modalElement.show()
        },
        closeModal() {
            this.modalElement.hide()
            this.component = null;
            this.size = 'md';
        },
        setSize(size) {
            this.size = size;
        },
        setLoading(status) {
            this.loading = status;
        },
    },

    mounted() {
        this.modalElement = new Modal(document.getElementById('baseModal'),{
            backdrop: 'static',
        })
    },

    created() {
        EventBus.on('open-modal', this.openModal)
        EventBus.on('close-modal', this.closeModal)
    },

    computed: {}
}
