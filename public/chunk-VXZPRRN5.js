var h=Object.create;var i=Object.defineProperty,R=Object.defineProperties,y=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,v=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var b=(t,e,o)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,k=(t,e)=>{for(var o in e||={})c.call(e,o)&&b(t,o,e[o]);if(u)for(var o of u(e))H.call(e,o)&&b(t,o,e[o]);return t},m=(t,e)=>R(t,j(e));var x=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var E=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of q(e))!c.call(t,n)&&n!==o&&i(t,n,{get:()=>e[n],enumerable:!(s=y(e,n))||s.enumerable});return t};var z=(t,e,o)=>(o=t!=null?h(v(t)):{},E(e||!t||!t.__esModule?i(o,"default",{value:t,enumerable:!0}):o,t));var A=(t,e,o)=>new Promise((s,n)=>{var w=f=>{try{a(o.next(f))}catch(d){n(d)}},g=f=>{try{a(o.throw(f))}catch(d){n(d)}},a=f=>f.done?s(f.value):Promise.resolve(f.value).then(w,g);a((o=o.apply(t,e)).next())});var O=x((l,p)=>{var G=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},r=G();p.exports=l=r.fetch;r.fetch&&(l.default=r.fetch.bind(r));l.Headers=r.Headers;l.Request=r.Request;l.Response=r.Response});export{k as a,m as b,x as c,z as d,A as e,O as f};