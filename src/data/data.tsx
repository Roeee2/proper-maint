import {
  BadgeCheckIcon,
  ChatAlt2Icon,
  DownloadIcon,
  HomeIcon,
  SparklesIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Proper Maint Cornwall',
  description: 'Property Maintenance Services in Cornwall',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Property Maintenance Cornwall`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Our company provides{' '}
        <strong className="text-stone-100">the comprehensive range of highest quality services</strong> so that you can
        be sure that your home is always taken care of. From{' '}
        <strong className="text-stone-100">household cleaning </strong>to{' '}
        <strong className="text-stone-100">sparkle cleans, pressure washing, holiday lets changeovers</strong> to all
        types of <strong className="text-stone-100">handyman work, PAT testing,</strong> or even{' '}
        <strong className="text-stone-100">tiling, </strong>
        our team of trained professionals will make sure your house looks and feels its best. With our reliable,
        affordable services, you'll never have to worry about the condition of your home again.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Are you in the market for <strong className="text-stone-100">property maintenance</strong> services? Look no
        further than us! We are based in <strong className="text-stone-100">Newquay</strong> and cover the entire county
        of <strong className="text-stone-100">Cornwall.</strong> Check out our portfolio to get an idea of our expertise
        and <strong className="text-stone-100">give us a call </strong>
        to get a <strong className="text-stone-100">free quote!</strong> With us, you'll receive a quality service that
        won't break the bank. Get started today with <strong className="text-stone-100">property maintenance </strong>
        that works for <strong className="text-stone-100">you!</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/flyer.pdf',
      text: 'Flyer',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      Our team of experienced professionals are reliable, trustworthy, and committed to delivering the highest quality
      service. With us, you can rest assured that your home is in safe hands! Are you looking to get a job done quickly
      and cost-effectively? Look no further! We provide a wide range of services and our prices are unbeatable. With
      years of experience and high customer satisfaction, you can trust us to get your job done properly. Don't hesitate
      to give us a call for a free quote today! Need a <strong className="text-stone-100">property maintenance</strong>{' '}
      assistance? <strong className="text-stone-100"> We do it proper!</strong>
    </>
  ),

  aboutItems: [
    {label: 'Cleaning', text: 'housekeeping, sparkle cleans, changeovers', Icon: HomeIcon},
    {label: 'Pressure wash', text: 'patios, driveways, guttering', Icon: SparklesIcon},
    {label: 'Handyman work', text: 'repairs, DIY, furniture assembly', Icon: SparklesIcon},
    {label: 'PAT tests', text: 'Portable Appliance Testing', Icon: BadgeCheckIcon},
    {label: 'Tiling', text: 'mosaics, slate, metro, penrose, stone face', Icon: ViewGridIcon},
    {label: 'Other', text: 'ask for assistance', Icon: ChatAlt2Icon},
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Services section
 */
export const education: TimelineItem[] = [
  {
    date: 'North Cornwall',
    location: 'Domestic & Commercial',
    title: 'Housekeeping',
    content: (
      <>
        <p>
          Our cleaning services are designed to meet the needs of both residential and commercial customers. We offer a
          range of services to keep your living and working spaces clean and hygienic.
        </p>
        <ul>
          <li>
            <strong>
              <br />
              Domestic Cleaning Services:
            </strong>
            <ul>
              <li>
                <br />
                Dusting and polishing of surfaces
              </li>
              <li>Vacuuming and mopping floors</li>
              <li>Cleaning and sanitizing bathrooms and kitchens</li>
              <li>General cleaning tasks</li>
              <li>Regular cleaning schedule (weekly, bi-weekly, monthly)</li>
            </ul>
          </li>
          <li>
            <strong>
              <br />
              Commercial Cleaning Services:
            </strong>
            <ul>
              <li>
                <br />
                Trash removal
              </li>
              <li>Vacuuming and dusting of surfaces</li>
              <li>Cleaning and sanitizing bathrooms and kitchens</li>
              <li>General cleaning tasks</li>
              <li>Flexible scheduling to minimize disruption to your business</li>
            </ul>
          </li>
          <li>
            <strong>
              <br />
              Additional Services:
            </strong>
            <ul>
              <li>
                <br />
                Carpet cleaning
              </li>
              <li>Window washing</li>
              <li>Deep cleaning</li>
              <li>Post-construction cleaning</li>
              <li>Move-in or move-out cleaning</li>
              <li>Specialized cleaning for healthcare or food service industries</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Cornwall',
    location: 'New builds, renovations & sales',
    title: 'Sparkle Cleans',
    content: (
      <div>
        <p>
          Our Sparkle Cleaning Services are designed to provide a thorough and detailed clean for properties after
          construction, ensuring that they are ready for tenants to move in. We understand that the final stage of
          construction can leave properties covered in dust, debris, and grime, which is why our Sparkle Cleaning
          Services are tailored to meet the needs of construction and property management professionals.
        </p>
        <br />
        <ul>
          <li>Cleaning and dusting of all surfaces, including walls, floors, and ceilings</li>
          <li>Cleaning and polishing of all fixtures, such as light fixtures and switches</li>
          <li>Cleaning and sanitizing of all kitchen and bathroom surfaces</li>
          <li>Cleaning of all interior and exterior windows, including frames and sills</li>
          <li>Cleaning of all interior and exterior doors and frames</li>
          <li>Removal of all debris and rubbish from the property</li>
          <li>Use of specialized equipment and cleaning products to ensure a thorough and deep clean</li>
        </ul>
        <br />
        <p>
          Our team of experienced cleaners are trained to provide a high-quality clean that meets the strictest
          standards of cleanliness and hygiene. We work closely with construction and property management professionals
          to ensure that our Sparkle Cleaning Services are tailored to meet the specific needs of each project.
        </p>
        <br />
        <p>
          At Proper Maint, we pride ourselves on providing a reliable and efficient Sparkle Cleaning Service that gets
          your property ready for tenants to move in. Contact us today to schedule a Sparkle Cleaning Service and
          experience the difference of a thoroughly clean and hygienic living or working space.
        </p>
      </div>
    ),
  },
  {
    date: 'North Cornwall',
    location: 'Holiday parks & private lets',
    title: 'Holidaylet changeovers',
    content: (
      <p>
        Our Holidaylet changeovers cleaning services are designed to provide a hassle-free experience for holiday park
        and private let owners. We specialize in thorough and efficient cleaning between guests to ensure your property
        is always in pristine condition for the next vacationers. Our team of experienced cleaners is equipped with
        specialized equipment and cleaning products to tackle any cleaning challenge. We offer flexible scheduling to
        accommodate your needs, and our services can be customized to fit your specific requirements. With our
        Holidaylet changeovers cleaning services, you can enjoy peace of mind knowing that your guests will have a
        comfortable and enjoyable stay.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'North Cornwall',
    location: 'Minor repairs, maintenance, DIY',
    title: 'Repairs & handyman service',
    content: (
      <div>
        <p>
          Our maintenance services are designed to help you keep your property in top condition. We offer a range of
          services, including:
        </p>
        <br />
        <ul>
          <li>Minor repairs</li>
          <li>Maintenance</li>
          <li>DIY projects, including flat-packed furniture assembly and general handyman work</li>
        </ul>
        <br />
        <p>
          Our team of skilled professionals is equipped to handle a wide variety of tasks, from fixing leaky faucets to
          replacing light fixtures. We use high-quality materials and tools to ensure that every job is done right the
          first time.
        </p>
        <br />
        <p>
          We understand that your time is valuable, which is why we offer flexible scheduling to accommodate your needs.
          Whether you need a one-time repair or ongoing maintenance, we can create a customized plan that fits your
          budget and schedule. With our maintenance services, you can enjoy peace of mind knowing that your property is
          always in good hands.
        </p>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Marcelina Kamińska',
      text: 'The attention to detail was outstanding and the end result exceeded my expectations. I would highly recommend this company to anyone looking for a professional and reliable tiling service',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Zoe Baverstock',
      text: 'I was blown away by the level of detail and thoroughness in the cleaning services provided by Proper Maint. My place has never looked better. Highly recommend!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Filip Potocki',
      text: 'Excellent maintenance service! They arrived on time, completed the work efficiently and left everything clean and tidy. Highly recommended!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: ' Contact us today to see how we can help you!',
  items: [
    {
      type: ContactType.Email,
      text: 'propermaint@gmail.com',
      href: 'propermaint@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Newquay, Cornwall',
      href: 'https://www.google.com/maps/place/Newquay/@50.4124693,-5.1119065,13z/data=!3m1!4b1!4m6!3m5!1s0x486b0c115ab95687:0xc49b1af1e0545263!8m2!3d50.415497!4d-5.073719!16zL20vMGhjODQ',
    },
    {
      type: ContactType.Instagram,
      text: '@propermaint',
      href: 'https://www.instagram.com/propermaint/',
    },
  ],
};

/**
 * Social items
 */

export const socialLinks: Social[] = [
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100089614483991/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/proper-maint/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/propermaint/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ProperMaint'},
];
