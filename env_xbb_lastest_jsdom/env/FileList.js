// FileList对象
bodavm.memory.globalobj['FileList'] = function FileList(){if (!(this instanceof FileList)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FileList'], "FileList");
bodavm.toolsFunc.defineProperty('FileList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileList'].prototype, "FileList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('FileList', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FileList'].prototype, "FileList", "item", arguments)}},'prototype');
