/**
 * ============================================================================
 *  SENSEL — FAQ CONTENT
 * ============================================================================
 *
 *  ⚠️  TEMPORARY / DUMMY CONTENT
 *  Every question and answer below is placeholder copy written for layout and
 *  testing purposes. Replace them with your real, approved FAQ content.
 *
 *  HOW TO EDIT
 *  - Only change the text inside `question: "..."` and `answer: "..."`.
 *  - Add a new FAQ by copying one `{ question, answer }` block.
 *  - Delete an FAQ by removing its block.
 *  - Order here = order on the website.
 *  - The FAQ section automatically handles any number of items
 *    (first 7 are shown, the rest appear after "View All FAQs").
 *  - To split an answer into multiple paragraphs, put a blank line
 *    between them using "\n\n".
 *
 *  You do NOT need to edit the FAQ component (components/sections/FAQ.tsx).
 * ============================================================================
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  // ─── DUMMY FAQ 1 ───────────────────────────────────────────────────────────
  {
    question: "What types of GPS tracking solutions does SENSEL provide?",
    answer:
      "SENSEL provides end-to-end GPS tracking and telematics solutions for vehicles, heavy equipment, railway wagons, containers and other non-powered assets. Our portfolio includes wired vehicle trackers, rechargeable asset trackers, solar-powered trackers and work-hour monitors, all connected to our Fleet Smart™ and Asset Smart™ software platforms.",
  },

  // ─── DUMMY FAQ 2 ───────────────────────────────────────────────────────────
  {
    question: "Can SENSEL GPS trackers be used for railway wagons and containers?",
    answer:
      "Yes. Our solar-powered and long-life rechargeable trackers are designed specifically for assets that have no external power source, such as railway wagons, ISO containers and trailers. They mount securely on the asset, report location at configurable intervals and continue working through long transit cycles with minimal maintenance.",
  },

  // ─── DUMMY FAQ 3 ───────────────────────────────────────────────────────────
  {
    question: "How does a solar-powered GPS tracker work?",
    answer:
      "A solar-powered GPS tracker uses an integrated solar panel to continuously recharge its internal battery during daylight. The device determines its position via GNSS and transmits data over the cellular network to the SENSEL platform. Intelligent power management lets it keep reporting through cloudy days and night-time operation.",
  },

  // ─── DUMMY FAQ 4 ───────────────────────────────────────────────────────────
  {
    question: "What is the difference between rechargeable and solar-powered GPS trackers?",
    answer:
      "Rechargeable trackers rely on a high-capacity internal battery that is periodically recharged, making them ideal for compact installations, indoor assets or short to medium deployment cycles. Solar-powered trackers top up their battery automatically from sunlight and are best suited for outdoor assets that operate for months without access to charging, such as wagons and containers.",
  },

  // ─── DUMMY FAQ 5 ───────────────────────────────────────────────────────────
  {
    question: "Can SENSEL track vehicles in real time?",
    answer:
      "Yes. Vehicles fitted with SENSEL telematics devices report live location, speed, ignition status and other parameters to the Fleet Smart™ dashboard. Fleet managers can view the live map, receive instant alerts for over-speeding or route deviation, and replay historical trips at any time.",
  },

  // ─── DUMMY FAQ 6 ───────────────────────────────────────────────────────────
  {
    question: "How does geofencing help automate mining and logistics operations?",
    answer:
      "Geofences are virtual boundaries drawn around locations such as mine pits, crushers, weighbridges, plants, depots and customer sites. When a vehicle or asset enters or exits a geofence, the platform records the event automatically, enabling accurate turnaround times, dwell-time analysis and alerts without manual data entry.",
  },

  // ─── DUMMY FAQ 7 ───────────────────────────────────────────────────────────
  {
    question: "Can the system automatically generate trips based on loading and unloading locations?",
    answer:
      "Yes. By combining geofences with movement and halt detection, the SENSEL platform can automatically create trips from the loading point to the unloading point. Each trip captures start and end times, distance, halts and cycle time, giving operations teams reliable trip counts for billing, productivity and contractor management.",
  },

  // ─── DUMMY FAQ 8 ───────────────────────────────────────────────────────────
  {
    question: "Are SENSEL tracking devices suitable for harsh industrial environments?",
    answer:
      "SENSEL devices are built for demanding conditions found in construction, mining, cement and heavy logistics. They feature rugged, weather-resistant enclosures and are designed to tolerate dust, vibration, moisture and wide temperature ranges commonly encountered on industrial sites.",
  },

  // ─── DUMMY FAQ 9 ───────────────────────────────────────────────────────────
  {
    question: "Can SENSEL solutions be used for cold-chain and temperature-sensitive logistics?",
    answer:
      "Yes. SENSEL telematics can be combined with temperature sensors to monitor reefer trucks and temperature-controlled containers in real time. The platform logs temperature alongside location, triggers alerts when readings move outside defined thresholds, and provides reports that support quality and compliance audits.",
  },

  // ─── DUMMY FAQ 10 ──────────────────────────────────────────────────────────
  {
    question: "Can SENSEL provide telematics solutions for hazardous cargo?",
    answer:
      "Yes. Our hazardous cargo solution helps operators transport dangerous goods with greater safety and accountability. It supports approved-route monitoring, restricted-zone geofencing, unauthorised-stop and over-speed alerts, and detailed trip records to help meet regulatory and customer safety requirements.",
  },
];
