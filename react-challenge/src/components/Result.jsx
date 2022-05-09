import React from 'react'

export default function Result(props) {
    console.log(props);
    return (
        <div>  
            <li>
                <a target='blank' href={props.quote.clone_url}> {props.quote.name}  </a> :  {props.quote.description}
            </li>    
        </div>
    )
}
