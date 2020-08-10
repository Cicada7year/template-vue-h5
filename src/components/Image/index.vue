<template>
  <div class="li-image" :style="style" @click="_click">
    <img class="li-image_img" :src="url" :style="{ objectFit }" />
  </div>
</template>

<script>
import { px2Rem as px2Remloader } from "@u/format";
const loadImage = url => {
  return new Promise((resolve, reject) => {
    const $img = new Image();
    $img.src = url;
    $img.onload = resolve;
    $img.onerror = reject;
  });
};
export default {
  name: "LiImg",
  props: {
    // 图片链接，必填
    src: {
      type: String,
      required: true
    },
    // 是否为块级元素，默认行级元素
    block: {
      type: Boolean,
      default: false
    },
    // 缩略图，如果有缩略图的话，会先加载缩略图，缩略图加载完成后再加载大图，减少素材等待时间
    thumbnail: {
      type: String
    },
    // 加载失败后显示的图，如果没有指定的话会返回error事件
    errorSrc: {
      type: String
    },
    // 图片宽度，不填的话依赖外部样式
    width: {
      type: [String, Number]
    },
    // 图片高度，不填写的话默认为宽度，没有宽度会依赖外部样式
    height: {
      type: [String, Number]
    },
    // px转成rem，仅仅在width和height为number的时候才会用到，默认开启转换
    px2Rem: {
      type: Boolean,
      default: true
    },
    // 是否开启过度效果，默认开启
    transition: {
      type: Boolean,
      default: true
    },
    // 裁剪模式
    objectFit: {
      type: String,
      /**
       * cover 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。
       * contain 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。
       * fill 被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。
       * none 被替换的内容将保持其原有的尺寸。
       * scale-down 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
       */
      default: "cover"
    }
  },
  data() {
    return {
      url: "",
      load: false
    };
  },
  computed: {
    style() {
      const { block, width, height, px2Rem, load } = this;
      const sty = { display: block ? "block" : "inline-block" };
      if (this.transition) {
        sty.transitionProperty = "opacity";
      }
      if (width) {
        sty.width = width;
        if (typeof sty.width === "number" && px2Rem) {
          sty.width = px2Remloader(sty.width);
        }
        sty.height = sty.width;
      }
      if (height) {
        sty.height = height;
        if (typeof sty.height === "number" && px2Rem) {
          sty.height = px2Remloader(sty.height);
        }
      }
      if (load) {
        sty.opacity = 1;
      }
      return sty;
    }
  },
  async created() {
    // 如果有缩略图的话先加载缩略图
    if (this.thumbnail) {
      try {
        await loadImage(this.thumbnail);
        this.url = this.thumbnail;
        this.load = true;
      } catch (error) {
        this.$emit("thumbnailError", this.thumbnail);
      }
    }
    // 而后大图加载成功后直接替换为大图
    try {
      await loadImage(this.src);
      this.url = this.src;
      this.load = true;
    } catch (error) {
      this.$emit("error", this.url);
    }
  },
  methods: {
    _click() {
      this.$emit("click", ...arguments);
    }
  }
};
</script>

<style lang='scss'>
.li-image {
  opacity: 0;
  transition-duration: $animation-img-opacity;
  &_img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>