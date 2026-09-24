 /* =========================================================
   DEVPOD BY ANKIT PAL
   CORE JAVASCRIPT
   Pure JavaScript - No Framework
========================================================= */

"use strict";


/* =========================================================
   GLOBAL APPLICATION STATE
========================================================= */

const Devpod = {

    version: "1.0.0",

    state: {

        theme: "light",

        language: "english",

        medium: "hindi",

        currentClass: "9",

        currentExam: null,

        practiceMode: "practice",

        bookmarks: [],

        testHistory: [],

        questionsSolved: 0,

        correctAnswers: 0,

        testsCompleted: 0,

        streak: 0,

        lastStudyDate: null

    }

};


/* =========================================================
   STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {

    STATE: "devpod_state",

    THEME: "devpod_theme",

    LANGUAGE: "devpod_language",

    BOOKMARKS: "devpod_bookmarks",

    HISTORY: "devpod_test_history"

};


/* =========================================================
   QUESTION DATABASE FOUNDATION
=========================================================

   NOTE:
   Production question bank can be expanded here.
   Every question follows the same structure.

========================================================= */

const QUESTION_BANK = [

    {

        id: "pet-gk-001",

        exam: "upsssc-pet",

        subject: "gk",

        topic: "Uttar Pradesh",

        difficulty: "easy",

        question: "उत्तर प्रदेश की राजधानी क्या है?",

        questionEnglish:
            "What is the capital of Uttar Pradesh?",

        options: [
            "Kanpur",
            "Lucknow",
            "Agra",
            "Prayagraj"
        ],

        correctAnswer: 1,

        explanation:
            "लखनऊ उत्तर प्रदेश की राजधानी है।",

        explanationEnglish:
            "Lucknow is the capital of Uttar Pradesh."

    },


    {

        id: "pet-science-001",

        exam: "upsssc-pet",

        subject: "science",

        topic: "Physics",

        difficulty: "easy",

        question:
            "बल की SI इकाई क्या है?",

        questionEnglish:
            "What is the SI unit of force?",

        options: [
            "Joule",
            "Watt",
            "Newton",
            "Pascal"
        ],

        correctAnswer: 2,

        explanation:
            "बल की SI इकाई न्यूटन है।",

        explanationEnglish:
            "The SI unit of force is Newton."

    },


    {

        id: "pet-math-001",

        exam: "upsssc-pet",

        subject: "math",

        topic: "Percentage",

        difficulty: "medium",

        question:
            "200 का 25% कितना होगा?",

        questionEnglish:
            "What is 25% of 200?",

        options: [
            "25",
            "40",
            "50",
            "75"
        ],

        correctAnswer: 2,

        explanation:
            "200 × 25 / 100 = 50.",

        explanationEnglish:
            "200 × 25 / 100 = 50."

    },


    {

        id: "police-reasoning-001",

        exam: "up-police",

        subject: "reasoning",

        topic: "Series",

        difficulty: "easy",

        question:
            "2, 4, 6, 8, ? में अगली संख्या क्या होगी?",

        questionEnglish:
            "What is the next number in 2, 4, 6, 8, ?",

        options: [
            "9",
            "10",
            "11",
            "12"
        ],

        correctAnswer: 1,

        explanation:
            "प्रत्येक संख्या में 2 जोड़ा जा रहा है। इसलिए अगली संख्या 10 है।",

        explanationEnglish:
            "2 is added to each number, so the next number is 10."

    },


    {

        id: "cgl-english-001",

        exam: "ssc-cgl",

        subject: "english",

        topic: "Vocabulary",

        difficulty: "easy",

        question:
            "Choose the synonym of 'Rapid'.",

        questionEnglish:
            "Choose the synonym of 'Rapid'.",

        options: [
            "Slow",
            "Fast",
            "Weak",
            "Late"
        ],

        correctAnswer: 1,

        explanation:
            "Rapid means fast or quick.",

        explanationEnglish:
            "Rapid means fast or quick."

    }

];


/* =========================================================
   EXAM DATABASE
========================================================= */

const EXAMS = [

    {

        id: "upsssc-pet",

        name: "UPSSSC PET",

        category: "UP",

        subjects: [
            "General Awareness",
            "Hindi",
            "Reasoning",
            "Mathematics",
            "General Science",
            "History",
            "Geography",
            "Polity",
            "Current Affairs"
        ]

    },

    {

        id: "up-police",

        name: "UP Police",

        category: "UP",

        subjects: [
            "General Knowledge",
            "Hindi",
            "Reasoning",
            "Numerical Ability",
            "General Science"
        ]

    },

    {

        id: "ssc-cgl",

        name: "SSC CGL",

        category: "SSC",

        subjects: [
            "Quantitative Aptitude",
            "Reasoning",
            "English",
            "General Awareness"
        ]

    },

    {

        id: "ssc-chsl",

        name: "SSC CHSL",

        category: "SSC",

        subjects: [
            "Quantitative Aptitude",
            "Reasoning",
            "English",
            "General Awareness"
        ]

    },

    {

        id: "ssc-mts",

        name: "SSC MTS",

        category: "SSC",

        subjects: [
            "Numerical Ability",
            "Reasoning",
            "English",
            "General Awareness"
        ]

    },

    {

        id: "rrb",

        name: "Railway RRB",

        category: "Railway",

        subjects: [
            "Mathematics",
            "Reasoning",
            "General Science",
            "General Awareness"
        ]

    }

];


/* =========================================================
   CLASS DATABASE
========================================================= */

const CLASS_DATA = {

    9: {

        title: "Class 9",

        description:
            "Build strong fundamentals in Science, Mathematics, Social Science and Languages."

    },

    10: {

        title: "Class 10",

        description:
            "Complete board-focused preparation with concepts, practice and revision."

    },

    11: {

        title: "Class 11",

        description:
            "Build advanced foundations for Science, Commerce and Humanities."

    },

    12: {

        title: "Class 12",

        description:
            "Board preparation, competitive foundation and complete chapter revision."

    }

};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector =>
    Array.from(document.querySelectorAll(selector));


/* =========================================================
   STORAGE
========================================================= */

function loadState() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEYS.STATE);

        if (saved) {

            const parsed = JSON.parse(saved);

            Devpod.state = {
                ...Devpod.state,
                ...parsed
            };

        }

    } catch (error) {

        console.warn(
            "Unable to load Devpod state.",
            error
        );

    }

}


function saveState() {

    try {

        localStorage.setItem(
            STORAGE_KEYS.STATE,
            JSON.stringify(Devpod.state)
        );

    } catch (error) {

        console.warn(
            "Unable to save Devpod state.",
            error
        );

    }

}


/* =========================================================
   TOAST SYSTEM
========================================================= */

function showToast(message) {

    const container =
        $("#toastContainer");

    if (!container) return;

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.transform =
            "translateY(8px)";

        setTimeout(() => {

            toast.remove();

        }, 200);

    }, 2500);

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const savedTheme =
        localStorage.getItem(
            STORAGE_KEYS.THEME
        );

    if (savedTheme) {

        Devpod.state.theme = savedTheme;

    }

    applyTheme();

}


function applyTheme() {

    document.documentElement.dataset.theme =
        Devpod.state.theme;

    const icon =
        $("#themeIcon");

    if (icon) {

        icon.textContent =
            Devpod.state.theme === "dark"
                ? "☀"
                : "☾";

    }

}


function toggleTheme() {

    Devpod.state.theme =
        Devpod.state.theme === "dark"
            ? "light"
            : "dark";

    localStorage.setItem(
        STORAGE_KEYS.THEME,
        Devpod.state.theme
    );

    applyTheme();

    saveState();

}


/* =========================================================
   LANGUAGE
========================================================= */

const TRANSLATIONS = {

    english: {

        heroDescription:
            "Complete preparation platform for government exams and Classes 9-12 — theory, practice, mock tests, revision and progress tracking, all in one place."

    },

    hindi: {

        heroDescription:
            "सरकारी परीक्षाओं और कक्षा 9-12 की पूरी तैयारी के लिए एक संपूर्ण प्लेटफॉर्म — थ्योरी, प्रैक्टिस, मॉक टेस्ट, रिवीजन और प्रोग्रेस ट्रैकिंग एक ही जगह।"

    }

};


function initializeLanguage() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.LANGUAGE
        );

    if (saved) {

        Devpod.state.language = saved;

    }

    updateLanguageUI();

}


function toggleLanguage() {

    Devpod.state.language =
        Devpod.state.language === "english"
            ? "hindi"
            : "english";

    localStorage.setItem(
        STORAGE_KEYS.LANGUAGE,
        Devpod.state.language
    );

    updateLanguageUI();

    showToast(
        Devpod.state.language === "hindi"
            ? "Hindi mode enabled"
            : "English mode enabled"
    );

}


function updateLanguageUI() {

    const label =
        $("#languageLabel");

    if (label) {

        label.textContent =
            Devpod.state.language === "hindi"
                ? "EN"
                : "हि";

    }

    $$("[data-i18n]").forEach(element => {

        const key =
            element.dataset.i18n;

        const translation =
            TRANSLATIONS[
                Devpod.state.language
            ]?.[key];

        if (translation) {

            element.textContent =
                translation;

        }

    });

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeMobileNavigation() {

    const button =
        $("#mobileMenuButton");

    const navigation =
        $("#mobileNavigation");

    if (!button || !navigation) return;

    button.addEventListener(
        "click",
        () => {

            const open =
                navigation.classList.toggle(
                    "open"
                );

            button.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    $$(".mobile-nav-link").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "open"
                );

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

function initializeNavigation() {

    $$("a[href^='#']").forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    $(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initializeActiveNavigation() {

    const sections =
        $$("main section[id]");

    const links =
        $$(".nav-link");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    links.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });

                    const active =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );

                    if (active) {

                        active.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* =========================================================
   SEARCH DATABASE
========================================================= */

function getSearchItems() {

    return [

        ...EXAMS.map(exam => ({

            title: exam.name,

            type: "Exam",

            target: "exams"

        })),

        {

            title: "UPSSSC PET General Awareness",

            type: "Subject",

            target: "practice"

        },

        {

            title: "UP Police Reasoning",

            type: "Subject",

            target: "practice"

        },

        {

            title: "SSC CGL Quantitative Aptitude",

            type: "Subject",

            target: "practice"

        },

        {

            title: "Class 9 Science",

            type: "Class",

            target: "classes"

        },

        {

            title: "Class 10 Mathematics",

            type: "Class",

            target: "classes"

        },

        {

            title: "Class 11 Physics",

            type: "Class",

            target: "classes"

        },

        {

            title: "Class 12 Chemistry",

            type: "Class",

            target: "classes"

        },

        {

            title: "Mock Tests",

            type: "Feature",

            target: "mock-tests"

        },

        {

            title: "Quick Revision",

            type: "Feature",

            target: "revision"

        }

    ];

}


function initializeSearch() {

    const input =
        $("#globalSearch");

    const container =
        $("#searchResults");

    if (!input || !container) return;

    input.addEventListener(
        "input",
        () => {

            const query =
                input.value
                    .trim()
                    .toLowerCase();

            if (!query) {

                container.innerHTML = "";

                return;

            }

            const results =
                getSearchItems()
                    .filter(item =>
                        item.title
                            .toLowerCase()
                            .includes(query)
                    )
                    .slice(0, 7);


            if (!results.length) {

                container.innerHTML = `
                    <div class="search-result-box active">
                        <div class="search-result-item">
                            <strong>No results found</strong>
                        </div>
                    </div>
                `;

                return;

            }


            const box =
                document.createElement("div");

            box.className =
                "search-result-box active";


            results.forEach(item => {

                const result =
                    document.createElement("div");

                result.className =
                    "search-result-item";

                result.innerHTML = `
                    <strong>${item.title}</strong>
                    <span>${item.type}</span>
                `;


                result.addEventListener(
                    "click",
                    () => {

                        const target =
                            $(`#${item.target}`);

                        if (target) {

                            target.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                        input.value = "";

                        container.innerHTML = "";

                    }
                );


                box.appendChild(result);

            });


            container.innerHTML = "";

            container.appendChild(box);

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                (event.ctrlKey ||
                    event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                input.focus();

            }

        }
    );

}


/* =========================================================
   CLASS SWITCHING
========================================================= */

function initializeClassTabs() {

    const tabs =
        $$(".class-tab");

    const title =
        $("#classTitle");

    const description =
        $("#classDescription");

    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const classNumber =
                    tab.dataset.class;

                tabs.forEach(item =>
                    item.classList.remove(
                        "active"
                    )
                );

                tab.classList.add("active");

                Devpod.state.currentClass =
                    classNumber;

                const data =
                    CLASS_DATA[classNumber];

                if (data) {

                    title.textContent =
                        data.title;

                    description.textContent =
                        data.description;

                }

                saveState();

            }
        );

    });

}


/* =========================================================
   MEDIUM SWITCH
========================================================= */

function initializeMediumSwitch() {

    $$(".medium-button").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                $$(".medium-button")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                Devpod.state.medium =
                    button.dataset.medium;

                saveState();

                showToast(
                    button.dataset.medium === "hindi"
                        ? "Hindi Medium selected"
                        : "English Medium selected"
                );

            }
        );

    });

}


/* =========================================================
   EXAM BUTTONS
========================================================= */

function initializeExamButtons() {

    $$(".exam-button").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const examId =
                    button.dataset.exam;

                const exam =
                    EXAMS.find(
                        item =>
                            item.id === examId
                    );

                if (!exam) return;

                Devpod.state.currentExam =
                    examId;

                saveState();

                openExamModal(exam);

            }
        );

    });

}


/* =========================================================
   EXAM MODAL
========================================================= */

function openExamModal(exam) {

    const overlay =
        $("#modalOverlay");

    const content =
        $("#modalContent");

    if (!overlay || !content) return;

    content.innerHTML = `

        <div class="section-label">
            ${exam.category}
        </div>

        <h2 style="margin-top:8px;">
            ${exam.name}
        </h2>

        <p style="
            margin-top:8px;
            color:var(--text-secondary);
            font-size:12px;
        ">
            Choose what you want to study.
        </p>

        <div
            style="
                display:grid;
                grid-template-columns:
                    repeat(2,1fr);
                gap:10px;
                margin-top:25px;
            "
        >

            ${exam.subjects.map(subject => `

                <button
                    class="subject-card"
                    data-modal-subject="${subject}"
                >
                    <span class="subject-icon language">
                        ✓
                    </span>

                    <strong>
                        ${subject}
                    </strong>
                </button>

            `).join("")}

        </div>

        <div
            style="
                display:flex;
                flex-wrap:wrap;
                gap:10px;
                margin-top:25px;
            "
        >

            <button
                class="btn btn-primary"
                id="modalPracticeButton"
            >
                Practice
            </button>

            <button
                class="btn btn-secondary"
                id="modalMockButton"
            >
                Mock Test
            </button>

            <button
                class="btn btn-secondary"
                id="modalRevisionButton"
            >
                Revision
            </button>

        </div>
    `;


    overlay.classList.add("active");

    overlay.setAttribute(
        "aria-hidden",
        "false"
    );


    $("#modalPracticeButton")
        ?.addEventListener(
            "click",
            () => {

                closeModal();

                $("#practice")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );


    $("#modalMockButton")
        ?.addEventListener(
            "click",
            () => {

                closeModal();

                $("#mock-tests")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );


    $("#modalRevisionButton")
        ?.addEventListener(
            "click",
            () => {

                closeModal();

                $("#revision")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

}


/* =========================================================
   MODAL CONTROL
========================================================= */

function closeModal() {

    const overlay =
        $("#modalOverlay");

    if (!overlay) return;

    overlay.classList.remove(
        "active"
    );

    overlay.setAttribute(
        "aria-hidden",
        "true"
    );

}


function initializeModal() {

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
                    event.target.id ===
                    "modalOverlay"
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


/* =========================================================
   PRACTICE FILTER
========================================================= */

function filterQuestions() {

    const exam =
        $("#examFilter")?.value || "all";

    const subject =
        $("#subjectFilter")?.value || "all";

    const difficulty =
        $("#difficultyFilter")?.value || "all";


    return QUESTION_BANK.filter(
        question => {

            const examMatch =
                exam === "all" ||
                question.exam === exam;

            const subjectMatch =
                subject === "all" ||
                question.subject === subject;

            const difficultyMatch =
                difficulty === "all" ||
                question.difficulty === difficulty;

            return (
                examMatch &&
                subjectMatch &&
                difficultyMatch
            );

        }
    );

}


/* =========================================================
   START PRACTICE
========================================================= */

function startPractice() {

    const questions =
        filterQuestions();

    if (!questions.length) {

        showToast(
            "No questions match the selected filters."
        );

        return;

    }

    Devpod.state.practiceMode =
        "practice";

    saveState();

    showPracticeModal(
        questions
    );

}


function showPracticeModal(questions) {

    const question =
        questions[0];

    const overlay =
        $("#modalOverlay");

    const content =
        $("#modalContent");

    content.innerHTML = `

        <div class="section-label">
            PRACTICE MODE
        </div>

        <h2 style="margin-top:8px;">
            Practice Question
        </h2>

        <p style="
            margin-top:20px;
            font-size:16px;
            font-weight:700;
            line-height:1.5;
        ">
            ${
                Devpod.state.language === "hindi"
                    ? question.question
                    : question.questionEnglish
            }
        </p>

        <div
            id="practiceOptions"
            style="
                display:grid;
                gap:9px;
                margin-top:20px;
            "
        >

            ${question.options.map(
                (option, index) => `

                <button
                    class="subject-card practice-option"
                    data-answer="${index}"
                >
                    <strong>
                        ${String.fromCharCode(65 + index)}.
                        ${option}
                    </strong>
                </button>

            `).join("")}

        </div>

        <div
            id="practiceExplanation"
            style="
                display:none;
                margin-top:20px;
                padding:15px;
                border-radius:11px;
                background:var(--surface-2);
            "
        ></div>
    `;


    overlay.classList.add("active");


    $$(".practice-option").forEach(option => {

        option.addEventListener(
            "click",
            () => {

                const selected =
                    Number(
                        option.dataset.answer
                    );

                const correct =
                    selected ===
                    question.correctAnswer;


                Devpod.state.questionsSolved++;

                if (correct) {

                    Devpod.state.correctAnswers++;

                }

                updateDashboard();

                saveState();


                $$(".practice-option")
                    .forEach(item => {

                        item.disabled = true;

                    });


                const explanation =
                    $("#practiceExplanation");

                explanation.style.display =
                    "block";


                explanation.innerHTML = `

                    <strong>
                        ${
                            correct
                                ? "✓ Correct!"
                                : "✕ Incorrect"
                        }
                    </strong>

                    <p style="
                        margin-top:7px;
                        color:var(--text-secondary);
                        font-size:11px;
                    ">
                        ${
                            Devpod.state.language === "hindi"
                                ? question.explanation
                                : question.explanationEnglish
                        }
                    </p>

                `;

            }
        );

    });

}


/* =========================================================
   PRACTICE BUTTON
========================================================= */

function initializePractice() {

    $("#startPracticeButton")
        ?.addEventListener(
            "click",
            startPractice
        );

}


/* =========================================================
   MOCK MODE
========================================================= */

function initializeMockModes() {

    $$(".mock-mode-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const mode =
                        button.dataset.mode;

                    Devpod.state.practiceMode =
                        mode;

                    saveState();

                    showMockSetup(mode);

                }
            );

        });

}


function showMockSetup(mode) {

    const overlay =
        $("#modalOverlay");

    const content =
        $("#modalContent");

    const realMode =
        mode === "real";


    content.innerHTML = `

        <div class="section-label">
            MOCK TEST
        </div>

        <h2 style="margin-top:8px;">
            ${
                realMode
                    ? "Real Exam Mode"
                    : "Practice Mode"
            }
        </h2>

        <p style="
            margin-top:9px;
            color:var(--text-secondary);
            font-size:12px;
        ">
            ${
                realMode
                    ? "Strict timer, auto-submit and negative marking."
                    : "No timer with instant answer explanations."
            }
        </p>


        <div style="
            display:grid;
            gap:12px;
            margin-top:25px;
        ">

            <label class="filter-group">
                <span>
                    Number of Questions
                </span>

                <select id="mockQuestionCount">
                    <option value="10">10 Questions</option>
                    <option value="20">20 Questions</option>
                    <option value="50">50 Questions</option>
                </select>
            </label>


            ${
                realMode
                    ? `
                    <label class="filter-group">
                        <span>
                            Time Limit
                        </span>

                        <select id="mockTime">
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

                    <label class="filter-group">
                        <span>
                            Negative Marking
                        </span>

                        <select id="negativeMarking">
                            <option value="0.25">
                                -0.25
                            </option>

                            <option value="0.33">
                                -0.33
                            </option>

                            <option value="0">
                                None
                            </option>
                        </select>
                    </label>
                    `
                    : ""
            }

        </div>


        <button
            class="btn btn-primary"
            id="launchMock"
            style="margin-top:24px;width:100%;"
        >
            ${
                realMode
                    ? "Start Exam"
                    : "Start Practice"
            }
        </button>
    `;


    overlay.classList.add("active");


    $("#launchMock")
        ?.addEventListener(
            "click",
            () => {

                closeModal();

                startMockEngine(mode);

            }
        );

}


/* =========================================================
   MOCK ENGINE FOUNDATION
========================================================= */

function startMockEngine(mode) {

    const count =
        Number(
            $("#mockQuestionCount")?.value ||
            10
        );

    const questions =
        [...QUESTION_BANK]
            .sort(
                () => Math.random() - .5
            )
            .slice(
                0,
                Math.min(
                    count,
                    QUESTION_BANK.length
                )
            );


    if (!questions.length) {

        showToast(
            "Question bank is empty."
        );

        return;

    }


    const timerMinutes =
        Number(
            $("#mockTime")?.value ||
            10
        );

    const negative =
        Number(
            $("#negativeMarking")?.value ||
            0
        );


    openMockInterface(
        questions,
        mode,
        timerMinutes * 60,
        negative
    );

}


/* =========================================================
   MOCK INTERFACE
========================================================= */

function openMockInterface(
    questions,
    mode,
    totalSeconds,
    negative
) {

    const overlay =
        $("#modalOverlay");

    const content =
        $("#modalContent");


    let currentIndex = 0;

    const answers =
        new Array(
            questions.length
        ).fill(null);


    let remaining =
        mode === "real"
            ? totalSeconds
            : null;


    let timerId = null;


    function renderQuestion() {

        const q =
            questions[currentIndex];


        content.innerHTML = `

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                gap:20px;
            ">

                <div>

                    <div class="section-label">
                        ${
                            mode === "real"
                                ? "REAL EXAM"
                                : "PRACTICE"
                        }
                    </div>

                    <h2 style="margin-top:6px;">
                        Question ${currentIndex + 1}
                        /
                        ${questions.length}
                    </h2>

                </div>


                ${
                    mode === "real"
                        ? `
                            <div
                                id="mockTimer"
                                style="
                                    font-size:20px;
                                    font-weight:800;
                                    color:var(--primary);
                                "
                            >
                                ${formatTime(remaining)}
                            </div>
                        `
                        : ""
                }

            </div>


            <div style="
                height:5px;
                margin-top:18px;
                border-radius:999px;
                background:var(--surface-2);
                overflow:hidden;
            ">

                <div style="
                    width:${
                        ((currentIndex + 1)
                        / questions.length) * 100
                    }%;
                    height:100%;
                    background:var(--primary);
                "></div>

            </div>


            <div style="
                margin-top:25px;
                font-size:16px;
                font-weight:700;
                line-height:1.5;
            ">

                ${
                    Devpod.state.language === "hindi"
                        ? q.question
                        : q.questionEnglish
                }

            </div>


            <div
                id="mockOptions"
                style="
                    display:grid;
                    gap:9px;
                    margin-top:20px;
                "
            >

                ${q.options.map(
                    (option, index) => `

                    <button
                        class="subject-card mock-option"
                        data-index="${index}"
                        style="
                            ${
                                answers[currentIndex] === index
                                    ? "border-color:var(--primary);background:var(--primary-light);"
                                    : ""
                            }
                        "
                    >

                        <strong>
                            ${String.fromCharCode(65 + index)}.
                            ${option}
                        </strong>

                    </button>

                `).join("")}

            </div>


            <div style="
                display:flex;
                justify-content:space-between;
                gap:10px;
                margin-top:25px;
            ">

                <button
                    class="btn btn-secondary"
                    id="previousQuestion"
                    ${
                        currentIndex === 0
                            ? "disabled"
                            : ""
                    }
                >
                    ← Previous
                </button>


                ${
                    currentIndex ===
                    questions.length - 1

                        ? `
                            <button
                                class="btn btn-primary"
                                id="submitMock"
                            >
                                Submit Test
                            </button>
                        `

                        : `
                            <button
                                class="btn btn-primary"
                                id="nextQuestion"
                            >
                                Next →
                            </button>
                        `
                }

            </div>

        `;


        $$(".mock-option")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        answers[currentIndex] =
                            Number(
                                button.dataset.index
                            );

                        renderQuestion();

                    }
                );

            });


        $("#previousQuestion")
            ?.addEventListener(
                "click",
                () => {

                    if (currentIndex > 0) {

                        currentIndex--;

                        renderQuestion();

                    }

                }
            );


        $("#nextQuestion")
            ?.addEventListener(
                "click",
                () => {

                    if (
                        currentIndex <
                        questions.length - 1
                    ) {

                        currentIndex++;

                        renderQuestion();

                    }

                }
            );


        $("#submitMock")
            ?.addEventListener(
                "click",
                () => {

                    finishMock();

                }
            );

    }


    function finishMock() {

        if (timerId) {

            clearInterval(timerId);

        }


        let correct = 0;

        let wrong = 0;

        let unanswered = 0;


        questions.forEach(
            (question, index) => {

                if (
                    answers[index] === null
                ) {

                    unanswered++;

                }

                else if (
                    answers[index] ===
                    question.correctAnswer
                ) {

                    correct++;

                }

                else {

                    wrong++;

                }

            }
        );


        const score =
            correct -
            (wrong * negative);


        Devpod.state.questionsSolved +=
            questions.length -
            unanswered;

        Devpod.state.correctAnswers +=
            correct;

        Devpod.state.testsCompleted++;

        Devpod.state.testHistory.push({

            date:
                new Date().toISOString(),

            mode,

            total:
                questions.length,

            correct,

            wrong,

            unanswered,

            score

        });


        saveState();

        updateDashboard();


        content.innerHTML = `

            <div style="
                text-align:center;
            ">

                <div class="section-label">
                    TEST COMPLETE
                </div>

                <h2 style="
                    margin-top:8px;
                    font-size:32px;
                ">
                    Your Result
                </h2>


                <div style="
                    display:grid;
                    grid-template-columns:
                        repeat(2,1fr);
                    gap:10px;
                    margin-top:25px;
                ">

                    <div class="stat-card">
                        <div>
                            <span>Score</span>
                            <strong>
                                ${score.toFixed(2)}
                            </strong>
                        </div>
                    </div>


                    <div class="stat-card">
                        <div>
                            <span>Correct</span>
                            <strong>
                                ${correct}
                            </strong>
                        </div>
                    </div>


                    <div class="stat-card">
                        <div>
                            <span>Wrong</span>
                            <strong>
                                ${wrong}
                            </strong>
                        </div>
                    </div>


                    <div class="stat-card">
                        <div>
                            <span>Unanswered</span>
                            <strong>
                                ${unanswered}
                            </strong>
                        </div>
                    </div>

                </div>


                <button
                    class="btn btn-primary"
                    id="resultClose"
                    style="margin-top:25px;"
                >
                    Done
                </button>

            </div>

        `;


        $("#resultClose")
            ?.addEventListener(
                "click",
                closeModal
            );

    }


    renderQuestion();

    overlay.classList.add("active");


    if (mode === "real") {

        timerId =
            setInterval(
                () => {

                    remaining--;

                    const timer =
                        $("#mockTimer");

                    if (timer) {

                        timer.textContent =
                            formatTime(
                                remaining
                            );

                    }


                    if (
                        remaining <= 0
                    ) {

                        clearInterval(
                            timerId
                        );

                        finishMock();

                        showToast(
                            "Time is over. Test auto-submitted."
                        );

                    }

                },
                1000
            );

    }

}


/* =========================================================
   TIME FORMAT
========================================================= */

function formatTime(seconds) {

    seconds =
        Math.max(
            0,
            Number(seconds) || 0
        );


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    const solved =
        Devpod.state.questionsSolved;

    const correct =
        Devpod.state.correctAnswers;


    const accuracy =
        solved > 0
            ? Math.round(
                (correct / solved) * 100
            )
            : 0;


    const questionsSolved =
        $("#questionsSolved");

    const accuracyStat =
        $("#accuracyStat");

    const streakStat =
        $("#streakStat");

    const testsStat =
        $("#testsStat");


    if (questionsSolved) {

        questionsSolved.textContent =
            solved.toLocaleString();

    }


    if (accuracyStat) {

        accuracyStat.textContent =
            `${accuracy}%`;

    }


    if (streakStat) {

        streakStat.textContent =
            `${Devpod.state.streak} days`;

    }


    if (testsStat) {

        testsStat.textContent =
            Devpod.state.testsCompleted;

    }

}


/* =========================================================
   STREAK SYSTEM
========================================================= */

function updateStreak() {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    const last =
        Devpod.state.lastStudyDate;


    if (last === today) {

        return;

    }


    if (!last) {

        Devpod.state.streak = 1;

    }

    else {

        const lastDate =
            new Date(last);

        const currentDate =
            new Date(today);

        const difference =
            Math.round(
                (
                    currentDate -
                    lastDate
                ) /
                86400000
            );


        if (difference === 1) {

            Devpod.state.streak++;

        }

        else if (difference > 1) {

            Devpod.state.streak = 1;

        }

    }


    Devpod.state.lastStudyDate =
        today;

    saveState();

}


/* =========================================================
   FEATURE CARDS
========================================================= */

function initializeFeatureCards() {

    $$(".feature-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const targetId =
                        card.dataset.target;

                    const target =
                        $(`#${targetId}`);

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                    else {

                        showToast(
                            `${targetId} feature is ready for expansion.`
                        );

                    }

                }
            );

        });

}


/* =========================================================
   YEAR
========================================================= */

function initializeYear() {

    const year =
        $("#currentYear");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   GLOBAL ERROR HANDLING
========================================================= */

window.addEventListener(
    "error",
    event => {

        console.error(
            "Devpod error:",
            event.error
        );

    }
);


/* =========================================================
   INITIALIZE APPLICATION
========================================================= */

function initializeDevpod() {

    loadState();

    initializeTheme();

    initializeLanguage();

    initializeMobileNavigation();

    initializeNavigation();

    initializeActiveNavigation();

    initializeSearch();

    initializeClassTabs();

    initializeMediumSwitch();

    initializeExamButtons();

    initializeModal();

    initializePractice();

    initializeMockModes();

    initializeFeatureCards();

    initializeYear();

    updateStreak();

    updateDashboard();


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


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeDevpod();


        setTimeout(
            () => {

                $("#appLoader")
                    ?.classList
                    .add("hidden");

            },
            500
        );

    }
);