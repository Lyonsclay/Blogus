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
    maxWidth: '60%',
    /* border: '2px solid lime',*/
    /* fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',*/
    /* fontFamily: 'Peddana',*/
    fontFamily: 'Charis',
    fontSize: 15,
    /* fontSizeAdjust: 0.5,*/
    letterSpacing: '-.003em',
    wordSpacing: 1,
    lineHeight: 1.58,
    width: '90%',
    fontWeight: 200,
    color: 'rgba(0, 0, 0, 0.7)',
  }
}
