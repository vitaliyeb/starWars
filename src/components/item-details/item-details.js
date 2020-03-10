import React, { Component } from 'react';
import SwapiService from "../../services/swapi-services";
import './person-details.css';
import Spinner from "../spinner/spinner";
import ItemView from "./item-view";
import ErrorMessage from "../error-message/error-message";



const Record = ({item, field, label}) => {
  return(
      <li className="list-group-item">
        <span className="term">{label}:</span>
        <span>{ item[field] }</span>
      </li>
  )
}
export {
  Record
}



export default class ItemDetails extends Component {
  constructor(){
    super();

    this.state = {
      item: null,
      loader: false,
      image: null,
      error: false
    }

    this.swapiService = new SwapiService();
  }

  onError = ()=> {
      this.setState({error: true})
  }

  updateItem = () => {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) return;
    this.setState({loader: true, item: {}})

    getData(itemId)
        .then((item)=> {
          this.setState({item, loader: false, image: getImageUrl(item)})
        })
        .catch(()=>this.onError())
  }

  componentWillMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId){
      this.updateItem()
    }
  }

  render() {
    const { item, loader, error, image } = this.state;

    if (!this.state.item) return (<span>Select item from column left</span>)

    const itemView = (
        <ItemView item={item} image={image} >
          {this.props.children}
        </ItemView>
    )


    const content = (item && !loader) ? itemView : null;
    const loading = (loader && !error) ? < Spinner /> : null;
    const errorComponent =  error ? <ErrorMessage/> : null;


    return (
        <div className="col-md">
          <div className="person-details card">
            { content }
            { loading }
            { errorComponent }
          </div>
        </div>
    )
  }
}
