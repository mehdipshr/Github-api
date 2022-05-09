import React, { Component } from 'react'
import axios from 'axios'
import Result from './Result'




class Repositories extends Component {
    constructor() {
        super()
        this.state = ({
            links: [],
        })
    }
    componentDidMount() {
        axios.get('http://api.github.com/users/mehdipshr/repos?client_id=9feb87019af451a837fd&client_secret=05032c35adbf757b9a5914849b83b20fc74&sort=created')
            .then((response) => {
                this.setState({
                    links: response.data
                })
            })
    }
    render() { 
        return  (
            <div>
                <div>
                    <h3>Repositories</h3>
                </div>
                {
                    <ol>
                        {
                            this.state.links.map((repos, index) => {
                                return (
                                    <div key={index} >
                                        <Result quote={repos} index={index} />                                         
                                    </div>
                                )
                            })
                        }
                    </ol>
                }
            </div>
        )
    }
}
export default Repositories
