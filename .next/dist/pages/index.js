'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/clay/Developer/Blogus/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/clay/Developer/Blogus/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('/Users/clay/Developer/Blogus/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _happy = require('./happy');

var _happy2 = _interopRequireDefault(_happy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: styles.main },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Droid+Serif', rel: 'stylesheet' })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.menu },
      _react2.default.createElement(
        _link2.default,
        { href: '/happy', style: styles.link },
        _react2.default.createElement(
          'a',
          { style: styles.link },
          'Shadow Dom'
        )
      ),
      _react2.default.createElement(
        _link2.default,
        { href: '/snappy' },
        _react2.default.createElement(
          'a',
          { style: styles.link },
          'Spliffy New'
        )
      )
    )
  );
};

var styles = {
  main: {},
  menu: {
    fontFamily: 'Droid Serif',
    fontSize: 38,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid gray',
    backgroundColor: 'lightblue'
  },
  link: {
    color: 'gray',
    textDecoration: 'none'
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIm1haW4iLCJtZW51IiwibGluayIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssT0FBT0EsT0FBT0MsSUFBbkI7QUFDRTtBQUFBO0FBQUE7QUFDRSw4Q0FBTSxNQUFLLHFEQUFYLEVBQWlFLEtBQUksWUFBckU7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssT0FBT0QsT0FBT0UsSUFBbkI7QUFDRTtBQUFBO0FBQUEsVUFBTSxNQUFLLFFBQVgsRUFBb0IsT0FBT0YsT0FBT0csSUFBbEM7QUFDRTtBQUFBO0FBQUEsWUFBRyxPQUFPSCxPQUFPRyxJQUFqQjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQU0sTUFBSyxTQUFYO0FBQ0U7QUFBQTtBQUFBLFlBQUcsT0FBT0gsT0FBT0csSUFBakI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQUpGLEdBRGE7QUFBQSxDOztBQWdCZixJQUFNSCxTQUFTO0FBQ2JDLFFBQU0sRUFETztBQUdiQyxRQUFNO0FBQ0pFLGdCQUFZLGFBRFI7QUFFSkMsY0FBVSxFQUZOO0FBR0pDLGFBQVMsTUFITDtBQUlKQyxtQkFBZSxRQUpYO0FBS0pDLGdCQUFZLFFBTFI7QUFNSkMsb0JBQWdCLGVBTlo7QUFPSkMsWUFBUSxnQkFQSjtBQVFKQyxxQkFBaUI7QUFSYixHQUhPO0FBYWJSLFFBQU07QUFDSlMsV0FBTyxNQURIO0FBRUpDLG9CQUFnQjtBQUZaO0FBYk8sQ0FBZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2xheS9EZXZlbG9wZXIvQmxvZ3VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhhcHB5IGZyb20gJy4vaGFwcHknXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ecm9pZCtTZXJpZlwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tZW51fT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvaGFwcHlcIiBzdHlsZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICA8YSBzdHlsZT17c3R5bGVzLmxpbmt9PlNoYWRvdyBEb208L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL3NuYXBweVwiID5cbiAgICAgICAgPGEgc3R5bGU9e3N0eWxlcy5saW5rfT5TcGxpZmZ5IE5ldzwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbWFpbjoge1xuICB9LFxuICBtZW51OiB7XG4gICAgZm9udEZhbWlseTogJ0Ryb2lkIFNlcmlmJyxcbiAgICBmb250U2l6ZTogMzgsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIGdyYXknLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Ymx1ZScsXG4gIH0sXG4gIGxpbms6IHtcbiAgICBjb2xvcjogJ2dyYXknLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIH0sXG59XG4iXX0=