import React, { Component } from 'react';
import CuisineTile from '../components/CuisineTile';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import Dropzone from 'react-dropzone';

class RestaurantFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phoneNumber: '',
      email: '',
      website: '',
      file: [],
      errors: {},
      notices: {}
    };
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleStreetUpdate = this.handleStreetUpdate.bind(this);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.handleZipUpdate = this.handleZipUpdate.bind(this);
    this.handlePhoneNumberUpdate = this.handlePhoneNumberUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handleWebsiteUpdate = this.handleWebsiteUpdate.bind(this);
    this.submitRestaurant = this.submitRestaurant.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  clearForm(event) {
    event.preventDefault();
    this.setState({
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phoneNumber: '',
      email: '',
      website: '',
      file: [],
      errors: {},
      notices: {}
    });
  }

  formIsValid() {
    let fields = ["name", "street", "city", "state", "zip", "phoneNumber"];
    let errorFields = {};
    let valid = true;
    fields.forEach((field) => {
      if (this.state[`${field}`].trim() == '') {
        let newError = {[field]: `You must enter a ${field}`};
        errorFields = Object.assign(errorFields, newError);
        valid = false;
      } else {
        delete errorFields[`${field}`];
      }
    });
    this.setState({ errors: errorFields });
    return valid;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.formIsValid()) {
      let restaurantData = new FormData();
      restaurantData.append("name", this.state.name);
      restaurantData.append("street", this.state.street);
      restaurantData.append("city", this.state.city);
      restaurantData.append("state", this.state.state);
      restaurantData.append("zip", this.state.zip);
      restaurantData.append("phone_number", this.state.phoneNumber);
      restaurantData.append("email", this.state.email);
      restaurantData.append("website", this.state.website);
      restaurantData.append("photo", this.state.file[0]);
      restaurantData.append("cuisine_id", this.props.cuisine_id);
      this.clearForm(event);
      this.submitRestaurant(restaurantData);
    }
  }

  submitRestaurant(data) {
    fetch(`/api/v1/restaurants`, {
      method: 'POST',
      credentials: 'same-origin',
      body: data
    }).then(response => {response
      if (response.ok) {
        return response;
      } else {
        throw(response);
      }
    }).then(response => {
      return response.json();
    }).then(parsedBody => {
      this.setState({notices: {notice: "Restaurant added successfully!"}});
      this.props.updateRestaurantsList(parsedBody);
    })
    .catch(error => {
      console.error(`Error in fetch`);
      return error.json();
    }).then(errorData => {
      if (errorData.errorList) {
         this.setState({ errors: Object.assign(this.state.errors, errorData.errorList) });
       }
    });
  }

  handleNameUpdate(event) {
    this.setState  ({
      name: event.target.value
    });
  }

  handleStreetUpdate(event) {
    this.setState  ({
      street: event.target.value
    });
  }

  handleCityUpdate(event) {
    this.setState  ({
      city: event.target.value
    });
  }

  handleStateUpdate(event) {
    this.setState  ({
      state: event.target.value
    });
  }

  handleZipUpdate(event) {
    this.setState  ({
      zip: event.target.value
    });
  }

  handlePhoneNumberUpdate(event) {
    this.setState  ({
      phoneNumber: event.target.value
    });
  }

  handleEmailUpdate(event) {
    this.setState  ({
      email: event.target.value
    });
  }

  handleWebsiteUpdate(event) {
    this.setState  ({
      website: event.target.value
    });
  }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file });
    } else {
      this.setState({ message: 'You can only upload one photo per restaurant.'});
    }
  }

  render() {

    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>);
      });
      errorDiv = <div className="alert-box alert round">{errorItems}</div>;
    }

    let noticesDiv;
    let noticesItems;
    if (Object.keys(this.state.notices).length > 0) {
      noticesItems = Object.values(this.state.notices).map(error => {
        return(<li key={error}>{error}</li>);
      });
      noticesDiv = <div className="alert-box notice round">{noticesItems}</div>;
    }

    return (
      <div className="rows restaurant-form wrapper">
        <h1 className=".page-title">Add New Restaurant</h1>
        {noticesDiv}
        {errorDiv}

        <form className="restaurant-form form callout" id="newRestaurantForm" onSubmit={this.handleFormSubmit}>
          <TextField
            label='Name'
            name='name'
            handlerFunction={this.handleNameUpdate}
            value={this.state.name}
            />
          <TextField
            label='Street'
            name='street'
            handlerFunction={this.handleStreetUpdate}
            value={this.state.street}
            />
          <TextField
            label='City'
            name='city'
            handlerFunction={this.handleCityUpdate}
            value={this.state.city}
            />
          <TextField
            label='State'
            name='state'
            handlerFunction={this.handleStateUpdate}
            value={this.state.state}
            />
          <TextField
            label='Zip'
            name='zip'
            handlerFunction={this.handleZipUpdate}
            value={this.state.zip}
            />
          <TextField
            label='Phone Number'
            name='phoneNumber'
            handlerFunction={this.handlePhoneNumberUpdate}
            value={this.state.phoneNumber}
            />
          <TextField
            label='Email'
            name='email'
            handlerFunction={this.handleEmailUpdate}
            value={this.state.email}
            />
          <TextField
            label='Website'
            name='website'
            handlerFunction={this.handleWebsiteUpdate}
            value={this.state.website}
            />

          <section>
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop}>
                <p>Drop your files here, or click to select files to upload.</p>
              </Dropzone>
            </div>
            <aside>
              <ul>
                {
                  this.state.file.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </section>

          <input type="submit" className="submit-button button" value="Add Restaurant" />
        </form>
    </div>
    );
  }
}

export default RestaurantFormContainer;
