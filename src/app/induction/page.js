// // "use client";

// // import { useState } from "react";

// // export default function InductionPage() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     rollNumber: "",
// //   });

// //   const [touched, setTouched] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setForm((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleBlur = (e) => {
// //     setTouched((prev) => ({
// //       ...prev,
// //       [e.target.name]: true,
// //     }));
// //   };

// //   const isValid =
// //     form.name.trim() !== "" &&
// //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
// //     /^[0-9]{10}$/.test(form.phone) &&
// //     form.rollNumber.trim() !== "";

// //   const inputClass = (field) => `
// //     w-full
// //     border-b
// //     bg-transparent
// //     px-0
// //     py-3
// //     text-base
// //     text-white
// //     outline-none
// //     transition-colors
// //     placeholder:text-white/20
// //     sm:py-4
// //     sm:text-lg
// //     ${
// //       touched[field] &&
// //       (
// //         (field === "email" &&
// //           !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) ||
// //         (field === "phone" &&
// //           !/^[0-9]{10}$/.test(form.phone)) ||
// //         form[field].trim() === ""
// //       )
// //         ? "border-red-400/60"
// //         : "border-white/20 focus:border-purple-400"
// //     }
// //   `;

// //   return (
// //     <main className="min-h-screen bg-[#050509] text-white">

// //       {/* Background glow */}
// //       <div className="pointer-events-none fixed inset-0 overflow-hidden">
// //         <div
// //           className="
// //             absolute
// //             left-1/2
// //             top-1/3
// //             h-[350px]
// //             w-[350px]
// //             -translate-x-1/2
// //             rounded-full
// //             bg-purple-600/10
// //             blur-[130px]
// //             sm:h-[500px]
// //             sm:w-[500px]
// //           "
// //         />
// //       </div>

// //       {/* Main wrapper */}
// //       <div
// //         className="
// //           relative
// //           z-10
// //           mx-auto
// //           flex
// //           min-h-screen
// //           max-w-6xl
// //           flex-col
// //           px-6
// //           py-6
// //           sm:px-10
// //           sm:py-8
// //           lg:px-16
// //         "
// //       >

// //         {/* HEADER */}
// //         <header className="flex items-center justify-between border-b border-white/10 pb-5">
// //           <span className="text-sm uppercase tracking-[0.25em] text-white/80">
// //             IETE-SF
// //           </span>

// //           <span className="text-xs tracking-[0.2em] text-white/40">
// //             01 / 04
// //           </span>
// //         </header>


// //         {/* CONTENT */}
// //         <div className="my-auto py-12 sm:py-16">

// //           {/* INTRO */}
// //           <div className="mb-10 sm:mb-12">

// //             <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
// //               Induction '26
// //             </p>

// //             <h1
// //               className="
// //                 max-w-3xl
// //                 text-5xl
// //                 font-semibold
// //                 leading-[0.95]
// //                 tracking-[-0.045em]
// //                 sm:text-7xl
// //                 md:text-8xl
// //               "
// //             >
// //               LET'S START WITH
// //               <span className="block text-white/45">
// //                 YOU.
// //               </span>
// //             </h1>

// //             <p className="mt-5 max-w-lg text-sm leading-6 text-white/50 sm:mt-6 sm:text-base sm:leading-7">
// //               Tell us a little about yourself.
// //               These details will help us get your induction started.
// //             </p>

// //           </div>


// //           {/* FORM */}
// //           <div className="max-w-2xl space-y-7 sm:space-y-9">

// //             {/* NAME */}
// //             <div>
// //               <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
// //                 Full Name
// //               </label>

// //               <input
// //                 name="name"
// //                 type="text"
// //                 value={form.name}
// //                 onChange={handleChange}
// //                 onBlur={handleBlur}
// //                 placeholder="Enter your full name"
// //                 className={inputClass("name")}
// //               />
// //             </div>


// //             {/* EMAIL */}
// //             <div>
// //               <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
// //                 Email Address
// //               </label>

// //               <input
// //                 name="email"
// //                 type="email"
// //                 value={form.email}
// //                 onChange={handleChange}
// //                 onBlur={handleBlur}
// //                 placeholder="you@example.com"
// //                 className={inputClass("email")}
// //               />
// //             </div>


// //             {/* PHONE */}
// //             <div>
// //               <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
// //                 Phone Number
// //               </label>

// //               <input
// //                 name="phone"
// //                 type="tel"
// //                 inputMode="numeric"
// //                 maxLength={10}
// //                 value={form.phone}
// //                 onChange={handleChange}
// //                 onBlur={handleBlur}
// //                 placeholder="10-digit mobile number"
// //                 className={inputClass("phone")}
// //               />
// //             </div>


// //             {/* ROLL NUMBER */}
// //             <div>
// //               <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
// //                 Roll Number
// //               </label>

// //               <input
// //                 name="rollNumber"
// //                 type="text"
// //                 value={form.rollNumber}
// //                 onChange={handleChange}
// //                 onBlur={handleBlur}
// //                 placeholder="Enter your roll number"
// //                 className={inputClass("rollNumber")}
// //               />
// //             </div>


// //             {/* NEXT */}
// //             <div className="flex justify-end pt-3 sm:pt-5">

// //               <button
// //                 type="button"
// //                 disabled={!isValid}
// //                 className="
// //                   group
// //                   flex
// //                   items-center
// //                   gap-3
// //                   rounded-full
// //                   px-6
// //                   py-3.5
// //                   text-sm
// //                   font-semibold
// //                   transition-all
// //                   duration-300
// //                   sm:px-7
// //                   sm:py-4
// //                 "
// //                 style={{
// //                   backgroundColor: isValid
// //                     ? "white"
// //                     : "rgba(255,255,255,0.08)",
// //                   color: isValid
// //                     ? "black"
// //                     : "rgba(255,255,255,0.3)",
// //                   cursor: isValid ? "pointer" : "not-allowed",
// //                 }}
// //               >
// //                 NEXT

// //                 <span
// //                   className={`
// //                     flex
// //                     h-7
// //                     w-7
// //                     items-center
// //                     justify-center
// //                     rounded-full
// //                     transition-transform
// //                     duration-300
// //                     ${
// //                       isValid
// //                         ? "bg-black text-white group-hover:translate-x-1"
// //                         : "bg-white/10 text-white/30"
// //                     }
// //                   `}
// //                 >
// //                   →
// //                 </span>
// //               </button>

// //             </div>

// //           </div>

// //         </div>


// //         {/* FOOTER */}
// //         <footer
// //           className="
// //             flex
// //             flex-col
// //             gap-2
// //             border-t
// //             border-white/10
// //             pt-5
// //             text-[9px]
// //             uppercase
// //             tracking-[0.2em]
// //             text-white/30
// //             sm:flex-row
// //             sm:items-center
// //             sm:justify-between
// //             sm:text-[10px]
// //           "
// //         >
// //           <span>
// //             DISCOVER · CREATE · CONNECT
// //           </span>

// //           <span>
// //             IETE-SF · 2026
// //           </span>
// //         </footer>

// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useState } from "react";

// export default function InductionPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     rollNumber: "",
//   });

//   const [touched, setTouched] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleBlur = (e) => {
//     setTouched((prev) => ({
//       ...prev,
//       [e.target.name]: true,
//     }));
//   };

//   const isValid =
//     form.name.trim() !== "" &&
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
//     /^[0-9]{10}$/.test(form.phone) &&
//     form.rollNumber.trim() !== "";

//   const inputClass = (field) => `
//     w-full
//     border-b
//     bg-transparent
//     px-0
//     py-3
//     text-base
//     text-white
//     outline-none
//     transition-colors
//     placeholder:text-white/20
//     sm:py-4
//     sm:text-lg
//     ${
//       touched[field] &&
//       (
//         (field === "email" &&
//           !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) ||
//         (field === "phone" &&
//           !/^[0-9]{10}$/.test(form.phone)) ||
//         form[field].trim() === ""
//       )
//         ? "border-red-400/60"
//         : "border-white/20 focus:border-purple-400"
//     }
//   `;

//   return (
//     <main className="min-h-screen bg-[#050509] text-white">

//       {/* Background glow */}
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div
//           className="
//             absolute
//             left-1/2
//             top-1/3
//             h-[350px]
//             w-[350px]
//             -translate-x-1/2
//             rounded-full
//             bg-purple-600/10
//             blur-[130px]
//             sm:h-[500px]
//             sm:w-[500px]
//           "
//         />
//       </div>

//       {/* Main */}
//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-screen
//           max-w-6xl
//           flex-col
//           px-6
//           py-6
//           sm:px-10
//           sm:py-8
//           lg:px-16
//         "
//       >

//         {/* HEADER */}
//         <header className="flex items-center justify-between border-b border-white/10 pb-5">
//           <span className="text-sm uppercase tracking-[0.25em] text-white/80">
//             IETE-SF
//           </span>

//           <span className="text-xs tracking-[0.2em] text-white/40">
//             01 / 04
//           </span>
//         </header>


//         {/* CONTENT */}
//         <div className="my-auto py-12 sm:py-16">

//           {/* Everything inside enters once */}
//           <div className="animate-page-in">

//             {/* INTRO */}
//             <div className="mb-10 sm:mb-12">

//               <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
//                 Induction '26
//               </p>

//               <h1
//                 className="
//                   max-w-3xl
//                   text-5xl
//                   font-semibold
//                   leading-[0.95]
//                   tracking-[-0.045em]
//                   sm:text-7xl
//                   md:text-8xl
//                 "
//               >
//                 LET&apos;S START WITH
//                 <span className="block text-white/45">
//                   YOU.
//                 </span>
//               </h1>

//               <p className="mt-5 max-w-lg text-sm leading-6 text-white/50 sm:mt-6 sm:text-base sm:leading-7">
//                 Tell us a little about yourself.
//                 These details will help us get your induction started.
//               </p>

//             </div>


//             {/* FORM */}
//             <div className="max-w-2xl space-y-7 sm:space-y-9">

//               {/* NAME */}
//               <div>
//                 <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
//                   Full Name
//                 </label>

//                 <input
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="Enter your full name"
//                   className={inputClass("name")}
//                   autoComplete="name"
//                 />
//               </div>


//               {/* EMAIL */}
//               <div>
//                 <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
//                   Email Address
//                 </label>

//                 <input
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="you@example.com"
//                   className={inputClass("email")}
//                   autoComplete="email"
//                 />
//               </div>


//               {/* PHONE */}
//               <div>
//                 <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
//                   Phone Number
//                 </label>

//                 <input
//                   name="phone"
//                   type="tel"
//                   inputMode="numeric"
//                   maxLength={10}
//                   value={form.phone}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="10-digit mobile number"
//                   className={inputClass("phone")}
//                   autoComplete="tel"
//                 />
//               </div>


//               {/* ROLL NUMBER */}
//               <div>
//                 <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
//                   Roll Number
//                 </label>

//                 <input
//                   name="rollNumber"
//                   type="text"
//                   value={form.rollNumber}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   placeholder="Enter your roll number"
//                   className={inputClass("rollNumber")}
//                 />
//               </div>


//               {/* NEXT */}
//               <div className="flex justify-end pt-3 sm:pt-5">

//                 <button
//                   type="button"
//                   disabled={!isValid}
//                   className="
//                     group
//                     flex
//                     items-center
//                     gap-3
//                     rounded-full
//                     px-6
//                     py-3.5
//                     text-sm
//                     font-semibold
//                     transition-all
//                     duration-300
//                     sm:px-7
//                     sm:py-4
//                   "
//                   style={{
//                     backgroundColor: isValid
//                       ? "white"
//                       : "rgba(255,255,255,0.08)",
//                     color: isValid
//                       ? "black"
//                       : "rgba(255,255,255,0.3)",
//                     cursor: isValid ? "pointer" : "not-allowed",
//                   }}
//                 >
//                   NEXT

//                   <span
//                     className={`
//                       flex
//                       h-7
//                       w-7
//                       items-center
//                       justify-center
//                       rounded-full
//                       transition-transform
//                       duration-300
//                       ${
//                         isValid
//                           ? "bg-black text-white group-hover:translate-x-1"
//                           : "bg-white/10 text-white/30"
//                       }
//                     `}
//                   >
//                     →
//                   </span>
//                 </button>

//               </div>

//             </div>

//           </div>
//         </div>


//         {/* FOOTER */}
//         <footer
//           className="
//             flex
//             flex-col
//             gap-2
//             border-t
//             border-white/10
//             pt-5
//             text-[9px]
//             uppercase
//             tracking-[0.2em]
//             text-white/30
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//             sm:text-[10px]
//           "
//         >
//           <span>
//             DISCOVER · CREATE · CONNECT
//           </span>

//           <span>
//             IETE-SF · 2026
//           </span>
//         </footer>

//       </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";

export default function InductionPage() {
//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);

const [step, setStep] = useState(1);
const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    // STEP 1
    name: "",
    email: "",
    phone: "",
    rollNumber: "",

    // STEP 2
    branch: "",
    
    class12Percentage: "",
    achievements: "",

    // STEP 3
    interests: [],
    skills: "",

    // STEP 4
    whyJoin: "",
    projects: "",
    contribution: "",
    // anythingElse: "",
  });

  const [touched, setTouched] = useState({});

  /* =========================
     HANDLE INPUT
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  /* =========================
     STEP 3 INTERESTS
  ========================= */

  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  /* =========================
     VALIDATION
  ========================= */

  const step1Valid =
    form.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    /^[0-9]{10}$/.test(form.phone) &&
    form.rollNumber.trim() !== "";

const step2Valid =
  form.branch.trim() !== "" &&
  form.class12Percentage.trim() !== "";

  const step3Valid =
    form.interests.length > 0 &&
    form.skills.trim() !== "";

  const step4Valid =
    form.whyJoin.trim() !== "" &&
    form.contribution.trim() !== "";

  /* =========================
     NEXT
  ========================= */

  const handleNext = () => {
    if (step === 1 && step1Valid) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (step === 2 && step2Valid) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (step === 3 && step3Valid) {
      setStep(4);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* =========================
     BACK
  ========================= */

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* =========================
     SUBMIT
  ========================= */

//   const handleSubmit = async () => {
//   if (!step4Valid) return;

//   try {
//     const response = await fetch("/api/apply", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       alert(result.error || "Something went wrong.");
//       return;
//     }

//     console.log("APPLICATION SAVED:", result.application);

//     setSubmitted(true);
//   } catch (error) {
//     console.error("Submission error:", error);
//     alert("Unable to submit application. Please try again.");
//   }
// };

const handleSubmit = async () => {
  if (!step4Valid || isSubmitting) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Something went wrong.");
      return;
    }

    console.log("APPLICATION SAVED:", result.application);

    setSubmitted(true);

    // Keep the submit button locked for 3 seconds
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);

  } catch (error) {
    console.error("Submission error:", error);
    alert("Unable to submit application. Please try again.");

    // Allow retry after an error
    setIsSubmitting(false);
  }
};
  /* =========================
     INPUT STYLE
  ========================= */

  const inputClass = (field) => `
    w-full
    border-b
    bg-transparent
    px-0
    py-3
    text-base
    text-white
    outline-none
    transition-colors
    placeholder:text-white/50
    sm:py-4
    sm:text-lg
    ${
      touched[field] &&
      (
        (field === "email" &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) ||
        (field === "phone" &&
          !/^[0-9]{10}$/.test(form.phone)) ||
        form[field]?.trim() === ""
      )
        ? "border-red-400/60"
        : "border-white/20 focus:border-purple-400"
    }
  `;

  /* =========================
     SUCCESS SCREEN
  ========================= */

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050509] px-6 text-white">

        <div className="text-center">

          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
            IETE-SF · Induction '26
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            APPLICATION
            <span className="block text-white/45">
              RECEIVED.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/50 sm:text-base">
            Thank you for applying to IETE-SF.
            We&apos;ll get in touch with you soon.
          </p>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050509] text-white">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/10
            blur-[130px]
            sm:h-[500px]
            sm:w-[500px]
          "
        />

      </div>


      {/* =========================
          MAIN WRAPPER
      ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-6xl
          flex-col
          px-6
          py-6
          sm:px-10
          sm:py-8
          lg:px-16
        "
      >

        {/* =========================
            HEADER
        ========================= */}

        <header className="flex items-center justify-between border-b border-white/10 pb-5">

          <span className="text-sm uppercase tracking-[0.25em] text-white/80">
            IETE-SF
          </span>

          <span className="text-xs tracking-[0.2em] text-white/40">
            0{step} / 04
          </span>

        </header>


        {/* =========================
            CONTENT
        ========================= */}

        <div className="my-auto py-12 sm:py-16">

          <div
            key={step}
            className="animate-page-in"
          >

            {/* =====================================================
                STEP 1 — YOU
            ===================================================== */}

            {step === 1 && (
              <>

                <div className="mb-10 sm:mb-12">

                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
                    Induction &apos;26
                  </p>

                  <h1
                    className="
                      max-w-3xl
                      text-5xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.045em]
                      sm:text-7xl
                      md:text-8xl
                    "
                  >
                    LET&apos;S START WITH
                    <span className="block text-white/45">
                      YOU.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    Tell us a little about yourself.
                    These details will help us get your induction started.
                  </p>

                </div>


                <div className="max-w-2xl space-y-7 sm:space-y-9">

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Full Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your full name"
                      className={inputClass("name")}
                      autoComplete="name"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Email Address
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      className={inputClass("email")}
                      autoComplete="email"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Phone Number
                    </label>

                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="10-digit mobile number"
                      className={inputClass("phone")}
                      autoComplete="tel"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Roll Number
                    </label>

                    <input
                      name="rollNumber"
                      type="text"
                      value={form.rollNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your roll number"
                      className={inputClass("rollNumber")}
                    />
                  </div>


                  <div className="flex justify-end pt-3 sm:pt-5">

                    <button
                      type="button"
                      disabled={!step1Valid}
                      onClick={handleNext}
                      className={`
                        group
                        flex
                        items-center
                        gap-3
                        rounded-full
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        sm:px-7
                        sm:py-4
                        ${
                          step1Valid
                            ? "bg-white text-black"
                            : "cursor-not-allowed bg-white/10 text-white/30"
                        }
                      `}
                    >
                      NEXT

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          ${
                            step1Valid
                              ? "bg-black text-white group-hover:translate-x-1"
                              : "bg-white/10 text-white/30"
                          }
                          transition-transform
                        `}
                      >
                        →
                      </span>

                    </button>

                  </div>

                </div>

              </>
            )}


            {/* =====================================================
                STEP 2 — ACADEMICS
            ===================================================== */}

            {step === 2 && (
              <>

                <div className="mb-10 sm:mb-12">

                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
                    Step 02 · Academics
                  </p>

                  <h1
                    className="
                      max-w-3xl
                      text-5xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.045em]
                      sm:text-7xl
                      md:text-8xl
                    "
                  >
                    TELL US
                    <span className="block text-white/45">
                      WHERE YOU STAND.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    A quick look at your academic background.
                  </p>

                </div>


                <div className="max-w-2xl space-y-7 sm:space-y-9">

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Branch / Department
                    </label>

                    <input
                      name="branch"
                      type="text"
                      value={form.branch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Electronics & Communication"
                      className={inputClass("branch")}
                    />
                  </div>


                  {/* <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Year of Study
                    </label>

                    <select
                      name="year"
                      value={form.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="
                        w-full
                        border-b
                        border-white/20
                        bg-[#050509]
                        px-0
                        py-3
                        text-base
                        text-white
                        outline-none
                        focus:border-purple-400
                        sm:py-4
                        sm:text-lg
                      "
                    >
                      <option value="">
                        Select your year
                      </option>

                      <option value="1st Year">1st Year</option>


                    </select>
                  </div> */}


                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      12th Percentage
                    </label>

                    <input
                      name="class12Percentage"
                      value={form.class12Percentage}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. 85%"
                      className={inputClass("class12Percentage")}
                    />
                  </div>


                  <div>

                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Academic Achievements
                      <span className="ml-2 text-white/20">
                        Optional
                      </span>
                    </label>

                    <textarea
                      name="achievements"
                      value={form.achievements}
                      onChange={handleChange}
                      placeholder="Scholarships, competitions, olympiads, etc."
                      rows={2}
                      className="
                        w-full
                        resize-none
                        border-b
                        border-white/20
                        bg-transparent
                        px-0
                        py-3
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-purple-400
                        sm:py-4
                        sm:text-lg
                      "
                    />

                  </div>


                  <div className="flex items-center justify-between pt-3 sm:pt-5">

                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-sm text-white/40 transition hover:text-white"
                    >
                      ← BACK
                    </button>

                    <button
                      type="button"
                      disabled={!step2Valid}
                      onClick={handleNext}
                      className={`
                        group
                        flex
                        items-center
                        gap-3
                        rounded-full
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        transition
                        sm:px-7
                        sm:py-4
                        ${
                          step2Valid
                            ? "bg-white text-black"
                            : "cursor-not-allowed bg-white/10 text-white/30"
                        }
                      `}
                    >
                      NEXT

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          ${
                            step2Valid
                              ? "bg-black text-white group-hover:translate-x-1"
                              : "bg-white/10 text-white/30"
                          }
                        `}
                      >
                        →
                      </span>

                    </button>

                  </div>

                </div>

              </>
            )}


            {/* =====================================================
                STEP 3 — INTERESTS
            ===================================================== */}

            {step === 3 && (
              <>

                <div className="mb-10 sm:mb-12">

                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
                    Step 03 · Interests
                  </p>

                  <h1
                    className="
                      max-w-3xl
                      text-5xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.045em]
                      sm:text-7xl
                      md:text-8xl
                    "
                  >
                    WHAT
                    <span className="block text-white/45">
                      DRIVES YOU?
                    </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    Choose the areas you&apos;re interested in.
                    You can select more than one.
                  </p>

                </div>


                <div className="max-w-3xl">

                  <label className="mb-4 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Areas of Interest
                  </label>


                  <div className="flex flex-wrap gap-3">

                    {[
                      "Web Development",
                      "Competitive Programming",
                      "App Development",
                      "IoT",
                      "Cybersecurity",
                      "AI / ML",
                      "VLSI",
                      "Robotics",
                      "Electronics",
                      "Design",
                      "Content",
                      "Video Editing",
                      "Management",
                    ].map((interest) => {

                      const selected =
                        form.interests.includes(interest);

                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`
                            rounded-full
                            border
                            px-4
                            py-2.5
                            text-sm
                            transition-all
                            duration-200
                            ${
                              selected
                                ? "border-purple-400 bg-purple-500/20 text-white"
                                : "border-white/15 text-white/45 hover:border-white/30 hover:text-white"
                            }
                          `}
                        >
                          {interest}
                        </button>
                      );

                    })}

                  </div>


                  <div className="mt-10">

                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Skills / Technologies You Know
                    </label>

                    <input
                      name="skills"
                      type="text"
                      value={form.skills}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. JavaScript, Arduino, Figma..."
                      className={inputClass("skills")}
                    />

                  </div>


                  <div className="mt-8 flex items-center justify-between pt-3 sm:pt-5">

                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-sm text-white/40 transition hover:text-white"
                    >
                      ← BACK
                    </button>


                    <button
                      type="button"
                      disabled={!step3Valid}
                      onClick={handleNext}
                      className={`
                        group
                        flex
                        items-center
                        gap-3
                        rounded-full
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        transition
                        sm:px-7
                        sm:py-4
                        ${
                          step3Valid
                            ? "bg-white text-black"
                            : "cursor-not-allowed bg-white/10 text-white/30"
                        }
                      `}
                    >
                      NEXT

                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          ${
                            step3Valid
                              ? "bg-black text-white group-hover:translate-x-1"
                              : "bg-white/10 text-white/30"
                          }
                        `}
                      >
                        →
                      </span>

                    </button>

                  </div>

                </div>

              </>
            )}


            {/* =====================================================
                STEP 4 — ABOUT YOU
            ===================================================== */}

            {step === 4 && (
              <>

                <div className="mb-10 sm:mb-12">

                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-purple-300/70">
                    Step 04 · About You
                  </p>

                  <h1
                    className="
                      max-w-3xl
                      text-5xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.045em]
                      sm:text-7xl
                      md:text-8xl
                    "
                  >
                    NOW TELL US
                    <span className="block text-white/45">
                      YOUR STORY.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    This is your chance to tell us what makes you
                    interested in being a part of IETE-SF.
                  </p>

                </div>


                <div className="max-w-2xl space-y-8">

                  {/* WHY JOIN */}

                  <div>

                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Why do you want to join IETE-SF?
                    </label>

                    <textarea
                      name="whyJoin"
                      value={form.whyJoin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      placeholder="Tell us what you're looking for..."
                      className="
                        w-full
                        resize-none
                        border-b
                        border-white/20
                        bg-transparent
                        px-0
                        py-3
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-purple-400
                        sm:py-4
                        sm:text-lg
                      "
                    />

                  </div>


                  {/* EXPERIENCE */}

                  <div>

                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Previous Projects / Experience
                      <span className="ml-2 text-white/20">
                        Optional
                      </span>
                    </label>

                    <textarea
                      name="projects"
                      value={form.projects}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Projects, internships, events, clubs..."
                      className="
                        w-full
                        resize-none
                        border-b
                        border-white/20
                        bg-transparent
                        px-0
                        py-3
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-purple-400
                        sm:py-4
                        sm:text-lg
                      "
                    />

                  </div>


                  {/* CONTRIBUTION */}

                  <div>

                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      What can you contribute?
                    </label>

                    <textarea
                      name="contribution"
                      value={form.contribution}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      placeholder="Ideas, skills, leadership, creativity..."
                      className="
                        w-full
                        resize-none
                        border-b
                        border-white/20
                        bg-transparent
                        px-0
                        py-3
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-purple-400
                        sm:py-4
                        sm:text-lg
                      "
                    />

                  </div>


                  {/* ANYTHING ELSE */}

                  <div>

                    <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Anything else?
                      <span className="ml-2 text-white/20">
                        Optional
                      </span>
                    </label>

                    <textarea
                      name="doubts"
                      value={form.doubts}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Anything you'd like us to know..."
                      className="
                        w-full
                        resize-none
                        border-b
                        border-white/20
                        bg-transparent
                        px-0
                        py-3
                        text-base
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-purple-400
                        sm:py-4
                        sm:text-lg
                      "
                    />

                  </div>


                  {/* BUTTONS */}

                  <div className="flex items-center justify-between pt-3 sm:pt-5">

                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-sm text-white/40 transition hover:text-white"
                    >
                      ← BACK
                    </button>


                    {/* <button
                      type="button"
                      disabled={!step4Valid}
                      onClick={handleSubmit}
                      className={`
                        rounded-full
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          step4Valid
                            ? "bg-white text-black hover:scale-[1.02]"
                            : "cursor-not-allowed bg-white/10 text-white/30"
                        }
                      `}
                    >
                      SUBMIT APPLICATION
                    </button> */}

                    <button
  type="button"
  disabled={!step4Valid || isSubmitting}
  onClick={handleSubmit}
  className={`
    rounded-full
    px-7
    py-4
    text-sm
    font-semibold
    transition-all
    duration-300
    ${
      step4Valid && !isSubmitting
        ? "bg-white text-black hover:scale-[1.02]"
        : "cursor-not-allowed bg-white/10 text-white/30"
    }
  `}
>
  {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
</button>

                  </div>

                </div>

              </>
            )}

          </div>

        </div>


        {/* =========================
            FOOTER
        ========================= */}

        <footer
          className="
            flex
            flex-col
            gap-2
            border-t
            border-white/10
            pt-5
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-[10px]
          "
        >
          <span>
            DISCOVER · CREATE · CONNECT
          </span>

          <span>
            IETE-SF · 2026
          </span>
        </footer>

      </div>

    </main>
  );
}
