import React from 'react';

const List = (props) => (
  <div className="content">
    <h3>Todo List</h3>
    <ul>
      {props.todos.map((todo, i) => {
        return <li className="p-3" key={i}>{todo.title}<span className="delete ml-3" onClick={() => props.deleteTodo(i)}></span>
        </li>
      })}
    </ul>
  </div>
);

export default List;

// 再編集
// 追加時間
// カテゴリー機能