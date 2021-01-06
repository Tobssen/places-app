<template>
  <div>
    <h1> {{ place.name }} </h1>
    <p> last visited {{ place.date }} </p>
    <p> {{ place.description }} </p>
  </div>
</template>


<script>
import PlaceService from '@/services/PlaceService.js'
// @ is an alias to /src
export default {
  data() {
    return {
      place: null,
      id: 111
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