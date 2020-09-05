<template>
  <fragment>
    <nav class="nav">
      <fragment v-if="this.$store.getters.getState.isAuthenticated">
        <div class="button-add" :class="!getToggleNavbar ? 'add-show' : 'add-hide'">
          <div class="menu add">
            <ul>
              <li>
                <a role="button" @click.prevent="modalToggle">
                  <div class="animated-icon">
                    <span
                      class="animated-span add icon1"
                      :class="!getToggleNavbar ? 'open add' : null"
                    ></span>
                    <span
                      class="animated-span add icon3"
                      :class="!getToggleNavbar ? 'open add' : null"
                    ></span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </fragment>
      <div class="menu">
        <ul>
          <li>
            <a role="button" @click.prevent="toggle">
              <div class="animated-icon">
                <span class="animated-span icon1" :class="!getToggleNavbar ? 'open' : null"></span>
                <span class="animated-span icon2" :class="!getToggleNavbar ? 'open' : null"></span>
                <span class="animated-span icon3" :class="!getToggleNavbar ? 'open' : null"></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <Modal v-if="this.toggleModal" @close="modalToggle" />
  </fragment>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "../Layouts/Modal";

export default {
  name: "NavbarButton",
  data() {
    return {
      toggleModal: false
    };
  },
  components: {
    Modal
  },
  computed: mapGetters(["getToggleNavbar"]),
  methods: {
    ...mapActions(["toggleNavbar"]),
    toggle() {
      this.toggleNavbar();
    },
    modalToggle() {
      this.toggleModal = !this.toggleModal;
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  font-family: "Manjari", sans-serif;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  color: white;
  cursor: pointer;
  z-index: 99;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;

  .button-add {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
  }

  .add-hide {
    opacity: 0;
    visibility: hidden;
    transform: translateY(67px);
  }

  .add-show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu {
    border-radius: 50%;
    box-shadow: 0px 0px 20px 4px var(--color-primary);
    overflow: hidden;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }

    &.add {
      box-shadow: none;
      margin: 0 auto 15px;
      width: 3.2em;

      &:hover {
        transform: scale(1.1);
      }

      ul {
        background-color: var(--color-secondary);
        padding: 0.55em 0.58em;
      }

      @media (max-width: 600px) {
        height: 3.25rem;
      }
    }

    @media (max-width: 600px) {
      height: 3.25rem;
    }
  }

  ul {
    background-color: var(--color-primary-dark);
    padding: 0.84rem 1rem;
    margin: 0;

    @media (max-width: 600px) {
      padding: 0.14rem 0.3rem;
    }
  }

  li {
    overflow: hidden;
  }

  a {
    display: block;
    color: white;
    position: relative;
  }

  .animated-icon {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 0px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
  }

  .animated-span {
    background: #bfbdc4;
    display: block;
    position: absolute;
    height: 5px;
    width: 80%;
    border-radius: 9px;
    opacity: 1;
    left: 4px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &.add {
      background: var(--bg-primary);
      height: 4px;
      left: 7px;
      width: 60%;

      @media (max-width: 600px) {
        height: 3px;
        width: 60%;
        left: 9px;
      }
    }

    @media (max-width: 600px) {
      height: 4px;
      width: 60%;
      left: 9px;
    }
  }

  .animated-span.icon1 {
    top: 3px;
  }

  .animated-span.icon1.open {
    top: 13px !important;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);

    &.add {
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }

  .animated-span.icon2 {
    top: 13px;
  }

  .animated-span.icon2.open {
    opacity: 0;
    left: -60px;
  }

  .animated-span.icon3 {
    top: 23px;
  }

  .animated-span.icon3.open {
    top: 13px !important;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);

    &.add {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
</style>
