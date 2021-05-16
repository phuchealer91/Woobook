import React from 'react'
import SearchUser from '../../Community/SearchUser'

function RightMenu() {
  return (
    <>
      <aside
        className="h-full  relative"
        style={{ width: 'calc(100% - 700px)' }}
      >
        {/*Aside menu (right side)*/}
        <div style={{ with: '100%' }}>
          <div className="h-screen  ">
            <SearchUser />
            {/*trending tweet section*/}
            <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
              {/* <div className="flex">
                <div className="flex-1 m-2">
                  <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
                    Germany trends
                  </h2>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a
                    href
                    className=" text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
                  >
                    <svg
                      className="m-2 h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*first trending tweet*/}
              {/* <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs ">1 . Trending</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">
                    #Microsoft363
                  </h2>
                  <p className="px-4 ml-2 mb-3 w-48 text-xs ">5,466 Tweets</p>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a
                    href
                    className=" text-2xl rounded-full  hover:bg-gray-800 hover:text-blue-300 float-right"
                  >
                    <svg
                      className="m-2 h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*second trending tweet*/}
              {/* <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs ">
                    2 . Politics . Trending
                  </p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">
                    #HI-Fashion
                  </h2>
                  <p className="px-4 ml-2 mb-3 w-48 text-xs ">8,464 Tweets</p>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a
                    href
                    className=" text-2xl rounded-full  hover:bg-gray-800 hover:text-blue-300 float-right"
                  >
                    <svg
                      className="m-2 h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*third trending tweet*/}
              {/* <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs ">
                    3 . Rock . Trending
                  </p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">
                    #Ferrari
                  </h2>
                  <p className="px-4 ml-2 mb-3 w-48 text-xs ">5,586 Tweets</p>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a
                    href
                    className=" text-2xl rounded-full  hover:bg-gray-800 hover:text-blue-300 float-right"
                  >
                    <svg
                      className="m-2 h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*forth trending tweet*/}
              {/* <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs ">
                    4 . Auto Racing . Trending
                  </p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">
                    #vettel
                  </h2>
                  <p className="px-4 ml-2 mb-3 w-48 text-xs ">9,416 Tweets</p>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a
                    href
                    className=" text-2xl rounded-full  hover:bg-gray-800 hover:text-blue-300 float-right"
                  >
                    <svg
                      className="m-2 h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*show more*/}
              {/* <div className="flex">
                <div className="flex-1 p-4">
                  <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
                    Show more
                  </h2>
                </div>
              </div> */}
            </div>
            {/*people suggetion to follow section*/}
            <div className="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
              {/* <div className="flex">
                <div className="flex-1 m-2">
                  <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
                    Who to follow
                  </h2>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*first person who to follow*/}
              {/* <div className="flex flex-shrink-0">
                <div className="flex-1 ">
                  <div className="flex items-center w-48">
                    <div>
                      <img
                        className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 mt-3">
                      <p className="text-base leading-6 font-medium text-white">
                        Sonali Hirave
                      </p>
                      <p className="text-sm leading-5 font-medium  group-hover:text-gray-300 transition ease-in-out duration-150">
                        @ShonaDesign
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a href className=" float-right">
                    <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                      Follow
                    </button>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*second person who to follow*/}
              {/* <div className="flex flex-shrink-0">
                <div className="flex-1 ">
                  <div className="flex items-center w-48">
                    <div>
                      <img
                        className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                        src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 mt-3">
                      <p className="text-base leading-6 font-medium text-white">
                        Sonali Hirave
                      </p>
                      <p className="text-sm leading-5 font-medium  group-hover:text-gray-300 transition ease-in-out duration-150">
                        @ShonaDesign
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-4 py-2 m-2">
                  <a href className=" float-right">
                    <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                      Follow
                    </button>
                  </a>
                </div>
              </div> */}
              <hr className="border-gray-200" />
              {/*show more*/}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
export default RightMenu
