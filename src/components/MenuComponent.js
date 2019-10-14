import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
        selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  renderComments(dish){
    if(dish != null){
      return(
        dish.comments.map(function(comment){
          return(
            <div>
              {comment.comment}
              <div class='clearfix'></div>
              <br/>
              {'-- '}
              {comment.author}
              {', '}
              {(new Date(comment.date)).toLocaleDateString('en-US', DATE_OPTIONS)}
              <br/>
              <br/>
            </div>
            );
        })
      );
    }
  }

  renderCommentsHeading(dish){
    if(dish != null){
      return(
        <h4>Comments</h4>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div  className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
          <div className="row">
            <div  className="col-12 col-md-5 m-1">
              <DishDetail dish={this.state.selectedDish}/>
            </div>
            <div  className="col-12 col-md-5 m-1">
              {this.renderCommentsHeading(this.state.selectedDish)}
              {this.renderComments(this.state.selectedDish)}
            </div>
          </div>
      </div>
    );
  }
}

export default Menu;
