require('./bootstrap');

import { constant } from 'lodash';
import Vue from 'vue'
import App from './vue/app.vue'

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash,faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faPlusSquare, faTrash, faUserEdit )

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    el: '#app',
    components: { App }
})