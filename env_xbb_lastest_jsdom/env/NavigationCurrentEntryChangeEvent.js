// NavigationCurrentEntryChangeEvent对象
bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent'] = function NavigationCurrentEntryChangeEvent(){if (!(this instanceof NavigationCurrentEntryChangeEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'NavigationCurrentEntryChangeEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent'], "NavigationCurrentEntryChangeEvent");
bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('NavigationCurrentEntryChangeEvent', "navigationType", {configurable:true, enumerable:true, get:function navigationType (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent'].prototype, "NavigationCurrentEntryChangeEvent", "navigationType_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('NavigationCurrentEntryChangeEvent', "from", {configurable:true, enumerable:true, get:function from (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationCurrentEntryChangeEvent'].prototype, "NavigationCurrentEntryChangeEvent", "from_get", arguments)}, set:undefined},'prototype');
