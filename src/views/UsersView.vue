<template>
    <Nav />
</template>
<template>
    <Users />
</template>

<script>
    import Users from '../components/Users.vue'
    import Nav from '../components/Nav.vue'

    export default {
        name: "UsersView",
        components: {
            Users,
            Nav
        }
    }
</script>