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
  "Hidden Funding Route?",
  "Scheme Advantage?",
  "Compliance Edge?",
  "Growth Certificate?",
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
    <section className="relative overflow-hidden bg-[#f8f6f2] text-foreground lg:min-h-[720px] xl:min-h-[760px] 2xl:min-h-[820px]">
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] right-[5%] hidden h-[58%] w-[28%] rounded-[2rem] bg-navy/[0.04] blur-2xl lg:block"
      />

      <div className="ep-container relative grid gap-8 pb-0 pt-36 sm:pt-40 lg:min-h-[720px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:pb-0 lg:pt-52 xl:min-h-[760px] xl:pt-48 2xl:min-h-[820px]">
        <div className="relative z-20 max-w-[37rem] pt-0 sm:pt-2 lg:max-w-[35rem] xl:max-w-[42rem]">
          <h1 className="font-heading text-[2rem] font-extrabold leading-[1.08] text-[#05070c] text-balance min-[380px]:text-[2.22rem] sm:text-[2.75rem] lg:text-[2.7rem] xl:text-[3.18rem] 2xl:text-[3.55rem]">
            Where ordinary paperwork ends,
            <span className="mt-2 block min-h-[2.25em] overflow-visible text-primary sm:min-h-[1.12em]">
              <span
                key={rotatingBenefits[activeBenefit]}
                className="block max-w-full animate-in fade-in slide-in-from-bottom-3 duration-500 text-wrap"
              >
                your {rotatingBenefits[activeBenefit]} begins.
              </span>
            </span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-7 text-[#101318] sm:mt-6 sm:text-lg sm:leading-8 lg:max-w-[32rem] xl:max-w-[36rem]">
            Some opportunities stay invisible until the file is structured
            correctly. We help founders discover the right route, prepare the
            right documents and move with confidence.
            <strong className="mt-1 block font-heading text-base font-extrabold text-foreground sm:text-lg">
              सोच हमारी, कामयाबी आपकी
            </strong>
          </p>

          <div className="mt-7 sm:mt-8">
            <a href="/services" className="ep-button gap-3 sm:h-14 sm:px-8 sm:text-base">
              Grow with us
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-0 flex min-h-[390px] flex-col justify-end sm:min-h-[520px] lg:pointer-events-none lg:absolute lg:bottom-0 lg:-right-8 lg:mt-0 lg:h-[540px] lg:min-h-[500px] lg:w-[52%] lg:justify-end xl:right-2 xl:h-[600px] xl:min-h-[560px] xl:w-[52%] 2xl:right-[4%] 2xl:h-[660px] 2xl:min-h-[620px] 2xl:w-[50%]">
          {chatPhase === "question" ? (
            <div
              key={`question-${activeBenefit}`}
              aria-hidden="true"
              className="hero-dialog-card hero-dialog-question relative z-30 mx-auto w-full max-w-[330px] rounded-2xl border border-white/85 bg-white/95 px-5 py-4 text-navy shadow-[0_24px_65px_-34px_rgba(16,47,88,0.65)] backdrop-blur-md sm:max-w-[360px] lg:absolute lg:right-[2%] lg:top-[5%] lg:max-w-[300px] lg:px-4 xl:right-[2%] xl:top-[8%] xl:max-w-[360px] xl:px-5"
            >
              <span className="absolute -bottom-3 left-12 h-6 w-6 rotate-45 border-b border-r border-white/85 bg-white/95 sm:left-16" />
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <ActiveChatIcon className="h-4.5 w-4.5" />
              </span>
              <span className="hero-dialog-text block font-heading text-base font-extrabold leading-snug text-[#05070c] sm:text-lg lg:text-base xl:text-xl">
                {activeChat.question}
              </span>
            </div>
          ) : (
            <div
              key={`answer-${activeBenefit}`}
              aria-hidden="true"
              className="hero-dialog-card hero-dialog-answer relative z-30 mx-auto w-full max-w-[340px] rounded-2xl border border-primary/35 bg-navy px-5 py-4 text-white shadow-[0_24px_65px_-36px_rgba(16,47,88,0.72)] backdrop-blur-md sm:max-w-[370px] lg:absolute lg:left-[2%] lg:top-[5%] lg:max-w-[310px] lg:px-4 xl:left-[2%] xl:top-[8%] xl:max-w-[370px] xl:px-5"
            >
              <span className="absolute -bottom-3 right-12 h-6 w-6 rotate-45 bg-navy sm:right-16" />
              <span className="mb-2 inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary">
                <Check className="h-3.5 w-3.5" />
                Epeno Advisory
              </span>
              <span className="hero-dialog-text block text-base font-semibold leading-7 text-white/90 lg:text-sm lg:leading-6 xl:text-lg xl:leading-7">
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
              className="hero-person hero-person-left relative z-10 mx-auto mt-5 h-auto w-[min(78vw,300px)] object-contain drop-shadow-[0_28px_38px_rgba(18,52,95,0.16)] sm:w-[min(54vw,390px)] lg:absolute lg:bottom-0 lg:left-[0%] lg:mt-0 lg:w-[305px] xl:left-[4%] xl:w-[385px] 2xl:left-[8%] 2xl:w-[450px]"
            />
          ) : (
            <img
              key={`right-person-${activeBenefit}`}
              src="/Hero%20right.png"
              alt="Epeno advisor answering"
              loading="eager"
              className="hero-person hero-person-right relative z-10 mx-auto mt-5 h-auto w-[min(78vw,310px)] object-contain drop-shadow-[0_28px_38px_rgba(18,52,95,0.16)] sm:w-[min(54vw,400px)] lg:absolute lg:bottom-0 lg:right-[2%] lg:mt-0 lg:w-[315px] xl:right-[4%] xl:w-[395px] 2xl:right-[8%] 2xl:w-[455px]"
            />
          )}
        </div>
      </div>
    </section>
  )
}
