import Vue from 'vue'
import Loading from './index.vue'

const Entity = Vue.extend(Loading)

const handelLoading = (el, binding) => {
  if (binding.value) {
    el.classList.add('v-loading__parent')
    Vue.nextTick(() => {
      el.__loading.show = true
      // 把dom插入到节点中
      el.appendChild(el.__$loading)
    })
  } else {
    el.classList.remove('v-loading__parent')
    el.__loading.show = false
  }
}

export default {
  install() {
    Vue.directive('loading', {
      // 初始绑定的时候插入dom
      bind: (el, binding) => {
        // 先把绑定的元素该为relative，用于子绝父相
        // el.style.position = 'relative'
        // 生成loading的实例和dom
        const entity = new Entity({ el: document.createElement('div') })
        // 把loading的vue实例挂到dom对象上
        el.__loading = entity
        // 把loading的实例挂到dom对象上
        el.__$loading = entity.$el
        // 如果开启了loading，要进行处理
        binding.value && handelLoading(el, binding)
      },
      // 数据更新的时候
      update: (el, binding) => {
        if (binding.oldValue !== binding.value) {
          handelLoading(el, binding)
        }
      },
      // 组件卸载的时候
      unbind: (el) => {
        el.__loading && el.__loading.$destroy()
      }
    })
  }
}
