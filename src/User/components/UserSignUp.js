import React, { Component } from "react";
import { Form, Input, Checkbox, Button } from "antd";

class UserSignUp extends Component {
  comparePassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords are not the same");
    } else {
      callback();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 20
      },
      labelAlign: "left"
    };

    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item colon={false} label="First Name">
            {getFieldDecorator("first-name", {
              rules: [
                {
                  required: true,
                  message: "Please input your first name"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item colon={false} label="Last Name">
            {getFieldDecorator("last-name", {
              rules: [
                {
                  required: true,
                  message: "Please input your last name"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item colon={false} label="Username">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please input your username"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item colon={false} label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password"
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item colon={false} label="Confirm Password">
            {getFieldDecorator("password-confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password"
                },
                {
                  validator: this.comparePassword
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item colon={false} label="Email" hasFeedback>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail"
                },
                {
                  required: true,
                  message: "Please input your email"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("agreement", {
              valuePropName: "checked",
              rules: [
                {
                  required: true
                }
              ]
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create({ name: "register" })(UserSignUp);
export default WrappedRegistrationForm;
