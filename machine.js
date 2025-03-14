// do not touch, this code is licensed under a proprietary license, and you can face legal trouble if tampered, or made a copy of. it is only to be granted access by the original creator @kyaisw | allowed usage to: members of discord.gg/vdtU9gQQ
// this script is only to be used by members of discord.gg/vdtU9gQQ [machine], will not be useful outside of it.
(function() {
    'use strict';
    let _0x123456 = [
        { name: "kyaisw", tag: "[Contributor] " },
        { name: "Zade", tag: "[Leader] " },
        { name: "gok4rt", tag: "[Commander] " },
        { name: "yeetyeet47", tag: "[Commander] " },
        { name: "AkiraXD", tag: "[Jr. Commander] " },
        { name: "Anorak", tag: "[Jr. Commander] " },
        { name: "Bunny 🐰 :)", tag: "[Jr. Commander] " },
        { name: "Lunari", tag: "[Commander] " }
    ];
    let _0xabc123 = "rainbow-text", _0xdef456 = "chat-message-sender", _0xghi789 = "leaderboard-name", _0xjkl012 = "innerText",
        _0xmnp345 = "classList", _0xrst678 = "trim", _0xuvw901 = "includes", _0xyza23 = "startsWith", _0xbcdef4 = "forEach",
        _0xfgh567 = "querySelectorAll", _0xijk890 = "style", _0xlmn123 = "head", _0xopq456 = "appendChild", _0xrst789 = "createElement",
        _0xuvw012 = "animation", _0xyza34 = "rainbow", _0xbcdef5 = "infinite", _0xfgh678 = "linear", _0xijk901 = "color",
        _0xlmn234 = "red", _0xopq567 = "orange", _0xrst890 = "yellow", _0xuvw123 = "green", _0xyza45 = "blue",
        _0xbcdef6 = "indigo", _0xfgh789 = "violet", _0xijk012 = "2s", _0xlmn345 = 1;
    function _0x1a2b3c() {
        document[_0xfgh567]("." + _0xdef456)[_0xbcdef4](_0x4d5e6f => {
            _0x123456.forEach(_0x7g8h9i => {
                if (_0x4d5e6f[_0xjkl012][_0xrst678]() === _0x7g8h9i.name && !_0x4d5e6f[_0xjkl012][_0xuvw901](_0x7g8h9i.tag)) {
                    _0x4d5e6f[_0xjkl012] = _0x7g8h9i.tag + _0x4d5e6f[_0xjkl012];
                    _0x4d5e6f[_0xmnp345].add(_0xabc123);
                }
            });
        });
        document[_0xfgh567]("." + _0xghi789)[_0xbcdef4](_0x0j1k2l => {
            _0x123456.forEach(_0x3m4n5o => {
                if (_0x0j1k2l[_0xjkl012][_0xrst678]()[_0xyza23](_0x3m4n5o.name) && !_0x0j1k2l[_0xjkl012][_0xuvw901](_0x3m4n5o.tag)) {
                    _0x0j1k2l[_0xjkl012] = _0x3m4n5o.tag + _0x0j1k2l[_0xjkl012];
                    _0x0j1k2l[_0xmnp345].add(_0xabc123);
                }
            });
        });
    }
    setTimeout(() => {
        _0x1a2b3c();
        setInterval(_0x1a2b3c, _0xlmn345);
    }, _0xlmn345);
    let _0x6p7q8r = document[_0xrst789](_0xijk890);
    _0x6p7q8r.innerHTML = `
@keyframes ${_0xyza34} {
    0% { ${_0xijk901}: ${_0xlmn234}; }
    16% { ${_0xijk901}: ${_0xopq567}; }
    32% { ${_0xijk901}: ${_0xrst890}; }
    48% { ${_0xijk901}: ${_0xuvw123}; }
    64% { ${_0xijk901}: ${_0xyza45}; }
    80% { ${_0xijk901}: ${_0xbcdef6}; }
    100% { ${_0xijk901}: ${_0xfgh789}; }
}
.${_0xabc123} {
    ${_0xuvw012}: ${_0xyza34} ${_0xijk012} ${_0xbcdef5} ${_0xfgh678};
}
`;
    document[_0xlmn123][_0xopq456](_0x6p7q8r);
    let _0x9s0t1u = false;
    document.addEventListener('keydown', function(event) {
        if (event.key === '[') {
            _0x9s0t1u = !_0x9s0t1u;

            if (_0x9s0t1u) {
                const _0x2v3w4x = new KeyboardEvent('keydown', {
                    key: 'd',
                    code: 'KeyD',
                    which: 68,
                    keyCode: 68,
                    charCode: 0,
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                document.dispatchEvent(_0x2v3w4x);
            } else {
                const _0x5y6z7a = new KeyboardEvent('keyup', {
                    key: 'd',
                    code: 'KeyD',
                    which: 68,
                    keyCode: 68,
                    charCode: 0,
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                document.dispatchEvent(_0x5y6z7a);
            }
        }
    });
    document.addEventListener('keyup', function(event){
        if(event.key === 'd' && _0x9s0t1u){
            _0x9s0t1u = false;
        }
    });
    document.addEventListener('keydown', function(event){
        if(event.key === 'd' && _0x9s0t1u){
            _0x9s0t1u = false;
        }
    });
})();
