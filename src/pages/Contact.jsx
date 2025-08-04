import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPaperPlane
} from "react-icons/fa";
import "../styles/Contact.css"; // Make sure to create this CSS file
import { Button, Card, Col, Form, Input, message, Row } from "antd";

const { TextArea } = Input;
const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    message.success("Message sent successfully!");
    form.resetFields();
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">
          Get <span className="highlight">In Touch</span>
        </h2>
        <div className="divider"></div>
        <p className="subtitle-conatct">Feel free to contact me anytime</p>

        <div className="contact-wrapper">
          {/* Left Side - Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <Button icon={ <FaEnvelope />} shape="circle"  style={{marginRight:"12px"}}></Button>
             
              <div>
                <h4>Email</h4>
                <p>akashchavhan512786@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
  <Button icon={ <FaPhoneAlt  />} shape="circle"  style={{marginRight:"12px"}}></Button>
              
              <div>
                <h4>Phone</h4>
                <p>+91 9657401872</p>
              </div>
            </div>
            <div className="info-item">
               <Button icon={ <FaMapMarkerAlt  />} shape="circle"  style={{marginRight:"12px"}}></Button>
             
              <div>
                <h4>Location</h4>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
           
    <div className="contact-form">
        <Card variant="outlined">
      <h2 style={{textAlign:"center",color:"cyan",padding:"10px"}}>Send Message</h2>
<hr />
<br />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: "Please enter a subject" }]}
        >
          <Input placeholder="Enter subject" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <TextArea rows={5} placeholder="Enter your message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="send-btn">
            Send Message <FaPaperPlane style={{ marginLeft: 8 }} />
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
