// XPathExpression对象
bodavm.memory.globalobj['XPathExpression'] = function XPathExpression(){if (!(this instanceof XPathExpression)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XPathExpression'], "XPathExpression");
bodavm.toolsFunc.defineProperty('XPathExpression', "evaluate", {configurable:true, enumerable:true, writable:true, value:function evaluate (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XPathExpression'].prototype, "XPathExpression", "evaluate", arguments)}},'prototype');
