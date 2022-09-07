import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/Custom/textinput";
import Contact from "../../assets/images/contactUs.png";
import Appointment from "../Home/contact";
import swal from "sweetalert";

import { Reviews } from "../../services/services";
const ContactUs = () => {
  const contactUsSchema = Yup.object().shape({
    name: Yup.string().required("Please enter name"),
    email: Yup.string()
      .required("Please enter email address")
      .email("Enter valid email address"),
    message: Yup.string().required("Please enter message"),
  });

  const handleSubmit = (values) => {
    // console.log("Call Form data API here");
    const data = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    Reviews(data)
      .then((response) => {
        swal(
          "Thankyou for share Feedback",
          "You clicked the button!",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <section className="row no-gutter align-items-center">
          <div className="col-lg-12 text-center p-0 d-flex align-items-center">
            <img
              className="img-fluid position-relative col-lg-12"
              src={Contact}
              alt="contact"
            />
            <h3 className="w-100 position-absolute text-white my-auto text-5xl">
              Contact Us
            </h3>
          </div>
        </section>
      </div>
      <div>
        <h4 className="text-black font-bold text-2xl p-20 text-center">
          Do you have any suggestions for us? Do you want to know more about our
          services or hygiene facilities? Then, just fill out this form, and we
          will answer all your questions as soon as possible.
        </h4>
      </div>

      <Appointment />

      <div className="bg-slate-300 p-10 ">
        <Row>
          <Col>
            <h3 className="text-black text-2xl font-bold">Drop us a Review</h3>
            <div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                validationSchema={contactUsSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, values, handleChange }) => (
                  <Form>
                    <Row>
                      <Col>
                        <CustomInput
                          type="text"
                          placeholder="Name"
                          name="name"
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          style={{
                            borderWidth: 1,
                            borderColor: "gray",
                            fontSize: "20px",
                          }}
                        />
                      </Col>
                      <Col>
                        <CustomInput
                          type="text"
                          placeholder="Email i'd"
                          name="email"
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          style={{
                            borderWidth: 1,
                            borderColor: "gray",
                            fontSize: "20px",
                          }}
                        />
                      </Col>
                    </Row>

                    <CustomInput
                      type="textarea"
                      placeholder="Type Your Message..."
                      name="message"
                      values={values}
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                      style={{
                        borderWidth: 1,
                        borderColor: "gray",
                        height: "200px",
                        fontSize: "20px",
                      }}
                    />
                    <Button className="text-white bg-black text-xl">
                      Send
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col className="flex justify-center mt-auto ">
            {/* eslint-disable-next-line */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5466036795256!2d72.50523751476986!3d23.040413884944044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4abadb7383%3A0x1452a3fd34312d00!2sSecret%2017%20Hair%20And%20Nails%20Studio!5e0!3m2!1sen!2sin!4v1661230312544!5m2!1sen!2sin"
              width="700px"
              height="450px"
              className="flex justify-center m-2"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default ContactUs;
