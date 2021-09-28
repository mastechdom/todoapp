<template>
    <div>
        <div :key="item.id" v-for="item in items1">
            <list-item 
                :item="item" 
                class="item"
                v-on:itemChange="$emit('reloadlist')"
            />

        </div>
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :pageSize=5 :items="exampleItems" @changePage="onChangePage"></jw-pagination>
        </div>
    </div>
</template>

<script>
import listItem from "./listItem.vue"

export default {
    props: ['items1'],
    components: {
        listItem,
    },
    data() {
        return {
           
           exampleItems: this.items1.map(function(ele){ return { name:ele.name,id:ele.id}}),
           pageOfItems: []
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            //console.log(pageOfItems)
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>