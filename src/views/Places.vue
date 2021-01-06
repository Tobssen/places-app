<template>
  <div class="places">
    <PlaceCard
      v-for="place in places"
      :id="place.id"
      :key="place.id"
      :place="place"
      
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceCard from "@/components/PlaceCard.vue";
import PlaceService from "@/services/PlaceService.js";

export default {
  name: "places",
  components: {
    PlaceCard
  },
  data() {
    return {
      places: []
    };
  },
  mounted() {
    this.getPlaces();
  },
  methods: {
    async getPlaces() {
      const response = await PlaceService.fetchPlaces();
      this.places = response.data;
    },
    toggleDivClass(placeId) {
      console.log(placeId + document.getElementById(placeId));
      document.getElementById(placeId).classList.toggle("place-card-click");
      var x = document.getElementById("p" + placeId);

      console.log(x);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      document.getElementById(placeId).classList.toggle("place-card");
    }
  }
};
</script>

<style scoped>
.places {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
