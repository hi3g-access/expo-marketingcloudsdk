const universalPreset = require('jest-expo/universal/jest-preset');

module.exports = {
  ...universalPreset,
  passWithNoTests: false,
  projects: universalPreset.projects.map((project) => ({
    ...project,
    roots: ['<rootDir>/src'],
    clearMocks: true,
  })),
};
