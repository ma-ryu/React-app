import React from 'react';

const Form = (props) => (
  <form className="" onSubmit={props.handleAdd}>
    <div className="">
      <label className="">:</label>
        <div className="">
        <input name="title" type="text" className="input is-primary"/>
        <select name="重要度" onChange={props.handlePriority} defaultValue="重要度">
          <option value="最優先">最優先</option>
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
        </select>
        <button className="button is-link mt-5">登録</button>
      </div>
    </div>
  </form>
);

export default Form;