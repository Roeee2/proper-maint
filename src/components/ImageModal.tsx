import {Dialog, Transition} from '@headlessui/react';
import {FC, Fragment, memo} from 'react';

interface Props {
  description: string;
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
}

const ImageModal: FC<Props> = memo(({description, imageUrl, isOpen, onClose, onNext, onPrev, title}) => (
  <Transition as={Fragment} show={isOpen}>
    <Dialog as="div" className="relative z-50" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="fixed inset-0 bg-black bg-opacity-75" />
      </Transition.Child>

      <div className="fixed inset-0 flex min-h-screen items-center justify-center p-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg border border-white bg-neutral-800 p-4">
            <div className="flex items-center justify-center gap-x-4">
              <button
                aria-label="Previous image"
                className="shrink-0 text-3xl font-bold text-white transition-opacity hover:opacity-70"
                onClick={onPrev}
                type="button">
                &#10094;
              </button>

              <Dialog.Title className="text-center text-lg font-bold text-gray-200">{title}</Dialog.Title>

              <button
                aria-label="Next image"
                className="shrink-0 text-3xl font-bold text-white transition-opacity hover:opacity-70"
                onClick={onNext}
                type="button">
                &#10095;
              </button>
            </div>

            <div className="relative mt-5">
              <button
                aria-label="Previous image"
                className="absolute inset-y-0 left-0 z-10 w-1/4 cursor-pointer"
                onClick={onPrev}
                type="button"
              />

              <img alt={title} className="h-auto max-h-[70vh] w-full rounded-md object-contain" src={imageUrl} />

              <button
                aria-label="Next image"
                className="absolute inset-y-0 right-0 z-10 w-1/4 cursor-pointer"
                onClick={onNext}
                type="button"
              />
            </div>

            <p className="mb-4 mt-6 text-center text-white">{description}</p>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
));

ImageModal.displayName = 'ImageModal';

export default ImageModal;
