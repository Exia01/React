import React, { Component } from 'react'
import '../../styles/PageComponentStyles.css'
const PageComponent = ({ children }) => {
    return (
        <section className="page">
            {children}
        </section>
    )
}



export default PageComponent
