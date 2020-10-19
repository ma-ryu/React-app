import React, { Component } from 'react';

const Form = (props) => (
  <form className="" onSubmit={props.handleAdd}>
    <div className="">
      <label className="">Your todo:</label>
        <div className="">
        <input name="title" type="text" className="input is-primary"/>
        <button className="button is-link mt-5">Submit</button>
      </div>
    </div>
  </form>
);

export default Form;