<template>
  <div class="container">
    <div class="wrapper">
      <div class="inner">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-form-item>
            <h2>登录</h2>
          </el-form-item>
          <el-form-item prop="loginName">
            <el-input v-model="loginForm.loginName" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" :show-password="true" placeholder="密码" />
          </el-form-item>
          <el-form-item class="btn-item">
            <el-button :loading="loading" type="primary" @click="onLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  data() {
    return {
      loginForm: {
        loginName: 'sys_admin',
        password: 'admin'
      },
      loginRules: {
        loginName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true
          const res = await login({
            ...this.loginForm,
            sessionToken: this.uuid()
          })
          if (res.return_code === 20000) {
            this.loading = false
            sessionStorage.setItem('sessionToken', res.sessionToken)
            sessionStorage.setItem('name', res.data.name)
            this.$router.push('/')
          } else {
            this.loading = false
          }
        }
      })
    },
    uuid() {
      var s = []
      var hexDigits = '0123456789abcdef'
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-'

      var uuid = s.join('')
      return uuid
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.wrapper {
  width: 980PX;
  height: 500PX;
  margin: 0 auto;
  padding-left: 550PX;
  padding-top: 150PX;
  background: url('~@/assets/img/login.png');
  background-size: 100% 100%;
  text-align: center;
  .inner {
    width: 270PX;
    .el-form {
      h2 {
        font-size: 23PX;
        font-weight: bold;
      }
      .el-button {
        width: 100%;
        margin-top: 35PX;
      }
    }
  }
}
</style>
