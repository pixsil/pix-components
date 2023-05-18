// v2 > uni_b2b -->

export default {
    props: {
        init_active: {
            default: null,
            required: false,
        },
    },

    data() {
        return {
            is_open: false,
            active: null,
        }
    },

    methods: {
        setOpen(state) {
            this.is_open = state;
        },
        renderActive(menu_item) {
            return menu_item === this.active ? 'active' : '';
        }
    },

    created() {
        this.active = this.init_active;
    },
}
