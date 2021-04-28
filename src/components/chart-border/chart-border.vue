<template>
  <div>
    <svg width="680" height="240" class="border"><polygon
      fill="transparent"
      points="10, 27 10, 213 13, 216 13, 219 24, 229
    38, 229 41, 232 73, 232 75, 230 81, 230
    85, 234 595, 234 599, 230 605, 230
    607, 232 639, 232 642, 229
    656, 229 667, 219 667, 216
    670, 213 670, 27 667, 25 667, 21
    656, 11 642, 11 639, 8 607, 8 605, 10
    599, 10 595, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24"
    /></svg>
    <svg width="150px" height="150px" class="left-top border"><polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;#4fd2dd" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#235fa7"><animate attributeName="fill" values="#235fa7;#4fd2dd;#235fa7" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;transparent" dur="1s" begin="0s" repeatCount="indefinite" /></polygon></svg>
    <svg width="150px" height="150px" class="right-top border"><polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;#4fd2dd" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#235fa7"><animate attributeName="fill" values="#235fa7;#4fd2dd;#235fa7" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;transparent" dur="1s" begin="0s" repeatCount="indefinite" /></polygon></svg>
    <svg width="150px" height="150px" class="left-bottom border"><polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;#4fd2dd" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#235fa7"><animate attributeName="fill" values="#235fa7;#4fd2dd;#235fa7" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;transparent" dur="1s" begin="0s" repeatCount="indefinite" /></polygon></svg>
    <svg width="150px" height="150px" class="right-bottom border"><polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;#4fd2dd" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#235fa7"><animate attributeName="fill" values="#235fa7;#4fd2dd;#235fa7" dur="0.5s" begin="0s" repeatCount="indefinite" /></polygon> <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd"><animate attributeName="fill" values="#4fd2dd;#235fa7;transparent" dur="1s" begin="0s" repeatCount="indefinite" /></polygon></svg>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.border {
  position: absolute;
  display: block;
  &.right-top  {
    right: 0;
    transform: rotateY(180deg);
  }
  &.left-bottom {
    bottom: 0;
    transform: rotateX(180deg);
  }
  &.right-bottom {
    right: 0;
    bottom: 0;
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
