
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Sparkles,
  UserRound,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

const services = [
  "Full Stack Web Development",
  "Frontend Development",
  "Backend Development",
  "Website Redesign",
  "E-commerce Website",
  "Portfolio Website",
  "Other / Not Sure Yet",
];

const budgets = [
  "Under $100",
  "$100 – $300",
  "$300 – $500",
  "$500 – $1,000",
  "$1,000+",
  "Let's Discuss",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(true);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setNotice("");
    setIsSubmitting(true);

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      deadline: String(formData.get("deadline") ?? ""),
      details: String(formData.get("details") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setNotice(
          result.message ||
            "We couldn't submit your inquiry. Please try again."
        );
        return;
      }

      setEmailSent(result.emailSent !== false);
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      setNotice(
        "Unable to connect to the server. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080D1A] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4AF65]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF65]/25 bg-[#D4AF65]/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#E6C783]">
            <Sparkles size={14} />
            LET&apos;S WORK TOGETHER
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-gray-500">
            Contact & Project Booking
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Have a vision?
            <br />
            <span className="bg-gradient-to-r from-[#F2D99A] via-[#D4AF65] to-[#A9823C] bg-clip-text text-transparent">
              Let&apos;s make it real.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have a project in mind, need a website, or want to collaborate?
            Share your ideas with me. Tell me what you need, and let&apos;s
            explore how we can bring your project to life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 sm:p-9">
              <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF65]/25 bg-[#D4AF65]/[0.09] text-[#D4AF65]">
                <BriefcaseBusiness size={26} />
              </span>

              <h3 className="text-2xl font-semibold">
                Let&apos;s discuss your project.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Whether you need a new website, a redesign, or a developer
                to join your project, I&apos;m happy to hear about your ideas.
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <CalendarDays
                    size={20}
                    className="mt-1 shrink-0 text-[#D4AF65]"
                  />
                  <div>
                    <p className="font-medium">Project scheduling</p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Share your preferred deadline and timeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquareText
                    size={20}
                    className="mt-1 shrink-0 text-[#D4AF65]"
                  />
                  <div>
                    <p className="font-medium">Clear communication</p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Describe your goals, requirements, and expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock3
                    size={20}
                    className="mt-1 shrink-0 text-[#D4AF65]"
                  />
                  <div>
                    <p className="font-medium">Flexible project scope</p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      From small improvements to complete web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4AF65]/20 bg-gradient-to-br from-[#D4AF65]/[0.09] to-transparent p-6">
              <p className="text-sm font-medium text-[#E6C783]">
                HAVE SOMETHING DIFFERENT IN MIND?
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Not sure which service you need? Choose
                &quot;Other / Not Sure Yet&quot; in the form and explain
                your idea. We can figure out the details together.
              </p>
            </div>
          </aside>

          <div className="rounded-3xl border border-white/[0.10] bg-[#0D1424] p-6 shadow-2xl shadow-black/20 sm:p-9 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={54} className="text-[#D4AF65]" />

                <h3 className="mt-6 text-2xl font-semibold">
                  Your inquiry has been received!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                  Thank you for reaching out. Your project inquiry has been
                  saved successfully. I appreciate your interest and look
                  forward to learning more about your project.
                </p>

                {!emailSent && (
                  <p
                    role="status"
                    className="mt-4 max-w-md text-sm leading-6 text-amber-200"
                  >
                    Your inquiry was saved, but the email notification
                    could not be sent. The form submission was not lost.
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setNotice("");
                  }}
                  className="mt-7 rounded-xl border border-[#D4AF65]/30 px-5 py-3 text-sm text-[#E6C783] transition hover:bg-[#D4AF65]/10"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#D4AF65]">
                    PROJECT INQUIRY FORM
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    Tell me about your project.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for basic bot protection */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-px w-px overflow-hidden"
                  >
                    <label htmlFor="booking-website">
                      Leave this field empty
                    </label>
                    <input
                      id="booking-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your name *
                      </label>
                      <div className="relative">
                        <UserRound
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          id="booking-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="John Smith"
                          maxLength={100}
                          required
                          className="w-full rounded-xl border border-white/10 bg-[#080D1A] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#D4AF65]/70 focus:ring-1 focus:ring-[#D4AF65]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email address *
                      </label>
                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          id="booking-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          maxLength={254}
                          required
                          className="w-full rounded-xl border border-white/10 bg-[#080D1A] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#D4AF65]/70 focus:ring-1 focus:ring-[#D4AF65]/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-company"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Company / Organization
                      <span className="ml-2 text-gray-600">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="booking-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company or brand"
                      maxLength={150}
                      className="w-full rounded-xl border border-white/10 bg-[#080D1A] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#D4AF65]/70 focus:ring-1 focus:ring-[#D4AF65]/20"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-service"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Service required *
                      </label>
                      <select
                        id="booking-service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#080D1A] px-4 py-3.5 text-sm text-gray-300 outline-none transition focus:border-[#D4AF65]/70"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-budget"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Estimated budget *
                      </label>
                      <select
                        id="booking-budget"
                        name="budget"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#080D1A] px-4 py-3.5 text-sm text-gray-300 outline-none transition focus:border-[#D4AF65]/70"
                      >
                        <option value="" disabled>
                          Choose a budget
                        </option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-deadline"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Preferred deadline
                    </label>
                    <input
                      id="booking-deadline"
                      name="deadline"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-white/10 bg-[#080D1A] px-4 py-3.5 text-sm text-gray-300 outline-none transition focus:border-[#D4AF65]/70"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-details"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Project details *
                    </label>
                    <textarea
                      id="booking-details"
                      name="details"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      placeholder="Tell me about your project, goals, required features, and any references you have..."
                      className="w-full resize-y rounded-xl border border-white/10 bg-[#080D1A] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-gray-600 focus:border-[#D4AF65]/70 focus:ring-1 focus:ring-[#D4AF65]/20"
                    />
                  </div>

                  {notice && (
                    <p
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 text-sm leading-6 text-amber-200"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                      <span>{notice}</span>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#E5C77F] via-[#D4AF65] to-[#B68B43] px-6 py-4 font-semibold text-[#080D1A] shadow-lg shadow-[#D4AF65]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D4AF65]/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle size={19} className="animate-spin" />
                        Sending inquiry...
                      </>
                    ) : (
                      <>
                        Send Project Inquiry
                        <ArrowRight
                          size={19}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-6 text-gray-500">
                    Submitting an inquiry is a request to discuss a project,
                    not a confirmed booking or agreement.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
