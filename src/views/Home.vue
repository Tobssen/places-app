<template>
  <div class="places" >
    <PlaceCard v-for="place in places" :key="place.id" :place="place"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceCard from '@/components/PlaceCard.vue'

export default {
  name: 'Home',
  components: {
    PlaceCard
  },
  data() {
    return {
      places: [
                {id: 111, name: "Post Tower", coordinates: "50.715908304046096, 7.130024727181158", image:require('././images/Bonn_Posttower.jpg'), date:"01.01.2020"},
                {id: 112, name: "Beethoven Haus", coordinates: "50.73694246060538, 7.101285829373529", image:require('././images/Bonn_Beethoven_Haus.png'), date:"06.04.2002"},
                {id: 113, name: "Rheinaue", coordinates: "50.71182963646694, 7.141172168659466", image:require('././images/Bonn_Rheinaue.jpg'), date:"02.05.2019"},
                {id: 114, name: "Secret Location", coordinates: "", image:require('././images/Bonn_Secret.jpg'), date:"08.10.2020"},
            ]
    }
  },
}
</script>

<style scoped>
.places {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
