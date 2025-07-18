import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}> = memo(
  ({children, sectionId, noPadding = false, className}) => {
    return (
      <section className={classNames(className, {'px-20 py-16 md:py-24 lg:px-64 lg:py-32': !noPadding})} id={sectionId}>
        <div
          className={classNames({
            'mx-auto': !noPadding,
          })}>
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
