// src/views/CustomPalette.js

class CustomPalette {
  constructor(
    palette,
    create,
    elementFactory,
    handTool,
    lassoTool,
    spaceTool,
    globalConnect,
    translate
  ) {
    this._create = create;
    this._elementFactory = elementFactory;
    this._handTool = handTool;
    this._lassoTool = lassoTool;
    this._spaceTool = spaceTool;
    this._globalConnect = globalConnect;
    this._translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries() {
    const {
      _create: create,
      _elementFactory: elementFactory,
      _handTool: handTool,
      _lassoTool: lassoTool,
      _spaceTool: spaceTool,
      _globalConnect: globalConnect,
      _translate: translate
    } = this;

    function createAction(type, group, className, title) {
      return {
        group,
        className,
        title,
        action: {
          dragstart(event) {
            const shape = elementFactory.createShape({ type });
            create.start(event, shape);
          },
          click(event) {
            const shape = elementFactory.createShape({ type });
            create.start(event, shape);
          }
        }
      };
    }

    return {

      // ========== TOOLS ==========
      'hand-tool': {
        group: 'tools',
        className: 'bpmn-icon-hand-tool',
        title: translate('Activate hand tool'),
        action: { click: event => handTool.activateHand(event) }
      },

      'lasso-tool': {
        group: 'tools',
        className: 'bpmn-icon-lasso-tool',
        title: translate('Activate lasso tool'),
        action: { click: event => lassoTool.activateSelection(event) }
      },

      'space-tool': {
        group: 'tools',
        className: 'bpmn-icon-space-tool',
        title: translate('Activate space tool'),
        action: { click: event => spaceTool.activateSelection(event) }
      },

      'global-connect-tool': {
        group: 'tools',
        className: 'bpmn-icon-connection-multi',
        title: translate('Activate global connect tool'),
        action: { click: event => globalConnect.start(event) }
      },

      'tool-separator': { group: 'tools', separator: true },

      // ========== EVENTS ==========
      'create.start-event': createAction(
        'bpmn:StartEvent',
        'event',
        'bpmn-icon-start-event-none',
        'Create Start Event'
      ),

      'create.intermediate-event': createAction(
        'bpmn:IntermediateThrowEvent',
        'event',
        'bpmn-icon-intermediate-event-none',
        'Create Intermediate Event'
      ),

      'create.end-event': createAction(
        'bpmn:EndEvent',
        'event',
        'bpmn-icon-end-event-none',
        'Create End Event'
      ),

      // ========== GATEWAY ==========
      'create.exclusive-gateway': createAction(
        'bpmn:ExclusiveGateway',
        'gateway',
        'bpmn-icon-gateway-xor',
        'Create Gateway'
      ),

      // ========== TASK ==========
      'create.task': createAction(
        'bpmn:Task',
        'activity',
        'bpmn-icon-task',
        'Create Task'
      )
    };
  }
}

CustomPalette.$inject = [
  'palette',
  'create',
  'elementFactory',
  'handTool',
  'lassoTool',
  'spaceTool',
  'globalConnect',
  'translate'
];

export default {
  __init__: ['customPalette'],
  __depends__: [],                     // required structure
  customPalette: ['type', CustomPalette]
};
