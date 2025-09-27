"use client";

import { ContactData } from "@/types";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { SectionTransition } from "@/components/ui/section-transition";
import { SmoothButton } from "@/components/ui/smooth-button";
import {
  Mail,
  ArrowRight,
  Linkedin,
  MessageSquare,
  Users,
  Heart,
  Code,
  Coffee,
  Star,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

interface ContactSectionProps {
  data: ContactData;
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionTransition sectionId="contact">
      <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16 lg:py-20 min-h-screen">
        {/* Subtle grid. Non-overlapping. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="h-full w-full opacity-[0.04] [mask-image:radial-gradient(60%_60%_at_50%_35%,#000_65%,transparent)] bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <SectionHeader title={data.title} subtitle={data.subtitle} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Team */}
          <AnimatedContainer delay={0.05}>
            <div className="mb-12 lg:mb-16">
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-8 lg:mb-10 text-center"
              >
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 lg:px-4 py-1.5 lg:py-2">
                  <Users className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                  <span className="text-sm lg:text-base font-medium text-primary">
                    {data.team.title}
                  </span>
                </div>

                <h3 className="mt-3 lg:mt-4 text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Meet Our Team
                </h3>

                <p className="mx-auto mt-3 lg:mt-4 max-w-2xl text-sm lg:text-base text-muted-foreground">
                  The people behind TypeBuddy. Practical, reliable, focused.
                </p>
              </motion.div>

              {/* Equal-height cards. No layout shift on hover. */}
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {data.team.members.map((member) => (
                  <Card
                    key={member.id}
                    className="isolate flex h-full flex-col overflow-hidden rounded-xl lg:rounded-2xl border bg-card"
                  >
                    {/* Top section */}
                    <div className="p-5 lg:p-7">
                      <div className="mx-auto mb-4 lg:mb-5 h-20 w-20 lg:h-24 lg:w-24">
                        {(member as any).image ? (
                          <div className="relative h-20 w-20 lg:h-24 lg:w-24 rounded-full ring-2 lg:ring-4 ring-primary/10">
                            <Image
                              src={(member as any).image as string}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="h-20 w-20 lg:h-24 lg:w-24 rounded-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 via-primary/15 to-primary/10 ring-2 lg:ring-4 ring-primary/10">
                            <span className="text-2xl lg:text-3xl font-bold text-primary">
                              {member.name?.[0] ?? "?"}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-center">
                        <div className="mx-auto inline-flex items-center gap-1 lg:gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2 lg:px-2.5 py-0.5 lg:py-1">
                          <Star className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-primary" />
                          <span className="text-[10px] lg:text-[11px] font-medium text-primary">
                            Core team
                          </span>
                        </div>

                        <h4 className="mt-2 lg:mt-3 text-base lg:text-lg font-semibold tracking-tight">
                          {member.name}
                        </h4>

                        <p className="mt-1 text-xs lg:text-sm text-muted-foreground">
                          {(member as any).role ?? "Full-Stack Developer"}
                        </p>

                        {(member as any).location && (
                          <p className="mt-1 inline-flex items-center justify-center gap-1 text-[10px] lg:text-xs text-muted-foreground/80">
                            <MapPin className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                            {(member as any).location as string}
                          </p>
                        )}

                        {Array.isArray((member as any).tags) &&
                          (member as any).tags.length > 0 && (
                            <div className="mt-2 lg:mt-3 flex flex-wrap justify-center gap-1.5 lg:gap-2">
                              {(member as any).tags.slice(0, 3).map((t: string) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-border/60 bg-card/60 px-1.5 lg:px-2 py-0.5 text-[9px] lg:text-[11px] text-foreground/85"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-5 lg:mx-7 mb-3 lg:mb-4 h-px bg-border/60" />

                    {/* Actions pinned to bottom */}
                    <div className="mt-auto p-5 lg:p-7 pt-0 space-y-2">
                      <CopyEmail email={member.email} />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedContainer>

          {/* Suggestions */}
          <AnimatedContainer delay={0.1}>
            <SectionBox>
              <div className="mx-auto mb-4 lg:mb-6 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
              </div>

              <h3 className="text-center text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {data.suggestions.title}
              </h3>

              <p className="mx-auto mt-3 max-w-3xl text-center text-base lg:text-lg text-muted-foreground">
                {data.suggestions.description}
              </p>

              <div className="mt-6 lg:mt-8 flex justify-center">
                <SmoothButton
                  href={data.suggestions.button.href}
                  external
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/85 hover:from-primary/95 hover:to-primary/80"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="text-sm lg:text-base">{data.suggestions.button.text}</span>
                  </div>
                </SmoothButton>
              </div>
            </SectionBox>
          </AnimatedContainer>

          {/* CTA */}
          <AnimatedContainer delay={0.15}>
            <SectionBox dense>
              <div className="mx-auto mb-4 lg:mb-5 inline-flex items-center gap-1.5 lg:gap-2 rounded-full bg-primary/10 px-2.5 lg:px-3 py-1 lg:py-1.5">
                <Coffee className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary" />
                <span className="text-[10px] lg:text-xs font-medium text-primary">
                  Ready to boost your productivity?
                </span>
              </div>

              <h3 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                {data.cta.title}
              </h3>

              <p className="mx-auto mt-3 lg:mt-4 max-w-3xl text-center text-base lg:text-lg text-muted-foreground">
                {data.cta.description}
              </p>

              <div className="mt-6 lg:mt-8 flex justify-center">
                <SmoothButton
                  href={data.cta.button.href}
                  size="lg"
                  external
                  className="border-0 bg-gradient-to-r from-primary to-primary/85 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg hover:from-primary/95 hover:to-primary/80"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="font-semibold">{data.cta.button.text}</span>
                  </div>
                </SmoothButton>
              </div>

              <p className="mt-4 lg:mt-6 text-center text-xs lg:text-sm text-muted-foreground/70">
                Free forever • No registration required • Instant setup
              </p>
            </SectionBox>
          </AnimatedContainer>

          {/* Footer */}
          <AnimatedContainer delay={0.2}>
            <footer className="mt-8 lg:mt-10 border-t border-border/50 pt-6 lg:pt-10">
              <div className="text-center space-y-2 lg:space-y-3">
                <div className="mx-auto inline-flex items-center gap-1.5 lg:gap-2 rounded-full border border-border/30 bg-card/60 px-3 lg:px-4 py-1.5 lg:py-2">
                  <Heart className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-red-500" />
                  <span className="text-xs lg:text-sm text-muted-foreground">
                    © {new Date().getFullYear()} TypeBuddy. Built with ❤️ by{" "}
                    <span className="font-semibold text-foreground">Skandhan</span>,{" "}
                    <span className="font-semibold text-foreground">Swathi</span> &{" "}
                    <span className="font-semibold text-foreground">Akash</span>
                  </span>
                </div>

                <p className="text-[10px] lg:text-xs text-muted-foreground/60">
                  All rights reserved • Privacy-first design • Built for developers
                </p>

                <div className="mx-auto inline-flex items-center gap-1.5 lg:gap-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 lg:px-3 py-1 lg:py-1.5">
                  <Code className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-primary" />
                  <span className="text-[10px] lg:text-xs font-medium text-primary">
                    PS: Developers, check the console for surprises
                  </span>
                </div>
              </div>
            </footer>
          </AnimatedContainer>
        </div>
      </SectionWrapper>
    </SectionTransition>
  );
};

/* ---------- helpers ---------- */

function SectionBox({
  children,
  dense = false,
}: {
  children: React.ReactNode;
  dense?: boolean;
}) {
  return (
    <div className="relative mb-12 lg:mb-16">
      <div className="rounded-2xl lg:rounded-3xl border bg-card/95 p-6 md:p-8 lg:p-12 shadow-lg">
        {children}
      </div>
    </div>
  );
}

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative grid grid-cols-[1fr_auto] gap-2">
      <a
        href={`mailto:${email}`}
        className="min-w-0 h-10 inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <Mail className="h-4 w-4 shrink-0" />
        <span className="truncate font-medium">{email}</span>
      </a>

      <button
        onClick={onCopy}
        title={copied ? "Copied" : "Copy"}
        aria-label={copied ? "Copied" : "Copy"}
        className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-border/60 bg-card/60 text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
      </button>

      {/* tiny toast */}
      <span
        className={`pointer-events-none absolute -top-7 right-0 rounded-md border border-border/60 bg-background/90 px-2 py-1 text-[11px] text-foreground/90 shadow transition-all ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        aria-hidden={!copied}
      >
        Copied
      </span>
    </div>
  );
}
