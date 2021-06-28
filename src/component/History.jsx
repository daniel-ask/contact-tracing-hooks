import React from "react";

export default function History(props) {
  const { data } = props;
  return (
    <div>
      <h2>DISPLAY HISTORY COMING SOON</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Street Number</th>
            <th>Street Address</th>
            <th>Suburb</th>
          </tr>
        </thead>
        <tbody>
          {data.map((location) => {
            return (
              <tr key={location.date}>
                <td>{location.date}</td>
                <td>{location.streetNumber}</td>
                <td>{location.streetAddress}</td>
                <td>{location.suburb}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
