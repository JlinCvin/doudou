<template>
  <div>
    <el-form
      name="findpassword"
      id="findpassword"
      class="findpassword demo-dynamic"
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      size="medium"
    >
      <el-form-item>
        <h3>修改密码</h3>
      </el-form-item>
      <div class="loginInput">
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" placeholder="输入邮箱"> </el-input>
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
        <el-form-item v-if="ifVerify">
          <el-button
            class="sendVerify"
            type=""
            value="注册"
            @click="pushVerify()"
          >
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
          <el-button type="primary" @click="findpassword()">
            修改密码
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "findpassword",
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
    findpassword() {
      this.axios.post("/api2/users/findPassword",{
        email: this.ruleForm.email,
        password: this.ruleForm.pass,
        verify: this.ruleForm.verify,
      }).then((res) => {
        var status = res.data.status;
        if (status === 1) {
          this.$message({
            message: "修改成功",
          });
          this.$router.push('/login/logining')
        } else {
          this.$message({
            message: "修改失败",
          });
        }
      });
    },
    pushVerify() {
      if (this.ruleForm.email == "" || this.ruleForm.pushverify == false ) {
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
.findpassword{
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .loginInput{
    width: 100%;
  }
  .sendVerify{
    float: right;
  }
  .loginButton{
    width: 100%;
    .el-button{
      width: 100%;
    }
  }
}
</style>
