import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[address, setAddress] = useState('');
  const[city, setCity] = useState('');
  const[dob, setDOB] = useState('');


  const handleFirstNameChange=(event)=>{
    setFirstName(event.target.value); 
  }
  const handleLastNameChange=(event)=>{
    setLastName(event.target.value);
  }
  const handleEmailChange=(event)=>{
    setEmail(event.target.value);
  }
  const handleAddressChange=(event)=>{
    setAddress(event.target.value);
  }
  const handleCityChange=(event)=>{
    setCity(event.target.value);
  }
  const handleDOBChange=(event)=>{
    setDOB(event.target.value);
  }


  const[row, setRow] = useState([]);

  const handleBtnClick = () =>{
    alert( lastName);
    const newRow = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      address:address,
      city:city,
      dob:dob
    }

    setRow([...row, newRow]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setCity('');
    setDOB('');
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          {/* input fields */}
          <div className="col-4 mt-5">
            
            <div className="row">
              <h6 className="mb-3">YOUR INFO</h6>
            </div>
            <div className="row g-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  aria-label="Address"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  aria-label="City"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-6">
                <input
                  type="date"
                  class="form-control"
                  placeholder="DOB"
                  aria-label="DOB"
                  value={dob}
                  onChange={handleDOBChange}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="col-4"
                  onClick={handleBtnClick}
                  style={{
                    background: "linear-gradient(to left, #FFC371, #FF5F6D)",
                    border: "none",
                    height: "37px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontFamily: "calibri",
                    fontSize: "18px",
                  }}
                  type="button"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
          {/* table content */}
          <div className="col-8 mt-5">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>DOB</th>
                </tr>
              </thead>
              <tbody id="tblInfo">
                <tr>
                  <td>Amila</td>
                  <td>Ishara</td>
                  <td>am@gmail.com</td>
                  <td>10/2 Galle Rd,</td>
                  <td>Colombo</td>
                  <td>1999-07-09</td>
                </tr>
                <tr>
                  <td>Ushan</td>
                  <td>Fdo</td>
                  <td>ush@gmail.com</td>
                  <td>15/A Kandy Rd,</td>
                  <td>Negombo</td>
                  <td>2001-10-19</td>
                </tr>
                {row.map((r)=>(
                    <tr>
                      <td>{r.firstName}</td>
                      <td>{r.lastName}</td>
                      <td>{r.email}</td>
                      <td>{r.address}</td>
                      <td>{r.city}</td>
                      <td>{r.dob}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManager
