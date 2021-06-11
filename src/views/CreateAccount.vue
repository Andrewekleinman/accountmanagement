
<template>
    <div class="hello">
        <div class="CreateAccount">
            <div>
                <label><b>Username</b></label>
                <input type="text" v-model = "input.username" placeholder="Enter Username" required>
            </div>
            <div>
                <label><b>Password</b></label>
                <input  type="password" v-model = "input.password" placeholder="Enter Password" required>
            </div>
            <div>
                <label><b>First Name</b></label>
                <input  type="text" v-model = "input.firstname" placeholder="Enter First Name"  required>
            </div>
            <div>
                <label><b>Last Name</b></label>
                <input  type="text" v-model = "input.lastname" placeholder="Enter Last Name" required>
            </div>
            <div>
                <label><b>Email</b></label>
                <input  type="email" v-model = "input.email" placeholder="Enter Email" required>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

        <button v-on:click="sendData()">Create Account</button>
        <div class="container" style="background-color:#f1f1f1">
                <button onclick="window.location.href='/'">Cancel</button>
                <a href="#">Forgot password?</a>
            </div>
            .{{response}}.
          </div>
    </div>
</template>

<script>
export default {
data () {
            return {

                input: {

                "username": "",
                "password": "",
                    "firstname": "",
                    "lastname": "",
                    "email":""
                },
                response: ""
            }
        },
  methods: {
    sendData() {
      const options = {
        url: 'http://localhost:8080/users',
        method: 'POST',

        jsonData: JSON.stringify(this.input),
        "headers": {
                     'Content-Type': 'application/json',
                     }
      };
      this.$axios(options)
      .then((res) => {
        this.response = res
      })
      .catch((err) => {
        this.response = err;
      })
    }
  }
}
</script>

