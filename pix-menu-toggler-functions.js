// v2 > uni_b2b -->

export default {
    data() {
        return {
            is_open: false,
        }
    },

    methods: {
        toggleMenu() {
            this.is_open = !this.is_open;
            if (this.is_open) {
                this.emitter.emit("set-menu-open", true);
            } else {
                this.emitter.emit("set-menu-open", false);
            }
        }
    },
}
