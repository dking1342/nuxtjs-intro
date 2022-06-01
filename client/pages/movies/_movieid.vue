<template>
  <div class="container single-movie">
    <div v-if="typeof show === 'object'">
      <ShowItem :item="show" />
      <NuxtLink class="button button-light" :to="{name: 'index'}">
        Go Back
      </NuxtLink>

    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name:"SingleShow",
    data(){
      return {
        show: ""
      }
    },
    async fetch(){
      await this.getSingleShow();
    },
    head() {
      return {
        title: this.show.name,
      }
    },
    methods:{
      async getSingleShow(){
        const url = `https://api.tvmaze.com/shows/${this.$route.params.movieid}`
        const data = axios.get(url);
        const result = await data;
        this.show = result.data;

      }
    }
  }
</script>

<style lang="scss" scoped>
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }
    .movie-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }
      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;
        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }
      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>