import React, { Component } from 'react';
import LoginData from './LoginData';
import AccountDetails from './AccountDetails';
import Dashboard from './Dashboard';
import showResults from "../util/showResults";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  showStep() {
    const { page } = this.state;

      switch (page) {
        case 1:
          return <LoginData
                                saveValues={this.saveValues}
                                onSubmit={this.nextPage} />
        case 2:
          return <AccountDetails
                                previousPage={this.previousPage}
                                onSubmit={this.nextPage}
                                saveValues={this.saveValues} />
        case 3:
          return <Dashboard
                               previousPage={this.previousPage}
                               onSubmit={showResults} />
        default:
              return <div>error</div>
      }
  }

  render() {
    var style = {
      width : (this.state.page / 3 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">{ this.state.page === 3 ? 'Thank You' : 'Signup' }</span>
        <div className="progress-wrapper"><div className="progress" style={style}></div></div>
        {this.showStep()}
      </main>
    )
  }
}


export default Registration;
