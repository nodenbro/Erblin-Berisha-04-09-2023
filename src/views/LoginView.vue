<template>
  <div class="home">
    <Login>

    </Login>
  </div>
</template>

<script lang="ts">
import Login from '@/components/Login.vue'; // @ is an alias to /src

export default {
  name: "LoginView",
  components: {
    Login,
  },
}
</script>
