<template>
  <div class="comment">
    <div class="loginbox registerbox">
      <div class="box">
        <el-form
          name="register"
          id="register"
          class="czlLogin demo-dynamic"
          :model="ruleForm"
          ref="ruleForm"
          :rules="rules"
          size="medium"
        >
          <el-form-item><h3>用户注册</h3> </el-form-item>
          <div class="loginInput">
            <el-form-item prop="username">
              <el-input
                placeholder="输入账号"
                prefix-icon="el-icon-user"
                class="username"
                v-model="ruleForm.username"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input
                placeholder="密码"
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                placeholder="确认密码"
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="ruleForm.email" placeholder="输入邮箱">
              </el-input>
            </el-form-item>
            <el-form-item v-if="ifVerify">
              <el-button class="sendVerify" type="" value="注册" @click="pushVerify()">
                发送验证码
              </el-button>
            </el-form-item>
            <el-form-item v-else>
              <el-input
                placeholder="输入验证码"
                class="verify"
                v-model="ruleForm.verify"
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="loginButton">
            <el-form-item>
              <el-button type="primary" value="注册" @click="register()">
                注册
              </el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="nextwork">
          <router-link
            tag="el-link"
            :underline="false"
            type="primary"
            to="/login/logining"
            style="font-size: 0.65rem"
            >返回登录</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registering",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        this.ruleForm.pushverify = true
        callback();
      }
    };
    return {
      ifVerify: true,
      ruleForm: {
        username: "",
        pass: "",
        checkpass: "",
        email: "",
        verify: "",
        pushverify: false
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    register: function () {
      this.axios
        .post("/api2/users/register", {
          username: this.ruleForm.username,
          password: this.ruleForm.pass,
          email: this.ruleForm.email,
          verify: this.ruleForm.verify,
        })
        .then((res) => {
          var status = res.data.status;
          if (status === 1) {
            this.$message({
              message: "注册成功",
            });
            this.$router.push("/login/center");
          } else if (status === -2) {
            this.$message({
              message: "注册失败，账号邮箱已被注册",
            });
          } else {
            this.$message({
              message: "验证码错误",
            });
          }
        });
    },
    pushVerify() {
      if (this.ruleForm.email == "" || this.ruleForm.pushverify == false) {
        this.$message({
          message: "信息不完整",
        });
      } else {
        this.ifVerify = false;
        this.axios
          .post("/api2/users/verify", {
            email: this.ruleForm.email,
          })
          .then((res) => {
            this.$message({
              message: "验证码发送成功",
            });
          });
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
  .nextwork {
    display: flex;
    justify-content: space-between;
  }
  ::v-deep el-link{
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
      input {
        border: 0.05rem solid red;
        margin: 0.5rem 0;
        border-radius: 0.1rem;
      }
      .el-input {
             ::v-deep .el-input__inner{
          height: 1.8rem;
          line-height: 1.8rem;
          font-size: .6rem;
        }
      }
      .czlLogin {
        display: flex;
        align-items: center;
        flex-direction: column;
        .loginInput {
          display: flex;
          flex-direction: column;
          width: 100%;
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
        .sendVerify{
          float: right;
          font-size: 0.7rem;
        }
    }
  }
}
</style>
