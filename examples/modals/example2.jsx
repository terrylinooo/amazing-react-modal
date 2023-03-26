import { useState } from 'react';
import { MessageModal } from '../../src/index';
import { secondExampleCode } from './fixtures';

const Example2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="examples">
      <h2>2. Normal</h2>
      <p>
        Modal does have a footer and message image.
        <br />
        Just fill in text for the &quot;submitButtonText&quot; and &quot;closeButtonText&quot;
        attributes and the footer and its button will be displayed.
      </p>
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
        imageUrl="https://i.imgur.com/GFgbANa.png"
        submitButtonText="Confirm"
        closeButtonText="Cancel"
        onCloseButtonClick={() => {
          setModalOpen(false);
        }}
      />
      <code>
        <pre>{secondExampleCode}</pre>
      </code>
    </div>
  );
};

export default Example2;
