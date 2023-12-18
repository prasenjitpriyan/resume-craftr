import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="hero bg-[#CBC9EE] inset-1 -z-10">
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-screen-md text-[#8A8BA6] pt-52">
          <h1 className="mb-5 text-5xl font-bold">Hello there: Create a Professional Resume Online</h1>
          <h1 className="mb-5 text-3xl font-semibold">Free to Use. Developed by hiring professionals</h1>
          <p className="mb-5">Hassle-free resume maker that can help you land your dream job in any industry. Trusted by job seekers and HR experts. Build your resume quickly and easily today</p>
          <button className="btn btn-primary">
            <Link to="/create">Create Resume</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

