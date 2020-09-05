<template>
  <div class="app">
    <div class="container">
      <h1>Sign In</h1>
      <form @submit.prevent="onSubmit">
        <div class="username">
          <i class="far fa-user"></i>
          <input type="text" v-model="username" placeholder="username" />
          <span v-if="!isItEmpty(errors)">
            <br />
            {{ errors.username }}
          </span>
        </div>
        <div class="password">
          <i class="fas fa-key"></i>
          <input class="password" type="password" v-model="password" placeholder="password" />
          <span v-if="!isItEmpty(errors)">
            <br />
            {{ errors.password }}
          </span>
        </div>
        <button class="submit" type="submit">
          <fragment v-if="getState.loading">
            <i class="fas fa-spinner fa-spin"></i>
          </fragment>&ensp;Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import isEmpty from "../Utils/isEmpty";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errors: {},
      isAuthenticated: false,
    };
  },
  methods: {
    ...mapActions(["login", "clearErrors"]),
    ...mapGetters(["getState"]),
    isItEmpty(val) {
      return isEmpty(val);
    },
    onSubmit() {
      const data = {
        username: this.username,
        password: this.password,
        who: "admin",
      };
      this.errors = {};
      this.clearErrors();

      this.login(data).then(() => {
        if (!isEmpty(this.$store.getters.getState.errors)) {
          this.errors = this.$store.getters.getState.errors;
        }

        if (this.$store.getters.getState.isAuthenticated) {
          window.location.href = "/";
        }
      });
    },
  },
  created() {
    if (this.$store.getters.getState.isAuthenticated) {
      window.location.href = "/";
    }
  },
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #55b393;
  background-image: linear-gradient(
    315deg,
    #55b393 0%,
    #2af598 50%,
    #43ffc9 100%
  );
  position: relative;
  height: 100vh;
  margin: 0 auto;
}

.container {
  background-color: rgba(245, 245, 245, 0.5);
  border-radius: 15px;
  color: var(--color-ternary);
  margin: 0 auto;
  position: absolute;
  transform: translateY(40%);
  left: 0;
  right: 0;

  &::before {
    content: "";
    background-image: radial-gradient(
        circle,
        rgba(243, 255, 249, 0.5) 0%,
        rgba(28, 255, 134, 0.5) 35%,
        rgba(118, 255, 212, 0.5) 100%
      ),
      url("../../assets/logo.png");
    background-size: contain;
    border-radius: 2em;
    left: 45%;
    right: 50%;
    padding: 25px;
    position: absolute;
    top: -1.75em;
  }

  h1 {
    margin: 0;
    text-align: center;
  }
}

form {
  display: flex;
  flex-direction: column;

  input {
    background: rgb(0, 161, 108);
    border: none;
    color: white;
    outline: none;

    &::placeholder {
      color: white;
    }

    &:-moz-placeholder {
      color: white;
    }

    &:-ms-input-placeholder {
      color: white;
    }
  }

  button.submit {
    background-color: var(--color-secondary);
    border: 0;
    border-radius: 15px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    color: white;
    transition: all 600ms ease;
    -webkit-transition: all 600ms ease;
    -moz-transition: all 600ms ease;

    &:hover {
      box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
        0 4px 15px 0 rgba(0, 0, 0, 0.15);
    }

    &:focus {
      outline: none;
      border: 1px var(--bg-primary) dashed;
      border-radius: 20px;
    }
  }

  span {
    color: rgb(209, 47, 47);
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .container {
    padding: 1.75em 3rem;
    width: 20vw;
  }

  form {
    text-align: center;

    div {
      margin: 0 5%;
    }

    input {
      border-radius: 15px;
      margin: 15px 3% 10px;
      opacity: 0.5;
      padding: 1em;
    }

    button.submit {
      margin: 1em auto;
      padding: 10px;
      width: 67%;
    }
  }
}
</style>
