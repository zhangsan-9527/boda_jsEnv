// MediaDeviceInfo对象
bodavm.memory.globalobj['MediaDeviceInfo'] = function MediaDeviceInfo(){if (!(this instanceof MediaDeviceInfo)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaDeviceInfo'], "MediaDeviceInfo");
bodavm.toolsFunc.defineProperty('MediaDeviceInfo', "deviceId", {configurable:true, enumerable:true, get:function deviceId (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDeviceInfo'].prototype, "MediaDeviceInfo", "deviceId_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaDeviceInfo', "kind", {configurable:true, enumerable:true, get:function kind (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDeviceInfo'].prototype, "MediaDeviceInfo", "kind_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaDeviceInfo', "label", {configurable:true, enumerable:true, get:function label (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDeviceInfo'].prototype, "MediaDeviceInfo", "label_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaDeviceInfo', "groupId", {configurable:true, enumerable:true, get:function groupId (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDeviceInfo'].prototype, "MediaDeviceInfo", "groupId_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MediaDeviceInfo', "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaDeviceInfo'].prototype, "MediaDeviceInfo", "toJSON", arguments)}},'prototype');
