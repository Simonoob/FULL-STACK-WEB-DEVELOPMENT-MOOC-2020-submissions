import React from "react";

const Course = (course) => {
  return (
    <div>
      <Header course={course.course} />
      <Content course={course.course} />
      <Total course={course.course} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return <p style={{ fontWeight: "bold" }}>Total of {sum} exercises</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </div>
  );
};

export default Course;
