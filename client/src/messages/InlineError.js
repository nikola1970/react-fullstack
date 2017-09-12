import React from "react";

const InlineError = ({ text }) => (
    <div className="alert alert-danger">{ text }</div>
);

export default InlineError;