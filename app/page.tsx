"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const luxury = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={`${luxury.className} min-h-screen text-white overflow-hidden relative`}
    >

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/video/casino.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-violet-700/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-fuchsia-700/20 blur-[180px] rounded-full"></div>

      {/* GLOW TITRE */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/20 blur-[140px] rounded-full"></div>

      {/* SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">

        {/* HEADER */}
        <div className="text-center mb-20">

          {/* NOM */}
          <h1 className="text-8xl md:text-[7rem] font-bold leading-[1] tracking-wide pb-4">

            <span className="block text-white">
              Soulaiman
            </span>

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-200 bg-clip-text text-transparent">

              Messaya

            </span>
          </h1>

          {/* TEXTE */}
          <div className="mt-6 inline-block px-7 py-3 rounded-full border border-violet-400 bg-violet-500/10 text-violet-200 text-[18px] font-medium shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-xl tracking-wide">

            Candidature au poste de caissier du Casino du Lac Meyrin

          </div>

          {/* BOUTONS */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 rounded-2xl bg-violet-600/80 border border-violet-300 hover:bg-violet-500 transition text-[18px] font-semibold shadow-[0_0_25px_rgba(168,85,247,0.45)] backdrop-blur-xl tracking-wide"
            >

              Me contacter

            </button>

            <a
              href="/cv-suisse.pdf"
              download
              className="px-8 py-3 rounded-2xl border border-violet-400 bg-violet-500/10 hover:bg-violet-500/20 transition text-[18px] backdrop-blur-xl tracking-wide"
            >

              Télécharger mon CV

            </a>
          </div>
        </div>

        {/* CONTENU */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* TEXTE */}
          <div className="bg-violet-500/10 border border-violet-400 rounded-[3rem] p-12 shadow-[0_0_40px_rgba(168,85,247,0.3)] backdrop-blur-2xl flex flex-col justify-center">

            {/* INFOS */}
            <div className="flex gap-4 flex-wrap mb-10">

              <div className="px-5 py-2 rounded-full border border-violet-400 bg-violet-500/10 text-violet-200 text-lg tracking-wide">

                25 ans

              </div>

              <div className="px-5 py-2 rounded-full border border-violet-400 bg-violet-500/10 text-violet-200 text-lg tracking-wide">

                Bac +3 Responsable Acquisition Numérique

              </div>
            </div>

            {/* TITRE */}
            <h2 className="text-5xl font-bold mb-10 text-violet-200 tracking-wide">

              À propos de moi

            </h2>

            {/* TEXTE */}
            <div className="space-y-8 text-[22px] leading-[2] text-neutral-200 text-justify">

              <p>
                Professionnel polyvalent avec une excellente capacité
                d’adaptation et une forte facilité d’apprentissage.
                Diplômé d’un Bachelor Responsable Acquisition Numérique,
                je me suis spécialisé dans l’automatisation et
                l’optimisation de processus digitaux.
              </p>

              <p>
                J’ai travaillé en tant que Growth Hacker où j’ai été amené
                à mettre en place différents systèmes automatisés afin
                d’optimiser les tâches récurrentes et améliorer
                l’efficacité des workflows.
              </p>

              <p>
                J’ai ensuite intégré la Métropole de Marseille en tant
                qu’opérateur Neomma / métro avec un double rôle :
                accompagner la mise en place progressive du métro
                automatisé tout en assurant la conduite
                et la supervision du réseau.
              </p>

              <p>
                Grâce à ces expériences, j’ai développé de solides
                compétences en calcul, logique, rigueur,
                sécurité et gestion des procédures
                dans des environnements exigeants.
              </p>

              <p>
                Je possède également une expérience en tant que caissier,
                poste occupé durant mes études dans le cadre
                d’un contrat étudiant, ce qui m’a permis
                de développer mon sens du contact,
                du service client et des responsabilités.
              </p>
            </div>
          </div>

          {/* PHOTO */}
          <div className="relative h-full">

            <div className="absolute inset-0 bg-violet-600/20 blur-[120px] rounded-full"></div>

            <div className="relative h-full bg-white border border-violet-400 rounded-[3rem] overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.4)]">

              <img
                src="/image/photo-soulaiman.png"
                alt="Soulaiman Messaya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* SECTION APPORT */}
        <div className="mt-20 bg-violet-500/10 border border-violet-400 rounded-[3rem] p-12 shadow-[0_0_40px_rgba(168,85,247,0.3)] backdrop-blur-2xl">

          {/* TITRE */}
          <div className="text-center mb-14">

            <h2 className="text-6xl font-bold text-violet-200 tracking-wide">

              Ce que je peux apporter à votre entreprise

            </h2>

            <p className="text-neutral-300 mt-5 text-2xl tracking-wide">

              Un profil polyvalent, rigoureux et orienté satisfaction client.

            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                icon: "🎯",
                title: "Rigueur & fiabilité",
                text: "Habitué aux environnements exigeants où précision, concentration et respect des procédures sont essentiels.",
              },
              {
                icon: "🤝",
                title: "Sens du service client",
                text: "À l’aise dans la relation clientèle avec une approche professionnelle et orientée satisfaction.",
              },
              {
                icon: "⚡",
                title: "Réactivité & adaptation",
                text: "Capacité à apprendre rapidement et à m’adapter efficacement à de nouveaux outils et méthodes.",
              },
              {
                icon: "🛡️",
                title: "Respect des règles",
                text: "Expérience dans des environnements techniques nécessitant discipline et vigilance.",
              },
              {
                icon: "🧠",
                title: "Logique & calcul",
                text: "Solides compétences en calcul, logique et gestion des opérations nécessitant précision.",
              },
              {
                icon: "🚀",
                title: "Motivation & implication",
                text: "Une réelle envie de m’investir durablement au sein d’un établissement prestigieux.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/30 border border-violet-400 rounded-[2rem] p-8 backdrop-blur-xl"
              >

                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mb-4 text-violet-200 tracking-wide">

                  {item.title}

                </h3>

                <p className="text-neutral-300 text-xl leading-9 text-justify">

                  {item.text}

                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">

          <div className="relative w-full max-w-md rounded-[1.5rem] overflow-hidden border border-violet-400 shadow-[0_0_40px_rgba(168,85,247,0.4)]">

            {/* IMAGE */}
            <img
              src="/image/casino-lac.jpg"
              alt="Casino Lac"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* CONTENT */}
            <div className="relative p-4">

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white bg-black/20 text-white text-sm"
              >
                ✕
              </button>

              {/* WHITE CARD */}
              <div className="bg-white rounded-[1.2rem] p-5 shadow-2xl">

                {/* BADGE */}
                <div className="inline-block px-3 py-1 rounded-full border border-violet-300 bg-violet-100 text-violet-700 text-xs mb-4">

                  Disponible immédiatement

                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-bold text-black leading-tight">

                  Prêt à rejoindre votre équipe

                </h2>

                {/* TEXT */}
                <div className="mt-4 space-y-3 text-black text-[15px] leading-7 text-justify">

                  <p>
                    Disponible immédiatement pour intégrer votre entreprise
                    en tant que caissier au Casino du Lac Meyrin.
                  </p>

                  <p>
                    Sérieux, rigoureux et à l’aise avec la clientèle,
                    je souhaite mettre mes compétences au service
                    de votre établissement.
                  </p>

                </div>

                {/* CONTACT */}
                <div className="space-y-3 mt-5">

                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">

                    <div className="text-violet-700 text-xs mb-1">

                      Email

                    </div>

                    <div className="font-semibold break-all text-black text-sm">

                      soulaiman.messaya@hotmail.com

                    </div>
                  </div>

                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">

                    <div className="text-violet-700 text-xs mb-1">

                      Téléphone

                    </div>

                    <div className="font-semibold text-black text-sm">

                      +33 7 83 42 59 79

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}