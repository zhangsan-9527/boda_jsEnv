// FormDataEvent对象
bodavm.memory.globalobj['FormDataEvent'] = function FormDataEvent(){if (!(this instanceof FormDataEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FormDataEvent': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FormDataEvent'], "FormDataEvent");
bodavm.memory.globalobj['FormDataEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['FormDataEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('FormDataEvent', "formData", {configurable:true, enumerable:true, get:function formData (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FormDataEvent'].prototype, "FormDataEvent", "formData_get", arguments)}, set:undefined},'prototype');
