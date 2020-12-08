<template>
  <div class="place-card">
    <img class="place-img" :src="require(place.image)"/>
    <span>last visit on {{ place.date }}</span>
    <h4>{{ place.name }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.place-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.place-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.place-img{
  width: 250px;

}
</style>
