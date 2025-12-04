// src/views/CustomGatewayOptions.js

// Import the standard replace options from bpmn-js
import { GATEWAY } from 'bpmn-js/lib/features/replace/ReplaceOptions';

function CustomGatewayOptions() {
  const disallowed = new Set([
    'bpmn:ComplexGateway',
    'bpmn:EventBasedGateway'
  ]);

  // mutate the GATEWAY array in-place
  for (let i = GATEWAY.length - 1; i >= 0; i--) {
    const opt = GATEWAY[i];
    const type = opt && opt.target && opt.target.type;

    if (disallowed.has(type)) {
      console.log('[CustomGatewayOptions] removing gateway option:', type);
      GATEWAY.splice(i, 1);
    }
  }
}

CustomGatewayOptions.$inject = [];

// Register as a bpmn-js module
export default {
  __init__: [ 'customGatewayOptions' ],
  customGatewayOptions: [ 'type', CustomGatewayOptions ]
};
