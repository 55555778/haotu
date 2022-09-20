<template>
  <div id="Home">
    <div class="header">
      <div class="logo">
        <img src="https://newstore.vynior.com/hthm1.png" alt="" />
      </div>

      <div class="right">
        <div class="language">
          <img src="https://newstore.vynior.com/hthm2.png" alt="" />
        </div>
        <div class="Text">
          <p>进入官网</p>
        </div>
        <div class="login">
          <div class="text">
            <span>登录 </span>
          </div>
          <img src="https://newstore.vynior.com/hthm3.png" alt="" />
        </div>
        <div class="Text">
          <p>设置</p>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="carousel">
        <img src="https://newstore.vynior.com/hthm5.png" alt="" />
      </div>

      <!-- 表单 -->
      <div class="form">
        <div class="Title">
          <p>欢迎您使用HT-Fast平台</p>
        </div>

        <div class="loginStyle">
          <div class="One">
            <img src="https://newstore.vynior.com/hthm7.png" alt="" />
          </div>
          <div class="Two">
            <img src="https://newstore.vynior.com/hthm8.png" class="" />
          </div>
        </div>
        <!-- 邮箱 -->
        <div class="email">
          <div class="people">
            <img src="https://newstore.vynior.com/hthm9.png" alt="" />
          </div>
          <input type="text" placeholder="请输入你的邮箱" />
        </div>
        <!-- 密码 -->
        <div class="password">
          <div class="core">
            <img src="https://newstore.vynior.com/hthm10.png" alt="" />
          </div>
          <input type="password" placeholder="请输入你的密码" />
          <div class="amend">
            <span>忘记密码?</span>
          </div>
        </div>

        <!-- 十五天内 -->
        <div class="remember">
          <input type="checkbox" />

          <span>15天内记住密码</span>
        </div>

        <!-- 登录按钮 -->
        <div class="login">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scope>
@import url("../style/Home.less");
</style>