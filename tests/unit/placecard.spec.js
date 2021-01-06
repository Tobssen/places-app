import { shallowMount, createLocalVue } from "@vue/test-utils";
import PlaceCard from "@/components/PlaceCard.vue";


describe("PlaceCard.vue displays data of places", () => {
  it("renders props.name when passed", () => {
    const place = new Object;
    place.name = "Post Tower";
    place.image = "/images/Bonn_Posttower.jpg"
    place.date = "01.01.2020"
    const wrapper = shallowMount(PlaceCard, {
      props: { place }
    });
    expect(wrapper.text()).toContain(place.name);
    expect(wrapper.text()).toContain(place.date);
  });
});
