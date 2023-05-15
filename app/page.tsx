import Image from "next/image";
import hoverStyles from "./styles/HoverUnderline.module.css";
import buttonStyles from "./styles/CTAButtons.module.css";
import eventItemStyles from "./styles/EventItems.module.css";
import newsTickerStyles from "./styles/NewsTicker.module.css";

export default function Home() {
  return (
    <main className="min-h-screen p-x-12">
      <header className="flex justify-between items-center h-20 px-12 relative z-40">
        <ul>
          <li>
            <strong>Logo</strong>
          </li>
        </ul>

        <nav className="sm:block hidden">
          <ul className="flex gap-x-10 tracking-widest">
            <li className={`${hoverStyles.hoverUnderline} cursor-pointer`}>
              <a href="#who-we-are">WHO WE ARE</a>
            </li>
            <li className={`${hoverStyles.hoverUnderline} cursor-pointer`}>
              <a href="#what-we-do">WHAT WE DO</a>
            </li>
            <li className={`${hoverStyles.hoverUnderline} cursor-pointer`}>
              <a href="https://forms.gle/DymNasaS7pmk5MV77" target="_blank">
                JOIN US
              </a>
            </li>
            <li className={`${hoverStyles.hoverUnderline} cursor-pointer`}>
              DONATE
            </li>
          </ul>
        </nav>

        <button className="visible sm:hidden">Menu</button>
      </header>

      <div className={`mt-4 ${newsTickerStyles.newsTicker}`}>
        <ul>
          <li style={{ marginRight: "16px" }}>
            Thursday 11th May 8PM - 1AM: WEEKLY SOCIAL DRINKS{" "}
          </li>
          <li style={{ marginRight: "16px" }}>
            *** FRIDAY 12th May 2PM - 6PM: GAME TIME ***
          </li>
          <li>SUNDAY 14th May 1PM - 5PM: MONTHLY SOCIAL DRINKS</li>
        </ul>
      </div>

      {/* 028100 */}

      <section className="sm:min-h-screen sm:-mt-[160px] sm:flex px-12 relative overflow-hidden">
        {/* left side */}
        <div className="opacity-[0.2] scale-125 absolute w-full h-full right-[0] bg-contain top-[480px] bg-no-repeat bg-[url('https://cdn.webshopapp.com/shops/186977/files/265363364/ben-kleyn-rotterdam-skyline-pop-art.jpg')]"></div>
        <div className="flex-1 sm:pl-20 pt-[50px] sm:pt-[280px] relative z-30">
          <div className="absolute top-0 left-0 w-full h-full"></div>
          <div className="sm:-mr-20 relative z-30">
            <h1 className="sm:text-8xl text-[2.6rem] px-2 uppercase tracking-wide bg-[#028100] inline relative items-center">
              Hospitality <br /> & Travel{" "}
              <span
                className="translate-x-[-3px] translate-y-[20px] sm:translate-y-[20px] sm:translate-x-[-20px]"
                style={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "bold",
                  // transform: "translateY(20px) translateX(-20px)",
                  display: "inline-block",
                  position: "absolute",
                  backgroundColor: "black",
                  padding: "12px",
                }}
              >
                Rotterdam
              </span>
            </h1>
            <em className="sm:text-5xl text-[1.3rem] inline-block bg-gray-200 py-3 px-2 block relative z-20">
              Connecting people together
            </em>
          </div>

          <div className="pt-12 flex gap-x-6 relative z-30">
            <button
              className={`px-6 md:px-8 py-2 text-lg ${buttonStyles.button} ${buttonStyles.buttonPrimary}`}
            >
              <a href="https://forms.gle/DymNasaS7pmk5MV77" target="_blank">
                Join us
              </a>
            </button>
            <button
              className={`px-6 md:px-8 py-2 text-lg ${buttonStyles.button} ${buttonStyles.buttonSecondary}`}
            >
              Donate
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 sm:pt-[200px] pt-[50px]">
          <div className="relative z-20 my-0 mx-auto sm:-ml-20 h-[12rem] sm:h-[32rem] bg-contain bg-no-repeat bg-[url('https://secure.meetupstatic.com/photos/event/a/5/8/a/clean_502482378.webp')]"></div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="px-12 text-center pb-10 sm:mt-20 mt-10"
      >
        <h2 className="text-xl font-bold mb-6">
          Unforgettable Journeys and Experiences Await
        </h2>
        <p className="max-w-md mx-auto mb-4">
          mbark on extraordinary adventures with our travel and hospitality
          foundation, dedicated to providing you with unparalleled experiences
          in breathtaking destinations. Our passionate team of experts designs
          customized itineraries that cater to your every whim, ensuring that
          each journey is a perfect blend of luxury, culture, and adventure.
          Make memories that last a lifetime and explore the worlds wonders with
          us by your side.
        </p>
        <p className="max-w-md mx-auto font-bold">
          Exceptional Service & Inspiring Expeditions coming to you from us
        </p>
      </section>

      <section id="what-we-do" className="mt-8 text-[#028100]">
        <h3 className="uppercase tracing-widest text-center font-bold text-5xl">
          Explore our events{" "}
        </h3>
        <ul className="flex flex-col gap-y-2 items-center md:flex-row sm:gap-x-2 sm:justify-center py-10">
          <li
            className={`relative flex cursor-pointer items-center justify-center text-white uppercase font-bold h-[30rem] sm:h-[40rem] w-[20rem] bg-cover bg-[url('https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80')] ${eventItemStyles.eventItem}`}
          >
            <div className="bg-black absolute opacity-50 w-full h-full left-0 top-0"></div>
            <span className={`relative z-20 ${eventItemStyles.title}`}>
              Weekly Social Drinks
            </span>

            <div
              className={` absolute z-20 text-white text-center px-4 ${eventItemStyles.eventDescription}`}
            >
              <h3 className="text-xl mb-2">Weekly Social Drinks</h3>
              <p>Join us every week for a fun and relaxed social gathering.</p>
            </div>
          </li>
          <li
            className={`relative flex cursor-pointer items-center justify-center text-white uppercase font-bold h-[30rem] sm:h-[40rem] w-[20rem] bg-cover bg-[url('https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80')] ${eventItemStyles.eventItem}`}
          >
            <div className="bg-black absolute opacity-50 w-full h-full left-0 top-0"></div>
            <span className={`relative z-20 ${eventItemStyles.title}`}>
              Monthly Social Drinks
            </span>

            <div
              className={`absolute z-20 text-white text-center px-4 ${eventItemStyles.eventDescription}`}
            >
              <h3 className="text-xl mb-2">Monthly Social Drinks</h3>
              <p>Join us every week for a fun and relaxed social gathering.</p>
            </div>
          </li>
          <li
            className={` relative flex cursor-pointer items-center justify-center text-white uppercase font-bold h-[30rem] sm:h-[40rem] w-[20rem] bg-cover bg-[url('https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80')] ${eventItemStyles.eventItem}`}
          >
            <div className="bg-black absolute opacity-50 w-full h-full left-0 top-0"></div>
            <span className={`relative z-20 ${eventItemStyles.title}`}>
              Game time
            </span>

            <div
              className={`absolute z-20 text-white text-center px-4 ${eventItemStyles.eventDescription}`}
            >
              <h3 className="text-xl mb-2">Game time</h3>
              <p>Join us every week for a fun and relaxed social gathering.</p>
            </div>
          </li>
          <li
            className={` relative flex cursor-pointer items-center justify-center text-white uppercase font-bold h-[30rem] sm:h-[40rem] w-[20rem] bg-cover bg-[url('https://images.unsplash.com/photo-1532498551838-b7a1cfac622e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] ${eventItemStyles.eventItem}`}
          >
            <div className="bg-black absolute opacity-50 w-full h-full left-0 top-0"></div>
            <span className={`relative z-20 ${eventItemStyles.title}`}>
              Weekend Trips
            </span>

            <div
              className={`absolute z-20 text-white text-center px-4 ${eventItemStyles.eventDescription}`}
            >
              <h3 className="text-xl mb-2">Weekend Trips</h3>
              <p>Join us every week for a fun and relaxed social gathering.</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
