"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/shared/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for beginners",
    features: [
      "Access to gym floor",
      "Group fitness classes",
      "Locker room access",
      "Free fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    description: "Most popular choice",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Sauna & steam room",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$199",
    period: "/month",
    description: "For serious athletes",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal planning",
      "Recovery & massage therapy",
      "Priority class booking",
      "Guest passes (4/month)",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              style={{ color: 'var(--brand-primary)' }}
            >
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible membership options designed to fit your lifestyle and goals
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`relative p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-2 shadow-xl scale-105"
                    : "border-gray-200"
                }`}
                style={plan.popular ? { borderColor: 'var(--brand-accent)' } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="text-white px-4 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: 'var(--brand-accent)' }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className="text-2xl font-heading font-bold mb-2"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className="flex-shrink-0 mt-0.5 mr-3"
                        size={20}
                        style={{ color: 'var(--brand-accent)' }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  style={
                    plan.popular
                      ? {
                          backgroundColor: 'var(--brand-accent)',
                          color: 'white',
                        }
                      : { backgroundColor: '#1a1a1a' }
                  }
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
