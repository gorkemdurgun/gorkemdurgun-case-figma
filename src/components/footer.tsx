import { svg } from "../assets/images";

const columnProduct = [
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Browse",
    href: "#",
  },
  {
    title: "Accessibility",
    href: "#",
  },
  {
    title: "Five",
    href: "#",
  },
];
const columnSolutions = [
  {
    title: "Brainstorming",
    href: "#",
  },
  {
    title: "Ideation",
    href: "#",
  },
  {
    title: "Wireframing",
    href: "#",
  },
  {
    title: "Research",
    href: "#",
  },
  {
    title: "Design",
    href: "#",
  },
];
const columnSupport = [
  {
    title: "Contact Us",
    href: "#",
  },
  {
    title: "Developers",
    href: "#",
  },
  {
    title: "Documentation",
    href: "#",
  },
  {
    title: "Integrations",
    href: "#",
  },
  {
    title: "Reports",
    href: "#",
  },
];
const rowSocials = [
  {
    title: "YouTube",
    href: "#",
    icon: svg.YouTubeIcon,
  },
  {
    title: "Facebook",
    href: "#",
    icon: svg.FacebookIcon,
  },
  {
    title: "Twitter",
    href: "#",
    icon: svg.TwitterIcon,
  },
  {
    title: "Instagram",
    href: "#",
    icon: svg.InstagramIcon,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: svg.LinkedInIcon,
  },
];

export const Footer = () => {
  return (
    <div className="bg-darkBlue">
      <div className="container w-full flex flex-col">
        <div className="w-full grid grid-cols-4 gap-[48px] py-[48px] border-b-[1px] border-[#334155]">
          <div className="col-span-4 md:col-span-1 flex flex-col justify-start items-center md:items-start">
            <span className="p-[12px] pl-0 subtitle-m text-white">Product</span>
            {columnProduct.map((item, index) => (
              <a key={index} href={item.href} className="p-[12px] pl-0 body-m text-linkWhite">
                {item.title}
              </a>
            ))}
          </div>
          <div className="col-span-4 md:col-span-1 flex flex-col justify-start items-center md:items-start">
            <span className="p-[12px] pl-0 subtitle-m text-white">Solutions</span>
            {columnSolutions.map((item, index) => (
              <a key={index} href={item.href} className="p-[12px] pl-0 body-m text-linkWhite">
                {item.title}
              </a>
            ))}
          </div>
          <div className="col-span-4 md:col-span-1 flex flex-col justify-start items-center md:items-start">
            <span className="p-[12px] pl-0 subtitle-m text-white">Support</span>
            {columnSupport.map((item, index) => (
              <a key={index} href={item.href} className="p-[12px] pl-0 body-m text-linkWhite">
                {item.title}
              </a>
            ))}
          </div>
          <div className="col-span-4 md:col-span-1 flex flex-col justify-between items-center md:items-start gap-[48px] md:gap-auto">
            <div className="flex flex-col justify-start items-center md:items-start">
              <span className="p-[12px] pl-0 subtitle-m text-white">Get the App</span>
              <div className="flex flex-col justify-start items-center md:items-start gap-[12px]">
                <img src={svg.AppStoreLogo} alt="App Store" />
                <img src={svg.GooglePlayLogo} alt="Google Play" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start">
              <span className="p-[12px] pl-0 subtitle-m text-white">Follow Us</span>
              <div className="flex flex-row justify-start items-center gap-[16px]">
                {rowSocials.map((item, index) => (
                  <a key={index} href={item.href}>
                    <img src={item.icon} alt={item.title} className="w-[24px] h-[24px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-[24px] gap-[24px] md:gap-[48px]">
          <span className="body-m text-linkWhite">Collers @ 2023. All rights reserved.</span>
          <div className="flex flex-row justify-start items-center gap-[32px]">
            <a href="#">
              <span className="py-[12px] body-m text-linkWhite">Terms</span>
            </a>
            <a href="#">
              <span className="py-[12px] body-m text-linkWhite">Privacy</span>
            </a>
            <a href="#">
              <span className="py-[12px] body-m text-linkWhite">Contact</span>
            </a>
            <a href="#" className="flex flex-row items-end gap-[8px] py-[12px] body-m text-linkWhite">
              <img src={svg.WorldIcon} alt="World" />
              <span className="uppercase">en</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
