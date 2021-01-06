import { shallowMount, mount,  createLocalVue } from "@vue/test-utils";
import { createRouter, createWebHistory, VueRouter } from 'vue-router'


import Vue from 'vue'
import Vuex from 'vuex'
import App from "../../src/App.vue";

  beforeEach(()=>{
    const localVue = createLocalVue()
    localVue.use(vuetify)

    wrapper = shallowMount(Home, {
      localVue
    });
  })
test('routing test', async () => {
  const errorHandler = (err, vm, info) => {
    expect(err).toBeInstanceOf(Error)
  }
  
  const localVue = createLocalVue({
    errorHandler
  })
  
  router.push('/')
  await router.isReady()
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })
  expect(wrapper.html()).toContain('Welcome to the blogging app')

  await wrapper.find('a').trigger('click')
  expect(wrapper.html()).toContain('Testing Vue Router')
})

test('routing', () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('Home')
  expect(wrapper.html()).toContain('About')
  expect(wrapper.html()).toContain('Places')
  expect(wrapper.html()).toContain('Details')
  expect(wrapper.html()).toContain('Login')
})