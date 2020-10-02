import React, { Component } from 'react';
import { searchRepo, resetSearch } from '../actions'
import { connect } from 'react-redux';

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }



    }
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchRepo(this.state.name)
    }
    handleReset = (event) => {
        event.preventDefault()
        this.props.resetSearch()
        this.setState({ name: " " })



    }
    render() {
        return (

            <div className="card text-left" >
                <div className="card-header text-center font-weight-bold">
                    SEARCH REPOS
                    </div>
                <div className="card-body">
                    <form className="form-inline justify-content-center">
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Search Name" />
                            </div>
                        </div>
                        <div className="form-group row align-self-center mx-1">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-success  btn-cancel float-right" onClick={this.handleSubmit}><i className="fas fa-search"></i> Search </button>
                            </div>
                        </div>
                        <div className="form-group row align-self-center ">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-warning  btn-cancel float-right" onClick={this.handleReset}><i className="fas fa-sync-alt"></i> Reset </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchRepo: (user) => dispatch(searchRepo(user)),
    resetSearch: () => dispatch(resetSearch()),
})

export default connect(
    null,
    mapDispatchToProps
)(SearchForm)
