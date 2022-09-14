import React from "react";
import moment from "moment";

const Memberships = ({ membershipData, GetAppontmentData, index }) => {
  return (
    <>
      <td style={{ padding: 20 }}>{index + 1}</td>
      <td style={{ padding: 20 }}>
        {membershipData.number ? membershipData.number : "-"}
      </td>
      <td style={{ padding: 20 }}>
        {moment(
          membershipData.date ? membershipData.date : "-"
        ).format("YYYY-MM-DD")}
      </td>
    </>
  );
};

export default Memberships;
