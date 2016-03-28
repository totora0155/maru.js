const banner = `
/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/maru.js
 */
`;

export default {
  banner: banner.trim(),
  entry: 'lib/maru.js',
  format: 'umd',
  dest: 'dist/maru.js',
  moduleName: 'Maru',
};
