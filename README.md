# Compliance Gap Assessment Tracker

A practical final-year web project to track cybersecurity compliance status, identify control gaps, and monitor remediation actions.

## Project Modules

1. Compliance requirement list (control register)
2. Gap identification with status updates
3. Dashboard with compliance score and gap percentage
4. Action plan management for remediation tracking
5. Evidence upload metadata tracking

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Storage: Browser LocalStorage (for offline demo use)

## Key Features

- Add and manage compliance controls (ISO 27001, NIST CSF, PCI DSS, SOC 2, Custom)
- Mark controls as `Compliant`, `Partially Compliant`, or `Non-Compliant`
- Monitor KPIs: total controls, open gaps, overdue actions, compliance score
- Track remediation actions with owner, due date, and status
- Maintain evidence references (file metadata)
- View a simple risk heat map by priority and status
- Export consolidated data as CSV and print a report summary
- Load demo data for viva/presentation quickly

## How To Run

1. Open `index.html` in a browser.
2. `index.html` works as the Intro page.
3. Open `dashboard.html` from the Intro page to perform assessments.
4. Click `Load Demo Data` to see a complete sample workflow quickly.
5. Open `completion.html` to view final assessment summary and pending actions.
6. Export report using `Export CSV Report`.

## Suggested Viva Demo Flow

1. Add one control requirement.
2. Mark it `Partially Compliant` in Gap Identification.
3. Create an action plan with owner and due date.
4. Show dashboard score and open gap count changes.
5. Export the report CSV.

## Note

Evidence uploads are stored as file metadata only (name and size) for simple browser-based demo purposes.
