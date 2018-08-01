import RestaurantFormContainer from '../../../app/javascript/react/containers/RestaurantFormContainer';
import fetchMock from 'fetch-mock';

describe('RestaurantFormContainer', () => {
  let wrapper;
  let restaurant;

  beforeEach(() => {
    restaurant = {
      id: 1,
      name: "Red Arrow Diner",
      address: "52 Shady Lane",
      phone_number: "603-867-5309",
      email: "foo@foo.com",
      website: "www.foo.com"
    };
    wrapper = mount(
        <RestaurantFormContainer
          cuisine_id = {1}
          updateRestaurantsList = {console.log('updateRestaurantsList')}
        />
    );
  });

  afterEach(fetchMock.restore)

  describe('Restaurant Form', () => {
    it('Has a title Restaurant Form', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch('Restaurant Form');
        done();
      }, 0);
    });

    it('renders add file dropzone component', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toContain("Dropped files");
        done();
      }, 0);
    });

    it('successfully adds a restaurant', (done) => {
      fetchMock.post('/api/v1/restaurants', {
        status: 201,
        body:   {restaurant: { id: 1, name: "Red Arrow Diner", address: "52 Shady Lane", phone_number: "603-867-5309", email: "foo@foo.com", website: "www.foo.com" }}
      });
      wrapper.setState({
          name: 'New Foods',
          street: '123 Main St',
          city: 'Boston',
          state: 'MA',
          zip: '01106',
          phoneNumber: '12345',
          email: 'try@trynt.com',
          website: 'http://www.html.com'
        })
      wrapper.find('.submit-button').simulate('submit')
      setTimeout(() => {
        setTimeout(() => {
          expect(wrapper.text()).toMatch('Restaurant added successfully!');
          done()
        })
      }, 0)
    })

    it('unsuccessfully adds a restaurant and doesnt fill out a required field (zip code)', (done) => {
      fetchMock.post('/api/v1/restaurants', {
        status: 201,
        body:   {restaurant: { id: 1, name: "Red Arrow Diner", address: "52 Shady Lane", phone_number: "603-867-5309", email: "foo@foo.com", website: "www.foo.com" }}
      });
      wrapper.setState({
          name: 'New Foods',
          street: '123 Main St',
          city: 'Boston',
          state: 'MA',
          zip: '',
          phone_number: '12345',
          email: 'try@trynt.com',
          website: 'http://www.html.com'
        })
      wrapper.find('.submit-button').simulate('submit')
      setTimeout(() => {
        setTimeout(() => {
          expect(wrapper.text()).toMatch('You must enter a zip');
          done()
        })
      }, 0)
    })


    it('handles server error 422 by rendering error in form', (done) => {
      fetchMock.post('/api/v1/restaurants', {
        status: 422,
        body:   {errorList: {error: "Unable to save your restaurant!"}}
      });
        wrapper.setState({
          name: 'New Foods',
          street: '123 Main St',
          city: 'Boston',
          state: 'MA',
          zip: '01106',
          phoneNumber: '12345',
          email: 'try@trynt.com',
          website: 'http://www.html.com'
        })
        wrapper.find('.submit-button').simulate('submit')
        setTimeout(() => {
          expect(wrapper.text()).toMatch('Unable to save your restaurant!');
          done()
        }, 0)
    })

  });
})
