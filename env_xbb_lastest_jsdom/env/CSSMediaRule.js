// CSSMediaRule对象
bodavm.memory.globalobj['CSSMediaRule'] = function CSSMediaRule(){if (!(this instanceof CSSMediaRule)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMediaRule'], "CSSMediaRule");
bodavm.memory.globalobj['CSSMediaRule'].prototype.__proto__=bodavm.memory.globalobj['CSSConditionRule'].prototype;
bodavm.memory.globalobj['CSSMediaRule'].__proto__=bodavm.memory.globalobj['CSSConditionRule'];
bodavm.toolsFunc.defineProperty('CSSMediaRule', "media", {configurable:true, enumerable:true, get:function media (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMediaRule'].prototype, "CSSMediaRule", "media_get", arguments)}, set:function media (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMediaRule'].prototype, "CSSMediaRule", "media_set", arguments)}},'prototype');
