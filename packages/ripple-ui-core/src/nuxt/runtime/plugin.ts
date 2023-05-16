import { rplEventBus } from './../../lib/eventbus'
/* @ts-ignore */
import { defineNuxtPlugin } from '#imports'
/* @ts-ignore */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use({
    install: (app) => {
      app.provide('$rplEvent', rplEventBus)
    }
  })
})
