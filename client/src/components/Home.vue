<template>
  <div class="app">
    <ParticleThree class="particle-three" />
    <section id="one">
      <img src="../assets/logo.png" class="logo" />
      <div class="particle-one">
        <ParticleOne />
      </div>
      <div class="particle-two">
        <ParticleTwo />
      </div>
      <div class="profile-picture">
        <ProfilePicture />
      </div>
      <div class="banner-text">
        <h1 class="title">
          Selamat Datang di
          <br />
          <span>PAPA BLOG</span>
        </h1>
        <p>
          &nbsp; Disini saya ingin membagikan ilmu bermanfaat untuk kalian semua
          agar hidup kalian menjadi lebih bermanfaat. Saya juga menyediakan
          fitur untuk melihat merchandise yang saya miliki, silahkan mampir yaa!
        </p>
      </div>
    </section>
    <section id="two">
      <About />
    </section>
    <section id="three">
      <div class="container">
        <Timeline />
        <Contents :limitProps="limit" />
        <router-link to="/articles">Lihat Seluruh Postingan</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import About from "./Pages/SubPages/About";
import Timeline from "./Pages/SubPages/Timeline";
import Contents from "./Pages/SubPages/Contents";
import ParticleOne from "./Assets/ParticleOne";
import ParticleTwo from "./Assets/ParticleTwo";
import ParticleThree from "./Assets/ParticleThree";
import ProfilePicture from "./Assets/ProfilePicture";

// Vuex
import { mapGetters, mapActions } from "vuex";
import isEmpty from "./Utils/isEmpty";

export default {
  name: "Home",
  data() {
    return {
      limit: 4,
    };
  },
  components: {
    About,
    Timeline,
    Contents,
    ParticleOne,
    ParticleTwo,
    ParticleThree,
    ProfilePicture,
  },
  methods: {
    ...mapActions(["getPosts"]),
    ...mapGetters(["getState"]),
    isItEmpty(val) {
      return isEmpty(val);
    },
  },
  created() {
    const data = {
      limit: 4,
    };

    document.getElementsByTagName("body")[0].classList.add("overflow");
    this.getPosts(data);
  },
};
</script>

<style scoped lang="scss">
.app {
  color: var(--color-ternary);
  position: relative;
}

.logo {
  height: 40px;
  position: absolute;
  top: 4.5vh;
  width: 60px;
  z-index: -99;
}

h1.title {
  font-size: 2.5em;
  font-weight: bolder;
}

section#one {
  height: 100vh;
}

section#three {
  @include app;
}

/* Large screens */
@media only screen and (min-width: 600px) {
  svg {
    position: absolute;
    z-index: -99;
  }

  .particle-one svg {
    height: auto;
    width: 35vw;
    right: -3vw;
    top: -5vh;
  }

  .particle-two svg {
    height: auto;
    width: 25vw;
    left: -6vw;
    bottom: 0;
  }

  svg.particle-three {
    opacity: 0.6;
    right: -3vw;
    top: 30%;
  }

  .profile-picture svg {
    height: auto;
    width: 37vw;
    left: 5vw;
    top: 5vw;
  }

  .banner-text {
    display: grid;
    height: 100%;
    grid-template-columns: 50vw auto;
    grid-template-rows: 15vh auto 40vh;

    h1 {
      font-weight: 500;
      line-height: 50px;
      grid-column: 2;
      grid-row: 2;

      span {
        font-size: 1.3em;
        font-weight: bolder;
      }
    }

    p {
      font-size: 1.5em;
      grid-column: 2;
      grid-row: 3;
      margin-right: 15px;
    }
  }
}

/* Small Screens */
@media only screen and (max-width: 600px) {
  .app {
    margin: 0;
  }
}
</style>
