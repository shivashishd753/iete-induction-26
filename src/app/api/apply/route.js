// // import { createClient } from "@supabase/supabase-js";
// // import { NextResponse } from "next/server";
// // import { sendInductionEmail } from "@/lib/sendInductionEmail";

// // const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// //   process.env.SUPABASE_SECRET_KEY
// // );

// // export async function POST(request) {
// //   try {
// //     const form = await request.json();

// //     const {
// //       name,
// //       email,
// //       phone,
// //       rollNumber,
// //       branch,
// //       class12Percentage,
// //       academic_achievements,
// //       interests,
// //       skills,
// //       whyJoin,
// //       projects,
// //       contribution,
// //       doubts,
// //     } = form;

// //     // Check required fields
// //     if (
// //       !name ||
// //       !email ||
// //       !phone ||
// //       !rollNumber ||
// //       !branch ||
// //       !class12Percentage ||
// //       !interests ||
// //       interests.length === 0 ||
// //       !skills ||
// //       !whyJoin ||
// //       !contribution
// //     ) {
// //       return NextResponse.json(
// //         {
// //           success: false,
// //           error: "Please fill all required fields.",
// //         },
// //         { status: 400 }
// //       );
// //     }

// //     // Save application in Supabase
// //     const { data, error } = await supabase
// //       .from("applications")
// //       .insert([
// //         {
// //           name: name.trim(),
// //           email: email.trim(),
// //           phone: phone.trim(),
// //           roll_number: rollNumber.trim(),
// //           branch: branch.trim(),
// //           class_12th_percentage: Number(class12Percentage),
// //           academic_achievments: academic_achievements?.trim() || null,
// //           interests: interests,
// //           skills: skills.trim(),
// //           why_join: whyJoin.trim(),
// //           projects: projects?.trim() || null,
// //           contribution: contribution.trim(),
// //           doubts: doubts?.trim() || null,
// //         },
// //       ])
// //       .select()
// //       .single();

// //     if (error) {
// //       console.error("SUPABASE ERROR:", JSON.stringify(error, null, 2));

// //       return NextResponse.json(
// //         {
// //           success: false,
// //           error: "Could not save your application.",
// //         },
// //         { status: 500 }
// //       );
// //     }

// //     await sendInductionEmail({
// //   name: name.trim(),
// //   email: email.trim(),
// // });

// //     return NextResponse.json({
// //       success: true,
// //       message: "Application submitted successfully!",
// //       application: data,
// //     });
// //   } catch (error) {
// //     console.error("API error:", error);

// //     return NextResponse.json(
// //       {
// //         success: false,
// //         error: "Something went wrong. Please try again.",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { createClient } from "@supabase/supabase-js";
// import { NextResponse } from "next/server";
// import { sendInductionEmail } from "@/lib/sendInductionEmail";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SECRET_KEY
// );

// export async function POST(request) {
//   try {
//     const form = await request.json();

//     const {
//       name,
//       email,
//       phone,
//       rollNumber,
//       branch,
//       class12Percentage,
//       academic_achievements,
//       interests,
//       skills,
//       whyJoin,
//       projects,
//       contribution,
//       doubts,
//     } = form;

//     // -----------------------------
//     // SERVER-SIDE VALIDATION
//     // -----------------------------

//     if (
//       !name?.trim() ||
//       !email?.trim() ||
//       !phone?.trim() ||
//       !rollNumber?.trim() ||
//       !branch?.trim() ||
//       !class12Percentage?.toString().trim() ||
//       !interests ||
//       !Array.isArray(interests) ||
//       interests.length === 0 ||
//       !skills?.trim() ||
//       !whyJoin?.trim() ||
//       !contribution?.trim()
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Please fill all required fields.",
//         },
//         { status: 400 }
//       );
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(email.trim())) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Please enter a valid email address.",
//         },
//         { status: 400 }
//       );
//     }

//     // Phone validation
//     if (!/^[0-9]{10}$/.test(phone.trim())) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Please enter a valid 10-digit phone number.",
//         },
//         { status: 400 }
//       );
//     }

//     // Percentage validation
//     const percentage = Number(class12Percentage);

//     if (
//       Number.isNaN(percentage) ||
//       percentage < 0 ||
//       percentage > 100
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Please enter a valid percentage.",
//         },
//         { status: 400 }
//       );
//     }

//     // -----------------------------
//     // SAVE APPLICATION
//     // -----------------------------

//     const { data, error } = await supabase
//       .from("applications")
//       .insert([
//         {
//           name: name.trim(),
//           email: email.trim(),
//           phone: phone.trim(),
//           roll_number: rollNumber.trim(),
//           branch: branch.trim(),
//           class_12th_percentage: percentage,
//           academic_achievments:
//             academic_achievements?.trim() || null,
//           interests: interests,
//           skills: skills.trim(),
//           why_join: whyJoin.trim(),
//           projects: projects?.trim() || null,
//           contribution: contribution.trim(),
//           doubts: doubts?.trim() || null,
//         },
//       ])
//       .select()
//       .single();

//     if (error) {
//       console.error(
//         "SUPABASE ERROR:",
//         JSON.stringify(error, null, 2)
//       );

//       return NextResponse.json(
//         {
//           success: false,
//           error: "Could not save your application.",
//         },
//         { status: 500 }
//       );
//     }

//     // -----------------------------
//     // SEND CONFIRMATION EMAIL
//     // -----------------------------

//     try {
//       await sendInductionEmail({
//         name: name.trim(),
//         email: email.trim(),
//       });

//       console.log("CONFIRMATION EMAIL SENT:", email);
//     } catch (emailError) {
//       console.error("EMAIL ERROR:", emailError);
//     }

//     // -----------------------------
//     // SUCCESS
//     // -----------------------------

//     return NextResponse.json({
//       success: true,
//       message: "Application submitted successfully!",
//       application: data,
//     });

//   } catch (error) {
//     console.error("API error:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: "Something went wrong. Please try again.",
//       },
//       { status: 500 }
//     );
//   }
// }

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export async function POST(request) {
  try {
    const form = await request.json();

    const {
      name,
      email,
      phone,
      rollNumber,
      branch,
      class12Percentage,
      academic_achievements,
      interests,
      skills,
      whyJoin,
      projects,
      contribution,
      doubts,
    } = form;

    // -----------------------------
    // SERVER-SIDE VALIDATION
    // -----------------------------

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !rollNumber?.trim() ||
      !branch?.trim() ||
      !class12Percentage?.toString().trim() ||
      !interests ||
      !Array.isArray(interests) ||
      interests.length === 0 ||
      !skills?.trim() ||
      !whyJoin?.trim() ||
      !contribution?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit phone number.",
        },
        { status: 400 }
      );
    }

    // Percentage validation
    const percentage = Number(class12Percentage);

    if (
      Number.isNaN(percentage) ||
      percentage < 0 ||
      percentage > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid percentage.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // SAVE APPLICATION TO SUPABASE
    // -----------------------------

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          roll_number: rollNumber.trim(),
          branch: branch.trim(),
          class_12th_percentage: percentage,
          academic_achievments:
            academic_achievements?.trim() || null,
          interests: interests,
          skills: skills.trim(),
          why_join: whyJoin.trim(),
          projects: projects?.trim() || null,
          contribution: contribution.trim(),
          doubts: doubts?.trim() || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error(
        "SUPABASE ERROR:",
        JSON.stringify(error, null, 2)
      );

      return NextResponse.json(
        {
          success: false,
          error: "Could not save your application.",
        },
        { status: 500 }
      );
    }

    // -----------------------------
    // SEND CONFIRMATION EMAIL
    // GOOGLE APPS SCRIPT
    // -----------------------------

    try {
      if (!APPS_SCRIPT_URL) {
        throw new Error(
          "GOOGLE_APPS_SCRIPT_URL is not configured."
        );
      }

      const emailResponse = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const emailResult = await emailResponse.json();

      if (!emailResponse.ok || !emailResult.success) {
        throw new Error(
          emailResult.error || "Google Apps Script email failed."
        );
      }

      console.log(
        "CONFIRMATION EMAIL SENT:",
        email
      );

    } catch (emailError) {
      // Email failure should NOT cancel the application.
      console.error(
        "EMAIL ERROR:",
        emailError
      );
    }

    // -----------------------------
    // SUCCESS
    // -----------------------------

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      application: data,
    });

  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}