import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../util/validate';
import renderField from '../util/renderField';

class LoginData extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
          <form onSubmit={handleSubmit}>
              <div>
                <ul className="form-fields">
                  <li>
                    <Field name="email" component={renderField} label="Email"/>
                  </li>
                  <li>
                    <Field name="password" component={renderField} label="Password" type="password"/>
                  </li>
                  <li>
                    <Field name="confirmpassword" component={renderField} label="Confirm Password" type="password" />

                  </li>
                  <li className="form-footer">
                      <button type="submit" className="next">Next &rarr;</button>
                  </li>
                </ul>
              </div>
          </form>
        )
    }
}

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, //unregister fields on unmount
  validate,
})(LoginData);
