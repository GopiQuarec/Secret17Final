import React from "react";
import Logo from "../../assets/images/logoDark.png";
import Instagram from "../../assets/icons/Instagram.jpg";
import Facebook from "../../assets/icons/Facebook.png";
import { Button } from "reactstrap";
import CustomInput from "../../components/Custom/textinput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Membership } from "../../services/services";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";


import "./footer.css";

// import "../../styles/sell_machine.css";

const FooterDark  = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const mambershipSchema = Yup.object().shape({
    phonenumber: Yup.string()
      .required("Please enter a number")
      .matches(phoneRegExp, "Please enter valid phone number")
      .min(10, "Phone number must be 10 digits or more.")
      .max(13, "Phone number should not be more than 13 digits"),
  });
  const handleSubmit = (values) => {
    const data = {
      number: values.phonenumber,
    };
    Membership(data)
      .then((response) => {
        swal("Thanks For your response ", "You clicked the button.", "success");
      })
      .catch((error) => swal("There was an error", error.message, "danger"));
  };

  return (
    <React.Fragment>
      <div className="footer min-w-full bg-black">
        {/* <hr className="w-full border-black border " /> */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:md:grid-cols-4 p-5">
          <div className="md:block my-auto mb-5 lg:mb-0 ml-10 mr-20">
            <img
              className="h-auto bg-cover bg-center bg-no-repeat"
              src={Logo}
              alt="Logo"
            />
            <h4 className="text-white mt-10 text-xl">
              Secret 17 is a unisex <br /> beauty salon based in Ahmedabad.{" "}
              <br /> It is a place where you can pamper <br /> yourself with a
              new look every day
            </h4>
          </div>

          <div className="ml-20">
            <div className="animate-fade-in-down mb-1 text-xl text-white font-bold mt-2 ">
              Important Links
            </div>
            <div className="animate-fade-in-down mb-8 text-lg text-white flex flex-col">
            <NavLink to="/" className="text-xl">Home</NavLink>
              <NavLink to="/services" className="text-xl">Our Services</NavLink>
              <NavLink to="/portfolio" className="text-xl">Portfolio</NavLink>
              <NavLink to="/blogs" className="text-xl">Blogs</NavLink>
              <NavLink to="/about" className="text-xl">About Us</NavLink>
              <NavLink to="/contact" className="text-xl">Contact us</NavLink>
            </div>
          </div>

          <div className="mr-20">
            <div className="animate-fade-in-down mb-1  text-xl text-white font-bold mt-2">
              Contact Us
            </div>
            <div className="animate-fade-in-down mb-8  text-md text-white flex flex-col text-xl">
              <h4>
                <b>Address:</b> 102, Arista Bussiness Space 3, Sindhu Bhavan
                Marg, opp. HOF Showroom, Ahmedabad, Gujarat 380054
              </h4>
              <h4>
                <b>Phone:</b> 063573 63574
              </h4>
              <h4>
                <b>Email I’d:</b> secret7teen@gmail.com
              </h4>
            </div>
          </div>

          <div className="mr-20">
            <div className="animate-fade-in-down mb-1  text-xl text-white font-bold font-boldmt-2">
              Opening Hours
            </div>
            <div className="animate-fade-in-down mb-8 text-md text-white flex flex-col text-xl">
              <h4>
                <b>Monday to Friday :- </b> 10:00 am to 9:30 pm
              </h4>
              <h4>
                <b> Saturday :- </b> 10:00 am to 9:30 pm
              </h4>
              <h4>
                <b>Sunday :- </b> 10:00 am to 9:30 pm
              </h4>
            </div>

            <div className="animate-fade-in-down mb-1 text-xl text-white font-bold font-boldmt-2">
              Social Links
            </div>
            <div className="flex flex-row ml-10">
              <a href="https://www.instagram.com/secret17ahmedabad/">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/Secret17Studio">
                <img src={Facebook} alt="facebook" />
              </a>
              {/* <img src={Snapchat} alt="instagram" /> */}
            </div>

            <div className="animate-fade-in-down mb-1  mt-8 text-xl text-white font-bold font-boldmt-2">
              Salon Membership
            </div>

            <div className="flex flex-row">
              <Formik
                initialValues={{ phonenumber: "" }}
                validationSchema={mambershipSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, values, handleChange }) => (
                  <Form>
                    <CustomInput
                      type="text"
                      placeholder="Enter Your Phone Number"
                      className="border border-gray-300 w-full text-md px-2 italic"
                      values={values}
                      name="phonenumber"
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                    />
                    <Button className="bg-black text-white px-2 rounded-full  text-md">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <h4 className="flex justify-center text-white p-2 text-xl">
            Copyrights © {new Date().getFullYear()} All Rights Reserved |
            Secret17
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FooterDark ;
