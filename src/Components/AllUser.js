import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { getUsers, deleteuser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background-color: black;
  & > th {
    color: white;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;
const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = async () => {
    let res = await getUsers();
    setUsers(res.data);
  };
  const deleteUserDetails = async (id) => {
    await deleteuser(id);
    getAllUser();
  };
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Edit / Delete</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default AllUser;
