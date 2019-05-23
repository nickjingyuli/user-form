import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import "../styles/User.scss";

class UserLogin extends Component {
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
      labelAlign: "left",
      hideRequiredMark: true
    };
    return (
      <div>
        <h1>PROJECT TITLE</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Item colon={false} label="Username or Email">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item colon={false} label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to="/recovery">
          <p>Forgot password?</p>
        </Link>
        <div className="to-signup">
          <p>Don't have an account yet? </p>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    );
  }
}
const WrappedLoginForm = Form.create({ name: "register" })(UserLogin);
export default WrappedLoginForm;
