import React from 'react'
import Head from 'next/head'
import Code from  '../components/Code'
import Layout from '../components/Layout'
import StaticTitle from '../components/StaticTitle'
import Paragaraph from '../components/Paragraph'

const title = 'Animation and the Shadow Dom'
/* const P1 = 'Put it on the Graphics Card.'*/
const p1 = (
  <div>
  <p>
  As a way of learning React I recently built a prototype of a browser game which got me thinking hard about animation on web.
 </p>
  <a href="https://medium.com/r/?url=http%3A%2F%2Fufogame.s3-website-us-west-2.amazonaws.com%2F">
  UFO Game
  </a>
  <p>
    I used the CSS properties `top` and `left` with `position: absolute;` to
    position elements on the screen.
  </p>
  </div>
)
const CodePen1 = () => (
  <div style={styles.codePen}>
    <Head>
      <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    </Head>
    <p data-height="256" data-theme-id="light" data-slug-hash="WwVeQM" data-default-tab="result" data-user="Lyonsclay" data-embed-version="2" data-pen-title="Shadowing CSS Animation - static" data-preview="true" className="codepen">See the Pen <a href="https://codepen.io/Lyonsclay/pen/WwVeQM/">Shadowing CSS Animation - static</a> by Clay Morton (<a href="http://codepen.io/Lyonsclay">@Lyonsclay</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  </div>
)
const P2 = 'Don\'t get too crazy or nothing. Just focus on declaring the result of the animation rather than how to get there.'
const Gist1 = () => (
  <div>
    <style jsx>
      {`
        table {
          height: 100px;
          overflow: scroll;
          padding-top: 200px;
        }
      `}
    </style>
  </div>
)
const script = 'function bring() { return \'it\' }'
const code1 = `
    const Controls = (props) => {
      const fadeStyle = {
        transition: 'opacity 2s',
        opacity: 0,
      }

      return (
        <text
          x={props.xMax/2 - 125}
          y={60}
          fontFamily="helvetica"
          fill="Brown"
          stroke="Brown"
          fontSize="30"
          opacity=".6"
          style={props.hideControls ? fadeStyle : {} }
        >
          <tspan>
            Use Bracket Keys
          </tspan>
          <tspan dy="60" dx="-230" fontSize="40">
            &#x21e6; &nbsp; [ &nbsp; &nbsp; ] &nbsp; &#x21e8;
          </tspan>
        </text>
      )
    }

`
const Code1 = () => (<code style={{whiteSpace: 'pre'}}>{code1}</code>)
const P3 = 'That\'s coding; good stuff!'

export default () => (
  <Layout>
    <StaticTitle title={title}/>
    <Paragaraph>
      {p1}
    </Paragaraph>
    <CodePen1 />
    <Paragaraph>
      <p>{P2}</p>
    </Paragaraph>
    <Code code={code1} />
    <Paragaraph>
      <p>{P3}</p>
    </Paragaraph>
  </Layout>
)

const styles = {
  codePen: {
    width: '90%',
    border: '2px dashed cyan',
  }
}
