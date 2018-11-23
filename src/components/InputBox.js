import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import { onInputSubmit, resetForm } from '../actions/input';

const validate = values => {
    const errors = {};

    if (!values.inputNumber) {
        errors.inputNumber = 'Required';
    } else if (
        values.inputNumber.length > 10 ||
        values.inputNumber.length < 1
    ) {
        errors.inputNumber = 'Please enter a number between 1 and 10';
    }
    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="input-field">
        <label htmlFor="inputVal">{label}</label>
        <div>
            <input
                id="inputVal"
                {...input}
                placeholder="123abc..."
                type={type}
            />
            {touched && error && <span className="error-message">{error}</span>}
        </div>
    </div>
);

class InputBox extends React.Component {
    handleFormSubmit = val => {
        const { handleInputSubmit } = this.props;
        handleInputSubmit(val.inputNumber);
    };

    handleReset = () => {
        const { reset, resetAction } = this.props;
        reset();
        resetAction();
    };

    render() {
        const {
            fetching,
            handleSubmit,
            submitting,
            result,
            invalid,
        } = this.props;
        return (
            <div className="box-layout">
                <button
                    className="reset-button"
                    onClick={this.handleReset}
                    type="button"
                >
                    Reset
                </button>
                <h1 className="box-layout__title">Danske task</h1>
                <form
                    className="box-layout__box"
                    onSubmit={handleSubmit(this.handleFormSubmit)}
                >
                    <Field
                        name="inputNumber"
                        component={renderField}
                        type="text"
                        label="Fill in your key"
                    />

                    <button
                        className="button--link"
                        type="submit"
                        disabled={submitting || invalid}
                    >
                        {fetching ? (
                            <img
                                className="loader__image"
                                src="/images/loader.gif"
                                alt=""
                            />
                        ) : (
                            'Submit'
                        )}
                    </button>

                    <h2 className="output-result">
                        {result !== null ? `Result: ${result}` : null}
                    </h2>
                </form>
            </div>
        );
    }
}

InputBox.propTypes = {
    handleInputSubmit: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    resetAction: PropTypes.func.isRequired,
    // eslint-disable-next-line
    result: PropTypes.number,
};
const mapDispatchToProps = dispatch => ({
    handleInputSubmit: number => dispatch(onInputSubmit(number)),
    resetAction: () => dispatch(resetForm()),
});

const mapStateToProps = state => ({
    result: state.app.result,
    fetching: state.app.fetching,
});

// eslint-disable-next-line
InputBox = reduxForm({
    form: 'inputBox',
    validate,
})(InputBox);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputBox);
