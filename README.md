# JEE Catalyst Studio

Build JEE Catalyst — Premium Investor Demo MVP

Build a complete, polished, investor-ready EdTech web application called JEE Catalyst.

This is a frontend-only investor demonstration MVP. There must be NO BACKEND.

The application must look and behave like a real, production-quality JEE preparation platform, but all data, authentication, progress, questions, test results, enrollments, bookmarks, notifications, and interactions must be simulated entirely on the frontend.

The goal is to give an investor a convincing, fully clickable product experience.

1. PRODUCT POSITIONING

Product name:

JEE Catalyst

Core positioning:

A focused JEE preparation platform built for students who want structured preparation, measurable progress, and disciplined learning.

Primary audience:

JEE Main students

JEE Advanced students

Partial droppers

Students preparing through structured self-paced + live learning

The product should feel like a serious premium EdTech startup, NOT a college project, generic dashboard template, or basic CRUD application.

The design should take inspiration from the information architecture of platforms such as Physics Wallah, Vedantu, Unacademy, Allen Digital and Adda247, but DO NOT copy their branding, layouts, text, or visual identity.

2. CRITICAL DEVELOPMENT CONSTRAINT

FRONTEND ONLY — ABSOLUTELY NO BACKEND

Do NOT create:

Backend servers

Database

Supabase

Firebase

MongoDB

PostgreSQL

Authentication API

Payment API

External API dependencies

AI APIs

Server-side data persistence

Real video streaming infrastructure

Real payment gateway

Real-time backend

Everything must work from the frontend using:

Static mock data

Local state

React state/context where appropriate

localStorage only if useful for demo persistence

Simulated loading states

Simulated success/error states

Mock user profile

Mock course enrollment

Mock progress

Mock questions

Mock test results

Mock leaderboard

Mock notifications

The application should remain fully usable after refresh wherever practical by using localStorage.

3. TECH STACK

Use:

React

TypeScript

Vite or the Lovable-supported React setup

Tailwind CSS

shadcn/ui

Lucide icons

Recharts for analytics

Framer Motion for subtle animations

Use reusable components and clean architecture.

Do NOT over-engineer the application.

The priority is:

Visual quality

User experience

Smooth navigation

Realistic demo interactions

Responsive design

Clean reusable components

4. DESIGN DIRECTION

Create a premium modern EdTech visual identity.

Primary visual direction:

Deep Navy + Gold + White

Suggested palette:

Deep navy / midnight blue backgrounds

Gold accent for CTAs, achievements and important highlights

White / warm-white content areas

Subtle neutral grays

Very limited use of additional accent colors

Do not make every section dark.

Use:

White dashboard surfaces

Navy navigation/header

Gold highlights

Elegant gradients

Soft shadows

Subtle borders

Large rounded cards

Modern typography

Excellent spacing

Strong visual hierarchy

The website must feel:

Premium

Trustworthy

Academic

Ambitious

Modern

Focused

Investor-ready

Avoid:

Excessive gradients

Neon colors

Generic SaaS dashboard appearance

Excessive glassmorphism

Huge unnecessary animations

Cartoonish education graphics

Empty screens

Lorem ipsum

Generic placeholder UI

5. BRANDING

Use the following consistently:

Logo:
JEE Catalyst

Possible tagline:

“Turn preparation into progress.”

Hero positioning:

“Crack JEE with a preparation system built around your progress.”

Supporting line:

“Structured courses, PYQs, practice, live classes and measurable progress — all in one focused learning experience.”

CTA:

Start Learning

Explore Courses

Secondary CTA:

Explore PYQs

6. APPLICATION STRUCTURE

Create the following major routes/pages:

PUBLIC:

/
/courses
/courses/:courseId
/pyqs
/question-bank
/mock-tests
/faculty
/pricing
/about

STUDENT EXPERIENCE:

/onboarding
/dashboard
/progress
/live-classes
/recorded-classes
/recorded-classes/:lectureId
/test/:testId
/test/:testId/result
/leaderboard
/bookmarks
/notifications
/profile

Use React Router or the routing mechanism supported by the project.

Every navigation item must actually navigate somewhere.

No dead buttons.

If a feature is simulated, provide a realistic frontend response.

7. LANDING PAGE

Build an exceptionally polished landing page.

Hero section

Headline:

“Crack JEE with a preparation system built around your progress.”

Supporting copy:

“Structured learning, targeted practice, PYQs, live classes and performance insights designed to help serious JEE aspirants prepare with clarity.”

Primary CTA:
Start Learning

Secondary CTA:
Explore Courses

Include a premium hero visual showing a student learning dashboard / progress interface.

Do not use a generic stock-photo-heavy hero.

Show product UI inside the hero where possible.

Trust / credibility strip

Create a polished credibility section containing:

Structured JEE Preparation

Expert Faculty

PYQ-Based Practice

Progress Tracking

Mock Tests

Use subtle icons.

Why JEE Catalyst

Show 4–6 feature cards:

Structured Preparation

Practice That Matters

Track Every Milestone

Learn From Expert Faculty

Master Previous Year Questions

Stay Consistent

Product showcase

Create a visually impressive section showing screenshots/mockups of:

Student dashboard

Course page

Question bank

Progress analytics

Mock test results

Student results/testimonials

Use realistic demo testimonials.

Clearly make them demo content rather than claiming fabricated real-world results.

Example students:

Aarav

Riya

Aditya

Sana

Include:

Short quote

Target exam

Progress/result metric

Do NOT fabricate claims like “AIR 1” or guaranteed selections.

Faculty preview

Show 3–4 faculty cards.

Example:

CDS Sir
Physics
JEE Main + Advanced

Dr. Ananya Rao
Chemistry
Physical + Organic Chemistry

Rahul Verma
Mathematics
JEE Advanced

Use polished professional placeholder portraits.

Final CTA

“Your preparation deserves a system.”

CTA:
Start Your JEE Journey

8. ONBOARDING FLOW

Create a beautiful 3-step onboarding experience.

Step 1:
“What are you preparing for?”

Options:

JEE Main

JEE Advanced

JEE Main + Advanced

Step 2:
“Which subjects need the most attention?”

Options:

Physics

Chemistry

Mathematics

Allow multiple selection.

Step 3:
“What is your target?”

Examples:

Improve my percentile

Strengthen fundamentals

Crack JEE Advanced

Improve weak subjects

After completion:

Show a polished transition:

“Your preparation workspace is ready.”

Then redirect to:

/dashboard

Store the selected values in localStorage.

This is simulated personalization only.

9. STUDENT DASHBOARD

This is one of the MOST IMPORTANT pages.

Make it look extremely polished.

Header:

“Good morning, Guffran 👋”

Subtext:

“Let’s turn today’s preparation into progress.”

Show:

Overall Progress

Example:

68%

Overall course completion

Use a circular progress indicator.

Subject Progress

Physics:
72%

Chemistry:
64%

Mathematics:
69%

Use elegant progress bars.

Today's Focus

Example:

Complete Rotational Motion — 35 min

Attempt Electrostatics PYQs — 20 questions

Revise Organic Chemistry — 25 min

Each item should have a CTA.

Continue Learning

Show course/lecture card:

“Rotational Motion — Lecture 08”

Progress:
62%

CTA:
Continue Learning

Performance

Show:

Questions Attempted:
428

Accuracy:
81%

Tests Completed:
12

Study Streak:
14 days

Topics To Revise

Show:

Current Electricity

Chemical Bonding

Integration

Each with:
Review button.

Upcoming Class

Show:

Physics
Rotational Motion — Advanced Problem Solving

CDS Sir

Today
7:00 PM

CTA:
Join Class

Weekly Activity

Create a beautiful Recharts visualization.

Show study activity across 7 days.

10. COURSES PAGE

Create a premium course marketplace.

Filters:

Subject:

Physics

Chemistry

Mathematics

Exam:

JEE Main

JEE Advanced

Level:

Foundation

Advanced

Course cards should contain:

Course image

Course title

Faculty

Subject

Number of lectures

Number of practice questions

Duration

Rating

Price

CTA

Example courses:

Physics:
“Complete Physics — JEE Main & Advanced”

Chemistry:
“Chemistry Mastery — JEE Main”

Mathematics:
“Advanced Mathematics — JEE Advanced”

Include realistic pricing.

Example:

₹4,999
₹7,999

Show discounted pricing visually.

11. COURSE DETAIL PAGE

Create a detailed course page.

Sections:

Hero:

Course title

Faculty

Rating

Students enrolled (demo)

Price

Enroll Now

Course overview.

What you'll learn.

Syllabus:

Physics:
Mechanics
Thermodynamics
Electrostatics
Current Electricity
Magnetism
Optics
Modern Physics

Each chapter should expand/collapse.

Show lecture counts.

Show:

Video lessons

Practice questions

PYQs

Mock tests

Notes

Faculty section.

Course outcomes.

Sticky enrollment card on desktop.

When user clicks Enroll Now:

DO NOT call backend.

Show a polished modal:

“Enrollment Successful”

“Your course has been added to your learning dashboard.”

Then update frontend/localStorage state and change CTA to:

“Continue Learning”

12. QUESTION BANK

Create a highly polished question-practice interface.

Filters:

Subject:
Physics / Chemistry / Mathematics

Chapter

Difficulty:
Easy / Medium / Hard

Question type:
MCQ / Numerical

Search.

Question cards should show:

Question number
Difficulty
Subject
Chapter

Example:

“A particle is projected with velocity u at an angle θ...”

Provide 4 options.

Allow user to select an answer.

CTA:
Submit Answer

After submission:

Correct:
Show success state and explanation.

Incorrect:
Show correct answer and explanation.

Include:

Reveal Solution

Bookmark

Next Question

Previous Question

Progress:

Question 7 of 20

Score:

5/7

Accuracy:

71%

Everything is frontend state.

13. PYQ SECTION

Make PYQs a distinct major section.

Header:

“Previous Year Questions”

Subtext:

“Practice the questions that shaped the JEE.”

Filters:

Year:
2026
2025
2024
2023
2022
2021
2020

Exam:
JEE Main
JEE Advanced

Subject:
Physics
Chemistry
Mathematics

Chapter.

Difficulty.

Create question cards.

Each question supports:

Attempt
Reveal Solution
Bookmark
Next

Use realistic sample JEE-style questions.

Do not copy copyrighted question banks verbatim.

Use original demo questions written in the style/format of JEE questions.

14. PROGRESS TRACKER

Create a sophisticated analytics dashboard.

Show:

Overall completion:
68%

Physics:
72%

Chemistry:
64%

Mathematics:
69%

Chapter-level progress.

Use:

Progress bars

Donut charts

Line charts

Bar charts

Performance:

Questions attempted:
428

Correct:
347

Accuracy:
81%

Tests:
12

Average score:
142/300

Topic performance

Example:

Strong:

Kinematics

Mole Concept

Quadratic Equations

Needs Revision:

Rotation

Electrochemistry

Integration

Use appropriate visual indicators.

15. LIVE CLASSES

Create a timetable/calendar interface.

Tabs:

Today
This Week
Upcoming

Each class:

Subject
Class title
Faculty
Date
Time
Duration

Example:

Physics
Rotational Motion — Advanced Problems
CDS Sir
Today · 7:00 PM
90 min

CTA:
Join Class

When clicked:

Open a modal:

“Live Class”

“Your class is scheduled to begin shortly.”

Button:
Enter Demo Classroom

Clicking that opens a realistic mock classroom page.

No actual video streaming required.

Include a reminder toggle.

When toggled:

“Reminder set”

Use frontend state/localStorage.

16. RECORDED CLASSES

Build a Netflix-style but academic video library.

Hierarchy:

Subject
→ Chapter
→ Lecture

Filters.

Example:

Physics
Mechanics
Rotational Motion

Lecture 01 — Introduction
Lecture 02 — Moment of Inertia
Lecture 03 — Rolling Motion
Lecture 04 — Advanced Problems

Each lecture card:

Thumbnail
Duration
Progress
Completed badge

17. VIDEO PLAYER PAGE

Create a premium video-learning interface.

Large video area.

Use a safe placeholder/demo video area.

Below:

Lecture title
Faculty
Description

Progress:
62%

Buttons:

Mark Complete

Previous Lecture

Next Lecture

Right sidebar:

Course curriculum.

Current lecture highlighted.

Notes section:

“Download Lecture Notes”

For demo purposes, this can trigger a simulated download/toast.

18. MOCK TEST MODULE

This is a VERY IMPORTANT investor demo feature.

Create:

Mock Tests

Cards:

JEE Main Full Test 01
300 Marks
75 Questions
180 Minutes

JEE Advanced Physics Challenge
180 Marks
36 Questions
120 Minutes

CTA:
Start Test

Test interface

Header:

Test name
Timer

Question number navigation.

Question area.

Options.

Mark for Review.

Previous.

Next.

Submit Test.

Timer should actually count down using frontend JavaScript.

When submitted:

Show confirmation modal.

Then navigate to result page.

19. TEST RESULT PAGE

Create an impressive analytics screen.

Example:

“Test Completed”

Score:

214 / 300

Percentile:
94.6

Accuracy:
86%

Correct:
64

Incorrect:
9

Skipped:
2

Use charts.

Subject breakdown:

Physics
78%

Chemistry
91%

Mathematics
82%

Show:

Strong Areas
Needs Improvement
Recommended Revision

CTA:

Review Solutions

CTA:

Back to Dashboard

All numbers are mock data.

20. LEADERBOARD

Create a leaderboard page.

Tabs:

Weekly
Monthly
All Time

Columns:

Rank
Student
Score
Accuracy
Tests

Use fictional student names.

Example:

Aarav

Riya

Aditya

Sana

Kabir

Highlight the current demo user.

Do not claim this represents real students.

21. BOOKMARKS

Create:

Saved Questions

Tabs:
Question Bank
PYQs

Each bookmarked question should display:

Subject
Chapter
Difficulty
Question preview

CTA:
Practice

Allow frontend removal from bookmarks.

Persist bookmarks in localStorage.

22. FACULTY PAGE

Premium faculty showcase.

Each faculty:

Photo
Name
Subject
Experience
Specialization

Example:

CDS Sir
Physics
JEE Main + Advanced
“Concept-first problem solving”

Dr. Ananya Rao
Chemistry
Physical + Organic

Rahul Verma
Mathematics
Advanced Problem Solving

Click faculty → detailed profile.

Include:

About
Subjects
Courses
Teaching philosophy

Use polished cards.

23. PRICING PAGE

Create a polished pricing/business model page.

Plans:

Catalyst Basic

₹2,999

Recorded Classes

Question Bank

PYQs

Progress Tracking

Catalyst Pro

₹4,999

Everything in Basic

Live Classes

Mock Tests

Advanced Analytics

Faculty Sessions

Catalyst Advanced

₹7,999

Everything in Pro

JEE Advanced Content

Advanced Test Series

Premium Learning Resources

Make Pro visually highlighted.

CTA:

Start Learning

Since this is frontend-only, clicking purchase/enroll should show a simulated confirmation modal.

DO NOT implement a payment gateway.

24. NOTIFICATIONS

Create notification dropdown/page.

Examples:

“Physics live class starts in 30 minutes.”

“New JEE Main PYQ set added.”

“You completed 3 chapters this week.”

“Your 14-day study streak continues!”

Allow:
Mark as read.

Use localStorage if appropriate.

25. PROFILE PAGE

Create:

Profile photo/avatar

Name:
Guffran

Target:
JEE Main + Advanced

Target year:
2027

Strong subjects.

Weak subjects.

Study streak.

Overall progress.

Settings.

Include simulated edit functionality.

26. ABOUT / TEAM

Create an investor-friendly About page.

Sections:

Mission

“Make JEE preparation structured, measurable and accessible.”

Vision

Team.

Founder section.

Product philosophy.

Why JEE Catalyst.

Do not fabricate specific founder achievements, funding, partnerships, student numbers or results.

Use editable demo placeholders where actual founder/company information is unavailable.

27. NAVIGATION

Desktop:

Logo:
JEE Catalyst

Navigation:

Courses
Question Bank
PYQs
Mock Tests
Live Classes
Recorded Classes

Right side:

Notifications
Profile

For public pages:

Courses
PYQs
Faculty
Pricing
About

CTA:
Start Learning

28. MOBILE NAVIGATION

The website MUST be fully responsive.

On mobile:

Use bottom navigation for the main student experience:

Home
Learn
Practice
Progress
Profile

Use a hamburger menu for secondary navigation.

The requirements explicitly call for mobile-responsive design because many students will access the platform on phones.

29. GLOBAL INTERACTION REQUIREMENTS

There should be NO dead interactions.

Every major button should do something.

Examples:

Start Learning → onboarding

Explore Courses → courses

Enroll → simulated enrollment

Continue Learning → recorded lecture

Join Class → demo classroom

Start Test → test interface

Submit Test → result page

Reveal Solution → solution state

Bookmark → saves question

Reminder → toggles reminder

Mark Complete → updates progress

Next Lecture → next lecture

Profile Edit → frontend edit state

Notifications → notification panel

Search → filters mock content

Filters → dynamically filter displayed content

30. MOCK DATA SYSTEM

Create a centralized frontend mock-data layer.

Example structures:

courses
faculty
questions
pyqs
lectures
liveClasses
tests
leaderboard
notifications
studentProgress

Do NOT scatter hardcoded data across components.

Keep mock data reusable.

Create enough realistic data that the application never feels empty.

At minimum include:

10+ courses
30+ questions
20+ PYQs
15+ lectures
10+ live classes
5+ mock tests
10+ leaderboard entries
10+ notifications

31. DEMO USER

Use a demo student:

Name:
Guffran

Target:
JEE Main + Advanced

Target Year:
2027

Overall Progress:
68%

Accuracy:
81%

Study Streak:
14 days

Questions Attempted:
428

Tests Completed:
12

These are fictional demo values.

Make it easy to change them later.

32. LOADING / EMPTY / SUCCESS STATES

Create polished states.

Loading:
Skeleton loaders.

Success:
Toast notifications.

Error:
Friendly error states.

Empty:
Useful CTA rather than blank screen.

Example:

“No bookmarked questions yet.”

CTA:
Explore Question Bank

33. ANIMATIONS

Use Framer Motion sparingly.

Add:

Page transitions

Card hover

Button interactions

Progress animation

Dashboard number count-up

Modal transitions

Dropdown transitions

Do not over-animate.

The experience must feel fast.

34. ACCESSIBILITY

Implement:

Semantic HTML

Keyboard navigation

Proper labels

Focus states

Accessible dialogs

Good contrast

Responsive typography

35. PERFORMANCE

Optimize the frontend.

Avoid unnecessarily huge images.

Use lazy loading where appropriate.

Avoid excessive JavaScript.

Keep animations lightweight.

The investor should be able to navigate the product smoothly.

36. IMPORTANT: INVESTOR DEMO FLOW

Optimize the application specifically for this investor walkthrough:

Flow 1 — Product introduction

Landing
→ Start Learning
→ Onboarding
→ Dashboard

Flow 2 — Learning

Dashboard
→ Continue Learning
→ Recorded Lecture
→ Mark Complete
→ Progress Updated

Flow 3 — Practice

Dashboard
→ Question Bank
→ Filter Physics
→ Select Question
→ Submit
→ Reveal Solution
→ Bookmark

Flow 4 — PYQs

PYQs
→ 2025
→ Physics
→ Chapter
→ Attempt Question
→ Reveal Solution

Flow 5 — Assessment

Mock Tests
→ Start Test
→ Answer Questions
→ Submit
→ Result Analytics

Flow 6 — Engagement

Live Classes
→ Upcoming Class
→ Reminder
→ Join Demo Classroom

Flow 7 — Competition

Leaderboard
→ Weekly Ranking
→ Demo Student Position

These flows must work smoothly without any backend.

37. INVESTOR PRESENTATION QUALITY

This is critical.

When an investor opens the application, the first impression should be:

“This is a real EdTech product.”

Not:

“This is a prototype.”

Use realistic:

Data

Student activity

Course content

Questions

Faculty profiles

Progress

Test results

Notifications

Avoid:

Lorem ipsum

Empty dashboards

Placeholder buttons

“Coming soon” everywhere

Generic template copy

Broken routes

Console errors

38. FINAL QUALITY BAR

Before considering the project complete, test every route and interaction.

Verify:

No broken links

No console errors

No dead buttons

Responsive desktop

Responsive tablet

Responsive mobile

All forms work

Filters work

Search works

Bookmark works

Test timer works

Test submission works

Results page works

Progress updates visually

Enrollment simulation works

Notifications work

Live-class reminder works

Video-learning flow works

Navigation works

Refresh does not unnecessarily destroy demo state

39. DO NOT DO THESE THINGS

Do NOT:

Add backend

Add database

Add Supabase

Add Firebase

Add authentication API

Add payment gateway

Add AI features

Add ChatGPT integration

Add real-time infrastructure

Add unnecessary enterprise architecture

Use fake claims about real students

Copy competitor websites

Use copyrighted content verbatim

Leave placeholder Lorem Ipsum

Leave unfinished pages

Build only the landing page

The objective is a complete frontend-only clickable investor MVP.

40. FINAL DELIVERABLE

Deliver a complete responsive JEE Catalyst frontend application with:

Premium landing page

Onboarding

Student dashboard

Courses

Course details

Question Bank

PYQs

Progress Tracker

Live Classes

Recorded Classes

Video learning page

Mock Tests

Test interface

Test results

Leaderboard

Bookmarks

Notifications

Faculty

Pricing

Profile

About / Team

All functionality must work using frontend mock data and local state/localStorage.

Prioritize visual polish, product coherence, realistic content, smooth interactions, and investor-demo storytelling over backend complexity.

The finished application should feel like a premium JEE EdTech startup product ready to be demonstrated to investors.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://catalyst-prep-simulator.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/47c3db96-57c9-40c1-ae39-000eaae90c19).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
