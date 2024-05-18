<template>
    <div>
        <h2 id="目录大纲">目录大纲</h2>
        <ul v-for="bk in sidebarConfig">
            <h3 :id="bk.text">{{ bk.text }}</h3>
            <ul v-for="item in bk.items">
                <li><a :href="item.link">{{ item.text }}</a></li>
            </ul>
        </ul>
    </div>
</template>

<script setup lang="ts">
type CatalogueT = {
    text: string,
    items: {
        text: string,
        link: string
    }[]
}[]
defineProps<{
    sidebarConfig: CatalogueT
}>()
</script>

<style scoped lang="scss"></style>