import PropTypes from 'prop-types';
import { memo } from 'react';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

import useToastMessage from './useToastMessage';

import { Container } from './styles';

function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef
}) {
  const { handleRemoveToast } = useToastMessage(message, onRemoveMessage);

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="Error" />}
      {message.type === 'success' && (
        <img src={checkCircleIcon} alt="Success" />
      )}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

export default memo(ToastMessage);
