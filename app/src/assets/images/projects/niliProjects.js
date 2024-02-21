const importAll = (context) => context.keys().map(context);

const NiliImages = importAll(require.context('./nili/', false, /\.(jpg)$/));

export { NiliImages };

