import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ item }) => {
  const { id, title, image_url } = item;
  return (
    <div className="max-w-full rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900">
      <img
        src={image_url}
        alt=""
        className="saturate-200 w-full p-2 rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
        </div>
        <Link
          to={`detail/${id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default CoursesCard;
