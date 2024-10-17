import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-slate-200  h-screen flex-col flex items-start p-4 capitalize">
      <Link
        rel="stylesheet"
        href=""
        className='flex items-center px-10 py-3  hover:bg-white transition justify-between"'
      >
        {" "}
        Dashboard
      </Link>
      <Link
        rel="stylesheet"
        href="/admin/course"
        className="flex items-center px-10 py-3  hover:bg-white transition justify-between"
      >
        {" "}
        manage course
      </Link>
      <Link
        rel="stylesheet"
        href="/admin/course/course-create"
        className="flex items-center px-10 py-3  hover:bg-white transition justify-between"
      >
        {" "}
        insert course
      </Link>
      <Link
        rel="stylesheet"
        href="/admin/chapter"
        className="flex items-center px-10 py-3  hover:bg-white transition justify-between"
      >
        {" "}
        manage chapter
      </Link>
      <Link
        rel="stylesheet"
        href=" /admin/chapter/chapter-create"
        className="flex items-center px-10 py-3  hover:bg-white transition justify-between"
      >
        insert chapter
      </Link>
      <Link
        rel="stylesheet"
        href="/admin/lesson"
        className="flex items-center px-10 py-3  hover:bg-white transition justify-between"
      >Manage Lesson</Link>
      <Link
        rel="stylesheet"
        href="/admin/lesson/lesson-create"
        className="flex items-center px-10 py-3  hover:bg-white transition justify-between"
      >Insert Lesson</Link>
    </div>
  );
}

export default Sidebar