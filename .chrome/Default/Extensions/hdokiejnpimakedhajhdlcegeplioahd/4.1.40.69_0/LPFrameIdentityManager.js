LPFrameIdentityManager=function(){var d=0,e=0,b=[],g=function(a,c,f,d){var b=function(){!0===f.apply(this,arguments)&&a.removeEventListener(c,b,d)};a.addEventListener(c,b,d)},h=function(a){for(var c=0;c<b.length;++c)if(b[c].frame===a)return b[c].id;c=d+":"+ ++e;b.push({frame:a,id:c});return c};return{getFrameIdentity:function(a){if(window===top)a(d);else{var c=Date.now();window.parent.postMessage({LPMessage:"getFrameIdentity",requestID:c},"*");g(window,"message",function(b){if(b.source===window.parent&&
b.data&&"gotFrameIdentity"===b.data.LPMessage&&b.data.requestID===c)return d=b.data.frameIdentity,a(d),!0})}},initialize:function(){window.addEventListener("message",function(a){a.source&&a.data&&"getFrameIdentity"===a.data.LPMessage&&a.source.postMessage({LPMessage:"gotFrameIdentity",requestID:a.data.requestID,frameIdentity:h(a.source)},a.origin)})}}}();
