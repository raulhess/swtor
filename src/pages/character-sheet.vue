<template>
  <q-page style="height: 1px;">
    <div class="fit q-pa-md" >
      <q-card class="sw-container scroll" style="height: inherit;">
        <q-card-section>
          <class-component classIndex="jediConsular"></class-component>
        </q-card-section>
        <q-list>
        </q-list>
      </q-card>
        
    </div>
  </q-page>
</template>

<script>
import classComponent from '../components/sw-class'
import raceComponent from '../components/sw-race'

export default {

  name: 'PageIndex',

  components: {
    "class-component": classComponent,
    "race-component": raceComponent
  }

}

</script>
