import React from "react";

export default class ItemView extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {image, item: {name}, item} = this.props;
        return (
            <React.Fragment>
                <img className="person-image"
                    src={image}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child)=> {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}