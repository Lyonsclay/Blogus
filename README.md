Build your own blog site in under 15min with Next.js using React.js.

#Using react-test-render in a Node repl session;

`yarn add react-test-render --dev`
`yarn add babel-preset-es2015 --dev`
`babel-node --presets react,es2015`
`const fs = require('fs')`
`const hljs = require('highlight.js')`
`const testRenderer = require('react-test-render')`

```
const code = fs.readFileSync('./components/Code.js')
const hlCode = hljs.highlightAuto(code.toString())
const lines = hlCode.split("\n")
const renderer = testRenderer.create(<div>Sushi</div>).toJSON()
```
