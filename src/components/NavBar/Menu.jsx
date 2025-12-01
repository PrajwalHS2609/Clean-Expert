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
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
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
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  Cleaning Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Full-House
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Bathroom
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Kitchen{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Chimney
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Carpet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Sofa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Mattress
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Window
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Balcony
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Chair
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
              >
                Marble Polishing
              </Link>
            </li>
            <li>
              <span>
                <Link
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  Painting Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Textured Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Wood Polishing
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
              >
                Waterproofing
              </Link>
            </li>
            <li>
              <span>
                {" "}
                <Link
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  House Renovation
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Bathroom Remodelling/Renovation{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Shower Enclosure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "active"
                        : ""
                    }
                  >
                    Tiles/Stone Replacement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Replastering
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Wall Crack Filling{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Home Inspection
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    Kitchen Renovation
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "active" : ""
                    }
                  >
                    False Ceiling
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/"
                className={
                  pathname === "/" ? "active" : ""
                }
              >
                Grouting
              </Link>
            </li>
            <li>
              <span>
                {" "}
                <Link
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  Other Services
                </Link>
                <FaChevronRight className="menuDropIcon" />
              </span>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                  >
                    Pest Control Services
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
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
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
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
        <button class="button1" id="non-repsBtn">
          Book Now
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
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
                        className={
                          pathname === "/" ? "active" : ""
                        }
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
                            className={
                              pathname === "/" ? "active" : ""
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
                            className={
                              pathname === "/" ? "active" : ""
                            }
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
                            className={
                              pathname === "/"
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
                            className={
                              pathname === "/" ? "active" : ""
                            }
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
                        className={
                          pathname === "/" ? "active" : ""
                        }
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
                            Bathroom Remodelling/Renovation{" "}
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
                            className={
                              pathname === "/" ? "active" : ""
                            }
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
              <button class="button1">
                Book Now
                <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                  <path
                    clip-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fill-rule="evenodd"
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
