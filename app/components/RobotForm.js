import React from 'react'

export default function RobotForm (props) {
    const { name, fuelType, fuelLevel, buttonName, handleChange, handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" value={name} onChange={handleChange}/>
        <br />

        <label htmlFor="fuelType">Fuel Type</label>
        <select name="fuelType" value={fuelType} onChange={handleChange}>
          <option value="electric">Electric</option>
          <option value="gas">Gas</option>
          <option value="diesel">Diesel</option>
        </select>
        <br />

        <label htmlFor="fuelLevel">Fuel Level (0-100): </label>
        <input type="number" name="fuelLevel" value={fuelLevel} max="100" min="0" onChange={handleChange}/>
        <br />
        <button type="submit">{buttonName}</button>
      </form>
    );
}
