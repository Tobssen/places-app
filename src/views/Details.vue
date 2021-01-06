<template>
  <div v-if="place">
    <h1> {{ place.name }} </h1>
    <p> last visited {{ place.date }} </p>
    <p> {{ place.description }} </p>
    <span> place #{{ $route.params.id}}</span>
  </div>
</template>


<script>
import PlaceService from '@/services/PlaceService.js'
// @ is an alias to /src
export default {
  props: ['id'],
  data() {
    return {
      place: null
    }
  },
  created(){
    //fetch place data by id
    PlaceService.fetchPlace(this.id)
      .then(response => {
        this.place = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>