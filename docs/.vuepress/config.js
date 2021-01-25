const themeConfig = require('./config/theme/')

module.exports = {
  title: "赵庄王",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  dest: './pages',
  base: '/vue3-ts/',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/medium-zoom', 'flowchart'],
    ["@vuepress-reco/vuepress-plugin-bgm-player",
    {
      audios: [
        {
          name: '不离开我',
          artist: '乙未豪客传奇',
          url: '/audio/不离开我.mp3',
          cover: '/images/audio1.jpg'
        },
        {
          name: '女儿心事难诉说',
          artist: '乙未豪客传奇',
          url: '/audio/女儿心事难诉说.mp3',
          cover: '/images/audio2.jpg'
        },
        {
          name: '谁说也不信它',
          artist: '乙未豪客传奇',
          url: '/audio/谁说也不信它.mp3',
          cover: '/images/audio3.jpg'
        },
        {
          name: '路不平',
          artist: '乙未豪客传奇',
          url: '/audio/路不平.mp3',
          cover: '/images/audio4.jpg'
        },
        {
          name: '就算是河干',
          artist: '乙未豪客传奇',
          url: '/audio/就算是河干.mp3',
          cover: '/images/audio5.jpg'
        },
        {
          name: '情比天地久',
          artist: '乙未豪客传奇',
          url: '/audio/情比天地久.mp3',
          cover: '/images/audio6.jpg'
        },
        {
          name: '等待只有离别',
          artist: '乙未豪客传奇',
          url: '/audio/等待只有离别.mp3',
          cover: '/images/audio7.jpg'
        },

      ],
      position: {
        left: "10px",
        bottom: "10px",
        zIndex: 99999
      },
      shrinkMode: 'mini',
      floatPosition: 'left',
      floatStyle: {
        bottom: '200px',
        'z-index': '999999'
      },
    }
  ],
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      messages: {
        welcome: '世界上最好的外婆',
        home: '一定要谦虚',
        theme: '不能让别人吃亏',
        close: '失败了没事，我们还会再来，有手有脚就不怕。'
      },
      messageStyle: {
        right: '10px',
        bottom: '190px'
      },
      modelStyle: {
        right: '90px',
        bottom: '-20px',
        opacity: '0.9'
      },
      btnStyle: {
        right: '90px',
        bottom: '40px',
      },
    },
  ],
  [
    "vuepress-plugin-auto-sidebar",
  ],]
}  