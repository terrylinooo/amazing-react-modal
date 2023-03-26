import { useState } from 'react';
import { MessageModal } from '../../src/index';
import { firstExampleCode } from './fixtures';

const Example1 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="examples">
      <h2>1. Simple</h2>
      <p>Modal does not have a footer and message image.</p>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open Modal
      </button>
      <MessageModal
        title="Please Confirm Deletion"
        isOpen={isModalOpen}
        message="Are you sure to delete this item from your shopping cart?"
        onCloseButtonClick={() => {
          setModalOpen(false);
        }}
      />
      <code>
        <pre>{firstExampleCode}</pre>
      </code>
    </div>
  );
};

export default Example1;
