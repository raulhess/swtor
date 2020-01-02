<template>
  <q-layout view="lHh Lpr lFf" class="bg-star-wars">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-btn
          v-if="$route.params.fromMenu || $route.path === '/' || $route.path === '/character-sheet'"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-btn
          v-else
          flat
          dense
          round
          icon="mdi-arrow-left"
          aria-label="Return"
          @click="$router.go(-1)"
        />

        <q-toolbar-title class="logo-font">
          {{$route.name}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      bordered
      content-class="bg-grey-2"
    >

    <q-list>
      <q-item>
        <q-item-section>
          Star Wars
        </q-item-section>
      </q-item>
      <q-item to="/" exact active-class="text-primary">
        <q-item-section avatar>
          <q-icon name="mdi-home"></q-icon>
        </q-item-section>
        <q-item-section>
          Início
        </q-item-section>
      </q-item>
      <q-item to="/character-sheet" exact active-class="text-primary">
        <q-item-section avatar>
          <q-icon name="mdi-clipboard-text-outline"></q-icon>
        </q-item-section>
        <q-item-section>
          Minha Ficha
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-item-label header>Informações</q-item-label>
      <q-item :to="{ name:'Criação de Personagem', params: {fromMenu: true} }" exact active-class="text-primary">
        <q-item-section>
          Criação de Personagem
        </q-item-section>
      </q-item>
      <q-item :to="{ name:'Espécies', params: {fromMenu: true} }" exact active-class="text-primary">
        <q-item-section>
          Espécies
        </q-item-section>
      </q-item>
      <q-item :to="{ name:'Classes', params: {fromMenu: true} }" exact active-class="text-primary">
        <q-item-section>
          Classes
        </q-item-section>
      </q-item>
      <q-item :to="{ name:'Perícias', params: {fromMenu: true} }" exact active-class="text-primary">
        <q-item-section>
          Perícias
        </q-item-section>
      </q-item>
      <q-item :to="{ name:'Talentos e Poderes', params: {fromMenu: true} }" exact active-class="text-primary">
        <q-item-section>
          Talentos e Poderes
        </q-item-section>
      </q-item>
      <q-item :to="{ name:'Equipamento', params: {fromMenu: true} }" exact active-class="text-primary">
        <q-item-section>
          Equipamento
        </q-item-section>
      </q-item>
    </q-list>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
