import React from 'react'

const ListCard = (props) => {
    return (
        <div className="card col-sm-4 pl-0 pr-0" >
            <div className="card-body">
                <h5 className="card-title">{props.idx}. {props.title}</h5>
                <p className="card-text">{props.body}</p>
            </div>
        </div>
    )
}

export default ListCard