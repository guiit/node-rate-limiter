"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
var config = require('./jest.config');
config.testMatch = ['**/__tests__/integration/*test.ts'];
module.exports = config;
