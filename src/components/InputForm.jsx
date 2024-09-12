import React, { useState } from "react";

export const InputForm = ({ taskList, setTastList }) => {
  const [inputText, setInputText] = useState("");

  const hancleSubmit = (e) => {
    e.preventDefault();

    if (inputText.length === 0) {
      return;
    }

    /* inputに打ち込んだ文字をタスクを追加する */
    setTastList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);

    /* 入力した文字を消す */
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={hancleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
