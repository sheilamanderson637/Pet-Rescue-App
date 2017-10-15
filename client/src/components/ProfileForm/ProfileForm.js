import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Profile = () => {
  return (
		<ListGroup>
			<ListGroupItem><strong>Name:</strong> Joe Nobody</ListGroupItem>
			<ListGroupItem><strong>Address:</strong> 339 East Chicago Avenue, Chicago, IL 60611</ListGroupItem>
			<ListGroupItem><strong>Phone:</strong> 312-123-4567</ListGroupItem>
			<ListGroupItem><strong>Email:</strong> joe.nobody@gmail.com</ListGroupItem>
		</ListGroup>
	);
}

  export default Profile;