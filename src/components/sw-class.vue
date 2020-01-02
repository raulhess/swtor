<template>
  <div v-if="classData">
    <q-img :src="require(`../assets/${classIndex}.png`)" class="rounded-borders"></q-img>
    <q-item class="q-pa-none">
      <q-item-section>
        <q-item-label class="text-bold" style="font-size: 18px;">{{classData.label}}</q-item-label>
        <q-item-label caption>{{classData.subtitle}}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="q-pa-none">
      <q-item-section>{{classData.description}}</q-item-section>
    </q-item>
    <q-item class="q-pa-none">
      <q-item-section>
        <q-item-label>Receba as duas perícias abaixo:</q-item-label>
        <q-item-label caption>{{classData.skills}}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
  <div v-else >
    <q-icon name="mdi-alert" color="grey-7" size="20px"></q-icon>  Erro: classe inválida
  </div>
</template>
<script>
import { classes } from '../data/classes'

export default {
  props: {
    classIndex: String,
    required: true
  },

  data() {
    return {
      systemClasses: {}
    }
  },

  computed: {
    classData: function() {
      return this.systemClasses[this.classIndex]
    }
  },

  beforeMount() {
    console.log(classes)
    this.systemClasses = classes
  }
};
</script>