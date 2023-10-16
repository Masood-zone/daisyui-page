import React from "react";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Branding",
    path: "#",
  },
  {
    id: 2,
    title: "Design",
    path: "#",
  },
  {
    id: 3,
    title: "Marketing",
    path: "#",
  },
  {
    id: 4,
    title: "Adverstisement",
    path: "#",
  },
];

const COMPANY_DATA = [
  {
    id: 1,
    title: "About Us",
    path: "#",
  },
  {
    id: 2,
    title: "Contact",
    path: "#",
  },
  {
    id: 3,
    title: "Jobs",
    path: "#",
  },
  {
    id: 4,
    title: "Press kit",
    path: "#",
  },
];

const LEGAL_DATA = [
  {
    id: 1,
    title: "Terms of use",
    path: "#",
  },
  {
    id: 2,
    title: "Privacy policy",
    path: "#",
  },
  {
    id: 3,
    title: "Cookie Policy",
    path: "#",
  },
];

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container">
        <div className="footer py-10 md:py-16 grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
          <FooterContent title="Services" footerData={SERVICES_DATA} />
          <FooterContent title="Company" footerData={COMPANY_DATA} />
          <FooterContent title="Legal" footerData={LEGAL_DATA} />
          <div className="w-full col-span-full md:col-auto">
            <form className="w-full">
              <header className="footer-title">
                Subscribe to our Newsletter
              </header>
              <fieldset className="form-control">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@example.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0  rounded-1-none">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2">
          <div className="flex-grow text-center sm:text-start">
            <p>&copy;2023 Chippycode, Community. All Rights Reserved.</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a href="#!" className="link link-secondary">
              <i className="bi bi-facebook text-xl"></i>
            </a>
            <a href="#!" className="link link-secondary">
              <i className="bi bi-instagram text-xl"></i>
            </a>
            <a href="#!" className="link link-secondary">
              <i className="bi bi-twitter text-xl"></i>
            </a>
            <a href="#!" className="link link-secondary">
              <i className="bi bi-github text-xl"></i>
            </a>
            <a href="#!" className="link link-secondary">
              <i className="bi bi-dribbble text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function FooterContent({ title, footerData }) {
  return (
    <nav>
      <header className="footer-title">{title}</header>
      {footerData.map((footer) => {
        return (
          <a href={footer.path} className="link link-hover">
            {footer.title}
          </a>
        );
      })}
    </nav>
  );
}
