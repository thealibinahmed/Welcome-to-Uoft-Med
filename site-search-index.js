(function () {
  'use strict';

  /*
   * Shared site search index.
   * Update this file when content changes; every page reads the same entries.
   */
  window.SEARCH_INDEX = [
    { page: 'homepage', title: 'Welcome to UofT Medicine', anchor: '#main-content', keywords: 'home start guide incoming student made independent', snippet: 'Start here for the guide, common questions, student life and official Faculty resources.' },
    { page: 'homepage', title: 'Common questions', anchor: '#homepage-faqs', keywords: 'waitlist refused accepted questions reapply applicants', snippet: 'Answers and next steps for common admissions questions.' },

    { page: 'post-acceptance', title: 'Official incoming-student pages', anchor: '#faculty-resources', keywords: 'accepting offer registration requirements faculty official forms', snippet: 'Begin with the Faculty’s official accepting-your-offer and registration-requirements pages.' },
    { page: 'post-acceptance', title: 'Post-acceptance timeline', anchor: '#timeline', keywords: 'may june july august september timeline deadline tasks', snippet: 'A month-by-month overview of what to expect after accepting your offer.' },
    { page: 'post-acceptance', title: 'Accept your offer', anchor: '#accept', keywords: 'OMSAS consent deposit transcript confirmation', snippet: 'Acceptance, consent and confirmation steps, with official sources linked first.' },
    { page: 'post-acceptance', title: 'Money and major decisions', anchor: '#decisions', keywords: 'OSAP LOC housing academy finances may august', snippet: 'Early financial, housing and academy decisions to plan for.' },
    { page: 'post-acceptance', title: 'Registration requirements', anchor: '#requirements', keywords: 'immunization CPR first aid vulnerable persons record check vulnerable sector WSIB confirmation enrolment letter good standing MINC mask fit', snippet: 'The 2026–27 Year 1 requirements, with current Faculty forms and deadlines linked.' },
    { page: 'post-acceptance', title: 'Equipment and stethoscope', anchor: '#equipment', keywords: 'equipment lookbook stethoscope ceremony draping bookstore', snippet: 'What students generally buy and where to check the current equipment lookbook.' },
    { page: 'post-acceptance', title: 'O-Week and first day', anchor: '#oweek-link', keywords: 'orientation O Week first day schedule registration', snippet: 'Links to the student-run O-Week site and a visual look at the week.' },
    { page: 'post-acceptance', title: 'Post-acceptance FAQs', anchor: '#faqs', keywords: 'faq health coverage moving summer equipment', snippet: 'Answers to practical questions that do not belong in the official checklist.' },

    { page: 'housing', title: 'Choose what matters to you', anchor: '#framework', keywords: 'budget commute roommate solo priorities decision', snippet: 'A decision framework for balancing cost, commute, space and living preferences.' },
    { page: 'housing', title: 'UofT residences', anchor: '#residences', keywords: 'graduate house knox massey residence downtown campus', snippet: 'Compact comparisons of UofT-affiliated residence options relevant to medical students.' },
    { page: 'housing', title: 'Housing map', anchor: '#map', keywords: 'map apartment building neighbourhood walk MSB MAM commute', snippet: 'Explore buildings and neighbourhoods with walk and commute context.' },
    { page: 'housing', title: 'Compare housing options', anchor: '#housing-compare', keywords: 'compare shortlist rent walk review building', snippet: 'Place shortlisted buildings side by side.' },
    { page: 'housing', title: 'Commuting to MAM', anchor: '#commuter', keywords: 'Mississauga MAM transit drive commute downtown', snippet: 'Commute considerations for students based at the Mississauga Academy of Medicine.' },
    { page: 'housing', title: 'Where to search', anchor: '#where-to-search', keywords: 'realtor condos rentals listings search websites apartment', snippet: 'A focused guide to rental-search sources and what each is useful for.' },
    { page: 'housing', title: 'Forms and agreements you may encounter', anchor: '#tenant-rights', keywords: 'Ontario lease 400 rental application realtor representation agreement tenant rights forms', snippet: 'Plain-language context and official blank forms for common rental documents.' },
    { page: 'housing', title: 'Rental warnings', anchor: '#warnings', keywords: 'scam deposit landlord realtor illegal warning tenant', snippet: 'Checks to make before sending money or signing an agreement.' },

    { page: 'finances', title: 'Official financial sources', anchor: '#official-sources', keywords: 'financial aid fees official student accounts counsellor', snippet: 'Current official pages should take priority when amounts, deadlines or policies change.' },
    { page: 'finances', title: 'Current tuition and cost snapshot', anchor: '#costs', keywords: 'tuition incidental ancillary fees domestic Ontario non Ontario MAM housing rent', snippet: 'Current-year school costs with housing excluded by default and an optional adjustable housing estimate.' },
    { page: 'finances', title: 'Medical student lines of credit', anchor: '#loc', keywords: 'LOC line credit bank scotia RBC CIBC BMO TD prime interest', snippet: 'What a medical LOC is, what to compare and which terms vary over time.' },
    { page: 'finances', title: 'Pre- and post-interest calculator', anchor: '#loc-calculator', keywords: 'calculator borrowing balance interest residency budget', snippet: 'Estimate borrowing before interest and explore interest assumptions through medical school and residency.' },
    { page: 'finances', title: 'Questions to ask each bank', anchor: '#bank-tool', keywords: 'bank meeting questions promotion grace period repayment cosigner insurance', snippet: 'A structured bank-comparison interview guide, with time-sensitive items clearly identified.' },
    { page: 'finances', title: 'Bank comparison', anchor: '#bank-comparison', keywords: 'compare Scotia CIBC BMO RBC TD LOC', snippet: 'A concise comparison that points back to written bank terms for confirmation.' },
    { page: 'finances', title: 'OSAP, bursaries and grants', anchor: '#osap', keywords: 'OSAP bursary grant Temerty financial counsellor aid', snippet: 'Government aid and UofT supports, including how to connect with the MD Program Financial Counsellor.' },
    { page: 'finances', title: 'Paying tuition and reading your invoice', anchor: '#tuition-deferral', keywords: 'ACORN invoice tuition deposit minimum payment register remaining balance deferral government aid fall winter subtotal session total', snippet: 'See the difference between the tuition deposit, minimum payment to register and remaining balance, then choose the payment pathway that applies to you.' },

    { page: 'academics', title: 'Starting Year 1', anchor: '#starting-year-1', keywords: 'starting year one study prepare academics incoming', snippet: 'You do not need to arrive having studied ahead. Start with the course map and return as each part becomes relevant.' },
    { page: 'academics', title: 'Year 1 course sequence', anchor: '#curriculum-start', keywords: 'ITM CPC 1 CPC 2 curriculum course sequence', snippet: 'An interactive overview of the three Year 1 Foundations courses.' },
    { page: 'academics', title: 'Community Engaged Experiences (CEEs)', anchor: '#cee', keywords: 'CEE ICE HC health community placement long term care LTC IDD flexible longitudinal MedSIS', snippet: 'What CEEs are, the confirmed 2T9 visit requirements and how placements are arranged, logged and discussed.' },
    { page: 'academics', title: 'What a week can look like', anchor: '#calendar', keywords: 'calendar schedule typical week ME ISAL portfolio CBL lectures Monday Friday clinical skills', snippet: 'Student-reported 2T9 time-blocked examples showing an ME week, Friday Clinical Skills and ISAL timing. Check MedSIS for the current timetable.' },
    { page: 'academics', title: 'Student-shared study resources', anchor: '#study-notes', keywords: 'notes guides anki physical exam history OSCE shared forward', snippet: 'Search cohort-shared notes, block guides, Anki decks and clinical-skills resources in one place.' },
    { page: 'academics', title: 'Student experience and advice', anchor: '#testimonials', keywords: 'testimonial upper year advice course experience', snippet: 'A place for specific, attributed upper-year experiences and practical advice.' },
    { page: 'academics', title: 'Shadowing and EEE', anchor: '#shadowing', keywords: 'shadowing EEE elective clinic ward OR email ICE CAP', snippet: 'How shadowing works, possible settings, preparation and a sample outreach email.' },
    { page: 'academics', title: 'MD+ and early opportunities', anchor: '#md-plus', keywords: 'MD plus program application deadline research global health leadership education', snippet: 'Programs and opportunities that may have early application deadlines.' },
    { page: 'academics', title: 'Faculty pages worth bookmarking', anchor: '#faculty-resources', keywords: 'official faculty academics support OLA learning specialist bookmark', snippet: 'Official academic, learner-support and program pages collected at the end of the page.' },

    { page: 'handbook', title: 'Field Guide routes', anchor: '#handbook-routes-title', keywords: 'field guide reference start glossary academy community systems', snippet: 'Jump directly to the part of the Field Guide you need.' },
    { page: 'handbook', title: 'Program structure', anchor: '#program-structure', keywords: 'Foundations Year 1 Year 2 FMLE clerkship years 3 4', snippet: 'A compact map of Foundations and Clerkship without repeating the full course guide.' },
    { page: 'handbook', title: 'Getting set up', anchor: '#getting-set-up', keywords: 'TCard UTORid email setup onboarding', snippet: 'Practical steps for activating the core UofT student systems.' },
    { page: 'handbook', title: 'Glossary', anchor: '#vocabulary', keywords: 'abbreviations ISAL ICE CBL CPC MAPS ME CaRMS ERAS MCCQE', snippet: 'Search or filter the abbreviations and program vocabulary used across medical school.' },
    { page: 'handbook', title: 'Academies', anchor: '#academies', keywords: 'FitzGerald Peters Boyd Wightman Berris MAM hospitals academy assignment', snippet: 'How the academies fit into the program and what remains consistent or year-dependent.' },
    { page: 'handbook', title: 'MAM Field Guide', anchor: '#mam-field-guide', keywords: 'Mississauga MAM campus access student life', snippet: 'Practical information for students at the Mississauga Academy of Medicine.' },
    { page: 'handbook', title: 'Councils, groups and student life', anchor: '#community-groups', keywords: 'class council MedSoc positions interest groups cultural religious affinity', snippet: 'Class Council, MedSoc, interest groups and communities organized as one student-life section.' },
    { page: 'handbook', title: 'Prayer spaces', anchor: '#prayer-spaces', keywords: 'prayer room worship meditation MMAC access', snippet: 'Prayer-space information with a route to MMAC for current access details.' },
    { page: 'handbook', title: 'OMSA and OMA', anchor: '#omsa-oma', keywords: 'OMSA OMA membership medical students association', snippet: 'What the provincial organizations are and where to confirm current benefits.' },
    { page: 'handbook', title: 'Wellness and learner support', anchor: '#wellness', keywords: 'OLA learning specialist wellness mental health accommodations help', snippet: 'Who to contact for academic, personal and accessibility support.' },
    { page: 'handbook', title: 'Systems and platforms', anchor: '#platforms', keywords: 'Elentra MedSIS ISAL ACORN Quercus ExamSoft Examplify Learner Chart OASES', snippet: 'Choose the correct platform for schedules, course content, submissions, grades and registration.' },

    { page: 'mentorship', title: 'Start with a mentor', anchor: '#start', keywords: 'mentor mentorship contact expectations first message safety', snippet: 'What mentorship can help with and a simple first message.' },
    { page: 'mentorship', title: 'Formal mentorship programs', anchor: '#formal-programs', keywords: 'iLEAD diversity mentorship faculty peer program career stage August 2026', snippet: 'Official mentorship programs with current 2026–27 intake guidance and source links.' },
    { page: 'mentorship', title: 'Browse mentors by lived experience', anchor: '#directory', keywords: 'mentor directory filter first generation mature non traditional identity background', snippet: 'Filter mentor profiles by the experiences that matter to you.' },

    { page: 'about', title: 'About the guide', anchor: '#main-content', keywords: 'about independent student made disclaimer mission sources', snippet: 'Why the guide exists, how it is maintained and how official sources are prioritized.' },
    { page: 'about', title: 'What changed', anchor: '#changelog', keywords: 'updates changelog last verified corrections', snippet: 'A dated record of meaningful changes to the guide.' },

    { page: 'feedback', title: 'Submit a correction', anchor: '#form-content-correction', keywords: 'feedback correction source inaccurate update', snippet: 'Flag inaccurate or out-of-date content and include a source when possible.' },
    { page: 'feedback', title: 'Submit a housing review', anchor: '#form-housing-review', keywords: 'housing building review upper year rent', snippet: 'Share a building or neighbourhood review for future students.' },
    { page: 'feedback', title: 'Join the mentor directory', anchor: '#form-mentor-signup', keywords: 'mentor signup volunteer profile', snippet: 'Offer to be listed as an upper-year mentor.' },
    { page: 'feedback', title: 'Request a privacy update or removal', anchor: '#form-privacy-removal', keywords: 'privacy remove update personal information', snippet: 'Request a change or removal involving personal information.' },

    { page: 'quicklinks', title: 'Quick Links directory', anchor: '#quick-links', keywords: 'links official UofT forms academics finances housing community directory', snippet: 'Search official links and the guide’s attributed student-resource sections in one place.' }
  ];
})();
