import React, { Component } from 'react'

export class Product extends Component {

  onAddToCart = () => {
    alert(this.props.children + ' - ' + this.props.price);
    console.log(this.props.children + ' - ' + this.props.price);
  }

  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image} alt="" />
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>
                {this.props.price} VNĐ
              </p>
              <p>
                <button type="button" className="btn btn-primary" onClick={ this.onAddToCart }>
                  Mua ngay
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
