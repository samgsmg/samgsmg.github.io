import allModules from '@state/modules'

import store from '@state/store'

export default function dispatchActionForAllModules(
  actionName,
  { modules = allModules, modulePrefix = '', flags = {} } = {}
) {
  for (const moduleName in modules) {
    const moduleDefinition = modules[moduleName]

    if (moduleDefinition.action && moduleDefinition.actions[actionName]) {
      if (moduleDefinition.namesapced) {
        store.dispatch(`${modulePrefix}${moduleName}/${actionName}`)
      } else {
        flags.dispatchGlobal = true
      }
    }
    // If there are any nested sub-modules...
    if (moduleDefinition.modules) {
      // Also dispatch the action for these sub-modules.
      dispatchActionForAllModules(actionName, {
        modules: moduleDefinition.modules,
        modulePrefix: modulePrefix + moduleName + '/',
        flags,
      })
    }
    // If this is the root and at least one non-namespaced module
    // was found with the action...
    if (!modulePrefix && flags.dispatchGlobal) {
      // Dispatch the action globally.
      store.dispatch(actionName)
    }
  }
}
