import React from "react";

class UserForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      age: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <span>Display Name: </span><span>{this.state.name}</span>
          </div>
          <div>
            <span>Display Age: </span><span>{this.state.age}</span>
          </div>
        </div>
        <form className="mt-4 grid gap-y-2" action="">
          <label className="capitalize" htmlFor="name">name:</label>
          <input name="name" className="p-2 rounded border-2 border-gray-300" type="text" placeholder="Garry" value={this.state.name} onChange={this.handleInputChange} />
          <label className="capitalize" htmlFor="age">age:</label>
          <input name="age" className="p-2  rounded border-2 border-gray-300" type="number" placeholder="32" value={this.state.age} onChange={this.handleInputChange} />
        </form>
      </div >
    )
  }
}

export default UserForm;