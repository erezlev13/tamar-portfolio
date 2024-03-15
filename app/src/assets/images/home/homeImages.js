const importAll = (context) => context.keys().map(context);

const images = importAll(require.context('./', false, /\.(jpg)$/));

export { images };

