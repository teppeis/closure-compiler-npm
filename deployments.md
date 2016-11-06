# Deploying Closure Compiler to NPM

 1. Update the compiler submodule pointer to the tagged release.
    * change to the `./packages/google-closure-compiler-jar/compiler` folder
    * `git checkout` the correct tag/commit
    * change back to the root folder and commit this change
 2. Run the tests: `npm install && npm test`.
 3. Update version, commit, tag and publish with lerna.
    `npm run lerna -- publish`, select `Custom version` and input the package
    version number. The major version should be equal to the compiler version
    and the minor and patch numbers should be `0`. Example: 20160619.0.0.
