<template>
  <div class="Login">
    <div>
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
    </div>
    <div>
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
    </div>
    <div>
        <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
    </div>
    <div>
        <button type="submit">Login</button>
    </div>

    <div class="container" style="background-color:#f1f1f1">
        <button onclick="window.location.href='/'">Cancel</button>
        <a href="#">Forgot password?</a>
    </div>
  </div>
</template>
