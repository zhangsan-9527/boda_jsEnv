// AbstractRange对象
bodavm.memory.globalobj['AbstractRange'] = function AbstractRange(){if (!(this instanceof AbstractRange)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AbstractRange'], "AbstractRange");
bodavm.toolsFunc.defineProperty('AbstractRange', "startContainer", {configurable:true, enumerable:true, get:function startContainer (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbstractRange'].prototype, "AbstractRange", "startContainer_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('AbstractRange', "startOffset", {configurable:true, enumerable:true, get:function startOffset (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbstractRange'].prototype, "AbstractRange", "startOffset_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('AbstractRange', "endContainer", {configurable:true, enumerable:true, get:function endContainer (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbstractRange'].prototype, "AbstractRange", "endContainer_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('AbstractRange', "endOffset", {configurable:true, enumerable:true, get:function endOffset (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbstractRange'].prototype, "AbstractRange", "endOffset_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('AbstractRange', "collapsed", {configurable:true, enumerable:true, get:function collapsed (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbstractRange'].prototype, "AbstractRange", "collapsed_get", arguments)}, set:undefined},'prototype');
