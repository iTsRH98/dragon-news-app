import React, { use } from "react";

const categoryPromise = fetch("./categories.json").then((res) => res.json());
console.log(categoryPromise);

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1>this is categories</h1>
    </div>
  );
};

export default Categories;
