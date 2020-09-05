<template>
  <footer @mouseenter="footerHover" @mouseleave="footerLeave">
    <svg
      id="poly-one"
      width="1440"
      height="512"
      viewBox="0 0 1440 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="base_state_path" fill="#BFEFDB" />
    </svg>

    <Programmer />
  </footer>
</template>

<script>
import Programmer from "../Assets/Programmer";

export default {
  name: "Footer",
  data() {
    return {
      base_state_path: "M1437.5 1H0V569H1437.5V1Z",
      entered_state_path: "M1437.5 1L0 137V569H1437.5V1Z"
    };
  },
  components: { Programmer },
  methods: {
    footerHover() {
      this.$animejs({
        targets: "#poly-one path",
        d: [
          {
            value: this.entered_state_path
          }
        ],

        easing: "linear",
        elasticity: 100,
        duration: 2000,
        loop: false
      });
    },
    footerLeave() {
      this.$animejs({
        targets: "#poly-one path",
        d: [
          {
            value: this.base_state_path
          }
        ],
        direction: "reverse",
        easing: "linear",
        elasticity: 100,
        duration: 2000,
        loop: false
      });
    }
  }
};
</script>

<style scoped>
/* dellsoon */
footer {
  display: none;
}

svg {
  position: absolute;
}

#programmer {
  height: auto;
  right: 5rem;
  width: 10rem;
}

#poly-one path {
  fill: #bfefdb;
  transform: translateX(-30px);
}
</style>
