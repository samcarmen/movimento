"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { bodyText, headingText, labelText } from "@/lib/styles";

// ---------------------------------------------------------------------------
// Schema & types
// ---------------------------------------------------------------------------

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CONTACT_DETAILS: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: MapPin, label: "Address", value: "Al Sawaber Tower 5, Kuwait City" },
  { icon: Phone, label: "Phone", value: "(TBC)" },
  { icon: Mail, label: "Email", value: "(TBC)" },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ContactDetailProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

function ContactDetail({ icon: Icon, label, value }: ContactDetailProps) {
  return (
    <div className="flex items-start">
      <Icon
        className="flex-shrink-0 mr-4 mt-1"
        size={20}
        style={{ color: "var(--brand-accent)" }}
      />
      <div>
        <p className="text-sm tracking-widest uppercase mb-2" style={{ ...labelText, color: "rgba(244,247,249,0.6)" }}>
          {label}
        </p>
        <p style={{ ...bodyText, color: "var(--brand-light)" }}>{value}</p>
      </div>
    </div>
  );
}

interface FormFieldProps {
  error?: string;
  children: React.ReactNode;
}

function FormField({ error, children }: FormFieldProps) {
  return (
    <div>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-padding relative"
      style={{ backgroundColor: "var(--brand-dark)" }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section header */}
        <AnimatedSection>
          <div className="mb-20">
            <div className="mb-8">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-normal text-center"
                style={{ fontFamily: "var(--font-sans)", color: "#fff" }}
              >
                Get In Touch
              </h2>
            </div>
            <p
              className="text-xl md:text-2xl text-center max-w-3xl mx-auto font-light"
              style={{ fontFamily: "var(--font-sans)", color: "var(--brand-light)" }}
            >
              Ready to move better and live better? Contact us to begin your personalized journey
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact information */}
          <AnimatedSection>
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-normal mb-8" style={{ ...headingText, color: "#fff" }}>
                  Visit Our Studio
                </h3>

                <div className="space-y-8">
                  {CONTACT_DETAILS.map((detail) => (
                    <ContactDetail key={detail.label} {...detail} />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormField error={errors.name?.message}>
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                  style={{ backgroundColor: "#fff", color: "var(--brand-dark)" }}
                />
              </FormField>

              <FormField error={errors.email?.message}>
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                  style={{ backgroundColor: "#fff", color: "var(--brand-dark)" }}
                />
              </FormField>

              <FormField error={errors.phone?.message}>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone")}
                  className={errors.phone ? "border-red-500" : ""}
                  style={{ backgroundColor: "#fff", color: "var(--brand-dark)" }}
                />
              </FormField>

              <FormField error={errors.message?.message}>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                  style={{ backgroundColor: "#fff", color: "var(--brand-dark)" }}
                />
              </FormField>

              <ShimmerButton
                type="submit"
                className="w-full py-6 text-sm tracking-widest uppercase font-medium"
                disabled={isSubmitting}
                style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-dark)" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </ShimmerButton>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
