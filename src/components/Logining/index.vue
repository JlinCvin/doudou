<template>
  <div class="comment">
    <div class="loginbox">
      <div class="box">
        <el-form
          ref="form"
          v-model="form"
          name="login"
          id="login"
          class="czlLogin"
        >
          <el-form-item>
            <h3>用户登录</h3>
          </el-form-item>
          <div class="loginInput">
            <el-form-item>
              <el-input
                placeholder="输入姓名"
                prefix-icon="el-icon-user"
                class="username"
                v-model="username"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                placeholder="输入密码"
                class="username"
                show-password
                v-model="psw"
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="loginButton">
            <el-form-item>
              <el-button type="primary" @click="login()"> 登录 </el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="nextwork">
          <router-link
          tag="el-link"
          :underline="false"
          type="primary"
          to="/login/registering"
          >注册</router-link
        >
        <router-link
          tag="el-link"
          :underline="false"
          type="primary"
          to="/login/findpassword"
          >密码找回</router-link
        >
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logining",
  data() {
    return {
      currentUser: { username: "", userimg: "" },
      loginStatus: false,
      registerStatus: false,
      userbarStatus: false,
      lrBtnStatus: true,
      username: "",
      psw: "",
      form: "",
    };
  },
  methods: {
    login: function () {
      this.axios
        .post("/api2/users/login", {
          username: this.username,
          password: this.psw,
        })
        .then((res) => {
          var status = res.data.status;
          if (status === 1) {
            this.$message({
              message: "登陆成功",
            });
            this.$router.push('/login/center')
          } else {
            this.$message({
              message: "账号密码不正确",
            });
            document.getElementById("login").reset();
          }
        })
    }
  }
};
</script>

  
<style lang='scss' scoped>
.comment {
  .icon-style {
    margin-right: 0.25rem;
    color: #999;
  }
  .nextwork{
    display: flex;
    justify-content: space-between;

  }
  ::v-deep .el-link{
      font-size: 0.65rem;
    }
  .loginbox {
    .box {
      margin: 0.5rem;
      background: #fff;
      h3 {
        font-size: 0.8rem;
        text-align: center;
      }
      .czlLogin {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        .loginInput {
          display: flex;
          flex-direction: column;
          width: 100%;
          .el-input {
             ::v-deep .el-input__inner{
          height: 1.8rem;
          line-height: 1.8rem;
          font-size: .6rem;
        }
          }
        }
        .loginButton {
          display: flex;
          flex-direction: column;
          width: 100%;
          .el-button {
            width: 100%;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>

