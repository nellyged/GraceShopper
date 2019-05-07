import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Row,
  Table
} from 'react-bootstrap';

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  const getBadge = isAdmin => {
    return isAdmin ? 'success' : 'primary';
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.email}</Link>
      </td>
      <td>{user.password}</td>

      <td>
        <Link to={userLink}>
          <Badge color={getBadge(user.isAdmin)}>
            {user.isAdmin ? 'Administrator' : 'User'}
          </Badge>
        </Link>
      </td>
    </tr>
  );
}

class UsersPanel extends Component {
  render() {
    const users = this.props.users;

    return (
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <h6>Users</h6>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Table hover responsive size="sm" className="table-outline">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length
                        ? users.map(user => (
                            <UserRow key={user.id} user={user} />
                          ))
                        : null}
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UsersPanel;
