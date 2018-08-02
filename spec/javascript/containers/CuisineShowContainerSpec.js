import CuisineShowContainer from '../../../app/javascript/react/containers/CuisineShowContainer';
import RestaurantFormContainer from '../../../app/javascript/react/containers/RestaurantFormContainer';
import RestaurantListTile from '../../../app/javascript/react/components/RestaurantListTile';
import fetchMock from 'fetch-mock';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('CuisineShowContainer', () => {
  let wrapper;
  let cuisine;

  beforeEach(() => {
    cuisine = {
      cuisine: {
        id: 1,
        name: 'Chinese',
        yelp_recommendation: {businesses:[]},
        restaurants: [{id: 1, name: "Red Arrow Diner", address: "52 Shady Lane", phone_number: "603-867-5309", email: "foo@foo.com", website: "www.foo.com" }]
      }
    };
    fetchMock.get(`/api/v1/cuisines/${cuisine.cuisine.id}`, {
      status: 200,
      body: cuisine
    });
    wrapper = mount(
        <CuisineShowContainer
          params={{id: 1}}
        />
    );

  });

  afterEach(fetchMock.restore);

  describe('show page', () => {

    it('should have the specified initial state', () => {
      expect(wrapper.props().params.id).toEqual(1);
    });

    it('Props should be passed down to RestaurantListTile and we can see the restaurant Name', () => {
      wrapper.setState({
          id: 1,
          name: 'Chinese',
          restaurants: [{id: 1, name: "Red Arrow Diner", address: "52 Shady Lane", phone_number: "603-867-5309", email: "foo@foo.com", website: "www.foo.com" }]
      });
      setTimeout(() => {
        expect(wrapper.find(RestaurantListTile).first().props().name).toEqual('Red Arrow Diner');
      });
    });

    it('should render one RestaurantFormContainer', () => {
      expect(wrapper.find(RestaurantFormContainer).length).toEqual(1);
    });

    it('successfully adds a restaurant', (done) => {
      fetchMock.post('/api/v1/cuisines', {
        status: 201,
        body:   {restaurant: { id: 1, name: "Red Arrow Diner", address: "52 Shady Lane", phone_number: "603-867-5309", email: "foo@foo.com", website: "www.foo.com" }}
      });
      setTimeout(() => {
        let listItemCount = wrapper.find('.restaurant_list_tile').length;
        wrapper.find('.submit-button').simulate('submit');
        setTimeout(() => {
          expect(wrapper.find('.restaurant_list_tile').length).toEqual(listItemCount);
          done();
        });
      }, 0);
    });

  });
});
