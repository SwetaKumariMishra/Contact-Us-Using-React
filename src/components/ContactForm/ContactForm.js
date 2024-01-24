import React, { useState } from "react";
import "./style.css";
import Button from "../Button/Button";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {

  const [name, setName] = useState("Sweta");
  const [email, setEmail] = useState("Sweta@gmail.com");
  const [text, setText] = useState("Swetahhh");

  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <section className="container">
      <div className="contact_form">
        <div className="top_btn">
          <Button text="VIA SUPPORT CHAT" icon={<RiMessage2Fill size={30} />} />
          <Button text="VIA CALL" icon={<IoIosCall size={30} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail size={30} />}
        />

        <form onSubmit={onSubmit}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className="form_control">
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'end', }}>
          <Button text="SUBMIT BUTTON"></Button>
          </div>
        
        <div>
          {name + " " + email + " " + text}
        </div>

        </form>
      </div>
      <div className="contact_image">
        <img src="/images/contact.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
