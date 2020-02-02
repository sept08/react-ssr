const defaultState = {
    name: 'josh',
    newsList: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
