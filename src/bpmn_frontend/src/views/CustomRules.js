// src/views/CustomRules.js

import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';

const HIGH_PRIORITY = 1500;

// Block only these gateway types
const BLOCKED_TYPES = new Set([
  'bpmn:ComplexGateway',
  'bpmn:EventBasedGateway'
]);

console.log('[CustomRules] module file loaded');

class CustomRules extends RuleProvider {
  constructor(eventBus) {
    super(eventBus);
    console.log('[CustomRules] instance created');

    // Register rules directly in the constructor
    this.addRule('shape.create', HIGH_PRIORITY, (context) => {
      const shape = context.shape || context;
      const type =
        shape?.type ||
        shape?.businessObject?.$type;

      console.log('[CustomRules] shape.create →', type, context);

      if (!type) return;

      if (BLOCKED_TYPES.has(type)) {
        console.log('[CustomRules] blocking create of', type);
        return false;       // veto complex / event-based gateways
      }

      // return nothing → let default BPMN rules decide (exclusive, inclusive, parallel, tasks, ...)
    });
  }
}

CustomRules.$inject = [ 'eventBus' ];

export default {
  __init__: [ 'customRules' ],
  customRules: [ 'type', CustomRules ]
};
