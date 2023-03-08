import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { count, count2 } = this.state;
    return (
      <>
        <h1>Profile Class Based Component</h1>
        <h3>Name:{this.props.name}</h3>
        <h3>Count:{count}</h3>
        <h3>Count2:{count2}</h3>
        {/* <h3>{this.state.count}</h3> */}

        {/* we do not mutate state directly
        never do something like this.state =something */}
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          SetCountClass
        </button>
      </>
    );
  }
}

export default Profile;
