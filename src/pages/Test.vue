<template>
  <el-card>
    <div class="page-slidecode">
      <slide-verify
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        :imgs="bgimgs"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :slider-text="text"
      ></slide-verify>
      <div>{{ msg }}</div>
    </div>
  </el-card>
</template>

<script>
import aa from "@/assets/image/aa.jpg"; //	如果使用网络图片资源就无需引入
import bb from "@/assets/image/bb.jpg";
import cc from "@/assets/image/cc.jpg";
export default {
  data() {
    return {
      msg: "",
      bgimgs: [aa, bb, cc],
      // bgimgs:[],	//	如果使用网络图片资源就用该值
      text: "向右拖动滑块填充拼图",
    };
  },
  methods: {
    onSuccess() {
      this.msg = "登录成功~";
    },
    onFail() {
      this.msg = "登录失败！";
    },
    onRefresh() {
      this.msg = "重新生成验证码";
    },
  },
};
</script>
<style scoped>
.page-slidecode {
  position: relative;
  width: 500px;
  height: 250px;
  /* background-color: skyblue; */
}
slide-verify {
  position: absolute;
  margin-left: 100px;
}
</style>