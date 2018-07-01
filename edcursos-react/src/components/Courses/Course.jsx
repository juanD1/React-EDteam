import React from "react";

const Course = props => (
  <li className="CoursesList-item">
    <a className="CoursesList-link" href={props.url} target="_blank">
      <figure>
        <img src={props.poster} alt={props.name} />
        <figcaption />
      </figure>
    </a>
    <section>
      <p>
        <i className="fa fa-graduation-cap" />
        {props.teacher}
      </p>
      <p>
        <i className="fa fa-calendar-o" />
        {props.date}
      </p>
      <p>
        <b>
          <i className="fa fa-dollar" />
          {props.amount}
        </b>
        <b>
          <i className="fa fa-key" />
          {props.id}
        </b>
      </p>
      <p>
        <i className="fa fa-tags" />
        {props.categories.map(
          (cat, index, arr) => (index === arr.length - 1 ? cat : `${cat}, `)
        )}
      </p>
    </section>
  </li>
);

export default Course;
