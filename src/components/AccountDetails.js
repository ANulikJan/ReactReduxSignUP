import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../util/validate';
import renderField from '../util/renderField';

const heared =['Friends','Social Network','TV'];

class AccountDetails extends Component {
    render() {
      const { handleSubmit, previousPage } = this.props;
      return (
        <form onSubmit={handleSubmit}>
            <div>
              <ul className="form-fields">
                <li>
                  <label>Date Of Birth</label>
                  <Field name="dob" type="dob" component={renderField} label="DD" className="col-3"/>
                  <Field name="mob" type="dob"  component={renderField} label="MM" className="col-3"/>
                  <Field name="yob" type="dob" component={renderField} label="YYYY" className="col-3"/>
                  <div className="clearfix"></div>
                </li>
                <li>
                  <label>Gender</label>
                    <div className="switch-field">
                      <Field name="gender" id="gender-1" component={renderField} type="radio" value="male" label="Male" className="col-3"/>
                      <Field name="gender" id="gender-2" component={renderField} type="radio" value="female" label="Female" className="col-3"/>
                      <Field name="gender" id="gender-3" component={renderField} type="radio" value="unspecified" label="Unspecifined" className="col-3"/>
                      <Field name="gender" component={renderField} type="error" />
                      <div className="clearfix"></div>
                    </div>
                </li>
                <li>
                  <Field name="age" id="age" component={renderField} label="Age" />
                </li>
                <li>
                  <label>Where did you here about this?</label>
                  <Field name="hearedFrom" component={renderField} option={heared} type="select"/>
                </li>
                <li className="form-footer">
                    <button type="button" className="previous" onClick={previousPage}>Back</button>
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
  forceUnregisterOnUnmount: true,
  validate,
})(AccountDetails);
