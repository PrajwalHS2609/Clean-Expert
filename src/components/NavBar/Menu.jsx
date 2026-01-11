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
                  href="/home-cleaning-services-in-bangalore"
                  className={
                    pathname === "/home-cleaning-services-in-bangalore"
                      ? "actives"
                      : ""
                  }
                >
                  Cleaning Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/full-house-deep-cleaning-services-in-bangalore"
                    className={
                      pathname ===
                      "/full-house-deep-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Full House Cleaning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bathroom-cleaning-services-in-bangalore"
                    className={
                      pathname === "/bathroom-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Bathroom
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-cleaning-services-in-bangalore"
                    className={
                      pathname === "/kitchen-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Kitchen{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chimney-cleaning-services-in-bangalore"
                    className={
                      pathname === "/chimney-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Chimney
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carpet-cleaning-services-in-bangalore"
                    className={
                      pathname === "/carpet-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Carpet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sofa-cleaning-services-in-bangalore"
                    className={
                      pathname === "/sofa-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Sofa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mattress-cleaning-services-in-bangalore"
                    className={
                      pathname === "/mattress-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Mattress
                  </Link>
                </li>
                <li>
                  <Link
                    href="/window-cleaning-services-in-bangalore"
                    className={
                      pathname === "/window-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
                  >
                    Window
                  </Link>
                </li>
                <li>
                  <Link
                    href="/balcony-cleaning-services-in-bangalore "
                    className={
                      pathname === "/balcony-cleaning-services-in-bangalore "
                        ? "actives"
                        : ""
                    }
                  >
                    Balcony
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chair-cleaning-services-in-bangalore"
                    className={
                      pathname === "/chair-cleaning-services-in-bangalore"
                        ? "actives"
                        : ""
                    }
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
                    href="/home-painting"
                    className={pathname === "/home-painting" ? "actives" : ""}
                  >
                    Home Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apartment-painting"
                    className={
                      pathname === "/apartment-painting" ? "actives" : ""
                    }
                  >
                    Apartment Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/spray-painting"
                    className={pathname === "/spray-painting" ? "actives" : ""}
                  >
                    Spray Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/1-day-express-painting"
                    className={
                      pathname === "/1-day-express-painting" ? "actives" : ""
                    }
                  >
                    1 Day Express Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/texture-and-designer-walls"
                    className={
                      pathname === "/texture-and-designer-walls"
                        ? "actives"
                        : ""
                    }
                  >
                    Texture & Designer Walls
                  </Link>
                </li>
                <li>
                  <Link
                    href="/water-proofing"
                    className={pathname === "/water-proofing" ? "actives" : ""}
                  >
                    Waterproofing
                  </Link>
                </li>
              </div>
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
                <li>
                  {" "}
                  <Link
                    href="/false-ceiling"
                    className={pathname === "/grouting" ? "actives" : ""}
                  >
                    Grouting
                  </Link>
                </li>
              </div>
            </li>
            {/* <li>
              <Link
                href="/grouting"
                className={pathname === "/grouting" ? "actives" : ""}
              >
                Grouting
              </Link>
            </li> */}
            <li>
              <Link
                href="/office-cleaning"
                className={pathname === "/office-cleaning" ? "actives" : ""}
              >
                Office Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/pest-control"
                className={pathname === "/pest-control" ? "actives" : ""}
              >
                Pest Control Services
              </Link>
            </li>
            {/* <li>
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
            </li> */}
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
                        href={`/home-cleaning-services-in-bangalore`}
                        className={pathname === "/home-cleaning-services-in-bangalore" ? "active" : ""}
                      >
                        Cleaning Services{" "}
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("cleaning")}
                      />
                    </span>
                    {activeSubDropdown === "cleaning" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/full-house-deep-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/full-house-deep-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
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
                            href={`/kitchen-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/kitchen-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Kitchen
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/chimney-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/chimney-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Chimney
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/carpet-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/carpet-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
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
                            href={`/mattress-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/mattress-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Mattress
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/window-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/window-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Window
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/balcony-cleaning-services-in-bangalore `}
                            className={
                              pathname ===
                              "/balcony-cleaning-services-in-bangalore "
                                ? "active"
                                : ""
                            }
                          >
                            Balcony
                          </Link>
                        </li>{" "}
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/chair-cleaning-services-in-bangalore`}
                            className={
                              pathname ===
                              "/chair-cleaning-services-in-bangalore"
                                ? "active"
                                : ""
                            }
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
                        href={`/marble`}
                        className={pathname === "/marble" ? "active" : ""}
                      >
                        Marble Polishing{" "}
                      </Link>
                      {/* <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("")}
                      /> */}
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
                        onClick={() => toggleSubDropdown("painting")}
                      />
                    </span>
                    {activeSubDropdown === "painting" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Home Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/apartment-painting`}
                            className={
                              pathname === "/apartment-painting" ? "active" : ""
                            }
                          >
                            Apartment Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/spray-painting`}
                            className={
                              pathname === "/spray-painting" ? "active" : ""
                            }
                          >
                            Spray Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/1-day-express-painting`}
                            className={
                              pathname === "/1-day-express-painting"
                                ? "active"
                                : ""
                            }
                          >
                            1 Day Express Painting
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/texture-and-designer-walls`}
                            className={
                              pathname === "/texture-and-designer-walls"
                                ? "active"
                                : ""
                            }
                          >
                            Texture & Designer Walls
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/water-proofing`}
                            className={
                              pathname === "/water-proofing" ? "active" : ""
                            }
                          >
                            Waterproofing{" "}
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
                        href={`/house-renovation`}
                        className={
                          pathname === "/house-renovation" ? "active" : ""
                        }
                      >
                        House Renovation
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("renovation")}
                      />
                    </span>
                    {activeSubDropdown === "renovation" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Bathroom Remodelling{" "}
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
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Replastering
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
                            Wall Crack Filling{" "}
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
                            Home Inspection
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
                            Kitchen Renovation
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
                            False Ceiling
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/grouting`}
                            className={pathname === "/grouting" ? "active" : ""}
                          >
                            Grouting
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
                        href={`/pest-control`}
                        className={pathname === "/pest-control" ? "active" : ""}
                      >
                        Pest Control Services
                      </Link>
                      {/* <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("")}
                      /> */}
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/office-cleaningpest-control`}
                        className={
                          pathname === "/office-cleaningpest-control"
                            ? "active"
                            : ""
                        }
                      >
                        Office Cleaning
                      </Link>
                      {/* <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("")}
                      /> */}
                    </span>
                  </li>
                  {/* <li>
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
                            href={`/`}
                            className={pathname === "/" ? "active" : ""}
                          >
                            Pest Control Services{" "}
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
                            Office Cleaning
                          </Link>
                        </li>
                      </div>
                    )}
                  </li> */}
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
