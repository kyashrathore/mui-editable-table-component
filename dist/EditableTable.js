"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(_ref) {
  var name = _ref.name,
      error = _ref.error,
      validation = _ref.validation,
      childHasError = _ref.childHasError,
      columnDataArr = _ref.columnDataArr,
      value = _ref.value,
      classes = _ref.classes,
      tableName = _ref.tableName,
      props = _objectWithoutProperties(_ref, ["name", "error", "validation", "childHasError", "columnDataArr", "value", "classes", "tableName"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasError = _useState2[0],
      setError = _useState2[1];

  var handleOnChange = function handleOnChange(e) {
    var hasError = validation(e, columnDataArr);

    if (!hasError) {
      childHasError(true);
      setError(true);
    } else {
      childHasError(false);
      setError(false);
    }

    props.onChange(e);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.inputWrapperDiv, "inputWrapperDiv".concat(tableName))
  }, _react["default"].createElement("input", {
    className: (0, _classnames["default"])(classes.input, "input".concat(tableName)),
    name: name,
    value: value || "",
    onChange: handleOnChange
  }), _react["default"].createElement("p", {
    className: (0, _classnames["default"])(classes.error, "error".concat(tableName))
  }, hasError && error)));
};

var OurSelect = function OurSelect(_ref2) {
  var name = _ref2.name,
      value = _ref2.value,
      selectMessage = _ref2.selectMessage,
      options = _ref2.options,
      classes = _ref2.classes,
      tableName = _ref2.tableName,
      props = _objectWithoutProperties(_ref2, ["name", "value", "selectMessage", "options", "classes", "tableName"]);

  var handleSelect = function handleSelect(e) {
    props.onChange(e);
  };

  return _react["default"].createElement(_core.FormControl, {
    className: (0, _classnames["default"])(classes.selectFormControl, "selectFormControl_".concat(tableName))
  }, _react["default"].createElement(_core.InputLabel, {
    className: (0, _classnames["default"])(classes.selectInputLabel, "selectInputLabel_".concat(tableName)),
    htmlFor: name
  }, selectMessage), _react["default"].createElement(_core.Select, {
    className: (0, _classnames["default"])(classes.select, "select_".concat(tableName)),
    value: value || "",
    onChange: handleSelect,
    inputProps: {
      name: name,
      id: name
    }
  }, (options || []).map(function (item) {
    return _react["default"].createElement(_core.MenuItem, {
      className: (0, _classnames["default"])(classes.selectMenuItem, "selectMenutItem_".concat(tableName)),
      key: item.value,
      value: item.value
    }, item.label);
  })));
};

var EditableRow = function EditableRow(_ref3) {
  var _ref3$fieldsArr = _ref3.fieldsArr,
      fieldsArr = _ref3$fieldsArr === void 0 ? [] : _ref3$fieldsArr,
      _ref3$editData = _ref3.editData,
      editData = _ref3$editData === void 0 ? {} : _ref3$editData,
      allRowsData = _ref3.allRowsData,
      tableName = _ref3.tableName,
      classes = _ref3.classes,
      editingIndex = _ref3.editingIndex,
      isEditing = _ref3.isEditing,
      selectClasses = _ref3.selectClasses,
      inputClasses = _ref3.inputClasses,
      props = _objectWithoutProperties(_ref3, ["fieldsArr", "editData", "allRowsData", "tableName", "classes", "editingIndex", "isEditing", "selectClasses", "inputClasses"]);

  var initializeObj = {};
  fieldsArr.forEach(function (item) {
    initializeObj[item.name] = "";
  });

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      rowHasError = _useState4[0],
      setRowHasError = _useState4[1];

  var _useState5 = (0, _react.useState)(editData ? Object.assign({}, initializeObj, editData) : initializeObj),
      _useState6 = _slicedToArray(_useState5, 2),
      rowData = _useState6[0],
      setRowData = _useState6[1];

  var handleSave = function handleSave() {
    props.handleSave(rowData);
  };

  var handleOnChange = function handleOnChange(e) {
    var updatedData = Object.assign({}, rowData, _defineProperty({}, e.target.name, e.target.value));
    setRowData(updatedData);
  };

  var handleCancel = function handleCancel() {
    if (isEditing) {
      props.handleCancel(editingIndex);
    } else {
      props.handleCancel();
    }
  };

  return _react["default"].createElement(_core.TableRow, {
    className: (0, _classnames["default"])(classes.tableBodyRow, "tableBodyRow_".concat(tableName))
  }, fieldsArr.map(function (item, i) {
    return _react["default"].createElement(_core.TableCell, {
      className: (0, _classnames["default"])(classes.tableBodyCell, "tableBodyCell_".concat(tableName)),
      key: i
    }, item.type === "select" ? _react["default"].createElement(OurSelect, {
      tableName: tableName,
      classes: _objectSpread({}, selectClasses),
      name: item.name,
      onChange: handleOnChange,
      options: item.options,
      value: rowData[item.name],
      childHasError: function childHasError(bool) {
        return setRowHasError(bool);
      },
      error: item.error,
      selectMessage: item.selectMessage,
      validation: item.validation
    }) : _react["default"].createElement(Input, {
      columnDataArr: (allRowsData || []).map(function (obj) {
        return obj.rowData[item.name];
      }),
      tableName: tableName,
      classes: _objectSpread({}, inputClasses),
      type: item.type,
      name: item.name,
      onChange: handleOnChange,
      value: rowData[item.name],
      item: item.name,
      childHasError: function childHasError(bool) {
        return setRowHasError(bool);
      },
      error: item.error,
      validation: item.validation
    }));
  }), _react["default"].createElement(_core.TableCell, {
    className: (0, _classnames["default"])(classes.tableBodyCell, "tableBodyCell_".concat(tableName))
  }, _react["default"].createElement(_core.Button, {
    className: (0, _classnames["default"])(classes.saveBtn, "saveBtn".concat(tableName)),
    disabled: rowHasError,
    type: "button",
    onClick: handleSave
  }, "Save"), _react["default"].createElement(_core.Button, {
    className: (0, _classnames["default"])(classes.cancelBtn, "cancelBtn".concat(tableName)),
    onClick: handleCancel
  }, "Cancel")));
};

var Row = function Row(_ref4) {
  var data = _ref4.data,
      handleEditRow = _ref4.handleEditRow,
      classes = _ref4.classes,
      tableName = _ref4.tableName,
      handleDeleteRow = _ref4.handleDeleteRow,
      isAdding = _ref4.isAdding,
      isEditing = _ref4.isEditing;
  return _react["default"].createElement(_core.TableRow, {
    className: (0, _classnames["default"])(classes.tableBodyRow, "tableBodyRow_".concat(tableName))
  }, Object.keys(data).map(function (key) {
    return _react["default"].createElement(_core.TableCell, {
      className: (0, _classnames["default"])(classes.tableBodyCell, "tableBodyCell_".concat(tableName))
    }, data[key]);
  }), _react["default"].createElement(_core.TableCell, {
    className: (0, _classnames["default"])(classes.tableBodyCell, "tableBodyCell_".concat(tableName))
  }, _react["default"].createElement(_core.Button, {
    disabled: isAdding || isEditing,
    className: (0, _classnames["default"])(classes.editBtn, "editBtn_".concat(tableName)),
    onClick: handleEditRow
  }, "Edit"), _react["default"].createElement(_core.Button, {
    disabled: isAdding || isEditing,
    className: (0, _classnames["default"])(classes.deleteBtn, "deleteBtn_".concat(tableName)),
    onClick: handleDeleteRow
  }, "Delete")));
};

var EditableTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableTable, _React$Component);

  function EditableTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditableTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      allRowsData: (_this.props.defaultData || []).map(function (item) {
        return {
          isEditing: false,
          rowData: item
        };
      }),
      isAdding: false,
      isEditing: false,
      editingIndex: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleSave", function (row) {
      if (_this.state.isEditing) {
        var arr = _this.state.allRowsData.map(function (item, i) {
          if (i === _this.state.editingIndex) {
            return {
              isEditing: false,
              rowData: row
            };
          } else return item;
        });

        _this.setState({
          allRowsData: arr,
          editingIndex: null,
          isEditing: false
        }, function () {
          var formatedData = _this.state.allRowsData.map(function (_ref5, i) {
            var rowData = _ref5.rowData;
            return rowData;
          });

          _this.props.giveToParent(formatedData);
        });
      } else {
        _this.setState({
          allRowsData: [].concat(_toConsumableArray(_this.state.allRowsData), [{
            isEditing: false,
            rowData: row
          }]),
          isAdding: false
        }, function () {
          var formatedData = _this.state.allRowsData.map(function (_ref6, i) {
            var rowData = _ref6.rowData;
            return rowData;
          });

          _this.props.giveToParent(formatedData);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (index) {
      if (_this.state.isEditing) {
        var arr = _this.state.allRowsData.map(function (item, i) {
          if (i === index) {
            return {
              isEditing: false,
              rowData: item.rowData
            };
          } else return item;
        });

        _this.setState({
          allRowsData: arr,
          editingIndex: null,
          isEditing: false
        });
      } else {
        _this.setState({
          isAdding: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteRow", function (index) {
      var arr = _this.state.allRowsData.filter(function (item, i) {
        return i !== index;
      });

      _this.setState({
        allRowsData: arr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditRow", function (index) {
      var arr = _this.state.allRowsData.map(function (item, i) {
        if (i === index) {
          return {
            isEditing: true,
            rowData: item.rowData
          };
        } else return item;
      });

      _this.setState({
        allRowsData: arr,
        editingIndex: index,
        isEditing: true
      });
    });

    return _this;
  }

  _createClass(EditableTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$fieldsArr = _this$props.fieldsArr,
          fieldsArr = _this$props$fieldsArr === void 0 ? [] : _this$props$fieldsArr,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes,
          tableName = _this$props.tableName,
          addBtnText = _this$props.addBtnText,
          initWithoutHead = _this$props.initWithoutHead;
      var _this$state = this.state,
          allRowsData = _this$state.allRowsData,
          isAdding = _this$state.isAdding,
          editingIndex = _this$state.editingIndex,
          isEditing = _this$state.isEditing;
      var headRow = [].concat(_toConsumableArray(fieldsArr.map(function (item) {
        return {
          label: item.label,
          name: item.name
        };
      })), [{
        label: "Actions",
        name: "actions"
      }]);
      var showHeader = initWithoutHead && !allRowsData.length && !isAdding ? false : true;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.Table, {
        className: (0, _classnames["default"])(classes.table, "table_".concat(tableName))
      }, showHeader && _react["default"].createElement(_core.TableHead, {
        className: (0, _classnames["default"])(classes.tableHead)
      }, _react["default"].createElement(_core.TableRow, {
        className: (0, _classnames["default"])(classes.tableHeadRow, "tableHeadRow_".concat(tableName))
      }, headRow.map(function (_ref7, i) {
        var label = _ref7.label,
            name = _ref7.name;
        return _react["default"].createElement(_core.TableCell, {
          className: (0, _classnames["default"])(classes.tableHeadCell, classes["tableHeadCell".concat(name)], "tableHeadCell_".concat(tableName, " tableHeadCell_").concat(name)),
          key: i
        }, label);
      }))), _react["default"].createElement(_core.TableBody, {
        className: (0, _classnames["default"])(classes.tableBody, "tableBody_".concat(tableName))
      }, !!allRowsData.length && allRowsData.map(function (_ref8, i) {
        var isEditing = _ref8.isEditing,
            rowData = _ref8.rowData;
        return isEditing ? _react["default"].createElement(EditableRow, {
          tableName: tableName,
          isEditing: isEditing,
          editingIndex: editingIndex,
          selectClasses: {
            selectFormControl: classes.selectFormControl,
            selectInputLabel: classes.selectInputLabel,
            select: classes.select,
            selectMenuItem: classes.selectMenuItem
          },
          inputClasses: {
            inputWrapperDiv: classes.inputWrapperDiv,
            input: classes.input,
            error: classes.error
          },
          classes: {
            tableBodyRow: classes.tableBodyRow,
            tableBodyCell: classes.tableBodyCell,
            tableCellRow: classes.tableCellRow,
            saveBtn: classes.saveBtn,
            cancelBtn: classes.cancelBtn
          },
          allRowsData: _this2.state.allRowsData,
          editData: rowData,
          handleSave: _this2.handleSave,
          handleCancel: _this2.handleCancel,
          fieldsArr: fieldsArr
        }) : _react["default"].createElement(Row, {
          key: i,
          tableName: tableName,
          isEditing: _this2.state.isEditing,
          classes: {
            tableBodyRow: classes.tableBodyRow,
            tableBodyCell: classes.tableBodyCell,
            tableCellRow: classes.tableCellRow,
            editBtn: classes.editBtn,
            deleteBtn: classes.deleteBtn
          },
          isAdding: isAdding,
          handleEditRow: function handleEditRow() {
            return _this2.handleEditRow(i);
          },
          handleDeleteRow: function handleDeleteRow() {
            return _this2.handleDeleteRow(i);
          },
          data: rowData
        });
      }), isAdding && _react["default"].createElement(EditableRow, {
        tableName: tableName,
        allRowsData: this.state.allRowsData,
        selectClasses: {
          selectFormControl: classes.selectFormControl,
          selectInputLabel: classes.selectInputLabel,
          select: classes.select,
          selectMenuItem: classes.selectMenuItem
        },
        inputClasses: {
          inputWrapperDiv: classes.inputWrapperDiv,
          input: classes.input,
          error: classes.error
        },
        classes: {
          tableBodyRow: classes.tableBodyRow,
          tableBodyCell: classes.tableBodyCell,
          saveBtn: classes.saveBtn,
          cancelBtn: classes.cancelBtn,
          tableCellRow: classes.tableCellRow
        },
        handleSave: this.handleSave,
        handleCancel: this.handleCancel,
        fieldsArr: fieldsArr
      }))), _react["default"].createElement("div", null, _react["default"].createElement(_core.Button, {
        className: (0, _classnames["default"])(classes.addBtn, "addBtn_".concat(tableName)),
        disabled: isAdding || isEditing,
        onClick: function onClick() {
          return _this2.setState({
            isAdding: true
          });
        }
      }, addBtnText || "Add Row")));
    }
  }]);

  return EditableTable;
}(_react["default"].Component);

var _default = EditableTable;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FZGl0YWJsZVRhYmxlLmpzIl0sIm5hbWVzIjpbIklucHV0IiwibmFtZSIsImVycm9yIiwidmFsaWRhdGlvbiIsImNoaWxkSGFzRXJyb3IiLCJjb2x1bW5EYXRhQXJyIiwidmFsdWUiLCJjbGFzc2VzIiwidGFibGVOYW1lIiwicHJvcHMiLCJoYXNFcnJvciIsInNldEVycm9yIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwib25DaGFuZ2UiLCJpbnB1dFdyYXBwZXJEaXYiLCJpbnB1dCIsIk91clNlbGVjdCIsInNlbGVjdE1lc3NhZ2UiLCJvcHRpb25zIiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0Rm9ybUNvbnRyb2wiLCJzZWxlY3RJbnB1dExhYmVsIiwic2VsZWN0IiwiaWQiLCJtYXAiLCJpdGVtIiwic2VsZWN0TWVudUl0ZW0iLCJsYWJlbCIsIkVkaXRhYmxlUm93IiwiZmllbGRzQXJyIiwiZWRpdERhdGEiLCJhbGxSb3dzRGF0YSIsImVkaXRpbmdJbmRleCIsImlzRWRpdGluZyIsInNlbGVjdENsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJpbml0aWFsaXplT2JqIiwiZm9yRWFjaCIsInJvd0hhc0Vycm9yIiwic2V0Um93SGFzRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJyb3dEYXRhIiwic2V0Um93RGF0YSIsImhhbmRsZVNhdmUiLCJ1cGRhdGVkRGF0YSIsInRhcmdldCIsImhhbmRsZUNhbmNlbCIsInRhYmxlQm9keVJvdyIsImkiLCJ0YWJsZUJvZHlDZWxsIiwidHlwZSIsImJvb2wiLCJvYmoiLCJzYXZlQnRuIiwiY2FuY2VsQnRuIiwiUm93IiwiZGF0YSIsImhhbmRsZUVkaXRSb3ciLCJoYW5kbGVEZWxldGVSb3ciLCJpc0FkZGluZyIsImtleXMiLCJrZXkiLCJlZGl0QnRuIiwiZGVsZXRlQnRuIiwiRWRpdGFibGVUYWJsZSIsImRlZmF1bHREYXRhIiwicm93Iiwic3RhdGUiLCJhcnIiLCJzZXRTdGF0ZSIsImZvcm1hdGVkRGF0YSIsImdpdmVUb1BhcmVudCIsImluZGV4IiwiZmlsdGVyIiwiYWRkQnRuVGV4dCIsImluaXRXaXRob3V0SGVhZCIsImhlYWRSb3ciLCJzaG93SGVhZGVyIiwibGVuZ3RoIiwidGFibGUiLCJ0YWJsZUhlYWQiLCJ0YWJsZUhlYWRSb3ciLCJ0YWJsZUhlYWRDZWxsIiwidGFibGVCb2R5IiwidGFibGVDZWxsUm93IiwiYWRkQnRuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FVUjtBQUFBLE1BVEpDLElBU0ksUUFUSkEsSUFTSTtBQUFBLE1BUkpDLEtBUUksUUFSSkEsS0FRSTtBQUFBLE1BUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpDLGFBTUksUUFOSkEsYUFNSTtBQUFBLE1BTEpDLGFBS0ksUUFMSkEsYUFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLE1BRERDLEtBQ0M7O0FBQUEsa0JBQ3lCLHFCQUFTLEtBQVQsQ0FEekI7QUFBQTtBQUFBLE1BQ0dDLFFBREg7QUFBQSxNQUNhQyxRQURiOztBQUVKLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzFCLFFBQU1ILFFBQVEsR0FBR1AsVUFBVSxDQUFDVSxDQUFELEVBQUlSLGFBQUosQ0FBM0I7O0FBQ0EsUUFBSSxDQUFDSyxRQUFMLEVBQWU7QUFDYk4sTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBTyxNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsS0FIRCxNQUdPO0FBQ0xQLE1BQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDQU8sTUFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNEOztB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LFdBQWQsQ0FBTjtBQUFBO0FBSFgsU0FLR2UsVUFBVSxJQUFJLFNBTGpCLENBREYsQ0EzR0YsQ0FERjtBQXVIRDs7OztFQXhOeUJZLGtCQUFNQyxTOztlQTJObkJ2QixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVSb3csXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUJvZHksXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIElucHV0TGFiZWwsXG4gIE1lbnVJdGVtLFxuICBTZWxlY3Rcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBJbnB1dCA9ICh7XG4gIG5hbWUsXG4gIGVycm9yLFxuICB2YWxpZGF0aW9uLFxuICBjaGlsZEhhc0Vycm9yLFxuICBjb2x1bW5EYXRhQXJyLFxuICB2YWx1ZSxcbiAgY2xhc3NlcyxcbiAgdGFibGVOYW1lLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbaGFzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCBoYXNFcnJvciA9IHZhbGlkYXRpb24oZSwgY29sdW1uRGF0YUFycik7XG4gICAgaWYgKCFoYXNFcnJvcikge1xuICAgICAgY2hpbGRIYXNFcnJvcih0cnVlKTtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZEhhc0Vycm9yKGZhbHNlKTtcbiAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICB9XG4gICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy5pbnB1dFdyYXBwZXJEaXYsXG4gICAgICAgICAgYGlucHV0V3JhcHBlckRpdiR7dGFibGVOYW1lfWBcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuaW5wdXQsIGBpbnB1dCR7dGFibGVOYW1lfWApfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5lcnJvciwgYGVycm9yJHt0YWJsZU5hbWV9YCl9PlxuICAgICAgICAgIHtoYXNFcnJvciAmJiBlcnJvcn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBPdXJTZWxlY3QgPSAoe1xuICBuYW1lLFxuICB2YWx1ZSxcbiAgc2VsZWN0TWVzc2FnZSxcbiAgb3B0aW9ucyxcbiAgY2xhc3NlcyxcbiAgdGFibGVOYW1lLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBoYW5kbGVTZWxlY3QgPSBlID0+IHtcbiAgICBwcm9wcy5vbkNoYW5nZShlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2xcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgY2xhc3Nlcy5zZWxlY3RGb3JtQ29udHJvbCxcbiAgICAgICAgYHNlbGVjdEZvcm1Db250cm9sXyR7dGFibGVOYW1lfWBcbiAgICAgICl9XG4gICAgPlxuICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGNsYXNzZXMuc2VsZWN0SW5wdXRMYWJlbCxcbiAgICAgICAgICBgc2VsZWN0SW5wdXRMYWJlbF8ke3RhYmxlTmFtZX1gXG4gICAgICAgICl9XG4gICAgICAgIGh0bWxGb3I9e25hbWV9XG4gICAgICA+XG4gICAgICAgIHtzZWxlY3RNZXNzYWdlfVxuICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5zZWxlY3QsIGBzZWxlY3RfJHt0YWJsZU5hbWV9YCl9XG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxuICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBpZDogbmFtZVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KG9wdGlvbnMgfHwgW10pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnNlbGVjdE1lbnVJdGVtLFxuICAgICAgICAgICAgICAgIGBzZWxlY3RNZW51dEl0ZW1fJHt0YWJsZU5hbWV9YFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NlbGVjdD5cbiAgICA8L0Zvcm1Db250cm9sPlxuICApO1xufTtcbmNvbnN0IEVkaXRhYmxlUm93ID0gKHtcbiAgZmllbGRzQXJyID0gW10sXG4gIGVkaXREYXRhID0ge30sXG4gIGFsbFJvd3NEYXRhLFxuICB0YWJsZU5hbWUsXG4gIGNsYXNzZXMsXG4gIGVkaXRpbmdJbmRleCxcbiAgaXNFZGl0aW5nLFxuICBzZWxlY3RDbGFzc2VzLFxuICBpbnB1dENsYXNzZXMsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGxldCBpbml0aWFsaXplT2JqID0ge307XG4gIGZpZWxkc0Fyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGluaXRpYWxpemVPYmpbaXRlbS5uYW1lXSA9IFwiXCI7XG4gIH0pO1xuICBjb25zdCBbcm93SGFzRXJyb3IsIHNldFJvd0hhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jvd0RhdGEsIHNldFJvd0RhdGFdID0gdXNlU3RhdGUoXG4gICAgZWRpdERhdGEgPyBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsaXplT2JqLCBlZGl0RGF0YSkgOiBpbml0aWFsaXplT2JqXG4gICk7XG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgcHJvcHMuaGFuZGxlU2F2ZShyb3dEYXRhKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHJvd0RhdGEsIHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgICBzZXRSb3dEYXRhKHVwZGF0ZWREYXRhKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgIHByb3BzLmhhbmRsZUNhbmNlbChlZGl0aW5nSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5oYW5kbGVDYW5jZWwoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy50YWJsZUJvZHlSb3csIGB0YWJsZUJvZHlSb3dfJHt0YWJsZU5hbWV9YCl9XG4gICAgPlxuICAgICAge2ZpZWxkc0Fyci5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgIGNsYXNzZXMudGFibGVCb2R5Q2VsbCxcbiAgICAgICAgICAgICAgYHRhYmxlQm9keUNlbGxfJHt0YWJsZU5hbWV9YFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbS50eXBlID09PSBcInNlbGVjdFwiID8gKFxuICAgICAgICAgICAgICA8T3VyU2VsZWN0XG4gICAgICAgICAgICAgICAgdGFibGVOYW1lPXt0YWJsZU5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0Q2xhc3Nlc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtpdGVtLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Jvd0RhdGFbaXRlbS5uYW1lXX1cbiAgICAgICAgICAgICAgICBjaGlsZEhhc0Vycm9yPXtib29sID0+IHNldFJvd0hhc0Vycm9yKGJvb2wpfVxuICAgICAgICAgICAgICAgIGVycm9yPXtpdGVtLmVycm9yfVxuICAgICAgICAgICAgICAgIHNlbGVjdE1lc3NhZ2U9e2l0ZW0uc2VsZWN0TWVzc2FnZX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uPXtpdGVtLnZhbGlkYXRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBjb2x1bW5EYXRhQXJyPXsoYWxsUm93c0RhdGEgfHwgW10pLm1hcChcbiAgICAgICAgICAgICAgICAgIG9iaiA9PiBvYmoucm93RGF0YVtpdGVtLm5hbWVdXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB0YWJsZU5hbWU9e3RhYmxlTmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IC4uLmlucHV0Q2xhc3NlcyB9fVxuICAgICAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cbiAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtyb3dEYXRhW2l0ZW0ubmFtZV19XG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIGNoaWxkSGFzRXJyb3I9e2Jvb2wgPT4gc2V0Um93SGFzRXJyb3IoYm9vbCl9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2l0ZW0uZXJyb3J9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbj17aXRlbS52YWxpZGF0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy50YWJsZUJvZHlDZWxsLFxuICAgICAgICAgIGB0YWJsZUJvZHlDZWxsXyR7dGFibGVOYW1lfWBcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnNhdmVCdG4sIGBzYXZlQnRuJHt0YWJsZU5hbWV9YCl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3Jvd0hhc0Vycm9yfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XG4gICAgICAgID5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5jYW5jZWxCdG4sIGBjYW5jZWxCdG4ke3RhYmxlTmFtZX1gKX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgID5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApO1xufTtcblxuY29uc3QgUm93ID0gKHtcbiAgZGF0YSxcbiAgaGFuZGxlRWRpdFJvdyxcbiAgY2xhc3NlcyxcbiAgdGFibGVOYW1lLFxuICBoYW5kbGVEZWxldGVSb3csXG4gIGlzQWRkaW5nLFxuICBpc0VkaXRpbmdcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGFibGVSb3dcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnRhYmxlQm9keVJvdywgYHRhYmxlQm9keVJvd18ke3RhYmxlTmFtZX1gKX1cbiAgICA+XG4gICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBjbGFzc2VzLnRhYmxlQm9keUNlbGwsXG4gICAgICAgICAgICAgIGB0YWJsZUJvZHlDZWxsXyR7dGFibGVOYW1lfWBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RhdGFba2V5XX1cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgY2xhc3Nlcy50YWJsZUJvZHlDZWxsLFxuICAgICAgICAgIGB0YWJsZUJvZHlDZWxsXyR7dGFibGVOYW1lfWBcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc0FkZGluZyB8fCBpc0VkaXRpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuZWRpdEJ0biwgYGVkaXRCdG5fJHt0YWJsZU5hbWV9YCl9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdFJvd31cbiAgICAgICAgPlxuICAgICAgICAgIEVkaXRcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc0FkZGluZyB8fCBpc0VkaXRpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuZGVsZXRlQnRuLCBgZGVsZXRlQnRuXyR7dGFibGVOYW1lfWApfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZVJvd31cbiAgICAgICAgPlxuICAgICAgICAgIERlbGV0ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgIDwvVGFibGVSb3c+XG4gICk7XG59O1xuXG5jbGFzcyBFZGl0YWJsZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWxsUm93c0RhdGE6ICh0aGlzLnByb3BzLmRlZmF1bHREYXRhIHx8IFtdKS5tYXAoaXRlbSA9PiAoe1xuICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgIHJvd0RhdGE6IGl0ZW1cbiAgICB9KSksXG4gICAgaXNBZGRpbmc6IGZhbHNlLFxuICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgZWRpdGluZ0luZGV4OiBudWxsXG4gIH07XG5cbiAgaGFuZGxlU2F2ZSA9IHJvdyA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0aW5nKSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLnN0YXRlLmFsbFJvd3NEYXRhLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gdGhpcy5zdGF0ZS5lZGl0aW5nSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJvd0RhdGE6IHJvd1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgeyBhbGxSb3dzRGF0YTogYXJyLCBlZGl0aW5nSW5kZXg6IG51bGwsIGlzRWRpdGluZzogZmFsc2UgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdGVkRGF0YSA9IHRoaXMuc3RhdGUuYWxsUm93c0RhdGEubWFwKFxuICAgICAgICAgICAgKHsgcm93RGF0YSB9LCBpKSA9PiByb3dEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmdpdmVUb1BhcmVudChmb3JtYXRlZERhdGEpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgYWxsUm93c0RhdGE6IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuYWxsUm93c0RhdGEsXG4gICAgICAgICAgICB7IGlzRWRpdGluZzogZmFsc2UsIHJvd0RhdGE6IHJvdyB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBpc0FkZGluZzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1hdGVkRGF0YSA9IHRoaXMuc3RhdGUuYWxsUm93c0RhdGEubWFwKFxuICAgICAgICAgICAgKHsgcm93RGF0YSB9LCBpKSA9PiByb3dEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmdpdmVUb1BhcmVudChmb3JtYXRlZERhdGEpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlQ2FuY2VsID0gaW5kZXggPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzRWRpdGluZykge1xuICAgICAgY29uc3QgYXJyID0gdGhpcy5zdGF0ZS5hbGxSb3dzRGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICAgICAgICByb3dEYXRhOiBpdGVtLnJvd0RhdGFcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxSb3dzRGF0YTogYXJyLCBlZGl0aW5nSW5kZXg6IG51bGwsIGlzRWRpdGluZzogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZURlbGV0ZVJvdyA9IGluZGV4ID0+IHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLnN0YXRlLmFsbFJvd3NEYXRhLmZpbHRlcigoaXRlbSwgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWxsUm93c0RhdGE6IGFyclxuICAgIH0pO1xuICB9O1xuICBoYW5kbGVFZGl0Um93ID0gaW5kZXggPT4ge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuc3RhdGUuYWxsUm93c0RhdGEubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc0VkaXRpbmc6IHRydWUsXG4gICAgICAgICAgcm93RGF0YTogaXRlbS5yb3dEYXRhXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFsbFJvd3NEYXRhOiBhcnIsIGVkaXRpbmdJbmRleDogaW5kZXgsIGlzRWRpdGluZzogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzQXJyID0gW10sXG4gICAgICBjbGFzc2VzID0ge30sXG4gICAgICB0YWJsZU5hbWUsXG4gICAgICBhZGRCdG5UZXh0LFxuICAgICAgaW5pdFdpdGhvdXRIZWFkXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhbGxSb3dzRGF0YSwgaXNBZGRpbmcsIGVkaXRpbmdJbmRleCwgaXNFZGl0aW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGhlYWRSb3cgPSBbXG4gICAgICAuLi5maWVsZHNBcnIubWFwKGl0ZW0gPT4gKHsgbGFiZWw6IGl0ZW0ubGFiZWwsIG5hbWU6IGl0ZW0ubmFtZSB9KSksXG4gICAgICB7IGxhYmVsOiBcIkFjdGlvbnNcIiwgbmFtZTogXCJhY3Rpb25zXCIgfVxuICAgIF07XG4gICAgY29uc3Qgc2hvd0hlYWRlciA9XG4gICAgICBpbml0V2l0aG91dEhlYWQgJiYgIWFsbFJvd3NEYXRhLmxlbmd0aCAmJiAhaXNBZGRpbmcgPyBmYWxzZSA6IHRydWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy50YWJsZSwgYHRhYmxlXyR7dGFibGVOYW1lfWApfT5cbiAgICAgICAgICB7c2hvd0hlYWRlciAmJiAoXG4gICAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLnRhYmxlSGVhZCl9PlxuICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLnRhYmxlSGVhZFJvdyxcbiAgICAgICAgICAgICAgICAgIGB0YWJsZUhlYWRSb3dfJHt0YWJsZU5hbWV9YFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVhZFJvdy5tYXAoKHsgbGFiZWwsIG5hbWUgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy50YWJsZUhlYWRDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXNbYHRhYmxlSGVhZENlbGwke25hbWV9YF0sXG4gICAgICAgICAgICAgICAgICAgICAgYHRhYmxlSGVhZENlbGxfJHt0YWJsZU5hbWV9IHRhYmxlSGVhZENlbGxfJHtuYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFRhYmxlQm9keVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMudGFibGVCb2R5LCBgdGFibGVCb2R5XyR7dGFibGVOYW1lfWApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshIWFsbFJvd3NEYXRhLmxlbmd0aCAmJlxuICAgICAgICAgICAgICBhbGxSb3dzRGF0YS5tYXAoKHsgaXNFZGl0aW5nLCByb3dEYXRhIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNFZGl0aW5nID8gKFxuICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlTmFtZT17dGFibGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cbiAgICAgICAgICAgICAgICAgICAgZWRpdGluZ0luZGV4PXtlZGl0aW5nSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdENsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RGb3JtQ29udHJvbDogY2xhc3Nlcy5zZWxlY3RGb3JtQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RJbnB1dExhYmVsOiBjbGFzc2VzLnNlbGVjdElucHV0TGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBjbGFzc2VzLnNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RNZW51SXRlbTogY2xhc3Nlcy5zZWxlY3RNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBpbnB1dENsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFdyYXBwZXJEaXY6IGNsYXNzZXMuaW5wdXRXcmFwcGVyRGl2LFxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBjbGFzc2VzLmVycm9yXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICB0YWJsZUJvZHlSb3c6IGNsYXNzZXMudGFibGVCb2R5Um93LFxuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQm9keUNlbGw6IGNsYXNzZXMudGFibGVCb2R5Q2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNlbGxSb3c6IGNsYXNzZXMudGFibGVDZWxsUm93LFxuICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG46IGNsYXNzZXMuc2F2ZUJ0bixcbiAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdG46IGNsYXNzZXMuY2FuY2VsQnRuXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFsbFJvd3NEYXRhPXt0aGlzLnN0YXRlLmFsbFJvd3NEYXRhfVxuICAgICAgICAgICAgICAgICAgICBlZGl0RGF0YT17cm93RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2F2ZT17dGhpcy5oYW5kbGVTYXZlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNBcnI9e2ZpZWxkc0Fycn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxSb3dcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZU5hbWU9e3RhYmxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXt0aGlzLnN0YXRlLmlzRWRpdGluZ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQm9keVJvdzogY2xhc3Nlcy50YWJsZUJvZHlSb3csXG4gICAgICAgICAgICAgICAgICAgICAgdGFibGVCb2R5Q2VsbDogY2xhc3Nlcy50YWJsZUJvZHlDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2VsbFJvdzogY2xhc3Nlcy50YWJsZUNlbGxSb3csXG4gICAgICAgICAgICAgICAgICAgICAgZWRpdEJ0bjogY2xhc3Nlcy5lZGl0QnRuLFxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bjogY2xhc3Nlcy5kZWxldGVCdG5cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmc9e2lzQWRkaW5nfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVFZGl0Um93PXsoKSA9PiB0aGlzLmhhbmRsZUVkaXRSb3coaSl9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZVJvdz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVSb3coaSl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Jvd0RhdGF9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAge2lzQWRkaW5nICYmIChcbiAgICAgICAgICAgICAgPEVkaXRhYmxlUm93XG4gICAgICAgICAgICAgICAgdGFibGVOYW1lPXt0YWJsZU5hbWV9XG4gICAgICAgICAgICAgICAgYWxsUm93c0RhdGE9e3RoaXMuc3RhdGUuYWxsUm93c0RhdGF9XG4gICAgICAgICAgICAgICAgc2VsZWN0Q2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgc2VsZWN0Rm9ybUNvbnRyb2w6IGNsYXNzZXMuc2VsZWN0Rm9ybUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RJbnB1dExhYmVsOiBjbGFzc2VzLnNlbGVjdElucHV0TGFiZWwsXG4gICAgICAgICAgICAgICAgICBzZWxlY3Q6IGNsYXNzZXMuc2VsZWN0LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0TWVudUl0ZW06IGNsYXNzZXMuc2VsZWN0TWVudUl0ZW1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgaW5wdXRXcmFwcGVyRGl2OiBjbGFzc2VzLmlucHV0V3JhcHBlckRpdixcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0LFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGNsYXNzZXMuZXJyb3JcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgIHRhYmxlQm9keVJvdzogY2xhc3Nlcy50YWJsZUJvZHlSb3csXG4gICAgICAgICAgICAgICAgICB0YWJsZUJvZHlDZWxsOiBjbGFzc2VzLnRhYmxlQm9keUNlbGwsXG4gICAgICAgICAgICAgICAgICBzYXZlQnRuOiBjbGFzc2VzLnNhdmVCdG4sXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdG46IGNsYXNzZXMuY2FuY2VsQnRuLFxuICAgICAgICAgICAgICAgICAgdGFibGVDZWxsUm93OiBjbGFzc2VzLnRhYmxlQ2VsbFJvd1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaGFuZGxlU2F2ZT17dGhpcy5oYW5kbGVTYXZlfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNhbmNlbD17dGhpcy5oYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICAgICAgZmllbGRzQXJyPXtmaWVsZHNBcnJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmFkZEJ0biwgYGFkZEJ0bl8ke3RhYmxlTmFtZX1gKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0FkZGluZyB8fCBpc0VkaXRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6IHRydWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FkZEJ0blRleHQgfHwgXCJBZGQgUm93XCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZVRhYmxlO1xuIl19