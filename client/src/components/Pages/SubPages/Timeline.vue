<template>
  <div class="timeline-app">
    <h1 class="title">Postingan Saya</h1>
    <div class="timeline">
      <div class="line"></div>
      <ul>
        <li @click.prevent="setActive(1)" :class="active === 1 ? 'active' : ''">
          <span></span>
          <div class="circle">
            <p>2020</p>
          </div>
        </li>
        <li @click.prevent="setActive(2)" :class="active === 2 ? 'active' : ''">
          <span></span>
          <div class="circle">
            <p>2021</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      active: 1,
    };
  },
  props: {
    timelineActiveProps: {
      default: 1,
      type: Number,
    },
  },
  created() {
    this.active = this.timelineActiveProps;
  },
  methods: {
    setActive(active) {
      this.active = active;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/dist/prefix";

.timeline-app {
  margin: var(--spacing-lg) 0;
  margin-bottom: calc(var(--spacing-xl) + var(--spacing-lg));
}

.line {
  background: var(--color-secondary);
  border-radius: 5px;
  height: 8px;
  width: 100%;
}

ul {
  display: flex;
  margin: 0;
  justify-content: center;

  li {
    display: inline-block;
    font-size: var(--font-sm);
    margin: 0 auto;
    opacity: 0.7;

    &.active {
      font-size: var(--font-md);
      opacity: 1;
      pointer-events: none;

      .circle {
        background-color: var(--color-primary-dark);
        height: 80px;
        width: 80px;

        p {
          color: white;
          left: 15%;
        }
      }
    }

    span {
      background-color: var(--color-primary);
      display: block;
      height: 50px;
      margin: 0 auto;
      width: 4px;
    }

    .circle {
      @include prefix(transition, 0.3s transform, webkit moz ms o);
      background-color: var(--color-secondary);
      border-radius: 50%;
      cursor: pointer;
      height: 60px;
      position: relative;
      width: 60px;

      &:hover {
        @include prefix(transform, scale(1.3), webkit moz ms o);
      }

      p {
        margin: 0;
        position: absolute;
        top: 30%;
        left: 20%;
      }
    }
  }
}
</style>