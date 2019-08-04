// import { request } from '../../pulgins/request'

// request.get('/user', { userid: 1 }).then(res => {
//   console.log(res)
// }).catch(err => console.log(err))
window.onload = function() {
    // create a network
    const container = document.getElementById('container')
    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, label: '儿子'},
        {id: 2, label: '中心人'},
        {id: 3, label: '孙女'},
        {id: 4, label: '妻子'},
        {id: 5, label: '弟弟'}
    ]);
    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);
    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        locale: 'en',
        clickToUse: false,
        configure: {},// defined in the configure module.
        edges: {},// defined in the edges module.
        nodes: {
            icon: {
                face: 'Ionicons',
                code: '\uf007',
                size: 50,
                color: '#2B7CE9'
            },
            shadow: {
                color: 'rgba(0,0,0,0.5)',
                size: 10,
                x: 5,
                y: 5
            },
            shape: 'circle',
            title: 'title'
        },// defined in the nodes module.
        groups: {},// defined in the groups module.
        layout: {},// defined in the layout module.
        interaction: {},// defined in the interaction module.
        manipulation: {},// defined in the manipulation module.
        physics: {}// defined in the physics module.
    };
    // initialize your network!
    var network = new vis.Network(container, data, options);
}