import React from 'react'
import ReactMarkdown from 'react-markdown';

export default function ItemProduct(props) {

    return (
        <div className="card col-10 col-md-3 mx-3 my-3 card-custom text-center" >

            <div className=" card-body ">
                <h3 className="card-title font-weight-bold">{props.name}</h3>

                <p className="card-text text-custom">
                    <ReactMarkdown
                        source={props.url}
                        escapeHtml={false} />
                </p>

            </div>
        </div>

    )


}