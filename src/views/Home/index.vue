<template>
  <div class="home">
    <LiImg class="pic" :src="imgUrl"></LiImg>
    <p class="title">导出的scss变量：</p>
    <ul class="colors" v-loading="dataForm.show">
      <li class="colors-item" v-for="item in colors" :key="item.name">
        <div class="color" :style="{ backgroundColor: item.value }"></div>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <p class="btn" @click="_click">点击测试装饰器和loading指令</p>
  </div>
</template>

<script>
import scss from "@/assets/scss/index.scss";
import { loading, throttle } from "@u/decorator";
const colors = [];

for (const key in scss) {
  colors.push({
    name: key,
    value: scss[key]
  });
}

export default {
  name: "Home",
  components: {},
  data() {
    const imgUrl = `https://ftp.bmp.ovh/imgs/2020/08/83b9da13330cf956.jpg?${new Date().getTime()}`;
    return {
      colors,
      dataForm: {
        show: false
      },
      imgUrl
    };
  },
  methods: {
    /**
     * 测试装饰器(throttle和loading)和自定义指令v-loading
     * 自定义指令 v-loading 可配合装饰器 @loading 使用
     * @loading 入参的是对应data里的值路径，不可为动态路径
     */
    @throttle(3000, true)
    @loading("dataForm.show")
    async _click() {
      return new Promise((resolve, reject) => {
        // 节流控制按钮每3000毫秒才能触发一次，然后loading三秒后关闭
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 28px;
  @include safe-padding-bottom(40px);
  .pic {
    display: block;
    width: 100%;
    margin-bottom: 40px;
  }

  .title {
    color: $text-color;
    line-height: 80px;
  }

  .colors {
    background-color: $gray4;
    padding: 20px;
    &-item {
      display: flex;
      align-items: center;
      .color {
        width: 60px;
        height: 60px;
        margin-right: 40px;
      }
    }
  }

  .btn {
    text-align: center;
    color: $primary;
    width: 680px;
    margin: 40px auto 0;
    padding: 20px 0;
    border: 1px solid $primary;
    border-radius: 16px;
  }
}
</style>