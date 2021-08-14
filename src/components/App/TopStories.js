import React, {useState, useEffect} from "react";
export default function TopStories(props) {
    const [str, setStr]=useState([]);
    useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_KEY}/posts/all`).then(resp=>resp.json()).then(res=>setStr(res))
    }, [])
  return (
    <>
    {str.map(story=> <><div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3">
          <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              13 Aug 2021
            </h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
              {story?.title}
            </h1>
            <p class="leading-relaxed mb-3">{story?.author}</p>
            <a href={`/story/${story?._id}`}class="text-first inline-flex items-center">
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>



                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {story.likes}
          </div>
        </div>
      </div>
      </>)}
     
    </>
  );
}
