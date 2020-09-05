<template>
  <fragment>
    <nav :class="getToggleNavbar ? 'navbar hide' : 'navbar show'">
      <!-- <nav class="navbar"> -->
      <ul class="navbar-nav">
        <fragment v-if="this.$store.getters.getState.isAuthenticated">
          <li class="nav-item auth logout" @click.prevent="toggle">
            <button class="link-nav" type="button" @click.prevent="onLogout">
              <i class="fas fa-sign-in-alt"></i>
              <span class="link-text"></span>
            </button>
          </li>
        </fragment>
        <fragment v-else>
          <li class="nav-item auth login" @click.prevent="toggle">
            <router-link class="link-nav" to="/login">
              <i class="fas fa-sign-in-alt"></i>
              <span class="link-text"></span>
            </router-link>
          </li>
        </fragment>
        <li class="nav-item" :class="active === 1 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/">
            <i class="fas fa-home fa-primary"></i>
            <span class="link-text">Home</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active === 2 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/about">
            <i class="fas fa-user fa-primary"></i>
            <span class="link-text">About</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active === 3 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/articles">
            <i class="far fa-newspaper fa-primary"></i>
            <span class="link-text">Articles</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active === 4 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/merchandise">
            <i class="fas fa-shopping-bag fa-primary"></i>
            <span class="link-text">Merchandise</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </fragment>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      active: 0,
    };
  },
  beforeMount() {
    this.activeClass();
  },
  computed: {
    ...mapGetters(["getToggleNavbar", "getList"]),
  },
  methods: {
    ...mapActions(["toggleNavbar", "logout"]),
    activeClass() {
      switch (window.location.pathname) {
        case "/":
          this.active = 1;
          break;
        case "/about":
          this.active = 2;
          break;
        case "/articles":
          this.active = 3;
          break;
        default:
          this.active = 4;
          break;
      }
    },
    toggle() {
      if (window.innerWidth > 600) this.toggleNavbar();
    },
    onLogout() {
      this.logout();
    },
  },
  updated() {
    this.activeClass();

    if (this.getToggleNavbar)
      setTimeout(() => {
        document.getElementsByClassName("navbar")[0].style.visibility =
          "hidden";
      }, 1);
    else
      document.getElementsByClassName("navbar")[0].style.visibility = "visible";
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/dist/prefix";

.navbar {
  @include prefix(transition, all 600ms, webkit moz ms o);
  height: 100vh;
  padding: 12px 0;
  position: fixed;
  background-color: var(--color-primary-dark);
  width: 5rem;
  z-index: 9999;

  &:hover {
    .nav-item {
      .link-nav .link-text {
        color: var(--text-secondary);
        opacity: 1;
      }
    }

    .nav-item.active {
      .link-nav,
      .link-nav .link-text {
        color: var(--icons-color);
        filter: grayscale(0%) opacity(1);
      }
    }
  }

  .navbar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    li:nth-child(1) {
      button i,
      a i {
        position: absolute;
        top: 25%;
      }

      a {
        height: 4em;
        padding-left: 1em;
      }
    }
  }

  .nav-item {
    cursor: pointer;
    width: 100%;

    &.active {
      background-color: var(--color-quartery);
    }

    &.auth {
      @include prefix(transition, all 600ms, webkit moz ms o);
      border-radius: 3em;
      height: 60px;
      margin-bottom: 1em;
      width: 60px;

      &:hover {
        @include prefix(transform, scale(1.15), webkit moz ms o);
      }

      svg {
        @include prefix(transform, translateY(-10px), webkit moz ms o);
        width: 1.75em;
        min-width: 1em;
      }
    }

    &.login {
      background-color: var(--bg-primary);

      &:hover {
        background-color: var(--color-quartery);
      }

      .fa-primary {
        color: var(--color-primary-dark);
      }

      a:hover {
        @include prefix(filter, grayscale(0%) opacity(1), webkit);
        background: none;
        color: var(--bg-primary);
      }
    }

    &.logout {
      background-color: rgb(219, 0, 0);

      &:hover {
        background-color: rgb(187, 0, 0);
      }

      .fa-primary {
        color: var(--color-quartery);
      }

      button {
        background: none !important;
        border: none;
        box-shadow: none;
        color: #069;
        margin: 0;
        padding: 0;
        padding-left: 1.5em;

        &:hover {
          @include prefix(filter, grayscale(0%) opacity(1), webkit);
          background: none;
          border: none;
          color: var(--bg-primary);
        }
      }
    }

    .link-nav {
      @include prefix(transition, all var(--transition-speed), webkit moz ms o);
      @include prefix(filter, grayscale(100%) opacity(0.7), webkit);
      align-items: center;
      color: var(--text-secondary);
      display: flex;
      height: 5rem;
      padding-left: 1.5em;
      text-decoration: none;

      &:hover {
        @include prefix(filter, grayscale(0%) opacity(1), webkit);
        background: var(--bg-secondary);
      }

      i {
        font-size: 1.8em;
      }

      .link-text {
        @include prefix(
          transition,
          ease var(--transition-speed),
          webkit moz ms o
        );
        @include prefix(filter, grayscale(100%) opacity(0.7), webkit);
        color: var(--bg-primary);
        opacity: 0;
        margin-left: 1rem;
        transition: width 600ms ease;
        -webkit-transition: width 600ms ease;
        -moz-transition: width 600ms ease;
      }
    }
  }
}

.fa-primary {
  color: var(--icons-color);
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  @include prefix(transition, ease var(--transition-speed), webkit moz ms o);
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .link-nav {
    justify-content: center;
  }

  .link-nav svg {
    max-height: 1.75rem;
  }

  .link-text {
    visibility: hidden;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
    margin-left: -5rem;
  }

  .navbar.hide {
    margin-left: -5rem;
  }

  .navbar.show {
    margin-left: 0;
  }

  .navbar:hover {
    width: 12rem;
  }

  .navbar:hover .link-text {
    visibility: visible;
  }

  .navbar:hover .logo svg {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .link-nav {
    padding-left: 0.9rem;
  }
}
</style>
