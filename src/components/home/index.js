import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../header";
import { getHomeList } from './store/actions';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                {
                    this.props.list.map(item => {
                        return <div key={item.id}>{item.title}</div>
                    })
                }
                <button onClick={() => alert('home')}>click</button>
            </div>
        );
    }

    componentDidMount() {
        if(!this.props.list.length) {
            this.props.getHomeList();
        }
    }
}

Home.loadData = (store) => {
    return store.dispatch(getHomeList(true));
};

const mapStateToProps = state => ({
    list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
