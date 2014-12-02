#Module
Base constructor to use with `router` (https://github.com/aquigorka/router)


`Module` works as a container for ViewControllers and Views


##Usage
 - route to module and the magic will happen

	    router.routeToModuleId('module-id-1');

###api

**router.init(modules: Array)**

    init router and set modules

**Module(id: String)**

    new module instance receives unique id (String) as identifier

**getId()**

    return module unique id

**hide()**

    remove module from DOM

**onBack(callback: function)**

    set function to execute when an onBack action is received from the router, the callback parameter will continue with normal execution

**onExit(callback: function)

    set function to execute when an onExit action is received from the router, the callback parameter will continue with normal execution

**show(params: Array)**

    add module to DOM and give it focus

###build

    browserify src/module.js --standalone Module > dist/module.js
