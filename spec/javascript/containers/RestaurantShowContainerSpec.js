import RestaurantShowContainer from '../../../app/javascript/react/containers/RestaurantShowContainer';
import fetchMock from 'fetch-mock';

describe('RestaurantShowContainer', () => {
  let wrapper;
  let restaurant;

  beforeEach(() => {
    restaurant = {
      restaurant: {
        id: 1,
        name: "Red Arrow Diner",
        address: "52 Shady Lane",
        phone_number: "603-867-5309",
        email: "foo@foo.com",
        website: "www.foo.com",
        cuisines:[
          {id: 11, name: "American"}
        ]
      }
    };
    fetchMock.get(`/api/v1/restaurants/${restaurant.restaurant.id}`, {
      status: 200,
      body: restaurant
    });
    wrapper = mount(
      <RestaurantShowContainer
        params={{id: 1}}
      />
    );
  });

  afterEach(fetchMock.restore);

  describe('show page', () => {
    it('should contain restaurant name', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('Red Arrow Diner');
        done();
      }, 0);
    });

    it('should contain a list of restaurants that associate with the restaurant', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1').text()).toBe('Red Arrow Diner');
        done();
      }, 0);
    });

    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('li.rest-address').text()).toBe('52 Shady Lane');
        done();
      }, 0);
    });

    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('li.rest-email').text()).toBe('foo@foo.com');
        done();
      }, 0);
    });

    it('renders a list item for each item returned from the api call', (done) => {
      setTimeout(() => {
        expect(wrapper.find('li.rest-phone-number').text()).toBe('603-867-5309');
        done();
      }, 0);
    });
  });
});
