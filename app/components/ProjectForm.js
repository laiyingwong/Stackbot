import React from 'react'

export default function ProjectForm (props) {
  const {title, priority, buttonName, handleSubmit, handleChange } = props;

  return (
    <div className="project-form row justify-content-center">

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="title">Project Title:</label>
          <input className="form-control" name="title" value={title} placeholder="required" onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority Level (1-10): </label>
          <input className="form-control" type="number" name="priority" value={priority} max="10" min="1" onChange={handleChange}/>
        </div>
        <br />

        <button className="btn btn-info" type="submit">{buttonName}</button>

      </form>

    </div>
  )
}