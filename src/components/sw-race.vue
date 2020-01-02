<template>
  <div v-if="raceData">
    <q-img :src="require(`../assets/${raceIndex}.png`)" class="rounded-borders"></q-img>
    <q-item class="q-pa-none">
      <q-item-section>
        <q-item-label class="text-bold" style="font-size: 18px;">{{raceData.label}}</q-item-label>
        <q-item-label caption>{{raceData.subtitle}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="q-pa-none">
      <q-item-section>{{raceData.description}}</q-item-section>
    </q-item>
    <q-item class="q-pa-none">
      <q-item-section>
        <q-item-label>Escolha 3 perícias da lista abaixo:</q-item-label>
        <q-item-label caption>{{raceData.skills}}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
  <div v-else >
    <q-icon name="mdi-alert" color="grey-7" size="20px"></q-icon>  Erro: raça inválida
  </div>
</template>
<script>
import { races } from '../data/races'

export default {
  props: {
    raceIndex: String,
    required: true
  },

  data() {
    return {
      systemRaces: {}
    }
  },

  computed: {
    raceData: function() {
      return this.systemRaces[this.raceIndex]
    }
  },

  beforeMount() {
    this.systemRaces = races
  }
};
</script>