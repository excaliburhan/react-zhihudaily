webpackJsonp([6],{0:function(e,t,r){r("j1ja"),e.exports=r("lVK7")},"0xDb":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("//Fk"),s=(n=a)&&n.__esModule?n:{default:n};t.replaceStr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;return(e.match(/{\w+}/g)||[]).forEach(function(e){var n=e.substring(1,e.length-1);t[n]&&(r=r.replace(e,t[n]))}),r},t.backTop=function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=10,r=1;e(function n(){var a=document.documentElement.scrollTop;a>0&&(r<t?(document.documentElement.scrollTop-=a/2,e(n),r++):r>=t&&(document.documentElement.scrollTop=0))})},t.formatDay=function(e){if(!e)return e;var t=e.substr(0,4),r=e.substr(4,2),n=e.substr(6,2),a=new Date(t+"-"+r+"-"+n).getDay();return r+"月"+n+"日 "+["星期天","星期一","星期二","星期三","星期四","星期五","星期六"][a]},t.sleep=function(e){return new s.default(function(t){return setTimeout(t,e)})}},"5BXs":function(e,t,r){var n={"./App/App":["TJgB",3],"./App/App.js":["TJgB",3],"./Contents/Contents":["eYrA",1],"./Contents/Contents.js":["eYrA",1],"./Contents/style.pcss":["whd9",4],"./Home/Home":["wePs",0],"./Home/Home.js":["wePs",0],"./NotFound/NotFound":["tGCO",2],"./NotFound/NotFound.js":["tGCO",2]};function a(e){var t=n[e];return t?r.e(t[1]).then(function(){return r(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}a.keys=function(){return Object.keys(n)},a.id="5BXs",e.exports=a},"5qRR":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("Xxa5"),s=(n=a)&&n.__esModule?n:{default:n};t.default=l;var u=r("egdi"),o=r("Jrwi"),c=r("G2kA");var i=s.default.mark(l);function l(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeLatest)(o.STORY_LIST,c.storyListAsync);case 2:return e.next=4,(0,u.takeLatest)(o.BEFORE_LIST,c.beforeListAsync);case 4:return e.next=6,(0,u.takeLatest)(o.STORY_REFRESH,c.storyRefreshAsync);case 6:return e.next=8,(0,u.takeLatest)(o.STORY_DETAIL,c.storyDetailAsync);case 8:case"end":return e.stop()}},i,this)}},"8TIV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("Dd8w"),s=(n=a)&&n.__esModule?n:{default:n};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case u.STORY_LIST:return(0,s.default)({},e,{storyListParams:t.data});case u.STORY_LIST_SUCCESS:return(0,s.default)({},e,{storyList:t.data});case u.STORY_LIST_ERROR:return(0,s.default)({},e,{storyListError:t.data});case u.STORY_DATE_SUCCESS:return(0,s.default)({},e,{storyDate:t.data});case u.BEFORE_LIST:return(0,s.default)({},e,{beforeListParams:t.data});case u.BEFORE_LIST_SUCCESS:return(0,s.default)({},e,{beforeList:t.data});case u.BEFORE_LIST_ERROR:return(0,s.default)({},e,{beforeListError:t.data});case u.BEFORE_LIST_PENDING:return(0,s.default)({},e,{beforeListPending:t.data});case u.STORY_REFRESH_PENDING:return(0,s.default)({},e,{storyRefreshPending:t.data});case u.STORY_DETAIL:return(0,s.default)({},e,{storeDetailParams:t.data});case u.STORY_DETAIL_SUCCESS:return(0,s.default)({},e,{storyDetail:t.data});case u.STORY_DETAIL_ERROR:return(0,s.default)({},e,{storyDetailError:t.data});case u.STORY_DETAIL_LOAD:return(0,s.default)({},e,{storyDetailLoad:t.data});default:return e}};var u=r("Jrwi");var o={storyListParams:{},storyList:{stories:[],top_stories:[]},storyListError:null,storyRefreshPending:!1,beforeListParams:{},beforeList:[],beforeListError:null,storyDate:null,beforeListPending:!1,storyDetailParams:{},storyDetail:{},storyDetailError:null,storyDetailLoad:!1}},G2kA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r("Xxa5"));t.storyListAsync=p,t.storyRefreshAsync=y,t.beforeListAsync=_,t.storyDetailAsync=E;var a=r("egdi"),s=i(r("l/JR")),u=i(r("a6lS")),o=r("ZR1T"),c=r("Jrwi");function i(e){return e&&e.__esModule?e:{default:e}}var l=n.default.mark(p),d=n.default.mark(y),f=n.default.mark(_),S=n.default.mark(E);function p(){var e,t;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,a.call)(s.default,{url:u.default.storyList});case 3:if(e=r.sent,!(t=e.STORIES)){r.next=12;break}return r.next=8,(0,a.put)((0,c.storyListSuccess)(t));case 8:return r.next=10,(0,a.put)((0,c.storyDateSuccess)(t.date));case 10:return r.next=12,(0,a.fork)(_,{data:t.date});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,(0,a.put)((0,c.storyListError)(r.t0));case 18:case"end":return r.stop()}},l,this,[[0,14]])}function y(){var e,t;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,a.put)((0,c.storyRefreshPending)(!0));case 3:return r.next=5,(0,a.put)((0,c.beforeListSuccess)([]));case 5:return r.next=7,(0,a.call)(s.default,{url:u.default.storyList});case 7:if(e=r.sent,!(t=e.STORIES)){r.next=18;break}return r.next=12,(0,a.put)((0,c.storyListSuccess)(t));case 12:return r.next=14,(0,a.put)((0,c.storyDateSuccess)(t.date));case 14:return r.next=16,(0,a.fork)(_,{data:t.date});case 16:return r.next=18,(0,a.put)((0,c.storyRefreshPending)(!1));case 18:r.next=26;break;case 20:return r.prev=20,r.t0=r.catch(0),r.next=24,(0,a.put)((0,c.storyListError)(r.t0));case 24:return r.next=26,(0,a.put)((0,c.storyRefreshPending)(!1));case 26:case"end":return r.stop()}},d,this,[[0,20]])}function _(e){var t,r,i,l,d;return n.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.data,n.next=4,(0,a.select)(o.storyState);case 4:if(r=n.sent,t&&r.storyDate&&!r.beforeListPending){n.next=7;break}return n.abrupt("return");case 7:return n.next=9,(0,a.put)((0,c.beforeListPending)(!0));case 9:return n.next=11,(0,a.call)(s.default,{url:u.default.storyBefore,params:{date:t}});case 11:if(i=n.sent,!(l=i.STORIES)){n.next=20;break}return n.next=16,(0,a.put)((0,c.storyDateSuccess)(l.date));case 16:return d=r.beforeList,l=d.concat(l),n.next=20,(0,a.put)((0,c.beforeListSuccess)(l));case 20:return n.next=22,(0,a.put)((0,c.beforeListPending)(!1));case 22:n.next=30;break;case 24:return n.prev=24,n.t0=n.catch(0),n.next=28,(0,a.put)((0,c.beforeListError)(n.t0));case 28:return n.next=30,(0,a.put)((0,c.beforeListPending)(!1));case 30:case"end":return n.stop()}},f,this,[[0,24]])}function E(e){var t,r,o;return n.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.data,n.next=4,(0,a.call)(s.default,{url:u.default.storyDetail,params:{id:t}});case 4:if(r=n.sent,!(o=r.CONTENTS)){n.next=11;break}return n.next=9,(0,a.put)((0,c.storyDetailSuccess)(o));case 9:return n.next=11,(0,a.put)((0,c.storyDetailLoad)(!0));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,(0,a.put)((0,c.storyDetailError)(n.t0));case 17:case"end":return n.stop()}},S,this,[[0,13]])}},Jrwi:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.storyList=function(e){return{type:n,data:e}},t.storyListSuccess=function(e){return{type:a,data:e}},t.storyListError=function(e){return{type:s,data:e}},t.beforeListPending=function(e){return{type:l,data:e}},t.beforeList=function(e){return{type:o,data:e}},t.beforeListSuccess=function(e){return{type:c,data:e}},t.beforeListError=function(e){return{type:i,data:e}},t.storyDateSuccess=function(e){return{type:u,data:e}},t.storyRefresh=function(e){return{type:d,data:e}},t.storyRefreshPending=function(e){return{type:f,data:e}},t.storyDetail=function(e){return{type:S,data:e}},t.storyDetailSuccess=function(e){return{type:p,data:e}},t.storyDetailError=function(e){return{type:y,data:e}},t.storyDetailLoad=function(e){return{type:_,data:e}};var n=t.STORY_LIST="story/STORY_LIST",a=t.STORY_LIST_SUCCESS="story/STORY_LIST_SUCCESS",s=t.STORY_LIST_ERROR="story/STORY_LIST_ERROR",u=t.STORY_DATE_SUCCESS="story/STORY_DATE_SUCCESS",o=t.BEFORE_LIST="story/BEFORE_LIST",c=t.BEFORE_LIST_SUCCESS="story/BEFORE_LIST_SUCCESS",i=t.BEFORE_LIST_ERROR="story/BEFORE_LIST_ERROR",l=t.BEFORE_LIST_PENDING="story/BEFORE_LIST_PENDING",d=t.STORY_REFRESH="story/STORY_REFRESH",f=t.STORY_REFRESH_PENDING="story/STORY_REFRESH_PENDING",S=t.STORY_DETAIL="story/STORY_DETAIL",p=t.STORY_DETAIL_SUCCESS="story/STORY_DETAIL_SUCCESS",y=t.STORY_DETAIL_ERROR="story/STORY_DETAIL_ERROR",_=t.STORY_DETAIL_LOAD="story/STORY_DETAIL_LOAD"},LRGm:function(e,t,r){"use strict";var n="https://zhihu-daily.leanapp.cn/api/v1";n="https://zhihu-daily.leanapp.cn/api/v1",e.exports={htmlTitle:"知乎日报小平版",baseUrl:n}},MrK1:function(e,t){},PX8L:function(e,t){},WqZW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("2KeS"),a=o(r("igqX")),s=o(r("nEQc")),u=o(r("5qRR"));function o(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)(),i=(0,n.createStore)(s.default,(0,n.applyMiddleware)(c));c.run(u.default),t.default=i},WtOT:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r("xqz1"));t.default=function(e){var t=e.isLoading,r=e.error;return t?a.default.createElement("div",{style:{marginTop:"200px"}},a.default.createElement(n.default,{text:"Loading..."})):r?a.default.createElement("div",{style:{marginTop:"200px",textAlign:"center"}},"Sorry, there was a problem loading the page."):null},r("SS+w");var a=s(r("GiK3"));function s(e){return e&&e.__esModule?e:{default:e}}},YaEn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r("Zx67")),a=f(r("Zrlr")),s=f(r("wxAW")),u=f(r("zwoO")),o=f(r("Pf15")),c=f(r("GiK3")),i=r("F8kA"),l=f(r("wF3A")),d=f(r("WtOT"));function f(e){return e&&e.__esModule?e:{default:e}}var S=function(e){return(0,l.default)({loader:function(){return r("5BXs")("./"+e)},loading:d.default})},p=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return c.default.createElement(i.HashRouter,null,c.default.createElement(i.Switch,null,c.default.createElement(i.Route,{path:"/",exact:!0,component:S("Home/Home")}),c.default.createElement(i.Route,{path:"/story/:id",component:S("Contents/Contents")}),c.default.createElement(i.Route,{component:S("NotFound/NotFound")})))}}]),t}(c.default.Component);t.default=p},ZR1T:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.storyState=function(e){return e.story},t.themeState=function(e){return e.theme}},a6lS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={storyList:"/last-stories",storyDetail:"/contents/{id}",storyExtra:"/contents/extra/{id}",storyLong:"/contents/{id}/long-comments",storyShort:"/contents/{id}/short-comments",storyBefore:"/before-stories/{date}",themeList:"/themes",themeDetail:"/themes/{id}"}},"l/JR":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("//Fk")),a=o(r("mtWM")),s=r("LRGm"),u=r("0xDb");function o(e){return e&&e.__esModule?e:{default:e}}var c=a.default.create({baseURL:s.baseUrl,timeout:1e4,withCredentials:!1});c.interceptors.request.use(function(e){return e.url=(0,u.replaceStr)(e.url,e.params),e.params={},e},function(e){n.default.reject(e)}),c.interceptors.response.use(function(e){var t=e.data;return n.default.resolve(t)},function(e){return n.default.reject(e)}),t.default=c},lVK7:function(e,t,r){"use strict";var n=i(r("GiK3")),a=i(r("O27J")),s=r("rGbO"),u=r("RH2O"),o=i(r("WqZW")),c=i(r("YaEn"));function i(e){return e&&e.__esModule?e:{default:e}}r("rk6P"),r("MrK1"),a.default.render(n.default.createElement(s.AppContainer,null,n.default.createElement(u.Provider,{store:o.default},n.default.createElement(c.default,null))),document.getElementById("app"))},nEQc:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("2KeS"),s=r("8TIV"),u=(n=s)&&n.__esModule?n:{default:n};t.default=(0,a.combineReducers)({story:u.default})},rk6P:function(e,t){},uMhA:function(e,t){},wm8T:function(e,t){}},[0]);