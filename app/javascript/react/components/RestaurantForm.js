import React from 'react'
import TextField from './TextField'
import TextArea from './TextArea'


const RestaurantForm = (props) => {
  return (
    <form className="callout" onSubmit={props.handleFormSubmit}>
    <TextField
      label='Name'
      name='name'
      handlerFunction={props.handleNameUpdate}
      />
    <TextField
      label='Street'
      name='street'
      handlerFunction={props.handleStreetUpdate}
      />
    <TextField
      label='City'
      name='city'
      handlerFunction={props.handleCityUpdate}
      />
    <TextField
      label='State'
      name='state'
      handlerFunction={props.handleStateUpdate}
      />
    <TextField
      label='Zip'
      name='zip'
      handlerFunction={props.handleZipUpdate}
      />
    <TextField
      label='Phone Number'
      name='phone_number'
      handlerFunction={props.handlePhoneNumberUpdate}
      />
    <TextField
      label='Email'
      name='email'
      handlerFunction={props.handleEmailUpdate}
      />

      <section>
              <div className="dropzone">
                <Dropzone onDrop={this.onDrop}>
                  <p>Try dropping some files here, or click to select files to upload.</p>
                </Dropzone>
              </div>
              <aside>
                <h2>Dropped files</h2>
                <ul>
                  {
                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                  }
                </ul>
              </aside>
            </section>

      <input type="submit" value="Add Review" />
    </form>
  )
}

export default RestaurantForm;
