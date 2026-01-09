"use client";
import React, { useRef, useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Menu = () => {
  const pathname = usePathname(); // ✅ Get current path

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };
  const toggleSubDropdown = (submenu) => {
    setActiveSubDropdown((prev) => (prev === submenu ? null : submenu));
  };
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <div className="menuContainer">
      <div className="menuContainerList">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <span className="service-text">
            Services
            <FaChevronDown className="menuDropIcon" />
          </span>
          <div className="menuDropDown">
            <li>
              <span>
                {" "}
                <Link
                  href="/cleaning-services"
                  className={pathname === "/cleaning-services" ? "actives" : ""}
                >
                  Cleaning Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/full-house"
                    className={pathname === "/full-house" ? "actives" : ""}
                  >
                    Full-House
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bathroom"
                    className={pathname === "/bathroom" ? "actives" : ""}
                  >
                    Bathroom
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen"
                    className={pathname === "/kitchen" ? "actives" : ""}
                  >
                    Kitchen{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chimney"
                    className={pathname === "/chimney" ? "actives" : ""}
                  >
                    Chimney
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carpet"
                    className={pathname === "/carpet" ? "actives" : ""}
                  >
                    Carpet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sofa"
                    className={pathname === "/sofa" ? "actives" : ""}
                  >
                    Sofa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mattress"
                    className={pathname === "/mattress" ? "actives" : ""}
                  >
                    Mattress
                  </Link>
                </li>
                <li>
                  <Link
                    href="/window"
                    className={pathname === "/window" ? "actives" : ""}
                  >
                    Window
                  </Link>
                </li>
                <li>
                  <Link
                    href="/balcony"
                    className={pathname === "/balcony" ? "actives" : ""}
                  >
                    Balcony
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chair"
                    className={pathname === "/chair" ? "actives" : ""}
                  >
                    Chair
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/marble-polishing"
                className={pathname === "/marble-polishing" ? "actives" : ""}
              >
                Marble Polishing
              </Link>
            </li>
            <li>
              <span>
                <Link
                  href="/painting-services"
                  className={pathname === "/painting-services" ? "actives" : ""}
                >
                  Painting Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/interior-painting"
                    className={
                      pathname === "/interior-painting" ? "actives" : ""
                    }
                  >
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/textured-painting"
                    className={
                      pathname === "/textured-painting" ? "actives" : ""
                    }
                  >
                    Textured Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exterior-painting"
                    className={
                      pathname === "/exterior-painting" ? "actives" : ""
                    }
                  >
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wood-polishing"
                    className={pathname === "/wood-polishing" ? "actives" : ""}
                  >
                    Wood Polishing
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/water-proofing"
                className={pathname === "/water-proofing" ? "actives" : ""}
              >
                Waterproofing
              </Link>
            </li>
            <li>
              <span>
                {" "}
                <Link
                  href="/house-renovation"
                  className={pathname === "/house-renovation" ? "actives" : ""}
                >
                  House Renovation
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/bathroom"
                    className={pathname === "/bathroom" ? "actives" : ""}
                  >
                    Bathroom Remodelling{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/shower"
                    className={pathname === "/shower" ? "actives" : ""}
                  >
                    Shower Enclosure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tiles"
                    className={pathname === "/tiles" ? "actives" : ""}
                  >
                    Tiles/Stone Replacement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/replastering"
                    className={pathname === "/replastering" ? "actives" : ""}
                  >
                    Replastering
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/wall-crack"
                    className={pathname === "/wall-crack" ? "actives" : ""}
                  >
                    Wall Crack Filling{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/home-inspection"
                    className={pathname === "/home-inspection" ? "actives" : ""}
                  >
                    Home Inspection
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/kitchen"
                    className={pathname === "/kitchen" ? "actives" : ""}
                  >
                    Kitchen Renovation
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/false-ceiling"
                    className={pathname === "/false-ceiling" ? "actives" : ""}
                  >
                    False Ceiling
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/grouting"
                className={pathname === "/grouting" ? "actives" : ""}
              >
                Grouting
              </Link>
            </li>
            <li>
              <span>
                {" "}
                <Link
                  href="/other-services"
                  className={pathname === "/other-services" ? "actives" : ""}
                >
                  Other Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/pest-control"
                    className={pathname === "/pest-control" ? "actives" : ""}
                  >
                    Pest Control Services
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/office-cleaning"
                    className={pathname === "/office-cleaning" ? "actives" : ""}
                  >
                    Office Cleaning
                  </Link>
                </li>
              </div>
            </li>
          </div>
        </li>
        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={pathname === "/gallery" ? "active" : ""}
          >
            Our Work Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </div>
      <div>
        <button className="button1" id="non-repsBtn" onClick={handlePop}>
          Book Now
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* ------------------------respMenuBar----------------------- */}
      <div className="respMenuBar">
        <FaBarsStaggered className="respMenuIcon" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FaX className="closeX" onClick={hideSideBar} />
          <div className="innerMenu">
            <li className="">
              <Link
                id="menuNavLink"
                href={`/`}
                onClick={hideSideBar}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </Link>{" "}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/about-us`}
                className={pathname === "/about-us" ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li className="respDropdownList">
              <span>
                Service
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("service")}
                />
              </span>
              {activeDropdown === "service" && (
                <div className="respDropDown">
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/`}
                        className={pathname === "/" ? "active" : ""}
                      >
                        Cleaning Services{" "}
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("pregnancy")}
                      />
                    </span>
                    {activeSubDropdown === "pregnancy" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Full-House
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Bathroom
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Kitchen
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Chimney
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Carpet
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Sofa
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Mattress
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Window
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Balcony
                          </Link>
                        </li>{" "}
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Chair
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/`}
                        className={pathname === "/" ? "active" : ""}
                      >
                        Marble Polishing{" "}
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("")}
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/usg-guided-procedure`}
                        className={
                          pathname === "/usg-guided-procedure" ? "active" : ""
                        }
                      >
                        Painting Services{" "}
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("USG")}
                      />
                    </span>
                    {activeSubDropdown === "USG" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Interior Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/growth-scan`}
                            className={
                              pathname === "/growth-scan" ? "active" : ""
                            }
                          >
                            Textured Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/fetal-echo`}
                            className={
                              pathname === "/fetal-echo" ? "active" : ""
                            }
                          >
                            Exterior Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/fetal-urosonogram`}
                            className={
                              pathname === "/fetal-urosonogram" ? "active" : ""
                            }
                          >
                            Wood Polishing
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/`}
                        className={pathname === "/" ? "active" : ""}
                      >
                        Waterproofing
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("infertile")}
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/`}
                        className={pathname === "/" ? "active" : ""}
                      >
                        House Renovation
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("doppler")}
                      />
                    </span>
                    {activeSubDropdown === "infertile" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-base-line-scan`}
                            className={
                              pathname === "/3d-base-line-scan" ? "active" : ""
                            }
                          >
                            Bathroom Remodelling{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-follicle-monitoring-with-doppler`}
                            className={
                              pathname ===
                              "/3d-follicle-monitoring-with-doppler"
                                ? "active"
                                : ""
                            }
                          >
                            Shower Enclosure
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Tiles/Stone Replacement
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/uterine-biophysical-profile`}
                            className={
                              pathname === "/uterine-biophysical-profile"
                                ? "active"
                                : ""
                            }
                          >
                            Replastering
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/uterine-biophysical-profile`}
                            className={
                              pathname === "/uterine-biophysical-profile"
                                ? "active"
                                : ""
                            }
                          >
                            Wall Crack Filling{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/uterine-biophysical-profile`}
                            className={
                              pathname === "/uterine-biophysical-profile"
                                ? "active"
                                : ""
                            }
                          >
                            Home Inspection
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/uterine-biophysical-profile`}
                            className={
                              pathname === "/uterine-biophysical-profile"
                                ? "active"
                                : ""
                            }
                          >
                            Kitchen Renovation
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/uterine-biophysical-profile`}
                            className={
                              pathname === "/uterine-biophysical-profile"
                                ? "active"
                                : ""
                            }
                          >
                            False Ceiling
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/`}
                        className={pathname === "/" ? "active" : ""}
                      >
                        Other Services{" "}
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("other")}
                      />
                    </span>
                    {activeSubDropdown === "other" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-base-line-scan`}
                            className={
                              pathname === "/3d-base-line-scan" ? "active" : ""
                            }
                          >
                            Pest Control Services{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-follicle-monitoring-with-doppler`}
                            className={
                              pathname ===
                              "/3d-follicle-monitoring-with-doppler"
                                ? "active"
                                : ""
                            }
                          >
                            Office Cleaning
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                </div>
              )}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/`}
                className={pathname === "/" ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li className="respDropdownList">
              {" "}
              <span>Our Work Gallery</span>
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                href={`/contact-us`}
                onClick={hideSideBar}
                className={pathname === "/contact-us" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="button1" onClick={handlePop}>
                Book Now
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
