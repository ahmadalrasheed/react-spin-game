(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.reactSpinGame = factory(global.react));
}(this, (function (React) {
  var React__default = 'default' in React ? React['default'] : React;

  var _defs, _g;
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function SvgWheelArrow(props) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: 12.922,
      height: 14.48
    }, props), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "wheel-arrow_svg__a"
    }, /*#__PURE__*/React.createElement("path", {
      "data-name": "Path 24805",
      d: "M119.691 11.756l6.461 14.48 6.461-14.48z",
      transform: "translate(-119.691 -11.756)",
      fill: "#a72810"
    })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
      "data-name": "Group 46907",
      clipPath: "url(#wheel-arrow_svg__a)"
    }, /*#__PURE__*/React.createElement("path", {
      "data-name": "Path 24806",
      d: "M-5.604 7.24L6.458-8.357 18.517 7.236 6.458 22.837z",
      fill: "#a72810"
    }))));
  }

  var Styles = {"rewards-spin-game":"_styles-module__rewards-spin-game__2zZiG","canvas-container":"_styles-module__canvas-container__28Wol","wheel":"_styles-module__wheel__1E7u3","spin":"_styles-module__spin__1sp4O","arrow":"_styles-module__arrow__35l6Q"};

  var SpinAndWin = React.forwardRef(function (_ref, ref) {
    var data = _ref.data,
      hideButton = _ref.hideButton,
      result = _ref.result,
      time = _ref.time,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      removeButtonEffect = _ref.removeButtonEffect,
      fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      horizantalText = _ref.horizantalText;
    var wheelRef = React.useRef();
    var _useState = React.useState({
        winnerAngle: 0
      }),
      state = _useState[0];
    React.useLayoutEffect(function () {
      var wheelCanvas = document.getElementById('wheel');
      if (wheelCanvas && isCanvas(wheelCanvas)) {
        var wheel = wheelCanvas.getContext('2d');
        var wheelX = wheelCanvas.width / 2;
        var wheelY = wheelCanvas.height / 2;
        var wheelRadius = Math.min(wheelX, wheelY);
        drawWheel(data, wheel, wheelX, wheelY, wheelRadius);
      }
    }, []);
    function isCanvas(obj) {
      return obj.tagName === 'CANVAS';
    }
    var degToRad = function degToRad(deg) {
      return deg * Math.PI / 180.0;
    };
    var drawWheel = function drawWheel(list, wheel, wheelX, wheelY, wheelRadius) {
      var segment = 360 / list.length;
      list.map(function (el, i) {
        wheel.save();
        wheel.translate(wheelX, wheelY);
        wheel.rotate(degToRad(segment * i));
        wheel.translate(-wheelX, -wheelY);
        wheel.fillStyle = el[1] ? el[1] : 'red';
        wheel.beginPath();
        wheel.moveTo(wheelX, wheelY);
        wheel.arc(wheelX, wheelY, wheelRadius, 0 - degToRad(90) - degToRad(segment / 2), degToRad(segment) - degToRad(90) - degToRad(segment / 2), false);
        wheel.moveTo(wheelX, wheelY);
        wheel.fill();
        wheel.fillStyle = 'white';
        horizantalText ? wheel.textAlign = 'start' : wheel.textAlign = 'end';
        wheel.font = fontSize && fontFamily ? fontSize + "px " + fontFamily : fontSize ? fontSize + "px sans-serif" : fontFamily ? "18px " + fontFamily : '18px sans-serif';
        wheel.transform = 'translate(50px, 100px)';
        if (horizantalText) {
          wheel.textAlign = 'center';
          wheel.fillText(el[0], wheelX, wheelY / 4);
        } else {
          wheel.rotate(-1.57);
          wheel.fillText(el[0], -20, wheelY + 10);
        }
        wheel.restore();
      });
    };
    React.useImperativeHandle(ref, function () {
      return {
        handleSpin: function handleSpin() {
          var wheelCanvas = document.getElementById('wheel');
          if (wheelCanvas) {
            var freeSpinResult = result ? result : '23454';
            var transitionTime = time ? time : minTime && maxTime && minTime > 0 && maxTime > 0 ? Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime : Math.floor(Math.random() * (4 - 3 + 1)) + 3;
            wheelCanvas.style.transition = transitionTime + 's';
            var winner = data.find(function (item) {
              return item[0] === freeSpinResult;
            });
            if (!winner) {
              winner = [''];
            }
            var freeSpinGifts = [];
            data.map(function (item) {
              freeSpinGifts.push(item[0]);
            });
            var winnerIndex = freeSpinGifts.indexOf(winner[0]);
            var offset = state.winnerAngle % 360;
            state.winnerAngle = state.winnerAngle + 1800 - 360 * winnerIndex / freeSpinGifts.length - offset;
            var deg = 'rotate(' + state.winnerAngle + 'deg)';
            wheelCanvas.style.transform = deg;
          }
        }
      };
    });
    var handleSpin = function handleSpin() {
      var wheelCanvas = document.getElementById('wheel');
      if (wheelCanvas) {
        var freeSpinResult = result ? result : '23454';
        var transitionTime = time ? time : minTime && maxTime && minTime > 0 && maxTime > 0 ? Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime : Math.floor(Math.random() * (4 - 3 + 1)) + 3;
        wheelCanvas.style.transition = transitionTime + 's';
        var winner = data.find(function (item) {
          return item[0] === freeSpinResult;
        });
        if (!winner) {
          winner = [''];
        }
        var freeSpinGifts = [];
        data.map(function (item) {
          freeSpinGifts.push(item[0]);
        });
        var winnerIndex = freeSpinGifts.indexOf(winner[0]);
        var offset = state.winnerAngle % 360;
        state.winnerAngle = state.winnerAngle + 2520 - 360 * winnerIndex / freeSpinGifts.length - offset;
        var deg = 'rotate(' + state.winnerAngle + 'deg)';
        wheelCanvas.style.transform = deg;
      }
    };
    return React__default.createElement("div", null, React__default.createElement("div", {
      className: Styles['rewards-spin-game']
    }, React__default.createElement("div", {
      className: Styles['canvas-container']
    }, React__default.createElement("canvas", {
      ref: wheelRef,
      id: "wheel",
      className: Styles['wheel'],
      width: '450px',
      height: '450px'
    }), !hideButton && React__default.createElement("span", {
      className: Styles['spin'],
      onClick: function onClick() {
        return removeButtonEffect ? '' : handleSpin();
      }
    }, "SPIN")), React__default.createElement("span", {
      className: Styles['arrow']
    }, React__default.createElement(SvgWheelArrow, null))));
  });

  return SpinAndWin;

})));
//# sourceMappingURL=index.umd.js.map
