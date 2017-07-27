import React,{Component} from 'react';
import { reduxForm } from 'redux-form';

class Dashboard extends Component {
    render(){
      const { handleSubmit } = this.props;
      return (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="okIcon"></div>
              <button type="submit" className="dashboard">Go To Dashboard &rarr;</button>
            </div>
          </form>
        )
    }
}

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
})(Dashboard);
