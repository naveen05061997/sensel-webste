/**
 * ============================================================================
 *  SENSEL — CUSTOMER TESTIMONIALS CONTENT
 * ============================================================================
 *
 *  ⚠️  TEMPORARY / DUMMY CONTENT — NOT REAL CUSTOMER REVIEWS
 *  Every testimonial below is placeholder copy for layout and testing only.
 *  Names and companies are deliberately generic ("Customer Name", "ABC ...").
 *  Replace them with genuine, customer-approved reviews before going live.
 *
 *  HOW TO EDIT
 *  For each testimonial, change only the values inside the quotes:
 *    review:      the customer's quote (no need to add quotation marks)
 *    name:        the customer's name
 *    designation: their job title / role
 *    company:     their company name
 *    rating:      a whole number from 1 to 5 (5 = five stars)
 *
 *  - Add a testimonial by copying one { ... } block.
 *  - Remove a testimonial by deleting its block.
 *  - Order here = order in the carousel.
 *  - The carousel automatically adapts to any number of testimonials.
 *
 *  You do NOT need to edit the component (components/sections/Testimonials.tsx).
 * ============================================================================
 */

export type Testimonial = {
  title?: string;
  review: string;
  name: string;
  designation: string;
  company: string;
  /** 1–5 */
  rating: number;
};

export const testimonialData: Testimonial[] = [
  // ─── Real Customer Review — Atlas Copco India ──────────────────────────────
  {
    title: "Excellent Mobile Asset Management Solution",
    review:
      "Sensel Telematics has helped us improve tracking and management of our tools through accurate location monitoring, ensuring better utilization of our mobile assets. We are also highly satisfied with the responsive service support from Sensel Telematics and the priority they give to customer concerns.",
    name: "Panchu Saha",
    designation: "Energy Manager",
    company: "Atlas Copco India Pvt. Ltd.",
    rating: 5,
  },

  // ─── Real Customer Review — M/S Biswakarma Transport & Co. ──────────────────
  {
    review:
      "Sensel Telematics has made our fleet management more efficient and convenient. We appreciate their reliable tracking solutions and excellent customer support. Their team is responsive, values our concerns, and gives them the attention they deserve. We are satisfied with the service and look forward to continuing our association with Sensel Telematics.",
    name: "Manti Sarkar",
    designation: "Office Executive",
    company: "M/S Biswakarma Transport & Co.",
    rating: 4.5,
  },

  // ─── DUMMY TESTIMONIAL 1 — Logistics / Fleet Management ────────────────────
  {
    review:
      "SENSEL's tracking solution has significantly improved visibility across our fleet. Real-time location and status updates have helped our control room respond faster and reduced the number of calls to drivers.",
    name: "Customer Name",
    designation: "Fleet Operations Manager",
    company: "ABC Logistics Pvt. Ltd.",
    rating: 5,
  },

  // ─── DUMMY TESTIMONIAL 2 — Mining ──────────────────────────────────────────
  {
    review:
      "Geofencing around our pits, crushers and weighbridges now records trips automatically. Our team spends far less time compiling trip sheets manually, and contractor reconciliation has become much more straightforward.",
    name: "Customer Name",
    designation: "Head of Mine Operations",
    company: "XYZ Minerals Ltd.",
    rating: 5,
  },

  // ─── DUMMY TESTIMONIAL 3 — Cement ──────────────────────────────────────────
  {
    review:
      "Managing high-volume material movement between the quarry and the plant used to depend on manual entries. With SENSEL, we have reliable trip data and better visibility of turnaround times across our internal logistics.",
    name: "Customer Name",
    designation: "Logistics Head",
    company: "PQR Cement Industries",
    rating: 5,
  },

  // ─── DUMMY TESTIMONIAL 4 — Railway / Wagon Tracking ────────────────────────
  {
    review:
      "The solar-powered trackers have worked well on our wagons, which have no external power source. We can now see where our rolling stock is and plan utilisation with considerably more confidence.",
    name: "Customer Name",
    designation: "Rake Operations Manager",
    company: "ABC Rail Logistics",
    rating: 5,
  },

  // ─── DUMMY TESTIMONIAL 5 — Cold Chain ──────────────────────────────────────
  {
    review:
      "Having temperature readings alongside live location in one dashboard has made monitoring our reefer fleet much easier. Threshold alerts help our team act quickly when a consignment needs attention.",
    name: "Customer Name",
    designation: "Cold Chain Operations Lead",
    company: "XYZ Cold Logistics",
    rating: 5,
  },

  // ─── DUMMY TESTIMONIAL 6 — Industrial / Hazardous Cargo ────────────────────
  {
    review:
      "For hazardous cargo, route compliance is critical. SENSEL's route monitoring and unauthorised-stop alerts give our safety team the oversight they need, along with detailed trip records for audits.",
    name: "Customer Name",
    designation: "HSE & Transport Manager",
    company: "PQR Chemicals Ltd.",
    rating: 5,
  },
];
