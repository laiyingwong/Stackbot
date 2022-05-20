import React from 'react'

export default function ProjectForm (props) {
  const {title, priority, buttonName, handleSubmit, handleChange } = props;
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Project Title:</label>
        <input name="title" value={title} onChange={handleChange}/>
        <br />
        <label htmlFor="priority">Priority Level (1-10): </label>
        <input type="number" name="priority" value={priority} max="10" min="1" onChange={handleChange}/>
        <br />
        <button type="submit">{buttonName}</button>
    </form>
  )
}