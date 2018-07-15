import React from "react";
//Assets
import "./css/courses-search.css";

const CoursesSearch = props => (
  <form className="pure-form SearchForm">
    <input
      type="search"
      name="search"
      id="search"
      onChange={props.onSearch}
      placeholder="Cursos, Profesores, Categorias"
    />
    <label htmlFor="search">
      <i className="fa fa-search" />
    </label>
  </form>
);

export default CoursesSearch;
