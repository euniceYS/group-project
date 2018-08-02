import RestaurantShowContainer from '../../../app/javascript/react/containers/RestaurantShowContainer';
import RestaurantReviewFormContainer from '../../../app/javascript/react/containers/RestaurantReviewFormContainer';
import RestaurantTile from '../../../app/javascript/react/components/RestaurantTile';
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
          {
            id: 11,
            name: "American"
          }
        ],
        reviews: [
          {
            "id": 1,
            "restaurant_id": 1,
            "user_id": 1,
            "body": "love the food and the ambience. Higly recommend",
            "rating": 5,
            "title": "Food is delicious",
            "user": "Simon",
            "created_date": "July 31 2018"
          }
        ]
      }
    };
    fetchMock.get(`/api/v1/restaurants/${restaurant.restaurant.id}`, {
      status: 200,
      body: restaurant,
      reviews: restaurant.reviews
    });
    wrapper = mount(
      <RestaurantShowContainer
        params={{id: 1}}
      />
    );
  });

  afterEach(fetchMock.restore);

  describe('Restaurant Show Page', () => {

    it('should have the specified initial state', () => {
      expect(wrapper.state()).toEqual({
        restaurant: {},
        reviews:[]
      });
    });

    it('should render one RestaurantTiles given the mount setup', () => {
      wrapper.setState({
        restaurant: {
           id: 1,
           name: "Red Arrow Diner",
           address: "52 Shady Lane",
           phone_number: "603-867-5309",
           email: "foo@foo.com",
           website: "www.foo.com",
           cuisines:[
             {
               id: 11,
               name: "American"
             }
           ],
           reviews: [
             {
               "id": 1,
               "restaurant_id": 1,
               "user_id": 1,
               "body": "love the food and the ambience. Higly recommend",
               "rating": 5,
               "title": "Food is delicious",
               "user": "Simon",
               "created_date": "July 31 2018"
             }
           ]
        }
      });
      setTimeout(() => {
        expect(wrapper.find(RestaurantTile).length).toEqual(1);
      }, 0);
    });

    it('Props should be passed down to RestaurantTile and we can see the restaurant Name', () => {
      wrapper.setState({
        restaurant: {
           id: 1,
           name: "Red Arrow Diner",
           address: "52 Shady Lane",
           phone_number: "603-867-5309",
           email: "foo@foo.com",
           website: "www.foo.com",
           cuisines:[
             {
               id: 11,
               name: "American"
             }
           ],
           reviews: [
             {
               "id": 1,
               "restaurant_id": 1,
               "user_id": 1,
               "body": "love the food and the ambience. Higly recommend",
               "rating": 5,
               "title": "Food is delicious",
               "user": "Simon",
               "created_date": "July 31 2018"
             }
           ]
        }
      });
      setTimeout(() => {
        expect(wrapper.find(RestaurantTile).first().props().name).toEqual('Red Arrow Diner');
      }, 0);
    });


  });
});
