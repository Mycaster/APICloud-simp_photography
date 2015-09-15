
// 主页menu切换
var changeIndexMenu = function(num){
    api.setFrameGroupIndex ({
        name: 'index_frameGroup',
        index: num,
        scroll: true
    });
};


// 活动页主窗口
var openActGroup = function(num){
    $api.setStorage('actgroup',num);
    api.openWin({
        name: 'act_win',
        url: '../actgroup/actgroup_win.html',
        bounces: false,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        }
    });
};
// 活动页menu切换
var changeActMenu = function(num){
    api.setFrameGroupIndex ({
        name: 'act_frameGroup',
        index: num,
        scroll: true
    });
};

// 主页展示样式按钮切换
var changeIndexStyleBtn = function(style){
    style = style || '';
    api.execScript({
        name: 'slide',
        script: 'changeBtn("'+style+'")'
    });
};

// 主页调用切换样式
var showStyle = function(name,style){
    changeIndexStyleBtn(style);
    api.execScript({
        frameName: name,
        script: 'changeStyle("'+style+'")'
    });
};





