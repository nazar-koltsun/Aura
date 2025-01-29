import { useState } from 'react';
import { cn } from '../../lib/utils';

import Button from '../Button';
import Modal from '../Modal';

import TriangeIcon from '../icons/TriangeIcon';

const VideoWidget = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalClicked, setIsModalClicked] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTimeout(() => setIsModalClicked(false), 100);
    setIsOpen(false);
  };

  const onModalClick = () => {
    setIsModalClicked(true);
  };

  let content = (
    <Button
      onClick={openModal}
      className="fixed top-2/3 right-4 transform z-50 shadow-smallShadow max-1024:p-3 max-1024:text-xs max-1024:gap-1.5"
    >
      <TriangeIcon className="rotate-90 max-1024:w-3 max-1024:h-3" />
      <span>Zobacz video</span>
    </Button>
  );

  if (isOpen) {
    content = (
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        onClick={onModalClick}
        showBackdrop={isModalClicked ? true : false}
        className={cn(
          'w-[324px] h-[180px] top-2/3 right-4 left-auto transform-none translate-x-0 translate-y-0 p-0 border-0 max-1024:p-0',
          isModalClicked &&
            'w-[800px] h-[480px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 pt-8 max-960:w-full max-960:h-full max-960:rounded-none max-520:pb-0 max-520:px-0 max-520:border-0'
        )}
      >
        <iframe
          className={cn('pointer-events-none', isModalClicked && 'pointer-events-auto')}
          src={isModalClicked ? videoUrl + '&autoplay=1' : videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Modal>
    );
  }

  return content;
};

export default VideoWidget;
