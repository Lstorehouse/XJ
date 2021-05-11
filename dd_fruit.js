/*
滴滴橙心果园脚本,支持自动浇水及部分任务
手动抓包获取token,手机在boxjs里填写
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json

[task_local]
10 0,8,12,18 * * * https://raw.githubusercontent.com/passerby-b/didi_fruit/main/dd_fruit.js

*/

let tokens = [];//nodejs填写此处['tk1','tk2']

eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3479acdf-hj-mo-qs-zA-WYZ]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('V $=C API("dd_fruit");4 a=\'\';!(g()=>{L(!$.env.isNode){4 N=$.read(\'#ddtoken\');L(!!N){L(N.indexOf(\',\')>-1){O=N.1c(\',\')}W{O.push(N)}}}Y(4 i=0;i<O.P;i++){h.j(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+O.P+\'个账号★★★★★\');a=\'\';a=O[i];7 1d();7 $.u(p);7 Z();7 $.u(p);7 11();7 $.u(p);7 12();7 $.u(p);7 13();7 $.u(p);7 R();7 $.u(p);7 1e();7 $.u(p);7 14();7 $.u(p);7 1f();7 $.u(p);7 Z();7 $.u(p)}})().E(g(e)=>{h.j(\'\',\'❌失败! 原因:\'+e+\'!\',\'\')}).finally(()=>{$.done()});g F Z(){G C J(g 9=>{K{4 c=q(\'m://d.v.o/w/d/H/watering?x=y-Qu9qYTzgDM7Ml%2FDfmZL2V2WCaTyJ%2FlyalT6e%2F1XFaTyKlhJ2XIkAUPodA67KlADcjM2LXZm9ALcHte%2B%2BkwFdVIQLBxR2l%2Fb0nPdDUZ8AB6R3l%2FCAs5Bah2nFA65\',\'{"z":1,"a":"\'+a+\'"}\');4 M=1,16=0;do{16++;h.j(\'\\n**********开始执行第\'+16+\'次浇水**********\');7 $.s.D(c).t(f=>{4 3=A.B(f.l);L(3.17==0){h.j(\'\\n【浇水】:\'+3.I+\',剩余\'+3.3.M+\'滴水,今天已浇水\'+3.3.water_times+\'次\');L(3.3.M<10)M=0}W{h.j(\'\\n【浇水】:\'+3.I);M=0}});7 $.u(2000)}1h(M==1);9()}E(k){h.j(\'\\n【浇水】:\'+k);9()}})}g F 11(){G C J(g 9=>{K{4 S=0;do{4 c=q(\'m://d.v.o/w/d/H/11?x=y-5kyGrUHwozHE%2BKKUAXuzxAIPw8ODJNmUDtjjPa9ow8OC%2BJCSa03Wxq2zTpHC%2BvKWFDnQy%2FBuTyFB2o0uACWsxFIwYQd4%2By4VdstkPFIYYpHF3Nbhdgznxe6XTpw\',\'{"count":1,"z":1,"a":"\'+a+\'"}\');7 $.s.D(c).t(f=>{4 3=A.B(f.l);h.j(\'\\n【施肥】:\'+3.I);L(3.17==0){S=3.3.S}});7 $.u(p)}1h(S>0);9()}E(k){h.j(\'\\n【施肥】:\'+k);9()}})}g F 12(){G C J(g 9=>{K{4 c=q(\'m://d.v.o/w/d/H/12?x=y-jrYPupTTF6oZ4BnNTskNXKUYgxNy7EJISml5i3lzgxNz4AyByb5IWRwoGMoz4hnKQfhFVvUP0StwMUvgpgOaXySm0HiuNrXHpbLIXvrw0Mmz2hvIpiw9WyYQcYY\',\'{"inter_type":2,"z":1,"a":"\'+a+\'"}\');$.s.D(c).t(f=>{4 3=A.B(f.l);h.j(\'\\n【摸狗】:\'+3.I);9()})}E(k){h.j(\'\\n【摸狗】:\'+k);9()}})}g F 13(){G C J(g 9=>{K{4 c=q(\'m://d.v.o/w/d/H/13?x=y-2iAt3F2cDhk9E%2F5L0rAD0rYGaadgBlrKGVMfb%2FBBaadfEheDdBUDGBH9ArkfEA5IAFI%2BFa9dA%2FZebe9e0keg0rLHBBBEE%2FM6ErEAGaZEBrB0E%2F63adabchaBArk\',\'{"z":1,"a":"\'+a+\'"}\');$.s.D(c).t(f=>{4 3=A.B(f.l);h.j(\'\\n【赶蚂蚱】:\'+3.I);9()})}E(k){h.j(\'\\n【赶蚂蚱】:\'+k);9()}})}g F 1d(){G C J(g 9=>{K{L(C Date().getHours()==8){4 c=q(\'m://d.v.o/w/d/H/recExtWater?x=y-9cN1eDeETfeXBKhhM9uvHXAazmlqENLn%2BEDT6mMfzmlrBJYz6qQYI0E0oGerBvhlIU0kJg5Dog1sgoxPNe4SHXA8pWqjBKqrMAJvIglcpGq%2FBK%2FW1l8P5n6foGd\',\'{"z":1,"a":"\'+a+\'"}\');$.s.D(c).t(f=>{4 3=A.B(f.l);h.j(\'\\n【领取p水滴】:\'+3.I);9()})}W{9()}}E(k){h.j(\'\\n【领取p水滴】:\'+k);9()}})}g F R(){G C J(g 9=>{K{4 c=q(\'m://d.v.o/w/d/H/R?x=y-1i%1j%1k%1l%1m\',\'{"z":1,"1n":1,"a":"\'+a+\'"}\');7 $.s.D(c).t(f=>{4 3=A.B(f.l);h.j(\'\\n【浇水奖励】:\'+3.I)});c=q(\'m://d.v.o/w/d/H/R?x=y-1i%1j%1k%1l%1m\',\'{"z":1,"1n":2,"a":"\'+a+\'"}\');7 $.s.D(c).t(f=>{4 3=A.B(f.l);h.j(\'\\n【浇水奖励】:\'+3.I)});9()}E(k){h.j(\'\\n【浇水奖励】:\'+k);9()}})}g F 1f(){G C J(g 9=>{K{4 c=q(\'m://d.v.o/w/d/1o/19?z=1&1p=24&a=\'+a+\'&x=y-CHzVEnXwsC5zpLdk7Rv62tsP%2FswYQIPh68i9LCzo%2FswZpM6Z%2Bv4F1jmzrb5Zpwdj4zmI4towtDauZP1p54tDLGWzqCITpw6W8oQgLDQxkCSZpL1%2FJRKFLctQqb9\',\'\');7 $.s.19(c).t(g f=>{4 3=A.B(f.l);Y(4 i=0;i<3.3.1q.P;i++){V Q=3.3.1q[i];c=q(\'m://d.v.o/w/d/1o/award?x=y-%2FosIP8J%2BP2fUXQm9oTQhkvD3vZmtspKgpZpwrQb6vZmsXRz8x6GPl44LQIfsX3meP2RVmKDKQH4rh%2BuISHQhlKgdQSNUWpsaTOuPkoDMzIGuXpQgS6Whrvf8Q51\',\'{"z":1,"mission_id":\'+Q.id+\',"1p":24,"a":"\'+a+\'"}\');7 $.s.D(c).t(1r=>{4 3=A.B(1r.l);L(3.17==0){h.j(\'\\n【领取任务奖励】:\'+Q.title+\'->\'+3.I)}})};9()})}E(k){h.j(\'\\n【领取任务奖励】:\'+k);9()}})}g F 1e(){G C J(g 9=>{K{4 T=\'\';7 $.s.19({U:\'m://gitee.o/passerby-b/javascript/raw/master/test/ddcode.js\'}).t(f=>{T=f.l.1c(\',\')});4 1s=T[1t.round(1t.random()*(T.P-1)+0)];4 c=q(\'m://d.v.o/w/d/H/enter?x=y-BBvPDgBTVDqs46kY5bRH8j1YntAV71Iy7fm5Ks2zntAU45xmLi8I8c9oWcqU4Tkw1miF5DLpUbTXMYYq5Co5JDVYiGrn4xEv5Xy46G1PjGkw46VPHizM6GdnXWS\',\'{"z":1,"assist_type":101,"encode_uid":"\'+1s+\'","is_old_player":false,"a":"\'+a+\'"}\');$.s.D(c).t(f=>{4 3=A.B(f.l);9()})}E(k){9()}})}g F 14(){G C J(g 9=>{K{4 c=q(\'m://d.v.o/w/d/H/dailyReward?x=y-2Y%2F94V8v4aYaoiAIEvAiGB3oIh1fRnxLGpxVc90PIh1gojIEdKd%2F0rNY1BYgoCANA%2BZwEhfw19ldYgLb0yVUGBJq2rMFoia3ERkj0hzS2BMGoiB6a7rrbagP1BY\',\'{"1a":140749163,"z":1,"a":"\'+a+\'"}\');7 $.s.D(c).t(g f=>{4 3=A.B(f.l);Y(4 i=0;i<3.3.1u.P;i++){V Q=3.3.1u[i];c=q(\'m://d.v.o/w/d/H/14?x=y-Pvs4yx88TSQajRp7kOizqZfJzLJfmob1mSpomH0MzLJgjQW9UHGvsZN5owQgj4p3%2FLRnrPf3pxXdVNtGnxWvnZy4pL8EioRDrObvnwJ1pIjDjNWMqMuxmIG6p5O\',\'{"1a":\'+Q.1a+\',"z":1,"a":"\'+a+\'"}\');7 $.s.D(c).t(f=>{4 1v=A.B(f.l);h.j(\'\\n【领取助力奖励】:\'+1v.I);9()})};9()})}E(k){h.j(\'\\n【领取助力奖励】:\'+k);9()}})}F q(U,l){4 c={U:U,headers:{\'User-Agent\':\'Mozilla/5.0 (1w; CPU 1w OS 14_1 1y Mac OS X) AppleWebKit/605.1.15 (KHTML, 1y Gecko) Mobile/15E148 didi.passenger/6.1.18 FusionKit/1.2.20 OffMode/0\',\'Referer\':\'m://1z.1A.o.cn/\',\'Origin\':\'m://1z.1A.o.cn\',\'Connection\':\'keep-alive\',\'1B-Language\':\'zh-cn\',\'1B\':\'1C/1D, text/plain, */*\',\'Content-Type\':\'1C/1D;charset=utf-8\'},l:l};G c}',[],102,'|||data|let|||await||resolve|token||option|game||response|async|console||log|error|body|https||com|1000|urlTask||http|then|wait|xiaojukeji|api|wsgsig|dd03|platform|JSON|parse|new|post|catch|function|return|plant|errmsg|Promise|try|if|pack_water|tokenStr|tokens|length|item|dailyBox|pack_fer|scodes|url|const|else||for|water||fertilizer|dogInteract|killWorm|recDailyReward||waterCount|errno||get|assist_pid||split|recExtWater1000|zhuLi|tasklist||while|Y8ZLkZb6HJ4ftGsmVLrSPM4H3QvaWD8|2FXHkZwLJ|2B3Qv9t0RYlS6SOxD7K349tmsirO|2FqRT44KRfcltooVwxTO1K3KJpcsjmjh5OYO1fMKzDHtjjXVLLuxT|2B3K3d|box_id|mission|game_id|missions|response2|scode|Math|assist_record|data2|iPhone||like|fine|diditaxi|Accept|application|json'.split('|'),0,{}))

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/
