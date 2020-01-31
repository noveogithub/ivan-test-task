/**
 * this config is just for local jest running (e.g. in pre commit hooks)
 * or for other cases when react scripts testing does not fit
 * react-scripts test doesn't need this config
 */
module.exports = {
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "jsx"]
}
