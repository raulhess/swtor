
const routes = [
  {
    path: '/',
    component: () => import('layouts/menu-layout.vue'),
    children: [
      { path: '', name: 'Star Wars: Role Playing', component: () => import('pages/index.vue') },
      { path: '/character-creation', name: 'Criação de Personagem', component: () => import('pages/character-creation.vue') },
      { path: '/character-sheet', name: 'Minha Ficha', component: () => import('pages/character-sheet.vue') },
      { path: '/species', name: 'Espécies', component: () => import('pages/species.vue') },
      { path: '/classes', name: 'Classes', component: () => import('pages/classes.vue') },
      { path: '/skills', name: 'Perícias', component: () => import('pages/skills.vue') },
      { path: '/feats', name: 'Talentos e Poderes', component: () => import('pages/feats.vue') },
      { path: '/gear', name: 'Equipamento', component: () => import('pages/gear.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
