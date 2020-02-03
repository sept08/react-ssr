import axios from 'axios';
import { CHANGE_LIST } from './contants';

const changeList = list => ({
    type: CHANGE_LIST,
    list,
});

export const getHomeList = (server) => {
    /**
     * 浏览器运行时，所请求的/api/news.json 其实是http://localhost:3000/api/news.json
     * 服务器运行时，所请求的/api/news.json 其实是服务器根目录下的/api/news.json
     */

    let url = '';
    if (server) {
        url = 'http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE';
    } else {
        url = '/api/news.json?secret=PP87ANTIPIRATE';
    }

    return (dispatch) => {
        return axios.get(url)
            .then(res => {
                const list = res.data.data;
                dispatch(changeList(list))
            })
    }
};
