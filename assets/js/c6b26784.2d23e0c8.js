"use strict";(self.webpackChunkhyperfy_docs=self.webpackChunkhyperfy_docs||[]).push([[4289],{8112:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=s(4848),t=s(8453);const r={},i="<model>",l={id:"developers/components/model",title:"<model>",description:"Renders a GLTF model into the world.",source:"@site/docs/developers/components/model.md",sourceDirName:"developers/components",slug:"/developers/components/model",permalink:"/hyperfy-docs/docs/developers/components/model",draft:!1,unlisted:!1,editUrl:"https://github.com/madjin/hyperfy-docs/tree/main/docs/developers/components/model.md",tags:[],version:"current",lastUpdatedBy:"Ash",lastUpdatedAt:1696253992e3,frontMatter:{},sidebar:"developers",previous:{title:"<input>",permalink:"/hyperfy-docs/docs/developers/components/input"},next:{title:"<place>",permalink:"/hyperfy-docs/docs/developers/components/place"}},c={},o=[{value:"Mesh Tags",id:"mesh-tags",level:2},{value:"Props",id:"props",level:2},{value:"Ref",id:"ref",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const d={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"model",children:(0,n.jsx)(d.code,{children:"<model>"})}),"\n",(0,n.jsx)(d.p,{children:"Renders a GLTF model into the world."}),"\n",(0,n.jsx)(d.p,{children:"When authoring models in blender you can tag meshes to give them different properties such as physics colliders."}),"\n",(0,n.jsx)(d.h2,{id:"mesh-tags",children:"Mesh Tags"}),"\n",(0,n.jsx)(d.p,{children:"Meshes in a GLTF that contain any of the following tags in their name will apply special behaviours."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Tag"}),(0,n.jsx)(d.th,{children:"Behaviour"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_collider"})}),(0,n.jsx)(d.td,{children:"Mesh is both rendered and used as a convex collider"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_xcollider"})}),(0,n.jsx)(d.td,{children:"Mesh is only used as a convex collider"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_tcollider"})}),(0,n.jsx)(d.td,{children:"Mesh is both rendered and used as a trimesh collider"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_xtcollider"})}),(0,n.jsx)(d.td,{children:"Mesh is only used as a trimesh collider"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_climb"})}),(0,n.jsx)(d.td,{children:"Mesh can be climbed. Must also be a collider."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_noclimb"})}),(0,n.jsx)(d.td,{children:"Mesh canot be climbed. Must also be a collider."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"_action"})}),(0,n.jsxs)(d.td,{children:["Declares an actionable mesh to be used with the ",(0,n.jsx)(d.code,{children:"onPointerDown"})," prop. If the model contains no ",(0,n.jsx)(d.code,{children:"_action"})," tags, the whole model is actionable. If the model contains some ",(0,n.jsx)(d.code,{children:"_action"})," tags then only those meshes will be clickable. The ",(0,n.jsx)(d.code,{children:"Event"})," will contain the tag of the clicked mesh."]})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"props",children:"Props"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Prop"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Default"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"src"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Path to the ",(0,n.jsx)(d.code,{children:".glb"})," file in your assets folder. Required."]}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"position"}),(0,n.jsx)(d.td,{children:"Array"}),(0,n.jsx)(d.td,{children:"Position of the model."}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"[0,0,0]"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"rotation"}),(0,n.jsx)(d.td,{children:"Array"}),(0,n.jsx)(d.td,{children:"Rotation of the model."}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"[0,0,0]"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"scale"}),(0,n.jsx)(d.td,{children:"Number|Array"}),(0,n.jsx)(d.td,{children:"Scale of the model. Use an array to declare non-scalar scale."}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"1"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"hidden"}),(0,n.jsx)(d.td,{children:"Boolean"}),(0,n.jsx)(d.td,{children:"Whether to hide this model. Use this for invisible physics."}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"collision"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["How collision should be handled. ",(0,n.jsx)(d.code,{children:"trimesh"})," and ",(0,n.jsx)(d.code,{children:"convex"})," will force all meshes to become colliders. ",(0,n.jsx)(d.code,{children:"auto"})," will honor embedded tags."]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"auto"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onHoverEnter"}),(0,n.jsx)(d.td,{children:"Function"}),(0,n.jsxs)(d.td,{children:["Called when an avatar hovers over the model. Provides an ",(0,n.jsx)(d.code,{children:"Event"})]}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onHoverLeave"}),(0,n.jsx)(d.td,{children:"Function"}),(0,n.jsxs)(d.td,{children:["Called when an avatar hovers out of the model. Provides an ",(0,n.jsx)(d.code,{children:"Event"})]}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onPointerDown"}),(0,n.jsx)(d.td,{children:"Function"}),(0,n.jsx)(d.td,{children:"Called when avatar presses the pointer down over this object."}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onPointerDownHint"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Text displayed when hovering over this object when onPointerDown is defined."}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onPointerUp"}),(0,n.jsx)(d.td,{children:"Function"}),(0,n.jsx)(d.td,{children:"Called when avatar releases the pointer over this object."}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onPointerUpHint"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Text displayed when hovering over this object with the pointer down and onPointerUp is defined."}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"hitDistance"}),(0,n.jsx)(d.td,{children:"Number"}),(0,n.jsx)(d.td,{children:"Maximum distance to interact with this node."}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"3"})})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"ref",children:"Ref"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Field"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"setPosition(vec3)"})}),(0,n.jsx)(d.td,{children:"Update position"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"setRotation(eul)"})}),(0,n.jsx)(d.td,{children:"Update rotation"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"If a mesh tagged as a convex collider is not convex, it will still behave convex using a shrinkwrap-like mechanism."}),"\n"]})]})}function x(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>l});var n=s(6540);const t={},r=n.createContext(t);function i(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);