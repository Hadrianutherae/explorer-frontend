(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[2],{409:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(8),i=n(9),r=n(12),s=n(11),o=n(0),c=n.n(o),u=n(16),d=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"bi-coin-value"},this.getFormattedValue()," ",this.props.coinName?this.props.coinName:u.a.blockchain.coinName.toUpperCase())}},{key:"getFormattedValue",value:function(){var t=this.props.value/1e9;return t<1&&0!==t?t.toFixed(9).split("").reduceRight((function(t,e){return"0"===e&&0===t.length||t.push(e),t}),[]).reverse().join(""):t.toString()}}]),n}(c.a.PureComponent)},411:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",a="hour",i="day",r="week",s="month",o="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},m={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(a,2,"0")+":"+l(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),a=t.clone().add(n,s),i=e-a<0,r=t.clone().add(n+(i?-1:1),s);return Number(-(n+(e-a)/(i?a-r:r-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:s,y:c,w:r,d:i,D:"date",h:a,m:n,s:e,ms:t,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",h={};h[p]=f;var v=function(t){return t instanceof w},_=function(t,e,n){var a;if(!t)return p;if("string"==typeof t)h[t]&&(a=t),e&&(h[t]=e,a=t);else{var i=t.name;h[i]=t,a=i}return!n&&a&&(p=a),a||!n&&p},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},g=m;g.l=_,g.i=v,g.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var w=function(){function l(t){this.$L=this.$L||_(t.locale,null,!0),this.parse(t)}var m=l.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(u);if(a)return n?new Date(Date.UTC(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)):new Date(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return g},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return b(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<b(t)},m.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},m.year=function(t){return this.$g(t,"$y",c)},m.month=function(t){return this.$g(t,"$M",s)},m.day=function(t){return this.$g(t,"$W",i)},m.date=function(t){return this.$g(t,"$D","date")},m.hour=function(t){return this.$g(t,"$H",a)},m.minute=function(t){return this.$g(t,"$m",n)},m.second=function(t){return this.$g(t,"$s",e)},m.millisecond=function(e){return this.$g(e,"$ms",t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,o){var u=this,d=!!g.u(o)||o,l=g.p(t),m=function(t,e){var n=g.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?n:n.endOf(i)},f=function(t,e){return g.w(u.toDate()[t].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},p=this.$W,h=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case c:return d?m(1,0):m(31,11);case s:return d?m(1,h):m(0,h+1);case r:var b=this.$locale().weekStart||0,w=(p<b?p+7:p)-b;return m(d?v-w:v+(6-w),h);case i:case"date":return f(_+"Hours",0);case a:return f(_+"Minutes",1);case n:return f(_+"Seconds",2);case e:return f(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(r,o){var u,d=g.p(r),l="set"+(this.$u?"UTC":""),m=(u={},u.day=l+"Date",u.date=l+"Date",u[s]=l+"Month",u[c]=l+"FullYear",u[a]=l+"Hours",u[n]=l+"Minutes",u[e]=l+"Seconds",u[t]=l+"Milliseconds",u)[d],f=d===i?this.$D+(o-this.$W):o;if(d===s||d===c){var p=this.clone().set("date",1);p.$d[m](f),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else m&&this.$d[m](f);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[g.p(t)]()},m.add=function(t,o){var u,d=this;t=Number(t);var l=g.p(o),m=function(e){var n=b(d);return g.w(n.date(n.date()+Math.round(e*t)),d)};if(l===s)return this.set(s,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===i)return m(1);if(l===r)return m(7);var f=(u={},u[n]=6e4,u[a]=36e5,u[e]=1e3,u)[l]||1,p=this.$d.getTime()+t*f;return g.w(p,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),i=this.$locale(),r=this.$H,s=this.$m,o=this.$M,c=i.weekdays,u=i.months,l=function(t,a,i,r){return t&&(t[a]||t(e,n))||i[a].substr(0,r)},m=function(t){return g.s(r%12||12,t,"0")},f=i.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:g.s(o+1,2,"0"),MMM:l(i.monthsShort,o,u,3),MMMM:u[o]||u(this,n),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,c,2),ddd:l(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:g.s(r,2,"0"),h:m(1),hh:m(2),a:f(r,s,!0),A:f(r,s,!1),m:String(s),mm:g.s(s,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:a};return n.replace(d,(function(t,e){return e||p[t]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,i,u){var d,l=g.p(i),m=b(t),f=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,h=g.m(this,m);return h=(d={},d[c]=h/12,d[s]=h,d[o]=h/3,d[r]=(p-f)/6048e5,d.day=(p-f)/864e5,d[a]=p/36e5,d[n]=p/6e4,d[e]=p/1e3,d)[l]||p,u?h:g.a(h)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return h[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=_(t,e,!0);return a&&(n.$L=a),n},m.clone=function(){return g.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},l}();return b.prototype=w.prototype,b.extend=function(t,e){return t(e,w,b),b},b.locale=_,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=h[p],b.Ls=h,b}()},413:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(8),i=n(9),r=n(12),s=n(11),o=n(411),c=n.n(o),u=n(0),d=n.n(u),l=(n(419),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=c()(this.props.timestamp);return d.a.createElement("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis"},d.a.createElement("span",{className:"bi-timestamp__time"},t.format("HH:mm:ss")),d.a.createElement("span",{className:"bi-timestamp__date"},t.format("DD.MM.YYYY")))}}]),n}(d.a.PureComponent))},419:function(t,e,n){},438:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n(8),i=n(9),r=n(17),s=n(12),o=n(11),c=n(39),u=n.n(c),d=n(0),l=n.n(d),m=(n(457),function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).state={isDropdownShown:!1},i.element=void 0,i.toggleDropdown=i.toggleDropdown.bind(Object(r.a)(i)),i.hideDropdown=i.hideDropdown.bind(Object(r.a)(i)),i.hideOnOutsideClick=i.hideOnOutsideClick.bind(Object(r.a)(i)),i}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.list,a=e.button,i=u()({"bi-dropdown-list":!0,"bi-dropdown-list--open":this.state.isDropdownShown});return l.a.createElement("div",{className:i,ref:function(e){t.element=e}},l.a.createElement("button",{className:"bi-dropdown-list__button g-flex bi-btn bi-btn--flat",onClick:this.toggleDropdown},l.a.createElement("span",{className:"bi-dropdown-list__button-label"},a)),l.a.createElement("ul",{className:"bi-dropdown-list__dropdown"},n.map((function(t,e){return l.a.createElement("li",{className:"bi-dropdown-list__option",key:"".concat(t.value,"_").concat(e,"_").concat(t.label)},l.a.createElement("span",null,t.value),"\xa0",t.label)}))))}},{key:"toggleDropdown",value:function(){if(this.state.isDropdownShown)return this.hideDropdown();this.setState({isDropdownShown:!0}),document.addEventListener("click",this.hideOnOutsideClick)}},{key:"hideDropdown",value:function(){this.setState({isDropdownShown:!1}),document.removeEventListener("click",this.hideOnOutsideClick)}},{key:"hideOnOutsideClick",value:function(t){t.target!==this.element&&document.contains(t.target)&&!this.element.contains(t.target)&&this.hideDropdown()}}]),n}(l.a.PureComponent))},456:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n(1),i=n(8),r=n(9),s=n(12),o=n(11),c=n(0),u=n.n(c),d=n(29),l=n(30),m=n(36),f=n(409),p=n(413),h=n(438),v=n(14),_=(n(458),function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={isClient:!1},t.getAddressInputs=function(){return t.props.transaction.inputs.reduce((function(e,n){var a=n.address,i=n.value;return a===t.props.address?e+i:e}),0)},t.getAddressOutputs=function(){return t.props.transaction.outputs.reduce((function(e,n){var a=n.address,i=n.value;return a===t.props.address?e+i:e}),0)},t.getTransactionState=function(){var e=t.getAddressInputs(),n=t.getAddressOutputs();return 0!==n&&n-e>0?"input":"output"},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({isClient:!0})}},{key:"renderAssets",value:function(t){if(0===t.length)return null;var e=t.map((function(t){var e=t.amount;return{label:t.tokenId.substr(0,4),value:e}})),n="+".concat(e.length);return u.a.createElement(h.a,{list:e,button:n})}},{key:"render",value:function(){var t=this,e=0,n=this.getAddressInputs(),a=this.getAddressOutputs(),i="output"===this.getTransactionState();return u.a.createElement("div",{className:"bi-transactions-item"},u.a.createElement("div",{className:"bi-transactions-item__header g-flex"},u.a.createElement(m.Link,{className:"bi-transactions-item__title u-word-wrap g-flex__item-fixed",to:"/transactions/".concat(this.props.transaction.id)},this.props.transaction.id),u.a.createElement("div",{className:"bi-transactions-item__timestamp g-flex__item-fixed"},u.a.createElement(p.a,{timestamp:this.props.transaction.creationTimestamp||this.props.transaction.timestamp}))),u.a.createElement("div",{className:"bi-transactions-item__body g-flex"},u.a.createElement("div",{className:"bi-transactions-item__inputs g-flex__item"},this.props.transaction.inputs.map((function(e,n){return u.a.createElement("div",{className:"bi-transactions-item__input g-flex",key:"".concat(n,"__").concat(e.id)},u.a.createElement("div",{className:"bi-transactions-item__address"},e.address?u.a.createElement(m.Link,{className:"u-word-wrap u-word-wrap--ellipsis",to:"/addresses/".concat(e.address)},e.address):u.a.createElement(d.a,{id:"components.transaction-item.null-address"})),t.props.isScriptsDisplayed&&e.outputTransactionId&&u.a.createElement("div",{className:"bi-transactions-item__address-output g-flex__item-fixed u-word-wrap u-word-wrap--ellipsis"},"(",u.a.createElement(f.a,{value:e.value})," -"," ",u.a.createElement(m.Link,{to:"/transactions/".concat(e.outputTransactionId)},u.a.createElement(d.a,{id:"components.transaction-item.address-output"})),")"))}))),this.props.address?u.a.createElement("div",{className:["bi-transactions-item__arrow",i?"bi-transactions-item__arrow--output":"bi-transactions-item__arrow--input"].join(" ")},u.a.createElement(v.f,{className:"bi-transactions-item__arrow-icon"})):u.a.createElement("div",{className:"bi-transactions-item__arrow"},u.a.createElement(v.f,{className:"bi-transactions-item__arrow-icon"})),u.a.createElement("div",{className:"bi-transactions-item__outputs g-flex__item g-flex-column"},this.props.transaction.outputs.map((function(n,a){return e+=n.value,u.a.createElement("div",{className:"bi-transactions-item__output g-flex",key:"".concat(a,"__").concat(n.id)},u.a.createElement("div",{className:"bi-transactions-item__address g-flex__item-fixed"},n.address?u.a.createElement(m.Link,{className:"u-word-wrap u-word-wrap--ellipsis",to:"/addresses/".concat(n.address)},n.address):u.a.createElement("span",{className:"u-word-wrap u-word-wrap--ellipsis"},u.a.createElement(d.a,{id:"components.transaction-item.null-address"}))),u.a.createElement("div",{className:"bi-transactions-item__address-spent g-flex__item u-word-wrap u-word-wrap--ellipsis",style:{display:t.props.isScriptsDisplayed||!t.state.isClient?"block":"none"}},n.spentTransactionId?u.a.createElement(m.Link,{to:"/transactions/".concat(n.spentTransactionId)},u.a.createElement(d.a,{id:"components.transaction-item.spent"})):u.a.createElement(d.a,{id:"components.transaction-item.unspent"})),u.a.createElement("div",{className:"bi-transactions-item__value g-flex__item-fixed"},u.a.createElement(f.a,{value:n.value}),t.renderAssets(n.assets)))})),u.a.createElement("div",{className:"bi-transactions-item__footer g-flex-column__item-fixed g-flex"},this.props.confirmations>0&&u.a.createElement("div",{className:"bi-transactions-item__confirmations g-flex__item-fixed"},this.props.confirmations," ",u.a.createElement(d.b,{value:this.props.confirmations,one:u.a.createElement(d.a,{id:"components.transaction-item.confirmation.one"}),other:u.a.createElement(d.a,{id:"components.transaction-item.confirmation.other"})})),!this.props.confirmations&&u.a.createElement("div",{className:"bi-transactions-item__confirmations g-flex__item-fixed item__confirmations--unconfirmed"},u.a.createElement(d.a,{id:"components.transaction-item.unconfirmed"})),u.a.createElement("div",{className:["bi-transactions-item__total-value g-flex__item-fixed",this.props.address&&(i?"bi-transactions-item__total-value--output":"bi-transactions-item__total-value--input")].join(" ")},u.a.createElement(f.a,{value:this.props.address?Math.abs(a-n):e}))))))}}]),n}(u.a.Component));var b=Object(l.b)((function(t,e){return Object(a.a)(Object(a.a)({},t.settings),e)}))(_)},457:function(t,e,n){},458:function(t,e,n){},499:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(8),i=n(9),r=n(12),s=n(11),o=n(0),c=n.n(o),u=n(456),d=(n(593),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"bi-transactions"},this.props.transactions.map((function(e){return c.a.createElement(u.a,{key:e.id,transaction:e,address:t.props.address,confirmations:e.confirmationsCount})})))}}]),n}(c.a.PureComponent))},593:function(t,e,n){}}]);
//# sourceMappingURL=2.26072990.chunk.js.map