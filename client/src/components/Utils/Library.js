import anime from "animejs"
import swiper from "swiper"

const install = (Vue, options) => {
  Vue.prototype.$animejs = anime
  Vue.prototype.$swiperjs = swiper
  //   Vue.prototype.$ckeditor = CKEditor
}

export default install
