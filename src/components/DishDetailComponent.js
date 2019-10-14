import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

  render() {
    let dish = this.props.dish;
    if (dish != null)
      return(
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
      );
    else
      return(
          <div></div>
      );
  }
}

export default DishDetail;
