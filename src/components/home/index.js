import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../header";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>this is {this.props.name}</div>
                <button onClick={() => alert('home')}>click</button>
            </div>
        );
    }

    componentDidMount() {
        this.props.getHomeList();
    }
}

const mapStateToProps = state => ({
    name: state.home.name,
});

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        console.log('test');
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
