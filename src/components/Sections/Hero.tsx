import {ChevronDownIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import logo from '../../images/logo.png';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className=" top-[60px] z-10 max-w-screen-lg px-4 lg:px-3">
          <div className="mt-13 top-[30px] flex flex-col items-center gap-y-4 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <div className="relative">
              <Image alt="Logo" layout="intrinsic" objectFit="contain" priority src={logo} />
            </div>
            <h1 className="text-xl font-bold text-white sm:text-2xl lg:text-xl ">{name}</h1>

            {description}
            <div className="my-[10px] flex gap-x-6 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-6">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 mb-[30px] flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
