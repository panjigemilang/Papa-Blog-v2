<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="829"
    height="794"
    viewBox="0 0 829 794"
  >
    <defs>
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
      <filter id="Big" x="35" y="0" width="794" height="794" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_11" data-name="Group 11" transform="translate(-942 -41)">
      <g id="Main_Particle_1" data-name="Main Particle 1" transform="translate(-195 111)">
        <g transform="matrix(1, 0, 0, 1, 1137, -70)" filter="url(#Big)">
          <circle
            id="Big-2"
            data-name="Big"
            cx="388"
            cy="388"
            r="388"
            transform="translate(44 6)"
            opacity="0.5"
            fill="url(#linear-gradient)"
          />
        </g>
        <circle
          id="Small"
          cx="57.5"
          cy="57.5"
          r="57.5"
          transform="translate(1772 540)"
          fill="#20c65a"
          opacity="0.5"
        />
        <circle
          id="Med"
          cx="124.5"
          cy="124.5"
          r="124.5"
          transform="translate(1137 -57)"
          fill="#0a9d53"
          opacity="0.8"
        />
      </g>
      <g id="Particle_1" data-name="Particle 1" transform="translate(1434.5 153.5)">
        <line
          id="Line_1"
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
          id="Line_2"
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
      <g id="Particle_1-2" data-name="Particle 1" transform="translate(1201.5 765.5)">
        <line
          id="Line_1-2"
          data-name="Line 1"
          x2="34"
          transform="translate(32)"
          fill="none"
          stroke="#36ad73"
          stroke-linecap="round"
          stroke-width="20"
          opacity="0.8"
        />
        <line
          id="Line_2-2"
          data-name="Line 2"
          opacity="0.7"
          stroke="#5f9c94"
          stroke-linecap="round"
          stroke-width="20"
          fill="none"
        />
      </g>
      <g id="Particle_1-3" data-name="Particle 1" transform="translate(1309.5 728.5) rotate(180)">
        <line
          id="Line_1-3"
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
          id="Line_2-3"
          data-name="Line 2"
          x2="24"
          opacity="0.7"
          stroke="#5f9c94"
          stroke-linecap="round"
          stroke-width="20"
          fill="none"
        />
        <line
          id="Line_3-2"
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
  name: "ParticleOne"
};
</script>