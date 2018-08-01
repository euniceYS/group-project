import RestaurantListTile from '../../../app/javascript/react/components/RestaurantListTile';
import fetchMock from 'fetch-mock';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('RestaurantListTile', () => {
  let restaurant = {
    id : 1,
    name : "Falafels",
    address : "123 Main St",
    phone_number : "123-345-6789",
    email : "ert@ert.com",
    website : "ert@gmail.com"
  }

  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <RestaurantListTile
      key={restaurant.id}
      id={restaurant.id}
      name={restaurant.name}
      address={restaurant.address}
      phone_number={restaurant.phone_number}
      email={restaurant.email}
      website={restaurant.website}
      />
    );
  });

  it('Should have name of restaurant', () => {
    expect(wrapper.text()).toContain("Falafels");
  });

});
