<template>
  <div class="comment">
    <div class="loginbox registerbox">
      <div class="box">
        <h3>用户注册</h3>
        <form name="register" id="register"  class="czlLogin">
          <div class="loginInput">
            <input
              type="text"
              v-model="username"
              placeholder="输入姓名"
              class="username"
            />
            <input
              type="password"
              v-model="psw"
              placeholder="输入密码"
              class="psw"
            />
          </div>
          <div class="loginButton">
            <input type="button" value="注册" @click="register()" />
            <router-link
              tag="input"
              type="button"
              value="登录"
              class="blueBtn"
              to="/login/logining"
            ></router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registering",
  data() {
    return {
      username: "",
      psw: "",
      users: [
        {
          username: "czl",
          password: "123456",
          userimg: "1.jpg",
        },
        {
          username: "czl1",
          password: "123456",
          userimg: "1.jpg",
        },
        {
          username: "czl2",
          password: "123456",
          userimg: "1.jpg",
        },
      ],
    };
  },
  methods: {
    register: function () {
      var obj = {};
      var flag = false;
      var username = this.username;
      var psw = this.psw;
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].username === username) {
          flag = true;
          alert("该用户名已经被注册");

          break;
        }
      }
      if (!flag) {
        if (username == "" || psw == "") {
          alert("账号密码为空");
        } else {
          var randomNum = Math.floor(Math.random() * 3) + 1;
          var randomImg = randomNum + ".jpg";
          obj.username = username;
          obj.password = psw;
          obj.userimg = randomImg;

          this.users.push(obj);
          alert("注册成功");
          this.$router.push('/login/logining')
          document.getElementById("register").reset();
        }
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.comment {
  .icon-style {
    margin-right: 0.25rem;
    color: #999;
  }
  .loginbox {
    .box {
      padding: 1rem;
      margin: 0.5rem;
      background: #fff;
      h3 {
        font-size: 0.8rem;
        text-align: center;
      }
      input {
        border: 0.05rem solid red;
        margin: 0.5rem 0;
        border-radius: 0.1rem;
      }
      .czlLogin {
        display: flex;
        align-items: center;
        flex-direction: column;
        .loginInput {
          display: flex;
          flex-direction: column;
          input {
            height: 2.5rem;
            width: 12.5rem;
            padding: 0 1rem;
          }
        }
        .loginButton {
          display: flex;
          flex-direction: column;
          input {
            padding: 0.15rem 2rem;
            font-size: 1rem;
            background: red;
            color: #fff;
            font-family: "微软雅黑";
            border: none;
          }
        }
      }
    }
  }
}
</style>
