module.exports = {
  "*.{ts,tsx}": [
    "npm run lintFix",
    "prettier --write",
    "git add ."
  ]
}