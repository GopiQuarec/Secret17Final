import React, { useEffect } from "react";
import { Table, Card, CardBody } from "reactstrap";
import { GetMembership } from "../../../services/services";
import Memberships from "./membership";

const MembershipData = () => {
  const [membershipData, setMembershipData] = React.useState([]);

  const GetAppontmentData = () => {
    GetMembership()
      .then((response) => {
        setMembershipData(response && response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAppontmentData();
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <Card className="container shadow-lg  border-0 my-5 ">
          <CardBody>
            <h3 className="flex justify-center text-2xl">Membership</h3>
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="thead-light">
                  <tr className="text-center">
                    <th style={{ padding: 20 }}>Sr No.</th>
                    <th style={{ padding: 20 }}>Phone Number</th>
                    <th style={{ padding: 20 }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {membershipData &&
                    membershipData.map((data, key) => {
                      return (
                        <tr key={key} className="text-center">
                          <Memberships
                            index={key}
                            membershipData={data}
                            GetAppontmentData={GetAppontmentData}
                          />
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default MembershipData;
