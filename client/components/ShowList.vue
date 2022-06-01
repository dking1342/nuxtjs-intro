<template>
    <div class="container movies">
      <div id="movie-grid" class="movies-grid">
        <div v-for="show in showList" :key="show.id">
          <ShowItem :item="show" />
          <NuxtLink class="button button-light" :to="{name: 'movies-movieid', params: {movieid: show.id } }">
            Get More Info
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

<script>
  // import { ShowSubType } from "../types/show";

  export default {
    name:"ShowList",
    // eslint-disable-next-line vue/require-prop-types
    props:["shows"],
    data(props) {
      return{
        showList:props.shows
      }
    },
    
  }
</script>

<style lang="scss" scoped>
  .movies {
    padding: 32px 16px;
    .movies-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>