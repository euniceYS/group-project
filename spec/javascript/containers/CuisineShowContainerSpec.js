import CuisineShowContainer from '../../../app/javascript/react/containers/CuisineShowContainer';
import fetchMock from 'fetch-mock';

describe('CuisineShowContainer', () => {
  let wrapper;
  let cuisine;

  beforeEach(() => {
    cuisine = {
      cuisine: {
        id: 1,
        name: 'Chinese',
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
    it('should contain cuisine name', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('Chinese');
        done();
      }, 0);
    });

    it('should contain a list of restaurants that associate with the cuisine', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h2').text()).toBe('Red Arrow Diner');
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
        expect(wrapper.find('h4').text()).toBe('603-867-5309');
        done();
      }, 0);
    });
  });
});
