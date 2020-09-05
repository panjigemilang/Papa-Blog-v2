<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="368.222"
    height="363.623"
    viewBox="0 0 368.222 363.623"
  >
    <defs>
      <filter
        id="a"
        x="206.536"
        y="268.51"
        width="95.113"
        height="95.113"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="b" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient id="c" x1="0.787" y1="0.942" x2="0.335" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#20c65a" />
        <stop offset="0.253" stop-color="#14f257" />
        <stop offset="1" stop-color="#02c96c" />
      </linearGradient>
      <filter
        id="d"
        x="42.324"
        y="0"
        width="325.899"
        height="325.899"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="e" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="e" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(5 6)">
      <g class="h" transform="matrix(1, 0, 0, 1, -5, -6)">
        <circle class="a" cx="38.557" cy="38.557" r="38.557" transform="translate(215.54 274.51)" />
      </g>
      <g class="g" transform="matrix(1, 0, 0, 1, -5, -6)">
        <circle class="b" cx="153.949" cy="153.949" r="153.949" transform="translate(51.32 6)" />
      </g>
      <g transform="translate(188.623 329.258)">
        <line class="c" x2="18.862" transform="translate(17.753 0)" />
        <line class="d" transform="translate(0 0)" />
      </g>
      <g transform="translate(0 101.801)">
        <line class="e" x2="98.75" transform="translate(31.067)" />
        <line class="d" x2="13.315" />
        <line class="f" x2="0.555" transform="translate(146.46)" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "ParticleThree",
};
</script>

<style scoped>
.a {
  fill: #36ad73;
}

.a,
.b {
  opacity: 0.6;
}

.b {
  fill: url(#c);
}

.c,
.d,
.e,
.f {
  fill: none;
  stroke-linecap: round;
  stroke-width: 10px;
}

.c {
  stroke: #0a9d53;
  opacity: 0.56;
}

.d {
  stroke: #5f9c94;
  opacity: 0.7;
}

.e,
.f {
  stroke: #36ad73;
}

.e {
  opacity: 0.8;
}

.f {
  opacity: 0.5;
}

.g {
  filter: url(#d);
}

.h {
  filter: url(#a);
}
</style>