(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{100:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){return n.a.createElement("div",null,e.children)}},110:function(e,a,t){var l={"./wk1data.json":128};function n(e){var a=s(e);return t(a)}function s(e){if(!t.o(l,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=s,e.exports=n,n.id=110},128:function(e){e.exports=JSON.parse('{"days":["Day 1 (6/7)","Day 2 (6/9)","Day 3 (6/11)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0e2db974-92c6-40ca-99c3-ad320108223d"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0af5ae02-59f6-49a7-8cd1-ad2f015ad1c6"},{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2930058b-586a-47ad-b6f9-ad2f015aec7a"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=764f4d1d-5122-4ad0-aa4b-ad2f015aeb39"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=de1ccb63-2b0d-4286-9201-ad2f015aed0f"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=46a9e84e-7f95-4e8c-9701-ad2f015ad159"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a2cffd7e-47ed-4346-86a4-ad2f015aeb8f"},{"title":"Logical operators, control flow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=630e6dcb-c2b2-4b1b-a43c-ad2f015aee65"}],[{"title":"Arrays, ASCII","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=64f3cab3-f11d-4167-949c-ad2f015aeaa7"},{"title":"C strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4160c075-bc76-4bf4-8d1d-ad2f015ae9d9"},{"title":"File I/O, assert, math functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2df72d3e-e47a-4b3c-9d43-ad2f015ae8c0"},{"title":"Writing functions, command line arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a13f7b8f-b184-4e43-ae09-ad2f015ae82e"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_1_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_2_linux_basics.pdf"},{"title":"Hello world program in C","link":"../slides/day01_3_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day01_4_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day02_1_editors.pdf"},{"title":"Git","link":"../slides/day02_2_git.pdf"},{"title":"Submission workflow","link":"../slides/day02_3_submission_workflow.pdf"},{"title":"Logical operators, control flow","link":"../slides/day02_4_control_flow.pdf"}],[{"title":"Arrays","link":"../slides/day03_1_arrays.pdf"},{"title":"Strings","link":"../slides/day03_2_c_strings.pdf"},{"title":"File I/O, assert, math functions","link":"../slides/day03_3_fileio_assertion_math.pdf"},{"title":"Writing functions, command line arguments","link":"../slides/day03_4_functions_command_line_arguments.pdf"}]],"recaps":[[{"title":"Day 1 (TBA)","link":"#"}],[{"title":"Day 2 (TBA)","link":"#"}],[{"title":"Day 3 (TBA)","link":"#"}]],"exercises":[[{"title":"Ex1","link":"../docs/exercises/ex1"}],[{"title":"Ex2 (TBA)","link":"../docs/exercises/ex2"}],[{"title":"Ex3 (TBA)","link":"../docs/exercises/ex3"}]],"resources":[[{"title":"Pre-course survey","link":"https://forms.gle/xzemVdoBYZyxh1GC7"},{"title":"Program development concepts (mindmap)","link":"../mindmaps/program_development"},{"title":"C/C++ concepts (mindmap)","link":"../mindmaps/c_cpp_concepts"}],[{"title":"Github SSH key setup","link":"../docs/resources/github-ssh"},{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"}]],"zooms":[[{"title":"Class Video (TBA)","link":"#"}],[{"title":"Class Video (TBA)","link":"#"}],[{"title":"Class Video (TBA)","link":"#"}]]}')},47:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(49),i=t.n(s);a.default=function(e){return e.days&&e.videos&&e.slides&&e.recaps&&e.exercises&&e.resources&&e.zooms?n.a.createElement("table",{className:i.a.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,e.days[0]),n.a.createElement("th",null,e.days[1]),n.a.createElement("th",null,e.days[2]))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Lecture Videos"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.videos[0].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.videos[1].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.videos[2].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Lecture Slides"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.slides[0].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.slides[1].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.slides[2].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Recap Slides"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.recaps[0].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.recaps[1].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.recaps[2].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"In-class Exercises"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.exercises[0].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.exercises[1].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.exercises[2].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Additional Resources"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.resources[0].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.resources[1].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.resources[2].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Recorded Sessions"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.zooms[0].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.zooms[1].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.zooms[2].map(((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):n.a.createElement("div",null)}},72:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(89),i=t(99),r=t(100),c=t(47);a.default=function(){for(var e=new Array,a=1;a<=4;++a)try{var l=t(110)("./wk"+a+"data.json");e.push(n.a.createElement(r.a,{value:"w"+a},n.a.createElement(c.default,{days:l.days,videos:l.videos,slides:l.slides,recaps:l.recaps,exercises:l.exercises,resources:l.resources,zooms:l.zooms})))}catch(p){console.log("cannot read from ./data/wk"+a+"data.json")}var o=n.a.createElement(i.a,{defaultValue:"w1",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"}]},e),m=new Array;for(a=5;a<=8;++a)try{var d=t(110)("./wk"+a+"data.json");m.push(n.a.createElement(r.a,{value:"w"+a},n.a.createElement(c.default,{days:d.days,videos:d.videos,slides:d.slides,recaps:d.recaps,exercises:d.exercises,resources:d.resources,zooms:d.zooms})))}catch(p){console.log("cannot read from ./data/wk"+a+"data.json")}var u=n.a.createElement(i.a,{defaultValue:"w5",values:[{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"},{label:"Wk 8",value:"w8"}]},m);return n.a.createElement(s.a,{title:"Schedule"},n.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses (see the tentative\xa0",n.a.createElement("a",{href:"../schedule"},"schedule"),")."),n.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},n.a.createElement(i.a,{block:"true",defaultValue:"c",values:[{label:"C (Week 1 - Week 4)",value:"c"},{label:"C++ (Week 5 - Week 8)",value:"c++"}]},n.a.createElement(r.a,{value:"c"},o),n.a.createElement(r.a,{value:"c++"},u))))}},99:function(e,a,t){"use strict";var l=t(0),n=t.n(l),s=t(94),i=t(84),r=t(48),c=t.n(r);const o=37,m=39;a.a=function(e){const{block:a,children:t,defaultValue:r,values:d,groupId:u,className:p}=e,{tabGroupChoices:h,setTabGroupChoices:k}=Object(s.a)(),[E,f]=Object(l.useState)(r),[b,w]=Object(l.useState)(!1);if(null!=u){const e=h[u];null!=e&&e!==E&&d.some((a=>a.value===e))&&f(e)}const y=e=>{f(e),null!=u&&k(u,e)},v=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||w(!0)},_=()=>{w(!1)};return Object(l.useEffect)((()=>(window.addEventListener("keydown",g),window.addEventListener("mousedown",_),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",_)})),[]),n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},p)},d.map((({value:e,label:a})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":E===e}),style:b?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case m:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case o:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(v,e.target,e),g(e)},onFocus:()=>y(e),onClick:()=>{y(e),w(!1)},onPointerDown:()=>w(!1)},a)))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},l.Children.toArray(t).filter((e=>e.props.value===E))[0]))}}}]);