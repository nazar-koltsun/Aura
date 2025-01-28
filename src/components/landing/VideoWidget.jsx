import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';

import TriangeIcon from '../icons/TriangeIcon';

const VideoWidget = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  let content = (
    <Button
      onClick={openModal}
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 shadow-smallShadow max-1024:p-3"
    >
      <TriangeIcon className="rotate-90" />
      <span className="max-1024:hidden">Zobacz video</span>
    </Button>
  );

  if (isOpen) {
    content = (
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="w-[800px] h-[452px] max-960:w-full max-960:h-full max-960:rounded-none max-520:pb-0 max-520:px-0 max-520:border-0"
      >
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal>
    );
  }

  return content;
};

export default VideoWidget;
