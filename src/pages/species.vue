<template>
  <q-page style="height: 1px;">
    <div class="fit q-pa-md" >
      <q-card class="sw-container scroll" style="height: inherit;">
        <q-card-section>
          Espécies
        </q-card-section>
        <q-list>
        </q-list>
      </q-card>
      
        <!-- <race-component raceIndex="humanas"></race-component> -->
    </div>
  </q-page>
</template>

<script>
import raceComponent from '../components/sw-race'

export default {

  name: 'PageIndex',

  components: {
    "race-component": raceComponent
  }

}

</script>
