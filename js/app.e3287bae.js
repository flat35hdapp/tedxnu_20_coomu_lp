(function(t){function e(e){for(var r,n,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);v&&v(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/tedxnu_20_commu_lp/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var v=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("global-header"),a("v-content",[a("router-view")],1),a("global-footer")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"white"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg",contain:!0,"max-height":"25",position:"left"}})],1)},c=[],o={name:"GlobalHeader"},l=o,v=a("2877"),d=a("6544"),p=a.n(d),u=a("40dc"),m=a("adda"),f=Object(v["a"])(l,n,c,!1,null,"744ffd76",null),h=f.exports;p()(f,{VAppBar:u["a"],VImg:m["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[a("v-card-text",{staticClass:"text-center"},[t._v("© TEDxNagoyaU")])],1)},g=[],x={name:"GlobalFooter"},b=x,w=a("99d9"),V=a("553a"),C=Object(v["a"])(b,_,g,!1,null,"13456024",null),y=C.exports;p()(C,{VCardText:w["b"],VFooter:V["a"]});var j={name:"App",components:{GlobalHeader:h,GlobalFooter:y},data:function(){return{}}},T=j,k=a("7496"),E=a("a75b"),O=Object(v["a"])(T,i,s,!1,null,null,null),L=O.exports;p()(O,{VApp:k["a"],VContent:E["a"]});var S=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{},[a("v-parallax",{attrs:{src:t.imgLink.firstView,height:"600"}},[a("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[a("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("キャッチコピー募集！ ")]),a("div",{staticClass:"white--text subheading mb-3 text-xs-center",staticStyle:{"font-weight":"900","text-shadow":"2px 2px #000000","border-bottom":"solid 2px red"}},[t._v("サブタイトルください！！背景もほしい！")])])],1)],1),a("div",{},[a("tedx-nagoyau")],1),a("div",{},[a("v-parallax",{attrs:{src:t.imgLink.missionView}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("Mission")]),a("h4",{staticClass:"subheading"},[t._v("ありたい姿に向かって挑戦し、ひとりひとりが楽しく生きる社会")]),a("p",[t._v('"should" (しなければならない) があふれる社会から、"want" があふれる社会へ。')])])],1)],1)],1),a("v-parallax",{attrs:{src:t.imgLink.visionView}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("Vision")]),a("h4",{staticClass:"subheading"},[t._v("あらゆる人と人、アイデアとアイデアをつなげ、挑戦するに足る高いエネルギーを生み出す")]),a("p",{staticClass:"subheading"},[t._v("新しいアイデアに触れ、様々な人と交流することで新たな自分を見つけ、一歩踏み出すエネルギーを創出する。")])])],1)],1),a("div",[a("please-sponsor")],1),a("div",[a("plan-session")],1),a("div",{},[a("past-sponsor-session")],1),a("v-container",[a("v-row",[a("v-col",{attrs:{xs:"11"}},[a("v-card",[a("v-card-title",[t._v("developers comments")]),a("v-card-text",[a("ul",[a("li",[t._v("このセクション（developers comments ）は公開時には削除します）")]),a("li",[t._v("新歓ランディングページに使っているものは基本なんでもできます")]),a("li",[a("a",{attrs:{href:"https://vuetifyjs.com/ja/components/cards/"}},[t._v("このサイト")]),t._v("に載ってることなら基本なんでもできるよ")]),a("li",[t._v("ひな形というにはお粗末だけど、とりあえず。3/19のうちに外に見せられる形にするね")]),a("li",[t._v("github pages tests")])])])],1)],1)],1)],1),a("Contact")],1)},D=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("協賛プラン")])])],1),a("v-row",t._l(t.planList,(function(e){return a("v-col",{key:e.title,attrs:{xs:"12",sm:"6",md:"4"}},[a("v-card",[a("v-img",{attrs:{src:e.img}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-subtitle",[t._v(t._s(e.price)),e.per?a("span",[t._v(" / "+t._s(e.per))]):t._e()]),a("v-card-text",[t._v(t._s(e.desc))])],1)],1)})),1)],1)},I=[],$={name:"PlanSession",data:function(){return{planList:[{title:"ロゴ掲載",img:"https://live.staticflickr.com/65535/48254817982_6cd3d3b7a4_c.jpg",price:"2万円～",desc:"祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。"},{title:"サンプリング配布",img:"https://live.staticflickr.com/65535/48218630792_2310204909_c.jpg",price:"3万円",desc:"祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。"},{title:"ブース出展",img:"https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg",price:"3万円",desc:"祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。"},{title:"パブリックビューイング参加枠",img:"https://live.staticflickr.com/65535/49596709966_9554ced148_c.jpg",price:"2万円",per:"1人あたり",desc:"祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。"},{title:"当日参加枠",img:"https://live.staticflickr.com/65535/49596709966_9554ced148_c.jpg",price:"3万円",per:"1人あたり",desc:"祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。"},{title:"物品協賛",img:"https://live.staticflickr.com/65535/48218583016_d25eddc1d1_c.jpg",price:"ご相談ください",desc:"祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。"}],imgLink:{test:""}}}},N=$,R=a("b0af"),U=a("62ad"),M=a("a523"),A=a("0fd9"),G=Object(v["a"])(N,H,I,!1,null,"22f90f5f",null),F=G.exports;p()(G,{VCard:R["a"],VCardSubtitle:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:U["a"],VContainer:M["a"],VImg:m["a"],VRow:A["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{xs:"12"}},[a("v-card",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg"}})],1),a("v-col",{attrs:{xs:"12",sm:"6"}},[a("v-card-title",[t._v("about TED")]),a("v-card-text",[t._v("aboutを書くべきか迷ってる。TED, TEDx,TEDxNagoyaU全部書くのも1つではあるけど、それはまた別の機会にして、とりあえず協賛への過程にスポットを当てたページにするべきなのかなって。")]),a("v-card-text",[t._v("ちなみに左の写真のサイズは変更できるよ")])],1)],1)],1)],1),a("v-col",{attrs:{xs:"12"}},[a("v-card",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg"}})],1),a("v-col",{attrs:{xs:"12",sm:"6"}},[a("v-card-title",[t._v("about TEDx")]),a("v-card-text",[t._v("画像なしでTED,TEDxの紹介にする？")])],1)],1)],1)],1),a("v-col",{attrs:{xs:"12"}},[a("v-card",[a("v-row",[a("v-col",{attrs:{xs:"12",sm:"6"}},[a("v-img",{attrs:{src:"https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg"}})],1),a("v-col",{attrs:{xs:"12",sm:"6"}},[a("v-card-title",[t._v("about TEDxNagoyaU")]),a("v-card-text",[t._v("それとも「TEDxNagoyaUは～～～な団体です！夏のイベントに向けてがんばっています！」みたいなのにする？")])],1)],1)],1)],1)],1)],1)},J=[],W={name:"TedxNagoyau"},z=W,q=Object(v["a"])(z,B,J,!1,null,"4ee10b80",null),K=q.exports;p()(q,{VCard:R["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:U["a"],VContainer:M["a"],VImg:m["a"],VRow:A["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:"https://pngimage.net/wp-content/uploads/2018/06/flat-background-png.png",height:t.parallaxHeight}},[a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{xs:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("協賛のお願い")])])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("h2",[t._v("協賛金の使途")]),a("p",[t._v("祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。")])]),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("h2",[t._v("理念に共感")]),a("p",[t._v("祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。")])]),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("h2",[t._v("協賛していただくメリット")]),a("p",[t._v("祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。")])]),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("h2",[t._v("協賛の形")]),a("p",[t._v("協賛プランのご紹介です。祇園精舍の鐘の声、諸行無常の響きあり。娑羅双樹の花の色、盛者必衰の理をあらはす。奢れる人も久しからず、ただ春の夜の夢のごとし。猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。")])])],1)],1)],1)},X=[],Y={name:"PleaseSponsor",data:function(){return{width:window.innerWidth,parallaxHeight:500}},methods:{handleResize:function(){this.width=window.innerWidth}},created:function(){this.width<400?this.parallaxHeight=1100:this.width<500?this.parallaxHeight=1e3:this.width<599?this.parallaxHeight=900:this.width<800?this.parallaxHeight=800:this.parallaxHeight=500}},Z=Y,tt=a("8b9c"),et=Object(v["a"])(Z,Q,X,!1,null,"41aa237e",null),at=et.exports;p()(et,{VCol:U["a"],VContainer:M["a"],VParallax:tt["a"],VRow:A["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v("昨年度協賛企業様ご芳名")]),a("v-img",{attrs:{src:t.imgLink.pamphlet2019}}),a("v-card-text",[a("ul",t._l(t.sponsorList2019,(function(e){return a("li",{key:e.name},[t._v(t._s(e.name))])})),0)])],1)],1)],1)],1)},it=[],st={name:"PastSponsorSession",data:function(){return{imgLink:{pamphlet2019:""},sponsorList2019:[{name:"株式会社ジェイエスティー"},{name:"サンプル会社"},{name:"エグザンプル株式会社"},{name:"株式会社ホゲホゲ"},{name:"（株）hoge"}]}}},nt=st,ct=Object(v["a"])(nt,rt,it,!1,null,"47da2e94",null),ot=ct.exports;p()(ct,{VCard:R["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:U["a"],VContainer:M["a"],VImg:m["a"],VRow:A["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",[a("v-card-title",[t._v("Contact")]),a("v-card-text",[a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-email")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("info[at]tedxnagoyau.com")])],1)],1)],1)],1)],1)],1)],1)],1)},vt=[],dt={name:"Contact"},pt=dt,ut=a("132d"),mt=a("8860"),ft=a("da13"),ht=a("5d23"),_t=a("34c3"),gt=Object(v["a"])(pt,lt,vt,!1,null,"28a54e22",null),xt=gt.exports;p()(gt,{VCard:R["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:U["a"],VContainer:M["a"],VIcon:ut["a"],VList:mt["a"],VListItem:ft["a"],VListItemContent:ht["a"],VListItemIcon:_t["a"],VListItemTitle:ht["b"],VRow:A["a"]});var bt={name:"Home",components:{PlanSession:F,TedxNagoyau:K,PleaseSponsor:at,PastSponsorSession:ot,Contact:xt},data:function(){return{imgLink:{firstView:"https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg",missionView:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",visionView:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",meritView:"https://superdevresources.com/wp-content/uploads/2016/02/5-backgrounds.jpg",cardA:"https://live.staticflickr.com/65535/48254749996_95807209b1_c.jpg",cardB:"https://live.staticflickr.com/65535/48247052851_1efa58fde2_c.jpg",cardC:"https://live.staticflickr.com/65535/48247052991_d905b95448_c.jpg"}}}},wt=bt,Vt=a("a722"),Ct=Object(v["a"])(wt,P,D,!1,null,null,null),yt=Ct.exports;p()(Ct,{VCard:R["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:U["a"],VContainer:M["a"],VLayout:Vt["a"],VParallax:tt["a"],VRow:A["a"]}),r["a"].use(S["a"]);var jt=[{path:"/",name:"Home",meta:{title:"TEDxNagoyaU 団体情報",desc:"TEDxNagoyaUは名古屋大学を中心に活動する、TEDxイベント運営団体です。毎年夏にTEDxNagoyaUを開催しています。"},component:yt}],Tt=new S["a"]({mode:"history",base:"/tedxnu_20_commu_lp/",routes:jt}),kt=Tt,Et=a("f309");r["a"].use(Et["a"]);var Ot=new Et["a"]({icon:{iconfont:"mdiSvg"}});r["a"].config.productionTip=!1,new r["a"]({router:kt,vuetify:Ot,render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=app.e3287bae.js.map