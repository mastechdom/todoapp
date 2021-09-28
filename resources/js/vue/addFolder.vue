<template>
    <div class="addItem">
        <div class="heading">
            <h2 id="title">Add Folder</h2>
            <add-folder-name />
        </div>
        
    </div>
</template>

<script>
import addFolderName from "./addFolderName.vue"

export default {
    components: {
        addFolderName,
    },
}
</script>

<style scoped>

.heading {
    background: #e6e6e6;
    padding: 10px;
}
#title {
    text-align: center;
}
.addItem {
    width: 350px;
    margin: auto;
}

</style>