import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: "Facebook",
    href: "https://www.facebook.com/Runtogether.official",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/RunTogether_Nft",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/Runtogetherofficialgroup",
  },
  {
    label: "Globe",
    icon: "Globe",
    href: "https://runtogether.net/",
  },
  // {
  //   label: "GitLab",
  //   icon: "GitLab",
  //   href: "https://ltd.livetrade.io/",
  // },
  // {
  //   label: "Telegram",
  //   icon: "Telegram",
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/LiveTradeLTD",
  //     },
  //   ],
  // },
  
];
export const MoreInformation = [
  {
    label: "Whitepaper",
    href: "https://whitepaper.runtogether.net/about-run-together/general",
  },
  {
    label: "Pitchdeck",
    href: "https://runtogether.net/wp-content/uploads/2022/08/Pitchdeck-Run-Together-Eng.pdf",
  },
  {
    label: "Smart Contract",
    href: "https://bscscan.com/address/0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7",
  },
  {
    label: "Audits",
    href: "https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20RunTogether%20Token%20v2%20-%20v1.0.pdf",
  },
]

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
