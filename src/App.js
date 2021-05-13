import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    textarea: "",
  });
  const [check, setCheck] = useState({ checkbox: false });
  const [radiostate, setradiostate] = useState({ radio: false });

  function formChange(e) {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitForm(e) {
    setForm({
      textarea: "",
    });

    setCheck(false);
    setradiostate(false);

    e.preventDefault();
  }

  return (
    <form>
      <textarea
        name="textarea"
        value={form.textarea}
        onChange={formChange}
        id=""
        cols="30"
        rows="10"
      >
        demo
      </textarea>

      <input
        name="radio"
        value={form.radio}
        checked={radiostate}
        onChange={() => setradiostate(!radiostate)}
        type="radio"
      />

      <input
        name="checkbox"
        value={check.checkbox}
        checked={check}
        type="checkbox"
        onChange={() => setCheck(!check)}
      />

      <button onClick={submitForm}>Submit</button>
    </form>
  );
}

export default App;
