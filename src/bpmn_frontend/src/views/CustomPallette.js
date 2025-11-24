// views/CustomPallette.js

// This is the actual provider that wraps the default palette provider
function CustomPalette(injector) {
  const paletteProvider = injector.get('paletteProvider', false);
  if (!paletteProvider) return;

  const originalGetEntries = paletteProvider.getPaletteEntries;

  paletteProvider.getPaletteEntries = function(element) {
    const entries = originalGetEntries.call(paletteProvider, element);

    // Remove the "Create pool/participant" entry from the palette
    if (entries['create.participant-expanded']) {
      delete entries['create.participant-expanded'];
    }

    return entries;
  };
}

CustomPalette.$inject = [ 'injector' ];

// Export a bpmn-js module, just like in the custom-controls example
export default {
  __init__: [ 'customPalette' ],
  customPalette: [ 'type', CustomPalette ]
};
