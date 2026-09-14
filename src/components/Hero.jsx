// // // const Hero = () => {
// // // return (
// // // <div>App

// // // </div>
// // // )
// // // }
// // // export default Hero

// // const Hero = () => {
// //   return (
// //     <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white">

// //       {/* ================= BACKGROUND ================= */}

// //       {/* Soft central glow */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-1/2
// //           top-1/2
// //           h-[280px]
// //           w-[280px]
// //           -translate-x-1/2
// //           -translate-y-1/2
// //           rounded-full
// //           bg-purple-500/10
// //           blur-[100px]

// //           sm:h-[400px]
// //           sm:w-[400px]

// //           lg:h-[550px]
// //           lg:w-[550px]
// //         "
// //       />

// //       {/* Subtle grid */}
// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           opacity-[0.07]
// //         "
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
// //           backgroundSize: "60px 60px",
// //         }}
// //       />

// //       {/* ================= MAIN CONTAINER ================= */}

// //       <div
// //         className="
// //           relative
// //           z-10
// //           mx-auto
// //           flex
// //           min-h-screen
// //           max-w-7xl
// //           flex-col
// //           px-5
// //           py-6

// //           sm:px-8
// //           sm:py-8

// //           md:px-10

// //           lg:px-14
// //           lg:py-8

// //           xl:px-16
// //         "
// //       >

// //         {/* ================= TOP BAR ================= */}

// //         <div className="flex items-center justify-between">

// //           {/* Club Logo / Mark */}
// //           <div className="flex items-center gap-3">

// //             <div
// //               className="
// //                 flex
// //                 h-8
// //                 w-8
// //                 items-center
// //                 justify-center
// //                 rounded-full
// //                 border
// //                 border-white/20
// //                 text-sm

// //                 sm:h-9
// //                 sm:w-9
// //               "
// //             >
// //               ✦
// //             </div>

// //             <span
// //               className="
// //                 text-xs
// //                 font-medium
// //                 tracking-[0.2em]
// //                 text-white/80

// //                 sm:text-sm
// //                 sm:tracking-[0.25em]
// //               "
// //             >
// //               THE CLUB
// //             </span>

// //           </div>


// //           {/* Year */}
// //           <span
// //             className="
// //               text-[10px]
// //               tracking-[0.25em]
// //               text-white/40

// //               sm:text-xs
// //               sm:tracking-[0.3em]
// //             "
// //           >
// //             2026
// //           </span>

// //         </div>


// //         {/* ================= HERO CONTENT ================= */}

// //         <div
// //           className="
// //             flex
// //             flex-1
// //             items-center
// //             py-16

// //             sm:py-20

// //             md:py-24

// //             lg:py-16
// //           "
// //         >

// //           <div className="w-full max-w-5xl">

// //             {/* Small Label */}

// //             <div className="mb-6 flex items-center gap-3 sm:mb-8">

// //               <span className="h-px w-7 bg-white/40 sm:w-10" />

// //               <span
// //                 className="
// //                   text-[10px]
// //                   font-medium
// //                   uppercase
// //                   tracking-[0.2em]
// //                   text-white/50

// //                   sm:text-xs
// //                   sm:tracking-[0.3em]
// //                 "
// //               >
// //                 New members · Now open
// //               </span>

// //             </div>


// //             {/* ================= MAIN HEADING ================= */}

// //             <h1
// //               className="
// //                 font-semibold
// //                 leading-[0.9]
// //                 tracking-[-0.055em]

// //                 text-[3.7rem]

// //                 sm:text-[5rem]

// //                 md:text-[6.5rem]

// //                 lg:text-[8rem]

// //                 xl:text-[9rem]
// //               "
// //             >

// //               READY TO

// //               <br />

// //               <span className="text-white/35">
// //                 MAKE YOUR
// //               </span>

// //               <br />

// //               MARK
// //               <span className="text-purple-400">?</span>

// //             </h1>


// //             {/* ================= DESCRIPTION ================= */}

// //             <p
// //               className="
// //                 mt-7
// //                 max-w-md
// //                 text-sm
// //                 leading-6
// //                 text-white/50

// //                 sm:mt-8
// //                 sm:max-w-lg
// //                 sm:text-base
// //                 sm:leading-7

// //                 md:text-lg
// //               "
// //             >
// //               A place to build, create, learn and connect.
// //               Step into something bigger than just a college club.
// //             </p>


// //             {/* ================= CTA ================= */}

// //             <div className="mt-8 sm:mt-10">

// //               <a
// //                 href="#induction"
// //                 className="
// //                   group
// //                   inline-flex
// //                   items-center
// //                   gap-4
// //                   rounded-full
// //                   bg-white
// //                   px-6
// //                   py-3.5
// //                   text-sm
// //                   font-semibold
// //                   text-black
// //                   transition-all
// //                   duration-300

// //                   hover:gap-6
// //                   hover:bg-white/90

// //                   sm:px-7
// //                   sm:py-4
// //                 "
// //               >

// //                 <span>
// //                   Enter the club
// //                 </span>

// //                 <span
// //                   className="
// //                     text-lg
// //                     transition-transform
// //                     duration-300
// //                     group-hover:translate-x-1
// //                   "
// //                 >
// //                   →
// //                 </span>

// //               </a>

// //             </div>

// //           </div>

// //         </div>


// //         {/* ================= BOTTOM INFO ================= */}

// //         <div
// //           className="
// //             flex
// //             flex-col
// //             gap-3
// //             border-t
// //             border-white/10
// //             py-5
// //             text-[10px]
// //             tracking-[0.15em]
// //             text-white/30

// //             sm:flex-row
// //             sm:items-center
// //             sm:justify-between
// //             sm:text-xs
// //             sm:tracking-normal
// //           "
// //         >

// //           <span>
// //             INDUCTION '26
// //           </span>

// //           <span>
// //             DISCOVER · CREATE · CONNECT
// //           </span>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default Hero;

// const Hero = () => {
//   return (
//     <div>
//     <section className="relative min-h-screen overflow-hidden bg-[#050509] text-white">

//       {/* ================= BACKGROUND IMAGE ================= */}
    
//     <img src="hero-bg.png" alt="bgimg" srcset="" />
      

//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Purple atmospheric glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/2
//           h-[280px]
//           w-[280px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-purple-600/10
//           blur-[100px]

//           sm:h-[400px]
//           sm:w-[400px]

//           lg:h-[550px]
//           lg:w-[550px]
//         "
//       />


//       {/* ================= CONTENT ================= */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-screen
//           max-w-7xl
//           flex-col
//           px-5
//           py-6

//           sm:px-8
//           sm:py-8

//           md:px-10

//           lg:px-14
//           lg:py-8

//           xl:px-16
//         "
//       >

//         {/* ================= TOP ================= */}

//         <div className="flex items-center justify-between">

//           {/* Club identity */}
//           <div className="flex items-center gap-3">

//             <div
//               className="
//                 flex
//                 h-8
//                 w-8
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/25
//                 bg-white/5
//                 text-sm
//                 backdrop-blur-sm

//                 sm:h-9
//                 sm:w-9
//               "
//             >
//               ✦
//             </div>

//             <span
//               className="
//                 text-xs
//                 font-medium
//                 tracking-[0.2em]
//                 text-white/90

//                 sm:text-sm
//                 sm:tracking-[0.25em]
//               "
//             >
//               THE CLUB
//             </span>

//           </div>


//           {/* Year */}
//           <span
//             className="
//               text-[10px]
//               tracking-[0.3em]
//               text-white/60

//               sm:text-xs
//             "
//           >
//             2026
//           </span>

//         </div>


//         {/* ================= HERO CONTENT ================= */}

//         <div
//           className="
//             flex
//             flex-1
//             items-center
//             py-16

//             sm:py-20

//             md:py-24

//             lg:py-16
//           "
//         >

//           <div className="w-full max-w-5xl">

//             {/* Label */}

//             <div className="mb-6 flex items-center gap-3 sm:mb-8">

//               <span className="h-px w-7 bg-purple-400 sm:w-10" />

//               <span
//                 className="
//                   text-[10px]
//                   font-medium
//                   uppercase
//                   tracking-[0.2em]
//                   text-white/70

//                   sm:text-xs
//                   sm:tracking-[0.3em]
//                 "
//               >
//                 New members · Now open
//               </span>

//             </div>


//             {/* ================= HEADING ================= */}

//             <h1
//               className="
//                 font-semibold
//                 leading-[0.9]
//                 tracking-[-0.055em]

//                 text-[3.7rem]

//                 sm:text-[5rem]

//                 md:text-[6.5rem]

//                 lg:text-[8rem]

//                 xl:text-[9rem]
//               "
//             >

//               READY TO

//               <br />

//               <span className="text-white/55">
//                 MAKE YOUR
//               </span>

//               <br />

//               <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
//                 MARK?
//               </span>

//             </h1>


//             {/* ================= DESCRIPTION ================= */}

//             <p
//               className="
//                 mt-7
//                 max-w-md
//                 text-sm
//                 leading-6
//                 text-white/65

//                 sm:mt-8
//                 sm:max-w-lg
//                 sm:text-base
//                 sm:leading-7

//                 md:text-lg
//               "
//             >
//               A place to build, create, learn and connect.
//               Step into something bigger than just a college club.
//             </p>


//             {/* ================= CTA ================= */}

//             <div className="mt-8 sm:mt-10">

//               <a
//                 href="#induction"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-4
//                   rounded-full
//                   bg-white
//                   px-6
//                   py-3.5
//                   text-sm
//                   font-semibold
//                   text-black

//                   shadow-[0_0_40px_rgba(139,92,246,0.35)]

//                   transition-all
//                   duration-300

//                   hover:gap-6
//                   hover:bg-purple-100
//                   hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]

//                   sm:px-7
//                   sm:py-4
//                 "
//               >

//                 <span>
//                   Enter the club
//                 </span>

//                 <span
//                   className="
//                     text-lg
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 >
//                   →
//                 </span>

//               </a>

//             </div>

//           </div>

//         </div>


//         {/* ================= BOTTOM ================= */}

//         <div
//           className="
//             flex
//             flex-col
//             gap-3
//             border-t
//             border-white/15
//             py-5
//             text-[10px]
//             tracking-[0.15em]
//             text-white/50

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//             sm:text-xs
//             sm:tracking-normal
//           "
//         >

//           <span>
//             INDUCTION '26
//           </span>

//           <span>
//             DISCOVER · CREATE · CONNECT
//           </span>

//         </div>

//       </div>
      
//     </section>
//     </div>
//   );
// };

// export default Hero;
"use client";

import SwipeButton from "./SwipeButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050509] text-white">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* PURPLE ATMOSPHERIC GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />


      {/* EVERYTHING BELOW IS ON TOP OF THE IMAGE */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-14 xl:px-16">

        {/* TOP */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

  

            <span className="animate-fade-up text-sm uppercase tracking-[0.25em] text-white/85 sm:text-base sm:tracking-[0.3em] md:text-lg lg:text-xl">
              IETE-SF
            </span>

          </div>

          
              {/* <img src="IETELOGO.svg" className="flex h-25 w-25 items-center justify-center rounded-full border-white/30 bg-white backdrop-blur-sm sm:h-9 sm:w-9" /> */}
              <img
  src="IETELOGO.svg"
  className="h-[55px] w-[54px] rounded-full border border-white/30 bg-white backdrop-blur-sm sm:h-[60px] sm:w-[60px]"/>

  {/* <img
  src="IETELOGOS.svg"
  className="h-[120px] w-[120px]"
  alt="IETE Logo"
/>
             */}

        </div>


        {/* CENTER CONTENT */}
        <div className="flex flex-1 items-center">

          <div className="w-full max-w-5xl">

            {/* LABEL */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">

              <span className="h-px w-8 bg-purple-400 sm:w-10" />

  <span className="animate-fade-up-2 text-[10px] uppercase tracking-[0.2em] text-white/75 sm:text-xs sm:tracking-[0.3em]">
  Inductions · Now open
</span>

            </div>


            {/* HEADING */}
<h1 className="font-semibold leading-[0.9] tracking-[-0.055em]">

  <span className="animate-text-1 block text-[3.6rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem]">
    READY TO
  </span>

  <span className="animate-text-2 block text-[3.6rem] text-white/55 sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem]">
    MAKE YOUR
  </span>

  <span className="animate-text-3 block text-[3.6rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem]">
    MOVE?
  </span>

</h1>


            {/* DESCRIPTION */}
            <p className="animate-fade-up-3 mt-7 max-w-md text-sm leading-6 text-white/70 sm:mt-8 sm:max-w-lg sm:text-base sm:leading-7 md:text-lg">
              A place to build, create, learn and connect.
              Step into something bigger than just a college club.
            </p>


            {/* BUTTON */}
<div className="animate-fade-up-4 mt-8 sm:mt-10">
  <SwipeButton />
</div>

          </div>

        </div>


        {/* BOTTOM */}
{/* ================= BOTTOM ================= */}
<div
  className="
    border-t
    border-white/20
    py-5
    sm:py-6
  "
>
  <div
    className="
      flex
      flex-col
      gap-6
      lg:flex-row
      lg:items-center
      lg:justify-between
      lg:gap-10
    "
  >

    {/* LEFT — EVENT INFO */}
    <div className="flex flex-col gap-2">
      <span
        className="
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/35
          sm:text-[10px]
        "
      >
        INDUCTION '26
      </span>

      <span
        className="
          text-[10px]
          tracking-[0.12em]
          text-white/55
          sm:text-xs
          sm:tracking-normal
        "
      >
        DISCOVER · CREATE · CONNECT
      </span>
    </div>


    {/* RIGHT — CONTACT DETAILS */}
    <div
      className="
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:flex-wrap
        sm:items-center
        sm:gap-x-8
        sm:gap-y-3
        lg:justify-end
      "
    >

      {/* CONTACT HEADING */}
      <div className="flex flex-col gap-1">
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-purple-300/70
            sm:text-[10px]
          "
        >
          Need help?
        </span>

        <span className="text-[10px] text-white/40 sm:text-xs">
          Contact the IETE-SF team
        </span>
      </div>


      {/* PERSON 1 */}
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-white/75 sm:text-xs">
          Ayush Mishra
        </span>

        <a
          href="tel:+916206696095"
          className="
            mt-1
            text-[10px]
            text-white/45
            transition-colors
            hover:text-white
            sm:text-xs
          "
        >
          +91 62066 96095
        </a>
      </div>


      {/* PERSON 2 */}
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-white/75 sm:text-xs">
          Khushi Pandey
        </span>

        <a
          href="tel:+917991186216"
          className="
            mt-1
            text-[10px]
            text-white/45
            transition-colors
            hover:text-white
            sm:text-xs
          "
        >
          +91 79911 86216
        </a>
      </div>


      {/* EMAIL */}
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-white/75 sm:text-xs">
          Email
        </span>

        <a
          href="mailto:ietesf@gmail.com"
          className="
            mt-1
            break-all
            text-[10px]
            text-white/45
            transition-colors
            hover:text-white
            sm:text-xs
          "
        >
          ietebits@gmail.com
        </a>
      </div>

    </div>

  </div>
</div>

      </div>

    </section>
  );
};

export default Hero;