# Global Scope in JS

A single JS application can contain multiple JS files which are then attached by JS engine in a single runtime context. There are three main ways for doing that with respect to browser executed applications.

1. Directly using ES modules, those files are then seperatly loaded by JS enviroment. Each module then imports references to the modules it needs to access. Those module files co operate each other with the help of these imports and they don't need any shared outer scope then.

2. Using bundler in your build process. All the files are typically concatinated together before delivery to the browser and JS engine which then process them as one big single file.

3. Whether a bundler is used or all JS files are loaded seperately if there is mo surrounding scope, the global scope is the only way for them to cooperate with each other.

