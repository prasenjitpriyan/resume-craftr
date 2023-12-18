import React, { useState } from "react";

const School = () => {

  const [school, setSchool] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [schoolDescription, setSchoolDescription] = useState("")

  return (
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="school"
        >
          Title
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
          name="school"
          type="text"
          placeholder="School Name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="year"
        >
          Year
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
          name="year"
          type="text"
          placeholder="2003"
          value={schoolYear}
          onChange={(e) => setSchoolYear(e.target.value)}
        />
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          required
          name="description"
          type="text"
          placeholder="Higher Secondary"
          value={schoolDescription}
          onChange={(e) => setSchoolDescription(e.target.value)}
        />
      </div>
    </div>
  )
}

export default School
