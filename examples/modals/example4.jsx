import { useState } from 'react';
import { AmazingModal } from '../../src/index';
import { Tos, Login, Register } from './fixtures';
import { useDisableBodyScroll } from '../../src/shared/use-disable-body-scroll';

const Example4 = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  // Use this custom hook to disable or enable body scrolling.
  useDisableBodyScroll(isLoginModalOpen || isRegisterModalOpen || isTermsModalOpen);

  return (
    <div className="examples">
      <h2>4. Interact with Other Modals</h2>
      <p>This example shows you how to control modals to make them Interact with each other.</p>
      <button
        onClick={() => {
          setLoginModalOpen(true);
        }}
      >
        Open Primary Modal
      </button>
      <AmazingModal
        title="Login"
        isOpen={isLoginModalOpen}
        isNextIconButton={true}
        closeButtonText="Close"
        submitButtonText="Login"
        onCloseButtonClick={() => setLoginModalOpen(false)}
        onNextIconButtonClick={() => {
          setLoginModalOpen(false);
          setRegisterModalOpen(true);
        }}
      >
        <Login />
      </AmazingModal>
      <AmazingModal
        title="Register"
        isOpen={isRegisterModalOpen}
        isBackIconButton={true}
        closeButtonText="Close"
        middleButtonText="Terms"
        submitButtonText="Register"
        footerColumns={3}
        onCloseButtonClick={() => setRegisterModalOpen(false)}
        onBackIconButtonClick={() => {
          setLoginModalOpen(true);
          setRegisterModalOpen(false);
        }}
        onMiddleButtonClick={() => {
          setRegisterModalOpen(false);
          setTermsModalOpen(true);
        }}
      >
        <Register />
      </AmazingModal>
      <AmazingModal
        title="Terms of Service"
        isOpen={isTermsModalOpen}
        isBackIconButton={true}
        isNextIconButton={true}
        submitButtonText="Aggree"
        footerColumns={1}
        onCloseIconButtonClick={() => setTermsModalOpen(false)}
        onBackIconButtonClick={() => {
          setLoginModalOpen(false);
          setRegisterModalOpen(true);
          setTermsModalOpen(false);
        }}
        onNextIconButtonClick={() => {
          setLoginModalOpen(true);
          setRegisterModalOpen(false);
          setTermsModalOpen(false);
        }}
        onSubmitButtonClick={() => {
          setLoginModalOpen(false);
          setRegisterModalOpen(true);
          setTermsModalOpen(false);
        }}
      >
        <Tos />
      </AmazingModal>
    </div>
  );
};

export default Example4;
