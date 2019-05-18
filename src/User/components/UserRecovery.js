import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import "../styles/User.scss";

class UserRecovery extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  comparePassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords are not the same");
    } else {
      callback();
    }
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
      labelAlign: "left",
      hideRequiredMark: true
    };
    return (
      <div>
        <h1>Password Recovery</h1>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item colon={false} label="Username">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item colon={false} label="New Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true
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
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedRecoveryForm = Form.create({ name: "register" })(UserRecovery);
export default WrappedRecoveryForm;
