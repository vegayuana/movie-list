import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Spinner = (props) => {
  const { classes } = props;
  return (
    <div className={classes.loading}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
    </div>
  );
};

Spinner.defaultProps = {
  classes: {},
};

Spinner.propTypes = {
  classes: PropTypes.object,
};

export default Spinner;

