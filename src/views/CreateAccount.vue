
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
                <button v-on:click="receiveData()">view accounts</button>
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

                        input: {username:this.username,password:this.password,firstname:this.firstname,lastname:this.lastname,email:this.email},

                response: ""
            }
        },
  methods: {
    sendData() {
        console.log({user:this.input});
        this.$http.post('http://localhost:8080/users',{user:[this.username,this.password,this.firstname,this.lastname,this.email]}
       ,{"headers": {

                                  'Content-Type': 'application/json',
                                  }})
        .then((res) => {
        this.response = res.data
      })
      .catch((err) => {
        this.response = err;
      })
    },
    receiveData() {
          const options = {
            url: 'http://localhost:8080/users',
            method: 'GET',
               "headers": {
                         'Content-Type': 'application/json',
                         }
          };

          this.$axios(options)
          .then((res) => {
            this.response = res.data
          })
          .catch((err) => {
            this.response = err;
          })
  }
  }
}
</script>

