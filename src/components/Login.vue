<template>
  <div class="hello">
    <div class="container">

      <form action="#">
        
        <div class="login-content">
          <img class="logo" src="../assets/logo.png" alt="">
          <label>Username</label>
          <input type="text" placeholder="Username" id="username" name="username" v-model="username">

          <label> Password</label>
          <input type="password" placeholder="Password" id="password" name="password" v-model="password">
        </div> <!-- /login-content -->
        <button class="button" type="submit" @submit="login(event)">Log In</button>
      </form>
    </div> <!-- /login-form -->
  </div> <!-- /hello -->
</template>

<script>
import router from '../router/index.ts'

export default {
	data () {
		return {
			errors: [],
			username: "admin",
			password: "notadmin",
		}
	},
	methods: {
		login (event) {
			this.errors = []
			if(this.username && this.password) 
			{
				if(this.username === "admin" && this.password === "password") 
				{
					// router.push('users');
					console.log("Its Working");
				} 
				else 
				{
					console.log("Its Working but the thingies are incorrect btw");
				}
			}
			event.preventDefault()
		}

	}


}
</script>

