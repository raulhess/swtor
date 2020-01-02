<template>
  <q-page style="height: 1px;">
    <div class="fit q-pa-md" >
      <q-card class="sw-container scroll" style="height: inherit;">
        <q-card-section>
          Olá
        </q-card-section>
        <q-list>
          <q-item clickable to="/character-creation">
            <q-item-section class="text-primary">
              Criação de Personagem
            </q-item-section>
          </q-item>
          <q-item clickable to="/species">
            <q-item-section class="text-primary">
              Espécies
            </q-item-section>
          </q-item>
          <q-item clickable to="/classes">
            <q-item-section class="text-primary">
              Classes
            </q-item-section>
          </q-item>
          <q-item clickable to="/skills">
            <q-item-section class="text-primary">
              Perícias
            </q-item-section>
          </q-item>
          <q-item clickable to="/feats">
            <q-item-section class="text-primary">
              Talentos e Poderes
            </q-item-section>
          </q-item>
          <q-item clickable to="/gear">
            <q-item-section class="text-primary">
              Equipamento
            </q-item-section>
          </q-item>
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
