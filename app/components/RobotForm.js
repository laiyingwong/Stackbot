import React from 'react'

export default function RobotForm (props) {
    const { name, fuelType, fuelLevel, buttonName, handleChange, handleSubmit } = props;

    return (
      <div className="robot-form row justify-content-center">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-control" name="name" value={name} placeholder="required" required onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="fuelType">Fuel Type:</label>
            <select className="form-control" name="fuelType" value={fuelType} onChange={handleChange}>
              <option value="Electric">Electric</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fuelLevel">Fuel Level (0-100): </label>
            <input className="form-control" type="number" name="fuelLevel" value={fuelLevel} max="100" min="0" onChange={handleChange}/>
          </div>
          <br />

          <button className="robot-form-btn btn btn-info"  type="submit">{buttonName}</button>
        </form>
      </div>
    );
}
