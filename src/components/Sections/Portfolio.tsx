import Image from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import ImageModal from '../ImageModal';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % portfolioItems.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  }, []);

  const {image, title, description} = portfolioItems[currentIndex];

  return (
    <Section sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of our work</h2>

        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => (
            <div className="pb-6" key={`${item.title}-${index}`}>
              <div
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer shadow-black/30 lg:shadow-xl"
                onClick={() => openModal(index)}>
                <Image alt={item.title} layout="responsive" placeholder="blur" src={item.image} />

                <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100">
                  <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center text-white">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ImageModal
          description={description}
          imageUrl={typeof image === 'string' ? image : image.src}
          isOpen={isOpen}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          title={title}
        />
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
