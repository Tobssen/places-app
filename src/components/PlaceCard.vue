<template>
  <div class="place-card">
    <img class="place-img" :src="place.image" />
    <span>last visit on {{ place.date }}</span>
    
<router-link to="/details/111">
    <h4>{{ place.name }}</h4>
    
  </router-link>
    <p :id="'p' + place.id" v-show="display == 'inline-block: false'">
      {{ place.description }}
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDivClass(placeId) {
      console.log(placeId + document.getElementById(placeId));
      document.getElementById(placeId).classList.toggle("place-card-click");
    }
  },
  props: {
    place: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.place-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  position: relative;
}

.place-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
.place-card-click {
  position: relative;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 8%;
  transform: scale(1.5);
}
.place-card-click:hover {
  transform: scale(1.51);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}

.place-img {
  width: 250px;
}
</style>
