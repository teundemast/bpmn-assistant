// src/views/CustomEventOptions.js

import {
  START_EVENT,
  INTERMEDIATE_EVENT,
  END_EVENT
} from 'bpmn-js/lib/features/replace/ReplaceOptions';

// Allow only these combinations
const ALLOWED = new Set([
  'bpmn:StartEvent::none',
  'bpmn:StartEvent::bpmn:MessageEventDefinition',
  'bpmn:StartEvent::bpmn:TimerEventDefinition',

  'bpmn:EndEvent::none',
  'bpmn:EndEvent::bpmn:MessageEventDefinition',

  'bpmn:IntermediateThrowEvent::none',
  'bpmn:IntermediateThrowEvent::bpmn:MessageEventDefinition',

  'bpmn:IntermediateCatchEvent::bpmn:TimerEventDefinition',
  'bpmn:IntermediateCatchEvent::bpmn:MessageEventDefinition'
]);

function matchKey(option) {
  const type = option?.target?.type;
  const def = option?.target?.eventDefinitionType || 'none';
  return `${type}::${def}`;
}

function filterList(list, name) {
  console.log(`[CustomEventOptions] Filtering ${name} options…`);

  for (let i = list.length - 1; i >= 0; i--) {
    const opt = list[i];
    const key = matchKey(opt);

    if (!ALLOWED.has(key)) {
      console.log(`[CustomEventOptions] Removing: ${key}`);
      list.splice(i, 1);
    }
  }
}

function CustomEventOptions() {
  filterList(START_EVENT, 'START_EVENT');
  filterList(INTERMEDIATE_EVENT, 'INTERMEDIATE_EVENT');
  filterList(END_EVENT, 'END_EVENT');
}

CustomEventOptions.$inject = [];

export default {
  __init__: ['customEventOptions'],
  customEventOptions: ['type', CustomEventOptions]
};
