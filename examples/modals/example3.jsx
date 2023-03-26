import { useState } from 'react';
import PropTypes from 'prop-types';
import { SUBMISSION_BUTTON_CSS } from '../../src/shared/css-name';
import Modal from '../../src/index';
import { thirdExampleCode, thirdExampleCodePart2 } from './fixtures';

const MyCustomModal = ({ isOpen, setOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Header>Title text</Modal.Header>
      <Modal.Body>
        <div style={{ padding: '10px', textAlign: 'center' }}>Hello, world.</div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.FooterButton onClick={() => setOpen(false)}>Cancel</Modal.FooterButton>
        <Modal.FooterButton classes={SUBMISSION_BUTTON_CSS} onClick={() => console.log('oK')}>
          Submit
        </Modal.FooterButton>
      </Modal.Footer>
      <Modal.FloatingIconButton
        onClick={() => setOpen(false)}
        icon="x"
        style={{ top: '10px', right: '10px' }}
      />
    </Modal>
  );
};

const Example3 = () => {
  const [isCustomModalOpen, setCustomModalOpen] = useState(false);

  return (
    <div className="examples">
      <h2>3. Customization.</h2>
      <p>
        This example shows how to customize your own Modal Component.
        <br />
        In this example, we create a modal called &quot;MyCustomModal&quot;.
      </p>
      <button
        onClick={() => {
          setCustomModalOpen(true);
        }}
      >
        Open Modal
      </button>
      <MyCustomModal isOpen={isCustomModalOpen} setOpen={setCustomModalOpen} />
      <code>
        <pre>{thirdExampleCode}</pre>
      </code>
      <p>
        Then use it in your component. The Modal&apos;s state should be controlled by a parent
        component.
      </p>
      <code>
        <pre>{thirdExampleCodePart2}</pre>
      </code>
    </div>
  );
};

MyCustomModal.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Example3;
