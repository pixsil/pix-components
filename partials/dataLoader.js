export default {

    props: {},

    components: {},

    data() {
        return {
            // deprecated
            loading: false,
            inited: false,

            is_loading_arr: [],
            is_loading: false,

            is_initing_arr: [],
            is_inited: false,

            options: {},
            fields_loaded: {},
        }
    },

    methods: {
        initData(field, url, callback_success = null) {
            this.addInitField(field);
            this.loadData(field, url, callback_success);
        },
        loadData(field, url, callback_success = null) {
            let options = this.options;
            this.loading = true;

            this.addLoadingField(field);

            let encodedQueryData = this.encodeQueryData(options, url)

            this.fields_loaded[field] = url;

            axios.get(url + encodedQueryData)
                .then((response) => {
                    // handle success
                    this.setData(field, response.data);

                    // remove loading field
                    this.removeLoadingField(field);

                    // remove init field
                    this.removeInitField(field);

                    //
                    this.loading = false;
                    this.inited = true;

                    if (callback_success) {
                        callback_success(response.data);
                    }
                })
                .catch((error) => {
                    // handle error

                    //
                    this.loading = false;
                });
        },

        addLoadingField(field) {
            this.is_loading_arr.push(field);

            this.is_loading = this.is_loading_arr.length !== 0;
        },
        removeLoadingField(field) {
            this.is_loading_arr.splice(this.is_loading_arr.indexOf(field),1);

            this.is_loading = this.is_loading_arr.length !== 0;
        },

        addInitField(field) {
            this.is_initing_arr.push(field);
        },
        removeInitField(field) {
            this.is_initing_arr.splice(this.is_initing_arr.indexOf(field),1);

            this.is_inited = this.is_initing_arr.length === 0;
        },

        refreshData(field) {
            if (field in this.fields_loaded === false) {
                return;
            }
            let url = this.fields_loaded[field];
            this.loadData(field, url)
        },
        onPaginationChange(field, page) {
            this.options['page'] = page;

            let url = this.fields_loaded[field];

            // load data
            this.loadData(field, url);
        },
        onSearch(field, search) {
            // if the field is not set and given search is null
            if (typeof this.options['search'] === 'undefined' && search === null) {
                return;
            }
            // if the field is not changed
            if (this.options['search'] === search) {
                return;
            }

            // set search or delete by null
            if (search) {
                this.options['search'] = search;
            } else {
                delete this.options['search'];
            }

            let url = this.fields_loaded[field];

            // unset page
            delete this.options.page;

            this.loadData(field, url);
        },
        setData(field, data) {
            this[field] = data;
        },
        encodeQueryData(data, url) {
            const ret = [];
            for (let d in data) {
                ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
            }

            let query = ret.join('&');

            if (query) {

                // if we already have an ?
                if (url.search("\\?") >= 0) {
                    query = '&'+ query;
                } else {
                    query = '?'+ query;
                }

            }

            return query;
        }
    },

    mounted() {
    },

    created() {
        this.emitter.on("load-data", this.refreshData);
    },

    computed: {}
}
