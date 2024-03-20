import{a as j}from"./chunk-AVH3GTM3.js";import{a as b}from"./chunk-BSY6DPP7.js";import{h as $,j as k,l as T,o as w,w as B}from"./chunk-PLZ2TRKD.js";import{Ab as I,Bb as s,Cb as O,Db as P,Eb as S,Fb as f,Gb as h,Ua as i,Va as _,X as x,bc as y,cc as E,dc as F,ea as u,fc as D,ib as d,kb as m,nb as o,ob as r,qb as v,rb as M,t as C,tb as g,zb as l}from"./chunk-2CVCSYUE.js";var U=e=>["/films",e];function A(e,n){if(e&1&&(o(0,"li")(1,"a",4),l(2),r()()),e&2){let t=n.$implicit,c=g(4);i(),m("routerLink",S(3,U,c.getFilmIdFromUrl(t.url))),i(),O("",t.title," (Episode ",t.episode_id,")")}}function H(e,n){if(e&1&&(o(0,"ul"),d(1,A,3,5,"li",3),r()),e&2){let t=g().ngIf;i(),m("ngForOf",t)}}function N(e,n){if(e&1&&(v(0),d(1,H,2,1,"ul",2),M()),e&2){let t=n.ngIf;i(),m("ngIf",t.length>0)}}function G(e,n){if(e&1&&(o(0,"div",1)(1,"h2"),l(2),r(),o(3,"p"),l(4),r(),o(5,"p"),l(6),r(),o(7,"p"),l(8),r(),o(9,"p"),l(10),r(),o(11,"p"),l(12),r(),o(13,"p"),l(14),r(),o(15,"p"),l(16),r(),o(17,"h3"),l(18,"Films:"),r(),d(19,N,2,1,"ng-container",2),f(20,"async"),r()),e&2){let t=n.ngIf,c=g();i(2),I(t.name),i(2),s("Height: ",t.height," cm"),i(2),s("Mass: ",t.mass," kg"),i(2),s("Hair Color: ",t.hair_color,""),i(2),s("Skin Color: ",t.skin_color,""),i(2),s("Eye Color: ",t.eye_color,""),i(2),s("Birth Year: ",t.birth_year,""),i(2),s("Gender: ",t.gender,""),i(3),m("ngIf",h(20,9,c.films$))}}var ee=(()=>{let n=class n{constructor(c,a,p){this.route=c,this.store=a,this.swapiService=p}ngOnInit(){this.route.params.subscribe(c=>{let a=c.id;a&&(this.store.dispatch(B({apiType:"character",id:a})),this.character$=this.store.select(b),this.films$=this.character$?.pipe(x(p=>this.swapiService.getFilmsByUrls(p?.films||[])),C(p=>p.sort((L,R)=>L.episode_id-R.episode_id))))})}getFilmIdFromUrl(c){let a=/\/api\/.*?\/(\d+)(\/?)$/.exec(c);return a?a[1]:""}};n.\u0275fac=function(a){return new(a||n)(_($),_(w),_(j))},n.\u0275cmp=u({type:n,selectors:[["app-character-details"]],standalone:!0,features:[P],decls:2,vars:3,consts:[["class","character-details",4,"ngIf"],[1,"character-details"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(a,p){a&1&&(d(0,G,21,11,"div",0),f(1,"async")),a&2&&m("ngIf",h(1,1,p.character$))},dependencies:[D,y,E,F,T,k],styles:[".character-details[_ngcontent-%COMP%]{color:#ffe81f;text-align:center}.character-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:20px 0}.character-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.character-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-top:20px}.character-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:20px 0}.character-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.character-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;transition:color .3s,transform .3s}.character-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;transform:scale(1.05)}"]});let e=n;return e})();export{ee as CharacterDetailsComponent};
