// src/views/ContextPadFilter.js

function ContextPadFilter(contextPad) {
  const originalGetEntries = contextPad.getEntries.bind(contextPad);

  contextPad.getEntries = function(element) {
    const entries = originalGetEntries(element) || {};

    // Remove *all* text-annotation-related entries
    Object.keys(entries).forEach((key) => {
      if (key.includes('text-annotation')) {
        delete entries[key];
      }
    });

    return entries;
  };

  console.log('[ContextPadFilter] Installed context pad filter (no text annotations)');
}

ContextPadFilter.$inject = [ 'contextPad' ];

export default {
  __init__: [ 'contextPadFilter' ],
  contextPadFilter: [ 'type', ContextPadFilter ]
};
