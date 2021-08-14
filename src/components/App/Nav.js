import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-first rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Molty</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/stories">
              <a href="" class="mr-5 hover:text-gray-900">
                Stories
              </a>
            </Link>
            <a href="/talk" class="mr-5 hover:text-gray-900">
              Talk
            </a>
            <Link to="/assistance">
              <a class="mr-5 inline-flex  bg-first  hover:text-gray-900 border-0 py-1 px-3 rounded text-base">
                Professional Assistance
              </a>
            </Link>
          </nav>
          <Link to="/profile">
            <button class="inline-flex items-center bg-first border-0 py-1 px-3 focus:outline-none hover:bg-third rounded text-base mt-4 md:mt-0">
              Profile
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Nav;
