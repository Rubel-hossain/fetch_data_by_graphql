import "./App.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const graph_query = gql`
  query usersQuery {
    users {
      data {
        id
        name
        username
        email
        phone
        website
      }
    }
  }
`;
function App() {
  const { loading, data } = useQuery(graph_query);
  if (!loading) {
    const users_array = data.users.data;
    console.log(users_array[0]);
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header className="py-4">
                <h2>Welcome in Grapgql Project By Rubel Hossain</h2>
                <h5>Users Lists</h5>
              </header>
              <div className="responsive-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Website Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users_array.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h2> Please Wait Loading...........</h2>
      </>
    );
  }
}

export default App;
