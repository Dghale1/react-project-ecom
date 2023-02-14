import React from "react"

export default function Title({text, classes}) {
    return (
        <span className={classes}>{!text? "Login" : text }</span>
    )
}