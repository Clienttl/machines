(function() {
    'use strict';

    let users = [
        { name: "kyaisw", tag: "[Contributor] " },
        { name: "Zane", tag: "[Leader] " },
        { name: "Terminatorkid", tag: "[Commander] " },
        { name: "yeetyeet47", tag: "[Commander] " },
        { name: "AkiraXD", tag: "[Jr. Commander] " },
        { name: "Anorak", tag: "[Jr. Commander] " },
        { name: "Bunny", tag: "[Jr. Commander] " },
        { name: "Lunari", tag: "[Commander] " }
    ];

    let _c = "rainbow-text", _d = "chat-message-sender", _e = "leaderboard-name", _f = "innerText", 
        _g = "classList", _h = "trim", _i = "includes", _j = "startsWith", _k = "forEach", 
        _l = "querySelectorAll", _m = "style", _n = "head", _o = "appendChild", _p = "createElement", 
        _q = "animation", _r = "rainbow", _s = "infinite", _t = "linear", _u = "color", 
        _v = "red", _w = "orange", _x = "yellow", _y = "green", _z = "blue", 
        _A = "indigo", _B = "violet", _C = "5s", _E = 1000; // adj

    function _F() {
        document[_l]("." + _d)[_k](_G => {
            users.forEach(user => {
                if (_G[_f][_h]() === user.name && !_G[_f][_i](user.tag)) {
                    _G[_f] = user.tag + _G[_f];
                    _G[_g].add(_c);
                }
            });
        });

        document[_l]("." + _e)[_k](_H => {
            users.forEach(user => {
                if (_H[_f][_h]()[_j](user.name) && !_H[_f][_i](user.tag)) {
                    _H[_f] = user.tag + _H[_f];
                    _H[_g].add(_c);
                }
            });
        });
    }

    setInterval(_F, _E);

    let _I = document[_p](_m);
    _I.innerHTML = `
@keyframes ${_r} {
    0% { ${_u}: ${_v}; }
    16% { ${_u}: ${_w}; }
    32% { ${_u}: ${_x}; }
    48% { ${_u}: ${_y}; }
    64% { ${_u}: ${_z}; }
    80% { ${_u}: ${_A}; }
    100% { ${_u}: ${_B}; }
}

.${_c} {
    ${_q}: ${_r} ${_C} ${_s} ${_t};
}
`;
    document[_n][_o](_I);
})();
