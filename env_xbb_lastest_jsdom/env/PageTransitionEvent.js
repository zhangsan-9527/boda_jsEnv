// PageTransitionEvent对象
bodavm.memory.globalobj['PageTransitionEvent'] = function PageTransitionEvent(){if (!(this instanceof PageTransitionEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PageTransitionEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PageTransitionEvent'], "PageTransitionEvent");
bodavm.memory.globalobj['PageTransitionEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PageTransitionEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PageTransitionEvent', "persisted", {configurable:true, enumerable:true, get:function persisted (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PageTransitionEvent'].prototype, "PageTransitionEvent", "persisted_get", arguments)}, set:undefined},'prototype');
