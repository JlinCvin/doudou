<template>
  <div class="comment">
    <div class="loginbox">
      <div class="box">
        <h3>用户登录</h3>
        <form name="login" id="login" class="czlLogin">
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
            <input type="button" value="登录" @click="login()" />
            <router-link
              tag="input"
              type="button"
              value="注册"
              class="blueBtn"
              to="/login/registering"
            ></router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logining",
  data() {
    return {
      comments: [
        {
          username: "利益",
          userimg: "1.jpg",
          words: "嘻嘻嘻嘻",
          time: "2020-12-09 15:56:30",
        },
        {
          username: "利33益",
          userimg: "1.jpg",
          words: "嘻嘻嘻嘻",
          time: "2020-12-09 15:56:30",
        },
        {
          username: "利32益",
          userimg: "1.jpg",
          words: "嘻嘻嘻嘻",
          time: "2020-12-09 15:56:30",
        },
      ],
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
      currentUser: { username: "", userimg: "" },
      loginStatus: false,
      registerStatus: false,
      userbarStatus: false,
      lrBtnStatus: true,
      username: "",
      psw: "",
    };
  },
  methods: {
    // //登录
    // showLogin: function () {
    //   document.getElementById("login").reset();
    //   this.loginStatus = true;
    //   this.registerStatus = false;
    // },
    // //注册
    // showregister: function () {
    //   document.getElementById("register").reset();
    //   this.loginStatus = false;
    //   this.registerStatus = true;
    // },
    // //退出登录
    // loginout: function () {
    //   this.currentUser.username = "";
    //   this.currentUser.userimg = "";
    //   alert("退出登录");
    //   this.userbarStatus = false;
    //   this.lrBtnStatus = true;
    // },
    // loginboxclick: function () {
    //   this.loginStatus = false;
    // },
    // registerboxclick: function () {
    //   this.registerStatus = false;
    // },
    // stopProp: function (e) {
    //   e = e || event;
    //   e.stopPropagation();
    // },

    login: function () {
      var username = this.username;
      var psw = this.psw;
      var flag = false;
      for (var i = 0; i < this.users.length; i++) {
        if (
          this.users[i].username == username &&
          this.users[i].password == psw
        ) {
          flag = true;
          alert("登陆成功");
          // this.loginStatus = false;
          // this.userbarStatus = true;
          this.currentUser.username = this.users[i].username;
          this.currentUser.userimg = this.users[i].userimg;
          // this.lrBtnStatus = false;
          break;
        }
      }

      if (!flag) {
        alert("账号密码不正常");
        document.getElementById("login").reset();
      }
    },

    // subCommont: function () {
    //   if (!this.userbarStatus) {
    //     alert("登录后才可以评论");
    //     this.loginStatus = true;
    //   } else {
    //     if ($(".wordsbox textarea").val() == "") {
    //       alert("清嗯嗯嗯");
    //     } else {
    //       var obj = {};
    //       obj.username = this.currentUser.username;
    //       obj.userimg = this.currentUser.userimg;
    //       obj.words = $(".wordsbox textarea").val();

    //       obj.time = new Date();

    //       this.comments.push(obj);
    //       alert("评论成功");
    //     }
    //   }
    // },
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

