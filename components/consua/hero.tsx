"use client"

import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  FileCheck2,
  HandCoins,
  MessageCircleQuestion,
} from "lucide-react"

const rotatingBenefits = [
  "Government Benefits?",
  "Funding Benefits?",
  "Marketing Benefits?",
  "Certifications?",
]

const heroChats = [
  {
    question: "How can I get business funding?",
    answer: "Start with eligibility, documents and the right scheme.",
    icon: HandCoins,
  },
  {
    question: "Which certificate does my startup need?",
    answer: "We map your stage to the right registration path.",
    icon: BadgeCheck,
  },
  {
    question: "Are my compliance documents ready?",
    answer: "Our team checks filings, records and deadlines first.",
    icon: FileCheck2,
  },
  {
    question: "Can Epeno handle the full process?",
    answer: "Yes, from planning to submission and follow-up.",
    icon: MessageCircleQuestion,
  },
]

type ChatPhase = "question" | "answer"

export function Hero() {
  const [activeBenefit, setActiveBenefit] = useState(0)
  const [chatPhase, setChatPhase] = useState<ChatPhase>("question")
  const activeChat = heroChats[activeBenefit]
  const ActiveChatIcon = activeChat.icon

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (chatPhase === "question") {
          setChatPhase("answer")
          return
        }

        setActiveBenefit((current) => (current + 1) % rotatingBenefits.length)
        setChatPhase("question")
      },
      chatPhase === "question" ? 2600 : 3000,
    )

    return () => window.clearTimeout(timeout)
  }, [chatPhase])

  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] text-foreground lg:min-h-[100svh]">
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] right-[5%] hidden h-[58%] w-[28%] rounded-[2rem] bg-navy/[0.04] blur-2xl lg:block"
      />

      <div className="ep-container relative grid gap-8 pb-0 pt-28 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:pb-0 lg:pt-40">
        <div className="relative z-20 max-w-xl pt-4 sm:pt-6 xl:max-w-2xl">
          <h1 className="font-heading text-[1.68rem] font-extrabold leading-[1.12] text-[#05070c] text-balance min-[380px]:text-[1.95rem] sm:text-[2.48rem] lg:text-[2.75rem] xl:text-[3.05rem] 2xl:text-[3.28rem]">
            Are You Maximizing Your Company&apos;s
            <span className="mt-2 block min-h-[1.18em] overflow-hidden whitespace-nowrap text-primary">
              <span
                key={rotatingBenefits[activeBenefit]}
                className="block animate-in fade-in slide-in-from-bottom-3 duration-500"
              >
                {rotatingBenefits[activeBenefit]}
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#101318] sm:mt-7 sm:text-lg sm:leading-8">
            Unlock the right opportunities for your business with expert,
            documentation-led support.
            <strong className="mt-1 block font-heading text-base font-extrabold text-foreground sm:text-lg">
              सोच हमारी, कामयाबी आपकी
            </strong>
          </p>

          <div className="mt-8 sm:mt-9">
            <a href="/services" className="ep-button gap-3 sm:h-14 sm:px-8 sm:text-base">
              Grow with us
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-2 flex min-h-[430px] flex-col justify-end sm:min-h-[560px] lg:pointer-events-none lg:absolute lg:bottom-0 lg:-right-6 lg:mt-0 lg:h-[calc(100svh-8rem)] lg:min-h-[560px] lg:w-[56%] lg:justify-end xl:-right-2 xl:h-[calc(100svh-7rem)] xl:min-h-[640px] xl:w-[58%] 2xl:min-h-[700px]">
          {chatPhase === "question" ? (
            <div
              key={`question-${activeBenefit}`}
              aria-hidden="true"
              className="hero-dialog-card hero-dialog-question relative z-30 mx-auto w-full max-w-[330px] rounded-2xl border border-white/85 bg-white/95 px-5 py-4 text-navy shadow-[0_24px_65px_-34px_rgba(16,47,88,0.65)] backdrop-blur-md sm:max-w-[360px] lg:absolute lg:right-[1%] lg:top-[12%] xl:right-[2%] xl:top-[11%]"
            >
              <span className="absolute -bottom-3 left-12 h-6 w-6 rotate-45 border-b border-r border-white/85 bg-white/95 sm:left-16" />
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <ActiveChatIcon className="h-4.5 w-4.5" />
              </span>
              <span className="hero-dialog-text block font-heading text-base font-extrabold leading-snug text-[#05070c] sm:text-lg xl:text-xl">
                {activeChat.question}
              </span>
            </div>
          ) : (
            <div
              key={`answer-${activeBenefit}`}
              aria-hidden="true"
              className="hero-dialog-card hero-dialog-answer relative z-30 mx-auto w-full max-w-[340px] rounded-2xl border border-primary/35 bg-navy px-5 py-4 text-white shadow-[0_24px_65px_-36px_rgba(16,47,88,0.72)] backdrop-blur-md sm:max-w-[370px] lg:absolute lg:left-[1%] lg:top-[12%] xl:left-[2%] xl:top-[11%]"
            >
              <span className="absolute -bottom-3 right-12 h-6 w-6 rotate-45 bg-navy sm:right-16" />
              <span className="mb-2 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary">
                <Check className="h-3.5 w-3.5" />
                Epeno Advisory
              </span>
              <span className="hero-dialog-text block text-base font-semibold leading-7 text-white/90 xl:text-lg">
                {activeChat.answer}
              </span>
            </div>
          )}

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[8%] right-[4%] z-20 h-[24%] bg-gradient-to-t from-[#f8f6f2] via-[#f8f6f2]/80 to-transparent"
          />
          {chatPhase === "question" ? (
            <img
              key={`left-person-${activeBenefit}`}
              src="/Hero%20left.png"
              alt="Business owner asking a question"
              loading="eager"
              className="hero-person hero-person-left relative z-10 mx-auto mt-5 h-auto w-[min(78vw,300px)] object-contain drop-shadow-[0_28px_38px_rgba(18,52,95,0.16)] sm:w-[min(54vw,390px)] lg:absolute lg:bottom-0 lg:left-[0%] lg:mt-0 lg:w-[430px] xl:left-[2%] xl:w-[500px] 2xl:w-[540px]"
            />
          ) : (
            <img
              key={`right-person-${activeBenefit}`}
              src="/Hero%20right.png"
              alt="Epeno advisor answering"
              loading="eager"
              className="hero-person hero-person-right relative z-10 mx-auto mt-5 h-auto w-[min(78vw,310px)] object-contain drop-shadow-[0_28px_38px_rgba(18,52,95,0.16)] sm:w-[min(54vw,400px)] lg:absolute lg:bottom-0 lg:right-[0%] lg:mt-0 lg:w-[440px] xl:right-[2%] xl:w-[510px] 2xl:w-[545px]"
            />
          )}
        </div>
      </div>
    </section>
  )
}
