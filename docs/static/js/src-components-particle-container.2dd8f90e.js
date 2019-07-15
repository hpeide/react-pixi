(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/ParticleContainer.mdx":function(e,t,a){"use strict";a.r(t);var A=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=a("./node_modules/react/index.js"),i=a.n(n),l=a("./node_modules/@mdx-js/react/dist/index.es.js"),s=a("./node_modules/docz/dist/index.esm.js"),c=a("./src/stage/index.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),d=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),g=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),C=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),p=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),b=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),h=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),B=a("./node_modules/pixi.js/lib/pixi.es.js"),m=a("./src/index.js"),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var A=arguments.length,o=new Array(A),n=0;n<A;n++)o[n]=arguments[n];return a=Object(g.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o))),Object(h.a)(Object(p.a)(a),"state",{loaded:!1}),Object(h.a)(Object(p.a)(a),"loader",null),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loader=new B.g,this.loader.add("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png").load(function(){e.setState({loaded:!0})})}},{key:"componentWillUnmount",value:function(){this.loader&&this.loader.destroy()}},{key:"render",value:function(){return this.state.loaded?i.a.createElement(m.e,this.props):null}}]),t}(i.a.PureComponent);"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParticleContainerDocz",filename:"src/components/ParticleContainerDocz.js"}}),"undefined"!==typeof w&&w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParticleContainerDocz",filename:"src/components/ParticleContainerDocz.js"}}),a.d(t,"default",function(){return Q});var I={},j="wrapper";function Q(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(j,Object(A.a)({},I,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"particlecontainer"},"ParticleContainer"),Object(l.b)("p",null,"NOTE: Writing PIXI apps in vanilla js (the imperative way) is always more performant.\nThe React reconciler needs to pass and validate props which can be costly when dealing with lots of components. "),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Most of the time you won't notice any difference though (rendering 1000 sprites in a particle container is still fast).")),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,Object(l.b)("a",Object(A.a)({parentName:"p"},{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html"}),"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html")),Object(l.b)("h3",{id:"maxsize"},"maxSize"),Object(l.b)("p",null,"The maximum number of particles that can be rendered by the container. Affects size of allocated buffers.\nThis will only affect the component once and will be applied during creation."),Object(l.b)("h3",{id:"properties"},Object(l.b)("a",Object(A.a)({parentName:"h3"},{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html#ParticleContainer"}),"properties")),Object(l.b)("p",null,"The properties of children that should be uploaded to the gpu and applied."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"Default Value"),Object(l.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"vertices ",Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, vertices be uploaded and applied. if sprite's ",Object(l.b)("inlineCode",{parentName:"td"},"scale/anchor/trim/frame/orig")," is dynamic, please set true.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"position ",Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, position be uploaded and applied.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"rotation ",Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, rotation be uploaded and applied.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"uvs ",Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, uvs be uploaded and applied.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"tint ",Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"When true, alpha and tint be uploaded and applied.")))),Object(l.b)("h3",{id:"batchsize"},"batchSize"),Object(l.b)("p",null,"Number of particles per batch. If less than ",Object(l.b)("inlineCode",{parentName:"p"},"maxSize"),", it uses maxSize instead."),Object(l.b)("h3",{id:"autoresize"},"autoResize"),Object(l.b)("p",null,"If true, container allocates more batches in case there are more than ",Object(l.b)("inlineCode",{parentName:"p"},"maxSize")," particles."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)(s.c,{__position:0,__code:'<Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <ParticleContainer position={[150, 150]} properties={{ position: true }}>\n    <Sprite\n      anchor={0.5}\n      x={-75}\n      y={-75}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n    <Sprite\n      anchor={0.5}\n      x={0}\n      y={0}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n    <Sprite\n      anchor={0.5}\n      x={75}\n      y={75}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n  </ParticleContainer>\n</Stage>',__scope:{props:this?this.props:a,Playground:s.c,Stage:c.a,ParticleContainer:w,Sprite:m.h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZnAIVw0nQ2V2g9OABHISQUWImBcIgmDXGFWJYEcGhXDQDJSPdGiqIBdN9DgSRoOYmJyDY4DOOdAQtVOHCVVQPD1XYKDnH7F5ujQo0yIo_jVGwBj8PYQNJR4-UzXaMFUF0FFjnkwjEixdhuFU9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnHyABYgvYAA2IKQvWMBgIAMW9aBEh8_hnEOBEHUwGChH4JYiGoSg4HChFkurVKaGcCAsMudgAEZotC-RrNsqYAEE5hc9gIyg8gbCgdAw1QjkXLEIboxkdgUScmBuGAbDHKxeQtxrYBRugCbggAMkO8ZEnmShmj28bJu4W65TAZDJQGVB2nYAB-DZ9rDCNpquK6DtQLrqykGQqzfMwYRUzAwDCKAph-ma5uB_rl2rBNTIIHA0syFIrwIbaa1rQi6LzLgJlWpNfN8tDNggFJCApqm0MoGZu1QOBVqgjwJW2RC2gwRwoCFK5fJqGAwFasAAFZUK2ldCcYUSWIkmB2KIriBHlwm-0ql5ntWgBtVqpd8pZjd8gBdIHte1_sWYyGJ4E5nX8jZq5UQZWWtYsAmbaJjTaG97X3FGoVVt8nApetv3CawVbzQAdijoPCcSeOk-jmOLH5Oi-BAQhbnuR44CTc08nNEZ4AtAAmHBvVcLCexGOAPkiGiPnQGZUBwAZJHigBOJN4ta6vJAaVwAFVhQIdQcC7woQBT9hNyXxh1P6QO0azkPhgEcPI8zrO4-Aaml4sNOT8PmOc7SPOC7uB4aNL8vK5Rc1a_rxvUFcZvW6-FvyCd27r3AeQ8R5j0ntPWe89-BLxXlvG2a8A6MgQX7HeYcT4HzPuwY-GdsEXzwagm2N8Vr8HvkXJ-Zc4AVyru_OuUQv4_wAW3ABQCe6UD7oPYeo9x5TxuNAmcsCiE1ngTHKQStxKSQ4hrX225iZpF9lIDGWMcZ422lIFGYMzBfhAJRaitE0iSAMhoLQFBgL6AYMpe0GNzKmkVLaFSUEUZQFiNEZ6qFzIzAgFgCA_5qGwBSBKRIVklKMWggOSwZ14CeIHOaAgUS4AhKsWOVArBmIQHcFKN07QwAeE0JIFxHgjGpPSZkpJjEoLQRFDqaCzgAD6WoGjOGggAGV6gATTqTqa8AApM89hLAeJ0u6D04RoDCTtnccpxkoJolQEpGcDRUDXiEM3bi2lsk4A9JsKAsJEkOPtJU7xEA0oQECEcDZGEtmSC6Locg0AMjTMcZwVA6gtjahgKwCIlAoB2EubpD0k5HkHMguwFG4TKCsC4Os8yHo7ZQqnCEswPV2CoGEDMQaCNuCzWAEDMwxhTDmCMOwc0pKyXkopZSql1KqVFGJfI7oNi1zUBdBGPI3QJi2BeROTUlpIhvnYISwV7AAACeQ6J0rpYTFFKNMXTWxUjYV2s15ERIjidA5NgAm1PkSrOhNab0wIKtbV1tiV6osCzNmHMuY8z5shdAgthbsFFmAMAVMqaoSleavYqA9T8yNcACMPLwxdAEEsOIJS7DypxV671hZ2Y_L_ELFIj5oINAABoNGDVODIPklhAtDQKs1cbbKJpwMmx89h3BpLsPOGAeM82rEjUWuN8g5a6prEWqVNKe29r7eaOlvJ_Q2WoHZSZkT5h2FcsAdYjxjj8joPkUd6x1UTCuBCmYE74A4FQKEIg5zQoWANYQddESEk7r3Qe6yFg504gSDyggfRzAFtBNWagfrkIEFPSzLdLcHo2UPT6ieqByqfu_Zu89_7yChVnZICcyFxixG2NxaIi0iLCjeusTIYBwO_pwF4H5MHqxzoLYWQSmZmSfHXJmFxYAtiJBVhsdwaQ4CYerAWnUqBmUZgIPYPwM4WobrwwRqARGLD_TDLh89aLMBieXnBtNma9is2enAJYcAgjXFuI_LxPjNA4BOCMVAQsOzSE-dIU4wlFMNBwM41xbN8DECgEyFTo6pOTpwHAPw8xhorkyRklx_h3PbpE4BiwYQIjE2FMFluoWVyrrwDFi9-6Mhhd8DAOmJ7io_uk5e1LK5UTuCqsxfQSW4tb37PADIrAYBakyDiGc15QiutzdliDHnyuEy6HAH5YzqBJd3SlsNK5UpUVVtWoLbXhPCFEyubmOw7UCx-U6oTuWhtpZVsxa84shQwDFCGsrM20tIQwNBbx857hTfPZ1mso2ERpXTb1Xqh3CMrgCUEl7s2KujAyOE8WFwbKCbPR5lE04Uhpa8yV9AlgkOtdWx1o7K5IddHQC0ygHY4fA5C4j4dhM51QpgGMLllrnrxCWOyzgzR4XQvQCuAnIwrgRkmWpvsA4ABy3oYDhsdCymgHOjzRrcqglF85BrM4NpM_nMALZawgM0CMovbquXteLLi6BpozuEV0R9Ahcfayvi8tJ_RMlRmEaLtAtFAcXXYAACUsHqFpVbI0XnrfoNLhNihLLSS4nIkz2C8F4MUenAfih7GaPE-Y7AAAkwAI8wGt_OJQi1QhzBcbmCI0fdo8541LpPMJ3m5hD4wCNNbZou7xiH4oWsBU1iUOseQHJOrdVHVMaGsMCAbqnULiwCWrgAA4qaAePV-hKg-mS-v9VcNFLNAPUGA6BmgU_0WAew-7NEXOsN0CnJx7j-g-PMZah7DfgNrKQ3tFBtmI5eMTbgJ3pnA44Aa_WCi7r1XcyuQNlsnAOo8nvJwMhxIOAe_HLSdRvdgL_H_N5SUf_GAQAiMKpGpepRpZpNpTpbpPpAZDkGXPXbXJ9dgSAv_AAoA5nGvCwHASAOGSMDFBVAAQlfwEBq3QB7hsigFCHKCZw5FIPAJR1CARAjAjHiFE1ZxZkF2GnAK2UEKWAlwHAtiuHF0mQtimiWFxTfDxRYP8DsAZWhCwBAnQDsGUV30zE1wsDqRL38EGl3QSHWFmGoNRVCCsL1wnjZ2cF6jSjPFMOz30AAHVoAoAP0aAEZjCaw0AjcMkAi5kFkUglkVlRgNMBAfolhignc0Vmx_V2AGUlgGtDM9hf8zIuUUjjhVdnR0Biga81DxNPCaAtQuB_CCBAiVwUUoJ31_VMiyY8Alhh8lgSdR181XBmg0JXJOUW5mdr0awhi64BpXJnQxg7M4g2ZfNUE51LAdRdQrh_BdgRU0BYAxxmhK5Fphh7Cchyoat8QuUM9uj2ZhDBxzDrN7J4A2MbYEt3d0tMsCBnj6d3YCQcBTCb9niv8Li1MVwG9RiLBxibCcBxJkMBA65whKAosphXIYZfkUECsvjwTISMgDZsN3o5RaJhRXofIUQWZ2gLYfoQTTiW4F8CA2dARBozsfFTlzkPhTRaA1ZpJIwwS5hPNVUYAuD6STkzkMgcAU90Asg2SNYIxxjTw-Mvo6AEiKScAqSaTZMKTwYt40AoCPkvkZsgC1TCZmjP1JS0S5guDxiC0GUyTqxyiyNqNtQuAJ4ZhRTaB79PlO9SQuhWBiZaB3TPk1ZsACAn8t5GjSYNV2iXjDVej-jBpxiRi9cb04N-N0BYAeV8hmoVw5chpKtWBO98AMtDV2AaC7ph92AAAfEs1nV0h_HABLAsu6BLQMm2TkmYUMLfC4aE7rJqGACMJ48MwgLg60-M6YDAZM7E0aA_dM-XLMnM7Ews1ybDBs7WJsiE2HAQLEvonE9oPEl8dgQkiIGYEky0wmAc-TIcpMykeAXrS_NjFcOdMAVgrzQ0QUzWLefkxkoUkUsUqSCUqU0cGU66OUsA8YpUwEJYIY00r480nkw8z1PXaUsaAGeooMlvVST6f88wAYhU2MrrUcPAxgcFIQBFbib3BkVaJsraXaeCsMeQDROYCFQigQbaa0qjXnO0h1aIUaBXAQIQMNaELioUJZVKBciohNWAHADIbiiMYoM8Pio4U4XoLi3MNAf3QPBlEPHAUoho0dMtcSoUTi7irg0tUSnS-I4ygSygMo0YyCuiRC6VZC2ZVsgQHfSo3jfjNISMjxQYr42MicoaOg9c46bNDIJy8jFyg_ISsY405sl9dshyo02wCY5sgxXkoE-vUY5injHwhIeff1GyiK-K5nHAOfEDHKpsvUmsV8p84Ux0z86RGSCMSwoQoC_1ZUrnVU1E-KqytIaC0EyKgzKuIQRIaC60gtXK4SuyJo1zS4jCmMh_ckjMiMAE9gAKgEnAencK7OEpY3AIla-nF5S3BEa3O3B3J3GtcvN3OUHaiAQnVFIIPQocdgQIEIdgYoI6x3G_M6mgYoV8LWXA3XOwhwo88k368wYvG_VSL_aUm_O_GalmR_NCLoMAVacgRGOKluH4yNQacgDkNCURGCtQhlOeLHLvcdBJMwAmtvewjvB_QaCmuGTvU_LAYyWmgiHk7RJQXRfidKoSESMSViVWL8mSOScgLCPxQCXQECAwMCZJFCtHDHC5TxY5Pxc0d7cgYJEFEyTUWxTUJ5Q5JiZWKRdWGSIZTZD0YxJFZ0RmqGcWdvHoOCOAOwCRPm8UwW-SbQ3Q_QzUHAaCPofmkK7vNDLIQaKCEzTAdAK4JEjTGCiwEO7iKY-w5zPXLmqomonK8K8YmOo4KY662WqcS09qluDOuuTsR8chR-EuKhGhN-D-BhJuZhf-DuLudhThMBHhSBfhOeGcV8ctdHB8LFGNVBcYjTAgL0rs4Onu7INfT2YEreaeiwJi5yzKqAbKw0tOr4jOpak6dO8e6E8oVESgQaiynA2K8K4MmOnIaar42iTebCnXcwM-nExWXmlWZ27iYAL_GGu4HG2aKfeO1Kk_VAHRPRYpNQUW7QcWixKWipKwdpaCM8ZwJYfkwwqYf5XiMZX5T0S8fQHW0FUjFB8iG5By7B9Ink2FGiHkoho5Bkp842q5Ahu5B5AQChh0PQHQkIOwFGP0nQpYfCyFaFHijh0dPdVLUmCYfk2VPBiiHkyQanRFdWqCdlGHHYcnDTcR0h4YSgbYfZYdAlbtftPR_RqVb2jwFxZG3qNNXR_RyxntQdBmmZQKnijIkRvAMRuYBB45JBtxqh85GCs_UFHh-i7huYdiekI8fhoJ8xVhoGXxlChRpDZRmAcR2xlSFFa8F4KITdf0waSwGBuBnAVJ4gWYSwf0iGS2-0FFF-zO6B2B5wHACpkp4yFFAAcUyBmBsDOCyZyZqeadmDabgHqeSeQrZy4mcBMZgFgncG6FcmyeqZwCGedBGdiDGbgmdH6bKeQsdufoFtjqqdyY2YNvZOfOiZRXXk0g6ZmZOc3iOeQqKdYamc6ZwBudEAtoaeuegAKAucmZ2ZqZhxcRnA-dWamGObwlgD1HgDxDufOeBZgFBa8wBfjTskal_BFHtjOdycRbJD23tjZuUCAbQYmSrIAjAfMVAnAmMlsCGagHMiFlFK8yMTgApaIZCNKUzGGRyTyWEkKWKVCLKTkasH9J9qWGqKqjgkSAILMjwd018U0GVpgECVVqYc-X0Bt0qFgAEBZyHoADV4gp7SHJWmGUiOj_AABpWAmhgFSQHZPZc2q59mKYewG3BoFpLUEUM8NnQadoCTOgEJHR3VMUOIxgq4vpolKVEVOPVSMVggU1IdG1uyBA2pOpF15wM8EUDVs8LUIO9YA2e1x151112Q8YdfQDcKMMEfI_QDEYIUcaXqXZPwSe4_HvSt6HTIdmUbIgOt8txtjV2wM5WAdtswNQn14VLUa2ym-dYV-CHIzUwNqVZwTTUux4Z4V4d4T4SQIgWIPwIWUaKIVAAhs0c0SV80SAc5SQYxygIpVwaKKoTsQIN1V1DwW9qWeKJMcgeKS9ymBOeKeKcUauPvauP91wKWVqcUPiaiAqzQAAYhaX7klV1VDaiXDdyMjZseeYGdtZgmqXjeQNaQ6S6V6X6UGWnWsJrdcCuFakAw8HCAiAn0wHDviA00AziFGgSbgHyfSdo-RIY76B6zLH-q-wsAoNoAEF6lNB_oSEAwE4yEuwaqHxeGE_FFE745eUE7NDYBagjvrfYCiDgG2AU6LbYBEBFiLd1jdmdRXwctcGMcP0LawxEDcX61M_WDgDiF7bakA208J0M_WEKxbaFDbd48AyhXyEs77erCwE8-rGygc__vxRMClRt3nFhFyBiEpdG0NFHD2hnHxA5X5a6B4iwuJSdweu6AywmG4loB0J9r2COBIRg-FRFWLe9FUlBwKDQjrTxi3RDYa9lGAGsweZy5gBLJV0gGKLQnK51xQTq666a9RAKEG_DGG-yDQhq9g6m-ABE3FFQDm-hjVzQnICEHtqFDpjQBDeBrsB64zRs0eZ9qjbhZRVPCu66GxkiE70xXWDa_0C3UAygjG8q-V3m7VyWBIUGiG4B56H2-46O_MD--2-KJgsFyCPmpIXCqZa2rqLj2tyB6V1xJm87qWHe5oC3XYAAGo5QswSY2w7qM9HrXA0MwclgUgRBnqABSOAL60CqJDHqINIAy5C5iFILvA2EhbAvHODZY1Yx8nwIYwHqYDTetOwPbyqCHryTgOwAo0rxaLYagHIPnlnCjlJZTK1FsnrPoBEOAHUSagBcHw7ryG80XlYnUK4EnoY1FRn9X6gJIA39xGnzADgCtw4jXqYLNFIBke2nyiMBXg7_oLydakITyYYvIPAcPq3qPtAfslcYGvlirrocgmUCML_HXw-9YFHsItH_rvaoiK3ZoB71q_HggQnkn16H73LinuwKnjlDn5oYoXr6vr6mvDPpvlBNQlFCTgQF7qYkQCMPwOAE1waz_LZCNmAuAuN-pRN5N1NrUMAr_RVmgZV4cyTi2Tg6yQd4lZxZIZmwNn1dgIVskCdiN8vkObobstpvEErEIe9JOggR_Wr4ler5iRr87zNDgGv4isI2S3W1g_065_9uuoAvYONHporcoBCHTUmhGmLwDBU0bUplKEeiX4bCSQYdjDEpp34LcFfBEF0TgEP4lgqAh_AuWL4m4VwwA-CAvztgRA48PcW_EIBYFRIdQYACMMQIf6N4Vw7QPgYDhurZBW-w4R6uj0769cGBorRDsUCWCvQG-DPKYMUBZ5s8CsHfe_oDnWBlU50H5WgNCBqyZhEyqrINtnHlw0EqBsNHuCkDRRdAzwxgz_ifWQpT8xQxxGAC0lsAgRtmUg7QQiBbIeCvBKIdIJnTug5JsBz0EJLZTQ5T9OM0ZLQcIICHMgseEQmyGzHNqExUuEYbYpwEGi-QlQeQxgEYKVYqtJO5aOgCkAmCFCIARPInjHxFxfJBo2_AgLvzPJqtBewvbWPNR-ToBO8BsT5AQEUKzkbqIwfoYMIP7-1iE8uPwb0PGFfJFCqQi_FEI3rTA4A7gyFJ4O8GhCY-hMJIX-C6BBDthdVQYWQL6EP4BhCwrgoDWETzU_B1gu4JcKGEuRwhyw6gK9ACpxD3wUwv2PsMKqoAFcXySgYTnmFDDrhteLWIfGjjz00ODwmfl3gX5EF6qII6mmWVUjT1YM0wAQDkE2ECARgG8REPemZwfQI0i0eYLmBTx9gMgrbCAdWHmoPCW4uI_EZpE7zhVshuQiAPkJqG1hRhG6eERUJnDVDOAdQhochVsJwjYCcATobLnlxzCLhMwYYXdAZES5JhQRG2Jq21Zdl9hpIYEWMPlEH9IRKVLeMDT_rP4xR1NLOnqJZj8iR-EYEfqyNGLsjRweQ1yAUKKGBsBRVQvADUJFE_CUUfuVyOLggBdCxqUwYip82VEKE5qlg8ltAAjDhjOCPwwckPXYDhjKchRBbrTlQQajWCWo8AYDndIz5Uxmo_stCGRLpiIwNBWMVAF4H5iEQ0hFmJMICp-4lKy_BpE0mw5oE8OmBJMSeS5Te8R2cMYsbmPib4hogWsQyn-BGDMQARxQIejEEy7n9wxVwGPJMiTw6QVxwAfYQ2IVGjdKAm48MdpCFAKD_ByVbMaOC1a5jax-1VqpMgQYYckCHY1ArhwwKWAdxBomemWMjpqiawk46sjOMkp0x7BBQK4puLXFLBhkMebcQoT3GZ5DxhoY8YDzrFnibhc9fttiw5rURLWknYBtgFAZmI9AJLGNmODgBpRIhKQoaPnzj6C4deYlGrAIEGocAFUfgpia8PIkvQ1SxElXnf1chnt1AiMJgRwJEBRIIScJHHikA-CCEFqeSeVOEINh8T3k-BRDhbGtaYD4WUwKfjP0xo_JYAT0FIf3WjrOiqA96VyMZN0lsxRi81GgsJ0yCJA2BNk-COHx0mJifxiPM3ohyckJB3kz0FyROJ0mDRERkozyeZJ8lAkvx3QH8T1VWSjD2A0lCSh6x0neTmQLfe6tT3MAOTkgQoJSZqW-oz1TR1YFFMYiDrRwzJ5BIUGeAlCJ8ACiMVyeGCwAGwACiwgtgyHrxlUM-1U5iYkLqkNTYCio1yO0BB7FEQkahLiQUVcgiY0oUPWaHnwkLUTEYNBCaQCKon89OJakl_MhEiLRFVkcROVIjGvAzYNu3ZVQKMDfCAN-ItyagPclVa4STEYtYlpLVJYqQxQ9DVVlrT3YXSbIDDIhjMF5iwoPQ1yaqNsDoh-J3h6tYYCiF0CQBZwrLbZJVAICQy6Yqkl5mhwqreNXIz0y6Qw0n5wyEZKQN8FxNTYihnADQHUG60DG8xVqknZ6Ld3Wa9R7ARrXqI03cJs5eoeoM8GLgpnfwjwGEoBgWhun4SgIhEh6dLVoEstskuSfJJy1FkvheWFTM1nKElZK0VaatUJHY1RnCNoIdMhmUzLqQsy2ZSwQmcTNJnyzyIgKTXp9NVbm050jHTYBOGfDxpDaknGmWhyEAiAu80xdgHqFmB50d2sXXVPYDyARBZQ-2HNM-WFQTxI6zvfMAcQ1B7tgw3_UVKtyMCtdMGNASAZkG669cKmu3LZkcF4FiV6g6vBlC2l_4ZzVIZE9Ic9F26CF5s2wZDtEzeHPpYqtfbnLVWEbOcoAtc4Hv92KI0DNqJfU3ITAqaE0RAwk-YGwIhScD5g3ApyW3IEACCt47QL3PEC4Cx9g-eMZ6uLQOYnj88koRSshLDzPUs5ucuoNEPYBlVchrshEnbLdknhRws8x2fPKL6WCr54VOdKeCy6Gh7ymwHIEe24hbyNY6fe2a5HVnQk9u4oVkrnIfkHMuCV8luEPWgUax80z4QvsRjgxOcf59haJDTz3LsBYANWSlgYIm4wRjkb5aEkQoqYK5U5bxG-TQsGnZBw0NcnmHoLgwalFJaADPHYlbyDCdSRfV5O8mHbakfkupUYiRhwp_V1eV808ZvlvokKvGQpU8EYxMbIsRASyG8RGFfnoTtGfs4VEsinYcLhwNiQRd8l-T1y1Jjcl5JqWMU6lcqoC5gpqSWQRBBFlgGxT-Io578t0chIQKbxbh0BWAszFYu4VdYatay_Uu2OgF4IZCcSrUHclF0Jj0Sl03kdgIbJJls5jsDlX7DzDohS510WsxmczNZlng0sw3dADbjhlqKSBMAW8GQvXSkLKqJSspSiAqUP9AM09IGGdP0RSMZGQpQlgRIlqWJGINiVllwvNrlMIm185ROApqpjd6q8dNUjKlooEU-Gg0ThpjDop8NkUyFARuzCEaVNVltTQRqE2bxodo5LjWwteApBIMapZok5S00S7ozPao2acdiLFA8DgCdwfNOLFEIrg8K4THZaEzEDAAbCiMRgBco0xXK36WyZnPDXFirQEaaEGwqtBsJf1qKkgbZSEwyDbRD-1YfETYSFIsBx2iQKXINGKCnKLuKMCMDHjBW-1bSBmWwDfyJWc5Sy5ZalUgx3Sc4G8VedjOIvMC4q5gr6EaWpKginLjkKMQJjMHWVThxVwTXZUsFWUwUOlkgPFhg1dw0ABZ4DEliLP7mZJzIEsjlmci5bMsZZqslSFwB8CsszVTDXAYkHwHt4XuEjaRg_iIbEpzCH_OwDDI9BuqrZOik_mkmgAWdkyqqU6JOgTlwdI8wAUAWYuRl2RpmcDDNtWFY6FN_SPkRNRkx0K1QLAFTHyBUwzXsBumrTWIJdnaD5remuauZjAAWYIhxmzoHyOWsrVLMJmuavZvzTnk-Rm1OawDB8x8gfNc1jzHyI817VvM_myCftUOpSA9rO1ULGFoljlDosQWYLXNXOsxbzBu1ULZFvMFqhD9kKZ4FpGeDZls5LAzgAKYh0X5AFY1zgDkC2QiV8EqFqqz_uz3mCiEoIW_ahSzgNhx582bq99VEkUIN5lCGI32UKmJR6LFJcecwUBtFRhsI1iHG7ihzWZodz1dSBoGzlfFptipR_H1Q4BZI0gyxd6h6hSBxHmAg1ceGdvyH9VHBOFvKK0JuWeqTLsNH1OohyC5WCp05__ZrjOFG7wcGNwaibj_1W4wDmcDoP2vl0TmIDoNyA2hSZHtn7CTuPKs7r1yMBbciii3KNSpAsVTLaADGyUlEkLGDhp0SeKRXHQXD-1h-UPWKbuv3WHrv18wbAusA5HIS7Nzo61fAOflDQ_BYAKHmxMrnvDkeB8xEgCKvm6av-VpSyTGOQlvy4MBRVKPakB6t9NguXJEJYoLw5BegRJWUB_weK_jkKbCveTkAhZwMkNKG_Dmm2s3S4w-OW2gOrl7H7DBoFW7IMyQgVdkSCsuZCXSvQC1Fat_C3LW1o60fQ6tTBFgO1v9T4ZVA14ypb9FyA9zsgLWm8dWV8LL1MwrkfrXNqyrFVP0OJZbXeiXpra1VHgUbfsIm30KsxxCVrc5otFJbutZ22Ghtq62VaEqSQHMntowBjb-BsSo7UaLQl64501ql5HrF7DM4aCrml7YDnCpXa9NnAdAFgGB2kD2AdSRGHUnu2JAHR6pGYVoLB12ARhaQvSRxN7Ho7Bo1q21YQNmp5St46O6Ha1VxRBbUFFgDPjJui6AapU9gbDUJttKhrVu7GlIJxvmCsboBMGvBXLnoyMYjwEwJwOBowHGQLFiDZytpvmBLBaMgu2AH3O5YBEaCNBOPIoLPCM1QN8HNvhmNB4qDmerPEKDxprzSzKx560rRbEUFXK1BrPQsP7wKKPUNNDCt_qaHQDJBsA3guwEpXP5uqcAxuuPGVUQ3IbUNWoS3YNHl2q0VYllHlTxq0WKr1Gmjfmb0sFn9KwI0TYlDDKVUaZFG2wEJBntIbsoUYISRVcqsVkp6NVwsqBtBEoAcKlgP-f1gGrGa17MwErRWtK2VmMttVYsjCHqoKQGrpZjLSHeZEtXq1qxVLJwP4DwB0sGWGGiDUrEjq3FBQHC4cZ7AzzMRbJh8qgEKEihZBwNPO1SMnNX28bRUp3VSBlNg0Nz2JfYZiBphr0cL4xJY_2rkI32DQDYtmukajvOjNA0xqQo7a-B-EZ8N99ecKRWJYmaiXh_UjnQAZ_Gv7XI4YzzGSBeCPhFAuUueqAbuFaDf94QwbOchgN-YuKb-8MV0JTmR15qGU-yVxUckJjQdhBj_F_mIMgGLs3QeammJGENVVh4B3MZAYuqId8DSFNDj4CW2Q7H9I42HfDpwBYBpoaI3yJpTQ7JBhDUO8MUsDh0KoEdiQaQ-WVkOk66D7AA2CSBaAkHQDP4oA1xXyk07Y9G-8gtAEE5M55p1YjgqsKrH0tXAbODgpevSYRg2ceWJ-fTuP5X9RwGQNds6GP0q8eNh8-_RRiOAN7qsTeyI082FSztug87J4KyGXZtw12Y5TdngG3a7tJQ-7Y5IeyfInshY57S9h4GvbixfId7B9k-xfZvtfIH7L9q4B_Z_tq4AHIDq4BA5KrkuLcCDi0mih942dYmo_eGNk230zu63dwJfvMXX7bA8RrdKIYZALkM-aY_YdbniPMrQj6x5oDEYYJxGW9TzAdphscEuhTBTs4NrByg0c739Mx6NVMBaFtCzBb-9YB6xMZ57AM7QUDBpkMwvRPj3x-tJsNzVfHBg8ecIMCYBO4iIToJlPNCfZQp59g-QTAMCaIj7lPjEQXgngC3Iom2gW7IE-idxObAMAOJzE1vkRPQpgTy-vQFRAf5QBKThxjIPsHpMcLGT9E5k9SdRPsnBOvxrkxkFhOfGqTgnBE-ECRP0QBTDJgQB4OBNR9CAEkJDNKdeI8nPjMpx9GideMqnhTn_CkwScxMRoEQdJnU0xwwDknkThpnI_ideMYnRo2J0KB_v8OzswxEB5kDTxkH0qQBiHGdnOxuAPwF2aRv-GPCwhYQc4o0PIxaElYlGz2kgFo4B37jxRq4gHVwK1CTDZB-4HgDwK1FajxRXAfeKWB-3QCDwYA_cMAAiAlDtH2o-ifiBjF679GMz0UYY2XIAE2ZZBMAunZNzE0c60IkyA_cAFGOajVN5-a_TmIZDk7dNSwBMf7TckLGok5O98dNACrzHDjixmgz8OtksxkgYx9UshPfGtwZgiQJ7kQCWMoSPEzBisQuY4WLHoJMhXyVvDnTFtI6ax5oDTzRSoBzQmxsNlykCAgSNCQE9PMOBdOHG49AhuyNvuxFoA99YuW_c3of0Ji5q3euolrD8EgXd9tADHeEP_2rCkLYFlC56ILCzR_IAVTC9_GwuwBBReIYoUmGeLtBrA3QSZA7GSC27Q8_Yo-Rdy9qHHQ8WUrvixb2NpJLO8R0PJUE06ByiuAfe6jT0-BRBzQGmBrpVtp4gTrcSgoOO0BK7xa2oVXdgNXELA76sL8AJYDTxiVZSNLtfWPpvoAWRFNLoFoizpbUsumLuMEQ45IG4sHGOF9QBS8IiXnNB3emUkI4RcDpcpngxgrLuYHTQhAUI7SUmPekeopiM86vbpTkAQMa0EQqnMOobvYvh54ODF_3c8TvFawekzgUmdyTBxy5GJJY54lwZalbwyqG1G8duYQU-XsLXmOXIxu5xaXLL8CmwGAEY1lFjDtvdgOoCEt-BsRbDfIHYOP3pktzChQaBuc-3tL2agM4GZoGoB3ShZDAIIvwC5mMgkA_uICOUD-ClhzQP4DFqVHWD8AEl1Mza_wAjiXWjr1YfgOUD24QBJq_AK4PwF6iLQoW2hb0Bi0KJkh96FI_IJly4XmgfgxYaoKCBACAZ-AUQY7udZUB1S_E11iwLdZgDzBwwn0-AE9Z-G3X5IGN_gAAD1WoOAWuLIfBsrh-AXCnGyAHxvxQcAfeHAPFARs1h-A5e_xLKyCQU3cbUsHABHDrMk2t4TN2JGBvZvGwcACcQmwzcRvgB2WQtrm1zfFtbXqWU-9m9FBwCtRRbrUYm2ljJu8oPpV0sG89ZAARxWo_cWW7zcJj8AzV7N2uJzfpum3GbIAWEDSMBzmg0UIwS2yrZNua3dETHCJaqwpuG2kwHt0m4ICo2RAhb1N2mzbb_ryBFVOthhhaxxnUAoZ6q-6YYEw1WN071KOLnDOYZQzHyolBOUkcQCxoUji7PAGyBXYwwEQBGbYKGckCogggq7fwIJ2kZZKWMoZ80LHd9sdotMPp1I0u39OV2YA1d2u6eyKRadm7c1tu4Dc7sZBujo2JPRjDIWNLeMidumB8EDmRB4buqDOzvfJTIcx9cF3Vey371FJB96tB275wf40kxgrLC-5KYf7O3RgFDdYMhFoiWc6kGC7IFgqrQJAu55hT-z7dqz_YFKbFX-zzEAyv2iI79vU_OB_udyeYbDJtPqfwHiVsgcD2uZ1HMgAOsFjDayNLRGj0bqFJs65Mqtr5MNs2TrF1mkpCCp4bVg4qmtdokajJejjq2GubQsV4qBY8FJnCVhoDhp4KNAycrw8xgRQ_yVWn8cW2PCiPuH_0Sq2Aa0H_QetaRJYexP4M2xFHg22opJISDh94K_D_aKSGEdp8Qt9OixYcM2FiOeHJbfR-NEEduaFH8FFbdtqpI8GsdGQk-o4620LbMYHc3RwY9QqLAb9JbanUE-PDmOaslj2R8_kce70BqlpNQhYotwOxtso2JrcI5seBOb2u2MR0rqNV-PxooSorqk7EeKDQFTaAokk_tAyZugWT3Li8A0xQAwAuUm5cBfgqa6vdEFkth8Eop0BmCagGebI8KfmhWoLTlJGoE6fHg4K-0JZGoAjC1PVYAjtKm058Qog7AH0SR2qqHpiOZn2AfJ4E-MQTaNnIjzsGI96h1F_oSEtQKoSP5wYP5LAV1EVwICVxggGlhSZKCDZzoS7fpiuxKCHvCAa7XCiM0Un7gJwYA1cfuBmZbs7A6IwkQG1aG6Nyn9AkgDGMGDIVsr-jUsaKPTdQAWL7nYADdA7CurEFjkDGh9a1TtoMOPlN1HQm6VoUVMGNC5XIUQtEhOQe6FhX-nridFTBJkWkpShS9ZE_D6R_pHMnEKMwEvhQg1Hl7AU0MFl-XVZUV6gHFfxJ3lM_GV3K9ho7iZ-iwozVAFFE0A0A5V1CcEUnIDgtJWPCh7mzZwx850NJFmPUEeYBPJoBRekHMHVDTbPxJ5yKSeTShZTBCewUrkcEwDbFcwtFliNEj2IRROAUwaK7bIACODIBkPUC8LdB2UWsOdOrxGA2BaALiOyEpXV7iXxwrTCkOX3FBMEZRvlZl_BBDq7Dcg1VWgCy5Dpv6QxEI1BJW9Zcdg54CfFV7AUoFzKPtMFFKFlJyHOipXyQJShbUpeP4_RyFCdxugsLCv5Rpr3qXIbsjqvbCa71C7xxxIbvNXvUt7VNqzFh8rBC7mwQq6VeSul3GhrY7O4HA8G13Wx5ETS9vdKj46qw-9y-4XB6uFxhrlt2H1Hc8GLXVD613BltfNlM-gLHp-YGdcp58I7ro8t1cWJwYfXRwRLSIBUuhv4kc4N_tOMAIhBOwUb-6ur3jcwBPYAl0rryuIUi887gnAj_sFyD_XZwGbrN_OG8HHA-gIE_N5EDXaYxy3lYtt9W97EWB-PbLj_M28-02xhPHbmYF29HfAin3Ihft9HAz6SesxgqpmvQ_9qngVFrQuGaso0XPgKmzSkHYAdj1XzDPDmq0nJimfjRl7en8Khn1xT14rPo4JRbECM98EDtJn2Ra2dQhyZKskj5D2mG4-jUTy0-GYE55j1D1eoHVjIEF-QMRaXeLMCL4nWw3ueWozu0l6MRsCYA0v5O3zbNsC49tPm6nZLy_dQDZeYAuX7UYGxcFodCvlnMXNTRGFHbVhgm9g6--bHyv_AOoMVwODouPh6vvoaaOs6rKDfugdbWCwV-7YNf4D032AKV-rCcP0ASyP7VADEdrF-VXDgx46LAsuJmoK3mIPEDEffQK22I0lzxqp1ee8CJXyz6MX88lYHSTpJrSS-oVkuzhtLhkcgpEDmebxHRXT-Mvs-x68XSrol0zhe93q3vsA84bDV1G0uzPuctL2UTkxeY2g40B048z9IBF1dNXq739Ru9z1kfBxcaMOw0iHcYgzUZwG8HrtdlsfJBad2h1sDVsi3XbILsmUGJaCCq8QIt64_QtojOfxHdgHhZXckSQ5GQJvQkO_0eiC04vv_Qe9eh8-qy0vmb3dCPzC-VeLPorxL_jxU5Rvc3yZmhbl9bGCqY3ng6r7jIPo8CNBXgXACZ9-ANfDX-c-sPM4O-Totge34roW_iZsNjzXL2Ny-8r255aXpCYJ2_hQA0vTxjIL5uV11F1OpTupd4xODRJoPrr-0GN1PEtx2AEc7oMUEYAOvNwNpFioxdtalv_dSP0Yi7bkLUjL7gOa-3JnmP9APIiQUX6GnY70dRiLr_CHAD1DhA7OSSstqIp0UWBiUu9kf_GGJTd-iIFktGMP5H872x_Q6awpt4dR6PRiS3sRy4qzU0OUby_7b0fQ8ElOY9-_-Cvuc3_hOFnu_vhXEQIApPdsdf9mA7CWQVMb_XQK4JU-v87YugcmAtwQEe9ZARztbp7wbce6SHzlEYfXkWoEfhF_Vocx-U8VWE_hdHTD4_BPHUx1G5NR2DhoA87QJ16HNARbdCYMnWq9QAqlwZEy_ROi48XgWon_8VPEAPIEwA4gJXNItdFE98yMbj0eZf_Z0jG4g_KH0eZdRR5gS8wvJgNfw6-f0kx86iSVgZd6AxL3C9bvPXGwdYAUSHtpVOM8Bax3nK4FkCgHOjBAd0HcBzSpaTeQPyAasJQLowVApB3nAUHTQKYUlGdv29ssFMwJRwtAywP_pFVN1WT1TEVPQgZHpe0FTUHXLPS8D_SIhjlks9HNXVoS1QtVIYQgs4CIY61UZmrVugLPSiDFmGIKIZ21XOVIZkgueSIYPmUhh7V1abwM2RJAAdRyCx1TIKz0fmd5mQQMgqdTBYsgyoK8wKgpFhRYs9JdXXV6IJJkOR1gXwK4Z1gCpkAxwgwEmrB4gqtWWYNONIMflO1ZBEAxuA9YFKDh1AkUnVfwadTmCMWZoKbwAGdmiAZE9YSFiYdgZO2WtIGMlkPtWWPvSlk4LZ1UQdbiW-3b0WbOVhVlpaDGGUJ6PGAEMD3keJlWV4mV5RNkRlWWXGViHSRjohWHeinYdr9LYO2Bw-CwO2A8eb-Es48tZqV5ITNXnkmIHgvT1WVTdOC0HkawYFR2MYIFi1mJe_NLHaAaSZhjT9otFCGjkUreoC9lkMZPFy4M8PlQL8eMJxhStc1CwHaBeuHEIyE8Q_xj4Yz5MqhRQKgRgneDlcDTFeVZlBcFGJ2UJ4MlB-CeHiRxXAfkPFh17BSkW1VgMBx2AnPPQw7la5D8RfsNMCULqI-6QV3lw6AJvXEc_JNDkhIaaecCIhEYPkOyBXlBUJLYIwINyIhwRdEhXIi6B8EhJwRDPn1DXQnYCFIz_SUiQxjHAnz0MjQqEI_E1PZ5GBCFVNYP4gNg7PQSYuSCvRTs9gp6U1B7g9lHlU8GT4JNVdaLML-kyGP4O6VcHYdCv1vNcwCL05gXKmU9wVcZQjBkQ-PVjDqIZwI6DMYZMN2CPA0FFbCzg45G7C29HxCVlWbeVmOU7IbsNch9PEQEu8FUIImDI_fNDGWgPKadm5VZFD2X5JWwyUn9J1MeJA996daJnP5WwnmU5pnKYSGHl2wtPU7CUKOWRuJ3GFIP7CpWK4KCRRlZCjllxwwXFXCbwueR9k9wjTzqZVgnFiPCQqYSF6Cdg88Pwc81Fpl6YewnxF6CTZZmxlZrgq1VodCdOmmpomHHo3GRWHKZBHCpgGCPHDAtHH2nDRnVIHncxgfkl6CfZCwAkk8dccIICaAogJRFYaaUKAtQUCaB_glgL_EE0MKBkT8wkI7AIfx__QgJZxmtc33mpWIsYACo_BMSNcdUAmPjEjtHGsXBxUgYMIHdlwvAkKBdwtSXP5egw8ObDjwyQAGCG1Z0BAj3ApYnt53YKuCjdeWAyJiCoIiAGsihg2CMuD4Ix8N5Z7ufrn3NaXLAIIEUIxhwLCy9J1Wwj2AeyImZMUfCLp9CIgqTso8FcWAIAfCUMkGh1bUChZh4uV4gSjTYCcFeI4ogsFchEoh6hEAg5FKPzIco_yAwosKdSXGAy-VyDcis-GAA8j-I_EOGZogoYON1hIoiIWQK1JqJCjLRORTsjGohIKGCNwmqLl0YorKLDI9yQqMIB80TKLaIlgLwBuBIgCaIDJy_PqMGCJmRHRgCBIuiJZw6AiKJiFxqMnjcoKooaPEIR5QcC4iGIu4B4iyQOh28jJ3TaOh8qXVqJR0hoIHjREB-GPj-EB-QaGqjxuOqNhpHwYKOdBjdYgMU8Y9FcJWjDIwflaDuFW6KCiIYmIJ0iBIW0iswn6fZg1hjIzVWr1UYltUflbIkYIOZHIgcI70hwlWU2UUZbGJfChoMKIgDdo8qKggogLAEahmoBKO1RZo9ijwAmYz5kzMkwPvA6gQgWEj9ZOyQaHU5Fw7ykii0ODDyJd41QmC_wvXeiXEh4AVvw05CYJzniArOBkCytjOZ6BC4bYDgV78dY7WFCBWAS7H78B6DhQNiCfFcC_x3lYYj68w3OwDREVCVpTSpkKWJ33pzeK1GliawWWInFIPJWNKt-uf2K1huYHPUDjDQOjmVjfPK2K2QbYvqlBx3Yi3i2MnY8w3KjTLbZnfCfEfGIlIGYzmN01CXKy25h4ZDmM7JdLAWPgBOyHkNzknHbx0xRqvC51CcaAJiL2FWtN2MGpW4j2NUwQnDPjTjnySMPtBz-LOJkhEY5wI-YMYqvTsZMg68J8RMgu8MHCEI1yNHBq-P6KpcvIu1VQi_Ilh2ZwnwtDkyC8I58CnCDJcqKqgCREiJ6iPmCMB-ifaZeKAJ2gCdRq8yqY-M0h1o87XuiPvC6KndaY0MRQoSEUCn652IqFXXjLRHAPCxeI26KIFkJd7woEavaMSGhBo8blWFBIiEjL52Dd-KQSaomV14EueboGWotonuCwTCnBkTwS6Ia8xO1ZtL6KqjF49yJlA78W-PKDYfagVBij6WRUfjN4PuJhibaf5j_DMJJGJYphIR5jHiBlOxgdcp4iAAddZ44mPnjh0FFAdc94ycIIjD42cMyZ-pY3SWg2fdEVFjidCwxXDrqfkkeY4ErcOWhpoUyPF51iUVC2JnRTNzHdW8SgCT9GeDSEzAvAUIDwAtFOFnP5HmYeL0jpg8dWQQBEsCGMSHeCqNzcnmMCK8TJ4h2mORQk5BEJj7w5yOHDcw0FEvjHuahKgTV4onV8iPVdCPQYt43ljvMoLVvQ3iMIvVkCjIkk-NkSaFcKIUSoomsmKj0o4shqSNE2GiIjyEq_CXjkk_6KosiguhOgTSAs0PdkdEiJM6SCROBIFYQyCYA6I8yPslGJP-Z-Ou0aIiBKh834q0TuAm4rLTQ5vuB5GcBnOVqmS5m9V2GehAeLBN_jjojiMATwAxpNJ1QEteP-jaIh6KEiGEkSJmEHkGvT2TqAD6Na0dk55L1hqATzHvkOIyC3iNAwuQK1jXk4x0QCNkrZLeSyE8FLVifkuoj-S1WPJLR5oUxXVBTnozBJJg3o_rkhTKlNBPgSKEoQJqjr4x8DviQYknU-0ZFPAk_4XEuDXYTR2EpM0gPEwCMkAl1adV8SQAfxPMigk3lhZSqgkRJ5SvMQVhFBeoLwjqQ9QQJSPVxEh8LiSwI1JJ8iqXRJNqi2ks6IKSskgKKkTkKflPBYqY_ePkS4Qs0MqiWkqhOe56o6dRaj7kr-Kgh5YxZhZwjYlnFUBrUpYDEi_UIqFchnWYVNFTxUh5hFAGgXqDZxGmXdQlTGvc5KIj8geYKqDuo_kk1Thkz_1TFCXU3nJxjYy5wdTjgerGdSzxRzhqC8AGZPB1X4qBJ2jD4i1IOjtkv-JOjOIkiOASt_PAT4jrk-ZMEiqdGBPRSSITFPQTqtd5INSFUolPaBTU-hMYjGEilL-pQ0jFmnVqU78NhjNUxlORjmUtdXtg2UsCKaCUWPlOnTI8SVNiSbgxiGlkj7SWQH0TgheIJTfopVJZxZUydx-DMk_FjYdAo-dMjwykg-L1S7IZpI7SD04lKXSxTbpMLTBTP5CDTLonpLsg-vU-MjTn06NNvFDjYLRs5x5aiJeja0raJ7Tlk65WYjv4w5KOjxuf-NOiP0oBOJ0xraPwjAKDRnyoNBqQhPfSwCW-OfSdYDhVV5bqcQWEsWeY3XaAMpRWBYt4jMQDQN0Qy5LSS7gXNLACnovYXlxXo8snejW0shPbTKEwlMfSiM-oI3VoM4LSNdhqUzyxYNI9TzHTn0nmV2tcAXGRBkAGIlg7CZ0EAFoAfQLICet-AZ3Q7teUGwn4Bo7NtHkAgAA",mdxType:"Playground"},Object(l.b)(c.a,{width:300,height:300,options:{backgroundColor:15659509},mdxType:"Stage"},Object(l.b)(w,{position:[150,150],properties:{position:!0},mdxType:"ParticleContainer"},Object(l.b)(m.h,{anchor:.5,x:-75,y:-75,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png",mdxType:"Sprite"}),Object(l.b)(m.h,{anchor:.5,x:0,y:0,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png",mdxType:"Sprite"}),Object(l.b)(m.h,{anchor:.5,x:75,y:75,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png",mdxType:"Sprite"})))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("iframe",{height:600,scrolling:"no",title:"Particle Container",src:"//codepen.io/inlet/embed/db5dc6ecfb42bbf8dd5322a1015dff70/?height=600&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}Q&&Q===Object(Q)&&Object.isExtensible(Q)&&Object.defineProperty(Q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ParticleContainer.mdx"}}),Q.isMDXComponent=!0}}]);
//# sourceMappingURL=src-components-particle-container.5b52a953a411bb8b7c6f.js.map