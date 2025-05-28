//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF7',
  description: 'Descripció',
  base: '/UF7/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'POO I',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: '2. Fonaments d’una classe', link: '/2-fonaments' },
        { text: '3. Objectes', link: '/3-objectes' },
        { text: "4. Tipus d’accés als membres d’una classe (Visibilitat)", link: '/4-visibilitat' },
        { text: "5. Mètodes", link: '/5-metodes' },
        { text: '6. Constructors', link: '/6-constructors' },
        { text: '7. Fonaments d’una classe', link: '/7-constants' },
        { text: '8. Arrays d\'objectes', link: '/8-arrays_objectes' },
        { text: 'Exemples', link: '/9-exemples' },
        { text: 'Exercicis', link: '/10-exercicis' },
      ]},
      { text: '📚 Continguts addicionals', items: [
        { text: 'Tipus enumerat', link: '/11-add_enum' },
        { text: 'Mètode toString', link: '/12-add_tostring' },
        { text: 'Exemple conjunt', link: '/13-exemple' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: '2. Fonaments d’una classe', link: '/2-fonaments' },
          { text: '3. Objectes', link: '/3-objectes' },
          { text: "4. Tipus d’accés als membres d’una classe (Visibilitat)", link: '/4-visibilitat' },
          { text: "5. Mètodes", link: '/5-metodes' },
          { text: '6. Constructors', link: '/6-constructors' },
          { text: '7. Fonaments d’una classe', link: '/7-constants' },
          { text: '8. Arrays d\'objectes', link: '/8-arrays_objectes' },
          { text: 'Exemples', link: '/9-exemples' },
          { text: 'Exercicis', link: '/10-exercicis' },
        ]
      },
      { text: '📚 Continguts addicionals', items: [
        { text: 'Tipus enumerat', link: '/11-add_enum' },
        { text: 'Mètode toString', link: '/12-add_tostring' },
        { text: 'Exemple conjunt', link: '/13-exemple' },
        { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
        { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
