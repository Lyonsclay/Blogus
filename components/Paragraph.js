import React from 'react'

export default (props) => (
  <div style={styles.p}>
    {props.children}
  </div>
)

const styles = {
  p: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 680,
    minWidth: '60%',
    /* border: '2px solid lime',*/
    /* fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',*/
    /* fontFamily: 'Peddana',*/
    /* fontFamily: 'ff-meta-serif-web-pro',*/
    fontFamily: 'expo-serif-pro',
    fontFamily: 'leitura news',
    fontFamily: 'freight-text-pro',
    fontFamily: 'Merriweather',
    fontFamily: 'Lustria',
    fontFamily: 'Lora',
    /* fontFamily: 'Quattrocento',*/
    fontSize: 22,
    fontSize: 19,
    fontWeight: 300,
    /* letterSpacing: '-.003em',*/
    letterSpacing: '.005em',
    /* wordSpacing: 1,*/
    lineHeight: 1.70,
    color: 'rgba(30, 30, 30, 0.8)',
  }
}
