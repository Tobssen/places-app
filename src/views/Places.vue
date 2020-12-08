<template>
  <div class="places" >
    <PlaceCard v-for="place in places" :key="place.id" :place="place"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceCard from '@/components/PlaceCard.vue'
import PlaceService from '@/services/PlaceService.js'

export default {
  name: 'places',
  components: {
    PlaceCard
  },
  data() {
    return {
      places: []
    }
  },
  mounted () {
    this.getPlaces()
  },
  methods: {
    async getPlaces () {
      const response = await PlaceService.fetchPlaces()
      this.places = response.data
    }
  }
}
</script>

<style scoped>
.places {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
