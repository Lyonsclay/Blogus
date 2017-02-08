import React from 'react'

const title = 'Animation Basics'
const p1 = 'Put it on the Graphics Card.'
const CodePen1 = () => (
  <div>
    <p data-height="240" data-theme-id="light" data-slug-hash="WwVeQM" data-default-tab="html,result" data-user="Lyonsclay" data-embed-version="2" data-pen-title="Shadowing CSS Animation - static" data-preview="true" className="codepen">See the Pen <a href="https://codepen.io/Lyonsclay/pen/WwVeQM/">Shadowing CSS Animation - static</a> by Clay Morton (<a href="http://codepen.io/Lyonsclay">@Lyonsclay</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </div>
)
const CodePen2 = () => (
  <div>
    <p data-height="240" data-theme-id="light" data-slug-hash="WwVeQM" data-default-tab="result" data-user="Lyonsclay" data-embed-version="1" data-pen-title="Shadowing CSS Animation - static" className="codepen">See the Pen <a href="https://codepen.io/Lyonsclay/pen/WwVeQM/">Shadowing CSS Animation - static</a> by Clay Morton (<a href="http://codepen.io/Lyonsclay">@Lyonsclay</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </div>
)

export default () => (
  <div>
    <h3>{title}</h3>
    <p>{p1}</p>
    <CodePen2/>
  </div>
)
