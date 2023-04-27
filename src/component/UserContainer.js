import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
const UserContainer = () => {
  const usersData = useSelector((state) => state.users);
  const { loading, users, error } = usersData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());

    console.log(users.length);
  }, []);

  const renderUsers = () => {
    if (loading) return <p>Loading ...</p>;
    if (!loading && error) return <p>{error}</p>;
    if (!loading && !error && users)
      return (
        <div>
          {" "}
          <h2> users list</h2>
          {users.map(user => <p key={user.id}> {user.name}</p>)}
        </div>
      );
  };

  // return (
  // // <div>
  // //   {loading ? (
  // //     <p> Loading ... </p>
  // //   ) : error ? (
  // //     <p>{error}</p>
  // //   ) : (
  // //     usersData &&
  // //     users &&
  // //     users.length &&
  // //     users && (
  // //       <div>
  // //         <h1> users list</h1>
  // //         {users.map(user=><p key={user.name} > {user.name}</p>)}
  // //       </div>
  // //     )
  // //   )}
  // // </div>
  // );
  return <div>{renderUsers()}</div>;
};

export default UserContainer;

