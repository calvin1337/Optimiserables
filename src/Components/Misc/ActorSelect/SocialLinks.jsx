import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import useToggleInterval from "../../../Hooks/useToggleInterval";

const SocialLinks = ({ socials }) => {
  const showText = useToggleInterval(3000);

  return (
    socials &&
    socials.length > 0 && (
      <div className="bg-[#6A3276]/50 w-full">
        <div
          className="flex justify-center items-center w-full"
          style={{ height: "40px" }}
        >
          <ul className="flex space-x-3 justify-center">
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-transparent border-2 border-white text-white rounded-full transition-colors duration-200 hover:bg-blue-700 hover:border-transparent"
                  style={{
                    fontSize: "0.7em",
                    padding: "0.2em 0.4em",
                    width: "fit-content",
                  }}
                >
                  {showText ? (
                    <>{social.platform}</>
                  ) : (
                    <FontAwesomeIcon
                      icon={faLink}
                      className="ml-1"
                      style={{
                        width: "16px",
                        height: "16px",
                        fontSize: "1em",
                        lineHeight: "0",
                        margin: "0",
                        padding: "0",
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default SocialLinks;
