/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "config.rb",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "controllers/admin/admin.js",
    "revision": "8caaa8ef216ccd4f301fd16404d718d1"
  },
  {
    "url": "CRM/CRM/assets/css/bulma.css",
    "revision": "4da2abcca740c11e9f6f370e7a9cd389"
  },
  {
    "url": "CRM/CRM/assets/css/core_deep-blue.css",
    "revision": "4ec3bf8616bacc6051518e6dad7bed29"
  },
  {
    "url": "CRM/CRM/assets/css/core_demo.css",
    "revision": "e8759e57d86d11fc41113c210934581f"
  },
  {
    "url": "CRM/CRM/assets/css/core_flashy.css",
    "revision": "eb0f00e2bbe0ea20eec0ff841462b972"
  },
  {
    "url": "CRM/CRM/assets/css/core_green.css",
    "revision": "90d01086b9bdabdc3e6439c7d1b287cf"
  },
  {
    "url": "CRM/CRM/assets/css/core_lemonade.css",
    "revision": "90b1040736401dc28645d523e5cc3d21"
  },
  {
    "url": "CRM/CRM/assets/css/core.css",
    "revision": "a591916cf0f61ad44182a3033f9ae578"
  },
  {
    "url": "CRM/CRM/assets/css/dashboard.css",
    "revision": "ef3154eb31eac7865850595ee2a4d453"
  },
  {
    "url": "CRM/CRM/assets/css/icons.min.css",
    "revision": "fedfd2da0e1f3d192fc87d17afbffc8b"
  },
  {
    "url": "CRM/CRM/assets/fonts/fontawesome-webfont.woff2",
    "revision": "db812d8a70a4e88e888744c1c9a27e89"
  },
  {
    "url": "CRM/CRM/assets/fonts/fontello.woff",
    "revision": "9fa4825f8b1b2fc3ce730672443ecf10"
  },
  {
    "url": "CRM/CRM/assets/fonts/iconsmind.woff",
    "revision": "2864469c0e8a84417f318ee2cac54b04"
  },
  {
    "url": "CRM/CRM/assets/fonts/material-icons/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "CRM/CRM/assets/fonts/material-icons/MaterialIcons-Regular.ijmap",
    "revision": "ed6a98d002bc0b535dd8618f3ae05fe7"
  },
  {
    "url": "CRM/CRM/assets/fonts/material-icons/MaterialIcons-Regular.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "CRM/CRM/assets/fonts/material-icons/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "CRM/CRM/assets/fonts/material-icons/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "CRM/CRM/assets/fonts/material-icons/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "CRM/CRM/assets/fonts/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "CRM/CRM/assets/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "CRM/CRM/assets/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "CRM/CRM/assets/fonts/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "CRM/CRM/assets/fonts/simple-line-icons.ttf",
    "revision": "b086c71b8b7d9097697af91899695ebe"
  },
  {
    "url": "CRM/CRM/assets/fonts/text/nexa/Nexa Bold.otf",
    "revision": "c9f309b3d47969ecac64a77a6c672594"
  },
  {
    "url": "CRM/CRM/assets/fonts/text/nexa/Nexa Light.otf",
    "revision": "12108809f49c49bcdc126dcecc938761"
  },
  {
    "url": "CRM/CRM/assets/fonts/text/nexa/NexaBold.ttf",
    "revision": "fec9971197973f248e48048ccdcbeeb2"
  },
  {
    "url": "CRM/CRM/assets/fonts/text/nexa/NexaBold.woff",
    "revision": "e0f8e03fa0dcf69ce3f134bf60b51563"
  },
  {
    "url": "CRM/CRM/assets/fonts/text/nexa/NexaLight.ttf",
    "revision": "2b0e0003cb3ce5eb2ebf08480460851c"
  },
  {
    "url": "CRM/CRM/assets/fonts/text/nexa/NexaLight.woff",
    "revision": "79307e1777e87458f573c405ba43427e"
  },
  {
    "url": "CRM/CRM/assets/images/bg/dashboard/chart-bg.svg",
    "revision": "ba96450892a36b6eddbceb48096c8e3e"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/footer-chart-waves.png",
    "revision": "ffee55d8fdd7afdd32e14b5f5583de8c"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/footer-chart.png",
    "revision": "dccd6b6c0226e6a087d4ffbff95ad165"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/footer-chart.svg",
    "revision": "654b7d6cb37a16ab42456e8265eaab5e"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/icon-bg.png",
    "revision": "d1f057b20fa30c5643a3617613f3cb48"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/icon-bg.svg",
    "revision": "4c36224f502ad84e5d25b8455618d49b"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/slant.png",
    "revision": "5d09a9113e3ffda398ec27650391e25f"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/wavy-alt-dark.png",
    "revision": "53de19eb3ae23f56ba47cffb467cd280"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/wavy-alt-footer.png",
    "revision": "d281d98ca41a2d3efb25de0066ea4487"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/wavy-alt.png",
    "revision": "e0e062ab69ea52f1d21ef155a8b2cd23"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/wavy-dark.png",
    "revision": "524811bf6e9adea2b2e82c729ec98ed2"
  },
  {
    "url": "CRM/CRM/assets/images/bg/shapes/wavy.png",
    "revision": "5121df8e724e57a478db172b338a157a"
  },
  {
    "url": "CRM/CRM/assets/images/bg/tech-pattern.png",
    "revision": "eb0aab29ca895db7aa5e696aeba20fc5"
  },
  {
    "url": "CRM/CRM/assets/images/favicon.png",
    "revision": "35571db962991a4b04e560d2a6dab780"
  },
  {
    "url": "CRM/CRM/assets/images/fileuploader-dragdrop-icon.png",
    "revision": "1495949425fdc34292e5876099541c93"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/accordion.svg",
    "revision": "ff6caffe45eabe896a8460c16004dece"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/badges.svg",
    "revision": "4138fb8b9d124d389953764687617307"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/boxes.svg",
    "revision": "cc78eff0ca4217530af79f42a3dfe464"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/buttons.svg",
    "revision": "a3432590c6dc8fd87c02f60a3b78efc8"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/cards.svg",
    "revision": "c725f1e9f2fe0c608e8c282a08f34c27"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/carousel.svg",
    "revision": "946548c039e5a716adc619b39d3188af"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/clients.svg",
    "revision": "27adee776d6e3f1a6e2d82824ed5d9ec"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/colors.svg",
    "revision": "689b300638788b268af4899fc2977b69"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/controls.svg",
    "revision": "27e37046a87623b3d98ec1519e1237d9"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/counters.svg",
    "revision": "a5c90b1e4c406550503aae1372ac1289"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/dropdowns.svg",
    "revision": "37eedbbad9fd5b7f44caeccc4e9af4d5"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/features.svg",
    "revision": "edec60fe55ec9832c48edb50bd1162d8"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/footer.svg",
    "revision": "f37dcfaa9cdb86451bd3c3dfb77d5291"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/forms.svg",
    "revision": "b2e028d6b003497ce21f3ab6e93bbb2f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/grid.svg",
    "revision": "a329de39359151487a5591c74b0b4628"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/icons.svg",
    "revision": "c0bf3f3675b9d6cc2fb69e34a39f4a32"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/inputs.svg",
    "revision": "68c66c942e019061be8e96378a76e3d5"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/lists.svg",
    "revision": "7d32c9473ea4c7fed49a19fa3dfea1d1"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/messages.svg",
    "revision": "a23285e40804aa900607984cdcd66fc3"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/modals.svg",
    "revision": "f74e3e4fbdeb1d5ef3d67809d7c73c36"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/popups.svg",
    "revision": "76ada2c762729fdb12c7f39cd033fc5d"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/pricing.svg",
    "revision": "bc3befe4d271f57c6d2de0910708fdf8"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/tables.svg",
    "revision": "b28b8c6d04c16f0cb4aac799fb2142ed"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/tabs.svg",
    "revision": "f4c56902f999813ea301fc0d2cd7c237"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/team.svg",
    "revision": "94d0c8ea41b992caa837035379cc86f4"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/testimonials.svg",
    "revision": "c265afe6bd3376056ef6728632810c0e"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/timeline.svg",
    "revision": "99e54857861392d5ace418ea2c2569d6"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/typography.svg",
    "revision": "fa609da47fcbd5018db41e90bfe30b43"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/components/uploader.svg",
    "revision": "d809bd341a6e0ec857a0ee37586d0717"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/20percent.svg",
    "revision": "16c59b24a2da4da0167cfd69bcf0ed83"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/bub-blue.svg",
    "revision": "07d8a8c104fa08677c32604b9dfb9030"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/bub-green.svg",
    "revision": "7fc91c67a5187965f319ffdb85d7e1a8"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/bub-purple.svg",
    "revision": "ff34e3b2c4bed73434e00589cee30869"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/chat-profile.svg",
    "revision": "8ac495193624b6c1717ea1bac31ac004"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/chat-widget.svg",
    "revision": "6f20dc758467e19f49be96df095a8c3f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/city.svg",
    "revision": "1c2d71c63cf00c78667056bd8d31893d"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/communicate.svg",
    "revision": "c9b68e94532499f3fa13a7c59c6d533f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/full-team.svg",
    "revision": "17c3c256eae0ecd30c93a6a813c02f1c"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/green-team.svg",
    "revision": "04257999baadb4ec9ae49aea0f66983d"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/invoice-cloud.svg",
    "revision": "142eb346637ffb723b07fe1b77f73b85"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/learn.svg",
    "revision": "918fa715f15698bb5e6c060b9565a441"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/messages.svg",
    "revision": "0a531563984e73bff3cf8e13786920c3"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/metrics.svg",
    "revision": "6aeab8f26a73f732f218a44b6de7ff26"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/mobile-chat.svg",
    "revision": "ea89025cc47341d5e9d335e521bedd8f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/reports.svg",
    "revision": "3f3b6d8b32adc75fda2905141e10d061"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/stats.svg",
    "revision": "59ad1c58c9f6f5621cec8e0d2d19901b"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/support-team.svg",
    "revision": "4a174cf2efdfa5f4cf2d6e2201519032"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/teamwork.svg",
    "revision": "bb45f7e59e3f46072f7ee18d4d6e1263"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/drawings/ui.svg",
    "revision": "fa08cf7a4703987bb63656c9f97bb9b1"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/building.svg",
    "revision": "fefcc9397443922f0698f82777fc1562"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/components.svg",
    "revision": "385572d125b2401a00089eaa453ca036"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/demos.svg",
    "revision": "d3673d1a7ce6b590cff480eb32aeeb52"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/dynamic.svg",
    "revision": "1af32daa615cbabac5978d6468a8f86d"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/bank.svg",
    "revision": "22c23a7479513e67c8d9429442c6c8db"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/business-ready.svg",
    "revision": "19874ebe342754aa415d6af56d99fbbe"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/cash.svg",
    "revision": "d2148b09e1440b9b269a61d3084593cb"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/chrono.svg",
    "revision": "5eb23a65f326b460f45cc0c6956a94d0"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/church.svg",
    "revision": "e7977e9f5d8d757feffb4fd330289641"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/cog.svg",
    "revision": "2dbfc6d6509f50f0b0440570bd3bcf5d"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/company.svg",
    "revision": "e5c157e81e77544e1bb7effb2b2345aa"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/components.svg",
    "revision": "1d87452109243fa4e2f00b83a19d9c28"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/credit-card.svg",
    "revision": "4ba0cb9c32bdf4db12b53724b3c54918"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/dashboard.svg",
    "revision": "b929d36b8313511dc4b217920c844175"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/factory.svg",
    "revision": "c0a8d84cd3e6a4cd0ea19c7ba2a93299"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/flexbox.svg",
    "revision": "b414f9d28c91c714f67af947c24b758e"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/globe-pointer.svg",
    "revision": "1b02306d97e7d7b0267695cdc0d31527"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/laptop-dots.svg",
    "revision": "37bca4c4b0276dfbfeb67191f03d218c"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/plane.svg",
    "revision": "09195592a9f8b95349701e6031f7fd50"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/responsive.svg",
    "revision": "a18920e4546204ba26570677a5156923"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/store.svg",
    "revision": "a23f826bb704be3720629d2c28c053af"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/tablet-dots.svg",
    "revision": "3e03712fd96448506200d56ddf372643"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/wallet.svg",
    "revision": "8f8437c76170b0d6a1052dbe0d2fb468"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v1/warehouse.svg",
    "revision": "428e7fd0e4d53f76687a920db62cb1ca"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v2/attach-icon.png",
    "revision": "a152384becc0ab9d96fadc10ea0c8a99"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v2/close-small.svg",
    "revision": "f872eae1daac0c016f1d986fdd3cf66f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v2/close.svg",
    "revision": "473e30f9124fd3910ea5feac81058bc7"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v2/emoji-icon.png",
    "revision": "9a0a265957dee3c83da7ac2fc8d62d04"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/landing-v2/smile.svg",
    "revision": "9b13d37b0e1633db499d6c32eb473df4"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/modals/error.svg",
    "revision": "a688063dd5dd7ada80d7f0b14ba18894"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/modals/info.svg",
    "revision": "cae592c010b50b39afc705d80c9582f3"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/modals/success.svg",
    "revision": "d0353adab2c0b648f20bd94a9cb18fbf"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/modals/warning.svg",
    "revision": "18d3335dad7d2e3e411da0251a947811"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/modern.svg",
    "revision": "e622c1f16958d6ebcaf3d70e5320a1c7"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/startup/building.svg",
    "revision": "fefcc9397443922f0698f82777fc1562"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/startup/lifesaver.svg",
    "revision": "e16afff7b2499c0834ae298bf701b8fb"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/startup/wallet.svg",
    "revision": "26dbd0a56450e9e721a3faef7ef199db"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/upload.svg",
    "revision": "ed94a5b3543370c8f1c56527b095bc7b"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/icons/wallet.svg",
    "revision": "26dbd0a56450e9e721a3faef7ef199db"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/bulkit.png",
    "revision": "0a2ba71754417f39afd2f0b23fd4bcfd"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing1/invoices.png",
    "revision": "3fb457ba2ea14e396cac864b8b0310b7"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing1/macbook-app.png",
    "revision": "8e5c9b4d4ccb88231682525bb748d479"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing1/macbook-app2.png",
    "revision": "55675888d71345296faa169f580579a1"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing1/opportunities.png",
    "revision": "270cd40cd9a7899dad7c7acb143b8707"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing1/reports.png",
    "revision": "cec8b93c71e1e0a65c0c85632f973eb7"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing1/taxes.png",
    "revision": "495cf02f5c3f5ad1483c60bb4bb2cfa0"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing2/cards-data.png",
    "revision": "921640650c200f67e3b657fe8db1903f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing2/customers.png",
    "revision": "4c39a7d5dae1ecab02b77c96c7db35c0"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing2/macbook-chat.png",
    "revision": "bbe557c4c4a3086ea8f3b56b839675e9"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing2/macbook-chat2.png",
    "revision": "8d5b2dcb27fee66a073157daa018e79a"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing2/stats.png",
    "revision": "9675dbe6e2421bbdd8608c15623f6f38"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing2/ticket-management.png",
    "revision": "dbabf955e6e5925aab561ff0421abffe"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/collaborate.png",
    "revision": "c9197c8e2c66e118a5c016cb850f0bc7"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/employees.png",
    "revision": "9cb0025fc9f3c1d60ef84790f176e418"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/hipboard.png",
    "revision": "e0379f5f534fd37f1f3ed2d509d56e0c"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/hrapp.png",
    "revision": "16b8f7fd181e30df2c5cf059bb960b08"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/hrbg.png",
    "revision": "88a1c8e907061aa68a6b43ecef2b2d3e"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/integrate.png",
    "revision": "b70b78f4ae384c14805c53c24f335acd"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/jobs.png",
    "revision": "ef7138959d9abb4d16fb8eab5c76be60"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/map.svg",
    "revision": "2b13ca12951ab82049b9e9cadd283d6b"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/landing3/roles.png",
    "revision": "9eb1665c3743bf27dc01bd8c25e24c0f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/access-rights.png",
    "revision": "f6851756da12612968d4c5bad62c43fc"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/activity-chart.png",
    "revision": "94ff6d3721486af98a7eaeed1b465101"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/attach-files.png",
    "revision": "bcdc968aca6618ed23f68d6489eedc05"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/create-project.png",
    "revision": "233eaa3e8487c6eab1600ef3f981cd1f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/halfbook.png",
    "revision": "364aebaa6012a9cf25a43598871ae521"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/integrator.png",
    "revision": "c152f4a5b955ae46a6f2cfd936ce0b13"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/ipads.png",
    "revision": "fd32e33d1e3a18710f850409a0294121"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/macbook-board.png",
    "revision": "f2ff76baf1c748411db326c93cdc71f8"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/macbook-phone.png",
    "revision": "d385cd1a6c1cdb71d98358f9bfb6d195"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/phone-slide-1.png",
    "revision": "5c2f7644d07cdd2a18c386744e326ee8"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/phone-slide-2.png",
    "revision": "dea8a6f99a8cb68f3018724206baba4e"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/phone-slide-3.png",
    "revision": "38d0193095e6263ce513833a1273354f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/phone-slide-4.png",
    "revision": "5fa930fa066a9b225528ec0ad1cdc415"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/pipeit.png",
    "revision": "abe236df4b9e67cf2e368c19c1faf4c7"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/project-ui.png",
    "revision": "a28ec83cb53932e97ea2d735e9fd31d1"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/search.png",
    "revision": "75c391b7143891df7e725b569a7630bc"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/mockups/startup/tiles.png",
    "revision": "6e5f8c2e2fd8f1193c54712a54791228"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/access-rights.png",
    "revision": "82f97025f84544c535be156929be0872"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/add-docs.png",
    "revision": "11be1d68ee30f47b520cfce27d797121"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/analytic-widgets.png",
    "revision": "bac056f7f4097aa4f4957f30b04dd96f"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/app-mockup.png",
    "revision": "3f69678a6445e2a7f67b93b37c883859"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/attach-files.png",
    "revision": "7128dff3b71841732fc679f4a885de61"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/bars.png",
    "revision": "fcd0cc1ea0ee17fa7d87fb6e44bc1fcf"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/create-project.png",
    "revision": "9e2f9de22338ee4fbdb0bf14faff7cbe"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/globalytics.png",
    "revision": "c666e1cc536f82948c47936a659d26cf"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/projects.png",
    "revision": "ec956c2c54df6d12584d4b2a9656e75e"
  },
  {
    "url": "CRM/CRM/assets/images/illustrations/UI/table.png",
    "revision": "b44b388224d020e9c04c1a5b50eb94ca"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/asana.svg",
    "revision": "4a6e455537cde1451f06bdfb7c1cedd6"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/campfire.svg",
    "revision": "a454608b46e38397e15ad7951bdea78e"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/chrome.svg",
    "revision": "cae7a225f04d57c1bb2c997460ef7323"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/edge.svg",
    "revision": "2fa4ee479150ff31e392444eaa712a10"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/explorer.svg",
    "revision": "126f10b1c8c00e1abb066d5c8a107525"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/firefox.svg",
    "revision": "5e6cf92ce006e3518b44c0a8cc0476fa"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/github-icon.svg",
    "revision": "0255bf2cd6e42c2fdbe2e189e418929f"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/made-with-bulma--white.png",
    "revision": "1735f2f22464633eec780a0098995605"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/opera.svg",
    "revision": "c8008f8ca1e2e2bbfaab02d9260adb77"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/safari.svg",
    "revision": "6b14e0389588da9e267603e5790f0962"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/slack.svg",
    "revision": "db251f5b1eda3a4641c48a1182475ade"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/taiga.svg",
    "revision": "3763b70aa0df7920843c8ea397ac3761"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/trello.svg",
    "revision": "e0e9cc49fa73d4691912791539adb1eb"
  },
  {
    "url": "CRM/CRM/assets/images/logos/brands/zendesk.svg",
    "revision": "36a9adfcea7baf75088e2d3b842edc03"
  },
  {
    "url": "CRM/CRM/assets/images/logos/buldash.png",
    "revision": "7d59ec5cf059e2f76a4ce764bdcf832b"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo-deep-blue.png",
    "revision": "bdb21c281f8ceb3d4c75dc82116706c1"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo-g.png",
    "revision": "ff32036c6f80ea3804461f42d6fe88c4"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo-green-w.png",
    "revision": "99a3537c2d87f6958c7a56c97ff5d46a"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo-green.png",
    "revision": "d064a404c237f6a2a74cf5f0380410ef"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo-lemonade.png",
    "revision": "0e2cc03c3d4c4d9b3ad0e0a08ec3af44"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo-w.png",
    "revision": "b55e797dbf5d6e2bf1c0c04ae6a57982"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-logo.png",
    "revision": "fb7a8ece027329dc9b2823fd1bf3c422"
  },
  {
    "url": "CRM/CRM/assets/images/logos/bulkit-w.png",
    "revision": "43213689a674d305c6f6db79a9d96b06"
  },
  {
    "url": "CRM/CRM/assets/images/logos/cssninja.svg",
    "revision": "4d302152d7b7d6a54c214dd2a9df8e39"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/bitbreaker.svg",
    "revision": "9fa3024010cbaa71efaf9d1cef184272"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/covenant.svg",
    "revision": "fe82a8c86664b63a3a074211d34f26ee"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/evently.svg",
    "revision": "a97b28596f026f599c180628daac9934"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/grubspot.svg",
    "revision": "caa0ef852fd32b1c80f1cc2972516351"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/gutwork.svg",
    "revision": "98653867e08d8355ab622c63531f0b4f"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/infinite.svg",
    "revision": "b91611ca05d26ef140f9c9bc7c0fd580"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/kromo.svg",
    "revision": "a0903e0a5f4e4bb9547e7dfefaa89f24"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/livetalk.svg",
    "revision": "9643e46f2731a8c0fa21e376a1853a9b"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/phasekit.svg",
    "revision": "cf3f35214539072fcef9eed18d8e13a9"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/powerball.svg",
    "revision": "d7a34d3be12fe2d91c286e815a35db74"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/proactive.svg",
    "revision": "baa2e87bbf38b9088449a0169b4a9644"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/systek.svg",
    "revision": "160d2df1699ffb89b2550fe777c14609"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/taskbot.svg",
    "revision": "ce231e3a1156c62b4f542c83c90a3f85"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/tower.svg",
    "revision": "9ea02430f60f0f0986b9f3c2279d672a"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/transfuseio.svg",
    "revision": "9b16ebc9b86f265d82572ec1e3a03a56"
  },
  {
    "url": "CRM/CRM/assets/images/logos/custom/tribe.svg",
    "revision": "f28c5f79e5b6691957ed7cddbce32b9d"
  },
  {
    "url": "CRM/CRM/assets/images/logos/icon-logo.svg",
    "revision": "c5fc4b21c3bae7220df9e5a30bfacb39"
  },
  {
    "url": "CRM/CRM/assets/images/logos/logo-dash.png",
    "revision": "586b4f53411bdd7fc6b61dd3d61b842a"
  },
  {
    "url": "CRM/CRM/assets/images/logos/logo-grayscale.png",
    "revision": "faa43401357c30f40b57fcff7e150065"
  },
  {
    "url": "CRM/CRM/assets/images/logos/partners/acme-solo.svg",
    "revision": "d14363147a5037b695bd296e2f5eedaf"
  },
  {
    "url": "CRM/CRM/assets/images/logos/partners/acme.svg",
    "revision": "c0ccef38e58c28c7f16f8fed36d04b79"
  },
  {
    "url": "CRM/CRM/assets/images/logos/square-green.svg",
    "revision": "0562e3f73022987faedf2b42a0352ca4"
  },
  {
    "url": "CRM/CRM/assets/images/logos/square-violet.svg",
    "revision": "42bd1dd2d8d8e6b09c4d60368a5eb9f8"
  },
  {
    "url": "CRM/CRM/assets/images/logos/square-white.svg",
    "revision": "b43e4b38aebcb28228c51d25e2d6ce3e"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/angular.png",
    "revision": "e5ca1db21b588f0e37cdd24dd2f91e28"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/bulma.svg",
    "revision": "80c4696bb81d8e35015343c4d9379912"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/c3js-logo.svg",
    "revision": "b7cba92db2bdf858a74660ebee13df50"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/chartjs-logo.svg",
    "revision": "45c814f72ff986e9734d7a778fde3d0b"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/html5.svg",
    "revision": "3695f8ce84461e4661c9327f70560fe3"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/jquery.png",
    "revision": "562f60fa30e8e0cd11852dc684c0c818"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/jquery.svg",
    "revision": "09a22461948a489b9ebc5b396d6f7a88"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/meteor.png",
    "revision": "f880d8289925b6eaac3a6e1e67f9baf4"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/peity-logo.svg",
    "revision": "37c23073b4628af2150af1bf2e602045"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/rails.png",
    "revision": "f8470961eaebfaf61adca78da7dd89af"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/sass.svg",
    "revision": "95498d65c0cc337c202bb991dc0b4c35"
  },
  {
    "url": "CRM/CRM/assets/images/logos/stacks/vuejs.png",
    "revision": "5ad90ada5d70afc705868e8674275fbe"
  },
  {
    "url": "CRM/CRM/assets/images/markers/marker-line.svg",
    "revision": "d58b2d6e83364ba7a4b17676ec5f73ff"
  },
  {
    "url": "CRM/CRM/assets/images/markers/marker-purple.png",
    "revision": "f4e6fd63f326c7b8ab463eeb13cbb6eb"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-about.png",
    "revision": "3d2544fb41d85f5cd1e0017e36b5faec"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-blog.png",
    "revision": "6ecbb0b8f27a327ed9242ff5e14dbd06"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-contact.png",
    "revision": "199d211d25ecca5c0acd56aebe7f18f8"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-home.png",
    "revision": "1b7aeeaffcd508e646f55d09f2576db9"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-portfolio.png",
    "revision": "99fad0473a2c7f687d10bddd6a504ecb"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-post-nosidebar.png",
    "revision": "96dbfd2ca8226548d5e5b63dd7599bdc"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/agency-post-sidebar.png",
    "revision": "1fd2377a944e9e93549cf81c93492e99"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-billboardjs.png",
    "revision": "7db9d97bb4729b0deea6193bea4a01e6"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-blank.png",
    "revision": "ef57f3a2add5db437f2ab4a527ff9966"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-chartjs.png",
    "revision": "77cb797dd43dfbe7295c016233ee6ed4"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-dark.png",
    "revision": "3c753a7a706c9dd85a257dd4601907b6"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-feed.png",
    "revision": "00c2c747c0eb69cdb251be8574849b93"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-login.png",
    "revision": "5f629cb30f47fd40038cf3956b89b901"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-peityjs.png",
    "revision": "c574fa997ff9ea1dc7bce2db58c98cb0"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-post.png",
    "revision": "e06c25bcf00793ed5b44afaeb3d8b135"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-widgets-data.png",
    "revision": "f5358ba637dea0213aef000030ef977f"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard-widgets-social.png",
    "revision": "f53dcadca461bc3b797c6904130f8056"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/dashboard.png",
    "revision": "caf38de23cca544acdb07f99ed1e4d51"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-features.png",
    "revision": "f36895c5e88bc412cc8c323fc5cfddb7"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-login.png",
    "revision": "da6f483cba09aac3a9d99a52b2715f98"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-pricing.png",
    "revision": "3b09535712ecc3dcb8a943c667c1e6f7"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-signup.png",
    "revision": "8ee2b87b5e07a1cd5077ba6906171857"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v1-features.png",
    "revision": "c48680005a2006b1bd89dc76cd216999"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v1-login.png",
    "revision": "af6f9ec1e3035bf7a44f850b2876de39"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v1-pricing.png",
    "revision": "507a1ed3016d4998ffafe04a3e4ddbf0"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v1-signup.png",
    "revision": "18856294bd56458091a89ef762474820"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v1.png",
    "revision": "cd0d819b307dd6e7b217bc7f620f859f"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v2-features.png",
    "revision": "bfdda6e5320967b3789273581234079c"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v2-login.png",
    "revision": "a0521a7f10692cbd0c725ce54854c9dd"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v2-pricing.png",
    "revision": "db4112478803eb5091b38d695007876d"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v2-signup.png",
    "revision": "61bacc320ed4d3af66e52b63da8e96f0"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v2.png",
    "revision": "4ba5cc18b6d7972ef57646af9cbc2cf6"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3-help-article.png",
    "revision": "e3801b0c96a669e001f2da754fb92cc8"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3-help-category.png",
    "revision": "8084254e63e1d86edebb5ee39c94e123"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3-help-center.png",
    "revision": "723cdbb860b76db27d0889f3f81363e7"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3-login.png",
    "revision": "39f0d0a9f25ec32e61aae21aa5b89125"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3-pricing.png",
    "revision": "233f8a6cefc003451644a170c5ada8b8"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3-signup.png",
    "revision": "5e5fb4860ee2181f83f4b2fdbb040fda"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing-v3.png",
    "revision": "2790c2b9370fde291d6c62efcc389c99"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/landing.png",
    "revision": "aa615a3b2388918e7addc1f85fe93c7b"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/startup-about.png",
    "revision": "6db0bc9c64b5fcab3a3814a37989d7fd"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/startup-contact.png",
    "revision": "b7822054a8bba860daf12e38ebaafbc3"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/startup-home.png",
    "revision": "6ee9bb284c390bc80e78d6799941a0d1"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/startup-login.png",
    "revision": "93c7ba483a457587b191c5ef507dc420"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/startup-product.png",
    "revision": "cbcb89715c000254076db3766db10fa9"
  },
  {
    "url": "CRM/CRM/assets/images/photos/captures/startup-signup.png",
    "revision": "1f6cde5caf08c006736cbe71b6024cb1"
  },
  {
    "url": "CRM/CRM/assets/js/billboardjs/billboard.min.css",
    "revision": "36f5cb42860d352807de6c94a7a441eb"
  },
  {
    "url": "CRM/CRM/assets/js/billboardjs/billboard.min.js",
    "revision": "43f2fdcf7617549bf251a15faabe549c"
  },
  {
    "url": "CRM/CRM/assets/js/chartjs/Chart.bundle.min.js",
    "revision": "658dca7101c0e348da6a8898f04a383f"
  },
  {
    "url": "CRM/CRM/assets/js/chosen/chosen.css",
    "revision": "f7f057ff4e8a963a222e9557ae897d19"
  },
  {
    "url": "CRM/CRM/assets/js/chosen/chosen.jquery.min.js",
    "revision": "e343479d0fd80215afc462d692bd56d8"
  },
  {
    "url": "CRM/CRM/assets/js/chosen/chosen.origin.css",
    "revision": "0328a8559f61c9db221e6eebe8f94816"
  },
  {
    "url": "CRM/CRM/assets/js/common.js",
    "revision": "15905f0fff5b52e4e6b5c3f80e69a021"
  },
  {
    "url": "CRM/CRM/assets/js/core/jquery.min.js",
    "revision": "adb784ef9dc257b32965a5da7ee82a8b"
  },
  {
    "url": "CRM/CRM/assets/js/core/modernizr.min.js",
    "revision": "65f1d21d5fcc9d21da758adababd0c3c"
  },
  {
    "url": "CRM/CRM/assets/js/counterup/jquery.counterup.min.js",
    "revision": "5b172bae8311e6a555130ed5c1f5d309"
  },
  {
    "url": "CRM/CRM/assets/js/covervid/covervid.min.js",
    "revision": "48b6d802a1c318d9c80c7bc07d8f8565"
  },
  {
    "url": "CRM/CRM/assets/js/covervid/video/hands.jpeg",
    "revision": "f8a1cba428d9f57b6d080f63e2455d1d"
  },
  {
    "url": "CRM/CRM/assets/js/covervid/video/sample.jpg",
    "revision": "5586fb41e4afd585a182453cb256f970"
  },
  {
    "url": "CRM/CRM/assets/js/d3js/d3.js",
    "revision": "3ef501bf5a5872be659a7390e3664959"
  },
  {
    "url": "CRM/CRM/assets/js/d3js/d3.min.js",
    "revision": "68c8b9a35f7b7400ef73282246f8cbe7"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/datedropper-minimal.css",
    "revision": "cd5033b07b3eeca9c1e3949b77d79646"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/datedropper-theme.css",
    "revision": "9d3dfbee0a809ca661fb61c161014cca"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/datedropper.css",
    "revision": "01ab7197471fc70170d70504f909e654"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/datedropper.js",
    "revision": "b21c80e5755fe3aebb6c7607e94e913b"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/datedropper.min.js",
    "revision": "11677b81c5c4b5ba90203d0d6c2fc2d2"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/src/datedropper.eot",
    "revision": "f85a5eb27a4eabe74d9e3d5b4869c2e9"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/src/datedropper.svg",
    "revision": "484f2e4cb820eb2529117754096eaede"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/src/datedropper.ttf",
    "revision": "f8d112c357d745938cfaa193b9a08a18"
  },
  {
    "url": "CRM/CRM/assets/js/datedropper/src/datedropper.woff",
    "revision": "71966d7a6bd700c3e4f7b00a0e6746dc"
  },
  {
    "url": "CRM/CRM/assets/js/datepicker/datepicker.css",
    "revision": "e00455a97a99b3789f11d598d8adf020"
  },
  {
    "url": "CRM/CRM/assets/js/datepicker/datepicker.min.js",
    "revision": "b8f99f71d347d40a888060d864377bbb"
  },
  {
    "url": "CRM/CRM/assets/js/easyAutocomplete/data/persons.json",
    "revision": "c9e25363272caf2b5ad3d7ee0cb10afe"
  },
  {
    "url": "CRM/CRM/assets/js/easyAutocomplete/easy-autocomplete.css",
    "revision": "5183b95b1256074cc4cdd54a181c7667"
  },
  {
    "url": "CRM/CRM/assets/js/easyAutocomplete/easy-autocomplete.min.css",
    "revision": "2fc47373a364c7428abbecc06d334aea"
  },
  {
    "url": "CRM/CRM/assets/js/easyAutocomplete/jquery.easy-autocomplete.min.js",
    "revision": "023059b6b0d73a03729f9b769221e17c"
  },
  {
    "url": "CRM/CRM/assets/js/embed/embed.js",
    "revision": "64c27d52db7c18265371342bc38236df"
  },
  {
    "url": "CRM/CRM/assets/js/fileuploader/class.fileuploader.php",
    "revision": "14b27c3e5d48cd4770f2043ae75cb07f"
  },
  {
    "url": "CRM/CRM/assets/js/fileuploader/fileuploader.init.js",
    "revision": "fc424e74bbcb80302885564eb7b355cf"
  },
  {
    "url": "CRM/CRM/assets/js/fileuploader/jquery.fileuploader.css",
    "revision": "1fbad620c99c03569fe74663a7b7741d"
  },
  {
    "url": "CRM/CRM/assets/js/fileuploader/jquery.fileuploader.js",
    "revision": "b2a3a5fe36941e17094c1e267bc807a8"
  },
  {
    "url": "CRM/CRM/assets/js/fileuploader/jquery.fileuploader.min.css",
    "revision": "ce537fc540ccd134c0c16afac1c74fce"
  },
  {
    "url": "CRM/CRM/assets/js/fileuploader/jquery.fileuploader.min.js",
    "revision": "432a2465ee4f1f306179e98ca8bd317e"
  },
  {
    "url": "CRM/CRM/assets/js/ggpopover/ggpopover.css",
    "revision": "839ee347c29b73cdf20bd9eee5f1ee9e"
  },
  {
    "url": "CRM/CRM/assets/js/ggpopover/ggpopover.min.js",
    "revision": "431b64284f7774f8a9c7b3eb8a5704a8"
  },
  {
    "url": "CRM/CRM/assets/js/ggpopover/ggtooltip.css",
    "revision": "da4c037a1123453bef22f8c7aa9c7750"
  },
  {
    "url": "CRM/CRM/assets/js/ggpopover/ggtooltip.js",
    "revision": "17ea02f4afaed3f0a08c8a1ecb5c970b"
  },
  {
    "url": "CRM/CRM/assets/js/gmapjs/gmap.min.js",
    "revision": "c16269af83ce3cbb2f65b72107b081f1"
  },
  {
    "url": "CRM/CRM/assets/js/highlightjs/highlight.pack.js",
    "revision": "d4319c771a862f032464e249c17aaa23"
  },
  {
    "url": "CRM/CRM/assets/js/highlightjs/style.css",
    "revision": "098ff773f889b9ecc534a1701efd2001"
  },
  {
    "url": "CRM/CRM/assets/js/iziToast/iziToast.css",
    "revision": "0e86d47404e41afcee1536ea37802478"
  },
  {
    "url": "CRM/CRM/assets/js/iziToast/iziToast.js",
    "revision": "373a4a2e7b6c71909c50ca1b2338fc94"
  },
  {
    "url": "CRM/CRM/assets/js/iziToast/iziToast.min.css",
    "revision": "17ee9ce413ab365a639824710e299739"
  },
  {
    "url": "CRM/CRM/assets/js/iziToast/iziToast.min.js",
    "revision": "3b72655439cec1ef3c0a0350d91d1f42"
  },
  {
    "url": "CRM/CRM/assets/js/jqdropdown/jquery.dropdown.css",
    "revision": "82298a43bf2cf2c11d30ae5dd1472f7b"
  },
  {
    "url": "CRM/CRM/assets/js/jqdropdown/jquery.dropdown.js",
    "revision": "78494f6dc397df6a674e124a10662733"
  },
  {
    "url": "CRM/CRM/assets/js/jqdropdown/jquery.dropdown.min.css",
    "revision": "538be4d90755027dbc66fb221417797d"
  },
  {
    "url": "CRM/CRM/assets/js/jqdropdown/jquery.dropdown.min.js",
    "revision": "4e1e0812f1379debc779a625b60c226f"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/data/jquery.vmap.sampledata.js",
    "revision": "b6f14a696445b519ec8e5b78da5cd25f"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/background.png",
    "revision": "75d3f67f5246629d1ec26828491f1dc1"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/flag.png",
    "revision": "1e0a9e530ace4cbffb6968c25abe49e8"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/globe.png",
    "revision": "f0c4cfa723a81f6dfa8190a0d5073b61"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/black.png",
    "revision": "92a5a37416acf6848fa8c0e199a6556c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/blue.png",
    "revision": "25338dd163940b1e2da90f89656cae5c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/green.png",
    "revision": "64fa0b16db70e82f73d7a29a57b5b4ef"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/grey.png",
    "revision": "1512c12e5a2f8ed7eed8530ab4d9f292"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/orange.png",
    "revision": "f5dd08472261feb83302740cc20bbb5e"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/purple.png",
    "revision": "8aa31bd4fe151f121c04dc83966f859e"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/red.png",
    "revision": "f44e3d75ac2b310fbb9e6360f621a8d8"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/white.png",
    "revision": "a42b172ca6e055d470d6ea77eb39beb1"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/marker/yellow.png",
    "revision": "9d9d9c21e29b9ab32eb899c803eb1cc9"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/thumb.jpg",
    "revision": "57528fb83c6b0439e8b666360b48786e"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/images/tip.png",
    "revision": "ba35d6230d6b8e52f65b6e6c06cbd2a6"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/jquery.vmap.js",
    "revision": "0aaa6bdf8ba02482135c8526a25c3804"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/jquery.vmap.min.js",
    "revision": "935f68d33bdd88a1341647523f7813a2"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/jqvmap.css",
    "revision": "6cf64fd51cec5a4b607330c9dc9fa29c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/jqvmap.min.css",
    "revision": "126a06688aa11c13a58772a516cf6d72"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/continents/jquery.vmap.africa.js",
    "revision": "cc9ac16afbf414a65bd8a45865472f6c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/continents/jquery.vmap.asia.js",
    "revision": "c716ef2cfdb326bbcc1ccb9c6c25cb24"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/continents/jquery.vmap.australia.js",
    "revision": "dcdfcdac23fe1729f54f21755aa44249"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/continents/jquery.vmap.europe.js",
    "revision": "70d3cc99f63d847c464bfb6f3f1d5cc9"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/continents/jquery.vmap.north-america.js",
    "revision": "3d3800a4deac054841c011576b634997"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/continents/jquery.vmap.south-america.js",
    "revision": "c3738028ed62e01282d839e9f88d8224"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.algeria.js",
    "revision": "b9704c1a3b0dcd58f3119bcc41b4172c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.argentina.js",
    "revision": "d9741784ed3a4359e752fb2c8f3d60e9"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.brazil.js",
    "revision": "5659cda1532a42bd4145163f15869379"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.canada.js",
    "revision": "438c6f7d061ab20f9aa384bb276f6975"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.croatia.js",
    "revision": "f2ecd63d0d158ea15412b89ec801f357"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.europe.js",
    "revision": "e6799d0bf35aea03af503460e8adec07"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.france.js",
    "revision": "c70eac0961fa8ea76efbdf15abd95723"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.germany.js",
    "revision": "89bcfa32ef71c4b9ed0822bcd0a66964"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.greece.js",
    "revision": "165f88533873f8f7c53760d850319bc2"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.indonesia.js",
    "revision": "35b58bcca2b8b72474eea6b238826a8c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.iran.js",
    "revision": "4a1d5c7ec410aa49a2fa45f0a49ef758"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.iraq.js",
    "revision": "b719feb53025382e0c0e41cad5e2876b"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.new_regions_france.js",
    "revision": "d59d3f1233c863c08ce523d9eb73c35b"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.russia.js",
    "revision": "c1d08ce854d24821414767e36dba051c"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.serbia.js",
    "revision": "b181cb12b4617373fca67fbc49ac3629"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.tunisia.js",
    "revision": "bb222ffa5aa92078cecb73dfed9e923b"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.turkey.js",
    "revision": "9562ed7a1b008263b90782ee78eeac2a"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.ukraine.js",
    "revision": "96755bdb04df42bd15b08adf3742bc76"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.usa.districts.js",
    "revision": "eec901c8f34697c1fde2659544144fcf"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.usa.js",
    "revision": "43e330fe0440c72344722238695dc793"
  },
  {
    "url": "CRM/CRM/assets/js/jqvmap/maps/jquery.vmap.world.js",
    "revision": "16677403c0e1bef15de9ba1fec0bbc07"
  },
  {
    "url": "CRM/CRM/assets/js/main.js",
    "revision": "dc0f397c1ee9b333a9ef8f3b9edabb48"
  },
  {
    "url": "CRM/CRM/assets/js/pages/agency.js",
    "revision": "e38803b2c1e5757b59b48807833cbc29"
  },
  {
    "url": "CRM/CRM/assets/js/pages/auth.js",
    "revision": "89d45ca13ee767b7a72243bca6543922"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-accordion.js",
    "revision": "8e33bd120d4383d27c1b8ef98e769f68"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-fileinput.js",
    "revision": "69784db512cd28b5d5c9cc2f416decea"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-inputs.js",
    "revision": "7e52af64b76d9f9c9a1384efd6964db0"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-modals.js",
    "revision": "884af6fbcf8a750e19da877e497d41d3"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-quickview.js",
    "revision": "411259156dcc9c0f5a1c47383a1d6019"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-range.js",
    "revision": "905e460d07237a61eacefa023f11d8bf"
  },
  {
    "url": "CRM/CRM/assets/js/pages/components-toasts.js",
    "revision": "35b131ec9430fcc636e265f5fd6342b0"
  },
  {
    "url": "CRM/CRM/assets/js/pages/contact.js",
    "revision": "bc3409a12e2749f0c1e9fcd67cadc396"
  },
  {
    "url": "CRM/CRM/assets/js/pages/dashboard.js",
    "revision": "3a8ea960f575261b495212aaf74a3128"
  },
  {
    "url": "CRM/CRM/assets/js/pages/demo.js",
    "revision": "7165dcfcd90552f528209f42db4d3096"
  },
  {
    "url": "CRM/CRM/assets/js/pages/index.js",
    "revision": "78a5656a73a10af8e495872add25c855"
  },
  {
    "url": "CRM/CRM/assets/js/pages/landing.js",
    "revision": "ae6997634b08548a330b3ec91d2f566f"
  },
  {
    "url": "CRM/CRM/assets/js/pages/landingv1.js",
    "revision": "da98123665bb0205a5aa6d43e6cac83e"
  },
  {
    "url": "CRM/CRM/assets/js/pages/landingv2.js",
    "revision": "06bda74086e4ede18d6e35ec6baa5f48"
  },
  {
    "url": "CRM/CRM/assets/js/pages/landingv3.js",
    "revision": "40f0625eeaf7d89167d18f80a64fea43"
  },
  {
    "url": "CRM/CRM/assets/js/pages/startup.js",
    "revision": "5832001fcab951c53e781353d014813b"
  },
  {
    "url": "CRM/CRM/assets/js/peity/peity.min.js",
    "revision": "425a449b3c24f769c6f6903daba5d402"
  },
  {
    "url": "CRM/CRM/assets/js/scrollreveal/scrollreveal.min.js",
    "revision": "5deb4348d63c0bfbce81c338d35db100"
  },
  {
    "url": "CRM/CRM/assets/js/scrollspy/scrollspy.js",
    "revision": "67c57ba71bd508e341ed8ef75b983689"
  },
  {
    "url": "CRM/CRM/assets/js/scrollspy/scrollspy.min.js",
    "revision": "6859e339eb414513c601a6b765fd8700"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/ajax-loader.gif",
    "revision": "c5cd7f5300576ab4c88202b42f6ded62"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/fonts/slick.eot",
    "revision": "ced611daf7709cc778da928fec876475"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/fonts/slick.svg",
    "revision": "526d7fdf63614222d376257221e8b754"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/fonts/slick.ttf",
    "revision": "d41f55a78e6f49a5512878df1737e58a"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/fonts/slick.woff",
    "revision": "b7c9e1e479de3b53f1e4e30ebac2403a"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/slick-theme.css",
    "revision": "bb4dfbdde8f2a8d4018c1f0293a03483"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/slick.css",
    "revision": "b06073c5a23326dcc332b78d42c7290c"
  },
  {
    "url": "CRM/CRM/assets/js/slick-carousel/slick.min.js",
    "revision": "9cd43d57c2c090bb74b975cbddf84d81"
  },
  {
    "url": "CRM/CRM/assets/js/tagsinput/jquery.tags.input.css",
    "revision": "9d6a3bc2211750b58b17d8a4ce78b243"
  },
  {
    "url": "CRM/CRM/assets/js/tagsinput/jquery.tags.input.js",
    "revision": "7ac7a1d13e4dc357bc6e7117e20cc6d6"
  },
  {
    "url": "CRM/CRM/assets/js/timedropper/timedropper.css",
    "revision": "fe4a840249f2fe938eb2fb24425946de"
  },
  {
    "url": "CRM/CRM/assets/js/timedropper/timedropper.js",
    "revision": "00aeec9bbe1aa0a253bd7afa9e5eb57d"
  },
  {
    "url": "CRM/CRM/assets/js/timedropper/timedropper.min.css",
    "revision": "d6eeb7c33a54145be5b892d29134fe6d"
  },
  {
    "url": "CRM/CRM/assets/js/timedropper/timedropper.min.js",
    "revision": "3a25f38dc516d7670801b2543f707a00"
  },
  {
    "url": "CRM/CRM/assets/js/vivus/vivus.min.js",
    "revision": "d65f9781559b83ede801a4b765e671e3"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop--fade.css",
    "revision": "cc9892456c5780e33e47a03aef6adc5e"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop--fold.css",
    "revision": "4cb1f43b3765d615f169f8ec8375496e"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop--rotate.css",
    "revision": "7fcade0966a9043c7c9212747caef41e"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop--scale.css",
    "revision": "36dcb49f4a10e2bc8b9fadab55b8de39"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop--slide.css",
    "revision": "865861a7c76c335d256468647b986cef"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop--vertical-slide.css",
    "revision": "d7eae35bd2a10c79d0ebc6123223ac1e"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/wallop.css",
    "revision": "9fec7ab95daeba6191d904e8b35236dd"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/Wallop.js",
    "revision": "e08f8d06f7948a13f5ea772542f2e3f3"
  },
  {
    "url": "CRM/CRM/assets/js/wallop/Wallop.min.js",
    "revision": "ba0ddd197020ab3e6e8a4cdfeaf54bb2"
  },
  {
    "url": "CRM/CRM/assets/js/waypoints/jquery.waypoints.min.js",
    "revision": "cebc34dedef229a98275955df75e20e5"
  },
  {
    "url": "CRM/CRM/assets/js/waypoints/noframework.waypoints.min.js",
    "revision": "60aa8e30651177224e47d4e30e0f7636"
  },
  {
    "url": "CRM/CRM/assets/js/waypoints/sticky.min.js",
    "revision": "78646397a965971ef399c53e4c7d427d"
  },
  {
    "url": "CRM/CRM/assets/js/wickedpicker/fonts/fontello.eot",
    "revision": "f8fba4b21da035d6ef093417ce5c9db8"
  },
  {
    "url": "CRM/CRM/assets/js/wickedpicker/fonts/fontello.svg",
    "revision": "f15fca6ccd291552072585fe76a03567"
  },
  {
    "url": "CRM/CRM/assets/js/wickedpicker/fonts/fontello.ttf",
    "revision": "8f13eeb6d015605ac225e7a28f31211c"
  },
  {
    "url": "CRM/CRM/assets/js/wickedpicker/fonts/fontello.woff",
    "revision": "492102fff9ed1f7764be064e61ce686d"
  },
  {
    "url": "CRM/CRM/assets/js/wickedpicker/wickedpicker.min.css",
    "revision": "fe102d7cb17600203aeace4827e8f55a"
  },
  {
    "url": "CRM/CRM/assets/js/wickedpicker/wickedpicker.min.js",
    "revision": "d1f2aaee2734b44dbc3e3479560ba80f"
  },
  {
    "url": "CRM/CRM/assets/scss/_colors.scss",
    "revision": "3225436dc7bf168dde4103cd13b38185"
  },
  {
    "url": "CRM/CRM/assets/scss/_mixins.scss",
    "revision": "a18888085df99d90566af1ac968ba18b"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_accordion.scss",
    "revision": "03c84818cde61d5c47511d1aba9bd6a3"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_boxes.scss",
    "revision": "874442a7c5456fa52b3e58640937e23a"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_buttons.scss",
    "revision": "30e8646c2d5dc964e97b101ac2df33ca"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_cards.scss",
    "revision": "e084296497d5f8a2c7543abdf4df34b4"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_dialogs.scss",
    "revision": "393a268e861349b7f8e74d69f37c61d2"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_dropdowns.scss",
    "revision": "8b99e1ce4968f57460f77684ada28519"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_forms.scss",
    "revision": "2350f23da10259c2dac252e589babb12"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_labels.scss",
    "revision": "cf1fccc9f2fedf858d5a16be832e9d29"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_lists.scss",
    "revision": "784f0dc427b0be47b250a64e4f89e6db"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_messages.scss",
    "revision": "b9102e701d31ff947ed94de0d85c34a7"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_pricing.scss",
    "revision": "c7dbd91b7e2f33be9c8b5594f3e610af"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_tables.scss",
    "revision": "516e693862840b062f5b482a6264053e"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_tabs.scss",
    "revision": "4b4ef1ad191e0eb049fb3604c8061c0c"
  },
  {
    "url": "CRM/CRM/assets/scss/components/_testimonials.scss",
    "revision": "834cbe54df8dd09c34ce1243945c08a7"
  },
  {
    "url": "CRM/CRM/assets/scss/core_deep-blue.scss",
    "revision": "57786d2f656e34d54ffeb78e6535469e"
  },
  {
    "url": "CRM/CRM/assets/scss/core_demo.scss",
    "revision": "94679a0b27db5302e5253788c297ec35"
  },
  {
    "url": "CRM/CRM/assets/scss/core_flashy.scss",
    "revision": "a0736e033800f68620394ba0508eda15"
  },
  {
    "url": "CRM/CRM/assets/scss/core_green.scss",
    "revision": "5dfdd81e35ae0f3ff1bd85782b52d04b"
  },
  {
    "url": "CRM/CRM/assets/scss/core_lemonade.scss",
    "revision": "755fa5da9b11d3b005b25c72081b5a1f"
  },
  {
    "url": "CRM/CRM/assets/scss/core.scss",
    "revision": "a382465a9c0a53a28dba006c5004580a"
  },
  {
    "url": "CRM/CRM/assets/scss/dashboard.scss",
    "revision": "93d3867cb05a7b599c04fb679bb62b6d"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_badge.scss",
    "revision": "b9a1d289bd93126a2eaa82db521ca8da"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_checkboxes.scss",
    "revision": "c1285c90aeb8f339eb8b8da81de16f3a"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_quickview.scss",
    "revision": "185b154665f2fb1b2840cafa4aa69531"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_range.scss",
    "revision": "c0f79230f950414d91d19236e77a4aaa"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_ribbon.scss",
    "revision": "227b07920ab421bccb574a1afce6f533"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_slider.scss",
    "revision": "d245af5733b5e2856c88c1d114c39802"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_switch.scss",
    "revision": "0924672219f6d5e66052dd31fa2f5fd0"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_timeline.scss",
    "revision": "ab0e661bbb60488bbf54e0da5b9e3a6d"
  },
  {
    "url": "CRM/CRM/assets/scss/extensions/_uploader.scss",
    "revision": "87c02186a4f57f5a4eba764d4fa55c49"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_animations.scss",
    "revision": "4d86ffedbb9196bcec313232009b5d20"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_footer.scss",
    "revision": "aabfb3ae2f45b46ee4cf2a0f35b4df27"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_helpers.scss",
    "revision": "f43db07e5b68cf286d3d2e1db689209a"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_hero.scss",
    "revision": "aaf25c476a75e65528827f185bbab956"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_navbar.scss",
    "revision": "d04389dc88450f3752cfdd47f87c56fc"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_navigation.scss",
    "revision": "80f509449ee3a703a2b1af4aeec4e7a2"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_pageloader.scss",
    "revision": "eb4763fc4890e9efaeb927045136bb1a"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_responsive.scss",
    "revision": "10b6c89190b55ad9ad552df7f5731f2d"
  },
  {
    "url": "CRM/CRM/assets/scss/layout/_sections.scss",
    "revision": "53fb839dccf879025842118cac4407c5"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_agency.scss",
    "revision": "c63706bb66e61d80d9bca075c79e9c62"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_auth.scss",
    "revision": "db21e961c166c511a82f7916b3105ad0"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_demo.scss",
    "revision": "c8ddc6d54eef1dfe2bbefde7495bb359"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_details.scss",
    "revision": "f3ec5e95601e5ad1a8c3164fc3c8dc23"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_landing-v1.scss",
    "revision": "518cf6f17eb5d86c39225c2fd7d3e7bd"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_landing-v2.scss",
    "revision": "a65272493b3fadbfc7f4ee5caf7f50f3"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_landing-v3.scss",
    "revision": "975b0af1a69f01145eea00c5529ea149"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_landing.scss",
    "revision": "8cc77a46a34af990e85fe3b28e3100c9"
  },
  {
    "url": "CRM/CRM/assets/scss/pages/_startup.scss",
    "revision": "c762ed00f342098c7e6b6044f373514b"
  },
  {
    "url": "CRM/CRM/assets/scss/themes/_dashboard.scss",
    "revision": "24f821db89246fc88544206a4285e16a"
  },
  {
    "url": "CRM/CRM/assets/scss/themes/_deep-blue.scss",
    "revision": "069b25a04a0e45b4ae9bbef93694295a"
  },
  {
    "url": "CRM/CRM/assets/scss/themes/_flashy.scss",
    "revision": "1236ebf698852c5d90d652ddea9087d3"
  },
  {
    "url": "CRM/CRM/assets/scss/themes/_green.scss",
    "revision": "73c59b2e0b8e60fb9e61ce43b217c124"
  },
  {
    "url": "CRM/CRM/assets/scss/themes/_lemonade.scss",
    "revision": "c74c230600d890aede6a8a3c90650dda"
  },
  {
    "url": "CRM/CRM/assets/scss/themes/_main.scss",
    "revision": "fdb3d51fb6715f43d7224deb24248f23"
  },
  {
    "url": "CRM/CRM/dashboard.html",
    "revision": "616d22dea73556958b83ebff7d61ec57"
  },
  {
    "url": "CRM/CRM/kitchen.html",
    "revision": "9688b4391dddbe42617f936903d90d99"
  },
  {
    "url": "CRM/CRM/Menu.html",
    "revision": "9688b4391dddbe42617f936903d90d99"
  },
  {
    "url": "firebase_key/mili-b2581-firebase-adminsdk-o60lm-0c430ed0ef.json",
    "revision": "b5b71e06088fb1a9e8f88fb882263a0d"
  },
  {
    "url": "firebase_key/test-6d54b-firebase-adminsdk-1fxtq-d4815dc7f4.json",
    "revision": "2ed9b86204f212e7f8b5d0ecb2dd33c2"
  },
  {
    "url": "index.js",
    "revision": "c3dfeb7ff6efd124f5bd790dbd983fc4"
  },
  {
    "url": "logs/mili_2018_10_08.log",
    "revision": "52ca7bee5ce3bec0ecbb5ac9eb0d2369"
  },
  {
    "url": "logs/mili_2018_10_22.log",
    "revision": "1b655f3a966ea330bde290b8ef2f460f"
  },
  {
    "url": "logs/mili_2018_10_23.log",
    "revision": "f5291279d06e9fe320cf630c66988335"
  },
  {
    "url": "logs/mili_2018_10_27.log",
    "revision": "38f9eebeecf83c494fc055a7129a2137"
  },
  {
    "url": "logs/mili_2018_10_28.log",
    "revision": "2b119cf21990ea515b63144ff04f8b8d"
  },
  {
    "url": "logs/mili_2018_10_31.log",
    "revision": "6fd210f3fe7b5fa7c1def5da38dc4786"
  },
  {
    "url": "logs/mili_2018_11_03.log",
    "revision": "02d98f2fd5777c3a0fb4890a07d7dc88"
  },
  {
    "url": "logs/mili_2018_11_04.log",
    "revision": "f3358cb56e15affb169d6c51bfb4847d"
  },
  {
    "url": "logs/mili_2018_11_05.log",
    "revision": "dc858f52f0a1deed0697e0fb8f10dfcd"
  },
  {
    "url": "logs/mili_2018_11_06.log",
    "revision": "6aec69a733d65a6d73ffcd98b140a568"
  },
  {
    "url": "logs/mili_2018_11_07.log",
    "revision": "44afcaded775ce09c3ccd6cca0e38621"
  },
  {
    "url": "logs/mili_2018_11_09.log",
    "revision": "8007f3c3fca0383b439b1aee84846b30"
  },
  {
    "url": "logs/mili_2018_11_10.log",
    "revision": "76492d984d006fc9a39bc05c5cba6d10"
  },
  {
    "url": "logs/mili_2018_11_11.log",
    "revision": "dbf810069ad85ff2e8cc5b128104fa9c"
  },
  {
    "url": "logs/mili_2018_11_12.log",
    "revision": "f6c0b79070eaf533f0fb5d3a8b7459e6"
  },
  {
    "url": "logs/mili_2018_11_13.log",
    "revision": "d11970e751576ef005a635d5db16ebd4"
  },
  {
    "url": "logs/mili_2018_11_14.log",
    "revision": "a5cd5439499102bd9a0322fb572016f2"
  },
  {
    "url": "logs/mili_2018_11_15.log",
    "revision": "697d84838431b013cba20b0a166aac1e"
  },
  {
    "url": "logs/mili_2018_11_16.log",
    "revision": "194aad4394b7bc0d36b6043fe5c35f34"
  },
  {
    "url": "logs/mili_2018_11_17.log",
    "revision": "95d050ff490a8cea841d1c9a1a65f62c"
  },
  {
    "url": "logs/mili_2018_11_18.log",
    "revision": "69ea171565dc42ee99e03de35ed69fdb"
  },
  {
    "url": "package-lock.json",
    "revision": "9605ea1fd2144b1618cd876ed88312aa"
  },
  {
    "url": "package.json",
    "revision": "2537233674e80fdcd7912b7d2b1ff69d"
  },
  {
    "url": "private/js/authentication.js",
    "revision": "7018945bb9a7bcc9fb71650d3056bb2a"
  },
  {
    "url": "views/assets/css/bulma.css",
    "revision": "4da2abcca740c11e9f6f370e7a9cd389"
  },
  {
    "url": "views/assets/css/core_deep-blue.css",
    "revision": "4ec3bf8616bacc6051518e6dad7bed29"
  },
  {
    "url": "views/assets/css/core_demo.css",
    "revision": "e8759e57d86d11fc41113c210934581f"
  },
  {
    "url": "views/assets/css/core_flashy.css",
    "revision": "ba461dadebb098158e2a33155876c2b9"
  },
  {
    "url": "views/assets/css/core_green.css",
    "revision": "06ed26f5715ad06dbf3578416d6690c2"
  },
  {
    "url": "views/assets/css/core_lemonade.css",
    "revision": "90b1040736401dc28645d523e5cc3d21"
  },
  {
    "url": "views/assets/css/core.css",
    "revision": "a591916cf0f61ad44182a3033f9ae578"
  },
  {
    "url": "views/assets/css/dashboard.css",
    "revision": "ef3154eb31eac7865850595ee2a4d453"
  },
  {
    "url": "views/assets/css/icons.min.css",
    "revision": "fedfd2da0e1f3d192fc87d17afbffc8b"
  },
  {
    "url": "views/assets/css/style.css",
    "revision": "c06bf494eb7f6763d5ebe38ffceaccc5"
  },
  {
    "url": "views/assets/fonts/fontawesome-webfont.woff2",
    "revision": "db812d8a70a4e88e888744c1c9a27e89"
  },
  {
    "url": "views/assets/fonts/fontello.woff",
    "revision": "9fa4825f8b1b2fc3ce730672443ecf10"
  },
  {
    "url": "views/assets/fonts/iconsmind.woff",
    "revision": "2864469c0e8a84417f318ee2cac54b04"
  },
  {
    "url": "views/assets/fonts/material-icons/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "views/assets/fonts/material-icons/MaterialIcons-Regular.ijmap",
    "revision": "ed6a98d002bc0b535dd8618f3ae05fe7"
  },
  {
    "url": "views/assets/fonts/material-icons/MaterialIcons-Regular.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "views/assets/fonts/material-icons/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "views/assets/fonts/material-icons/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "views/assets/fonts/material-icons/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "views/assets/fonts/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "views/assets/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "views/assets/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "views/assets/fonts/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "views/assets/fonts/simple-line-icons.ttf",
    "revision": "b086c71b8b7d9097697af91899695ebe"
  },
  {
    "url": "views/assets/fonts/text/nexa/Nexa Bold.otf",
    "revision": "c9f309b3d47969ecac64a77a6c672594"
  },
  {
    "url": "views/assets/fonts/text/nexa/Nexa Light.otf",
    "revision": "12108809f49c49bcdc126dcecc938761"
  },
  {
    "url": "views/assets/fonts/text/nexa/NexaBold.ttf",
    "revision": "fec9971197973f248e48048ccdcbeeb2"
  },
  {
    "url": "views/assets/fonts/text/nexa/NexaBold.woff",
    "revision": "e0f8e03fa0dcf69ce3f134bf60b51563"
  },
  {
    "url": "views/assets/fonts/text/nexa/NexaLight.ttf",
    "revision": "2b0e0003cb3ce5eb2ebf08480460851c"
  },
  {
    "url": "views/assets/fonts/text/nexa/NexaLight.woff",
    "revision": "79307e1777e87458f573c405ba43427e"
  },
  {
    "url": "views/assets/images/bg/dashboard/chart-bg.svg",
    "revision": "ba96450892a36b6eddbceb48096c8e3e"
  },
  {
    "url": "views/assets/images/bg/shapes/footer-chart-waves.png",
    "revision": "ffee55d8fdd7afdd32e14b5f5583de8c"
  },
  {
    "url": "views/assets/images/bg/shapes/footer-chart.png",
    "revision": "dccd6b6c0226e6a087d4ffbff95ad165"
  },
  {
    "url": "views/assets/images/bg/shapes/footer-chart.svg",
    "revision": "654b7d6cb37a16ab42456e8265eaab5e"
  },
  {
    "url": "views/assets/images/bg/shapes/icon-bg.png",
    "revision": "d1f057b20fa30c5643a3617613f3cb48"
  },
  {
    "url": "views/assets/images/bg/shapes/icon-bg.svg",
    "revision": "4c36224f502ad84e5d25b8455618d49b"
  },
  {
    "url": "views/assets/images/bg/shapes/slant.png",
    "revision": "5d09a9113e3ffda398ec27650391e25f"
  },
  {
    "url": "views/assets/images/bg/shapes/wavy-alt-dark.png",
    "revision": "53de19eb3ae23f56ba47cffb467cd280"
  },
  {
    "url": "views/assets/images/bg/shapes/wavy-alt-footer.png",
    "revision": "d281d98ca41a2d3efb25de0066ea4487"
  },
  {
    "url": "views/assets/images/bg/shapes/wavy-alt.png",
    "revision": "e0e062ab69ea52f1d21ef155a8b2cd23"
  },
  {
    "url": "views/assets/images/bg/shapes/wavy-dark.png",
    "revision": "524811bf6e9adea2b2e82c729ec98ed2"
  },
  {
    "url": "views/assets/images/bg/shapes/wavy.png",
    "revision": "5121df8e724e57a478db172b338a157a"
  },
  {
    "url": "views/assets/images/bg/tech-pattern.png",
    "revision": "eb0aab29ca895db7aa5e696aeba20fc5"
  },
  {
    "url": "views/assets/images/favicon.png",
    "revision": "35571db962991a4b04e560d2a6dab780"
  },
  {
    "url": "views/assets/images/feature-img/bag.svg",
    "revision": "3b4736ff3ecc2b82ad999d48957b6dd8"
  },
  {
    "url": "views/assets/images/feature-img/calendar.svg",
    "revision": "b3c2fb042019863e3f06b88e137aac18"
  },
  {
    "url": "views/assets/images/feature-img/discount.svg",
    "revision": "30326ec65e2f32f2053625309dc22834"
  },
  {
    "url": "views/assets/images/feature-img/menu.svg",
    "revision": "0d36866945a7e96fe4c861843c5e417b"
  },
  {
    "url": "views/assets/images/feature-img/payment-method.svg",
    "revision": "cbe3269570dc56958d29c94b29b77ad7"
  },
  {
    "url": "views/assets/images/feature-img/qr-code.svg",
    "revision": "aff92efb3770f664a137ea25c0912fd1"
  },
  {
    "url": "views/assets/images/feature-img/review.svg",
    "revision": "4c8dd9eab597026c0a2758969ae06d00"
  },
  {
    "url": "views/assets/images/feature-img/social-media (1).svg",
    "revision": "f5665e13404021f6bfddd758d8bae872"
  },
  {
    "url": "views/assets/images/feature-img/social-media.svg",
    "revision": "e4e37b9b40cf1205643b010a4e64c2de"
  },
  {
    "url": "views/assets/images/fileuploader-dragdrop-icon.png",
    "revision": "1495949425fdc34292e5876099541c93"
  },
  {
    "url": "views/assets/images/illustrations/components/accordion.svg",
    "revision": "ff6caffe45eabe896a8460c16004dece"
  },
  {
    "url": "views/assets/images/illustrations/components/badges.svg",
    "revision": "4138fb8b9d124d389953764687617307"
  },
  {
    "url": "views/assets/images/illustrations/components/boxes.svg",
    "revision": "cc78eff0ca4217530af79f42a3dfe464"
  },
  {
    "url": "views/assets/images/illustrations/components/buttons.svg",
    "revision": "a3432590c6dc8fd87c02f60a3b78efc8"
  },
  {
    "url": "views/assets/images/illustrations/components/cards.svg",
    "revision": "c725f1e9f2fe0c608e8c282a08f34c27"
  },
  {
    "url": "views/assets/images/illustrations/components/carousel.svg",
    "revision": "946548c039e5a716adc619b39d3188af"
  },
  {
    "url": "views/assets/images/illustrations/components/clients.svg",
    "revision": "27adee776d6e3f1a6e2d82824ed5d9ec"
  },
  {
    "url": "views/assets/images/illustrations/components/colors.svg",
    "revision": "689b300638788b268af4899fc2977b69"
  },
  {
    "url": "views/assets/images/illustrations/components/controls.svg",
    "revision": "27e37046a87623b3d98ec1519e1237d9"
  },
  {
    "url": "views/assets/images/illustrations/components/counters.svg",
    "revision": "a5c90b1e4c406550503aae1372ac1289"
  },
  {
    "url": "views/assets/images/illustrations/components/dropdowns.svg",
    "revision": "37eedbbad9fd5b7f44caeccc4e9af4d5"
  },
  {
    "url": "views/assets/images/illustrations/components/features.svg",
    "revision": "edec60fe55ec9832c48edb50bd1162d8"
  },
  {
    "url": "views/assets/images/illustrations/components/footer.svg",
    "revision": "f37dcfaa9cdb86451bd3c3dfb77d5291"
  },
  {
    "url": "views/assets/images/illustrations/components/forms.svg",
    "revision": "b2e028d6b003497ce21f3ab6e93bbb2f"
  },
  {
    "url": "views/assets/images/illustrations/components/grid.svg",
    "revision": "a329de39359151487a5591c74b0b4628"
  },
  {
    "url": "views/assets/images/illustrations/components/icons.svg",
    "revision": "c0bf3f3675b9d6cc2fb69e34a39f4a32"
  },
  {
    "url": "views/assets/images/illustrations/components/inputs.svg",
    "revision": "68c66c942e019061be8e96378a76e3d5"
  },
  {
    "url": "views/assets/images/illustrations/components/lists.svg",
    "revision": "7d32c9473ea4c7fed49a19fa3dfea1d1"
  },
  {
    "url": "views/assets/images/illustrations/components/messages.svg",
    "revision": "a23285e40804aa900607984cdcd66fc3"
  },
  {
    "url": "views/assets/images/illustrations/components/modals.svg",
    "revision": "f74e3e4fbdeb1d5ef3d67809d7c73c36"
  },
  {
    "url": "views/assets/images/illustrations/components/popups.svg",
    "revision": "76ada2c762729fdb12c7f39cd033fc5d"
  },
  {
    "url": "views/assets/images/illustrations/components/pricing.svg",
    "revision": "bc3befe4d271f57c6d2de0910708fdf8"
  },
  {
    "url": "views/assets/images/illustrations/components/tables.svg",
    "revision": "b28b8c6d04c16f0cb4aac799fb2142ed"
  },
  {
    "url": "views/assets/images/illustrations/components/tabs.svg",
    "revision": "f4c56902f999813ea301fc0d2cd7c237"
  },
  {
    "url": "views/assets/images/illustrations/components/team.svg",
    "revision": "94d0c8ea41b992caa837035379cc86f4"
  },
  {
    "url": "views/assets/images/illustrations/components/testimonials.svg",
    "revision": "c265afe6bd3376056ef6728632810c0e"
  },
  {
    "url": "views/assets/images/illustrations/components/timeline.svg",
    "revision": "99e54857861392d5ace418ea2c2569d6"
  },
  {
    "url": "views/assets/images/illustrations/components/typography.svg",
    "revision": "fa609da47fcbd5018db41e90bfe30b43"
  },
  {
    "url": "views/assets/images/illustrations/components/uploader.svg",
    "revision": "d809bd341a6e0ec857a0ee37586d0717"
  },
  {
    "url": "views/assets/images/illustrations/drawings/20percent.svg",
    "revision": "16c59b24a2da4da0167cfd69bcf0ed83"
  },
  {
    "url": "views/assets/images/illustrations/drawings/bub-blue.svg",
    "revision": "07d8a8c104fa08677c32604b9dfb9030"
  },
  {
    "url": "views/assets/images/illustrations/drawings/bub-green.svg",
    "revision": "7fc91c67a5187965f319ffdb85d7e1a8"
  },
  {
    "url": "views/assets/images/illustrations/drawings/bub-purple.svg",
    "revision": "ff34e3b2c4bed73434e00589cee30869"
  },
  {
    "url": "views/assets/images/illustrations/drawings/chat-profile.svg",
    "revision": "8ac495193624b6c1717ea1bac31ac004"
  },
  {
    "url": "views/assets/images/illustrations/drawings/chat-widget.svg",
    "revision": "6f20dc758467e19f49be96df095a8c3f"
  },
  {
    "url": "views/assets/images/illustrations/drawings/city.svg",
    "revision": "1c2d71c63cf00c78667056bd8d31893d"
  },
  {
    "url": "views/assets/images/illustrations/drawings/communicate.svg",
    "revision": "c9b68e94532499f3fa13a7c59c6d533f"
  },
  {
    "url": "views/assets/images/illustrations/drawings/full-team.svg",
    "revision": "17c3c256eae0ecd30c93a6a813c02f1c"
  },
  {
    "url": "views/assets/images/illustrations/drawings/green-team.svg",
    "revision": "04257999baadb4ec9ae49aea0f66983d"
  },
  {
    "url": "views/assets/images/illustrations/drawings/invoice-cloud.svg",
    "revision": "142eb346637ffb723b07fe1b77f73b85"
  },
  {
    "url": "views/assets/images/illustrations/drawings/learn.svg",
    "revision": "918fa715f15698bb5e6c060b9565a441"
  },
  {
    "url": "views/assets/images/illustrations/drawings/messages.svg",
    "revision": "0a531563984e73bff3cf8e13786920c3"
  },
  {
    "url": "views/assets/images/illustrations/drawings/metrics.svg",
    "revision": "6aeab8f26a73f732f218a44b6de7ff26"
  },
  {
    "url": "views/assets/images/illustrations/drawings/mobile-chat.svg",
    "revision": "ea89025cc47341d5e9d335e521bedd8f"
  },
  {
    "url": "views/assets/images/illustrations/drawings/reports.svg",
    "revision": "3f3b6d8b32adc75fda2905141e10d061"
  },
  {
    "url": "views/assets/images/illustrations/drawings/stats.svg",
    "revision": "59ad1c58c9f6f5621cec8e0d2d19901b"
  },
  {
    "url": "views/assets/images/illustrations/drawings/support-team.svg",
    "revision": "4a174cf2efdfa5f4cf2d6e2201519032"
  },
  {
    "url": "views/assets/images/illustrations/drawings/teamwork.svg",
    "revision": "bb45f7e59e3f46072f7ee18d4d6e1263"
  },
  {
    "url": "views/assets/images/illustrations/drawings/ui.svg",
    "revision": "fa08cf7a4703987bb63656c9f97bb9b1"
  },
  {
    "url": "views/assets/images/illustrations/icons/building.svg",
    "revision": "fefcc9397443922f0698f82777fc1562"
  },
  {
    "url": "views/assets/images/illustrations/icons/components.svg",
    "revision": "385572d125b2401a00089eaa453ca036"
  },
  {
    "url": "views/assets/images/illustrations/icons/demos.svg",
    "revision": "d3673d1a7ce6b590cff480eb32aeeb52"
  },
  {
    "url": "views/assets/images/illustrations/icons/dynamic.svg",
    "revision": "1af32daa615cbabac5978d6468a8f86d"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/bank.svg",
    "revision": "22c23a7479513e67c8d9429442c6c8db"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/business-ready.svg",
    "revision": "19874ebe342754aa415d6af56d99fbbe"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/cash.svg",
    "revision": "d2148b09e1440b9b269a61d3084593cb"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/chrono.svg",
    "revision": "5eb23a65f326b460f45cc0c6956a94d0"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/church.svg",
    "revision": "e7977e9f5d8d757feffb4fd330289641"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/cog.svg",
    "revision": "2dbfc6d6509f50f0b0440570bd3bcf5d"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/company.svg",
    "revision": "e5c157e81e77544e1bb7effb2b2345aa"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/components.svg",
    "revision": "1d87452109243fa4e2f00b83a19d9c28"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/credit-card.svg",
    "revision": "4ba0cb9c32bdf4db12b53724b3c54918"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/dashboard.svg",
    "revision": "b929d36b8313511dc4b217920c844175"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/factory.svg",
    "revision": "c0a8d84cd3e6a4cd0ea19c7ba2a93299"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/flexbox.svg",
    "revision": "b414f9d28c91c714f67af947c24b758e"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/globe-pointer.svg",
    "revision": "1b02306d97e7d7b0267695cdc0d31527"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/laptop-dots.svg",
    "revision": "37bca4c4b0276dfbfeb67191f03d218c"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/plane.svg",
    "revision": "09195592a9f8b95349701e6031f7fd50"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/responsive.svg",
    "revision": "a18920e4546204ba26570677a5156923"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/store.svg",
    "revision": "a23f826bb704be3720629d2c28c053af"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/tablet-dots.svg",
    "revision": "3e03712fd96448506200d56ddf372643"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/wallet.svg",
    "revision": "8f8437c76170b0d6a1052dbe0d2fb468"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v1/warehouse.svg",
    "revision": "428e7fd0e4d53f76687a920db62cb1ca"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v2/attach-icon.png",
    "revision": "a152384becc0ab9d96fadc10ea0c8a99"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v2/close-small.svg",
    "revision": "f872eae1daac0c016f1d986fdd3cf66f"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v2/close.svg",
    "revision": "473e30f9124fd3910ea5feac81058bc7"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v2/emoji-icon.png",
    "revision": "9a0a265957dee3c83da7ac2fc8d62d04"
  },
  {
    "url": "views/assets/images/illustrations/icons/landing-v2/smile.svg",
    "revision": "9b13d37b0e1633db499d6c32eb473df4"
  },
  {
    "url": "views/assets/images/illustrations/icons/modals/error.svg",
    "revision": "a688063dd5dd7ada80d7f0b14ba18894"
  },
  {
    "url": "views/assets/images/illustrations/icons/modals/info.svg",
    "revision": "cae592c010b50b39afc705d80c9582f3"
  },
  {
    "url": "views/assets/images/illustrations/icons/modals/success.svg",
    "revision": "d0353adab2c0b648f20bd94a9cb18fbf"
  },
  {
    "url": "views/assets/images/illustrations/icons/modals/warning.svg",
    "revision": "18d3335dad7d2e3e411da0251a947811"
  },
  {
    "url": "views/assets/images/illustrations/icons/modern.svg",
    "revision": "e622c1f16958d6ebcaf3d70e5320a1c7"
  },
  {
    "url": "views/assets/images/illustrations/icons/startup/building.svg",
    "revision": "fefcc9397443922f0698f82777fc1562"
  },
  {
    "url": "views/assets/images/illustrations/icons/startup/lifesaver.svg",
    "revision": "e16afff7b2499c0834ae298bf701b8fb"
  },
  {
    "url": "views/assets/images/illustrations/icons/startup/wallet.svg",
    "revision": "26dbd0a56450e9e721a3faef7ef199db"
  },
  {
    "url": "views/assets/images/illustrations/icons/upload.svg",
    "revision": "ed94a5b3543370c8f1c56527b095bc7b"
  },
  {
    "url": "views/assets/images/illustrations/icons/wallet.svg",
    "revision": "26dbd0a56450e9e721a3faef7ef199db"
  },
  {
    "url": "views/assets/images/illustrations/mockups/bulkit.png",
    "revision": "0a2ba71754417f39afd2f0b23fd4bcfd"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing1/invoices.png",
    "revision": "3fb457ba2ea14e396cac864b8b0310b7"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing1/macbook-app.png",
    "revision": "8e5c9b4d4ccb88231682525bb748d479"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing1/macbook-app2.png",
    "revision": "55675888d71345296faa169f580579a1"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing1/opportunities.png",
    "revision": "270cd40cd9a7899dad7c7acb143b8707"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing1/reports.png",
    "revision": "cec8b93c71e1e0a65c0c85632f973eb7"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing1/taxes.png",
    "revision": "495cf02f5c3f5ad1483c60bb4bb2cfa0"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing2/cards-data.png",
    "revision": "921640650c200f67e3b657fe8db1903f"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing2/customers.png",
    "revision": "4c39a7d5dae1ecab02b77c96c7db35c0"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing2/macbook-chat.png",
    "revision": "bbe557c4c4a3086ea8f3b56b839675e9"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing2/macbook-chat2.png",
    "revision": "8d5b2dcb27fee66a073157daa018e79a"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing2/stats.png",
    "revision": "9675dbe6e2421bbdd8608c15623f6f38"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing2/ticket-management.png",
    "revision": "dbabf955e6e5925aab561ff0421abffe"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/collaborate.png",
    "revision": "c9197c8e2c66e118a5c016cb850f0bc7"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/employees.png",
    "revision": "9cb0025fc9f3c1d60ef84790f176e418"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/hipboard.png",
    "revision": "e0379f5f534fd37f1f3ed2d509d56e0c"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/hrapp.png",
    "revision": "16b8f7fd181e30df2c5cf059bb960b08"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/hrbg.png",
    "revision": "88a1c8e907061aa68a6b43ecef2b2d3e"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/integrate.png",
    "revision": "b70b78f4ae384c14805c53c24f335acd"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/jobs.png",
    "revision": "ef7138959d9abb4d16fb8eab5c76be60"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/map.svg",
    "revision": "2b13ca12951ab82049b9e9cadd283d6b"
  },
  {
    "url": "views/assets/images/illustrations/mockups/landing3/roles.png",
    "revision": "9eb1665c3743bf27dc01bd8c25e24c0f"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/access-rights.png",
    "revision": "f6851756da12612968d4c5bad62c43fc"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/activity-chart.png",
    "revision": "94ff6d3721486af98a7eaeed1b465101"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/attach-files.png",
    "revision": "bcdc968aca6618ed23f68d6489eedc05"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/create-project.png",
    "revision": "233eaa3e8487c6eab1600ef3f981cd1f"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/halfbook.png",
    "revision": "364aebaa6012a9cf25a43598871ae521"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/integrator.png",
    "revision": "c152f4a5b955ae46a6f2cfd936ce0b13"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/ipads.png",
    "revision": "fd32e33d1e3a18710f850409a0294121"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/macbook-board.png",
    "revision": "f2ff76baf1c748411db326c93cdc71f8"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/macbook-phone.png",
    "revision": "d385cd1a6c1cdb71d98358f9bfb6d195"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/phone-slide-1.png",
    "revision": "5c2f7644d07cdd2a18c386744e326ee8"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/phone-slide-2.png",
    "revision": "dea8a6f99a8cb68f3018724206baba4e"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/phone-slide-3.png",
    "revision": "38d0193095e6263ce513833a1273354f"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/phone-slide-4.png",
    "revision": "5fa930fa066a9b225528ec0ad1cdc415"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/pipeit.png",
    "revision": "abe236df4b9e67cf2e368c19c1faf4c7"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/project-ui.png",
    "revision": "a28ec83cb53932e97ea2d735e9fd31d1"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/search.png",
    "revision": "75c391b7143891df7e725b569a7630bc"
  },
  {
    "url": "views/assets/images/illustrations/mockups/startup/tiles.png",
    "revision": "6e5f8c2e2fd8f1193c54712a54791228"
  },
  {
    "url": "views/assets/images/illustrations/UI/access-rights.png",
    "revision": "82f97025f84544c535be156929be0872"
  },
  {
    "url": "views/assets/images/illustrations/UI/add-docs.png",
    "revision": "11be1d68ee30f47b520cfce27d797121"
  },
  {
    "url": "views/assets/images/illustrations/UI/analytic-widgets.png",
    "revision": "bac056f7f4097aa4f4957f30b04dd96f"
  },
  {
    "url": "views/assets/images/illustrations/UI/app-mockup.png",
    "revision": "3f69678a6445e2a7f67b93b37c883859"
  },
  {
    "url": "views/assets/images/illustrations/UI/attach-files.png",
    "revision": "7128dff3b71841732fc679f4a885de61"
  },
  {
    "url": "views/assets/images/illustrations/UI/bars.png",
    "revision": "fcd0cc1ea0ee17fa7d87fb6e44bc1fcf"
  },
  {
    "url": "views/assets/images/illustrations/UI/create-project.png",
    "revision": "9e2f9de22338ee4fbdb0bf14faff7cbe"
  },
  {
    "url": "views/assets/images/illustrations/UI/globalytics.png",
    "revision": "c666e1cc536f82948c47936a659d26cf"
  },
  {
    "url": "views/assets/images/illustrations/UI/projects.png",
    "revision": "ec956c2c54df6d12584d4b2a9656e75e"
  },
  {
    "url": "views/assets/images/illustrations/UI/table.png",
    "revision": "b44b388224d020e9c04c1a5b50eb94ca"
  },
  {
    "url": "views/assets/images/logos/brands/app-icon.png",
    "revision": "c1e37649353074de22a7ab9a41fa8f9a"
  },
  {
    "url": "views/assets/images/logos/brands/asana.svg",
    "revision": "4a6e455537cde1451f06bdfb7c1cedd6"
  },
  {
    "url": "views/assets/images/logos/brands/campfire.svg",
    "revision": "a454608b46e38397e15ad7951bdea78e"
  },
  {
    "url": "views/assets/images/logos/brands/chrome.svg",
    "revision": "cae7a225f04d57c1bb2c997460ef7323"
  },
  {
    "url": "views/assets/images/logos/brands/edge.svg",
    "revision": "2fa4ee479150ff31e392444eaa712a10"
  },
  {
    "url": "views/assets/images/logos/brands/explorer.svg",
    "revision": "126f10b1c8c00e1abb066d5c8a107525"
  },
  {
    "url": "views/assets/images/logos/brands/firefox.svg",
    "revision": "5e6cf92ce006e3518b44c0a8cc0476fa"
  },
  {
    "url": "views/assets/images/logos/brands/github-icon.svg",
    "revision": "0255bf2cd6e42c2fdbe2e189e418929f"
  },
  {
    "url": "views/assets/images/logos/brands/made-with-bulma--white.png",
    "revision": "1735f2f22464633eec780a0098995605"
  },
  {
    "url": "views/assets/images/logos/brands/milithelogo-1.png",
    "revision": "99bfa73e339b04ad36c7b7fbd8f49127"
  },
  {
    "url": "views/assets/images/logos/brands/milithelogo-2.png",
    "revision": "c0b5d10d6f8a451626a485722486454f"
  },
  {
    "url": "views/assets/images/logos/brands/milithelogo-inv.png",
    "revision": "9bb0e1507dc0a674b99cdcddfc14ced2"
  },
  {
    "url": "views/assets/images/logos/brands/milithelogo.png",
    "revision": "e6b9f58ea025d788c6bd32450eb3776e"
  },
  {
    "url": "views/assets/images/logos/brands/opera.svg",
    "revision": "c8008f8ca1e2e2bbfaab02d9260adb77"
  },
  {
    "url": "views/assets/images/logos/brands/safari.svg",
    "revision": "6b14e0389588da9e267603e5790f0962"
  },
  {
    "url": "views/assets/images/logos/brands/slack.svg",
    "revision": "db251f5b1eda3a4641c48a1182475ade"
  },
  {
    "url": "views/assets/images/logos/brands/taiga.svg",
    "revision": "3763b70aa0df7920843c8ea397ac3761"
  },
  {
    "url": "views/assets/images/logos/brands/trello.svg",
    "revision": "e0e9cc49fa73d4691912791539adb1eb"
  },
  {
    "url": "views/assets/images/logos/brands/zendesk.svg",
    "revision": "36a9adfcea7baf75088e2d3b842edc03"
  },
  {
    "url": "views/assets/images/logos/buldash.png",
    "revision": "7d59ec5cf059e2f76a4ce764bdcf832b"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo-deep-blue.png",
    "revision": "bdb21c281f8ceb3d4c75dc82116706c1"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo-g.png",
    "revision": "ff32036c6f80ea3804461f42d6fe88c4"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo-green-w.png",
    "revision": "99a3537c2d87f6958c7a56c97ff5d46a"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo-green.png",
    "revision": "d064a404c237f6a2a74cf5f0380410ef"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo-lemonade.png",
    "revision": "0e2cc03c3d4c4d9b3ad0e0a08ec3af44"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo-w.png",
    "revision": "b55e797dbf5d6e2bf1c0c04ae6a57982"
  },
  {
    "url": "views/assets/images/logos/bulkit-logo.png",
    "revision": "fb7a8ece027329dc9b2823fd1bf3c422"
  },
  {
    "url": "views/assets/images/logos/bulkit-w.png",
    "revision": "43213689a674d305c6f6db79a9d96b06"
  },
  {
    "url": "views/assets/images/logos/cssninja.svg",
    "revision": "4d302152d7b7d6a54c214dd2a9df8e39"
  },
  {
    "url": "views/assets/images/logos/custom/bitbreaker.svg",
    "revision": "9fa3024010cbaa71efaf9d1cef184272"
  },
  {
    "url": "views/assets/images/logos/custom/covenant.svg",
    "revision": "fe82a8c86664b63a3a074211d34f26ee"
  },
  {
    "url": "views/assets/images/logos/custom/evently.svg",
    "revision": "a97b28596f026f599c180628daac9934"
  },
  {
    "url": "views/assets/images/logos/custom/grubspot.svg",
    "revision": "caa0ef852fd32b1c80f1cc2972516351"
  },
  {
    "url": "views/assets/images/logos/custom/gutwork.svg",
    "revision": "98653867e08d8355ab622c63531f0b4f"
  },
  {
    "url": "views/assets/images/logos/custom/infinite.svg",
    "revision": "b91611ca05d26ef140f9c9bc7c0fd580"
  },
  {
    "url": "views/assets/images/logos/custom/kromo.svg",
    "revision": "a0903e0a5f4e4bb9547e7dfefaa89f24"
  },
  {
    "url": "views/assets/images/logos/custom/livetalk.svg",
    "revision": "9643e46f2731a8c0fa21e376a1853a9b"
  },
  {
    "url": "views/assets/images/logos/custom/phasekit.svg",
    "revision": "cf3f35214539072fcef9eed18d8e13a9"
  },
  {
    "url": "views/assets/images/logos/custom/powerball.svg",
    "revision": "d7a34d3be12fe2d91c286e815a35db74"
  },
  {
    "url": "views/assets/images/logos/custom/proactive.svg",
    "revision": "baa2e87bbf38b9088449a0169b4a9644"
  },
  {
    "url": "views/assets/images/logos/custom/systek.svg",
    "revision": "160d2df1699ffb89b2550fe777c14609"
  },
  {
    "url": "views/assets/images/logos/custom/taskbot.svg",
    "revision": "ce231e3a1156c62b4f542c83c90a3f85"
  },
  {
    "url": "views/assets/images/logos/custom/tower.svg",
    "revision": "9ea02430f60f0f0986b9f3c2279d672a"
  },
  {
    "url": "views/assets/images/logos/custom/transfuseio.svg",
    "revision": "9b16ebc9b86f265d82572ec1e3a03a56"
  },
  {
    "url": "views/assets/images/logos/custom/tribe.svg",
    "revision": "f28c5f79e5b6691957ed7cddbce32b9d"
  },
  {
    "url": "views/assets/images/logos/icon-logo.svg",
    "revision": "c5fc4b21c3bae7220df9e5a30bfacb39"
  },
  {
    "url": "views/assets/images/logos/logo-dash.png",
    "revision": "586b4f53411bdd7fc6b61dd3d61b842a"
  },
  {
    "url": "views/assets/images/logos/logo-grayscale.png",
    "revision": "faa43401357c30f40b57fcff7e150065"
  },
  {
    "url": "views/assets/images/logos/milithelogo.png",
    "revision": "e6b9f58ea025d788c6bd32450eb3776e"
  },
  {
    "url": "views/assets/images/logos/partners/acme-solo.svg",
    "revision": "d14363147a5037b695bd296e2f5eedaf"
  },
  {
    "url": "views/assets/images/logos/partners/acme.svg",
    "revision": "c0ccef38e58c28c7f16f8fed36d04b79"
  },
  {
    "url": "views/assets/images/logos/square-green.svg",
    "revision": "0562e3f73022987faedf2b42a0352ca4"
  },
  {
    "url": "views/assets/images/logos/square-violet.svg",
    "revision": "42bd1dd2d8d8e6b09c4d60368a5eb9f8"
  },
  {
    "url": "views/assets/images/logos/square-white.svg",
    "revision": "b43e4b38aebcb28228c51d25e2d6ce3e"
  },
  {
    "url": "views/assets/images/logos/stacks/angular.png",
    "revision": "e5ca1db21b588f0e37cdd24dd2f91e28"
  },
  {
    "url": "views/assets/images/logos/stacks/bulma.svg",
    "revision": "80c4696bb81d8e35015343c4d9379912"
  },
  {
    "url": "views/assets/images/logos/stacks/c3js-logo.svg",
    "revision": "b7cba92db2bdf858a74660ebee13df50"
  },
  {
    "url": "views/assets/images/logos/stacks/chartjs-logo.svg",
    "revision": "45c814f72ff986e9734d7a778fde3d0b"
  },
  {
    "url": "views/assets/images/logos/stacks/html5.svg",
    "revision": "3695f8ce84461e4661c9327f70560fe3"
  },
  {
    "url": "views/assets/images/logos/stacks/jquery.png",
    "revision": "562f60fa30e8e0cd11852dc684c0c818"
  },
  {
    "url": "views/assets/images/logos/stacks/jquery.svg",
    "revision": "09a22461948a489b9ebc5b396d6f7a88"
  },
  {
    "url": "views/assets/images/logos/stacks/meteor.png",
    "revision": "f880d8289925b6eaac3a6e1e67f9baf4"
  },
  {
    "url": "views/assets/images/logos/stacks/peity-logo.svg",
    "revision": "37c23073b4628af2150af1bf2e602045"
  },
  {
    "url": "views/assets/images/logos/stacks/rails.png",
    "revision": "f8470961eaebfaf61adca78da7dd89af"
  },
  {
    "url": "views/assets/images/logos/stacks/sass.svg",
    "revision": "95498d65c0cc337c202bb991dc0b4c35"
  },
  {
    "url": "views/assets/images/logos/stacks/vuejs.png",
    "revision": "5ad90ada5d70afc705868e8674275fbe"
  },
  {
    "url": "views/assets/images/markers/marker-line.svg",
    "revision": "d58b2d6e83364ba7a4b17676ec5f73ff"
  },
  {
    "url": "views/assets/images/markers/marker-purple.png",
    "revision": "f4e6fd63f326c7b8ab463eeb13cbb6eb"
  },
  {
    "url": "views/assets/images/photos/captures/agency-about.png",
    "revision": "3d2544fb41d85f5cd1e0017e36b5faec"
  },
  {
    "url": "views/assets/images/photos/captures/agency-blog.png",
    "revision": "6ecbb0b8f27a327ed9242ff5e14dbd06"
  },
  {
    "url": "views/assets/images/photos/captures/agency-contact.png",
    "revision": "199d211d25ecca5c0acd56aebe7f18f8"
  },
  {
    "url": "views/assets/images/photos/captures/agency-home.png",
    "revision": "1b7aeeaffcd508e646f55d09f2576db9"
  },
  {
    "url": "views/assets/images/photos/captures/agency-portfolio.png",
    "revision": "99fad0473a2c7f687d10bddd6a504ecb"
  },
  {
    "url": "views/assets/images/photos/captures/agency-post-nosidebar.png",
    "revision": "96dbfd2ca8226548d5e5b63dd7599bdc"
  },
  {
    "url": "views/assets/images/photos/captures/agency-post-sidebar.png",
    "revision": "1fd2377a944e9e93549cf81c93492e99"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-billboardjs.png",
    "revision": "7db9d97bb4729b0deea6193bea4a01e6"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-blank.png",
    "revision": "ef57f3a2add5db437f2ab4a527ff9966"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-chartjs.png",
    "revision": "77cb797dd43dfbe7295c016233ee6ed4"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-dark.png",
    "revision": "3c753a7a706c9dd85a257dd4601907b6"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-feed.png",
    "revision": "00c2c747c0eb69cdb251be8574849b93"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-login.png",
    "revision": "5f629cb30f47fd40038cf3956b89b901"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-peityjs.png",
    "revision": "c574fa997ff9ea1dc7bce2db58c98cb0"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-post.png",
    "revision": "e06c25bcf00793ed5b44afaeb3d8b135"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-widgets-data.png",
    "revision": "f5358ba637dea0213aef000030ef977f"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard-widgets-social.png",
    "revision": "f53dcadca461bc3b797c6904130f8056"
  },
  {
    "url": "views/assets/images/photos/captures/dashboard.png",
    "revision": "caf38de23cca544acdb07f99ed1e4d51"
  },
  {
    "url": "views/assets/images/photos/captures/landing-features.png",
    "revision": "f36895c5e88bc412cc8c323fc5cfddb7"
  },
  {
    "url": "views/assets/images/photos/captures/landing-login.png",
    "revision": "da6f483cba09aac3a9d99a52b2715f98"
  },
  {
    "url": "views/assets/images/photos/captures/landing-pricing.png",
    "revision": "3b09535712ecc3dcb8a943c667c1e6f7"
  },
  {
    "url": "views/assets/images/photos/captures/landing-signup.png",
    "revision": "8ee2b87b5e07a1cd5077ba6906171857"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v1-features.png",
    "revision": "c48680005a2006b1bd89dc76cd216999"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v1-login.png",
    "revision": "af6f9ec1e3035bf7a44f850b2876de39"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v1-pricing.png",
    "revision": "507a1ed3016d4998ffafe04a3e4ddbf0"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v1-signup.png",
    "revision": "18856294bd56458091a89ef762474820"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v1.png",
    "revision": "cd0d819b307dd6e7b217bc7f620f859f"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v2-features.png",
    "revision": "bfdda6e5320967b3789273581234079c"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v2-login.png",
    "revision": "a0521a7f10692cbd0c725ce54854c9dd"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v2-pricing.png",
    "revision": "db4112478803eb5091b38d695007876d"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v2-signup.png",
    "revision": "61bacc320ed4d3af66e52b63da8e96f0"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v2.png",
    "revision": "4ba5cc18b6d7972ef57646af9cbc2cf6"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3-help-article.png",
    "revision": "e3801b0c96a669e001f2da754fb92cc8"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3-help-category.png",
    "revision": "8084254e63e1d86edebb5ee39c94e123"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3-help-center.png",
    "revision": "723cdbb860b76db27d0889f3f81363e7"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3-login.png",
    "revision": "39f0d0a9f25ec32e61aae21aa5b89125"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3-pricing.png",
    "revision": "233f8a6cefc003451644a170c5ada8b8"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3-signup.png",
    "revision": "5e5fb4860ee2181f83f4b2fdbb040fda"
  },
  {
    "url": "views/assets/images/photos/captures/landing-v3.png",
    "revision": "2790c2b9370fde291d6c62efcc389c99"
  },
  {
    "url": "views/assets/images/photos/captures/landing.png",
    "revision": "aa615a3b2388918e7addc1f85fe93c7b"
  },
  {
    "url": "views/assets/images/photos/captures/startup-about.png",
    "revision": "6db0bc9c64b5fcab3a3814a37989d7fd"
  },
  {
    "url": "views/assets/images/photos/captures/startup-contact.png",
    "revision": "b7822054a8bba860daf12e38ebaafbc3"
  },
  {
    "url": "views/assets/images/photos/captures/startup-home.png",
    "revision": "6ee9bb284c390bc80e78d6799941a0d1"
  },
  {
    "url": "views/assets/images/photos/captures/startup-login.png",
    "revision": "93c7ba483a457587b191c5ef507dc420"
  },
  {
    "url": "views/assets/images/photos/captures/startup-product.png",
    "revision": "cbcb89715c000254076db3766db10fa9"
  },
  {
    "url": "views/assets/images/photos/captures/startup-signup.png",
    "revision": "1f6cde5caf08c006736cbe71b6024cb1"
  },
  {
    "url": "views/assets/js/billboardjs/billboard.min.css",
    "revision": "36f5cb42860d352807de6c94a7a441eb"
  },
  {
    "url": "views/assets/js/billboardjs/billboard.min.js",
    "revision": "43f2fdcf7617549bf251a15faabe549c"
  },
  {
    "url": "views/assets/js/chartjs/Chart.bundle.min.js",
    "revision": "658dca7101c0e348da6a8898f04a383f"
  },
  {
    "url": "views/assets/js/chosen/chosen.css",
    "revision": "f7f057ff4e8a963a222e9557ae897d19"
  },
  {
    "url": "views/assets/js/chosen/chosen.jquery.min.js",
    "revision": "e343479d0fd80215afc462d692bd56d8"
  },
  {
    "url": "views/assets/js/chosen/chosen.origin.css",
    "revision": "0328a8559f61c9db221e6eebe8f94816"
  },
  {
    "url": "views/assets/js/common.js",
    "revision": "15905f0fff5b52e4e6b5c3f80e69a021"
  },
  {
    "url": "views/assets/js/core/jquery.min.js",
    "revision": "adb784ef9dc257b32965a5da7ee82a8b"
  },
  {
    "url": "views/assets/js/core/modernizr.min.js",
    "revision": "65f1d21d5fcc9d21da758adababd0c3c"
  },
  {
    "url": "views/assets/js/counterup/jquery.counterup.min.js",
    "revision": "5b172bae8311e6a555130ed5c1f5d309"
  },
  {
    "url": "views/assets/js/covervid/covervid.min.js",
    "revision": "48b6d802a1c318d9c80c7bc07d8f8565"
  },
  {
    "url": "views/assets/js/covervid/video/hands.jpeg",
    "revision": "f8a1cba428d9f57b6d080f63e2455d1d"
  },
  {
    "url": "views/assets/js/covervid/video/sample.jpg",
    "revision": "5586fb41e4afd585a182453cb256f970"
  },
  {
    "url": "views/assets/js/d3js/d3.js",
    "revision": "3ef501bf5a5872be659a7390e3664959"
  },
  {
    "url": "views/assets/js/d3js/d3.min.js",
    "revision": "68c8b9a35f7b7400ef73282246f8cbe7"
  },
  {
    "url": "views/assets/js/datedropper/datedropper-minimal.css",
    "revision": "cd5033b07b3eeca9c1e3949b77d79646"
  },
  {
    "url": "views/assets/js/datedropper/datedropper-theme.css",
    "revision": "9d3dfbee0a809ca661fb61c161014cca"
  },
  {
    "url": "views/assets/js/datedropper/datedropper.css",
    "revision": "01ab7197471fc70170d70504f909e654"
  },
  {
    "url": "views/assets/js/datedropper/datedropper.js",
    "revision": "b21c80e5755fe3aebb6c7607e94e913b"
  },
  {
    "url": "views/assets/js/datedropper/datedropper.min.js",
    "revision": "11677b81c5c4b5ba90203d0d6c2fc2d2"
  },
  {
    "url": "views/assets/js/datedropper/src/datedropper.eot",
    "revision": "f85a5eb27a4eabe74d9e3d5b4869c2e9"
  },
  {
    "url": "views/assets/js/datedropper/src/datedropper.svg",
    "revision": "484f2e4cb820eb2529117754096eaede"
  },
  {
    "url": "views/assets/js/datedropper/src/datedropper.ttf",
    "revision": "f8d112c357d745938cfaa193b9a08a18"
  },
  {
    "url": "views/assets/js/datedropper/src/datedropper.woff",
    "revision": "71966d7a6bd700c3e4f7b00a0e6746dc"
  },
  {
    "url": "views/assets/js/datepicker/datepicker.css",
    "revision": "e00455a97a99b3789f11d598d8adf020"
  },
  {
    "url": "views/assets/js/datepicker/datepicker.min.js",
    "revision": "b8f99f71d347d40a888060d864377bbb"
  },
  {
    "url": "views/assets/js/easyAutocomplete/data/persons.json",
    "revision": "c9e25363272caf2b5ad3d7ee0cb10afe"
  },
  {
    "url": "views/assets/js/easyAutocomplete/easy-autocomplete.css",
    "revision": "5183b95b1256074cc4cdd54a181c7667"
  },
  {
    "url": "views/assets/js/easyAutocomplete/easy-autocomplete.min.css",
    "revision": "2fc47373a364c7428abbecc06d334aea"
  },
  {
    "url": "views/assets/js/easyAutocomplete/jquery.easy-autocomplete.min.js",
    "revision": "023059b6b0d73a03729f9b769221e17c"
  },
  {
    "url": "views/assets/js/embed/embed.js",
    "revision": "64c27d52db7c18265371342bc38236df"
  },
  {
    "url": "views/assets/js/fileuploader/class.fileuploader.php",
    "revision": "14b27c3e5d48cd4770f2043ae75cb07f"
  },
  {
    "url": "views/assets/js/fileuploader/fileuploader.init.js",
    "revision": "fc424e74bbcb80302885564eb7b355cf"
  },
  {
    "url": "views/assets/js/fileuploader/jquery.fileuploader.css",
    "revision": "1fbad620c99c03569fe74663a7b7741d"
  },
  {
    "url": "views/assets/js/fileuploader/jquery.fileuploader.js",
    "revision": "b2a3a5fe36941e17094c1e267bc807a8"
  },
  {
    "url": "views/assets/js/fileuploader/jquery.fileuploader.min.css",
    "revision": "ce537fc540ccd134c0c16afac1c74fce"
  },
  {
    "url": "views/assets/js/fileuploader/jquery.fileuploader.min.js",
    "revision": "432a2465ee4f1f306179e98ca8bd317e"
  },
  {
    "url": "views/assets/js/ggpopover/ggpopover.css",
    "revision": "839ee347c29b73cdf20bd9eee5f1ee9e"
  },
  {
    "url": "views/assets/js/ggpopover/ggpopover.min.js",
    "revision": "431b64284f7774f8a9c7b3eb8a5704a8"
  },
  {
    "url": "views/assets/js/ggpopover/ggtooltip.css",
    "revision": "da4c037a1123453bef22f8c7aa9c7750"
  },
  {
    "url": "views/assets/js/ggpopover/ggtooltip.js",
    "revision": "17ea02f4afaed3f0a08c8a1ecb5c970b"
  },
  {
    "url": "views/assets/js/gmapjs/gmap.min.js",
    "revision": "c16269af83ce3cbb2f65b72107b081f1"
  },
  {
    "url": "views/assets/js/highlightjs/highlight.pack.js",
    "revision": "d4319c771a862f032464e249c17aaa23"
  },
  {
    "url": "views/assets/js/highlightjs/style.css",
    "revision": "098ff773f889b9ecc534a1701efd2001"
  },
  {
    "url": "views/assets/js/iziToast/iziToast.css",
    "revision": "0e86d47404e41afcee1536ea37802478"
  },
  {
    "url": "views/assets/js/iziToast/iziToast.js",
    "revision": "373a4a2e7b6c71909c50ca1b2338fc94"
  },
  {
    "url": "views/assets/js/iziToast/iziToast.min.css",
    "revision": "17ee9ce413ab365a639824710e299739"
  },
  {
    "url": "views/assets/js/iziToast/iziToast.min.js",
    "revision": "3b72655439cec1ef3c0a0350d91d1f42"
  },
  {
    "url": "views/assets/js/jqdropdown/jquery.dropdown.css",
    "revision": "82298a43bf2cf2c11d30ae5dd1472f7b"
  },
  {
    "url": "views/assets/js/jqdropdown/jquery.dropdown.js",
    "revision": "78494f6dc397df6a674e124a10662733"
  },
  {
    "url": "views/assets/js/jqdropdown/jquery.dropdown.min.css",
    "revision": "538be4d90755027dbc66fb221417797d"
  },
  {
    "url": "views/assets/js/jqdropdown/jquery.dropdown.min.js",
    "revision": "4e1e0812f1379debc779a625b60c226f"
  },
  {
    "url": "views/assets/js/jqvmap/data/jquery.vmap.sampledata.js",
    "revision": "b6f14a696445b519ec8e5b78da5cd25f"
  },
  {
    "url": "views/assets/js/jqvmap/images/background.png",
    "revision": "75d3f67f5246629d1ec26828491f1dc1"
  },
  {
    "url": "views/assets/js/jqvmap/images/flag.png",
    "revision": "1e0a9e530ace4cbffb6968c25abe49e8"
  },
  {
    "url": "views/assets/js/jqvmap/images/globe.png",
    "revision": "f0c4cfa723a81f6dfa8190a0d5073b61"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/black.png",
    "revision": "92a5a37416acf6848fa8c0e199a6556c"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/blue.png",
    "revision": "25338dd163940b1e2da90f89656cae5c"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/green.png",
    "revision": "64fa0b16db70e82f73d7a29a57b5b4ef"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/grey.png",
    "revision": "1512c12e5a2f8ed7eed8530ab4d9f292"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/orange.png",
    "revision": "f5dd08472261feb83302740cc20bbb5e"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/purple.png",
    "revision": "8aa31bd4fe151f121c04dc83966f859e"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/red.png",
    "revision": "f44e3d75ac2b310fbb9e6360f621a8d8"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/white.png",
    "revision": "a42b172ca6e055d470d6ea77eb39beb1"
  },
  {
    "url": "views/assets/js/jqvmap/images/marker/yellow.png",
    "revision": "9d9d9c21e29b9ab32eb899c803eb1cc9"
  },
  {
    "url": "views/assets/js/jqvmap/images/thumb.jpg",
    "revision": "57528fb83c6b0439e8b666360b48786e"
  },
  {
    "url": "views/assets/js/jqvmap/images/tip.png",
    "revision": "ba35d6230d6b8e52f65b6e6c06cbd2a6"
  },
  {
    "url": "views/assets/js/jqvmap/jquery.vmap.js",
    "revision": "0aaa6bdf8ba02482135c8526a25c3804"
  },
  {
    "url": "views/assets/js/jqvmap/jquery.vmap.min.js",
    "revision": "935f68d33bdd88a1341647523f7813a2"
  },
  {
    "url": "views/assets/js/jqvmap/jqvmap.css",
    "revision": "6cf64fd51cec5a4b607330c9dc9fa29c"
  },
  {
    "url": "views/assets/js/jqvmap/jqvmap.min.css",
    "revision": "126a06688aa11c13a58772a516cf6d72"
  },
  {
    "url": "views/assets/js/jqvmap/maps/continents/jquery.vmap.africa.js",
    "revision": "cc9ac16afbf414a65bd8a45865472f6c"
  },
  {
    "url": "views/assets/js/jqvmap/maps/continents/jquery.vmap.asia.js",
    "revision": "c716ef2cfdb326bbcc1ccb9c6c25cb24"
  },
  {
    "url": "views/assets/js/jqvmap/maps/continents/jquery.vmap.australia.js",
    "revision": "dcdfcdac23fe1729f54f21755aa44249"
  },
  {
    "url": "views/assets/js/jqvmap/maps/continents/jquery.vmap.europe.js",
    "revision": "70d3cc99f63d847c464bfb6f3f1d5cc9"
  },
  {
    "url": "views/assets/js/jqvmap/maps/continents/jquery.vmap.north-america.js",
    "revision": "3d3800a4deac054841c011576b634997"
  },
  {
    "url": "views/assets/js/jqvmap/maps/continents/jquery.vmap.south-america.js",
    "revision": "c3738028ed62e01282d839e9f88d8224"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.algeria.js",
    "revision": "b9704c1a3b0dcd58f3119bcc41b4172c"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.argentina.js",
    "revision": "d9741784ed3a4359e752fb2c8f3d60e9"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.brazil.js",
    "revision": "5659cda1532a42bd4145163f15869379"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.canada.js",
    "revision": "438c6f7d061ab20f9aa384bb276f6975"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.croatia.js",
    "revision": "f2ecd63d0d158ea15412b89ec801f357"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.europe.js",
    "revision": "e6799d0bf35aea03af503460e8adec07"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.france.js",
    "revision": "c70eac0961fa8ea76efbdf15abd95723"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.germany.js",
    "revision": "89bcfa32ef71c4b9ed0822bcd0a66964"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.greece.js",
    "revision": "165f88533873f8f7c53760d850319bc2"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.indonesia.js",
    "revision": "35b58bcca2b8b72474eea6b238826a8c"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.iran.js",
    "revision": "4a1d5c7ec410aa49a2fa45f0a49ef758"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.iraq.js",
    "revision": "b719feb53025382e0c0e41cad5e2876b"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.new_regions_france.js",
    "revision": "d59d3f1233c863c08ce523d9eb73c35b"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.russia.js",
    "revision": "c1d08ce854d24821414767e36dba051c"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.serbia.js",
    "revision": "b181cb12b4617373fca67fbc49ac3629"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.tunisia.js",
    "revision": "bb222ffa5aa92078cecb73dfed9e923b"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.turkey.js",
    "revision": "9562ed7a1b008263b90782ee78eeac2a"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.ukraine.js",
    "revision": "96755bdb04df42bd15b08adf3742bc76"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.usa.districts.js",
    "revision": "eec901c8f34697c1fde2659544144fcf"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.usa.js",
    "revision": "43e330fe0440c72344722238695dc793"
  },
  {
    "url": "views/assets/js/jqvmap/maps/jquery.vmap.world.js",
    "revision": "16677403c0e1bef15de9ba1fec0bbc07"
  },
  {
    "url": "views/assets/js/main.js",
    "revision": "dc0f397c1ee9b333a9ef8f3b9edabb48"
  },
  {
    "url": "views/assets/js/pages/agency.js",
    "revision": "e38803b2c1e5757b59b48807833cbc29"
  },
  {
    "url": "views/assets/js/pages/auth.js",
    "revision": "89d45ca13ee767b7a72243bca6543922"
  },
  {
    "url": "views/assets/js/pages/components-accordion.js",
    "revision": "8e33bd120d4383d27c1b8ef98e769f68"
  },
  {
    "url": "views/assets/js/pages/components-fileinput.js",
    "revision": "69784db512cd28b5d5c9cc2f416decea"
  },
  {
    "url": "views/assets/js/pages/components-inputs.js",
    "revision": "7e52af64b76d9f9c9a1384efd6964db0"
  },
  {
    "url": "views/assets/js/pages/components-modals.js",
    "revision": "884af6fbcf8a750e19da877e497d41d3"
  },
  {
    "url": "views/assets/js/pages/components-quickview.js",
    "revision": "411259156dcc9c0f5a1c47383a1d6019"
  },
  {
    "url": "views/assets/js/pages/components-range.js",
    "revision": "905e460d07237a61eacefa023f11d8bf"
  },
  {
    "url": "views/assets/js/pages/components-toasts.js",
    "revision": "35b131ec9430fcc636e265f5fd6342b0"
  },
  {
    "url": "views/assets/js/pages/contact.js",
    "revision": "bc3409a12e2749f0c1e9fcd67cadc396"
  },
  {
    "url": "views/assets/js/pages/dashboard.js",
    "revision": "0e2a86fa8de7dd28e1f729eb0fd4faff"
  },
  {
    "url": "views/assets/js/pages/demo.js",
    "revision": "7165dcfcd90552f528209f42db4d3096"
  },
  {
    "url": "views/assets/js/pages/index.js",
    "revision": "78a5656a73a10af8e495872add25c855"
  },
  {
    "url": "views/assets/js/pages/landing.js",
    "revision": "ae6997634b08548a330b3ec91d2f566f"
  },
  {
    "url": "views/assets/js/pages/landingv1.js",
    "revision": "da98123665bb0205a5aa6d43e6cac83e"
  },
  {
    "url": "views/assets/js/pages/landingv2.js",
    "revision": "06bda74086e4ede18d6e35ec6baa5f48"
  },
  {
    "url": "views/assets/js/pages/landingv3.js",
    "revision": "40f0625eeaf7d89167d18f80a64fea43"
  },
  {
    "url": "views/assets/js/pages/startup.js",
    "revision": "5832001fcab951c53e781353d014813b"
  },
  {
    "url": "views/assets/js/peity/peity.min.js",
    "revision": "425a449b3c24f769c6f6903daba5d402"
  },
  {
    "url": "views/assets/js/scrollreveal/scrollreveal.min.js",
    "revision": "5deb4348d63c0bfbce81c338d35db100"
  },
  {
    "url": "views/assets/js/scrollspy/scrollspy.js",
    "revision": "67c57ba71bd508e341ed8ef75b983689"
  },
  {
    "url": "views/assets/js/scrollspy/scrollspy.min.js",
    "revision": "6859e339eb414513c601a6b765fd8700"
  },
  {
    "url": "views/assets/js/slick-carousel/ajax-loader.gif",
    "revision": "c5cd7f5300576ab4c88202b42f6ded62"
  },
  {
    "url": "views/assets/js/slick-carousel/fonts/slick.eot",
    "revision": "ced611daf7709cc778da928fec876475"
  },
  {
    "url": "views/assets/js/slick-carousel/fonts/slick.svg",
    "revision": "526d7fdf63614222d376257221e8b754"
  },
  {
    "url": "views/assets/js/slick-carousel/fonts/slick.ttf",
    "revision": "d41f55a78e6f49a5512878df1737e58a"
  },
  {
    "url": "views/assets/js/slick-carousel/fonts/slick.woff",
    "revision": "b7c9e1e479de3b53f1e4e30ebac2403a"
  },
  {
    "url": "views/assets/js/slick-carousel/slick-theme.css",
    "revision": "bb4dfbdde8f2a8d4018c1f0293a03483"
  },
  {
    "url": "views/assets/js/slick-carousel/slick.css",
    "revision": "b06073c5a23326dcc332b78d42c7290c"
  },
  {
    "url": "views/assets/js/slick-carousel/slick.min.js",
    "revision": "9cd43d57c2c090bb74b975cbddf84d81"
  },
  {
    "url": "views/assets/js/tagsinput/jquery.tags.input.css",
    "revision": "9d6a3bc2211750b58b17d8a4ce78b243"
  },
  {
    "url": "views/assets/js/tagsinput/jquery.tags.input.js",
    "revision": "7ac7a1d13e4dc357bc6e7117e20cc6d6"
  },
  {
    "url": "views/assets/js/timedropper/timedropper.css",
    "revision": "fe4a840249f2fe938eb2fb24425946de"
  },
  {
    "url": "views/assets/js/timedropper/timedropper.js",
    "revision": "00aeec9bbe1aa0a253bd7afa9e5eb57d"
  },
  {
    "url": "views/assets/js/timedropper/timedropper.min.css",
    "revision": "d6eeb7c33a54145be5b892d29134fe6d"
  },
  {
    "url": "views/assets/js/timedropper/timedropper.min.js",
    "revision": "3a25f38dc516d7670801b2543f707a00"
  },
  {
    "url": "views/assets/js/vivus/vivus.min.js",
    "revision": "d65f9781559b83ede801a4b765e671e3"
  },
  {
    "url": "views/assets/js/wallop/wallop--fade.css",
    "revision": "cc9892456c5780e33e47a03aef6adc5e"
  },
  {
    "url": "views/assets/js/wallop/wallop--fold.css",
    "revision": "4cb1f43b3765d615f169f8ec8375496e"
  },
  {
    "url": "views/assets/js/wallop/wallop--rotate.css",
    "revision": "7fcade0966a9043c7c9212747caef41e"
  },
  {
    "url": "views/assets/js/wallop/wallop--scale.css",
    "revision": "36dcb49f4a10e2bc8b9fadab55b8de39"
  },
  {
    "url": "views/assets/js/wallop/wallop--slide.css",
    "revision": "865861a7c76c335d256468647b986cef"
  },
  {
    "url": "views/assets/js/wallop/wallop--vertical-slide.css",
    "revision": "d7eae35bd2a10c79d0ebc6123223ac1e"
  },
  {
    "url": "views/assets/js/wallop/wallop.css",
    "revision": "9fec7ab95daeba6191d904e8b35236dd"
  },
  {
    "url": "views/assets/js/wallop/Wallop.js",
    "revision": "e08f8d06f7948a13f5ea772542f2e3f3"
  },
  {
    "url": "views/assets/js/wallop/Wallop.min.js",
    "revision": "ba0ddd197020ab3e6e8a4cdfeaf54bb2"
  },
  {
    "url": "views/assets/js/waypoints/jquery.waypoints.min.js",
    "revision": "cebc34dedef229a98275955df75e20e5"
  },
  {
    "url": "views/assets/js/waypoints/noframework.waypoints.min.js",
    "revision": "60aa8e30651177224e47d4e30e0f7636"
  },
  {
    "url": "views/assets/js/waypoints/sticky.min.js",
    "revision": "78646397a965971ef399c53e4c7d427d"
  },
  {
    "url": "views/assets/js/wickedpicker/fonts/fontello.eot",
    "revision": "f8fba4b21da035d6ef093417ce5c9db8"
  },
  {
    "url": "views/assets/js/wickedpicker/fonts/fontello.svg",
    "revision": "f15fca6ccd291552072585fe76a03567"
  },
  {
    "url": "views/assets/js/wickedpicker/fonts/fontello.ttf",
    "revision": "8f13eeb6d015605ac225e7a28f31211c"
  },
  {
    "url": "views/assets/js/wickedpicker/fonts/fontello.woff",
    "revision": "492102fff9ed1f7764be064e61ce686d"
  },
  {
    "url": "views/assets/js/wickedpicker/wickedpicker.min.css",
    "revision": "fe102d7cb17600203aeace4827e8f55a"
  },
  {
    "url": "views/assets/js/wickedpicker/wickedpicker.min.js",
    "revision": "d1f2aaee2734b44dbc3e3479560ba80f"
  },
  {
    "url": "views/assets/scss/_colors.scss",
    "revision": "3225436dc7bf168dde4103cd13b38185"
  },
  {
    "url": "views/assets/scss/_mixins.scss",
    "revision": "a18888085df99d90566af1ac968ba18b"
  },
  {
    "url": "views/assets/scss/components/_accordion.scss",
    "revision": "03c84818cde61d5c47511d1aba9bd6a3"
  },
  {
    "url": "views/assets/scss/components/_boxes.scss",
    "revision": "874442a7c5456fa52b3e58640937e23a"
  },
  {
    "url": "views/assets/scss/components/_buttons.scss",
    "revision": "30e8646c2d5dc964e97b101ac2df33ca"
  },
  {
    "url": "views/assets/scss/components/_cards.scss",
    "revision": "e084296497d5f8a2c7543abdf4df34b4"
  },
  {
    "url": "views/assets/scss/components/_dialogs.scss",
    "revision": "393a268e861349b7f8e74d69f37c61d2"
  },
  {
    "url": "views/assets/scss/components/_dropdowns.scss",
    "revision": "8b99e1ce4968f57460f77684ada28519"
  },
  {
    "url": "views/assets/scss/components/_forms.scss",
    "revision": "2350f23da10259c2dac252e589babb12"
  },
  {
    "url": "views/assets/scss/components/_labels.scss",
    "revision": "cf1fccc9f2fedf858d5a16be832e9d29"
  },
  {
    "url": "views/assets/scss/components/_lists.scss",
    "revision": "784f0dc427b0be47b250a64e4f89e6db"
  },
  {
    "url": "views/assets/scss/components/_messages.scss",
    "revision": "b9102e701d31ff947ed94de0d85c34a7"
  },
  {
    "url": "views/assets/scss/components/_pricing.scss",
    "revision": "c7dbd91b7e2f33be9c8b5594f3e610af"
  },
  {
    "url": "views/assets/scss/components/_tables.scss",
    "revision": "516e693862840b062f5b482a6264053e"
  },
  {
    "url": "views/assets/scss/components/_tabs.scss",
    "revision": "4b4ef1ad191e0eb049fb3604c8061c0c"
  },
  {
    "url": "views/assets/scss/components/_testimonials.scss",
    "revision": "834cbe54df8dd09c34ce1243945c08a7"
  },
  {
    "url": "views/assets/scss/core_deep-blue.scss",
    "revision": "57786d2f656e34d54ffeb78e6535469e"
  },
  {
    "url": "views/assets/scss/core_demo.scss",
    "revision": "94679a0b27db5302e5253788c297ec35"
  },
  {
    "url": "views/assets/scss/core_flashy.scss",
    "revision": "a0736e033800f68620394ba0508eda15"
  },
  {
    "url": "views/assets/scss/core_green.scss",
    "revision": "5dfdd81e35ae0f3ff1bd85782b52d04b"
  },
  {
    "url": "views/assets/scss/core_lemonade.scss",
    "revision": "755fa5da9b11d3b005b25c72081b5a1f"
  },
  {
    "url": "views/assets/scss/core.scss",
    "revision": "a382465a9c0a53a28dba006c5004580a"
  },
  {
    "url": "views/assets/scss/dashboard.scss",
    "revision": "a40cbbaf1201bb4d66ce4d66113b8400"
  },
  {
    "url": "views/assets/scss/extensions/_badge.scss",
    "revision": "b9a1d289bd93126a2eaa82db521ca8da"
  },
  {
    "url": "views/assets/scss/extensions/_checkboxes.scss",
    "revision": "c1285c90aeb8f339eb8b8da81de16f3a"
  },
  {
    "url": "views/assets/scss/extensions/_quickview.scss",
    "revision": "185b154665f2fb1b2840cafa4aa69531"
  },
  {
    "url": "views/assets/scss/extensions/_range.scss",
    "revision": "c0f79230f950414d91d19236e77a4aaa"
  },
  {
    "url": "views/assets/scss/extensions/_ribbon.scss",
    "revision": "227b07920ab421bccb574a1afce6f533"
  },
  {
    "url": "views/assets/scss/extensions/_slider.scss",
    "revision": "d245af5733b5e2856c88c1d114c39802"
  },
  {
    "url": "views/assets/scss/extensions/_switch.scss",
    "revision": "0924672219f6d5e66052dd31fa2f5fd0"
  },
  {
    "url": "views/assets/scss/extensions/_timeline.scss",
    "revision": "ab0e661bbb60488bbf54e0da5b9e3a6d"
  },
  {
    "url": "views/assets/scss/extensions/_uploader.scss",
    "revision": "87c02186a4f57f5a4eba764d4fa55c49"
  },
  {
    "url": "views/assets/scss/layout/_animations.scss",
    "revision": "4d86ffedbb9196bcec313232009b5d20"
  },
  {
    "url": "views/assets/scss/layout/_footer.scss",
    "revision": "aabfb3ae2f45b46ee4cf2a0f35b4df27"
  },
  {
    "url": "views/assets/scss/layout/_helpers.scss",
    "revision": "f43db07e5b68cf286d3d2e1db689209a"
  },
  {
    "url": "views/assets/scss/layout/_hero.scss",
    "revision": "aaf25c476a75e65528827f185bbab956"
  },
  {
    "url": "views/assets/scss/layout/_navbar.scss",
    "revision": "d04389dc88450f3752cfdd47f87c56fc"
  },
  {
    "url": "views/assets/scss/layout/_navigation.scss",
    "revision": "80f509449ee3a703a2b1af4aeec4e7a2"
  },
  {
    "url": "views/assets/scss/layout/_pageloader.scss",
    "revision": "eb4763fc4890e9efaeb927045136bb1a"
  },
  {
    "url": "views/assets/scss/layout/_responsive.scss",
    "revision": "10b6c89190b55ad9ad552df7f5731f2d"
  },
  {
    "url": "views/assets/scss/layout/_sections.scss",
    "revision": "53fb839dccf879025842118cac4407c5"
  },
  {
    "url": "views/assets/scss/pages/_agency.scss",
    "revision": "c63706bb66e61d80d9bca075c79e9c62"
  },
  {
    "url": "views/assets/scss/pages/_auth.scss",
    "revision": "db21e961c166c511a82f7916b3105ad0"
  },
  {
    "url": "views/assets/scss/pages/_demo.scss",
    "revision": "c8ddc6d54eef1dfe2bbefde7495bb359"
  },
  {
    "url": "views/assets/scss/pages/_details.scss",
    "revision": "f3ec5e95601e5ad1a8c3164fc3c8dc23"
  },
  {
    "url": "views/assets/scss/pages/_landing-v1.scss",
    "revision": "518cf6f17eb5d86c39225c2fd7d3e7bd"
  },
  {
    "url": "views/assets/scss/pages/_landing-v2.scss",
    "revision": "a65272493b3fadbfc7f4ee5caf7f50f3"
  },
  {
    "url": "views/assets/scss/pages/_landing-v3.scss",
    "revision": "975b0af1a69f01145eea00c5529ea149"
  },
  {
    "url": "views/assets/scss/pages/_landing.scss",
    "revision": "8cc77a46a34af990e85fe3b28e3100c9"
  },
  {
    "url": "views/assets/scss/pages/_startup.scss",
    "revision": "c762ed00f342098c7e6b6044f373514b"
  },
  {
    "url": "views/assets/scss/themes/_dashboard.scss",
    "revision": "24f821db89246fc88544206a4285e16a"
  },
  {
    "url": "views/assets/scss/themes/_deep-blue.scss",
    "revision": "069b25a04a0e45b4ae9bbef93694295a"
  },
  {
    "url": "views/assets/scss/themes/_flashy.scss",
    "revision": "1236ebf698852c5d90d652ddea9087d3"
  },
  {
    "url": "views/assets/scss/themes/_green.scss",
    "revision": "73c59b2e0b8e60fb9e61ce43b217c124"
  },
  {
    "url": "views/assets/scss/themes/_lemonade.scss",
    "revision": "c74c230600d890aede6a8a3c90650dda"
  },
  {
    "url": "views/assets/scss/themes/_main.scss",
    "revision": "fdb3d51fb6715f43d7224deb24248f23"
  },
  {
    "url": "views/dashboard.ejs",
    "revision": "024e6d1000c52aa473df5058c0589b8f"
  },
  {
    "url": "views/favicon.ico",
    "revision": "f2bd25e6a56ae6e2844b90fb5b0c4a4f"
  },
  {
    "url": "views/help.ejs",
    "revision": "9daf6996b950c80fb0ee75da70953830"
  },
  {
    "url": "views/home.ejs",
    "revision": "29daa16ce64997468668045f0f663d73"
  },
  {
    "url": "views/js/app.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "views/js/authentication.min.js",
    "revision": "506f5f8f2b7199fcd44d3f2cda64f35e"
  },
  {
    "url": "views/js/background_old.jpeg",
    "revision": "d02c226a2b73d9043b064d9321cabb5f"
  },
  {
    "url": "views/js/bootstrap.min.js",
    "revision": "e7d9a06cf9053c51cd4ad3386da0659a"
  },
  {
    "url": "views/js/bulkit.js",
    "revision": "ea8eebc12e2f3f721abf440f65584e81"
  },
  {
    "url": "views/js/contact.js",
    "revision": "9db612d68672f2a325428abd558e0138"
  },
  {
    "url": "views/js/custom.js",
    "revision": "263a29160e7e6a163f5ef137bc1ad1b6"
  },
  {
    "url": "views/js/dashboardTab.js",
    "revision": "d4020eb2da950f56594ea7ca782d845b"
  },
  {
    "url": "views/js/demo/chart-area-demo.js",
    "revision": "eb299ce1c07042d4e11a63d75b9a4926"
  },
  {
    "url": "views/js/demo/chart-bar-demo.js",
    "revision": "987088166d21774af51910edfaf84965"
  },
  {
    "url": "views/js/demo/chart-pie-demo.js",
    "revision": "0fdfbf0de95f15b74133b41d6913da66"
  },
  {
    "url": "views/js/demo/datatables-demo.js",
    "revision": "a517b95a6e62fa8b3759d0baeb748ce7"
  },
  {
    "url": "views/js/firebase.js",
    "revision": "799b8efd394e62842691d3244df689fe"
  },
  {
    "url": "views/js/gmaps.min.js",
    "revision": "6df3f274455b0f95c524290dbaf6a922"
  },
  {
    "url": "views/js/jquery-2.1.4.min.js",
    "revision": "b0dc11d0a434aafe88908c7f33d71095"
  },
  {
    "url": "views/js/jquery.form.js",
    "revision": "25ea14ba2546ee94cf9f89a8796f3b00"
  },
  {
    "url": "views/js/jquery.js",
    "revision": "4dc834d16a0d219d5c2b8a5b814569e4"
  },
  {
    "url": "views/js/jquery.parallax.js",
    "revision": "410bf27405e60b97df3f02bdfc83bfbd"
  },
  {
    "url": "views/js/jquery.validate.min.js",
    "revision": "b117315d3ce9a02a9019036a812ecee1"
  },
  {
    "url": "views/js/main.js",
    "revision": "da07f0adc96890b9196b27e195aadca6"
  },
  {
    "url": "views/js/min/google-map.min.js",
    "revision": "6cfe2fbab22d18a57770ec3ba433725d"
  },
  {
    "url": "views/js/min/theme.min.js",
    "revision": "b578480fb17a7b3d6c8428452a599401"
  },
  {
    "url": "views/js/min/video_player.min.js",
    "revision": "645d3cef88ee06006f910803d58a8820"
  },
  {
    "url": "views/js/nivo-lightbox.min.js",
    "revision": "56a1dcf1a4298ebc6674c236326d680d"
  },
  {
    "url": "views/js/sb-admin.js",
    "revision": "655479dcf6b4c0116806526a7c005047"
  },
  {
    "url": "views/js/sb-admin.min.js",
    "revision": "b2c2e2e1292e439da6b902b8c470e249"
  },
  {
    "url": "views/js/smoothscroll.js",
    "revision": "0c28b95aaaabbb8afcd905ff541da81a"
  },
  {
    "url": "views/js/theme.js",
    "revision": "6859899722e207cf7aed0aed4ec13b7d"
  },
  {
    "url": "views/js/video_player.js",
    "revision": "fb1fb177fb681edefd7c2b9068b56d92"
  },
  {
    "url": "views/js/wow.min.js",
    "revision": "b97943d1aa290cf30b0a46f5d450f640"
  },
  {
    "url": "views/menifest.json",
    "revision": "68bad50ba022778f09ac056548daedf7"
  },
  {
    "url": "views/signup.ejs",
    "revision": "ae9e65131e0ce9cce03a1d98b313255b"
  },
  {
    "url": "vim.exe.stackdump",
    "revision": "c8ee4b10bc658368f0c681871089c905"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
