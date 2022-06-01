<template>
  <div class="movie">
    <div v-if="show.image !== null" class="movie-img">
      <img :src="show.image.medium" :alt="show.name">
      <p class="review">{{ show.rating.average || "N/A" }}</p>
      <p class="overview">{{ show.summary.slice(0,400) }}<span v-if="show.summary.length > 400">...</span></p>
    </div>
    <div v-else class="movie-img">
      <img src="../assets/imgs/empty.jpg" :alt="show.name">
      <p class="review">{{ show.rating.average || "N/A" }}</p>
      <p class="overview">{{ show.summary.slice(0,400) }}<span v-if="show.summary.length > 400">...</span></p>
    </div>
    <div class="info">
      <p class="title">{{ show.name.slice(0,25) }} <span v-if="show.name.length > 25">...</span></p>
      <div class="release">
        <p>
          Show Time: {{ show.schedule.time || "N/A" }}
          <br>
          Days: 
          <span v-for="day in show.schedule.days" :key="day">
            {{ day }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ShowItem",
    // eslint-disable-next-line vue/require-prop-types
    props:["item"],
    data(){
      return{
        show:this.item,
      }
    }
  }
</script>

<style lang="scss" scoped>
.movie {
  position: relative;
  display: flex;
  flex-direction: column;
  .movie-img {
    height: 100%;
    position: relative;
    overflow: hidden;
    &:hover {
      .overview {
        transform: translateY(0);
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .review {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #c92502;
      color: #fff;
      border-radius: 0 0 16px 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .overview {
      line-height: 1.5;
      position: absolute;
      bottom: 0;
      background-color: rgba(201, 38, 2, 0.9);
      padding: 12px;
      color: #fff;
      transform: translateY(100%);
      transition: 0.3s ease-in-out all;
    }
  }
  .info {
    margin-top: auto;
    .title {
      margin-top: 8px;
      color: #fff;
      font-size: 20px;
    }
    .release {
      margin-top: 8px;
      color: #c9c9c9;
      margin-bottom: 25px;
    }
    .button {
      margin-top: 8px;
    }
  }
}
</style>