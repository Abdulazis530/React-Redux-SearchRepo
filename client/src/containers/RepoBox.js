import React, { Component } from 'react'
import Repos from '../components/Repos'

import { connect } from 'react-redux'


class RepoBox extends Component {
    render() {
        console.log(this.props.repo)

        const repos = this.props.repo.map((item, index) => {
            return <Repos
                key={index}
                id={item.id}
                name={item.name}
                url={item.html_url}
            />

        })

        return (

            <div className="container my-5">

                <div className='row justify-content-center my-5'>
                    {repos}
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    repo: state.users.repo,

})



export default connect(
    mapStateToProps,
)(RepoBox)