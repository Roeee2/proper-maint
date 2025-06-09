import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="mx-auto grid grid-cols-1 grid-rows-2 justify-center gap-4">
        <div className="flex items-center justify-center text-white">
          <div className="mx-auto ">
            <div
              className={classNames('grid  grid-cols-1  gap-y-4 ', {
                'md:grid-cols-4': !!profileImageSrc,
              })}>
              {!!profileImageSrc && (
                <div className="col-span-1 flex justify-center self-center md:justify-start">
                  <div className="relative mr-5 h-24 w-24 overflow-hidden rounded-xl drop-shadow-[0_45px_45px_rgba(255,255,255,0.25)] md:h-64  md:w-64">
                    <Image alt="handyman-image" layout="fill" objectFit="contain" src={profileImageSrc} />
                  </div>
                </div>
              )}
              <div className={classNames('flex w-fit flex-col gap-y-5', {'md:col-span-3': !!profileImageSrc})}>
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-2xl font-bold text-white">About us</h2>
                  <p className="prose prose-sm text-justify text-gray-300 sm:prose-base">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center p-4 text-white">
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-2 gap-y-2 md:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="flex items-start gap-2" key={idx}>
                {Icon && <Icon className="mt-1 h-5 w-5 shrink-0 text-white" />}
                <div className="flex flex-col">
                  <div className="flex gap-4">
                    <span className="min-w-[100px] shrink-0 text-sm font-bold text-white">{label}:</span>
                    <span className="text-sm text-gray-300">{text}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
