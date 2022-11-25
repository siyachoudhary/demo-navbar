import React from 'react';
import "./myButton.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

function ContactForm(props) {
    const btnType = props.btnType
    return (
        btnType === "send"?
        <button className={"buttonStyle"}>{props.btnText}  <FontAwesomeIcon icon={faPaperPlane} /></button>:
        <button className={"buttonStyle"} onClick={props.onClick}>{props.btnText}</button>
    );
}

export default ContactForm;
