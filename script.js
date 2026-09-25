 /* ============================================================
   DEVPOD BY ANKIT PAL
   Educational Learning Platform
   Pure Vanilla JavaScript
   No Framework • No Backend • GitHub Pages Ready
   ============================================================ */


/* ============================================================
   01. APPLICATION CONFIGURATION
============================================================ */

const Devpod = {

    version: "2.0.0",

    storage: {
        state: "devpod_state_v2",
        theme: "devpod_theme_v2",
        language: "devpod_language_v2",
        bookmarks: "devpod_bookmarks_v2",
        history: "devpod_history_v2",
        preferences: "devpod_preferences_v2"
    },

    state: {
        language: "en",
        theme: "light",

        currentClass: 9,
        currentMedium: "english",

        currentExam: "pet",
        currentSubject: "all",
        currentDifficulty: "all",

        practiceQuestions: [],
        currentQuestionIndex: 0,
        practiceScore: 0,
        practiceAnswered: false,

        mockQuestions: [],
        mockIndex: 0,
        mockScore: 0,
        mockCorrect: 0,
        mockWrong: 0,
        mockSkipped: 0,
        mockTimer: null,
        mockSecondsRemaining: 0,

        bookmarks: [],
        testHistory: [],

        questionsSolved: 0,
        correctAnswers: 0,
        testsCompleted: 0,
        streak: 0,
        lastStudyDate: null,

        searchQuery: ""
    }

};


/* ============================================================
   02. SVG ICONS
============================================================ */

const Icons = {

    search: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-4-4"></path>
        </svg>
    `,

    book: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path>
            <path d="M4 5.5v16"></path>
            <path d="M8 7h8"></path>
            <path d="M8 11h7"></path>
        </svg>
    `,

    practice: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="3" width="16" height="18" rx="2"></rect>
            <path d="M8 7h8"></path>
            <path d="M8 11h8"></path>
            <path d="m8 15 1.5 1.5L12 14"></path>
        </svg>
    `,

    chart: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 19V5"></path>
            <path d="M4 19h16"></path>
            <path d="m7 15 3-4 3 2 5-7"></path>
        </svg>
    `,

    target: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="8"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <circle cx="12" cy="12" r="1"></circle>
        </svg>
    `,

    bookmark: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-3-6 3z"></path>
        </svg>
    `,

    clock: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 2"></path>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4 4L19 6"></path>
        </svg>
    `,

    close: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12"></path>
            <path d="m18 6-12 12"></path>
        </svg>
    `,

    arrow: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m13 6 6 6-6 6"></path>
        </svg>
    `,

    graduation: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m3 9 9-5 9 5-9 5z"></path>
            <path d="M7 11v5c2.8 2.1 7.2 2.1 10 0v-5"></path>
            <path d="M21 9v6"></path>
        </svg>
    `,

    shield: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"></path>
            <path d="m8.5 12 2.2 2.2 4.8-5"></path>
        </svg>
    `,

    flask: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 3h6"></path>
            <path d="M10 3v6L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"></path>
            <path d="M7 16h10"></path>
        </svg>
    `,

    calculator: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="3" width="14" height="18" rx="2"></rect>
            <path d="M8 7h8"></path>
            <path d="M8 11h2"></path>
            <path d="M14 11h2"></path>
            <path d="M8 15h2"></path>
            <path d="M14 15h2"></path>
            <path d="M8 18h8"></path>
        </svg>
    `,

    atom: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="2"></circle>
            <ellipse cx="12" cy="12" rx="9" ry="4"></ellipse>
            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"></ellipse>
            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"></ellipse>
        </svg>
    `,

    dna: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 3c5 2 5 6 0 9s-5 7 0 9"></path>
            <path d="M17 3c-5 2-5 6 0 9s5 7 0 9"></path>
            <path d="M8 6h8"></path>
            <path d="M7 10h10"></path>
            <path d="M7 14h10"></path>
            <path d="M8 18h8"></path>
        </svg>
    `,

    globe: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M3 12h18"></path>
            <path d="M12 3c3 3 3 15 0 18"></path>
            <path d="M12 3c-3 3-3 15 0 18"></path>
        </svg>
    `,

    history: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7"></path>
            <path d="M3 4v5h5"></path>
            <path d="M12 7v5l3 2"></path>
        </svg>
    `,

    sun: `
        <svg viewBox="0 0 24 24" class="theme-icon theme-sun" aria-hidden="true">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.42 1.42"></path>
            <path d="m17.65 17.65 1.42 1.42"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m4.93 19.07 1.42-1.42"></path>
            <path d="m17.65 6.35 1.42-1.42"></path>
        </svg>
    `,

    moon: `
        <svg viewBox="0 0 24 24" class="theme-icon theme-moon" aria-hidden="true">
            <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"></path>
        </svg>
    `

};


/* ============================================================
   03. TRANSLATIONS
============================================================ */

const translations = {

    en: {

        navHome: "Home",
        navExams: "Exams",
        navClasses: "Classes 9–12",
        navPractice: "Practice",
        navMock: "Mock Tests",
        navRevision: "Revision",
        navProgress: "Progress",

        heroEyebrow: "FREE LEARNING • NO LOGIN • NO PAYWALL",
        heroTitleOne: "Learn smarter.",
        heroTitleTwo: "Practice better.",
        heroTitleThree: "Achieve more.",

        heroDescription:
            "A focused learning space for competitive-exam aspirants and school students — with structured topics, theory, practice, revision and progress tracking.",

        startLearning: "Start Learning",
        exploreExams: "Explore Exams",

        searchPlaceholder:
            "Search an exam, subject, topic, chapter or sub-topic...",

        quickTitle: "Everything you need to study",
        quickDescription:
            "Move from learning to practice and revision without losing your progress.",

        theoryTitle: "Theory & Notes",
        theoryText: "Concept-first explanations and examples",

        practiceTitle: "Practice Questions",
        practiceText: "Topic-wise questions with explanations",

        mockTitle: "Mock Tests",
        mockText: "Timed exam-style practice",

        revisionTitle: "Quick Revision",
        revisionText: "Formula sheets and rapid recall",

        bookmarkTitle: "Bookmarks",
        bookmarkText: "Save important questions and topics",

        progressTitle: "Your Progress",
        progressText: "Track accuracy, tests and consistency",

        examsTitle: "Competitive Exams",
        examsDescription:
            "Build your preparation around structured exam-wise learning paths.",

        classesTitle: "Classes 9–12",
        classesDescription:
            "Subject and chapter-focused learning for school students, including senior-secondary PCM and PCB.",

        practiceSectionTitle: "Practice by topic",
        practiceSectionDescription:
            "Choose your exam, subject and difficulty to begin a focused practice session.",

        mockSectionTitle: "Mock Tests",
        mockSectionDescription:
            "Practice under time pressure or use a flexible practice-mode test.",

        revisionSectionTitle: "Revise in less time",
        revisionSectionDescription:
            "Short revision cards help you refresh important concepts before practice or an exam.",

        progressSectionTitle: "Your learning dashboard",
        progressSectionDescription:
            "Everything is stored locally in your browser. No account is required.",

        freeTitle: "Free means free.",
        freeText:
            "No login, no subscription and no paid coaching dependency. Learn, practice and track your preparation directly in your browser.",

        faqTitle: "Frequently asked questions",

        footerDescription:
            "A focused educational platform created for structured learning, practice and revision.",

        footerLearning: "Learning",
        footerExams: "Exams",
        footerPlatform: "Platform",

        overallProgress: "Overall progress",
        weakAreas: "Weak areas",
        testHistory: "Test history",
        bookmarks: "Bookmarks",

        questionsSolved: "Questions solved",
        accuracy: "Accuracy",
        streak: "Study streak",
        testsCompleted: "Tests completed",

        browseTopics: "Browse Topics",
        startPractice: "Start Practice",

        openRevision: "Open Revision",
        nextRevision: "Next",

        realExam: "Real Exam Mode",
        realExamText: "Timed, exam-style environment with configurable marking.",
        practiceMode: "Practice Mode",
        practiceModeText: "Flexible learning mode with immediate feedback.",

        noResults: "No matching result found.",
        clearSearch: "Clear search",

        lightMode: "Light mode",
        darkMode: "Dark mode"

    },

    hi: {

        navHome: "होम",
        navExams: "परीक्षाएँ",
        navClasses: "कक्षा 9–12",
        navPractice: "प्रैक्टिस",
        navMock: "मॉक टेस्ट",
        navRevision: "रिवीजन",
        navProgress: "प्रोग्रेस",

        heroEyebrow: "फ्री लर्निंग • NO LOGIN • NO PAYWALL",
        heroTitleOne: "स्मार्ट तरीके से सीखें।",
        heroTitleTwo: "बेहतर प्रैक्टिस करें।",
        heroTitleThree: "बेहतर परिणाम पाएँ।",

        heroDescription:
            "प्रतियोगी परीक्षाओं और स्कूल छात्रों के लिए एक focused learning space — structured topics, theory, practice, revision और progress tracking के साथ।",

        startLearning: "पढ़ाई शुरू करें",
        exploreExams: "परीक्षाएँ देखें",

        searchPlaceholder:
            "Exam, subject, topic, chapter या sub-topic खोजें...",

        quickTitle: "पढ़ाई के लिए जरूरी सब कुछ",
        quickDescription:
            "Learning से practice और revision तक अपनी progress के साथ आगे बढ़ें।",

        theoryTitle: "Theory & Notes",
        theoryText: "Concept आधारित explanation और examples",

        practiceTitle: "Practice Questions",
        practiceText: "Topic-wise questions और explanations",

        mockTitle: "Mock Tests",
        mockText: "Timed exam-style practice",

        revisionTitle: "Quick Revision",
        revisionText: "Formula sheets और rapid recall",

        bookmarkTitle: "Bookmarks",
        bookmarkText: "Important questions और topics save करें",

        progressTitle: "Your Progress",
        progressText: "Accuracy, tests और consistency track करें",

        examsTitle: "Competitive Exams",
        examsDescription:
            "Exam-wise structured learning paths के साथ अपनी तैयारी करें।",

        classesTitle: "Classes 9–12",
        classesDescription:
            "School students के लिए subject और chapter-focused learning, जिसमें senior-secondary PCM और PCB शामिल हैं।",

        practiceSectionTitle: "Topic-wise Practice",
        practiceSectionDescription:
            "Focused practice session शुरू करने के लिए exam, subject और difficulty चुनें।",

        mockSectionTitle: "Mock Tests",
        mockSectionDescription:
            "Time pressure के साथ practice करें या flexible practice-mode test चुनें।",

        revisionSectionTitle: "कम समय में Revision",
        revisionSectionDescription:
            "Short revision cards practice या exam से पहले important concepts को जल्दी refresh करने में मदद करते हैं।",

        progressSectionTitle: "आपका Learning Dashboard",
        progressSectionDescription:
            "सारा data आपके browser में locally save होता है। किसी account की जरूरत नहीं।",

        freeTitle: "Free मतलब सच में Free.",
        freeText:
            "No login, no subscription और paid coaching dependency नहीं। Browser में सीधे सीखें, practice करें और preparation track करें।",

        faqTitle: "अक्सर पूछे जाने वाले सवाल",

        footerDescription:
            "Structured learning, practice और revision के लिए बनाया गया educational platform।",

        footerLearning: "Learning",
        footerExams: "Exams",
        footerPlatform: "Platform",

        overallProgress: "Overall progress",
        weakAreas: "Weak areas",
        testHistory: "Test history",
        bookmarks: "Bookmarks",

        questionsSolved: "Solved Questions",
        accuracy: "Accuracy",
        streak: "Study Streak",
        testsCompleted: "Completed Tests",

        browseTopics: "Topics देखें",
        startPractice: "Practice शुरू करें",

        openRevision: "Revision खोलें",
        nextRevision: "Next",

        realExam: "Real Exam Mode",
        realExamText: "Timed exam-style environment with configurable marking.",
        practiceMode: "Practice Mode",
        practiceModeText: "Flexible learning mode with immediate feedback.",

        noResults: "कोई matching result नहीं मिला।",
        clearSearch: "Search clear करें",

        lightMode: "Light mode",
        darkMode: "Dark mode"

    }

};


/* ============================================================
   04. EXAM DATABASE
============================================================ */

const examsDB = {

    pet: {

        id: "pet",
        name: "UPSSSC PET",
        short: "PET",
        symbol: "UP",

        description:
            "Preliminary Eligibility Test preparation with structured subject and topic practice.",

        subjects: [

            {
                id: "history",
                name: "Indian History",
                hi: "भारतीय इतिहास",
                icon: "history",
                topics: [
                    "Ancient India",
                    "Medieval India",
                    "Modern India",
                    "Indian National Movement",
                    "Indian Culture"
                ]
            },

            {
                id: "geography",
                name: "Geography",
                hi: "भूगोल",
                icon: "globe",
                topics: [
                    "Physical Geography",
                    "Indian Geography",
                    "Rivers and Lakes",
                    "Climate and Monsoon",
                    "Agriculture and Resources"
                ]
            },

            {
                id: "polity",
                name: "Indian Polity",
                hi: "भारतीय राजव्यवस्था",
                icon: "shield",
                topics: [
                    "Constitution",
                    "Fundamental Rights",
                    "Parliament",
                    "President and Governor",
                    "Judiciary",
                    "Local Government"
                ]
            },

            {
                id: "science",
                name: "General Science",
                hi: "सामान्य विज्ञान",
                icon: "flask",
                topics: [
                    "Physics Basics",
                    "Chemistry Basics",
                    "Biology Basics",
                    "Human Body",
                    "Environment"
                ]
            },

            {
                id: "math",
                name: "Elementary Mathematics",
                hi: "प्रारम्भिक गणित",
                icon: "calculator",
                topics: [
                    "Number System",
                    "Percentage",
                    "Profit and Loss",
                    "Average",
                    "Ratio and Proportion",
                    "Data Interpretation"
                ]
            },

            {
                id: "reasoning",
                name: "Reasoning",
                hi: "तार्किक क्षमता",
                icon: "target",
                topics: [
                    "Analogy",
                    "Classification",
                    "Series",
                    "Coding-Decoding",
                    "Direction",
                    "Blood Relations"
                ]
            },

            {
                id: "hindi",
                name: "Hindi",
                hi: "हिंदी",
                icon: "book",
                topics: [
                    "Hindi Grammar",
                    "Vocabulary",
                    "Synonyms and Antonyms",
                    "Sentence Correction",
                    "Comprehension"
                ]
            },

            {
                id: "current-affairs",
                name: "Current Affairs",
                hi: "समसामयिक घटनाएँ",
                icon: "globe",
                topics: [
                    "National Events",
                    "International Events",
                    "Awards",
                    "Sports",
                    "Science and Technology"
                ]
            }

        ]

    },


    mains: {

        id: "mains",
        name: "UPSSSC Mains",
        short: "MAINS",
        symbol: "UP",

        description:
            "Structured subject practice for UPSSSC mains-oriented preparation.",

        subjects: [

            {
                id: "hindi",
                name: "Hindi Language",
                hi: "हिंदी भाषा",
                icon: "book",
                topics: [
                    "Grammar",
                    "Vocabulary",
                    "Comprehension",
                    "Sentence Usage"
                ]
            },

            {
                id: "general-studies",
                name: "General Studies",
                hi: "सामान्य अध्ययन",
                icon: "globe",
                topics: [
                    "Indian History",
                    "Indian Geography",
                    "Indian Polity",
                    "Indian Economy",
                    "Science",
                    "Current Affairs"
                ]
            },

            {
                id: "reasoning",
                name: "Reasoning",
                hi: "रीजनिंग",
                icon: "target",
                topics: [
                    "Analogy",
                    "Series",
                    "Classification",
                    "Coding-Decoding",
                    "Logical Reasoning"
                ]
            },

            {
                id: "math",
                name: "Mathematics",
                hi: "गणित",
                icon: "calculator",
                topics: [
                    "Arithmetic",
                    "Percentage",
                    "Ratio",
                    "Average",
                    "Data Interpretation"
                ]
            }

        ]

    },


    upPolice: {

        id: "upPolice",
        name: "UP Police",
        short: "POLICE",
        symbol: "UP",

        description:
            "Practice areas covering the major preparation domains for UP Police examinations.",

        subjects: [

            {
                id: "gk",
                name: "General Knowledge",
                hi: "सामान्य ज्ञान",
                icon: "globe",
                topics: [
                    "Indian History",
                    "Indian Geography",
                    "Indian Polity",
                    "Economy",
                    "Current Affairs"
                ]
            },

            {
                id: "hindi",
                name: "General Hindi",
                hi: "सामान्य हिंदी",
                icon: "book",
                topics: [
                    "Grammar",
                    "Vocabulary",
                    "Comprehension",
                    "Sentence Correction"
                ]
            },

            {
                id: "reasoning",
                name: "Mental Ability",
                hi: "मानसिक क्षमता",
                icon: "target",
                topics: [
                    "Analogy",
                    "Series",
                    "Classification",
                    "Coding-Decoding",
                    "Direction",
                    "Logical Reasoning"
                ]
            },

            {
                id: "numerical",
                name: "Numerical Ability",
                hi: "संख्यात्मक क्षमता",
                icon: "calculator",
                topics: [
                    "Number System",
                    "Percentage",
                    "Profit and Loss",
                    "Average",
                    "Ratio",
                    "Time and Work"
                ]
            },

            {
                id: "science",
                name: "General Science",
                hi: "सामान्य विज्ञान",
                icon: "flask",
                topics: [
                    "Physics",
                    "Chemistry",
                    "Biology",
                    "Environment"
                ]
            }

        ]

    },


    cgl: {

        id: "cgl",
        name: "SSC CGL",
        short: "CGL",
        symbol: "SSC",

        description:
            "Focused preparation across the core SSC CGL practice domains.",

        subjects: [

            {
                id: "quant",
                name: "Quantitative Aptitude",
                hi: "मात्रात्मक योग्यता",
                icon: "calculator",
                topics: [
                    "Number System",
                    "Percentage",
                    "Ratio",
                    "Average",
                    "Algebra",
                    "Geometry",
                    "Mensuration",
                    "Data Interpretation"
                ]
            },

            {
                id: "reasoning",
                name: "General Intelligence & Reasoning",
                hi: "रीजनिंग",
                icon: "target",
                topics: [
                    "Analogy",
                    "Classification",
                    "Series",
                    "Coding-Decoding",
                    "Venn Diagram",
                    "Syllogism"
                ]
            },

            {
                id: "english",
                name: "English Comprehension",
                hi: "अंग्रेज़ी",
                icon: "book",
                topics: [
                    "Vocabulary",
                    "Grammar",
                    "Sentence Improvement",
                    "Error Detection",
                    "Reading Comprehension"
                ]
            },

            {
                id: "gk",
                name: "General Awareness",
                hi: "सामान्य जागरूकता",
                icon: "globe",
                topics: [
                    "History",
                    "Geography",
                    "Polity",
                    "Economy",
                    "Science",
                    "Current Affairs"
                ]
            }

        ]

    },


    chsl: {

        id: "chsl",
        name: "SSC CHSL",
        short: "CHSL",
        symbol: "SSC",

        description:
            "Practice-focused learning for SSC CHSL preparation.",

        subjects: [

            {
                id: "quant",
                name: "Quantitative Aptitude",
                hi: "मात्रात्मक योग्यता",
                icon: "calculator",
                topics: [
                    "Arithmetic",
                    "Percentage",
                    "Ratio",
                    "Average",
                    "Geometry",
                    "Mensuration",
                    "Data Interpretation"
                ]
            },

            {
                id: "reasoning",
                name: "General Intelligence",
                hi: "सामान्य बुद्धिमत्ता",
                icon: "target",
                topics: [
                    "Analogy",
                    "Series",
                    "Classification",
                    "Coding-Decoding",
                    "Logical Reasoning"
                ]
            },

            {
                id: "english",
                name: "English Language",
                hi: "अंग्रेज़ी भाषा",
                icon: "book",
                topics: [
                    "Grammar",
                    "Vocabulary",
                    "Comprehension",
                    "Error Detection"
                ]
            },

            {
                id: "gk",
                name: "General Awareness",
                hi: "सामान्य जागरूकता",
                icon: "globe",
                topics: [
                    "History",
                    "Geography",
                    "Polity",
                    "Science",
                    "Current Affairs"
                ]
            }

        ]

    }

};


/* ============================================================
   05. CLASS / NCERT LEARNING DATABASE
============================================================ */

const classesDB = {

    9: {

        title: "Class 9",

        subjects: [

            {
                id: "math",
                name: "Mathematics",
                hi: "गणित",
                icon: "calculator",
                chapters: [
                    "Number Systems",
                    "Polynomials",
                    "Coordinate Geometry",
                    "Linear Equations in Two Variables",
                    "Introduction to Euclid's Geometry",
                    "Lines and Angles",
                    "Triangles",
                    "Quadrilaterals",
                    "Circles",
                    "Heron's Formula",
                    "Surface Areas and Volumes",
                    "Statistics",
                    "Probability"
                ]
            },

            {
                id: "science",
                name: "Science",
                hi: "विज्ञान",
                icon: "flask",
                chapters: [
                    "Matter in Our Surroundings",
                    "Is Matter Around Us Pure",
                    "Atoms and Molecules",
                    "Structure of the Atom",
                    "The Fundamental Unit of Life",
                    "Tissues",
                    "Motion",
                    "Force and Laws of Motion",
                    "Gravitation",
                    "Work and Energy",
                    "Sound",
                    "Why Do We Fall Ill",
                    "Natural Resources",
                    "Improvement in Food Resources"
                ]
            },

            {
                id: "english",
                name: "English",
                hi: "अंग्रेज़ी",
                icon: "book",
                chapters: [
                    "Reading Comprehension",
                    "Grammar",
                    "Writing Skills",
                    "Vocabulary",
                    "Literature"
                ]
            },

            {
                id: "hindi",
                name: "Hindi",
                hi: "हिंदी",
                icon: "book",
                chapters: [
                    "गद्य",
                    "पद्य",
                    "व्याकरण",
                    "लेखन",
                    "पठन-बोध"
                ]
            }

        ]

    },


    10: {

        title: "Class 10",

        subjects: [

            {
                id: "math",
                name: "Mathematics",
                hi: "गणित",
                icon: "calculator",
                chapters: [
                    "Real Numbers",
                    "Polynomials",
                    "Pair of Linear Equations",
                    "Quadratic Equations",
                    "Arithmetic Progressions",
                    "Triangles",
                    "Coordinate Geometry",
                    "Introduction to Trigonometry",
                    "Applications of Trigonometry",
                    "Circles",
                    "Areas Related to Circles",
                    "Surface Areas and Volumes",
                    "Statistics",
                    "Probability"
                ]
            },

            {
                id: "science",
                name: "Science",
                hi: "विज्ञान",
                icon: "flask",
                chapters: [
                    "Chemical Reactions and Equations",
                    "Acids Bases and Salts",
                    "Metals and Non-metals",
                    "Carbon and Its Compounds",
                    "Life Processes",
                    "Control and Coordination",
                    "How Do Organisms Reproduce",
                    "Heredity",
                    "Light",
                    "Human Eye and Colourful World",
                    "Electricity",
                    "Magnetic Effects of Electric Current",
                    "Our Environment"
                ]
            },

            {
                id: "english",
                name: "English",
                hi: "अंग्रेज़ी",
                icon: "book",
                chapters: [
                    "Reading",
                    "Grammar",
                    "Writing",
                    "Vocabulary",
                    "Literature"
                ]
            },

            {
                id: "hindi",
                name: "Hindi",
                hi: "हिंदी",
                icon: "book",
                chapters: [
                    "गद्य",
                    "पद्य",
                    "व्याकरण",
                    "लेखन",
                    "पठन-बोध"
                ]
            }

        ]

    },


    11: {

        title: "Class 11",

        streams: {

            common: [

                {
                    id: "english",
                    name: "English",
                    hi: "अंग्रेज़ी",
                    icon: "book",
                    chapters: [
                        "Reading Skills",
                        "Writing Skills",
                        "Grammar",
                        "Vocabulary",
                        "Literature"
                    ]
                }

            ],

            pcm: [

                {
                    id: "physics",
                    name: "Physics",
                    hi: "भौतिक विज्ञान",
                    icon: "atom",
                    chapters: [
                        "Physical World and Measurement",
                        "Kinematics",
                        "Laws of Motion",
                        "Work Energy and Power",
                        "Motion of System of Particles",
                        "Gravitation",
                        "Properties of Bulk Matter",
                        "Thermodynamics",
                        "Kinetic Theory",
                        "Oscillations",
                        "Waves"
                    ]
                },

                {
                    id: "chemistry",
                    name: "Chemistry",
                    hi: "रसायन विज्ञान",
                    icon: "flask",
                    chapters: [
                        "Some Basic Concepts of Chemistry",
                        "Structure of Atom",
                        "Classification of Elements",
                        "Chemical Bonding",
                        "Thermodynamics",
                        "Equilibrium",
                        "Redox Reactions",
                        "Organic Chemistry Basics",
                        "Hydrocarbons",
                        "States of Matter"
                    ]
                },

                {
                    id: "math",
                    name: "Mathematics",
                    hi: "गणित",
                    icon: "calculator",
                    chapters: [
                        "Sets",
                        "Relations and Functions",
                        "Trigonometric Functions",
                        "Complex Numbers",
                        "Linear Inequalities",
                        "Permutations and Combinations",
                        "Binomial Theorem",
                        "Sequences and Series",
                        "Straight Lines",
                        "Conic Sections",
                        "Introduction to 3D Geometry",
                        "Limits and Derivatives",
                        "Statistics",
                        "Probability"
                    ]
                }

            ],

            pcb: [

                {
                    id: "physics",
                    name: "Physics",
                    hi: "भौतिक विज्ञान",
                    icon: "atom",
                    chapters: [
                        "Physical World and Measurement",
                        "Kinematics",
                        "Laws of Motion",
                        "Work Energy and Power",
                        "Motion of System of Particles",
                        "Gravitation",
                        "Properties of Bulk Matter",
                        "Thermodynamics",
                        "Kinetic Theory",
                        "Oscillations",
                        "Waves"
                    ]
                },

                {
                    id: "chemistry",
                    name: "Chemistry",
                    hi: "रसायन विज्ञान",
                    icon: "flask",
                    chapters: [
                        "Some Basic Concepts of Chemistry",
                        "Structure of Atom",
                        "Classification of Elements",
                        "Chemical Bonding",
                        "Thermodynamics",
                        "Equilibrium",
                        "Redox Reactions",
                        "Organic Chemistry Basics",
                        "Hydrocarbons",
                        "States of Matter"
                    ]
                },

                {
                    id: "biology",
                    name: "Biology",
                    hi: "जीव विज्ञान",
                    icon: "dna",
                    chapters: [
                        "The Living World",
                        "Biological Classification",
                        "Plant Kingdom",
                        "Animal Kingdom",
                        "Morphology of Flowering Plants",
                        "Anatomy of Flowering Plants",
                        "Structural Organisation in Animals",
                        "Cell Structure and Function",
                        "Biomolecules",
                        "Cell Cycle and Cell Division",
                        "Transport in Plants",
                        "Mineral Nutrition",
                        "Photosynthesis",
                        "Respiration in Plants",
                        "Plant Growth and Development",
                        "Digestion and Absorption",
                        "Breathing and Exchange of Gases",
                        "Body Fluids and Circulation",
                        "Excretory Products",
                        "Locomotion and Movement",
                        "Neural Control",
                        "Chemical Coordination"
                    ]
                }

            ]

        }

    },


    12: {

        title: "Class 12",

        streams: {

            common: [

                {
                    id: "english",
                    name: "English",
                    hi: "अंग्रेज़ी",
                    icon: "book",
                    chapters: [
                        "Reading Skills",
                        "Writing Skills",
                        "Grammar",
                        "Vocabulary",
                        "Literature"
                    ]
                }

            ],

            pcm: [

                {
                    id: "physics",
                    name: "Physics",
                    hi: "भौतिक विज्ञान",
                    icon: "atom",
                    chapters: [
                        "Electric Charges and Fields",
                        "Electrostatic Potential and Capacitance",
                        "Current Electricity",
                        "Moving Charges and Magnetism",
                        "Magnetism and Matter",
                        "Electromagnetic Induction",
                        "Alternating Current",
                        "Electromagnetic Waves",
                        "Ray Optics",
                        "Wave Optics",
                        "Dual Nature of Radiation",
                        "Atoms",
                        "Nuclei",
                        "Semiconductor Electronics"
                    ]
                },

                {
                    id: "chemistry",
                    name: "Chemistry",
                    hi: "रसायन विज्ञान",
                    icon: "flask",
                    chapters: [
                        "Solutions",
                        "Electrochemistry",
                        "Chemical Kinetics",
                        "d and f Block Elements",
                        "Coordination Compounds",
                        "Haloalkanes and Haloarenes",
                        "Alcohols Phenols and Ethers",
                        "Aldehydes Ketones and Carboxylic Acids",
                        "Amines",
                        "Biomolecules",
                        "Polymers",
                        "Chemistry in Everyday Life"
                    ]
                },

                {
                    id: "math",
                    name: "Mathematics",
                    hi: "गणित",
                    icon: "calculator",
                    chapters: [
                        "Relations and Functions",
                        "Inverse Trigonometric Functions",
                        "Matrices",
                        "Determinants",
                        "Continuity and Differentiability",
                        "Applications of Derivatives",
                        "Integrals",
                        "Applications of Integrals",
                        "Differential Equations",
                        "Vector Algebra",
                        "Three Dimensional Geometry",
                        "Linear Programming",
                        "Probability"
                    ]
                }

            ],

            pcb: [

                {
                    id: "physics",
                    name: "Physics",
                    hi: "भौतिक विज्ञान",
                    icon: "atom",
                    chapters: [
                        "Electric Charges and Fields",
                        "Electrostatic Potential and Capacitance",
                        "Current Electricity",
                        "Moving Charges and Magnetism",
                        "Magnetism and Matter",
                        "Electromagnetic Induction",
                        "Alternating Current",
                        "Electromagnetic Waves",
                        "Ray Optics",
                        "Wave Optics",
                        "Dual Nature of Radiation",
                        "Atoms",
                        "Nuclei",
                        "Semiconductor Electronics"
                    ]
                },

                {
                    id: "chemistry",
                    name: "Chemistry",
                    hi: "रसायन विज्ञान",
                    icon: "flask",
                    chapters: [
                        "Solutions",
                        "Electrochemistry",
                        "Chemical Kinetics",
                        "d and f Block Elements",
                        "Coordination Compounds",
                        "Haloalkanes and Haloarenes",
                        "Alcohols Phenols and Ethers",
                        "Aldehydes Ketones and Carboxylic Acids",
                        "Amines",
                        "Biomolecules",
                        "Polymers",
                        "Chemistry in Everyday Life"
                    ]
                },

                {
                    id: "biology",
                    name: "Biology",
                    hi: "जीव विज्ञान",
                    icon: "dna",
                    chapters: [
                        "Reproduction",
                        "Sexual Reproduction in Flowering Plants",
                        "Human Reproduction",
                        "Reproductive Health",
                        "Principles of Inheritance",
                        "Molecular Basis of Inheritance",
                        "Evolution",
                        "Human Health and Disease",
                        "Strategies for Enhancement in Food Production",
                        "Microbes in Human Welfare",
                        "Biotechnology Principles",
                        "Biotechnology Applications",
                        "Organisms and Populations",
                        "Ecosystem",
                        "Biodiversity and Conservation"
                    ]
                }

            ]

        }

    }

};


/* ============================================================
   06. QUESTION BANK
============================================================ */

const questionBank = [

    {
        id: "pet-history-001",
        exam: "pet",
        subject: "history",
        topic: "Modern India",
        difficulty: "easy",

        question: {
            en: "The Indian National Congress was founded in which year?",
            hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?"
        },

        options: {
            en: ["1885", "1905", "1919", "1942"],
            hi: ["1885", "1905", "1919", "1942"]
        },

        answer: 0,

        explanation: {
            en: "The Indian National Congress was founded in 1885.",
            hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना 1885 में हुई थी।"
        }
    },


    {
        id: "pet-polity-001",
        exam: "pet",
        subject: "polity",
        topic: "Constitution",
        difficulty: "easy",

        question: {
            en: "Which part of the Constitution contains Fundamental Rights?",
            hi: "संविधान के किस भाग में मौलिक अधिकार दिए गए हैं?"
        },

        options: {
            en: [
                "Part I",
                "Part II",
                "Part III",
                "Part IV"
            ],
            hi: [
                "भाग I",
                "भाग II",
                "भाग III",
                "भाग IV"
            ]
        },

        answer: 2,

        explanation: {
            en: "Fundamental Rights are contained in Part III of the Constitution.",
            hi: "मौलिक अधिकार संविधान के भाग III में दिए गए हैं।"
        }
    },


    {
        id: "pet-science-001",
        exam: "pet",
        subject: "science",
        topic: "Physics Basics",
        difficulty: "easy",

        question: {
            en: "What is the SI unit of force?",
            hi: "बल की SI इकाई क्या है?"
        },

        options: {
            en: ["Joule", "Newton", "Watt", "Pascal"],
            hi: ["जूल", "न्यूटन", "वाट", "पास्कल"]
        },

        answer: 1,

        explanation: {
            en: "The SI unit of force is Newton (N).",
            hi: "बल की SI इकाई न्यूटन (N) है।"
        }
    },


    {
        id: "pet-math-001",
        exam: "pet",
        subject: "math",
        topic: "Percentage",
        difficulty: "easy",

        question: {
            en: "What is 25% of 240?",
            hi: "240 का 25% कितना है?"
        },

        options: {
            en: ["40", "50", "60", "80"],
            hi: ["40", "50", "60", "80"]
        },

        answer: 2,

        explanation: {
            en: "25% of 240 = 240 × 25 / 100 = 60.",
            hi: "240 × 25 / 100 = 60, इसलिए उत्तर 60 है।"
        }
    },


    {
        id: "pet-reasoning-001",
        exam: "pet",
        subject: "reasoning",
        topic: "Series",
        difficulty: "medium",

        question: {
            en: "Find the next number: 2, 4, 8, 16, ?",
            hi: "अगली संख्या ज्ञात करें: 2, 4, 8, 16, ?"
        },

        options: {
            en: ["20", "24", "30", "32"],
            hi: ["20", "24", "30", "32"]
        },

        answer: 3,

        explanation: {
            en: "Each number is multiplied by 2. Therefore, 16 × 2 = 32.",
            hi: "हर संख्या को 2 से गुणा किया गया है। इसलिए 16 × 2 = 32।"
        }
    },


    {
        id: "pet-geography-001",
        exam: "pet",
        subject: "geography",
        topic: "Rivers and Lakes",
        difficulty: "easy",

        question: {
            en: "Which river is known as the 'Sorrow of Bihar'?",
            hi: "किस नदी को 'बिहार का शोक' कहा जाता है?"
        },

        options: {
            en: ["Ganga", "Kosi", "Yamuna", "Godavari"],
            hi: ["गंगा", "कोसी", "यमुना", "गोदावरी"]
        },

        answer: 1,

        explanation: {
            en: "The Kosi River is traditionally known as the 'Sorrow of Bihar' because of its frequent flooding.",
            hi: "कोसी नदी को बार-बार आने वाली बाढ़ के कारण 'बिहार का शोक' कहा जाता है।"
        }
    },


    {
        id: "pet-hindi-001",
        exam: "pet",
        subject: "hindi",
        topic: "Vocabulary",
        difficulty: "easy",

        question: {
            en: "Which word is a synonym of 'जल'?",
            hi: "'जल' का पर्यायवाची शब्द कौन-सा है?"
        },

        options: {
            en: ["अग्नि", "नीर", "वायु", "धरा"],
            hi: ["अग्नि", "नीर", "वायु", "धरा"]
        },

        answer: 1,

        explanation: {
            en: "'नीर' is a synonym of 'जल'.",
            hi: "'नीर' शब्द 'जल' का पर्यायवाची है।"
        }
    },


    {
        id: "upPolice-reasoning-001",
        exam: "upPolice",
        subject: "reasoning",
        topic: "Analogy",
        difficulty: "easy",

        question: {
            en: "Book is to Reading as Food is to ____.",
            hi: "Book का संबंध Reading से है, उसी प्रकार Food का संबंध किससे है?"
        },

        options: {
            en: ["Cooking", "Eating", "Buying", "Selling"],
            hi: ["पकाना", "खाना", "खरीदना", "बेचना"]
        },

        answer: 1,

        explanation: {
            en: "A book is associated with reading, while food is associated with eating.",
            hi: "Book को पढ़ा जाता है, उसी प्रकार Food को खाया जाता है।"
        }
    },


    {
        id: "cgl-english-001",
        exam: "cgl",
        subject: "english",
        topic: "Vocabulary",
        difficulty: "easy",

        question: {
            en: "Choose the word closest in meaning to 'Rapid'.",
            hi: "'Rapid' शब्द के सबसे निकट अर्थ वाला शब्द चुनिए।"
        },

        options: {
            en: ["Slow", "Quick", "Weak", "Late"],
            hi: ["Slow", "Quick", "Weak", "Late"]
        },

        answer: 1,

        explanation: {
            en: "Rapid means very quick or fast.",
            hi: "Rapid का अर्थ बहुत तेज या Quick होता है।"
        }
    },


    {
        id: "cgl-quant-001",
        exam: "cgl",
        subject: "quant",
        topic: "Percentage",
        difficulty: "medium",

        question: {
            en: "A number is increased by 20%. If the original number is 150, what is the new number?",
            hi: "किसी संख्या में 20% की वृद्धि की जाती है। यदि मूल संख्या 150 है, तो नई संख्या क्या होगी?"
        },

        options: {
            en: ["160", "170", "180", "190"],
            hi: ["160", "170", "180", "190"]
        },

        answer: 2,

        explanation: {
            en: "20% of 150 is 30. Therefore, the new number is 150 + 30 = 180.",
            hi: "150 का 20% = 30। इसलिए नई संख्या 150 + 30 = 180 होगी।"
        }
    },


    {
        id: "class10-science-001",
        exam: "school",
        class: 10,
        subject: "science",
        topic: "Chemical Reactions and Equations",
        difficulty: "easy",

        question: {
            en: "Which gas is released when a metal reacts with a dilute acid?",
            hi: "जब कोई धातु dilute acid के साथ अभिक्रिया करती है तो कौन-सी गैस निकलती है?"
        },

        options: {
            en: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
            hi: ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"]
        },

        answer: 1,

        explanation: {
            en: "Many metals react with dilute acids to release hydrogen gas.",
            hi: "कई धातुएँ dilute acids के साथ अभिक्रिया करके हाइड्रोजन गैस उत्पन्न करती हैं।"
        }
    },


    {
        id: "class11-physics-001",
        exam: "school",
        class: 11,
        stream: "pcm",
        subject: "physics",
        topic: "Kinematics",
        difficulty: "medium",

        question: {
            en: "What does the slope of a velocity-time graph represent?",
            hi: "Velocity-time graph की slope क्या दर्शाती है?"
        },

        options: {
            en: ["Distance", "Displacement", "Acceleration", "Momentum"],
            hi: ["दूरी", "विस्थापन", "त्वरण", "संवेग"]
        },

        answer: 2,

        explanation: {
            en: "The slope of a velocity-time graph gives acceleration.",
            hi: "Velocity-time graph की slope त्वरण को दर्शाती है।"
        }
    },


    {
        id: "class12-biology-001",
        exam: "school",
        class: 12,
        stream: "pcb",
        subject: "biology",
        topic: "Human Health and Disease",
        difficulty: "easy",

        question: {
            en: "Which cells are primarily responsible for producing antibodies?",
            hi: "Antibodies के निर्माण के लिए मुख्य रूप से कौन-सी कोशिकाएँ जिम्मेदार होती हैं?"
        },

        options: {
            en: [
                "Red blood cells",
                "B lymphocytes",
                "Platelets",
                "Neurons"
            ],
            hi: [
                "लाल रक्त कोशिकाएँ",
                "B lymphocytes",
                "प्लेटलेट्स",
                "न्यूरॉन्स"
            ]
        },

        answer: 1,

        explanation: {
            en: "B lymphocytes differentiate into plasma cells that produce antibodies.",
            hi: "B lymphocytes plasma cells में differentiate होकर antibodies बनाते हैं।"
        }
    }

];


/* ============================================================
   07. TOPIC CONTENT ARCHITECTURE
============================================================ */

const topicContent = {

    "pet-history-modern-india": {

        exam: "pet",
        subject: "history",
        topic: "Modern India",

        theory: {
            en: `
                <h3>Modern India — Exam Notes</h3>
                <p>
                    Modern Indian history focuses on major developments
                    from colonial expansion to the national movement.
                    For competitive examinations, chronology, important
                    organisations, acts, movements and personalities are
                    especially useful.
                </p>

                <div class="modal-section-title">Quick Concepts</div>

                <ul class="content-list">
                    <li>European expansion and British political control.</li>
                    <li>Major administrative and constitutional developments.</li>
                    <li>Rise of organised national consciousness.</li>
                    <li>Formation and development of the national movement.</li>
                    <li>Major movements, leaders and important events.</li>
                </ul>
            `,

            hi: `
                <h3>आधुनिक भारत — परीक्षा नोट्स</h3>
                <p>
                    आधुनिक भारतीय इतिहास में औपनिवेशिक विस्तार से लेकर
                    राष्ट्रीय आंदोलन तक की प्रमुख घटनाएँ शामिल होती हैं।
                    प्रतियोगी परीक्षाओं में chronology, organisations,
                    acts, movements और personalities महत्वपूर्ण हैं।
                </p>

                <div class="modal-section-title">मुख्य बिंदु</div>

                <ul class="content-list">
                    <li>यूरोपीय विस्तार और ब्रिटिश राजनीतिक नियंत्रण।</li>
                    <li>प्रमुख प्रशासनिक एवं संवैधानिक विकास।</li>
                    <li>राष्ट्रीय चेतना का विकास।</li>
                    <li>राष्ट्रीय आंदोलन का संगठनात्मक विकास।</li>
                    <li>प्रमुख आंदोलन, नेता और महत्वपूर्ण घटनाएँ।</li>
                </ul>
            `
        },

        revision: {
            en: "Remember the major events, organisations, movements and their chronology.",
            hi: "प्रमुख घटनाओं, संगठनों, आंदोलनों और उनकी chronology को याद रखें।"
        }

    },


    "pet-polity-constitution": {

        exam: "pet",
        subject: "polity",
        topic: "Constitution",

        theory: {
            en: `
                <h3>Indian Constitution — Exam Notes</h3>
                <p>
                    The Constitution is the fundamental legal framework of
                    India. Competitive-exam preparation commonly focuses on
                    its structure, rights, duties, institutions and
                    constitutional provisions.
                </p>

                <div class="modal-section-title">Important Areas</div>

                <ul class="content-list">
                    <li>Constitutional structure and Parts.</li>
                    <li>Fundamental Rights.</li>
                    <li>Directive Principles of State Policy.</li>
                    <li>Fundamental Duties.</li>
                    <li>Union and State institutions.</li>
                    <li>Judiciary and constitutional bodies.</li>
                </ul>
            `,

            hi: `
                <h3>भारतीय संविधान — परीक्षा नोट्स</h3>
                <p>
                    संविधान भारत का मूल कानूनी ढाँचा है। प्रतियोगी परीक्षाओं
                    में इसकी संरचना, अधिकार, कर्तव्य, संस्थाओं और
                    संवैधानिक प्रावधानों पर ध्यान दिया जाता है।
                </p>

                <div class="modal-section-title">महत्वपूर्ण क्षेत्र</div>

                <ul class="content-list">
                    <li>संविधान की संरचना और Parts।</li>
                    <li>मौलिक अधिकार।</li>
                    <li>राज्य के नीति-निदेशक तत्व।</li>
                    <li>मौलिक कर्तव्य।</li>
                    <li>केंद्र और राज्य की संस्थाएँ।</li>
                    <li>न्यायपालिका और संवैधानिक निकाय।</li>
                </ul>
            `
        },

        revision: {
            en: "Fundamental Rights are contained in Part III of the Constitution.",
            hi: "मौलिक अधिकार संविधान के भाग III में दिए गए हैं।"
        }

    },


    "pet-science-physics-basics": {

        exam: "pet",
        subject: "science",
        topic: "Physics Basics",

        theory: {
            en: `
                <h3>Physics Basics</h3>
                <p>
                    Physics studies matter, energy, motion and interactions.
                    Competitive questions often test units, measurements,
                    basic laws and everyday applications.
                </p>

                <div class="modal-section-title">Core Revision Areas</div>

                <ul class="content-list">
                    <li>Physical quantities and SI units.</li>
                    <li>Motion and basic mechanics.</li>
                    <li>Force and work.</li>
                    <li>Energy and power.</li>
                    <li>Heat, sound, light and electricity basics.</li>
                </ul>
            `,

            hi: `
                <h3>भौतिक विज्ञान की मूल बातें</h3>
                <p>
                    Physics में matter, energy, motion और interactions का
                    अध्ययन किया जाता है। प्रतियोगी परीक्षाओं में units,
                    measurements, basic laws और everyday applications
                    से प्रश्न पूछे जा सकते हैं।
                </p>

                <div class="modal-section-title">मुख्य Revision Areas</div>

                <ul class="content-list">
                    <li>Physical quantities और SI units।</li>
                    <li>Motion और basic mechanics।</li>
                    <li>Force और work।</li>
                    <li>Energy और power।</li>
                    <li>Heat, sound, light और electricity basics।</li>
                </ul>
            `
        },

        revision: {
            en: "Force is measured in Newton (N), work in Joule (J), and power in Watt (W).",
            hi: "बल की इकाई Newton (N), work की Joule (J) और power की Watt (W) होती है।"
        }

    }

};


/* ============================================================
   08. REVISION CARDS
============================================================ */

const revisionCards = [

    {
        title: {
            en: "Percentage",
            hi: "प्रतिशत"
        },

        text: {
            en: "Percentage means a value expressed per hundred. x% = x/100.",
            hi: "प्रतिशत का अर्थ प्रति सौ होता है। x% = x/100."
        },

        count: "Math • Quick Formula"
    },

    {
        title: {
            en: "Force",
            hi: "बल"
        },

        text: {
            en: "Newton's second law gives F = ma. SI unit of force is Newton.",
            hi: "Newton के दूसरे नियम के अनुसार F = ma। बल की SI इकाई Newton है।"
        },

        count: "Physics • Formula"
    },

    {
        title: {
            en: "Fundamental Rights",
            hi: "मौलिक अधिकार"
        },

        text: {
            en: "Fundamental Rights are provided in Part III of the Constitution.",
            hi: "मौलिक अधिकार संविधान के भाग III में दिए गए हैं।"
        },

        count: "Polity • Recall"
    },

    {
        title: {
            en: "Rapid",
            hi: "Rapid"
        },

        text: {
            en: "Rapid means quick or fast. Build vocabulary through context.",
            hi: "Rapid का अर्थ quick या fast होता है। Context के साथ vocabulary याद करें।"
        },

        count: "English • Vocabulary"
    },

    {
        title: {
            en: "DNA",
            hi: "DNA"
        },

        text: {
            en: "DNA carries hereditary information in living organisms.",
            hi: "DNA जीवों में आनुवंशिक information को carry करता है।"
        },

        count: "Biology • Recall"
    }

];


/* ============================================================
   09. DOM HELPERS
============================================================ */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);


const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));


function safeText(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value);

}


function escapeHTML(value) {

    return safeText(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function getTranslation(key) {

    return (
        translations[Devpod.state.language]?.[key] ??
        translations.en[key] ??
        key
    );

}


function localized(value) {

    if (!value) {
        return "";
    }

    if (typeof value === "string") {
        return value;
    }

    return value[Devpod.state.language] ??
        value.en ??
        Object.values(value)[0] ??
        "";
}


/* ============================================================
   10. LOCAL STORAGE
============================================================ */

function loadJSON(key, fallback) {

    try {

        const raw = localStorage.getItem(key);

        if (!raw) {
            return fallback;
        }

        return JSON.parse(raw);

    } catch (error) {

        console.warn(
            "[Devpod] Storage read failed:",
            key,
            error
        );

        return fallback;

    }

}


function saveJSON(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.warn(
            "[Devpod] Storage write failed:",
            key,
            error
        );

    }

}


function loadApplicationState() {

    const storedState =
        loadJSON(
            Devpod.storage.state,
            null
        );


    if (storedState && typeof storedState === "object") {

        Devpod.state = {
            ...Devpod.state,
            ...storedState,

            practiceQuestions: [],
            mockQuestions: [],
            mockTimer: null
        };

    }


    const bookmarks =
        loadJSON(
            Devpod.storage.bookmarks,
            []
        );


    const history =
        loadJSON(
            Devpod.storage.history,
            []
        );


    Devpod.state.bookmarks =
        Array.isArray(bookmarks)
            ? bookmarks
            : [];


    Devpod.state.testHistory =
        Array.isArray(history)
            ? history
            : [];


    const savedTheme =
        localStorage.getItem(
            Devpod.storage.theme
        );


    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {

        Devpod.state.theme = savedTheme;

    }


    const savedLanguage =
        localStorage.getItem(
            Devpod.storage.language
        );


    if (
        savedLanguage === "en" ||
        savedLanguage === "hi"
    ) {

        Devpod.state.language = savedLanguage;

    }

}


function saveApplicationState() {

    const cleanState = {
        ...Devpod.state,

        practiceQuestions: [],
        mockQuestions: [],
        mockTimer: null
    };


    saveJSON(
        Devpod.storage.state,
        cleanState
    );


    saveJSON(
        Devpod.storage.bookmarks,
        Devpod.state.bookmarks
    );


    saveJSON(
        Devpod.storage.history,
        Devpod.state.testHistory
    );


    localStorage.setItem(
        Devpod.storage.theme,
        Devpod.state.theme
    );


    localStorage.setItem(
        Devpod.storage.language,
        Devpod.state.language
    );

}


/* ============================================================
   11. TOAST SYSTEM
============================================================ */

function showToast(
    message,
    type = "info"
) {

    const container =
        $("#toastContainer");


    if (!container) {
        return;
    }


    const toast =
        document.createElement("div");


    toast.className =
        `toast ${type}`;


    const icon =
        type === "success"
            ? "✓"
            : type === "error"
                ? "!"
                : type === "warning"
                    ? "!"
                    : "i";


    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">
            ${escapeHTML(message)}
        </span>
    `;


    container.appendChild(toast);


    window.setTimeout(() => {

        toast.classList.add("hide");

        window.setTimeout(() => {
            toast.remove();
        }, 260);

    }, 2800);

}


/* ============================================================
   12. THEME
============================================================ */

function applyTheme() {

    document.documentElement
        .setAttribute(
            "data-theme",
            Devpod.state.theme
        );


    const button =
        $("#themeToggle");


    if (button) {

        const label =
            Devpod.state.theme === "dark"
                ? getTranslation("lightMode")
                : getTranslation("darkMode");


        button.setAttribute(
            "aria-label",
            label
        );

        button.setAttribute(
            "title",
            label
        );

    }

}


function toggleTheme() {

    Devpod.state.theme =
        Devpod.state.theme === "dark"
            ? "light"
            : "dark";


    applyTheme();
    saveApplicationState();

}


/* ============================================================
   13. LANGUAGE
============================================================ */

function updateTextContent() {

    $$("[data-i18n]").forEach(element => {

        const key =
            element.dataset.i18n;


        const translated =
            getTranslation(key);


        if (translated) {

            element.textContent =
                translated;

        }

    });


    $$("[data-i18n-placeholder]").forEach(element => {

        const key =
            element.dataset.i18nPlaceholder;


        const translated =
            getTranslation(key);


        if (translated) {

            element.setAttribute(
                "placeholder",
                translated
            );

        }

    });


    const languageButton =
        $("#languageToggle");


    if (languageButton) {

        languageButton.textContent =
            Devpod.state.language === "en"
                ? "हिं"
                : "EN";

    }


    applyTheme();

}


function toggleLanguage() {

    Devpod.state.language =
        Devpod.state.language === "en"
            ? "hi"
            : "en";


    updateTextContent();
    renderClassContent(
        Devpod.state.currentClass
    );

    updatePracticeSubjects();
    updateDashboard();

    saveApplicationState();

}


/* ============================================================
   14. HEADER / MOBILE NAV
============================================================ */

function setupMobileNavigation() {

    const menuButton =
        $("#menuToggle");


    const mobileNav =
        $("#mobileNav");


    if (!menuButton || !mobileNav) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            const open =
                mobileNav.classList.toggle(
                    "open"
                );


            menuButton.classList.toggle(
                "open",
                open
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    $$(".mobile-nav-link").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "open"
                );

                menuButton.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


function setupHeaderScroll() {

    const header =
        $(".site-header");


    if (!header) {
        return;
    }


    const update =
        () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 12
            );

        };


    update();


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );

}


/* ============================================================
   15. ACTIVE NAVIGATION
============================================================ */

function setupActiveNavigation() {

    const sections =
        $$("main section[id]");


    const links =
        $$(".nav-link, .mobile-nav-link");


    if (!sections.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const id =
                        entry.target.id;


                    links.forEach(link => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        link.classList.toggle(
                            "active",
                            href === `#${id}`
                        );

                    });

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ============================================================
   16. SMOOTH NAVIGATION
============================================================ */

function setupSmoothNavigation() {

    $$("a[href^='#']").forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* ============================================================
   17. REVEAL ANIMATION
============================================================ */

function setupRevealAnimations() {

    const elements =
        $$(".reveal");


    if (!elements.length) {
        return;
    }


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* ============================================================
   18. SEARCH DATABASE
============================================================ */

function createSearchIndex() {

    const index = [];


    Object.values(examsDB)
        .forEach(exam => {

            index.push({

                type: "exam",
                id: exam.id,
                title: exam.name,
                subtitle: "Competitive Exam",
                action: () =>
                    openExamModal(
                        exam.id
                    )

            });


            exam.subjects.forEach(subject => {

                index.push({

                    type: "subject",
                    id:
                        `${exam.id}-${subject.id}`,

                    title:
                        localized({
                            en: subject.name,
                            hi: subject.hi
                        }),

                    subtitle:
                        exam.name,

                    action: () =>
                        openPracticeFor(
                            exam.id,
                            subject.id
                        )

                });


                subject.topics.forEach(topic => {

                    index.push({

                        type: "topic",
                        id:
                            `${exam.id}-${subject.id}-${topic}`,

                        title: topic,

                        subtitle:
                            `${exam.name} • ${subject.name}`,

                        action: () =>
                            openTopicModal(
                                exam.id,
                                subject.id,
                                topic
                            )

                    });

                });

            });

        });


    Object.entries(classesDB)
        .forEach(([classNumber, data]) => {

            const streams =
                data.streams
                    ? Object.entries(
                        data.streams
                    )
                    : [["common", data.subjects]];


            streams.forEach(
                ([stream, subjects]) => {

                    (subjects || [])
                        .forEach(subject => {

                            index.push({

                                type: "class",
                                id:
                                    `class-${classNumber}-${stream}-${subject.id}`,

                                title:
                                    `Class ${classNumber} • ${subject.name}`,

                                subtitle:
                                    stream === "common"
                                        ? "School Learning"
                                        : `Class ${classNumber} • ${stream.toUpperCase()}`,

                                action: () =>
                                    openClassSubject(
                                        Number(classNumber),
                                        stream,
                                        subject.id
                                    )

                            });


                            subject.chapters
                                .forEach(chapter => {

                                    index.push({

                                        type: "chapter",
                                        id:
                                            `class-${classNumber}-${stream}-${subject.id}-${chapter}`,

                                        title: chapter,

                                        subtitle:
                                            `Class ${classNumber} • ${subject.name}`,

                                        action: () =>
                                            openChapterModal(
                                                Number(classNumber),
                                                stream,
                                                subject,
                                                chapter
                                            )

                                    });

                                });

                        });

                }
            );

        });


    revisionCards.forEach(
        (card, indexNumber) => {

            index.push({

                type: "revision",
                id: `revision-${indexNumber}`,

                title:
                    localized(card.title),

                subtitle:
                    "Quick Revision",

                action: () =>
                    openRevisionCard(
                        indexNumber
                    )

            });

        }
    );


    return index;

}


let searchIndex = [];


function setupSearch() {

    const input =
        $("#globalSearch");


    const results =
        $("#searchResults");


    const clearButton =
        $("#searchClear");


    if (!input || !results) {
        return;
    }


    searchIndex =
        createSearchIndex();


    input.addEventListener(
        "input",
        () => {

            const query =
                input.value
                    .trim()
                    .toLowerCase();


            Devpod.state.searchQuery =
                query;


            if (!query) {

                results.classList.remove(
                    "visible"
                );

                results.innerHTML = "";

                return;

            }


            const matches =
                searchIndex
                    .filter(item => {

                        const text =
                            [
                                item.title,
                                item.subtitle
                            ]
                            .join(" ")
                            .toLowerCase();


                        return text.includes(
                            query
                        );

                    })
                    .slice(0, 15);


            renderSearchResults(
                matches
            );

        }
    );


    input.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                clearSearch();

            }

        }
    );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            clearSearch
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(
                    ".search-box"
                )
            ) {

                results.classList.remove(
                    "visible"
                );

            }

        }
    );

}


function renderSearchResults(
    matches
) {

    const results =
        $("#searchResults");


    if (!results) {
        return;
    }


    if (!matches.length) {

        results.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    ${Icons.search}
                </div>
                <p>
                    ${escapeHTML(
                        getTranslation(
                            "noResults"
                        )
                    )}
                </p>
            </div>
        `;

        results.classList.add(
            "visible"
        );

        return;

    }


    results.innerHTML =
        matches
            .map(
                (item, index) => {

                    return `
                        <button
                            class="search-result-item"
                            type="button"
                            data-search-index="${index}"
                        >
                            <span class="search-result-icon">
                                ${getSearchIcon(item.type)}
                            </span>

                            <span class="search-result-text">
                                <strong>
                                    ${escapeHTML(item.title)}
                                </strong>

                                <small>
                                    ${escapeHTML(item.subtitle)}
                                </small>
                            </span>
                        </button>
                    `;

                }
            )
            .join("");


    results.classList.add(
        "visible"
    );


    $$(".search-result-item", results)
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset
                                .searchIndex
                        );


                    const item =
                        matches[index];


                    if (item?.action) {

                        item.action();

                    }


                    results.classList.remove(
                        "visible"
                    );

                }
            );

        });

}


function getSearchIcon(type) {

    switch (type) {

        case "exam":
            return Icons.target;

        case "subject":
            return Icons.book;

        case "topic":
            return Icons.practice;

        case "class":
            return Icons.graduation;

        case "chapter":
            return Icons.book;

        case "revision":
            return Icons.history;

        default:
            return Icons.search;

    }

}


function clearSearch() {

    const input =
        $("#globalSearch");


    const results =
        $("#searchResults");


    if (input) {
        input.value = "";
    }


    if (results) {

        results.innerHTML = "";

        results.classList.remove(
            "visible"
        );

    }


    Devpod.state.searchQuery = "";

}


/* ============================================================
   19. EXAM MODALS
============================================================ */

function setupExamButtons() {

    $$("[data-exam]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const examID =
                        button.dataset.exam;


                    openExamModal(
                        examID
                    );

                }
            );

        }
    );

}


function openExamModal(examID) {

    const exam =
        examsDB[examID];


    if (!exam) {
        return;
    }


    Devpod.state.currentExam =
        examID;


    const subjects =
        exam.subjects;


    openModal({

        kicker: "EXAM LEARNING PATH",

        title: exam.name,

        content: `

            <p class="modal-intro">
                ${escapeHTML(
                    exam.description
                )}
            </p>

            <div class="modal-section-title">
                Subjects
            </div>

            <div class="modal-subject-grid">

                ${subjects
                    .map(subject => `

                        <button
                            type="button"
                            class="modal-subject"
                            data-exam-subject="${examID}"
                            data-subject="${subject.id}"
                        >

                            <span>
                                <strong>
                                    ${escapeHTML(
                                        Devpod.state.language === "hi"
                                            ? subject.hi
                                            : subject.name
                                    )}
                                </strong>

                                <small>
                                    ${subject.topics.length}
                                    topics
                                </small>
                            </span>

                            <span>
                                ${Icons.arrow}
                            </span>

                        </button>

                    `)
                    .join("")}

            </div>

            <div class="coverage-panel">

                <div class="coverage-header">

                    <strong>
                        Content coverage
                    </strong>

                    <span
                        class="coverage-status"
                        id="modalCoverageStatus"
                    >
                        Checking
                    </span>

                </div>

                <div class="coverage-bar">
                    <span
                        id="modalCoverageBar"
                    ></span>
                </div>

            </div>

        `

    });


    $$("[data-exam-subject]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openPracticeFor(
                        button.dataset.examSubject,
                        button.dataset.subject
                    );

                }
            );

        });


    updateModalCoverage(
        examID
    );

}


function updateModalCoverage(examID) {

    const exam =
        examsDB[examID];


    if (!exam) {
        return;
    }


    let totalTopics = 0;
    let coveredTopics = 0;


    exam.subjects.forEach(subject => {

        subject.topics.forEach(topic => {

            totalTopics++;


            if (
                findTopicContent(
                    examID,
                    subject.id,
                    topic
                )
            ) {

                coveredTopics++;

            }

        });

    });


    const percentage =
        totalTopics
            ? Math.round(
                coveredTopics /
                totalTopics *
                100
            )
            : 0;


    const bar =
        $("#modalCoverageBar");


    const status =
        $("#modalCoverageStatus");


    if (bar) {

        window.setTimeout(() => {

            bar.style.width =
                `${percentage}%`;

        }, 50);

    }


    if (status) {

        status.textContent =
            `${percentage}% mapped`;

    }

}


/* ============================================================
   20. TOPIC CONTENT
============================================================ */

function topicKey(
    examID,
    subjectID,
    topic
) {

    return [
        examID,
        subjectID,
        topic
    ]
        .join("-")
        .toLowerCase()
        .replace(
            /[^a-z0-9]+/g,
            "-"
        )
        .replace(
            /^-|-$/g,
            ""
        );

}


function findTopicContent(
    examID,
    subjectID,
    topic
) {

    const key =
        topicKey(
            examID,
            subjectID,
            topic
        );


    if (topicContent[key]) {
        return topicContent[key];
    }


    const question =
        questionBank.find(
            item =>
                item.exam === examID &&
                item.subject === subjectID &&
                item.topic === topic
        );


    if (question) {

        return {

            exam: examID,
            subject: subjectID,
            topic,

            theory: {

                en: `
                    <h3>${escapeHTML(topic)}</h3>
                    <p>
                        This topic is available in the
                        practice bank. Start practice to
                        learn through worked questions.
                    </p>
                `,

                hi: `
                    <h3>${escapeHTML(topic)}</h3>
                    <p>
                        यह topic practice bank में उपलब्ध है।
                        Worked questions के माध्यम से अभ्यास करें।
                    </p>
                `

            },

            revision: {
                en:
                    question.explanation.en,
                hi:
                    question.explanation.hi
            }

        };

    }


    return null;

}


function openTopicModal(
    examID,
    subjectID,
    topic
) {

    const content =
        findTopicContent(
            examID,
            subjectID,
            topic
        );


    const exam =
        examsDB[examID];


    const subject =
        exam?.subjects.find(
            item =>
                item.id === subjectID
        );


    const displayTopic =
        localized({
            en: topic,
            hi: topic
        });


    if (!content) {

        openModal({

            kicker: "TOPIC",

            title: topic,

            content: `

                <div class="empty-state">

                    <div class="empty-icon">
                        ${Icons.book}
                    </div>

                    <p>
                        Detailed theory content is not
                        available for this topic yet.
                    </p>

                </div>

                <div class="modal-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="topicPracticeButton"
                    >
                        ${escapeHTML(
                            getTranslation(
                                "startPractice"
                            )
                        )}
                    </button>

                </div>

            `

        });


        const button =
            $("#topicPracticeButton");


        if (button) {

            button.addEventListener(
                "click",
                () =>
                    openPracticeFor(
                        examID,
                        subjectID
                    )
            );

        }


        return;

    }


    openModal({

        kicker:
            `${exam?.name || ""} • ${subject?.name || ""}`,

        title: displayTopic,

        content: `

            <div class="topic-learning">

                <div class="topic-theory">

                    ${localized(
                        content.theory
                    )}

                </div>

                <div class="modal-section-title">
                    Quick Revision
                </div>

                <div class="question-explanation">
                    ${escapeHTML(
                        localized(
                            content.revision
                        )
                    )}
                </div>

                <div class="modal-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="topicPracticeButton"
                    >
                        ${escapeHTML(
                            getTranslation(
                                "startPractice"
                            )
                        )}
                    </button>

                    <button
                        type="button"
                        class="btn btn-secondary"
                        id="topicBookmarkButton"
                    >
                        ${escapeHTML(
                            getTranslation(
                                "bookmarkTitle"
                            )
                        )}
                    </button>

                </div>

            </div>

        `

    });


    const practiceButton =
        $("#topicPracticeButton");


    if (practiceButton) {

        practiceButton.addEventListener(
            "click",
            () =>
                openPracticeFor(
                    examID,
                    subjectID,
                    topic
                )
        );

    }


    const bookmarkButton =
        $("#topicBookmarkButton");


    if (bookmarkButton) {

        bookmarkButton.addEventListener(
            "click",
            () => {

                toggleBookmark({
                    type: "topic",
                    exam: examID,
                    subject: subjectID,
                    topic
                });

                updateDashboard();

            }
        );

    }

}


/* ============================================================
   21. CLASSES
============================================================ */

function setupClassTabs() {

    $$(".class-tab").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const classNumber =
                    Number(
                        button.dataset.class
                    );


                Devpod.state.currentClass =
                    classNumber;


                $$(".class-tab")
                    .forEach(tab => {

                        tab.classList.toggle(
                            "active",
                            tab === button
                        );

                    });


                renderClassContent(
                    classNumber
                );


                saveApplicationState();

            }
        );

    });


    $$(".medium-button").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const medium =
                    button.dataset.medium;


                Devpod.state.currentMedium =
                    medium;


                $$(".medium-button")
                    .forEach(item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );

                    });


                renderClassContent(
                    Devpod.state.currentClass
                );


                saveApplicationState();

            }
        );

    });

}


function getClassSubjects(
    classNumber
) {

    const data =
        classesDB[classNumber];


    if (!data) {
        return [];
    }


    if (!data.streams) {

        return data.subjects || [];

    }


    const stream =
        Devpod.state.currentMedium;


    return [
        ...(data.streams.common || []),
        ...(data.streams[stream] || [])
    ];

}


function renderClassContent(
    classNumber
) {

    const container =
        $("#classContent");


    if (!container) {
        return;
    }


    const data =
        classesDB[classNumber];


    if (!data) {

        container.innerHTML = `
            <div class="class-placeholder">
                <div class="placeholder-icon">
                    ${Icons.book}
                </div>
                <h3>Class not found</h3>
            </div>
        `;

        return;

    }


    const subjects =
        getClassSubjects(
            classNumber
        );


    const streamLabel =
        data.streams
            ? Devpod.state.currentMedium
                .toUpperCase()
            : "GENERAL";


    container.innerHTML = `

        <div class="class-topic-header">

            <div>

                <h3>
                    ${escapeHTML(
                        data.title
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        streamLabel
                    )}
                    •
                    ${subjects.length}
                    subjects
                </p>

            </div>

            <span class="dashboard-badge">
                ${Devpod.state.language === "hi"
                    ? "विषयवार"
                    : "Subject-wise"}
            </span>

        </div>

        <div class="class-subject-grid">

            ${subjects
                .map(subject => `

                    <button
                        type="button"
                        class="class-subject-card"
                        data-class-subject="${classNumber}"
                        data-stream="${data.streams ? streamLabel.toLowerCase() : "common"}"
                        data-subject="${subject.id}"
                    >

                        <span
                            class="class-subject-icon"
                        >
                            ${getSubjectIcon(
                                subject.icon
                            )}
                        </span>

                        <strong>
                            ${escapeHTML(
                                Devpod.state.language === "hi"
                                    ? subject.hi
                                    : subject.name
                            )}
                        </strong>

                        <small>
                            ${subject.chapters.length}
                            chapters
                        </small>

                    </button>

                `)
                .join("")}

        </div>

    `;


    $$("[data-class-subject]", container)
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openClassSubject(
                        Number(
                            button.dataset
                                .classSubject
                        ),
                        button.dataset.stream,
                        button.dataset.subject
                    );

                }
            );

        });

}


function openClassSubject(
    classNumber,
    stream,
    subjectID
) {

    const data =
        classesDB[classNumber];


    if (!data) {
        return;
    }


    let subjects = [];


    if (data.streams) {

        subjects = [
            ...(data.streams.common || []),
            ...(data.streams[stream] || [])
        ];

    } else {

        subjects =
            data.subjects || [];

    }


    const subject =
        subjects.find(
            item =>
                item.id === subjectID
        );


    if (!subject) {
        return;
    }


    openModal({

        kicker:
            `CLASS ${classNumber} • ${stream.toUpperCase()}`,

        title:
            Devpod.state.language === "hi"
                ? subject.hi
                : subject.name,

        content: `

            <p class="modal-intro">
                ${subject.chapters.length}
                chapters available in this learning path.
            </p>

            <div class="modal-section-title">
                Chapters
            </div>

            <div class="modal-subject-grid">

                ${subject.chapters
                    .map(
                        chapter => `

                            <button
                                type="button"
                                class="modal-subject"
                                data-chapter="${escapeHTML(
                                    chapter
                                )}"
                            >

                                <span>
                                    <strong>
                                        ${escapeHTML(
                                            chapter
                                        )}
                                    </strong>

                                    <small>
                                        Theory • Practice • Revision
                                    </small>
                                </span>

                                <span>
                                    ${Icons.arrow}
                                </span>

                            </button>

                        `
                    )
                    .join("")}

            </div>

        `

    });


    $$("[data-chapter]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openChapterModal(
                        classNumber,
                        stream,
                        subject,
                        button.dataset.chapter
                    );

                }
            );

        });

}


function openChapterModal(
    classNumber,
    stream,
    subject,
    chapter
) {

    openModal({

        kicker:
            `CLASS ${classNumber} • ${subject.name}`,

        title: chapter,

        content: `

            <div class="topic-learning">

                <div class="question-explanation">

                    <strong>
                        ${escapeHTML(
                            chapter
                        )}
                    </strong>

                    <p style="margin-top:8px;">
                        This chapter is structured for
                        theory, practice and quick revision.
                        Chapter-specific question sets can
                        be expanded as the content bank grows.
                    </p>

                </div>

                <div class="modal-actions">

                    <button
                        type="button"
                        class="btn btn-primary"
                        id="chapterPractice"
                    >
                        ${escapeHTML(
                            getTranslation(
                                "startPractice"
                            )
                        )}
                    </button>

                    <button
                        type="button"
                        class="btn btn-secondary"
                        id="chapterBookmark"
                    >
                        ${escapeHTML(
                            getTranslation(
                                "bookmarkTitle"
                            )
                        )}
                    </button>

                </div>

            </div>

        `

    });


    $("#chapterPractice")
        ?.addEventListener(
            "click",
            () => {

                openSchoolPractice(
                    classNumber,
                    stream,
                    subject.id,
                    chapter
                );

            }
        );


    $("#chapterBookmark")
        ?.addEventListener(
            "click",
            () => {

                toggleBookmark({

                    type: "chapter",

                    classNumber,

                    stream,

                    subject:
                        subject.id,

                    chapter

                });


                updateDashboard();

            }
        );

}


/* ============================================================
   22. PRACTICE FILTERS
============================================================ */

function setupPracticeFilters() {

    const examSelect =
        $("#practiceExam");


    const subjectSelect =
        $("#practiceSubject");


    const difficultySelect =
        $("#practiceDifficulty");


    if (!examSelect) {
        return;
    }


    examSelect.addEventListener(
        "change",
        () => {

            Devpod.state.currentExam =
                examSelect.value;


            updatePracticeSubjects();

        }
    );


    subjectSelect?.addEventListener(
        "change",
        () => {

            Devpod.state.currentSubject =
                subjectSelect.value;

        }
    );


    difficultySelect?.addEventListener(
        "change",
        () => {

            Devpod.state.currentDifficulty =
                difficultySelect.value;

        }
    );


    $("#startPractice")
        ?.addEventListener(
            "click",
            () => {

                startPracticeSession();

            }
        );


    $("#browseTopics")
        ?.addEventListener(
            "click",
            () => {

                browsePracticeTopics();

            }
        );


    updatePracticeSubjects();

}


function updatePracticeSubjects() {

    const select =
        $("#practiceSubject");


    if (!select) {
        return;
    }


    const exam =
        examsDB[
            Devpod.state.currentExam
        ];


    if (!exam) {

        select.innerHTML =
            `<option value="all">All Subjects</option>`;

        return;

    }


    select.innerHTML = `

        <option value="all">
            ${Devpod.state.language === "hi"
                ? "सभी विषय"
                : "All Subjects"}
        </option>

        ${exam.subjects
            .map(subject => `

                <option value="${subject.id}">
                    ${escapeHTML(
                        Devpod.state.language === "hi"
                            ? subject.hi
                            : subject.name
                    )}
                </option>

            `)
            .join("")}

    `;


    select.value =
        Devpod.state.currentSubject === "all"
            ? "all"
            : Devpod.state.currentSubject;

}


function getFilteredQuestions(
    filters = {}
) {

    const exam =
        filters.exam ??
        Devpod.state.currentExam;


    const subject =
        filters.subject ??
        Devpod.state.currentSubject;


    const difficulty =
        filters.difficulty ??
        Devpod.state.currentDifficulty;


    const topic =
        filters.topic ??
        null;


    return questionBank.filter(question => {

        if (
            exam !== "all" &&
            question.exam !== exam
        ) {
            return false;
        }


        if (
            subject !== "all" &&
            question.subject !== subject
        ) {
            return false;
        }


        if (
            difficulty !== "all" &&
            question.difficulty !== difficulty
        ) {
            return false;
        }


        if (
            topic &&
            question.topic !== topic
        ) {
            return false;
        }


        return true;

    });

}


function openPracticeFor(
    examID,
    subjectID = "all",
    topic = null
) {

    closeModal();


    Devpod.state.currentExam =
        examID;


    Devpod.state.currentSubject =
        subjectID;


    window.setTimeout(
        () => {

            startPracticeSession({
                exam: examID,
                subject: subjectID,
                topic
            });

        },
        120
    );

}


function openSchoolPractice(
    classNumber,
    stream,
    subject,
    chapter
) {

    const questions =
        questionBank.filter(
            question =>
                question.exam === "school" &&
                question.class === classNumber &&
                question.stream === stream &&
                question.subject === subject &&
                question.topic === chapter
        );


    if (!questions.length) {

        showToast(
            "Chapter-specific practice questions are being expanded.",
            "warning"
        );

        return;

    }


    startQuestionSession(
        questions,
        {
            title:
                `Class ${classNumber} • ${chapter}`
        }
    );

}


function browsePracticeTopics() {

    const exam =
        examsDB[
            Devpod.state.currentExam
        ];


    if (!exam) {
        return;
    }


    openModal({

        kicker: "TOPIC BROWSER",

        title: exam.name,

        content: `

            <p class="modal-intro">
                Select a subject to browse its available topics.
            </p>

            <div class="modal-subject-grid">

                ${exam.subjects
                    .map(subject => `

                        <button
                            type="button"
                            class="modal-subject"
                            data-browse-subject="${subject.id}"
                        >

                            <span>

                                <strong>
                                    ${escapeHTML(
                                        Devpod.state.language === "hi"
                                            ? subject.hi
                                            : subject.name
                                    )}
                                </strong>

                                <small>
                                    ${subject.topics.length}
                                    topics
                                </small>

                            </span>

                            <span>
                                ${Icons.arrow}
                            </span>

                        </button>

                    `)
                    .join("")}

            </div>

        `

    });


    $$("[data-browse-subject]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const subjectID =
                        button.dataset
                            .browseSubject;


                    const subject =
                        exam.subjects.find(
                            item =>
                                item.id === subjectID
                        );


                    if (!subject) {
                        return;
                    }


                    openModal({

                        kicker:
                            `${exam.name} • ${subject.name}`,

                        title:
                            Devpod.state.language === "hi"
                                ? subject.hi
                                : subject.name,

                        content: `

                            <div class="modal-subject-grid">

                                ${subject.topics
                                    .map(topic => `

                                        <button
                                            type="button"
                                            class="modal-subject"
                                            data-browse-topic="${escapeHTML(
                                                topic
                                            )}"
                                        >

                                            <span>
                                                <strong>
                                                    ${escapeHTML(
                                                        topic
                                                    )}
                                                </strong>

                                                <small>
                                                    Theory • Practice • Revision
                                                </small>
                                            </span>

                                            <span>
                                                ${Icons.arrow}
                                            </span>

                                        </button>

                                    `)
                                    .join("")}

                            </div>

                        `

                    });


                    $$("[data-browse-topic]")
                        .forEach(topicButton => {

                            topicButton
                                .addEventListener(
                                    "click",
                                    () => {

                                        openTopicModal(
                                            exam.id,
                                            subject.id,
                                            topicButton.dataset
                                                .browseTopic
                                        );

                                    }
                                );

                        });

                }
            );

        });

}


/* ============================================================
   23. PRACTICE SESSION
============================================================ */

function startPracticeSession(
    customFilters = {}
) {

    const count =
        Number(
            $("#practiceCount")?.value ||
            10
        );


    let questions =
        getFilteredQuestions(
            customFilters
        );


    if (!questions.length) {

        showToast(
            "No questions are available for these filters yet.",
            "warning"
        );

        return;

    }


    questions =
        shuffle(
            [...questions]
        )
        .slice(
            0,
            Math.min(
                count,
                questions.length
            )
        );


    startQuestionSession(
        questions,
        {
            title:
                examsDB[
                    customFilters.exam ??
                    Devpod.state.currentExam
                ]?.name ||
                "Practice Session"
        }
    );

}


function startQuestionSession(
    questions,
    meta = {}
) {

    Devpod.state.practiceQuestions =
        questions;


    Devpod.state.currentQuestionIndex =
        0;


    Devpod.state.practiceScore =
        0;


    Devpod.state.practiceAnswered =
        false;


    renderPracticeQuestion(
        meta.title ||
        "Practice Session"
    );

}


function renderPracticeQuestion(
    title
) {

    const questions =
        Devpod.state.practiceQuestions;


    const index =
        Devpod.state.currentQuestionIndex;


    const question =
        questions[index];


    if (!question) {

        finishPracticeSession(
            title
        );

        return;

    }


    const percentage =
        Math.round(
            index /
            questions.length *
            100
        );


    openModal({

        kicker:
            `${escapeHTML(title)} • Practice`,

        title:
            `Question ${index + 1} of ${questions.length}`,

        content: `

            <div class="test-header">

                <div class="test-progress">
                    <span
                        style="width:${percentage}%"
                    ></span>
                </div>

                <span class="dashboard-badge">
                    ${escapeHTML(
                        question.difficulty
                    )}
                </span>

            </div>

            <div class="modal-question">

                <div class="question-meta">

                    <span class="question-number">
                        ${escapeHTML(
                            question.topic
                        )}
                    </span>

                    <span class="question-difficulty">
                        ${escapeHTML(
                            question.difficulty
                        )}
                    </span>

                </div>

                <div class="question-text">
                    ${escapeHTML(
                        localized(
                            question.question
                        )
                    )}
                </div>

                <div class="question-options">

                    ${question.options[
                        Devpod.state.language
                    ]
                        .map(
                            (option, optionIndex) => `

                                <button
                                    type="button"
                                    class="question-option"
                                    data-option-index="${optionIndex}"
                                >
                                    ${escapeHTML(
                                        option
                                    )}
                                </button>

                            `
                        )
                        .join("")}

                </div>

                <div
                    id="practiceExplanation"
                    class="question-explanation"
                    hidden
                ></div>

            </div>

            <div class="test-navigation">

                <span class="question-number">
                    ${escapeHTML(
                        question.subject
                    )}
                </span>

                <button
                    type="button"
                    class="btn btn-primary"
                    id="nextPractice"
                    disabled
                >
                    ${index === questions.length - 1
                        ? "Finish"
                        : "Next"}
                </button>

            </div>

        `

    });


    $$(".question-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    answerPracticeQuestion(
                        Number(
                            button.dataset
                                .optionIndex
                        ),
                        question
                    );

                }
            );

        });


    $("#nextPractice")
        ?.addEventListener(
            "click",
            () => {

                Devpod.state.currentQuestionIndex++;

                renderPracticeQuestion(
                    title
                );

            }
        );

}


function answerPracticeQuestion(
    selectedIndex,
    question
) {

    if (
        Devpod.state.practiceAnswered
    ) {
        return;
    }


    Devpod.state.practiceAnswered =
        true;


    const options =
        $$(".question-option");


    options.forEach(
        (button, index) => {

            button.disabled = true;


            if (
                index === question.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index === selectedIndex &&
                selectedIndex !== question.answer
            ) {

                button.classList.add(
                    "incorrect"
                );

            }

        }
    );


    const correct =
        selectedIndex === question.answer;


    if (correct) {

        Devpod.state.practiceScore++;

        Devpod.state.correctAnswers++;

        showToast(
            "Correct answer!",
            "success"
        );

    } else {

        showToast(
            "Answer checked. Review the explanation.",
            "warning"
        );

    }


    Devpod.state.questionsSolved++;

    updateStreak();


    const explanation =
        $("#practiceExplanation");


    if (explanation) {

        explanation.hidden = false;

        explanation.innerHTML = `
            <strong>
                ${correct
                    ? "Correct"
                    : "Explanation"}
            </strong>

            <p style="margin-top:6px;">
                ${escapeHTML(
                    localized(
                        question.explanation
                    )
                )}
            </p>
        `;

    }


    const next =
        $("#nextPractice");


    if (next) {
        next.disabled = false;
    }


    saveApplicationState();
    updateDashboard();

}


function finishPracticeSession(
    title
) {

    const total =
        Devpod.state.practiceQuestions.length;


    const score =
        Devpod.state.practiceScore;


    const accuracy =
        total
            ? Math.round(
                score /
                total *
                100
            )
            : 0;


    openModal({

        kicker: "PRACTICE COMPLETE",

        title: "Session Complete",

        content: `

            <div class="large-progress">

                <div
                    class="large-progress-ring"
                    style="
                        background:
                        conic-gradient(
                            var(--primary)
                            ${accuracy * 3.6}deg,
                            var(--border)
                            ${accuracy * 3.6}deg
                        );
                    "
                >
                    <span>
                        ${accuracy}%
                    </span>
                </div>

                <div class="progress-summary">

                    <strong>
                        ${escapeHTML(title)}
                    </strong>

                    <p>
                        ${score}
                        correct out of
                        ${total}
                        questions.
                    </p>

                    <div class="modal-actions">

                        <button
                            type="button"
                            class="btn btn-primary"
                            id="practiceAgain"
                        >
                            Practice Again
                        </button>

                        <button
                            type="button"
                            class="btn btn-secondary"
                            id="closePracticeResult"
                        >
                            Done
                        </button>

                    </div>

                </div>

            </div>

        `

    });


    $("#practiceAgain")
        ?.addEventListener(
            "click",
            () => {

                startPracticeSession();

            }
        );


    $("#closePracticeResult")
        ?.addEventListener(
            "click",
            closeModal
        );


    saveApplicationState();
    updateDashboard();

}


/* ============================================================
   24. MOCK TESTS
============================================================ */

function setupMockTests() {

    $$("[data-mock-mode]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const mode =
                        button.dataset.mockMode;


                    openMockSetup(
                        mode
                    );

                }
            );

        });

}


function openMockSetup(
    mode = "practice"
) {

    openModal({

        kicker: "MOCK TEST SETUP",

        title:
            mode === "real"
                ? "Real Exam Mode"
                : "Practice Mode",

        content: `

            <form
                class="modal-form"
                id="mockSetupForm"
            >

                <div class="modal-form-grid">

                    <label class="modal-label">

                        Exam

                        <select
                            id="mockExam"
                        >

                            ${Object.values(
                                examsDB
                            )
                                .map(
                                    exam => `
                                        <option value="${exam.id}">
                                            ${escapeHTML(
                                                exam.name
                                            )}
                                        </option>
                                    `
                                )
                                .join("")}

                        </select>

                    </label>


                    <label class="modal-label">

                        Questions

                        <select
                            id="mockCount"
                        >

                            <option value="10">
                                10 Questions
                            </option>

                            <option value="20">
                                20 Questions
                            </option>

                            <option value="50">
                                50 Questions
                            </option>

                        </select>

                    </label>


                    <label class="modal-label">

                        Time

                        <select
                            id="mockTime"
                        >

                            <option value="10">
                                10 Minutes
                            </option>

                            <option value="30">
                                30 Minutes
                            </option>

                            <option value="60">
                                60 Minutes
                            </option>

                        </select>

                    </label>


                    <label class="modal-label">

                        Negative Marking

                        <select
                            id="mockNegative"
                        >

                            <option value="0">
                                None
                            </option>

                            <option value="0.25">
                                0.25
                            </option>

                            <option value="0.33">
                                0.33
                            </option>

                        </select>

                    </label>

                </div>


                <div class="question-explanation">

                    ${
                        mode === "real"
                            ? "Real Exam Mode uses a timer and negative-marking setting. Questions available locally determine the actual session size."
                            : "Practice Mode provides a flexible timed test using the available question bank."
                    }

                </div>


                <div class="modal-actions">

                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        Start Test
                    </button>

                    <button
                        type="button"
                        class="btn btn-secondary"
                        id="cancelMock"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        `

    });


    $("#cancelMock")
        ?.addEventListener(
            "click",
            closeModal
        );


    $("#mockSetupForm")
        ?.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const exam =
                    $("#mockExam").value;


                const count =
                    Number(
                        $("#mockCount").value
                    );


                const time =
                    Number(
                        $("#mockTime").value
                    );


                const negative =
                    Number(
                        $("#mockNegative").value
                    );


                startMockTest({
                    mode,
                    exam,
                    count,
                    time,
                    negative
                });

            }
        );

}


function startMockTest(
    config
) {

    let questions =
        getFilteredQuestions({
            exam: config.exam,
            subject: "all",
            difficulty: "all"
        });


    if (!questions.length) {

        showToast(
            "No questions are available for this exam yet.",
            "warning"
        );

        return;

    }


    questions =
        shuffle(
            [...questions]
        )
        .slice(
            0,
            Math.min(
                config.count,
                questions.length
            )
        );


    Devpod.state.mockQuestions =
        questions;


    Devpod.state.mockIndex = 0;
    Devpod.state.mockScore = 0;
    Devpod.state.mockCorrect = 0;
    Devpod.state.mockWrong = 0;
    Devpod.state.mockSkipped = 0;


    Devpod.state.mockSecondsRemaining =
        config.time * 60;


    closeModal();


    window.setTimeout(
        () => {

            renderMockQuestion(
                config
            );

            startMockTimer(
                config
            );

        },
        120
    );

}


function startMockTimer(
    config
) {

    stopMockTimer();


    Devpod.state.mockTimer =
        window.setInterval(
            () => {

                Devpod.state
                    .mockSecondsRemaining--;


                const timer =
                    $("#mockTimer");


                if (timer) {

                    timer.textContent =
                        formatTime(
                            Devpod.state
                                .mockSecondsRemaining
                        );

                }


                if (
                    Devpod.state
                        .mockSecondsRemaining <= 0
                ) {

                    stopMockTimer();

                    finishMockTest(
                        config
                    );

                }

            },
            1000
        );

}


function stopMockTimer() {

    if (
        Devpod.state.mockTimer
    ) {

        clearInterval(
            Devpod.state.mockTimer
        );

        Devpod.state.mockTimer =
            null;

    }

}


function formatTime(
    seconds
) {

    const safe =
        Math.max(
            0,
            Number(seconds) || 0
        );


    const minutes =
        Math.floor(
            safe / 60
        );


    const remaining =
        safe % 60;


    return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;

}


function renderMockQuestion(
    config
) {

    const questions =
        Devpod.state.mockQuestions;


    const index =
        Devpod.state.mockIndex;


    const question =
        questions[index];


    if (!question) {

        finishMockTest(
            config
        );

        return;

    }


    const percentage =
        Math.round(
            index /
            questions.length *
            100
        );


    openModal({

        kicker:
            config.mode === "real"
                ? "REAL EXAM MODE"
                : "PRACTICE MODE",

        title:
            `${config.exam.toUpperCase()} • ${index + 1}/${questions.length}`,

        content: `

            <div class="test-header">

                <div class="test-progress">
                    <span
                        style="width:${percentage}%"
                    ></span>
                </div>

                <span
                    class="test-timer"
                    id="mockTimer"
                >
                    ${formatTime(
                        Devpod.state
                            .mockSecondsRemaining
                    )}
                </span>

            </div>


            <div class="modal-question">

                <div class="question-meta">

                    <span class="question-number">
                        ${escapeHTML(
                            question.topic
                        )}
                    </span>

                    <span class="question-difficulty">
                        ${escapeHTML(
                            question.difficulty
                        )}
                    </span>

                </div>


                <div class="question-text">

                    ${escapeHTML(
                        localized(
                            question.question
                        )
                    )}

                </div>


                <div class="question-options">

                    ${question.options[
                        Devpod.state.language
                    ]
                        .map(
                            (option, optionIndex) => `

                                <button
                                    type="button"
                                    class="question-option"
                                    data-mock-option="${optionIndex}"
                                >
                                    ${escapeHTML(
                                        option
                                    )}
                                </button>

                            `
                        )
                        .join("")}

                </div>

            </div>


            <div class="test-navigation">

                <span class="question-number">
                    ${index + 1} / ${questions.length}
                </span>

                <button
                    type="button"
                    class="btn btn-secondary"
                    id="skipMock"
                >
                    Skip
                </button>

            </div>

        `

    });


    $$(".question-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    answerMockQuestion(
                        Number(
                            button.dataset
                                .mockOption
                        ),
                        question,
                        config
                    );

                }
            );

        });


    $("#skipMock")
        ?.addEventListener(
            "click",
            () => {

                Devpod.state.mockSkipped++;

                Devpod.state.mockIndex++;

                renderMockQuestion(
                    config
                );

            }
        );

}


function answerMockQuestion(
    selectedIndex,
    question,
    config
) {

    const buttons =
        $$(".question-option");


    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    const correct =
        selectedIndex === question.answer;


    if (correct) {

        Devpod.state.mockCorrect++;

        Devpod.state.mockScore += 1;

    } else {

        Devpod.state.mockWrong++;

        Devpod.state.mockScore -=
            config.negative;

    }


    Devpod.state.questionsSolved++;


    if (correct) {
        Devpod.state.correctAnswers++;
    }


    buttons.forEach(
        (button, index) => {

            if (
                index === question.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index === selectedIndex &&
                !correct
            ) {

                button.classList.add(
                    "incorrect"
                );

            }

        }
    );


    updateStreak();


    window.setTimeout(
        () => {

            Devpod.state.mockIndex++;

            renderMockQuestion(
                config
            );

        },
        500
    );


    saveApplicationState();

}


function finishMockTest(
    config
) {

    stopMockTimer();


    const total =
        Devpod.state.mockQuestions.length;


    const correct =
        Devpod.state.mockCorrect;


    const wrong =
        Devpod.state.mockWrong;


    const skipped =
        Devpod.state.mockSkipped;


    const percentage =
        total
            ? Math.round(
                correct /
                total *
                100
            )
            : 0;


    Devpod.state.testsCompleted++;


    const record = {

        date:
            new Date().toISOString(),

        exam:
            config.exam,

        mode:
            config.mode,

        total,

        correct,

        wrong,

        skipped,

        score:
            Number(
                Devpod.state.mockScore
                    .toFixed(2)
            ),

        accuracy:
            percentage

    };


    Devpod.state.testHistory.unshift(
        record
    );


    Devpod.state.testHistory =
        Devpod.state.testHistory
            .slice(0, 30);


    saveApplicationState();


    openModal({

        kicker: "TEST COMPLETE",

        title: "Your Result",

        content: `

            <div class="stats-grid">

                <div class="stat-card">

                    <span class="stat-icon icon-green">
                        ${Icons.check}
                    </span>

                    <div>
                        <strong>
                            ${correct}
                        </strong>
                        <span>
                            Correct
                        </span>
                    </div>

                </div>


                <div class="stat-card">

                    <span class="stat-icon icon-indigo">
                        ${Icons.chart}
                    </span>

                    <div>
                        <strong>
                            ${percentage}%
                        </strong>
                        <span>
                            Accuracy
                        </span>
                    </div>

                </div>


                <div class="stat-card">

                    <span class="stat-icon icon-orange">
                        ${Icons.close}
                    </span>

                    <div>
                        <strong>
                            ${wrong}
                        </strong>
                        <span>
                            Wrong
                        </span>
                    </div>

                </div>


                <div class="stat-card">

                    <span class="stat-icon icon-blue">
                        ${Icons.clock}
                    </span>

                    <div>
                        <strong>
                            ${skipped}
                        </strong>
                        <span>
                            Skipped
                        </span>
                    </div>

                </div>

            </div>


            <div class="question-explanation">

                <strong>
                    Score: ${Number(
                        Devpod.state.mockScore
                    ).toFixed(2)}
                </strong>

                <p style="margin-top:6px;">
                    This result has been saved locally
                    in your browser.
                </p>

            </div>


            <div class="modal-actions">

                <button
                    type="button"
                    class="btn btn-primary"
                    id="finishResult"
                >
                    Done
                </button>

            </div>

        `

    });


    $("#finishResult")
        ?.addEventListener(
            "click",
            () => {

                closeModal();
                updateDashboard();

            }
        );


    updateDashboard();

}


/* ============================================================
   25. REVISION
============================================================ */

let currentRevisionIndex = 0;


function setupRevision() {

    const nextButton =
        $("#nextRevision");


    const openButton =
        $("#openRevision");


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                currentRevisionIndex =
                    (
                        currentRevisionIndex + 1
                    ) %
                    revisionCards.length;


                renderRevisionCard();

            }
        );

    }


    if (openButton) {

        openButton.addEventListener(
            "click",
            () => {

                openRevisionCard(
                    currentRevisionIndex
                );

            }
        );

    }


    renderRevisionCard();

}


function renderRevisionCard() {

    const card =
        revisionCards[
            currentRevisionIndex
        ];


    if (!card) {
        return;
    }


    const title =
        $("#revisionCardTitle");


    const text =
        $("#revisionCardText");


    const count =
        $("#revisionCardCount");


    if (title) {

        title.textContent =
            localized(
                card.title
            );

    }


    if (text) {

        text.textContent =
            localized(
                card.text
            );

    }


    if (count) {

        count.textContent =
            card.count;

    }

}


function openRevisionCard(
    index
) {

    const card =
        revisionCards[index];


    if (!card) {
        return;
    }


    openModal({

        kicker: "QUICK REVISION",

        title:
            localized(
                card.title
            ),

        content: `

            <div class="revision-card"
                style="margin:auto; box-shadow:none;">

                <span class="revision-card-label">
                    QUICK RECALL
                </span>

                <h3>
                    ${escapeHTML(
                        localized(
                            card.title
                        )
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        localized(
                            card.text
                        )
                    )}
                </p>

            </div>

        `

    });

}


/* ============================================================
   26. BOOKMARKS
============================================================ */

function bookmarkID(
    item
) {

    return JSON.stringify(
        item
    );

}


function toggleBookmark(
    item
) {

    const id =
        bookmarkID(item);


    const index =
        Devpod.state.bookmarks
            .findIndex(
                bookmark =>
                    bookmarkID(
                        bookmark
                    ) === id
            );


    if (index >= 0) {

        Devpod.state.bookmarks
            .splice(
                index,
                1
            );


        showToast(
            "Bookmark removed.",
            "info"
        );

    } else {

        Devpod.state.bookmarks
            .push(item);


        showToast(
            "Saved to bookmarks.",
            "success"
        );

    }


    saveApplicationState();
    updateDashboard();

}


function openBookmarks() {

    const bookmarks =
        Devpod.state.bookmarks;


    openModal({

        kicker: "YOUR LIBRARY",

        title:
            "Bookmarks",

        content:

            bookmarks.length

                ? `

                    <div>

                        ${bookmarks
                            .map(
                                (item, index) => `

                                    <div class="bookmark-row">

                                        <span class="bookmark-icon">
                                            ${Icons.bookmark}
                                        </span>

                                        <span class="bookmark-info">

                                            <strong>
                                                ${escapeHTML(
                                                    getBookmarkTitle(
                                                        item
                                                    )
                                                )}
                                            </strong>

                                            <small>
                                                ${escapeHTML(
                                                    getBookmarkSubtitle(
                                                        item
                                                    )
                                                )}
                                            </small>

                                        </span>

                                        <button
                                            type="button"
                                            class="bookmark-remove"
                                            data-remove-bookmark="${index}"
                                            aria-label="Remove bookmark"
                                        >
                                            ×
                                        </button>

                                    </div>

                                `
                            )
                            .join("")}

                    </div>

                `

                : `

                    <div class="empty-state">

                        <div class="empty-icon">
                            ${Icons.bookmark}
                        </div>

                        <p>
                            Your saved questions and topics
                            will appear here.
                        </p>

                    </div>

                `

    });


    $$("[data-remove-bookmark]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset
                                .removeBookmark
                        );


                    Devpod.state.bookmarks
                        .splice(
                            index,
                            1
                        );


                    saveApplicationState();

                    openBookmarks();

                    updateDashboard();

                }
            );

        });

}


function getBookmarkTitle(
    item
) {

    if (
        item.type === "topic"
    ) {

        return item.topic;

    }


    if (
        item.type === "chapter"
    ) {

        return item.chapter;

    }


    return "Saved item";

}


function getBookmarkSubtitle(
    item
) {

    if (
        item.type === "topic"
    ) {

        return (
            examsDB[
                item.exam
            ]?.name ||
            item.exam
        );

    }


    if (
        item.type === "chapter"
    ) {

        return `Class ${item.classNumber}`;

    }


    return "";

}


/* ============================================================
   27. QUICK ACCESS
============================================================ */

function setupFeatureCards() {

    $$("[data-feature]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const feature =
                        card.dataset.feature;


                    switch (feature) {

                        case "theory":

                            document
                                .querySelector(
                                    "#exams"
                                )
                                ?.scrollIntoView({
                                    behavior: "smooth"
                                });

                            break;


                        case "practice":

                            document
                                .querySelector(
                                    "#practice"
                                )
                                ?.scrollIntoView({
                                    behavior: "smooth"
                                });

                            break;


                        case "mock":

                            document
                                .querySelector(
                                    "#mock-tests"
                                )
                                ?.scrollIntoView({
                                    behavior: "smooth"
                                });

                            break;


                        case "revision":

                            document
                                .querySelector(
                                    "#revision"
                                )
                                ?.scrollIntoView({
                                    behavior: "smooth"
                                });

                            break;


                        case "bookmarks":

                            openBookmarks();

                            break;


                        case "progress":

                            document
                                .querySelector(
                                    "#progress"
                                )
                                ?.scrollIntoView({
                                    behavior: "smooth"
                                });

                            break;

                    }

                }
            );

        });

}


/* ============================================================
   28. DASHBOARD
============================================================ */

function updateDashboard() {

    const solved =
        Devpod.state.questionsSolved;


    const correct =
        Devpod.state.correctAnswers;


    const accuracy =
        solved
            ? Math.round(
                correct /
                solved *
                100
            )
            : 0;


    setText(
        "#statQuestions",
        solved
    );


    setText(
        "#statAccuracy",
        `${accuracy}%`
    );


    setText(
        "#statStreak",
        Devpod.state.streak
    );


    setText(
        "#statTests",
        Devpod.state.testsCompleted
    );


    setText(
        "#bookmarkCount",
        Devpod.state.bookmarks.length
    );


    const progress =
        $("#overallProgressValue");


    if (progress) {

        progress.textContent =
            `${accuracy}%`;


        progress.parentElement
            ?.style.setProperty(
                "background",
                `
                    conic-gradient(
                        var(--primary)
                        ${accuracy * 3.6}deg,
                        var(--border)
                        ${accuracy * 3.6}deg
                    )
                `
            );

    }


    renderWeakAreas(
        accuracy
    );


    renderTestHistory();


    renderBookmarkPreview();

}


function setText(
    selector,
    value
) {

    const element =
        $(selector);


    if (element) {

        element.textContent =
            value;

    }

}


function renderWeakAreas(
    accuracy
) {

    const container =
        $("#weakAreas");


    if (!container) {
        return;
    }


    if (!Devpod.state.questionsSolved) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ${Icons.chart}
                </div>

                <p>
                    Start practicing to identify
                    your weaker areas.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                ${accuracy >= 70
                    ? Icons.check
                    : Icons.target}
            </div>

            <p>
                ${
                    accuracy >= 70
                        ? "Your current accuracy is healthy. Keep practicing consistently."
                        : "Keep practicing topic-wise and review explanations after incorrect answers."
                }
            </p>

        </div>

    `;

}


function renderTestHistory() {

    const container =
        $("#testHistory");


    if (!container) {
        return;
    }


    const history =
        Devpod.state.testHistory;


    if (!history.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ${Icons.history}
                </div>

                <p>
                    Completed mock tests will appear here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        history
            .slice(0, 5)
            .map(
                record => `

                    <div class="history-row">

                        <span class="history-icon">
                            ${Icons.chart}
                        </span>

                        <span class="history-info">

                            <strong>
                                ${escapeHTML(
                                    examsDB[
                                        record.exam
                                    ]?.name ||
                                    record.exam
                                )}
                            </strong>

                            <small>
                                ${record.total}
                                questions •
                                ${escapeHTML(
                                    record.mode
                                )}
                            </small>

                        </span>

                        <span class="history-score">
                            ${record.accuracy}%
                        </span>

                    </div>

                `
            )
            .join("");

}


function renderBookmarkPreview() {

    const container =
        $("#bookmarkList");


    if (!container) {
        return;
    }


    const bookmarks =
        Devpod.state.bookmarks;


    if (!bookmarks.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ${Icons.bookmark}
                </div>

                <p>
                    Save important topics and chapters
                    to see them here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        bookmarks
            .slice(-5)
            .reverse()
            .map(
                item => `

                    <div class="bookmark-row">

                        <span class="bookmark-icon">
                            ${Icons.bookmark}
                        </span>

                        <span class="bookmark-info">

                            <strong>
                                ${escapeHTML(
                                    getBookmarkTitle(
                                        item
                                    )
                                )}
                            </strong>

                            <small>
                                ${escapeHTML(
                                    getBookmarkSubtitle(
                                        item
                                    )
                                )}
                            </small>

                        </span>

                    </div>

                `
            )
            .join("");

}


function setupHistoryClear() {

    $("#clearHistory")
        ?.addEventListener(
            "click",
            () => {

                if (
                    !Devpod.state.testHistory.length
                ) {

                    showToast(
                        "There is no test history to clear.",
                        "info"
                    );

                    return;

                }


                Devpod.state.testHistory =
                    [];


                saveApplicationState();
                updateDashboard();


                showToast(
                    "Test history cleared.",
                    "success"
                );

            }
        );

}


/* ============================================================
   29. STREAK
============================================================ */

function dateKey(
    date = new Date()
) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        )
            .padStart(2, "0");


    const day =
        String(
            date.getDate()
        )
            .padStart(2, "0");


    return `${year}-${month}-${day}`;

}


function updateStreak() {

    const today =
        dateKey();


    const last =
        Devpod.state.lastStudyDate;


    if (!last) {

        Devpod.state.streak = 1;

    } else if (last !== today) {

        const lastDate =
            new Date(
                `${last}T00:00:00`
            );


        const todayDate =
            new Date(
                `${today}T00:00:00`
            );


        const difference =
            Math.round(
                (
                    todayDate -
                    lastDate
                ) /
                86400000
            );


        if (difference === 1) {

            Devpod.state.streak++;

        } else if (difference > 1) {

            Devpod.state.streak = 1;

        }

    }


    Devpod.state.lastStudyDate =
        today;


    saveApplicationState();

}


/* ============================================================
   30. MODAL SYSTEM
============================================================ */

function openModal({
    kicker = "",
    title = "",
    content = ""
} = {}) {

    const overlay =
        $("#modalOverlay");


    const kickerElement =
        $("#modalKicker");


    const titleElement =
        $("#modalTitle");


    const contentElement =
        $("#modalContent");


    if (
        !overlay ||
        !contentElement
    ) {
        return;
    }


    if (kickerElement) {

        kickerElement.textContent =
            kicker;

    }


    if (titleElement) {

        titleElement.textContent =
            title;

    }


    contentElement.innerHTML =
        content;


    overlay.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );


    overlay.setAttribute(
        "aria-hidden",
        "false"
    );


    $("#modalClose")
        ?.focus();

}


function closeModal() {

    const overlay =
        $("#modalOverlay");


    if (!overlay) {
        return;
    }


    overlay.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );


    overlay.setAttribute(
        "aria-hidden",
        "true"
    );


    stopMockTimer();

}


function setupModal() {

    $("#modalClose")
        ?.addEventListener(
            "click",
            closeModal
        );


    $("#modalOverlay")
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    event.currentTarget
                ) {

                    closeModal();

                }

            }
        );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );

}


/* ============================================================
   31. SUBJECT ICONS
============================================================ */

function getSubjectIcon(
    icon
) {

    switch (icon) {

        case "calculator":
            return Icons.calculator;

        case "flask":
            return Icons.flask;

        case "atom":
            return Icons.atom;

        case "dna":
            return Icons.dna;

        case "globe":
            return Icons.globe;

        case "shield":
            return Icons.shield;

        case "target":
            return Icons.target;

        case "history":
            return Icons.history;

        default:
            return Icons.book;

    }

}


/* ============================================================
   32. UTILITY
============================================================ */

function shuffle(
    array
) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }


    return array;

}


/* ============================================================
   33. COVERAGE CHECKER
============================================================ */

function runCoverageChecker() {

    const report = {

        exams: 0,
        subjects: 0,
        topics: 0,

        theory: 0,
        questions: 0,
        revision: 0,

        missingTheory: [],
        missingQuestions: [],
        missingRevision: []

    };


    Object.values(examsDB)
        .forEach(exam => {

            report.exams++;


            exam.subjects
                .forEach(subject => {

                    report.subjects++;


                    subject.topics
                        .forEach(topic => {

                            report.topics++;


                            const content =
                                findTopicContent(
                                    exam.id,
                                    subject.id,
                                    topic
                                );


                            if (
                                content?.theory
                            ) {

                                report.theory++;

                            } else {

                                report.missingTheory
                                    .push({
                                        exam:
                                            exam.id,
                                        subject:
                                            subject.id,
                                        topic
                                    });

                            }


                            const questions =
                                questionBank.filter(
                                    question =>
                                        question.exam === exam.id &&
                                        question.subject === subject.id &&
                                        question.topic === topic
                                );


                            if (
                                questions.length
                            ) {

                                report.questions +=
                                    questions.length;

                            } else {

                                report.missingQuestions
                                    .push({
                                        exam:
                                            exam.id,
                                        subject:
                                            subject.id,
                                        topic
                                    });

                            }


                            if (
                                content?.revision
                            ) {

                                report.revision++;

                            } else {

                                report.missingRevision
                                    .push({
                                        exam:
                                            exam.id,
                                        subject:
                                            subject.id,
                                        topic
                                    });

                            }

                        });

                });

        });


    const totalRequirements =
        report.topics * 3;


    const completedRequirements =
        report.theory +
        report.revision +
        (
            report.missingQuestions.length
                ? report.topics -
                  report.missingQuestions.length
                : report.topics
        );


    const percentage =
        totalRequirements
            ? Math.round(
                completedRequirements /
                totalRequirements *
                100
            )
            : 0;


    console.group(
        "%cDevpod Content Coverage",
        "font-weight:bold"
    );


    console.log(
        "Exams:",
        report.exams
    );


    console.log(
        "Subjects:",
        report.subjects
    );


    console.log(
        "Topics:",
        report.topics
    );


    console.log(
        "Theory available:",
        `${report.theory}/${report.topics}`
    );


    console.log(
        "Revision available:",
        `${report.revision}/${report.topics}`
    );


    console.log(
        "Questions:",
        report.questions
    );


    console.log(
        "Approximate structural coverage:",
        `${percentage}%`
    );


    if (
        report.missingTheory.length
    ) {

        console.warn(
            "[Devpod Coverage] Missing theory:",
            report.missingTheory
        );

    }


    if (
        report.missingQuestions.length
    ) {

        console.warn(
            "[Devpod Coverage] Missing question sets:",
            report.missingQuestions
        );

    }


    if (
        report.missingRevision.length
    ) {

        console.warn(
            "[Devpod Coverage] Missing revision:",
            report.missingRevision
        );

    }


    console.groupEnd();


    return report;

}


/* ============================================================
   34. ERROR HANDLING
============================================================ */

window.addEventListener(
    "error",
    event => {

        console.error(
            "[Devpod] Runtime error:",
            event.error || event.message
        );

    }
);


window.addEventListener(
    "unhandledrejection",
    event => {

        console.error(
            "[Devpod] Promise error:",
            event.reason
        );

    }
);


/* ============================================================
   35. INITIALIZATION
============================================================ */

function initializeDevpod() {

    loadApplicationState();


    applyTheme();


    updateTextContent();


    setupHeaderScroll();
    setupMobileNavigation();
    setupActiveNavigation();
    setupSmoothNavigation();

    setupSearch();

    setupExamButtons();

    setupClassTabs();

    setupPracticeFilters();

    setupMockTests();

    setupRevision();

    setupFeatureCards();

    setupHistoryClear();

    setupModal();

    setupThemeAndLanguageButtons();

    renderClassContent(
        Devpod.state.currentClass
    );

    updatePracticeSubjects();

    updateDashboard();

    setupRevealAnimations();


    runCoverageChecker();


    window.setTimeout(
        () => {

            document
                .querySelector(
                    ".page-loader"
                )
                ?.classList.add(
                    "loaded"
                );

        },
        450
    );

}


function setupThemeAndLanguageButtons() {

    $("#themeToggle")
        ?.addEventListener(
            "click",
            toggleTheme
        );


    $("#languageToggle")
        ?.addEventListener(
            "click",
            toggleLanguage
        );

}


/* ============================================================
   36. DOM READY
============================================================ */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeDevpod
    );

} else {

    initializeDevpod();

}