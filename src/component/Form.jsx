import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [address, setAddress] = useState({
    streetNumber: "",
    streetAddress: "",
    suburb: "",
  });

	useEffect(() => {
		document.title = `Whatever the ${address.suburb}`;
	})

  function changeInputField(e) {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    props.addLocation({
      date: new Date().toLocaleString(),
      ...address,
    });
  };

  console.log(address);
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="streetNumber">Street Number</label>
        <input
          type="text"
          name="streetNumber"
          id="streetNumber"
          value={address.streetNumber}
          onChange={changeInputField}
        />
        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={address.streetAddress}
          onChange={changeInputField}
        />
        <label htmlFor="suburb">Suburb</label>
        <input
          type="text"
          name="suburb"
          id="suburb"
          value={address.suburb}
          onChange={changeInputField}
        />
        <input type="submit" value="Add address" />
      </form>
    </div>
  );
}
