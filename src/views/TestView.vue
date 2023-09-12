<template>
    <div class="testing-stuff">
        <h1>
        This is from the view Folder
        </h1>
        <hr>
        <Testing />
    </div>

</template>

<script lang="ts">
    import Testing from '@/components/Test.vue';
    export default {
        name: "Test",
        components: {
            Testing
        }
    }
</script>