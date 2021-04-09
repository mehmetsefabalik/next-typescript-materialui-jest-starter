module.exports = {
  "testEnvironment": "jsdom",
  "preset": "ts-jest",
  "setupFilesAfterEnv": ["<rootDir>/setupTests.ts"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.jest.json"
    }
  }
}