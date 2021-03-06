import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Respnsárve por fazer a ligaão entre o react e o redux.
import { showMessage, hideMessage } from "../../store/ducks/layout";
import { saveProduct } from '../../store/fetchActions';

export default function Add() {
  const [form, setForm] = useState({ name: "", url: "" });
  const dispatch = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmint(e) {
    e.preventDefault();
    dispatch(saveProduct(form));
    setForm({ name: "", url: "" });
    dispatch(showMessage());
    setTimeout(() => {
      dispatch(hideMessage());
    }, 2500)
  }


  return (
    <form className="container mt-5" onSubmit={onSubmint}>
      <div className="form-group">
        <label>Nome</label>
        <input
          onChange={formChange}
          type="text"
          name="name"
          className="form-control"
          placeholder="Nome..."
          value={form.name}
        />
      </div>
      <div className="form-group">
        <label>URL:</label>
        <input
          onChange={formChange}
          type="text"
          name="url"
          className="form-control"
          placeholder="URL:https://cars"
          value={form.url}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}
