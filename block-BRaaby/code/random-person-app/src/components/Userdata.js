import React from 'react';


export default class Userdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      displayValue: ''
    }
  }

  getRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ user: data.results[0] }))
  }

  componentDidMount() {
    this.getRandomUser();
  }

  setDisplayFullName = () => {
    const { user: { name: { title, first, last } } } = this.state;
    this.setState({
      displayValue:
        { value: `${title} ${first} ${last}`, type: <span>My name is</span> }
    });
  };

  displayEmail = () => {
    const { user: { email: email } } = this.state;
    this.setState({
      displayValue:
        { value: `${email}`, type: <span>My email is</span> }
    })
  };
  displayAge = () => {
    const { user: { dob: { age = '' } } } = this.state;
    this.setState({
      displayValue:
        { value: `${age}`, type: <span>My age is</span> }
    })
  };
  displayStreet = () => {
    const { user: { location: { street: { number, name } } } } = this.state;
    this.setState({
      displayValue:
        { value: `${number} ${name}`, type: <span>My street is</span> }
    })
  };
  displayPhone = () => {
    const { user: { phone: phone } } = this.state;
    this.setState({
      displayValue:
        { value: `${phone}`, type: <span>My phone number is</span> }
    })
  };
  displayPassword = () => {
    const { user: { login: { password } } } = this.state;
    this.setState({
      displayValue:
        { value: `${password}`, type: <span> My password is</span> }
    })
  };


  render() {
    const user = this.state.user;

    if (!user) {
      return <h2> Loading... </h2>;
    }
    return (
      <>
        <div className="main-container">
          <div className="container">
          <hr/>
            <div>
              <div className="img-container">
                <img src={user.picture.large} alt="" />
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
              onClick={this.getRandomUser}>
              RANDOM USER</button>
          </div>
        </div>
      </>

    )
  }
}


