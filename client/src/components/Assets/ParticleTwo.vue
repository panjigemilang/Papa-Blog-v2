<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="657.5"
    height="641"
    viewBox="0 0 657.5 641"
  >
    <defs>
      <filter id="Small" x="120" y="0" width="157" height="157" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="linear-gradient"
        x1="0.213"
        y1="0.058"
        x2="0.665"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#20c65a" />
        <stop offset="0.253" stop-color="#14f257" />
        <stop offset="1" stop-color="#02c96c" />
      </linearGradient>
      <filter id="Big" x="0" y="68" width="573" height="573" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur-2" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Main_Particle_2" data-name="Main Particle 2" transform="translate(158 -581)">
      <g transform="matrix(1, 0, 0, 1, -158, 581)" filter="url(#Small)">
        <circle
          id="Small-2"
          data-name="Small"
          cx="69.5"
          cy="69.5"
          r="69.5"
          transform="translate(129 6)"
          fill="#36ad73"
          opacity="0.6"
        />
      </g>
      <g transform="matrix(1, 0, 0, 1, -158, 581)" filter="url(#Big)">
        <circle
          id="Big-2"
          data-name="Big"
          cx="277.5"
          cy="277.5"
          r="277.5"
          transform="translate(9 74)"
          opacity="0.6"
          fill="url(#linear-gradient)"
        />
      </g>
      <g id="Particle_1" data-name="Particle 1" transform="translate(149.5 616.5) rotate(180)">
        <line
          id="Line_1"
          data-name="Line 1"
          x2="34"
          transform="translate(32)"
          fill="none"
          stroke="#0a9d53"
          stroke-linecap="round"
          stroke-width="20"
          opacity="0.56"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          opacity="0.7"
          stroke="#5f9c94"
          stroke-linecap="round"
          stroke-width="20"
          fill="none"
        />
      </g>
      <g id="Particle_1-2" data-name="Particle 1" transform="translate(224.5 1026.5)">
        <line
          id="Line_1-2"
          data-name="Line 1"
          x2="178"
          transform="translate(56)"
          fill="none"
          stroke="#36ad73"
          stroke-linecap="round"
          stroke-width="20"
          opacity="0.8"
        />
        <line
          id="Line_2-2"
          data-name="Line 2"
          x2="24"
          opacity="0.7"
          stroke="#5f9c94"
          stroke-linecap="round"
          stroke-width="20"
          fill="none"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          x2="1"
          transform="translate(264)"
          fill="none"
          stroke="#36ad73"
          stroke-linecap="round"
          stroke-width="20"
          opacity="0.5"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "ParticleTwo"
};
</script>