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
    border: '2px solid lime',
    fontFamily: 'Georgia,Cambria,"Times New Roman",Times,serif',
    width: '90%',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.8)',
  }
}
