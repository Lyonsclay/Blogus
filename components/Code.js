import React from 'react'
import Head from 'next/head'

export default ({children}) => (
  <div style={styles.code} className="background">
    <Head>
      <link href="../static/color_theme.css" rel="stylesheet" type="text/css" />
    </Head>
    {children}
  </div>
)

const styles = {
  code: {
    whiteSpace: 'pre',
    fontFamily: '"Source Code Pro", SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    fontFamily: 'Source Code Pro',
    fontSize: 18,
    /* color: '#052C36',
     * color: '#C4E4E8',
     * backgroundColor: '#C4E4E8',
     * backgroundColor: '#052C36',
     * backgroundColor: 'rgba(5, 43, 54, 0.8)',*/
    width: '75%',
    overflow: 'scroll',
    borderRadius: 10,
  }
}
