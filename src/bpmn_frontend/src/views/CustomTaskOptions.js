// src/views/CustomTaskOptions.js

import { TASK } from 'bpmn-js/lib/features/replace/ReplaceOptions';

// allowed option types
const ALLOWED = new Set([
  'bpmn:Task',
  'bpmn:UserTask',
  'bpmn:ServiceTask',
  'bpmn:SendTask',
  'bpmn:ReceiveTask',
  'bpmn:BusinessRuleTask',
  'bpmn:ManualTask',
  'bpmn:ScriptTask'
]);

function CustomTaskOptions() {
  console.log('[CustomTaskOptions] Filtering TASK options …');

  for (let i = TASK.length - 1; i >= 0; i--) {
    const opt = TASK[i];
    const type = opt?.target?.type;

    if (!type) continue;

    if (!ALLOWED.has(type)) {
      console.log('[CustomTaskOptions] Removing:', type);
      TASK.splice(i, 1);
    }
  }
}

CustomTaskOptions.$inject = [];

export default {
  __init__: ['customTaskOptions'],
  customTaskOptions: ['type', CustomTaskOptions]
};
