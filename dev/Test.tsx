import PropTypes from 'prop-types';

function Test(props: unknown) {
    return (
        <div>
        <h1>{props.name}</h1>
        </div>
    );
}

Test.propTypes = {
    name: PropTypes.string.isRequired
}

Test.defaultProps = {
    name: "Default name"
}

export default Test;
