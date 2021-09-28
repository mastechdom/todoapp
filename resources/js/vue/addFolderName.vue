<template>
    <div class="addFolder">
        <input type="text" v-model="item.name" />
        <font-awesome-icon
            icon="plus-square"
            @click="addItem()"
            :class="[ item.name ? 'active' : 'inactive']" 
        />
        
    </div>
</template>

<script>

import axios from "axios";

export default {
    data: function () {
        return {
            item: {
                name: "",
            }
        }
    },
    methods: {
        addItem() {
            if( this.item.name == '') {
                return;
            }

            axios.post('http://127.0.0.1:8000/api/folder_names/store', {
                item: this.item
            })
            .then ( response => {
                if( response.status == 201 ) {
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch( error => {
                console.log("error : ",error)
            })
        }
    }
}
</script>

<style scoped>
.addFolder {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}
.plus {
    font-size: 20px;

}
.active {
    color: #00CE25;
}
.inactive {
    color: #999999;
}
</style>