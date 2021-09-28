<template>
    <div class="item">
        <input 
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
        />
        <span :class="[item.completed ? 'completed' : '', 'itemText']"> {{ item.name }} </span>
        <button @click="removeItem()" class="trashcan" >
            <font-awesome-icon icon="trash" />
        </button>
        <font-awesome-icon
            icon="user-edit"
            @click="addItem()"
            :class="[ item.name ? 'active' : 'inactive']" 
        />
    </div>
</template>

<script>

export default {
    props: ['item'],
    methods: {
        updateCheck () {
            axios.put('http://127.0.0.1:8000/api/items/' + this.item.id, {
                item: this.item
            })
            .then( response=> {
                if ( response.status == 200 ) {
                    this.$emit('itemChange');
                }
            })
            .catch( error => {
                console.log('error : ', error);
            })
        },
        removeItem () {
            axios.delete('http://127.0.0.1:8000/api/items/' + this.item.id )
            .then( response=> {
                if ( response.status == 200 ) {
                    this.$emit('itemChange');
                }
            })
            .catch( error => {
                console.log('error : ', error);
            })
        },
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #999999;
}
.itemText {
    width: 100%;
    margin-left: 20px;
}
.item {
    display: flex;
    justify-content: center;
    align-items: centers;
}
.trashcan {
    background: #e6e6e6;
    border: none;
    color: #ff0000;
    outline:none;
}
</style>