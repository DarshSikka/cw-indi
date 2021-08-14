import React from "react";
import Footer from "../Footer";
import Nav from "./Nav";
import StoriesSection from "./StoriesSection";

function Stories() {
  return (
    <div>
      <Nav />
      <div id="product" class="flex justify-center align-middle">
        <h1 class="text-3xl md:text-4xl mt-4 font-medium text-center text-second saksham-white bg-third inline-block rounded-lg mx-auto py-4 px-4">
          Latest Stories
        </h1>
      </div>
      <StoriesSection />
      <div id="product" class="flex justify-center align-middle">
        <h1 class="text-3xl md:text-4xl mt-4 font-medium text-center text-second saksham-white bg-third inline-block rounded-lg mx-auto py-4 px-4">
          Top Authors
        </h1>
      </div>
      <StoriesSection />

      <div id="product" class="flex justify-center align-middle">
        <h1 class="text-3xl md:text-4xl mt-4 font-medium text-center text-second saksham-white bg-third inline-block rounded-lg mx-auto py-4 px-4">
          Top Stories
        </h1>
      </div>
      <StoriesSection />
      <Footer />
    </div>
  );
}

export default Stories;
