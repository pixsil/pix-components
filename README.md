# pix-components

## Install modal

```
mkdir -p 'resources/js/tools/pix-components'
wget -O resources/js/tools/pix-components/pix-slave-modal.vue.example https://raw.githubusercontent.com/pixsil/pix-components/main/pix-slave-modal-vue.example
wget -O resources/js/tools/pix-components/pix-slave-modal.functionalities.js https://raw.githubusercontent.com/pixsil/pix-components/main/pix-slave-modal-functionalities.js
wget -O resources/js/tools/pix-components/pix-modal-trigger.vue.example https://raw.githubusercontent.com/pixsil/pix-components/main/pix-modal-trigger.vue.example
wget -O resources/js/tools/pix-components/pix-modal-trigger-functionalities.js https://raw.githubusercontent.com/pixsil/pix-components/main/pix-modal-trigger-functionalities.js
wget -O resources/js/tools/pix-components/pix-base-modal.vue.example https://raw.githubusercontent.com/pixsil/pix-components/main/pix-base-modal-vue.example
wget -O resources/js/tools/pix-components/pix-base-modal-functionalities.js https://raw.githubusercontent.com/pixsil/pix-components/main/pix-base-modal-functionalities.js
```

- Add basemodal in layout
- Make from slave model your own modal
- Use trigger like this:

```
  <modal-trigger component="translate-modal">
      <button class="btn btn-primary me-2"><i class="mdi mdi-plus-box-multiple me-1"></i>Mass import</button>
  </modal-trigger>
```
