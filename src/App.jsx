// src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeDoctor, setActiveDoctor] = useState(null);

  // Bloquear/desbloquear scroll del fondo cuando se abre/cierra el perfil
  useEffect(() => {
    if (activeDoctor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeDoctor]);

  const facilityImages = [
    {
      src: '/images/clinica_diagonal_2.jpg',
      title: 'Hospital exterior',
      caption: 'Main façade of Clínica Diagonal.',
    },
    {
      src: '/images/cex_diagonal.jpg',
      title: 'Outpatient clinic',
      caption:
        'Consultation and outpatient area for pre- and postoperative visits.',
    },
    {
      src: '/images/quirofan_diagonal.jpg',
      title: 'Operating theatre',
      caption: 'Modern operating theatre used for hip and knee procedures.',
    },
  ];

  // Datos de equipo clínico con campo de foto y CV extendido
  const teamMembers = [
    {
      id: 'robert',
      name: 'Dr. Robert Ferrer Rivero',
      role: 'Knee arthroplasty & arthroscopic surgery',
      shortDetail:
        'Expertise in total and partial knee replacement, ACL/PCL reconstruction and meniscal repair.',
      photo: '/images/team/robert_ferrer.png',
      summary:
        'Orthopaedic surgeon specialised in knee surgery, including joint replacement, osteotomies, arthroscopy and joint preservation. He practises at Clínica Diagonal, Hospital Sant Rafael and Grupo COTA.',
      experience: [
        'Consultant orthopaedic surgeon – Knee Unit at Clínica Diagonal, Hospital Sant Rafael and Grupo COTA (Barcelona)',
        'Orthopaedic Surgery and Traumatology residency – Bellvitge University Hospital (2018–2023)',
      ],
      education: [
        'Specialist in Orthopaedic Surgery and Traumatology – Bellvitge University Hospital',
        'Knee and Sports Medicine Surgery – Dr. Jorge Chahla, Rush (Chicago)',
        'Paediatric Orthopaedics – Sant Joan de Déu Hospital',
        'Degree in Medicine – University of Barcelona (Hospital Clínic)',
      ],
      publications: [
        'Peer-reviewed articles on high tibial osteotomy, knee arthroplasty and joint-preserving surgery.',
        'Best communication award, SECOT 2024.',
        'PhD thesis in progress on kinematic alignment in total knee arthroplasty.',
      ],
      memberships: ['SECOT', 'SEROD', 'Barcelona Knee Associated Meeting'],
    },

    {
      id: 'luis',
      name: 'Dr. Luis Melo Messa',
      role: 'Knee arthroscopy, sports medicine & joint preservation',
      shortDetail:
        'Specialised in knee arthroscopy, ligament reconstruction, joint preservation and primary knee arthroplasty.',
      photo: '/images/team/luis_melo.jpeg',
      summary:
        'Orthopaedic surgeon focused on advanced knee arthroscopy, ligament reconstruction, joint-preserving procedures and knee arthroplasty, with experience in Spanish and international centres.',
      experience: [
        'Specialist in Orthopaedics and Traumatology – Fundación Hospitalarias (Barcelona)',
        'Knee arthroscopy, ligament reconstruction and joint preservation – Hospital Universitario de Igualada',
        'Orthopaedic trauma and emergency care – Hospital Dexeus (Barcelona)',
      ],
      education: [
        'Specialist in Orthopaedic Surgery and Traumatology – ELAM / Frank País Institute (validated in Spain)',
        'Master’s fellowship in knee and hip reconstruction – Hospital Clínic / Bellvitge',
        'Fellowship in knee arthroscopy and sports medicine – ICATME (DEXEUS)',
        'Observer in knee arthroscopy and sports medicine – Rush Hospital (Chicago)',
      ],
      publications: [
        'Scientific publications on patellofemoral instability and degenerative meniscus.',
        'Instructor in national knee arthroscopy courses for residents (CIAR Barcelona).',
      ],
      memberships: ['SECOT', 'SEROD'],
    },

    {
      id: 'josep',
      name: 'Dr. Josep Ferrer Rivero',
      role: 'Hip arthroscopy, hip preservation & hip arthroplasty',
      shortDetail:
        'Specialist in hip arthroscopy, hip preservation, robotic hip surgery and primary hip replacement.',
      photo: '/images/team/josep_ferrer.png',
      summary:
        'Orthopaedic surgeon dedicated to hip preservation and arthroscopy, minimally invasive and robotic hip arthroplasty, and sports-related hip pathology. He practises at IMOVE Group, Clínica Diagonal and MC Mutual.',
      experience: [
        'Head of the Advanced Trauma Unit – MC Mutual (Barcelona)',
        'Hip specialist surgeon – IMOVE Group (hip arthroscopy, preservation and robotic hip arthroplasty)',
        'Trauma and hip surgeon – Clínica Diagonal (Barcelona)',
      ],
      education: [
        'Orthopaedic Surgery and Traumatology residency – Hospital Germans Trias i Pujol (Barcelona)',
        'Hip preservation fellowship – HFR Fribourg (Switzerland)',
        'Paediatric Orthopaedics – Sant Joan de Déu Hospital',
        'National arthroscopy training programme – AEA',
        'Degree in Medicine – Universidad Alfonso X el Sabio (Madrid)',
      ],
      publications: [
        'Publications on hip arthroscopy, femoroacetabular impingement and cost-effectiveness of osteotomies.',
        'Speaker at SEROD, EFORT and European Hip Society meetings.',
      ],
      memberships: ['SECOT', 'SEROD', 'AEA', 'EHS'],
    },

    {
      id: 'miquel',
      name: 'Dr. Miquel Pons Cabrafiga',
      role: 'Hip arthroplasty & revision surgery',
      shortDetail:
        'Expert in primary and revision hip arthroplasty, periprosthetic infection and complex reconstructions.',
      photo: '/images/team/miquel_pons.jpeg',
      summary:
        'Senior orthopaedic surgeon with more than 25 years of experience in hip and knee arthroplasty, revision surgery and bone infection. Chief of the Orthopaedic Surgery Department at Hospital Sant Rafael.',
      experience: [
        'Chief of Orthopaedic Surgery – Hospital Sant Rafael (Barcelona)',
        'Senior staff surgeon in hip and knee arthroplasty since 1995 – Hospital Sant Rafael',
        'Consultant for arthroplasty registries and international implant companies',
      ],
      education: [
        'Degree in Medicine – University of Barcelona',
        'Orthopaedic Surgery and Traumatology residency – Hospital Mutua de Terrassa',
        'Fellowship in hip and knee arthroplasty – London Health Science Hospital, University of Western Ontario (Canada)',
      ],
      publications: [
        'More than 50 scientific publications and book chapters.',
        'Over 400 presentations at national and international congresses and courses.',
      ],
      memberships: [
        'SECOT',
        'Spanish Hip Society (past secretary)',
        'European Hip Society',
        'European Bone and Joint Infection Society',
      ],
    },
  ];

  // Alojamiento: hoteles cercanos y apartamentos
  const nearbyHotels = [
    {
      id: 'abba-garden',
      name: 'abba Garden Hotel',
      municipality: 'Esplugues de Llobregat',
      distance: '2 km',
      type: '4★ hotel',
      services: 'Spa / pool',
      price: '80–100 €/night',
      description: '4★ hotel very close to the hospital.',
    },
    {
      id: 'ilunion-les-corts',
      name: 'Hotel Ilunion Les Corts Spa',
      municipality: 'Barcelona – Les Corts',
      distance: '3 km',
      type: 'Modern hotel',
      services: 'Spa',
      price: '80–120 €/night',
      description: 'Modern hotel with spa in the Les Corts district.',
    },
    {
      id: 'hostal-lami',
      name: 'Hostal Lami',
      municipality: 'Esplugues de Llobregat',
      distance: '1.5 km',
      type: 'Budget',
      services: 'Basic services',
      price: '50–70 €/night',
      description:
        'Simple, budget-friendly accommodation very close to the clinic.',
    },
    {
      id: 'sercotel-porta-bcn',
      name: 'Sercotel Porta Barcelona',
      municipality: 'Sant Just Desvern',
      distance: '2 km',
      type: 'Hotel',
      services: 'Standard hotel services',
      price: '50–70 €/night',
      description: 'Good alternative',
    },
    {
      id: 'nh-stadium',
      name: 'NH Barcelona Stadium',
      municipality: 'Barcelona – Les Corts',
      distance: '4 km',
      type: 'Urban hotel',
      services: 'Standard hotel services',
      price: '80–120 €/night',
      description: 'Comfortable urban hotel close to the city centre.',
    },
  ];

  const apartments = [
    {
      id: 'aura-park',
      name: 'Aura Park Fira Barcelona',
      municipality: "L'Hospitalet de Llobregat",
      distance: '2.5 km',
      type: 'Serviced apartments',
      services: 'Kitchen, parking, pool',
      price: '110–130 €/night',
      description: 'Modern and functional apartments with kitchen and pool.',
    },
    {
      id: 'las-palmeras',
      name: 'Aparthotel Las Palmeras',
      municipality: 'Castelldefels',
      distance: '18 km',
      type: 'Aparthotel',
      services: 'Pool, kitchen',
      price: '60–90 €/night',
      description: 'Good option for longer stays near the beach.',
    },
    {
      id: 'artapartments-bcn',
      name: 'ArtApartments BCN',
      municipality: 'Castelldefels',
      distance: '20 km',
      type: 'Apartments',
      services: 'Modern apartments',
      price: '80–100 €/night',
      description:
        'Modern apartments by the coast, suitable when patients prefer a seaside environment.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl border border-sky-500/30 bg-sky-50 flex items-center justify-center text-xs font-semibold text-sky-700">
              OS
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-slate-900">
                OrthoSurgery BCN
              </div>
              <div className="text-xs text-slate-500">
                Hip &amp; Knee Surgery · Barcelona
              </div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-sky-700">
              About
            </a>
            <a href="#team" className="hover:text-sky-700">
              Team
            </a>
            <a href="#clinic" className="hover:text-sky-700">
              Clinic
            </a>
            <a href="#pathway" className="hover:text-sky-700">
              Patient Pathway
            </a>
            <a href="#accommodation" className="hover:text-sky-700">
              Accommodation
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/70 to-slate-50">
          <div className="mx-auto max-w-6xl px-0 pt-0 pb-0">
            {/* Skyline Barcelona – franja sutil */}
            <div className="flex justify-center mb-0">
              <img
                src="/images/skyline_bcn.svg"
                alt="Barcelona skyline"
                className="w-[100] max-h-22 object-contain opacity-30"
              />
            </div>

            {/* Contenido principal del hero */}
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:py-6">
              <div className="md:w-1/2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                  Barcelona · Hip & Knee
                </p>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Specialist orthopaedic care for{' '}
                  <span className="text-sky-700">Ireland & UK patients</span> in
                  Barcelona.
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  OrthoSurgery BCN is a dedicated orthopaedic team focused on
                  hip and knee surgery for international patients, offering a
                  streamlined pathway aligned with partners working under the EU
                  Cross Border Healthcare Directive.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-sky-700 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-800"
                  >
                    Contact coordination
                  </a>
                  <a
                    href="#pathway"
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800"
                  >
                    View patient pathway
                  </a>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Designed specifically for collaboration with healthcare
                  facilitation partners.
                </p>
              </div>

              {/* Tarjeta snapshot */}
              <div className="md:w-1/2">
                <div className="rounded-3xl border border-sky-100 bg-white p-4 shadow-sm md:p-6">
                  <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                    <h2 className="text-sm font-semibold text-slate-900">
                      Snapshot – OrthoSurgery BCN
                    </h2>

                    <dl className="mt-4 grid grid-cols-1 gap-3 text-xs text-slate-600 md:grid-cols-2">
                      <div className="rounded-xl bg-white p-3 shadow-xs border border-slate-100">
                        <dt className="font-medium text-slate-900">
                          Clinical focus
                        </dt>
                        <dd className="mt-1">
                          Knee & hip arthroplasty, joint preservation, sports
                          knee surgery.
                        </dd>
                      </div>

                      <div className="rounded-xl bg-white p-3 shadow-xs border border-slate-100">
                        <dt className="font-medium text-slate-900">
                          Primary facility
                        </dt>
                        <dd className="mt-1">
                          Clínica Diagonal – modern, premium private hospital in
                          Barcelona.
                        </dd>
                      </div>

                      <div className="rounded-xl bg-white p-3 shadow-xs border border-slate-100">
                        <dt className="font-medium text-slate-900">
                          Target patients
                        </dt>
                        <dd className="mt-1">
                          Elective hip & knee procedures for Ireland and UK
                          patients.
                        </dd>
                      </div>

                      <div className="rounded-xl bg-white p-3 shadow-xs border border-slate-100">
                        <dt className="font-medium text-slate-900">
                          Pathway design
                        </dt>
                        <dd className="mt-1">
                          Fully compatible with Healthcare Abroad protocols and
                          HSE requirements.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About OrthoSurgery BCN */}
        <section id="about" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-2 md:grid-cols-2 md:items-center">
              {/* Texto */}
              <div className="md:max-w-[90%] lg:max-w-[90%]">
                <h2 className="text-xl font-semibold text-slate-900">
                  OrthoSurgery BCN – overview
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  OrthoSurgery BCN is a specialised orthopaedic group based in
                  Barcelona, dedicated to hip and knee surgery with specific
                  experience in caring for international patients. The project
                  is built to integrate smoothly with medical facilitation
                  partners, ensuring clear communication, predictable pathways
                  and high-quality clinical outcomes.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  Our aim is to offer a reliable, clinician-led service with a
                  premium hospital environment, while keeping the pathway simple
                  and aligned with the expectations of Ireland and UK patients
                  travelling abroad for care.
                </p>
              </div>

              {/* Recuadro + Foto equipo */}
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-xl border border-slate-200/70 shadow-md w-full max-w-ld">
                  <img
                    src="/images/team_photo.jpeg"
                    alt="OrthoSurgery BCN team"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md">
                <h2 className="text-xl font-semibold text-slate-900">
                  Clinical team
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  The OrthoSurgery BCN team brings together complementary
                  expertise in knee and hip surgery, covering arthroplasty,
                  arthroscopy and joint preservation procedures.
                </p>
              </div>

              <div className="grid flex-1 gap-4 md:grid-cols-2">
                {teamMembers.map((doctor) => (
                  <TeamCard
                    key={doctor.id}
                    doctor={doctor}
                    onClick={() => setActiveDoctor(doctor)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Diagonal */}
        <section id="clinic" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Hospital facility – Clínica Diagonal
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Clínica Diagonal is a modern, premium private hospital in
                  Barcelona, equipped with advanced operating theatres, updated
                  inpatient areas and multilingual staff experienced with
                  international patients.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  The environment and infrastructure are fully aligned with the
                  requirements for elective hip and knee surgery pathways for
                  Ireland and UK patients, including those treated under the EU
                  Cross Border Healthcare Directive.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Dedicated orthopaedic theatres with modern imaging and
                    anaesthetic equipment.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Renovated inpatient rooms suitable for international
                    patients and relatives.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    On-site physiotherapy support and close postoperative
                    monitoring.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Facility snapshot
                </h3>
                <dl className="mt-4 space-y-3 text-xs text-slate-600">
                  <InfoRow
                    label="Location"
                    value="Barcelona – easily accessible from Dublin, Cork, Belfast, London and major UK airports."
                  />
                  <InfoRow
                    label="Setting"
                    value="Premium private hospital with strong focus on elective surgery."
                  />
                  <InfoRow
                    label="Languages"
                    value="Spanish, Catalan and English-speaking staff used to international patients."
                  />
                  <InfoRow
                    label="Suitability"
                    value="Ideal for high-standard hip and knee surgery programmes with structured pathways."
                  />
                </dl>
              </div>
            </div>

            {/* --- Image gallery within Facility section (with lightbox trigger) --- */}
            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="grid gap-4 md:grid-cols-3">
                {facilityImages.map((img) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setLightboxImage(img)}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-6">
                      <p className="text-xs font-semibold text-slate-50">
                        {img.title}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-200">
                        {img.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patient Pathway */}
        <section id="pathway" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Patient pathway – provisional model
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  The pathway below is designed to reflect the protocol
                  discussed with Healthcare Abroad and can be further refined
                  together before implementation.
                </p>

                <ol className="mt-5 space-y-3 text-sm text-slate-700">
                  <PathwayStep
                    step="Arrival (Saturday–Sunday)"
                    text="Patients travel to Barcelona over the weekend, allowing time to settle and be ready for assessment on Monday."
                  />
                  <PathwayStep
                    step="Pre-operative assessment (Monday)"
                    text="Full pre-op assessment: blood tests, imaging when required, anaesthetic review and in-person consultation with the surgeon."
                  />
                  <PathwayStep
                    step="Surgery (Tuesday)"
                    text="Hip or knee replacement, or joint preservation procedure, performed in Clínica Diagonal within agreed protocols and implant standards."
                  />
                  <PathwayStep
                    step="Hospital stay (1–3 nights)"
                    text="Inpatient stay including bedside physiotherapy, pain control and early mobilisation, tailored to the procedure and patient profile."
                  />
                  <PathwayStep
                    step="Postoperative physiotherapy (from following Monday)"
                    text="Intensive physiotherapy plan with two sessions per day, focusing on safe mobility, functional recovery and patient confidence before returning home."
                  />
                  <PathwayStep
                    step="Return home & remote follow-up"
                    text="Structured discharge summary in English, clear rehab recommendations and remote follow-up options coordinated with the partner and the patient’s GP or physiotherapist."
                  />
                </ol>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Designed for facilitation partners
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  The pathway is intentionally simple and predictable, so that
                  partners can:
                </p>
                <ul className="mt-3 space-y-2 text-xs text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Align travel and accommodation packages with fixed dates.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Ensure compliance with HSE and other reimbursement
                    frameworks.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    Communicate a clear, patient-friendly schedule from day one.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Barcelona */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Texto + foto */}
              <div className="space-y-4 md:space-y-5">
                <h2 className="text-xl font-semibold text-slate-900">
                  Why Barcelona for Ireland &amp; UK patients
                </h2>

                {/* Foto panorámica */}
                <div className="overflow-hidden rounded-xl border border-slate-200/70 shadow-sm">
                  <img
                    src="/images/barcelona_aeri.jpg"
                    alt="Panoramic view of Barcelona"
                    className="h-48 w-full object-cover md:h-56"
                  />
                </div>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Barcelona combines high medical standards with excellent
                  connectivity and a safe, comfortable environment for patients
                  and families travelling from abroad.
                </p>
              </div>

              {/* Bullets derecha */}
              <div className="grid gap-3 text-sm text-slate-700">
                <WhyItem title="Easy access">
                  Multiple direct flights from Dublin, Cork, Belfast, London and
                  major UK airports.
                </WhyItem>
                <WhyItem title="High-quality care">
                  Strong orthopaedic tradition, modern hospitals and established
                  enhanced recovery pathways.
                </WhyItem>
                <WhyItem title="Patient experience">
                  Safe, walkable city with a wide range of hotels and apartments
                  suitable for mid-length stays.
                </WhyItem>
                <WhyItem title="Clear coordination">
                  English-language communication and clinician-led coordination
                  for partners and patients.
                </WhyItem>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section
          id="accommodation"
          className="border-b border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* LEFT COLUMN – Main text */}
              <div className="md:col-span-2 space-y-8">
                <h2 className="text-xl font-semibold text-slate-900">
                  Accommodation options
                </h2>

                {/* Castelldefels & Gava Beach */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-800">
                    Castelldefels & Gava Beach: seaside comfort for recovery
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    Just 20–25 minutes from our surgical centres, Castelldefels
                    and Gava Beach offer an ideal environment for early
                    rehabilitation after hip or knee surgery. Their long, flat
                    beachfront promenade allows safe, progressive walking, while
                    the calm seaside atmosphere supports rest and comfort.
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    These coastal areas provide a wide selection of quality
                    hotels and serviced apartments, warm weather, sea views and
                    convenient access to physiotherapy and follow-up
                    appointments—making them a popular option for patients
                    seeking a relaxing recovery setting.
                  </p>
                </div>

                {/* Barcelona */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-800">
                    Barcelona: premium comfort in the city
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    For patients who prefer an urban environment, Barcelona
                    offers a wide selection of premium hotels with full
                    amenities and comfort. The city’s exceptional gastronomy,
                    architecture and cultural attractions provide an enriching
                    setting for patients and accompanying family members.
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                    Its compact layout allows easy movement and access to key
                    areas, making recovery periods both practical and enjoyable.
                    All locations remain within quick reach of our surgical
                    centres and rehabilitation facilities.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN – Snapshots */}
              <div className="space-y-10">
                {/* Key Points Castelldefels & Gava Beach */}
                <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-700 md:text-base mb-3">
                    Key points – Castelldefels & Gava Beach
                  </h4>
                  <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-600 md:text-base space-y-1">
                    <li>
                      Flat beachfront promenade ideal for early mobilisation
                    </li>
                    <li>
                      Wide range of quality hotels and serviced apartments
                    </li>
                    <li>Calm seaside environment that promotes rest</li>
                    <li>Excellent value and physiotherapy access</li>
                    <li>10–15 minutes from Barcelona Airport</li>
                  </ul>
                </div>

                {/* Key points Barcelona */}
                <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-700 md:text-base mb-3">
                    Key points – Barcelona
                  </h4>
                  <ul className="list-disc pl-5 text-sm leading-relaxed text-slate-600 md:text-base space-y-1">
                    <li>Premium hotels with full amenities</li>
                    <li>Excellent gastronomy and cultural options</li>
                    <li>Ideal for patients travelling with family</li>
                    <li>Fast access to hospitals and rehabilitation centres</li>
                    <li>Outstanding transport connections</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Hoteles cercanos */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Nearby hotels (1.5–4 km from the clinic)
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {nearbyHotels.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-slate-900">
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-sky-600">
                          {item.distance}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.municipality} · {item.type}
                      </p>

                      <details className="mt-2 group">
                        <summary className="flex cursor-pointer items-center text-xs font-medium text-sky-700 hover:text-sky-800">
                          <span>More info</span>
                          <span className="ml-1 text-[10px] text-slate-400 group-open:hidden">
                            +
                          </span>
                          <span className="ml-1 hidden text-[10px] text-slate-400 group-open:inline">
                            –
                          </span>
                        </summary>
                        <div className="mt-2 space-y-1 text-xs text-slate-600">
                          {item.services && (
                            <p>
                              <span className="font-semibold">Services:</span>{' '}
                              {item.services}
                            </p>
                          )}
                          {item.price && (
                            <p>
                              <span className="font-semibold">
                                Price (approx.):
                              </span>{' '}
                              {item.price}
                            </p>
                          )}
                          {item.description && <p>{item.description}</p>}
                        </div>
                      </details>
                    </article>
                  ))}
                </div>
              </div>

              {/* Apartamentos / estancias largas */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Apartments &amp; long-stay options
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {apartments.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-slate-900">
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-sky-600">
                          {item.distance}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.municipality} · {item.type}
                      </p>

                      <details className="mt-2 group">
                        <summary className="flex cursor-pointer items-center text-xs font-medium text-sky-700 hover:text-sky-800">
                          <span>More info</span>
                          <span className="ml-1 text-[10px] text-slate-400 group-open:hidden">
                            +
                          </span>
                          <span className="ml-1 hidden text-[10px] text-slate-400 group-open:inline">
                            –
                          </span>
                        </summary>
                        <div className="mt-2 space-y-1 text-xs text-slate-600">
                          {item.services && (
                            <p>
                              <span className="font-semibold">Services:</span>{' '}
                              {item.services}
                            </p>
                          )}
                          {item.price && (
                            <p>
                              <span className="font-semibold">
                                Price (approx.):
                              </span>{' '}
                              {item.price}
                            </p>
                          )}
                          {item.description && <p>{item.description}</p>}
                        </div>
                      </details>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-slate-900 text-slate-50 border-t border-slate-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
              <div>
                <h2 className="text-xl font-semibold">
                  Contact &amp; coordination
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">
                  This project is designed specifically for collaboration with
                  medical facilitation partners such as Healthcare Abroad. We
                  are happy to adapt the pathway, reporting and logistics to
                  your operational needs.
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  For detailed clinical CVs, package options or further
                  questions, please get in touch directly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  OrthoSurgery BCN – coordination office
                </h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <InfoRowDark
                    label="Lead contact"
                    value="Dr. Robert Ferrer Rivero – Orthopaedic Surgeon (Knee)"
                  />
                  <InfoRowDark
                    label="Email"
                    value="ferrerriverotraumatologia@gmail.com"
                  />
                  <InfoRowDark label="Phone" value="+34 667 422 036" />
                  <InfoRowDark
                    label="Location"
                    value="Barcelona · Clínica Diagonal"
                  />
                </dl>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} OrthoSurgery BCN – Clinical concept for
          international collaboration.
        </footer>
      </main>

      {/* Modal CV equipo clínico */}
      <DoctorModal
        doctor={activeDoctor}
        onClose={() => setActiveDoctor(null)}
      />

      {/* Lightbox imágenes clínica */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-sm text-white"
            >
              ✕
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full max-h-[80vh] rounded-2xl object-contain bg-black"
            />
            <div className="mt-3 text-sm text-slate-100">
              <div className="font-semibold">{lightboxImage.title}</div>
              <div className="mt-1 text-xs text-slate-200">
                {lightboxImage.caption}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ======= Componentes pequeños =======

function TeamCard({ doctor, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-xs text-left transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full border border-sky-100 bg-slate-100 overflow-hidden flex items-center justify-center">
            {doctor.photo ? (
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm font-semibold text-slate-500">
                {doctor.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join('')}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">
            {doctor.name}
          </div>
          <div className="mt-0.5 text-xs font-medium text-sky-700">
            {doctor.role}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
            {doctor.shortDetail}
          </p>
          <div className="mt-3 inline-flex items-center text-[11px] font-medium text-sky-700">
            View clinical profile
            <span className="ml-1">→</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="border-b border-slate-200 pb-2 last:border-none last:pb-0">
      <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}

function InfoRowDark({ label, value }) {
  return (
    <div className="border-b border-slate-800 pb-2 last:border-none last:pb-0">
      <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 text-slate-100">{value}</dd>
    </div>
  );
}

function PathwayStep({ step, text }) {
  return (
    <li className="flex gap-3">
      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-700 text-[11px] font-semibold text-white">
        ✓
      </div>
      <div>
        <div className="font-semibold text-slate-900">{step}</div>
        <div className="text-sm text-slate-600">{text}</div>
      </div>
    </li>
  );
}

function WhyItem({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{children}</div>
    </div>
  );
}

// ======= Modal CV estilo OrthoSurgery =======

function DoctorModal({ doctor, onClose }) {
  if (!doctor) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden border border-sky-100 bg-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border border-sky-100 bg-slate-100 overflow-hidden flex items-center justify-center">
              {doctor.photo ? (
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm font-semibold text-slate-500">
                  {doctor.name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {doctor.name}
              </h3>
              <div className="text-xs font-medium text-sky-700">
                {doctor.role}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        {/* Contenido scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid gap-6 p-6 md:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl bg-slate-100 border border-sky-100 overflow-hidden flex items-center justify-center">
                {doctor.photo ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold text-slate-500 px-4 text-center">
                    {doctor.name}
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-600">{doctor.summary}</div>
            </div>

            <div className="space-y-5 text-sm text-slate-700">
              {doctor.experience && (
                <section>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Clinical experience
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {doctor.experience.map((item) => (
                      <li key={item}>□ {item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {doctor.education && (
                <section>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Training & education
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {doctor.education.map((item) => (
                      <li key={item}>□ {item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {doctor.publications && (
                <section>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Publications & teaching
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {doctor.publications.map((item) => (
                      <li key={item}>□ {item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {doctor.memberships && (
                <section>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Memberships
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {doctor.memberships.map((item) => (
                      <li key={item}>□ {item}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


