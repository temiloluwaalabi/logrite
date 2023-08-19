import React from 'react'

const Container = ({children, classname, style}) => {
  return (
    <section className={`mx-auto max-w-7xl px-7 ${classname}`} style={style}>
        {children}
    </section>
  )
}

export default Container