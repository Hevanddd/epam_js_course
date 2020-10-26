/**
 * Some tests might use date and rime formatting. To make sure test data will produce the same
 * results regardless timezone, we explicitly set timezone for jest runs.
 */
process.env.TZ = 'GMT';

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
