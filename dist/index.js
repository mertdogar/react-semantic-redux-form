'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = exports.UploadField = exports.Dropdown = exports.DropdownField = exports.Range = exports.RangeField = exports.CheckboxField = exports.Checkbox = exports.RadioField = exports.Radio = exports.Toggle = exports.ToggleField = exports.Select = exports.SelectField = exports.TextArea = exports.TextAreaField = exports.LabelInputField = exports.Input = exports.InputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputField = function InputField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      required = _ref.required,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      rest = _objectWithoutProperties(_ref, ['input', 'label', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error ? true : false, required: required },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(_semanticUiReact.Input, _extends({ required: required }, input, rest)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.InputField = InputField;
var Input = function Input(_ref2) {
  var input = _ref2.input,
      required = _ref2.required,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error,
      rest = _objectWithoutProperties(_ref2, ['input', 'required', 'meta']);

  return _react2.default.createElement(_semanticUiReact.Input, _extends({ required: required }, input, rest));
};

exports.Input = Input;
var LabelInputField = function LabelInputField(_ref3) {
  var input = _ref3.input,
      required = _ref3.required,
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error,
      rest = _objectWithoutProperties(_ref3, ['input', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error ? true : false, required: required },
      _react2.default.createElement(_semanticUiReact.Input, _extends({ required: required }, input, rest)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.LabelInputField = LabelInputField;
var TextAreaField = function TextAreaField(_ref4) {
  var input = _ref4.input,
      label = _ref4.label,
      required = _ref4.required,
      _ref4$meta = _ref4.meta,
      touched = _ref4$meta.touched,
      error = _ref4$meta.error,
      rest = _objectWithoutProperties(_ref4, ['input', 'label', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error ? true : false, required: required },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(_semanticUiReact.TextArea, _extends({ required: required }, input, rest)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.TextAreaField = TextAreaField;
var TextArea = function TextArea(_ref5) {
  var input = _ref5.input,
      required = _ref5.required,
      _ref5$meta = _ref5.meta,
      touched = _ref5$meta.touched,
      error = _ref5$meta.error,
      rest = _objectWithoutProperties(_ref5, ['input', 'required', 'meta']);

  return _react2.default.createElement(_semanticUiReact.TextArea, _extends({ required: required }, input, rest));
};

exports.TextArea = TextArea;
var SelectField = function SelectField(_ref6) {
  var input = _ref6.input,
      label = _ref6.label,
      required = _ref6.required,
      options = _ref6.options,
      _ref6$meta = _ref6.meta,
      touched = _ref6$meta.touched,
      error = _ref6$meta.error,
      custom = _objectWithoutProperties(_ref6, ['input', 'label', 'required', 'options', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error ? true : false, required: required },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(_semanticUiReact.Select, _extends({ search: true, value: input.value, required: required,
        options: options,
        onChange: function onChange(event, data) {
          return input.onChange(data.value);
        } }, custom)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.SelectField = SelectField;
var Select = function Select(_ref7) {
  var input = _ref7.input,
      required = _ref7.required,
      options = _ref7.options,
      _ref7$meta = _ref7.meta,
      touched = _ref7$meta.touched,
      error = _ref7$meta.error,
      rest = _objectWithoutProperties(_ref7, ['input', 'required', 'options', 'meta']);

  return _react2.default.createElement(_semanticUiReact.Select, _extends({ search: true, value: input.value, required: required,
    options: options,
    onChange: function onChange(event, data) {
      return input.onChange(data.value);
    } }, rest));
};

exports.Select = Select;
var ToggleField = exports.ToggleField = function ToggleField(_ref8) {
  var input = _ref8.input,
      label = _ref8.label,
      defaultChecked = _ref8.defaultChecked;
  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Radio, toggle: true, label: label,
      checked: input.value ? true : false,
      defaultChecked: defaultChecked,
      onClick: function onClick(event, data) {
        return input.onChange(data.checked);
      } })
  );
};

var Toggle = exports.Toggle = function Toggle(_ref9) {
  var input = _ref9.input,
      label = _ref9.label,
      defaultChecked = _ref9.defaultChecked;
  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Radio, { toggle: true, label: label,
      checked: input.value ? true : false,
      defaultChecked: defaultChecked,
      onClick: function onClick(event, data) {
        return input.onChange(data.checked);
      } })
  );
};

var Radio = function Radio(_ref10) {
  var input = _ref10.input,
      label = _ref10.label,
      _ref10$meta = _ref10.meta,
      touched = _ref10$meta.touched,
      error = _ref10$meta.error,
      custom = _objectWithoutProperties(_ref10, ['input', 'label', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Radio, _extends({ label: label,
      checked: input.value ? true : false,
      onClick: function onClick(event, data) {
        return input.onChange(!data.checked);
      } }, custom))
  );
};

exports.Radio = Radio;
var RadioField = function RadioField(_ref11) {
  var input = _ref11.input,
      label = _ref11.label,
      _ref11$meta = _ref11.meta,
      touched = _ref11$meta.touched,
      error = _ref11$meta.error,
      custom = _objectWithoutProperties(_ref11, ['input', 'label', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Form.Field, _extends({ control: _semanticUiReact.Radio, label: label,
      checked: input.value ? true : false,
      onClick: function onClick(event, data) {
        return input.onChange(!data.checked);
      } }, custom))
  );
};

exports.RadioField = RadioField;
var Checkbox = function Checkbox(_ref12) {
  var input = _ref12.input,
      label = _ref12.label,
      _ref12$meta = _ref12.meta,
      touched = _ref12$meta.touched,
      error = _ref12$meta.error,
      custom = _objectWithoutProperties(_ref12, ['input', 'label', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Checkbox, _extends({ label: label,
      checked: input.value ? true : false,
      onClick: function onClick(event, data) {
        return input.onChange(data.checked);
      } }, custom))
  );
};

exports.Checkbox = Checkbox;
var CheckboxField = function CheckboxField(_ref13) {
  var input = _ref13.input,
      label = _ref13.label,
      _ref13$meta = _ref13.meta,
      touched = _ref13$meta.touched,
      error = _ref13$meta.error,
      custom = _objectWithoutProperties(_ref13, ['input', 'label', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Form.Field, _extends({ control: _semanticUiReact.Checkbox, label: label,
      checked: input.value ? true : false,
      onClick: function onClick(event, data) {
        return input.onChange(data.checked);
      } }, custom))
  );
};

exports.CheckboxField = CheckboxField;
var RangeField = function RangeField(_ref14) {
  var input = _ref14.input,
      label = _ref14.label,
      min = _ref14.min,
      max = _ref14.max,
      required = _ref14.required,
      _ref14$meta = _ref14.meta,
      touched = _ref14$meta.touched,
      error = _ref14$meta.error,
      rest = _objectWithoutProperties(_ref14, ['input', 'label', 'min', 'max', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error ? true : false, required: required },
      _react2.default.createElement(
        'label',
        null,
        label,
        ' : ',
        input.value
      ),
      _react2.default.createElement('input', _extends({ type: 'range', required: required, min: min, max: max }, input, rest)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.RangeField = RangeField;
var Range = function Range(_ref15) {
  var input = _ref15.input,
      min = _ref15.min,
      max = _ref15.max,
      required = _ref15.required,
      _ref15$meta = _ref15.meta,
      touched = _ref15$meta.touched,
      error = _ref15$meta.error,
      rest = _objectWithoutProperties(_ref15, ['input', 'min', 'max', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement('input', _extends({ type: 'range', required: required, min: min, max: max }, input, rest))
  );
};

exports.Range = Range;
var DropdownField = function DropdownField(_ref16) {
  var input = _ref16.input,
      label = _ref16.label,
      required = _ref16.required,
      options = _ref16.options,
      _ref16$meta = _ref16.meta,
      touched = _ref16$meta.touched,
      error = _ref16$meta.error,
      custom = _objectWithoutProperties(_ref16, ['input', 'label', 'required', 'options', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error ? true : false, required: required },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(_semanticUiReact.Dropdown, _extends({ search: true, value: input.value, required: required,
        options: options,
        onChange: function onChange(event, data) {
          return input.onChange(data.value);
        } }, custom)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.DropdownField = DropdownField;
var Dropdown = function Dropdown(_ref17) {
  var input = _ref17.input,
      required = _ref17.required,
      options = _ref17.options,
      _ref17$meta = _ref17.meta,
      touched = _ref17$meta.touched,
      error = _ref17$meta.error,
      rest = _objectWithoutProperties(_ref17, ['input', 'required', 'options', 'meta']);

  return _react2.default.createElement(_semanticUiReact.Dropdown, _extends({ search: true, value: input.value, required: required,
    options: options,
    onChange: function onChange(event, data) {
      return input.onChange(data.value);
    } }, rest));
};

exports.Dropdown = Dropdown;
var UploadField = function UploadField(_ref18) {
  var label = _ref18.label,
      input = _ref18.input,
      required = _ref18.required,
      _ref18$meta = _ref18.meta,
      touched = _ref18$meta.touched,
      error = _ref18$meta.error,
      rest = _objectWithoutProperties(_ref18, ['label', 'input', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(
      _semanticUiReact.Form.Field,
      { error: touched && error, required: required },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(_semanticUiReact.Input, _extends({
        type: 'file',
        value: input.value === '' && input.value,
        onChange: function onChange(e) {
          return input.onChange(e.target.files[0]);
        }
      }, rest)),
      touched && error ? _react2.default.createElement(
        'span',
        { style: { color: '#9F3A38' } },
        error
      ) : null
    )
  );
};

exports.UploadField = UploadField;
var Upload = function Upload(_ref19) {
  var input = _ref19.input,
      required = _ref19.required,
      _ref19$meta = _ref19.meta,
      touched = _ref19$meta.touched,
      error = _ref19$meta.error,
      rest = _objectWithoutProperties(_ref19, ['input', 'required', 'meta']);

  return (//eslint-disable-line
    _react2.default.createElement(_semanticUiReact.Input, _extends({
      required: required,
      type: 'file',
      value: input.value === '' && input.value,
      onChange: function onChange(e) {
        return input.onChange(e.target.files[0]);
      }
    }, rest))
  );
};
exports.Upload = Upload;