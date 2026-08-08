import coursePhysics from "@/assets/course-physics.jpg";
import courseChemistry from "@/assets/course-chemistry.jpg";
import courseMaths from "@/assets/course-maths.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";

export type Subject = "Physics" | "Chemistry" | "Mathematics";
export type Exam = "JEE Main" | "JEE Advanced";
export type Level = "Foundation" | "Advanced";
export type Difficulty = "Easy" | "Medium" | "Hard";

export const SUBJECTS: Subject[] = ["Physics", "Chemistry", "Mathematics"];
export const EXAMS: Exam[] = ["JEE Main", "JEE Advanced"];
export const LEVELS: Level[] = ["Foundation", "Advanced"];
export const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];

export const subjectImage: Record<Subject, string> = {
  Physics: coursePhysics,
  Chemistry: courseChemistry,
  Mathematics: courseMaths,
};

/* ------------------------------------------------------------------ */
/* Demo student                                                        */
/* ------------------------------------------------------------------ */

export const demoUser = {
  name: "Guffran",
  initials: "GF",
  email: "guffran@jeecatalyst.demo",
  target: "JEE Main + Advanced",
  targetYear: "2027",
  overallProgress: 68,
  accuracy: 81,
  streak: 14,
  questionsAttempted: 428,
  questionsCorrect: 347,
  testsCompleted: 12,
  averageScore: "142/300",
  strongSubjects: ["Physics", "Mathematics"],
  weakSubjects: ["Chemistry"],
  city: "Lucknow",
  joined: "March 2026",
};

export const subjectProgress: { subject: Subject; value: number }[] = [
  { subject: "Physics", value: 72 },
  { subject: "Chemistry", value: 64 },
  { subject: "Mathematics", value: 69 },
];

export const chapterProgress: { subject: Subject; chapter: string; value: number }[] = [
  { subject: "Physics", chapter: "Kinematics", value: 94 },
  { subject: "Physics", chapter: "Rotational Motion", value: 62 },
  { subject: "Physics", chapter: "Thermodynamics", value: 78 },
  { subject: "Physics", chapter: "Current Electricity", value: 41 },
  { subject: "Physics", chapter: "Modern Physics", value: 55 },
  { subject: "Chemistry", chapter: "Mole Concept", value: 91 },
  { subject: "Chemistry", chapter: "Chemical Bonding", value: 47 },
  { subject: "Chemistry", chapter: "Electrochemistry", value: 38 },
  { subject: "Chemistry", chapter: "Organic Basics", value: 72 },
  { subject: "Mathematics", chapter: "Quadratic Equations", value: 89 },
  { subject: "Mathematics", chapter: "Integration", value: 44 },
  { subject: "Mathematics", chapter: "Coordinate Geometry", value: 71 },
  { subject: "Mathematics", chapter: "Probability", value: 66 },
];

export const weeklyActivity = [
  { day: "Mon", minutes: 95, questions: 32 },
  { day: "Tue", minutes: 140, questions: 48 },
  { day: "Wed", minutes: 70, questions: 21 },
  { day: "Thu", minutes: 165, questions: 55 },
  { day: "Fri", minutes: 120, questions: 40 },
  { day: "Sat", minutes: 195, questions: 62 },
  { day: "Sun", minutes: 85, questions: 28 },
];

export const accuracyTrend = [
  { week: "W1", accuracy: 64 },
  { week: "W2", accuracy: 69 },
  { week: "W3", accuracy: 67 },
  { week: "W4", accuracy: 74 },
  { week: "W5", accuracy: 78 },
  { week: "W6", accuracy: 77 },
  { week: "W7", accuracy: 81 },
];

export const todaysFocus = [
  {
    id: "focus-1",
    title: "Complete Rotational Motion",
    meta: "35 min · Physics",
    cta: "Resume lecture",
    to: "/recorded-classes/phy-rot-04",
  },
  {
    id: "focus-2",
    title: "Attempt Electrostatics PYQs",
    meta: "20 questions · JEE Main",
    cta: "Start practice",
    to: "/pyqs",
  },
  {
    id: "focus-3",
    title: "Revise Organic Chemistry",
    meta: "25 min · Chemistry",
    cta: "Open question bank",
    to: "/question-bank",
  },
];

export const topicsToRevise = [
  { topic: "Current Electricity", subject: "Physics" as Subject, accuracy: 54 },
  { topic: "Chemical Bonding", subject: "Chemistry" as Subject, accuracy: 49 },
  { topic: "Integration", subject: "Mathematics" as Subject, accuracy: 51 },
];

export const strongTopics = [
  { topic: "Kinematics", subject: "Physics" as Subject, accuracy: 92 },
  { topic: "Mole Concept", subject: "Chemistry" as Subject, accuracy: 88 },
  { topic: "Quadratic Equations", subject: "Mathematics" as Subject, accuracy: 90 },
];

/* ------------------------------------------------------------------ */
/* Faculty                                                             */
/* ------------------------------------------------------------------ */

export type Faculty = {
  id: string;
  name: string;
  subject: Subject;
  photo: string;
  experience: string;
  specialization: string;
  tagline: string;
  exams: string;
  about: string;
  philosophy: string;
  rating: number;
  students: string;
};

export const faculty: Faculty[] = [
  {
    id: "cds-sir",
    name: "CDS Sir",
    subject: "Physics",
    photo: faculty1,
    experience: "14 years",
    specialization: "Mechanics · Electrodynamics · Modern Physics",
    tagline: "Concept-first problem solving",
    exams: "JEE Main + Advanced",
    about:
      "CDS Sir teaches Physics the way it is actually tested — starting from the physical picture, then building the mathematics around it. His classes are known for a relentless focus on why a method works before drilling how fast it can be applied.",
    philosophy:
      "A student should never memorise a formula they cannot derive in under a minute. Understanding first, speed second, confidence last — in that order.",
    rating: 4.9,
    students: "12,400+ learners on JEE Catalyst (demo)",
  },
  {
    id: "ananya-rao",
    name: "Dr. Ananya Rao",
    subject: "Chemistry",
    photo: faculty2,
    experience: "16 years",
    specialization: "Physical Chemistry · Organic Chemistry",
    tagline: "Reaction logic over rote learning",
    exams: "JEE Main + Advanced",
    about:
      "Dr. Ananya Rao holds a doctorate in Physical Chemistry and has spent over a decade designing chapter-wise practice systems for competitive aspirants. She is known for turning organic mechanisms into a small set of repeatable patterns.",
    philosophy:
      "Organic chemistry is not a list — it is a language. Once a student reads electron movement fluently, the reactions write themselves.",
    rating: 4.8,
    students: "9,800+ learners on JEE Catalyst (demo)",
  },
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    subject: "Mathematics",
    photo: faculty3,
    experience: "11 years",
    specialization: "Calculus · Algebra · Advanced Problem Solving",
    tagline: "Built for JEE Advanced difficulty",
    exams: "JEE Advanced",
    about:
      "Rahul Verma focuses on the hardest end of the JEE Mathematics syllabus. His sessions are structured around problem families — recognising the shape of a question before touching a pen.",
    philosophy:
      "Advanced Mathematics rewards pattern recognition. Solve fifty problems deliberately instead of five hundred mechanically.",
    rating: 4.9,
    students: "7,600+ learners on JEE Catalyst (demo)",
  },
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    subject: "Mathematics",
    photo: faculty4,
    experience: "18 years",
    specialization: "Coordinate Geometry · Probability · Foundation Building",
    tagline: "Fundamentals that never break",
    exams: "JEE Main",
    about:
      "Meera Iyer works with students who need their base rebuilt — droppers, class 11 starters and aspirants returning after a weak first attempt. Her foundation track is the most repeated course on the platform (demo data).",
    philosophy:
      "There are no weak students in Mathematics, only unfinished foundations. Fix the base and the syllabus stops feeling large.",
    rating: 4.7,
    students: "11,200+ learners on JEE Catalyst (demo)",
  },
];

/* ------------------------------------------------------------------ */
/* Courses                                                             */
/* ------------------------------------------------------------------ */

export type Course = {
  id: string;
  title: string;
  subject: Subject;
  exam: Exam;
  level: Level;
  facultyId: string;
  lectures: number;
  questions: number;
  duration: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  mrp: number;
  summary: string;
  outcomes: string[];
  syllabus: { chapter: string; lectures: number; hours: number }[];
};

const facultyName = (id: string) => faculty.find((f) => f.id === id)?.name ?? "";
export const getFaculty = (id: string) => faculty.find((f) => f.id === id);
export const facultyNameOf = facultyName;

export const courses: Course[] = [
  {
    id: "complete-physics",
    title: "Complete Physics — JEE Main & Advanced",
    subject: "Physics",
    exam: "JEE Advanced",
    level: "Advanced",
    facultyId: "cds-sir",
    lectures: 186,
    questions: 3200,
    duration: "11 months",
    rating: 4.9,
    reviews: 2140,
    students: 12480,
    price: 7999,
    mrp: 11999,
    summary:
      "A full two-year Physics syllabus rebuilt as a single progression — concept lectures, derivation drills, PYQ sets and Advanced-level problem workshops for every chapter.",
    outcomes: [
      "Derive every core result in Mechanics, Electrodynamics and Modern Physics",
      "Solve Advanced-level multi-concept problems within timed constraints",
      "Complete chapter-wise PYQs from the last seven JEE cycles",
      "Track chapter accuracy and revise using targeted weak-area sets",
    ],
    syllabus: [
      { chapter: "Mechanics", lectures: 42, hours: 58 },
      { chapter: "Thermodynamics", lectures: 18, hours: 22 },
      { chapter: "Electrostatics", lectures: 24, hours: 31 },
      { chapter: "Current Electricity", lectures: 16, hours: 19 },
      { chapter: "Magnetism", lectures: 20, hours: 25 },
      { chapter: "Optics", lectures: 22, hours: 27 },
      { chapter: "Modern Physics", lectures: 24, hours: 28 },
    ],
  },
  {
    id: "chemistry-mastery",
    title: "Chemistry Mastery — JEE Main",
    subject: "Chemistry",
    exam: "JEE Main",
    level: "Foundation",
    facultyId: "ananya-rao",
    lectures: 154,
    questions: 2600,
    duration: "9 months",
    rating: 4.8,
    reviews: 1685,
    students: 9840,
    price: 4999,
    mrp: 7999,
    summary:
      "Physical, Organic and Inorganic Chemistry taught as one connected system, with weekly retention tests designed for the JEE Main paper pattern.",
    outcomes: [
      "Master Physical Chemistry numericals with a fixed solving framework",
      "Read organic mechanisms through electron movement, not memorisation",
      "Retain Inorganic Chemistry with spaced-revision question sets",
      "Attempt full-length Chemistry sections inside the real time budget",
    ],
    syllabus: [
      { chapter: "Some Basic Concepts & Mole Concept", lectures: 14, hours: 16 },
      { chapter: "Atomic Structure", lectures: 12, hours: 14 },
      { chapter: "Chemical Bonding", lectures: 18, hours: 22 },
      { chapter: "Thermodynamics & Equilibrium", lectures: 22, hours: 27 },
      { chapter: "Electrochemistry", lectures: 14, hours: 17 },
      { chapter: "Organic Fundamentals", lectures: 26, hours: 32 },
      { chapter: "Hydrocarbons & Functional Groups", lectures: 28, hours: 34 },
      { chapter: "Inorganic Blocks", lectures: 20, hours: 23 },
    ],
  },
  {
    id: "advanced-mathematics",
    title: "Advanced Mathematics — JEE Advanced",
    subject: "Mathematics",
    exam: "JEE Advanced",
    level: "Advanced",
    facultyId: "rahul-verma",
    lectures: 168,
    questions: 2900,
    duration: "10 months",
    rating: 4.9,
    reviews: 1420,
    students: 7620,
    price: 7999,
    mrp: 10999,
    summary:
      "Built for aspirants targeting a top Advanced score — problem-family training, multi-concept integration and paper-pattern workshops across Algebra, Calculus and Geometry.",
    outcomes: [
      "Recognise problem families before choosing a method",
      "Handle multi-concept Advanced questions under exam pressure",
      "Build a reliable calculus toolkit for integration and differential equations",
      "Cut silent calculation errors with structured solution writing",
    ],
    syllabus: [
      { chapter: "Quadratic Equations & Complex Numbers", lectures: 20, hours: 24 },
      { chapter: "Sequences, Series & Binomial", lectures: 16, hours: 19 },
      { chapter: "Trigonometry", lectures: 14, hours: 17 },
      { chapter: "Coordinate Geometry", lectures: 28, hours: 34 },
      { chapter: "Differential Calculus", lectures: 26, hours: 32 },
      { chapter: "Integral Calculus", lectures: 30, hours: 37 },
      { chapter: "Vectors & 3D Geometry", lectures: 18, hours: 21 },
      { chapter: "Probability & Statistics", lectures: 16, hours: 18 },
    ],
  },
  {
    id: "physics-foundation",
    title: "Physics Foundation — Class 11 Track",
    subject: "Physics",
    exam: "JEE Main",
    level: "Foundation",
    facultyId: "cds-sir",
    lectures: 96,
    questions: 1500,
    duration: "6 months",
    rating: 4.7,
    reviews: 940,
    students: 6210,
    price: 2999,
    mrp: 4999,
    summary:
      "The class 11 Physics base built slowly and correctly — units, kinematics, laws of motion, work-energy, rotation and thermal physics with daily practice.",
    outcomes: [
      "Build a clean, exam-ready class 11 Physics foundation",
      "Solve kinematics and rotation problems without formula hunting",
      "Complete 1,500 graded practice questions across the year",
      "Enter Advanced-level preparation without syllabus gaps",
    ],
    syllabus: [
      { chapter: "Units, Dimensions & Vectors", lectures: 10, hours: 11 },
      { chapter: "Kinematics", lectures: 16, hours: 19 },
      { chapter: "Laws of Motion", lectures: 14, hours: 17 },
      { chapter: "Work, Energy & Power", lectures: 12, hours: 14 },
      { chapter: "Rotational Motion", lectures: 18, hours: 22 },
      { chapter: "Thermal Physics", lectures: 14, hours: 16 },
      { chapter: "Oscillations & Waves", lectures: 12, hours: 15 },
    ],
  },
  {
    id: "organic-intensive",
    title: "Organic Chemistry Intensive",
    subject: "Chemistry",
    exam: "JEE Advanced",
    level: "Advanced",
    facultyId: "ananya-rao",
    lectures: 72,
    questions: 1400,
    duration: "4 months",
    rating: 4.9,
    reviews: 810,
    students: 4980,
    price: 3499,
    mrp: 5499,
    summary:
      "A mechanism-first Organic Chemistry sprint covering reaction logic, named reactions and Advanced-level conversion problems.",
    outcomes: [
      "Predict products from mechanism, not memory",
      "Handle multi-step conversions and reasoning questions",
      "Master stereochemistry with visual, exam-oriented practice",
      "Finish chapter-wise Advanced PYQs for Organic Chemistry",
    ],
    syllabus: [
      { chapter: "GOC & Electron Movement", lectures: 12, hours: 15 },
      { chapter: "Stereochemistry", lectures: 10, hours: 12 },
      { chapter: "Hydrocarbons", lectures: 12, hours: 14 },
      { chapter: "Haloalkanes & Alcohols", lectures: 14, hours: 17 },
      { chapter: "Carbonyl Compounds", lectures: 14, hours: 18 },
      { chapter: "Amines & Biomolecules", lectures: 10, hours: 12 },
    ],
  },
  {
    id: "calculus-crash",
    title: "Calculus Crash Course — Main Focused",
    subject: "Mathematics",
    exam: "JEE Main",
    level: "Foundation",
    facultyId: "meera-iyer",
    lectures: 64,
    questions: 1200,
    duration: "3 months",
    rating: 4.6,
    reviews: 620,
    students: 5340,
    price: 2499,
    mrp: 3999,
    summary:
      "Limits to definite integrals in one tight track, tuned to the JEE Main question pattern and speed requirement.",
    outcomes: [
      "Evaluate limits and derivatives without hesitation",
      "Apply a fixed decision tree for integration methods",
      "Solve application-of-derivatives questions in under 90 seconds",
      "Close the highest-weight Main calculus topics in 12 weeks",
    ],
    syllabus: [
      { chapter: "Limits & Continuity", lectures: 12, hours: 13 },
      { chapter: "Differentiation", lectures: 12, hours: 14 },
      { chapter: "Application of Derivatives", lectures: 14, hours: 16 },
      { chapter: "Indefinite Integration", lectures: 14, hours: 17 },
      { chapter: "Definite Integration & Area", lectures: 12, hours: 15 },
    ],
  },
  {
    id: "pyq-decoder-physics",
    title: "PYQ Decoder — Physics (7 Years)",
    subject: "Physics",
    exam: "JEE Main",
    level: "Advanced",
    facultyId: "cds-sir",
    lectures: 48,
    questions: 1800,
    duration: "3 months",
    rating: 4.8,
    reviews: 1120,
    students: 8130,
    price: 1999,
    mrp: 3499,
    summary:
      "Every Physics chapter decoded through seven years of previous year questions — pattern frequency, trap analysis and fastest correct approach.",
    outcomes: [
      "Know exactly which topics repeat and how they are framed",
      "Recognise common distractor patterns in Physics MCQs",
      "Build a chapter-wise PYQ completion record",
      "Convert PYQ practice into measurable accuracy gain",
    ],
    syllabus: [
      { chapter: "Mechanics PYQs", lectures: 12, hours: 14 },
      { chapter: "Electrodynamics PYQs", lectures: 12, hours: 15 },
      { chapter: "Optics & Waves PYQs", lectures: 10, hours: 12 },
      { chapter: "Modern Physics PYQs", lectures: 8, hours: 9 },
      { chapter: "Thermal PYQs", lectures: 6, hours: 7 },
    ],
  },
  {
    id: "inorganic-retention",
    title: "Inorganic Chemistry Retention System",
    subject: "Chemistry",
    exam: "JEE Main",
    level: "Foundation",
    facultyId: "ananya-rao",
    lectures: 54,
    questions: 1100,
    duration: "3 months",
    rating: 4.6,
    reviews: 540,
    students: 4420,
    price: 2299,
    mrp: 3799,
    summary:
      "Inorganic Chemistry taught with a spaced-revision engine so facts actually survive until exam day.",
    outcomes: [
      "Retain periodic trends and block chemistry long-term",
      "Answer factual questions with confidence and speed",
      "Use scheduled revision cycles instead of last-week cramming",
      "Score consistently in the most neglected Chemistry section",
    ],
    syllabus: [
      { chapter: "Periodic Table & Trends", lectures: 10, hours: 11 },
      { chapter: "s-Block & p-Block", lectures: 16, hours: 18 },
      { chapter: "d & f Block", lectures: 12, hours: 14 },
      { chapter: "Coordination Compounds", lectures: 10, hours: 13 },
      { chapter: "Metallurgy & Qualitative Analysis", lectures: 6, hours: 8 },
    ],
  },
  {
    id: "dropper-fullstack",
    title: "Dropper Batch — Full Syllabus Reset",
    subject: "Physics",
    exam: "JEE Main",
    level: "Advanced",
    facultyId: "meera-iyer",
    lectures: 240,
    questions: 4200,
    duration: "12 months",
    rating: 4.8,
    reviews: 1960,
    students: 10120,
    price: 9999,
    mrp: 14999,
    summary:
      "A complete one-year reset for droppers across all three subjects, with weekly full-length tests and mandatory revision checkpoints.",
    outcomes: [
      "Rebuild all three subjects on a fixed weekly schedule",
      "Attempt 40+ full-length tests with detailed analytics",
      "Convert last attempt's weak areas into scoring areas",
      "Maintain a disciplined study rhythm for twelve months",
    ],
    syllabus: [
      { chapter: "Physics Reset Track", lectures: 84, hours: 102 },
      { chapter: "Chemistry Reset Track", lectures: 78, hours: 94 },
      { chapter: "Mathematics Reset Track", lectures: 78, hours: 96 },
    ],
  },
  {
    id: "advanced-problem-lab",
    title: "Advanced Problem Lab — Mathematics",
    subject: "Mathematics",
    exam: "JEE Advanced",
    level: "Advanced",
    facultyId: "rahul-verma",
    lectures: 40,
    questions: 900,
    duration: "2 months",
    rating: 4.9,
    reviews: 480,
    students: 3210,
    price: 2999,
    mrp: 4499,
    summary:
      "Forty live-style problem workshops on the hardest question types that appear in JEE Advanced Mathematics papers.",
    outcomes: [
      "Attack matrix-match, multi-correct and integer-type questions confidently",
      "Break long problems into recognisable sub-problems",
      "Build stamina for three-hour Advanced sessions",
      "Reduce time lost on unfamiliar question framing",
    ],
    syllabus: [
      { chapter: "Algebra Problem Sets", lectures: 10, hours: 13 },
      { chapter: "Calculus Problem Sets", lectures: 12, hours: 16 },
      { chapter: "Geometry Problem Sets", lectures: 10, hours: 13 },
      { chapter: "Mixed Advanced Papers", lectures: 8, hours: 11 },
    ],
  },
  {
    id: "modern-physics-sprint",
    title: "Modern Physics Sprint",
    subject: "Physics",
    exam: "JEE Main",
    level: "Foundation",
    facultyId: "cds-sir",
    lectures: 32,
    questions: 700,
    duration: "6 weeks",
    rating: 4.7,
    reviews: 410,
    students: 3890,
    price: 1499,
    mrp: 2499,
    summary:
      "A short, high-yield sprint through photoelectric effect, atomic models, nuclei and semiconductors.",
    outcomes: [
      "Close a high-weight, low-effort scoring area in six weeks",
      "Solve photoelectric and nuclear numericals reliably",
      "Complete chapter-wise PYQs for Modern Physics",
      "Add predictable marks to your Physics section",
    ],
    syllabus: [
      { chapter: "Dual Nature & Photoelectric Effect", lectures: 8, hours: 9 },
      { chapter: "Atoms & Nuclei", lectures: 10, hours: 12 },
      { chapter: "Semiconductors", lectures: 8, hours: 9 },
      { chapter: "Communication & Misc.", lectures: 6, hours: 6 },
    ],
  },
  {
    id: "test-series-2027",
    title: "Catalyst Test Series 2027",
    subject: "Mathematics",
    exam: "JEE Main",
    level: "Advanced",
    facultyId: "rahul-verma",
    lectures: 24,
    questions: 3600,
    duration: "8 months",
    rating: 4.8,
    reviews: 1330,
    students: 9450,
    price: 3999,
    mrp: 5999,
    summary:
      "Forty-eight full-length tests with per-question analytics, percentile projection and post-test revision plans.",
    outcomes: [
      "Attempt exam-pattern tests on a fixed calendar",
      "Read your analytics instead of only your score",
      "Fix recurring error types across attempts",
      "Enter the exam having already sat the exam many times",
    ],
    syllabus: [
      { chapter: "Part Syllabus Tests", lectures: 8, hours: 24 },
      { chapter: "Full Syllabus Main Tests", lectures: 10, hours: 30 },
      { chapter: "Advanced Pattern Tests", lectures: 6, hours: 18 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Question bank                                                       */
/* ------------------------------------------------------------------ */

export type Question = {
  id: string;
  subject: Subject;
  chapter: string;
  difficulty: Difficulty;
  type: "MCQ" | "Numerical";
  text: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: "q1",
    subject: "Physics",
    chapter: "Kinematics",
    difficulty: "Easy",
    type: "MCQ",
    text: "A particle is projected with velocity u at an angle θ with the horizontal. At the highest point of its trajectory, what is its speed?",
    options: ["u", "u sin θ", "u cos θ", "Zero"],
    answer: 2,
    explanation:
      "At the highest point the vertical component of velocity becomes zero, while the horizontal component stays unchanged throughout the flight. Hence the speed there equals u cos θ.",
  },
  {
    id: "q2",
    subject: "Physics",
    chapter: "Rotational Motion",
    difficulty: "Medium",
    type: "MCQ",
    text: "A solid sphere and a hollow sphere of equal mass and radius roll without slipping from rest down the same incline. Which reaches the bottom first?",
    options: [
      "The hollow sphere",
      "The solid sphere",
      "Both reach together",
      "Depends on the incline angle",
    ],
    answer: 1,
    explanation:
      "Acceleration for rolling bodies is a = g sinθ / (1 + I/mR²). The solid sphere has I/mR² = 2/5 while the hollow sphere has 2/3, so the solid sphere has larger acceleration and arrives first.",
  },
  {
    id: "q3",
    subject: "Physics",
    chapter: "Current Electricity",
    difficulty: "Medium",
    type: "Numerical",
    text: "Three resistors of 6 Ω each are connected in parallel. What is the equivalent resistance in ohms?",
    options: ["18", "6", "3", "2"],
    answer: 3,
    explanation:
      "For n identical resistors in parallel, R_eq = R/n = 6/3 = 2 Ω.",
  },
  {
    id: "q4",
    subject: "Physics",
    chapter: "Electrostatics",
    difficulty: "Hard",
    type: "MCQ",
    text: "A charge q is placed at the centre of a cube of side a. What is the electric flux through one face of the cube?",
    options: ["q/ε₀", "q/(6ε₀)", "q/(4ε₀)", "q/(8ε₀)"],
    answer: 1,
    explanation:
      "By Gauss's law the total flux through the closed cube is q/ε₀. By symmetry each of the six faces receives an equal share, giving q/(6ε₀).",
  },
  {
    id: "q5",
    subject: "Physics",
    chapter: "Thermodynamics",
    difficulty: "Medium",
    type: "MCQ",
    text: "In an adiabatic process performed on an ideal gas, which quantity remains zero?",
    options: ["Change in internal energy", "Work done", "Heat exchanged", "Change in temperature"],
    answer: 2,
    explanation:
      "An adiabatic process is defined by the absence of heat exchange with the surroundings, so Q = 0. Work done then comes entirely at the cost of internal energy.",
  },
  {
    id: "q6",
    subject: "Physics",
    chapter: "Modern Physics",
    difficulty: "Easy",
    type: "MCQ",
    text: "The stopping potential in a photoelectric experiment depends on which of the following?",
    options: [
      "Intensity of incident light only",
      "Frequency of incident light and work function",
      "Distance of the source",
      "Area of the emitting surface",
    ],
    answer: 1,
    explanation:
      "eV₀ = hν − φ. The stopping potential depends on the frequency of incident radiation and the work function of the metal, and is independent of intensity.",
  },
  {
    id: "q7",
    subject: "Physics",
    chapter: "Optics",
    difficulty: "Medium",
    type: "MCQ",
    text: "In Young's double slit experiment, the fringe width is doubled when",
    options: [
      "The slit separation is doubled",
      "The screen distance is halved",
      "The wavelength is doubled",
      "The slit width is doubled",
    ],
    answer: 2,
    explanation:
      "Fringe width β = λD/d. Doubling λ doubles β, while doubling d would halve it.",
  },
  {
    id: "q8",
    subject: "Physics",
    chapter: "Magnetism",
    difficulty: "Hard",
    type: "MCQ",
    text: "A charged particle enters a uniform magnetic field with velocity parallel to the field direction. Its path will be",
    options: ["Circular", "Helical", "A straight line", "Parabolic"],
    answer: 2,
    explanation:
      "The magnetic force is qv × B. When v is parallel to B the cross product vanishes, so no force acts and the particle continues in a straight line.",
  },
  {
    id: "q9",
    subject: "Physics",
    chapter: "Laws of Motion",
    difficulty: "Easy",
    type: "Numerical",
    text: "A 2 kg block is pulled on a frictionless surface with a horizontal force of 10 N. Find the acceleration in m/s².",
    options: ["2", "5", "10", "20"],
    answer: 1,
    explanation: "a = F/m = 10/2 = 5 m/s².",
  },
  {
    id: "q10",
    subject: "Physics",
    chapter: "Work, Energy & Power",
    difficulty: "Medium",
    type: "MCQ",
    text: "A body of mass m falls freely through a height h. The work done by gravity is",
    options: ["Zero", "mgh", "−mgh", "½mgh"],
    answer: 1,
    explanation:
      "Displacement is along the direction of gravitational force, so work done by gravity is positive and equal to mgh.",
  },
  {
    id: "q11",
    subject: "Chemistry",
    chapter: "Mole Concept",
    difficulty: "Easy",
    type: "Numerical",
    text: "How many moles are present in 88 g of CO₂ (molar mass 44 g/mol)?",
    options: ["0.5", "1", "2", "4"],
    answer: 2,
    explanation: "n = mass / molar mass = 88 / 44 = 2 mol.",
  },
  {
    id: "q12",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    difficulty: "Medium",
    type: "MCQ",
    text: "Which of the following molecules has a non-zero dipole moment?",
    options: ["CO₂", "BF₃", "H₂O", "CCl₄"],
    answer: 2,
    explanation:
      "Water is bent, so the individual bond dipoles do not cancel. CO₂ is linear, BF₃ trigonal planar and CCl₄ tetrahedral — all symmetric with zero net dipole.",
  },
  {
    id: "q13",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    difficulty: "Medium",
    type: "MCQ",
    text: "The maximum number of electrons that can occupy the subshell with l = 2 is",
    options: ["2", "6", "10", "14"],
    answer: 2,
    explanation:
      "For l = 2 (d subshell), the number of orbitals is 2l + 1 = 5, each holding 2 electrons, giving 10 electrons.",
  },
  {
    id: "q14",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    difficulty: "Hard",
    type: "MCQ",
    text: "For a galvanic cell operating spontaneously, which statement is correct?",
    options: [
      "ΔG > 0 and E_cell < 0",
      "ΔG < 0 and E_cell > 0",
      "ΔG = 0 and E_cell > 0",
      "ΔG < 0 and E_cell < 0",
    ],
    answer: 1,
    explanation:
      "ΔG = −nFE_cell. Spontaneity requires ΔG < 0, which corresponds to a positive cell potential.",
  },
  {
    id: "q15",
    subject: "Chemistry",
    chapter: "Organic Fundamentals",
    difficulty: "Medium",
    type: "MCQ",
    text: "Which carbocation among the following is the most stable?",
    options: ["Methyl", "Primary", "Secondary", "Tertiary"],
    answer: 3,
    explanation:
      "Alkyl groups are electron donating through hyperconjugation and inductive effect. A tertiary carbocation has the largest number of such groups, so it is the most stabilised.",
  },
  {
    id: "q16",
    subject: "Chemistry",
    chapter: "Thermodynamics & Equilibrium",
    difficulty: "Medium",
    type: "MCQ",
    text: "For an exothermic reaction at equilibrium, increasing the temperature will",
    options: [
      "Shift the equilibrium forward",
      "Shift the equilibrium backward",
      "Not affect the equilibrium",
      "Stop the reaction",
    ],
    answer: 1,
    explanation:
      "By Le Chatelier's principle the system opposes the added heat, so an exothermic equilibrium shifts towards the reactants.",
  },
  {
    id: "q17",
    subject: "Chemistry",
    chapter: "Periodic Table & Trends",
    difficulty: "Easy",
    type: "MCQ",
    text: "Which of the following has the largest atomic radius?",
    options: ["Na", "Mg", "Al", "Si"],
    answer: 0,
    explanation:
      "Atomic radius decreases across a period as nuclear charge increases. Sodium is leftmost in the period and therefore largest.",
  },
  {
    id: "q18",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    difficulty: "Hard",
    type: "MCQ",
    text: "The oxidation state of the central metal in [Co(NH₃)₆]Cl₃ is",
    options: ["+1", "+2", "+3", "+6"],
    answer: 2,
    explanation:
      "Ammonia is neutral and three chloride ions carry −3 total, so cobalt must be +3 to balance the charge.",
  },
  {
    id: "q19",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    difficulty: "Medium",
    type: "MCQ",
    text: "Addition of HBr to propene in the absence of peroxide gives mainly",
    options: ["1-bromopropane", "2-bromopropane", "Propane", "1,2-dibromopropane"],
    answer: 1,
    explanation:
      "Markovnikov addition places the halogen on the more substituted carbon via the more stable secondary carbocation, giving 2-bromopropane.",
  },
  {
    id: "q20",
    subject: "Chemistry",
    chapter: "Stereochemistry",
    difficulty: "Hard",
    type: "MCQ",
    text: "A compound with one chiral centre will show",
    options: [
      "Only geometrical isomerism",
      "A pair of enantiomers",
      "Three optical isomers",
      "No isomerism",
    ],
    answer: 1,
    explanation:
      "A single stereocentre gives 2¹ = 2 non-superimposable mirror images, i.e. one pair of enantiomers.",
  },
  {
    id: "q21",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    difficulty: "Easy",
    type: "MCQ",
    text: "If the roots of x² − 5x + 6 = 0 are α and β, then α + β equals",
    options: ["−5", "5", "6", "−6"],
    answer: 1,
    explanation: "Sum of roots = −b/a = 5 for the equation x² − 5x + 6 = 0.",
  },
  {
    id: "q22",
    subject: "Mathematics",
    chapter: "Integration",
    difficulty: "Medium",
    type: "MCQ",
    text: "The value of ∫₀^{π/2} sin x dx is",
    options: ["0", "1", "π/2", "2"],
    answer: 1,
    explanation: "∫ sin x dx = −cos x. Evaluating from 0 to π/2 gives −cos(π/2) + cos 0 = 0 + 1 = 1.",
  },
  {
    id: "q23",
    subject: "Mathematics",
    chapter: "Probability",
    difficulty: "Medium",
    type: "Numerical",
    text: "Two fair dice are rolled. What is the probability that the sum equals 7? (Give the denominator when written as 1/n.)",
    options: ["4", "6", "9", "12"],
    answer: 1,
    explanation:
      "There are 6 favourable outcomes out of 36, so the probability is 6/36 = 1/6, giving n = 6.",
  },
  {
    id: "q24",
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    difficulty: "Medium",
    type: "MCQ",
    text: "The distance of the point (3, 4) from the origin is",
    options: ["3", "4", "5", "7"],
    answer: 2,
    explanation: "Distance = √(3² + 4²) = √25 = 5.",
  },
  {
    id: "q25",
    subject: "Mathematics",
    chapter: "Differential Calculus",
    difficulty: "Easy",
    type: "MCQ",
    text: "The derivative of ln(x²) with respect to x is",
    options: ["1/x²", "2/x", "2x", "x/2"],
    answer: 1,
    explanation: "ln(x²) = 2 ln x, whose derivative is 2 · (1/x) = 2/x.",
  },
  {
    id: "q26",
    subject: "Mathematics",
    chapter: "Sequences, Series & Binomial",
    difficulty: "Medium",
    type: "MCQ",
    text: "The sum of the infinite geometric series 1 + 1/2 + 1/4 + ... is",
    options: ["1", "3/2", "2", "Infinite"],
    answer: 2,
    explanation: "S = a/(1 − r) = 1/(1 − 1/2) = 2.",
  },
  {
    id: "q27",
    subject: "Mathematics",
    chapter: "Trigonometry",
    difficulty: "Hard",
    type: "MCQ",
    text: "If sin θ + cos θ = 1, then sin θ · cos θ equals",
    options: ["0", "1/2", "1", "−1/2"],
    answer: 0,
    explanation:
      "Squaring gives 1 + 2 sinθ cosθ = 1, so sinθ cosθ = 0.",
  },
  {
    id: "q28",
    subject: "Mathematics",
    chapter: "Vectors & 3D Geometry",
    difficulty: "Medium",
    type: "MCQ",
    text: "Two non-zero vectors a and b are perpendicular if",
    options: ["a × b = 0", "a · b = 0", "|a| = |b|", "a + b = 0"],
    answer: 1,
    explanation:
      "The dot product of perpendicular vectors is zero since a · b = |a||b| cos 90° = 0.",
  },
  {
    id: "q29",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    difficulty: "Hard",
    type: "MCQ",
    text: "The modulus of the complex number (1 + i)/(1 − i) is",
    options: ["0", "1", "√2", "2"],
    answer: 1,
    explanation:
      "(1 + i)/(1 − i) simplifies to i, whose modulus is 1. Alternatively |1 + i| / |1 − i| = √2/√2 = 1.",
  },
  {
    id: "q30",
    subject: "Mathematics",
    chapter: "Application of Derivatives",
    difficulty: "Medium",
    type: "MCQ",
    text: "The function f(x) = x³ − 3x has a local maximum at",
    options: ["x = 0", "x = 1", "x = −1", "x = 3"],
    answer: 2,
    explanation:
      "f'(x) = 3x² − 3 = 0 gives x = ±1. f''(x) = 6x is negative at x = −1, so a local maximum occurs there.",
  },
  {
    id: "q31",
    subject: "Physics",
    chapter: "Oscillations & Waves",
    difficulty: "Medium",
    type: "MCQ",
    text: "The time period of a simple pendulum is independent of",
    options: ["Length", "Acceleration due to gravity", "Mass of the bob", "All of these"],
    answer: 2,
    explanation: "T = 2π√(L/g) contains no mass term, so the bob's mass does not affect the period.",
  },
  {
    id: "q32",
    subject: "Chemistry",
    chapter: "Carbonyl Compounds",
    difficulty: "Medium",
    type: "MCQ",
    text: "Which reagent distinguishes an aldehyde from a ketone?",
    options: ["Sodium metal", "Tollens' reagent", "Bromine water", "Sodium bicarbonate"],
    answer: 1,
    explanation:
      "Tollens' reagent oxidises aldehydes producing a silver mirror, while ordinary ketones give no reaction.",
  },
  {
    id: "q33",
    subject: "Mathematics",
    chapter: "Integration",
    difficulty: "Hard",
    type: "MCQ",
    text: "∫ dx/(1 + x²) equals",
    options: ["ln(1 + x²) + C", "tan⁻¹x + C", "sin⁻¹x + C", "1/(1 + x²) + C"],
    answer: 1,
    explanation: "This is the standard result ∫ dx/(1 + x²) = tan⁻¹x + C.",
  },
];

/* ------------------------------------------------------------------ */
/* PYQs                                                                */
/* ------------------------------------------------------------------ */

export type Pyq = Question & { year: number; exam: Exam; session: string };

const pyqSeed: Array<[number, Exam, string, Subject, string, Difficulty, string, string[], number, string]> = [
  [
    2026,
    "JEE Main",
    "Session 1 · Shift 2",
    "Physics",
    "Electrostatics",
    "Medium",
    "Two point charges +q and −q are separated by distance 2a. The electric potential at the midpoint of the line joining them is",
    ["Zero", "q/(4πε₀a)", "2q/(4πε₀a)", "−q/(4πε₀a)"],
    0,
    "Potential is a scalar sum. The two equal and opposite contributions at the midpoint cancel exactly, giving zero potential (though the field there is non-zero).",
  ],
  [
    2026,
    "JEE Advanced",
    "Paper 1",
    "Mathematics",
    "Integration",
    "Hard",
    "The value of ∫₀^1 x·e^x dx is",
    ["1", "e − 1", "e", "2e − 1"],
    0,
    "Integration by parts gives [x e^x − e^x]₀¹ = (e − e) − (0 − 1) = 1.",
  ],
  [
    2025,
    "JEE Main",
    "Session 2 · Shift 1",
    "Physics",
    "Rotational Motion",
    "Medium",
    "A disc of moment of inertia I rotates at angular velocity ω. Its rotational kinetic energy is",
    ["Iω", "½Iω²", "Iω²", "½Iω"],
    1,
    "Rotational kinetic energy is the analogue of ½mv², namely ½Iω².",
  ],
  [
    2025,
    "JEE Main",
    "Session 1 · Shift 1",
    "Chemistry",
    "Chemical Bonding",
    "Medium",
    "The hybridisation of the central atom in SF₆ is",
    ["sp³", "dsp²", "sp³d", "sp³d²"],
    3,
    "Six bond pairs and no lone pair around sulphur require six hybrid orbitals, i.e. sp³d² hybridisation with octahedral geometry.",
  ],
  [
    2025,
    "JEE Advanced",
    "Paper 2",
    "Physics",
    "Modern Physics",
    "Hard",
    "The de Broglie wavelength of an electron accelerated through potential V is proportional to",
    ["V", "√V", "1/√V", "1/V"],
    2,
    "λ = h/√(2meV), so the wavelength varies inversely with the square root of the accelerating potential.",
  ],
  [
    2025,
    "JEE Main",
    "Session 2 · Shift 2",
    "Mathematics",
    "Probability",
    "Medium",
    "A coin is tossed three times. The probability of getting exactly two heads is",
    ["1/8", "3/8", "1/2", "5/8"],
    1,
    "Favourable outcomes are HHT, HTH, THH — three of eight equally likely outcomes, giving 3/8.",
  ],
  [
    2024,
    "JEE Main",
    "Session 1 · Shift 2",
    "Chemistry",
    "Electrochemistry",
    "Medium",
    "During electrolysis of molten NaCl, the product at the cathode is",
    ["Cl₂", "Na", "NaOH", "H₂"],
    1,
    "Reduction occurs at the cathode, so sodium ions gain electrons and molten sodium metal is deposited.",
  ],
  [
    2024,
    "JEE Main",
    "Session 2 · Shift 1",
    "Physics",
    "Current Electricity",
    "Easy",
    "The drift velocity of electrons in a conductor is directly proportional to",
    ["Cross-sectional area", "Applied electric field", "Length of conductor", "Resistivity"],
    1,
    "v_d = (eE/m)τ, so drift velocity increases linearly with the applied electric field.",
  ],
  [
    2024,
    "JEE Advanced",
    "Paper 1",
    "Mathematics",
    "Coordinate Geometry",
    "Hard",
    "The eccentricity of the ellipse x²/25 + y²/9 = 1 is",
    ["3/5", "4/5", "5/4", "16/25"],
    1,
    "e = √(1 − b²/a²) = √(1 − 9/25) = 4/5.",
  ],
  [
    2024,
    "JEE Main",
    "Session 1 · Shift 1",
    "Mathematics",
    "Quadratic Equations",
    "Easy",
    "The equation x² + 4x + 5 = 0 has",
    ["Two real distinct roots", "Two equal real roots", "Two complex roots", "One real root"],
    2,
    "Discriminant = 16 − 20 = −4 < 0, so the roots are a pair of complex conjugates.",
  ],
  [
    2023,
    "JEE Main",
    "Session 2 · Shift 2",
    "Physics",
    "Optics",
    "Medium",
    "A convex lens of focal length 20 cm forms a real image at 60 cm. The object distance is",
    ["15 cm", "20 cm", "30 cm", "40 cm"],
    2,
    "Using 1/v − 1/u = 1/f with v = 60 and f = 20 gives u = −30 cm, i.e. the object is 30 cm from the lens.",
  ],
  [
    2023,
    "JEE Main",
    "Session 1 · Shift 1",
    "Chemistry",
    "Mole Concept",
    "Easy",
    "The number of molecules in 0.5 mol of oxygen gas is approximately",
    ["3.01 × 10²³", "6.02 × 10²³", "1.20 × 10²⁴", "0.5 × 10²³"],
    0,
    "N = n × N_A = 0.5 × 6.02 × 10²³ ≈ 3.01 × 10²³ molecules.",
  ],
  [
    2023,
    "JEE Advanced",
    "Paper 2",
    "Chemistry",
    "Organic Fundamentals",
    "Hard",
    "Which species is the strongest nucleophile in a polar aprotic solvent?",
    ["F⁻", "Cl⁻", "Br⁻", "I⁻"],
    0,
    "In polar aprotic solvents anions are poorly solvated, so nucleophilicity follows basicity: fluoride, the most basic halide, is the strongest nucleophile.",
  ],
  [
    2022,
    "JEE Main",
    "Session 1 · Shift 2",
    "Mathematics",
    "Differential Calculus",
    "Medium",
    "If y = sin(2x), then dy/dx at x = 0 equals",
    ["0", "1", "2", "−2"],
    2,
    "dy/dx = 2cos(2x); at x = 0 this equals 2.",
  ],
  [
    2022,
    "JEE Main",
    "Session 2 · Shift 1",
    "Physics",
    "Thermodynamics",
    "Medium",
    "The efficiency of a Carnot engine working between 500 K and 300 K is",
    ["20%", "40%", "60%", "80%"],
    1,
    "η = 1 − T_c/T_h = 1 − 300/500 = 0.4, i.e. 40%.",
  ],
  [
    2022,
    "JEE Advanced",
    "Paper 1",
    "Physics",
    "Magnetism",
    "Hard",
    "A wire of length L carrying current I is bent into a circular loop. The magnetic moment of the loop is",
    ["IL²/4π", "IL²/2π", "IL²/π", "2IL²/π"],
    0,
    "Radius r = L/2π, area A = πr² = L²/4π, and magnetic moment M = IA = IL²/4π.",
  ],
  [
    2021,
    "JEE Main",
    "Session 1 · Shift 1",
    "Chemistry",
    "Atomic Structure",
    "Easy",
    "The number of unpaired electrons in a ground-state nitrogen atom is",
    ["1", "2", "3", "5"],
    2,
    "Nitrogen has the configuration 1s²2s²2p³; the three 2p electrons occupy separate orbitals with parallel spins.",
  ],
  [
    2021,
    "JEE Main",
    "Session 2 · Shift 2",
    "Mathematics",
    "Sequences, Series & Binomial",
    "Medium",
    "The number of terms in the expansion of (x + y)¹⁰ is",
    ["9", "10", "11", "12"],
    2,
    "A binomial expansion of degree n contains n + 1 terms, so eleven terms here.",
  ],
  [
    2021,
    "JEE Advanced",
    "Paper 2",
    "Mathematics",
    "Vectors & 3D Geometry",
    "Hard",
    "The angle between the vectors i + j and j + k is",
    ["30°", "45°", "60°", "90°"],
    2,
    "cos θ = (0 + 1 + 0)/(√2 · √2) = 1/2, so θ = 60°.",
  ],
  [
    2020,
    "JEE Main",
    "Session 1 · Shift 1",
    "Physics",
    "Kinematics",
    "Easy",
    "A body starts from rest with uniform acceleration a. The distance covered in the nth second is",
    ["a n", "a(2n − 1)/2", "a n²/2", "a(n − 1)"],
    1,
    "s_n = u + a(2n − 1)/2, and with u = 0 this reduces to a(2n − 1)/2.",
  ],
  [
    2020,
    "JEE Main",
    "Session 2 · Shift 1",
    "Chemistry",
    "Periodic Table & Trends",
    "Medium",
    "Which element has the highest first ionisation enthalpy?",
    ["Li", "Be", "B", "N"],
    3,
    "Ionisation enthalpy generally increases across the period; nitrogen's half-filled 2p³ configuration gives it extra stability and the highest value among these.",
  ],
  [
    2020,
    "JEE Advanced",
    "Paper 1",
    "Chemistry",
    "Thermodynamics & Equilibrium",
    "Hard",
    "For a spontaneous process at constant temperature and pressure",
    ["ΔG > 0", "ΔG = 0", "ΔG < 0", "ΔH < 0 always"],
    2,
    "Spontaneity at constant T and P is governed by the Gibbs free energy: the process proceeds when ΔG is negative.",
  ],
];

export const pyqs: Pyq[] = pyqSeed.map((row, i) => ({
  id: `pyq-${i + 1}`,
  year: row[0],
  exam: row[1],
  session: row[2],
  subject: row[3],
  chapter: row[4],
  difficulty: row[5],
  type: "MCQ",
  text: row[6],
  options: row[7],
  answer: row[8],
  explanation: row[9],
}));

export const PYQ_YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

/* ------------------------------------------------------------------ */
/* Lectures                                                            */
/* ------------------------------------------------------------------ */

export type Lecture = {
  id: string;
  title: string;
  subject: Subject;
  chapter: string;
  facultyId: string;
  duration: string;
  minutes: number;
  progress: number;
  description: string;
};

export const lectures: Lecture[] = [
  {
    id: "phy-rot-01",
    title: "Lecture 01 — Introduction to Rotational Motion",
    subject: "Physics",
    chapter: "Rotational Motion",
    facultyId: "cds-sir",
    duration: "48 min",
    minutes: 48,
    progress: 100,
    description:
      "Rigid bodies, angular displacement, angular velocity and the translation–rotation analogy that makes the rest of the chapter predictable.",
  },
  {
    id: "phy-rot-02",
    title: "Lecture 02 — Moment of Inertia",
    subject: "Physics",
    chapter: "Rotational Motion",
    facultyId: "cds-sir",
    duration: "56 min",
    minutes: 56,
    progress: 100,
    description:
      "Deriving moment of inertia for standard bodies, plus the parallel and perpendicular axis theorems with worked examples.",
  },
  {
    id: "phy-rot-03",
    title: "Lecture 03 — Rolling Motion",
    subject: "Physics",
    chapter: "Rotational Motion",
    facultyId: "cds-sir",
    duration: "52 min",
    minutes: 52,
    progress: 100,
    description:
      "Rolling without slipping, the condition v = ωR, energy distribution and inclined plane problems.",
  },
  {
    id: "phy-rot-04",
    title: "Lecture 04 — Advanced Problems",
    subject: "Physics",
    chapter: "Rotational Motion",
    facultyId: "cds-sir",
    duration: "64 min",
    minutes: 64,
    progress: 62,
    description:
      "Multi-body rotation problems, angular momentum conservation and Advanced-level question framing.",
  },
  {
    id: "phy-kin-01",
    title: "Lecture 01 — Motion in a Straight Line",
    subject: "Physics",
    chapter: "Kinematics",
    facultyId: "cds-sir",
    duration: "44 min",
    minutes: 44,
    progress: 100,
    description: "Displacement, velocity, acceleration and reading motion graphs correctly.",
  },
  {
    id: "phy-kin-02",
    title: "Lecture 02 — Projectile Motion",
    subject: "Physics",
    chapter: "Kinematics",
    facultyId: "cds-sir",
    duration: "50 min",
    minutes: 50,
    progress: 100,
    description: "Two-dimensional motion, range and height relations, and projectiles on inclines.",
  },
  {
    id: "phy-elec-01",
    title: "Lecture 01 — Coulomb's Law & Electric Field",
    subject: "Physics",
    chapter: "Electrostatics",
    facultyId: "cds-sir",
    duration: "47 min",
    minutes: 47,
    progress: 40,
    description: "Force between charges, superposition and field due to continuous distributions.",
  },
  {
    id: "phy-elec-02",
    title: "Lecture 02 — Gauss's Law Applications",
    subject: "Physics",
    chapter: "Electrostatics",
    facultyId: "cds-sir",
    duration: "58 min",
    minutes: 58,
    progress: 0,
    description: "Symmetry-based flux calculations for spheres, cylinders and infinite sheets.",
  },
  {
    id: "chem-bond-01",
    title: "Lecture 01 — Ionic & Covalent Bonding",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    facultyId: "ananya-rao",
    duration: "45 min",
    minutes: 45,
    progress: 100,
    description: "Bond formation, lattice energy intuition and the covalent character of ionic bonds.",
  },
  {
    id: "chem-bond-02",
    title: "Lecture 02 — VSEPR & Molecular Geometry",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    facultyId: "ananya-rao",
    duration: "51 min",
    minutes: 51,
    progress: 55,
    description: "Predicting shapes from electron pairs and connecting geometry to dipole moment.",
  },
  {
    id: "chem-bond-03",
    title: "Lecture 03 — Hybridisation & MO Theory",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    facultyId: "ananya-rao",
    duration: "60 min",
    minutes: 60,
    progress: 0,
    description: "Hybrid orbital construction and molecular orbital diagrams for diatomic species.",
  },
  {
    id: "chem-org-01",
    title: "Lecture 01 — Electron Movement Basics",
    subject: "Chemistry",
    chapter: "Organic Fundamentals",
    facultyId: "ananya-rao",
    duration: "49 min",
    minutes: 49,
    progress: 100,
    description: "Inductive effect, resonance and hyperconjugation as one connected toolkit.",
  },
  {
    id: "chem-org-02",
    title: "Lecture 02 — Carbocation Stability",
    subject: "Chemistry",
    chapter: "Organic Fundamentals",
    facultyId: "ananya-rao",
    duration: "43 min",
    minutes: 43,
    progress: 30,
    description: "Ranking intermediates and using stability to predict major products.",
  },
  {
    id: "math-int-01",
    title: "Lecture 01 — Indefinite Integration Basics",
    subject: "Mathematics",
    chapter: "Integration",
    facultyId: "rahul-verma",
    duration: "54 min",
    minutes: 54,
    progress: 70,
    description: "Standard forms, substitution and building an integration decision tree.",
  },
  {
    id: "math-int-02",
    title: "Lecture 02 — Integration by Parts",
    subject: "Mathematics",
    chapter: "Integration",
    facultyId: "rahul-verma",
    duration: "47 min",
    minutes: 47,
    progress: 0,
    description: "Choosing u and dv reliably, plus recurring integral techniques.",
  },
  {
    id: "math-int-03",
    title: "Lecture 03 — Definite Integrals & Properties",
    subject: "Mathematics",
    chapter: "Integration",
    facultyId: "rahul-verma",
    duration: "58 min",
    minutes: 58,
    progress: 0,
    description: "Property-based evaluation that removes most of the computation.",
  },
  {
    id: "math-coord-01",
    title: "Lecture 01 — Straight Lines",
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    facultyId: "meera-iyer",
    duration: "46 min",
    minutes: 46,
    progress: 100,
    description: "Forms of a line, angle between lines and family-of-lines problems.",
  },
  {
    id: "math-coord-02",
    title: "Lecture 02 — Circles",
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    facultyId: "meera-iyer",
    duration: "52 min",
    minutes: 52,
    progress: 20,
    description: "Equation of a circle, tangents, chords and radical axis intuition.",
  },
  {
    id: "math-coord-03",
    title: "Lecture 03 — Parabola & Ellipse",
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    facultyId: "meera-iyer",
    duration: "61 min",
    minutes: 61,
    progress: 0,
    description: "Conic parameters, focal properties and Advanced-level conic problems.",
  },
];

/* ------------------------------------------------------------------ */
/* Live classes                                                        */
/* ------------------------------------------------------------------ */

export type LiveClass = {
  id: string;
  subject: Subject;
  title: string;
  facultyId: string;
  day: "Today" | "Tomorrow" | string;
  bucket: "today" | "week" | "upcoming";
  time: string;
  duration: string;
  chapter: string;
};

export const liveClasses: LiveClass[] = [
  {
    id: "lc-1",
    subject: "Physics",
    title: "Rotational Motion — Advanced Problem Solving",
    facultyId: "cds-sir",
    day: "Today",
    bucket: "today",
    time: "7:00 PM",
    duration: "90 min",
    chapter: "Rotational Motion",
  },
  {
    id: "lc-2",
    subject: "Chemistry",
    title: "Chemical Bonding — VSEPR Doubt Session",
    facultyId: "ananya-rao",
    day: "Today",
    bucket: "today",
    time: "9:00 PM",
    duration: "60 min",
    chapter: "Chemical Bonding",
  },
  {
    id: "lc-3",
    subject: "Mathematics",
    title: "Integration — Substitution Masterclass",
    facultyId: "rahul-verma",
    day: "Tomorrow",
    bucket: "week",
    time: "6:30 PM",
    duration: "90 min",
    chapter: "Integration",
  },
  {
    id: "lc-4",
    subject: "Physics",
    title: "Electrostatics — Gauss's Law Workshop",
    facultyId: "cds-sir",
    day: "Wednesday",
    bucket: "week",
    time: "7:00 PM",
    duration: "90 min",
    chapter: "Electrostatics",
  },
  {
    id: "lc-5",
    subject: "Chemistry",
    title: "Organic — Reaction Mechanism Drill",
    facultyId: "ananya-rao",
    day: "Thursday",
    bucket: "week",
    time: "8:00 PM",
    duration: "75 min",
    chapter: "Organic Fundamentals",
  },
  {
    id: "lc-6",
    subject: "Mathematics",
    title: "Coordinate Geometry — Conics Intensive",
    facultyId: "meera-iyer",
    day: "Friday",
    bucket: "week",
    time: "6:00 PM",
    duration: "90 min",
    chapter: "Coordinate Geometry",
  },
  {
    id: "lc-7",
    subject: "Physics",
    title: "Modern Physics — Photoelectric Effect",
    facultyId: "cds-sir",
    day: "Saturday",
    bucket: "week",
    time: "5:00 PM",
    duration: "60 min",
    chapter: "Modern Physics",
  },
  {
    id: "lc-8",
    subject: "Mathematics",
    title: "Probability — Conditional & Bayes",
    facultyId: "rahul-verma",
    day: "Next Monday",
    bucket: "upcoming",
    time: "7:30 PM",
    duration: "75 min",
    chapter: "Probability",
  },
  {
    id: "lc-9",
    subject: "Chemistry",
    title: "Electrochemistry — Nernst Equation Deep Dive",
    facultyId: "ananya-rao",
    day: "Next Tuesday",
    bucket: "upcoming",
    time: "8:30 PM",
    duration: "90 min",
    chapter: "Electrochemistry",
  },
  {
    id: "lc-10",
    subject: "Physics",
    title: "Full Test Discussion — Physics Section",
    facultyId: "cds-sir",
    day: "Next Sunday",
    bucket: "upcoming",
    time: "11:00 AM",
    duration: "120 min",
    chapter: "Mixed Revision",
  },
  {
    id: "lc-11",
    subject: "Mathematics",
    title: "Quadratic Equations — Speed Round",
    facultyId: "meera-iyer",
    day: "Next Wednesday",
    bucket: "upcoming",
    time: "6:00 PM",
    duration: "60 min",
    chapter: "Quadratic Equations",
  },
];

/* ------------------------------------------------------------------ */
/* Mock tests                                                          */
/* ------------------------------------------------------------------ */

export type MockTest = {
  id: string;
  title: string;
  exam: Exam;
  marks: number;
  questionCount: number;
  minutes: number;
  subjects: string;
  attempted: boolean;
  difficulty: Difficulty;
  description: string;
};

export const mockTests: MockTest[] = [
  {
    id: "main-full-01",
    title: "JEE Main Full Test 01",
    exam: "JEE Main",
    marks: 300,
    questionCount: 75,
    minutes: 180,
    subjects: "Physics · Chemistry · Mathematics",
    attempted: true,
    difficulty: "Medium",
    description:
      "Full syllabus paper built on the current JEE Main pattern with section-wise timing analysis.",
  },
  {
    id: "adv-phy-challenge",
    title: "JEE Advanced Physics Challenge",
    exam: "JEE Advanced",
    marks: 180,
    questionCount: 36,
    minutes: 120,
    subjects: "Physics",
    attempted: false,
    difficulty: "Hard",
    description:
      "Advanced-pattern Physics paper with multi-correct, integer and paragraph-based questions.",
  },
  {
    id: "main-full-02",
    title: "JEE Main Full Test 02",
    exam: "JEE Main",
    marks: 300,
    questionCount: 75,
    minutes: 180,
    subjects: "Physics · Chemistry · Mathematics",
    attempted: false,
    difficulty: "Medium",
    description: "Second full-length Main paper with a heavier Chemistry weightage.",
  },
  {
    id: "chem-part-test",
    title: "Chemistry Part Test — Physical + Organic",
    exam: "JEE Main",
    marks: 100,
    questionCount: 25,
    minutes: 60,
    subjects: "Chemistry",
    attempted: false,
    difficulty: "Easy",
    description: "Short diagnostic test to locate weak chapters in Physical and Organic Chemistry.",
  },
  {
    id: "adv-math-paper",
    title: "JEE Advanced Mathematics Paper",
    exam: "JEE Advanced",
    marks: 180,
    questionCount: 36,
    minutes: 120,
    subjects: "Mathematics",
    attempted: false,
    difficulty: "Hard",
    description: "Advanced Mathematics paper focused on calculus and coordinate geometry depth.",
  },
  {
    id: "rapid-revision",
    title: "Rapid Revision Test — Mechanics",
    exam: "JEE Main",
    marks: 80,
    questionCount: 20,
    minutes: 45,
    subjects: "Physics",
    attempted: true,
    difficulty: "Medium",
    description: "Twenty high-frequency Mechanics questions to run before a revision cycle.",
  },
];

export const testResult = {
  score: 214,
  total: 300,
  percentile: 94.6,
  accuracy: 86,
  correct: 64,
  incorrect: 9,
  skipped: 2,
  rank: 1284,
  timeTaken: "168 min",
  subjectBreakdown: [
    { subject: "Physics", value: 78, marks: 72, total: 100 },
    { subject: "Chemistry", value: 91, marks: 82, total: 100 },
    { subject: "Mathematics", value: 82, marks: 60, total: 100 },
  ],
  strong: ["Kinematics", "Mole Concept", "Quadratic Equations", "Thermodynamics"],
  weak: ["Rotational Motion", "Electrochemistry", "Definite Integration"],
  recommended: [
    "Revise moment of inertia derivations before the next full test",
    "Redo 20 Electrochemistry PYQs from 2022–2025",
    "Complete the definite integration property set in the question bank",
  ],
};

/* ------------------------------------------------------------------ */
/* Leaderboard                                                         */
/* ------------------------------------------------------------------ */

export type LeaderRow = {
  rank: number;
  name: string;
  score: number;
  accuracy: number;
  tests: number;
  isCurrentUser?: boolean;
};

export const leaderboard: Record<"weekly" | "monthly" | "allTime", LeaderRow[]> = {
  weekly: [
    { rank: 1, name: "Aarav Menon", score: 2840, accuracy: 92, tests: 6 },
    { rank: 2, name: "Riya Sharma", score: 2715, accuracy: 90, tests: 6 },
    { rank: 3, name: "Aditya Nair", score: 2680, accuracy: 88, tests: 5 },
    { rank: 4, name: "Sana Qureshi", score: 2604, accuracy: 87, tests: 6 },
    { rank: 5, name: "Guffran", score: 2540, accuracy: 86, tests: 5, isCurrentUser: true },
    { rank: 6, name: "Kabir Deshmukh", score: 2488, accuracy: 84, tests: 5 },
    { rank: 7, name: "Ishita Roy", score: 2401, accuracy: 83, tests: 4 },
    { rank: 8, name: "Vivaan Gupta", score: 2350, accuracy: 82, tests: 5 },
    { rank: 9, name: "Meher Kaur", score: 2288, accuracy: 80, tests: 4 },
    { rank: 10, name: "Rohan Bhat", score: 2210, accuracy: 79, tests: 4 },
    { rank: 11, name: "Tanvi Joshi", score: 2154, accuracy: 78, tests: 4 },
    { rank: 12, name: "Arjun Pillai", score: 2098, accuracy: 77, tests: 3 },
  ],
  monthly: [
    { rank: 1, name: "Riya Sharma", score: 11240, accuracy: 91, tests: 22 },
    { rank: 2, name: "Aarav Menon", score: 11095, accuracy: 90, tests: 21 },
    { rank: 3, name: "Sana Qureshi", score: 10880, accuracy: 89, tests: 22 },
    { rank: 4, name: "Guffran", score: 10420, accuracy: 85, tests: 20, isCurrentUser: true },
    { rank: 5, name: "Aditya Nair", score: 10310, accuracy: 86, tests: 19 },
    { rank: 6, name: "Kabir Deshmukh", score: 9980, accuracy: 84, tests: 20 },
    { rank: 7, name: "Ishita Roy", score: 9640, accuracy: 83, tests: 18 },
    { rank: 8, name: "Vivaan Gupta", score: 9420, accuracy: 82, tests: 19 },
    { rank: 9, name: "Meher Kaur", score: 9105, accuracy: 80, tests: 17 },
    { rank: 10, name: "Rohan Bhat", score: 8890, accuracy: 79, tests: 18 },
  ],
  allTime: [
    { rank: 1, name: "Aarav Menon", score: 48210, accuracy: 91, tests: 96 },
    { rank: 2, name: "Riya Sharma", score: 47640, accuracy: 90, tests: 94 },
    { rank: 3, name: "Aditya Nair", score: 45980, accuracy: 88, tests: 92 },
    { rank: 4, name: "Sana Qureshi", score: 44720, accuracy: 88, tests: 90 },
    { rank: 5, name: "Kabir Deshmukh", score: 42150, accuracy: 85, tests: 88 },
    { rank: 6, name: "Guffran", score: 41380, accuracy: 84, tests: 86, isCurrentUser: true },
    { rank: 7, name: "Ishita Roy", score: 40120, accuracy: 83, tests: 84 },
    { rank: 8, name: "Vivaan Gupta", score: 38940, accuracy: 82, tests: 82 },
    { rank: 9, name: "Meher Kaur", score: 37610, accuracy: 81, tests: 80 },
    { rank: 10, name: "Rohan Bhat", score: 36480, accuracy: 79, tests: 78 },
  ],
};

/* ------------------------------------------------------------------ */
/* Notifications                                                       */
/* ------------------------------------------------------------------ */

export type Notification = {
  id: string;
  title: string;
  body: string;
  time: string;
  kind: "class" | "content" | "progress" | "test" | "streak";
};

export const notifications: Notification[] = [
  {
    id: "n1",
    title: "Physics live class starts in 30 minutes",
    body: "Rotational Motion — Advanced Problem Solving with CDS Sir at 7:00 PM.",
    time: "6:30 PM",
    kind: "class",
  },
  {
    id: "n2",
    title: "New JEE Main PYQ set added",
    body: "2026 Session 1 Shift 2 questions are now live in the PYQ library.",
    time: "2 hours ago",
    kind: "content",
  },
  {
    id: "n3",
    title: "You completed 3 chapters this week",
    body: "Rotational Motion, Kinematics and Mole Concept crossed 90% completion.",
    time: "Yesterday",
    kind: "progress",
  },
  {
    id: "n4",
    title: "Your 14-day study streak continues!",
    body: "Keep the streak alive — 25 minutes of practice today is enough.",
    time: "Yesterday",
    kind: "streak",
  },
  {
    id: "n5",
    title: "Test result published",
    body: "JEE Main Full Test 01 — you scored 214/300 at 94.6 percentile.",
    time: "2 days ago",
    kind: "test",
  },
  {
    id: "n6",
    title: "Chemistry doubt session scheduled",
    body: "Dr. Ananya Rao has added a VSEPR doubt session tonight at 9:00 PM.",
    time: "2 days ago",
    kind: "class",
  },
  {
    id: "n7",
    title: "Weak area detected: Electrochemistry",
    body: "Your accuracy dropped to 49%. A targeted 20-question set is ready.",
    time: "3 days ago",
    kind: "progress",
  },
  {
    id: "n8",
    title: "New lecture uploaded",
    body: "Integration — Definite Integrals & Properties is now available.",
    time: "4 days ago",
    kind: "content",
  },
  {
    id: "n9",
    title: "Leaderboard update",
    body: "You moved up 3 places in this week's ranking.",
    time: "5 days ago",
    kind: "progress",
  },
  {
    id: "n10",
    title: "Upcoming test reminder",
    body: "JEE Main Full Test 02 opens this weekend. Block 3 hours in your schedule.",
    time: "6 days ago",
    kind: "test",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials & pricing                                              */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    name: "Aarav",
    exam: "JEE Main 2026 aspirant",
    metric: "Accuracy 64% → 88%",
    quote:
      "The weak-area sets are the reason I stopped repeating the same mistakes. I finally know what to revise instead of guessing.",
  },
  {
    name: "Riya",
    exam: "JEE Main + Advanced aspirant",
    metric: "42 full-length tests completed",
    quote:
      "Every test comes back with an analysis I can actually act on. My Chemistry section went from my weakest to my most reliable.",
  },
  {
    name: "Aditya",
    exam: "Dropper · JEE Advanced target",
    metric: "Study streak of 96 days",
    quote:
      "As a dropper I needed structure more than content. The daily plan keeps me honest even on low-motivation days.",
  },
  {
    name: "Sana",
    exam: "JEE Main 2027 aspirant",
    metric: "Physics completion 31% → 74%",
    quote:
      "PYQ practice mapped to each chapter changed how I study. I now finish a chapter only when the PYQs are done.",
  },
];

export const plans = [
  {
    id: "basic",
    name: "Catalyst Basic",
    price: 2999,
    tagline: "Self-paced preparation with structure",
    features: [
      "Recorded classes across all subjects",
      "Full question bank access",
      "Previous year question library",
      "Progress tracking dashboard",
      "Chapter-wise completion records",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Catalyst Pro",
    price: 4999,
    tagline: "The complete preparation system",
    features: [
      "Everything in Basic",
      "Live classes with faculty",
      "Full mock test series",
      "Advanced performance analytics",
      "Faculty doubt sessions",
      "Weak-area revision plans",
    ],
    highlighted: true,
  },
  {
    id: "advanced",
    name: "Catalyst Advanced",
    price: 7999,
    tagline: "Built for JEE Advanced targets",
    features: [
      "Everything in Pro",
      "JEE Advanced exclusive content",
      "Advanced pattern test series",
      "Premium learning resources",
      "Problem-solving workshops",
      "Priority doubt resolution",
    ],
    highlighted: false,
  },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
