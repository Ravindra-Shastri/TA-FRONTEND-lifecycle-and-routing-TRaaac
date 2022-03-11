import React from 'react';

export default class Userdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      displayValue: '',
      loading: false
    }
  }

  getRandomUser = () => {
    this.setState({ loading: true });
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          user: data.results[0],
          displayValue: { value: data?.results?.[0]?.email, type: 'My email is' },
          loading: false
        }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount() {
    this.getRandomUser();
  }

  setDisplayFullName = () => {
    const { user: { name: { title, first, last } } } = this.state;
    this.setState({
      displayValue:
        { value: `${title} ${first} ${last}`, type: "My name is" }
    });
  };

  displayEmail = () => {
    const { user: { email } } = this.state;
    this.setState({
      displayValue:
        { value: `${email}`, type: "My email is" }
    })
  };
  displayAge = () => {
    const { user: { dob: { age = '' } } } = this.state;
    this.setState({
      displayValue:
        { value: `${age}`, type: "My age is" }
    })
  };
  displayStreet = () => {
    const { user: { location: { street: { number, name } } } } = this.state;
    this.setState({
      displayValue:
        { value: `${number} ${name}`, type: "My street is" }
    })
  };
  displayPhone = () => {
    const { user: { phone } } = this.state;
    this.setState({
      displayValue:
        { value: `${phone}`, type: "My phone number is" }
    })
  };
  displayPassword = () => {
    const { user: { login: { password } } } = this.state;
    this.setState({
      displayValue:
        { value: `${password}`, type: 'My password is' }
    })
  };


  render() {
    const user = this.state.user;

    return (
      <>
        <div className="main-container">
          <div className="container">
            <hr />
            <div>
              <div className="img-container">
                <img src={user?.picture?.large} alt="" />
              </div>

              <div className="display">
                <p className="display-type">
                  {this.state.displayValue.type}
                </p>
                <p className="display-value">
                  {this.state.displayValue.value}
                </p>
              </div>
              <div className="icon-details">
                <p className="icon"
                  onMouseOver={this.setDisplayFullName}>
                  <i className="fa-solid fa-image-portrait">
                  </i>
                </p>

                <p className="icon"
                  onMouseOver={this.displayEmail}>
                  <i className="fa-solid fa-envelope-open">
                  </i>
                </p>

                <p className="icon"
                  onMouseOver={this.displayAge}>
                  <i className="fa-solid fa-calendar-xmark">
                  </i>
                </p>
                <p className="icon"
                  onMouseOver={this.displayStreet}>
                  <i className="fa-solid fa-road">
                  </i>
                </p>
                <p className="icon"
                  onMouseOver={this.displayPhone}>
                  <i className="fa-solid fa-phone">
                  </i>
                </p>
                <p className="icon"
                  onMouseOver={this.displayPassword}>
                  <i className="fa-solid fa-lock">
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="random-btn">
            <button
              className="btn"
              onClick={this.getRandomUser}
            >
              {this.state.loading ? "LOADING ..." : "RANDOM USER"}
            </button>
          </div>
        </div>
      </>
    )
  }
}


