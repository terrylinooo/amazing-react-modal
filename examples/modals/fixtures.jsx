export const Register = () => {
  return <div style={{ padding: '20px' }}></div>;
};

export const Login = () => {
  return <div style={{ padding: '20px' }}></div>;
};

export const Tos = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p>
        Welcome to our website. These Terms of Service govern your use of our site and all its
        related services. By accessing or using our site, you agree to be bound by these terms and
        conditions. If you do not agree to these terms, you may not use our site.
      </p>
      <ol>
        <li>
          Use of our Site: You may only use our site for lawful purposes and in accordance with
          these Terms of Service. You may not use our site:
          <ul>
            <li>
              In any way that violates any applicable federal, state, local, or international law or
              regulation
            </li>
            <li>
              To impersonate or attempt to impersonate the Company, a Company employee, another
              user, or any other person or entity
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone&apos;s use or
              enjoyment of the site, or which, as determined by us, may harm the Company or users of
              the site or expose them to liability.
            </li>
          </ul>
        </li>
        <li>
          Intellectual Property: The content on our site, including but not limited to text,
          graphics, logos, images, and software, is the property of the Company or its licensors and
          is protected by copyright, trademark, and other intellectual property laws. You may not
          copy, modify, distribute, display, transmit, perform, publish or sell any such content
          without the express written consent of the Company.
        </li>
        <li>
          Disclaimer of Warranties: The Company makes no representations or warranties of any kind,
          express or implied, as to the operation of the site or the information, content,
          materials, or products included on the site. You expressly agree that your use of the site
          is at your sole risk.
        </li>
        <li>
          Limitation of Liability: In no event shall the Company or its affiliates, officers,
          directors, employees, or agents be liable to you or any third party for any damages,
          including but not limited to, indirect, incidental, consequential, or punitive damages,
          arising from or in connection with your use of the site.
        </li>
      </ol>
      <p>
        By using our site, you agree to be bound by these Terms of Service. If you have any
        questions or concerns about these terms, please contact us.
      </p>
    </div>
  );
};

export const firstExampleCode = `<MessageModal
  title="Please Confirm Deletion"
  isOpen={isModalOpen}
  message="Are you sure to delete this item from your shopping cart?"
  onCloseButtonClick={() => {
    setModalOpen(false);
  }}
/>`;

export const secondExampleCode = `<MessageModal
  title="Please Confirm Deletion"
  isOpen={isModalOpen}
  message="Are you sure to delete this item from your shopping cart?"
  imageUrl="https://i.imgur.com/GFgbANa.png"
  submitButtonText="Confirm"
  closeButtonText="Cancel"
  onCloseButtonClick={() => {
    setModalOpen(false);
  }}
/>`;

export const thirdExampleCode = `const MyCustomModal = ({ isOpen, setOpen }) => {
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
};`;

export const thirdExampleCodePart2 = `const YourComponent = () => {
  const [isCustomModalOpen, setCustomModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setCustomModalOpen(true)}>Open Modal</button>
      <MyCustomModal isOpen={isCustomModalOpen} setOpen={setCustomModalOpen} />
    </>
  );
};
`;
