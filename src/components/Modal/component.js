import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { get } from 'lodash';

export const CustomModal = (props) => {
  const { classes, visible, onCloseModal, data } = props;
  return (
    <Modal
      visible={visible}
      onCancel={onCloseModal}
      wrapClassName={classes.modal}
      centered
      footer={null}
      destroyOnClose
    >
      <div className={'img-wrapper'}>
        <img src={get(data, 'Poster')} alt={get(data, 'Title')}/>
      </div>
      <h4>{get(data, 'Title')}</h4>
    </Modal>
  );
};

CustomModal.defaultProps = {
  classes: {},
  data: {},
  visible: true,
  onCloseModal: ()=>null
};

CustomModal.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  visible: PropTypes.bool,
  onCloseModal: PropTypes.func
};

export default CustomModal;

