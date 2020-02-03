import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils';
import {getStore} from "../store";
import {matchRoutes} from "react-router-config";
import routers from "../routers";

const app = express();
app.use(express.static('public'));

// 代理转发
app.use('/api', proxy('http://47.95.113.63', {
    proxyReqPathResolver: req => `/ssr/api/${req.url}`
}));

app.get('*', (req, res) => {
    const store = getStore();

    // 根据路由路径向store中加数据
    const matchedRoutes = matchRoutes(routers, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    });

    Promise.all(promises).then(() => {
        res.send(render(req, store, routers))
    });
});

const server = app.listen(3000);
