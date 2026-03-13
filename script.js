const STORAGE_KEY = "compliance-tracker-v1";

const CONTROL_LIBRARY = {
  "ISO 27001": [
    { id: "A.5.1", requirement: "Information security policies" },
    { id: "A.5.2", requirement: "Information security roles and responsibilities" },
    { id: "A.5.3", requirement: "Segregation of duties" },
    { id: "A.5.4", requirement: "Management responsibilities" },
    { id: "A.5.5", requirement: "Contact with authorities" },
    { id: "A.5.6", requirement: "Contact with special interest groups" },
    { id: "A.5.7", requirement: "Threat intelligence" },
    { id: "A.5.8", requirement: "Information security in project management" },
    { id: "A.5.9", requirement: "Inventory of information and other associated assets" },
    { id: "A.5.10", requirement: "Acceptable use of information and associated assets" },
    { id: "A.5.11", requirement: "Return of assets" },
    { id: "A.5.12", requirement: "Classification of information" },
    { id: "A.5.13", requirement: "Labelling of information" },
    { id: "A.5.14", requirement: "Information transfer" },
    { id: "A.5.15", requirement: "Access control" },
    { id: "A.5.16", requirement: "Identity management" },
    { id: "A.5.17", requirement: "Authentication information" },
    { id: "A.5.18", requirement: "Access rights" },
    { id: "A.5.19", requirement: "Information security in supplier relationships" },
    { id: "A.5.20", requirement: "Addressing information security within supplier agreements" },
    { id: "A.5.21", requirement: "Managing information security in the ICT supply chain" },
    { id: "A.5.22", requirement: "Monitoring, review and change management of supplier services" },
    { id: "A.5.23", requirement: "Information security for use of cloud services" },
    { id: "A.5.24", requirement: "Information security incident management planning and preparation" },
    { id: "A.5.25", requirement: "Assessment and decision on information security events" },
    { id: "A.5.26", requirement: "Response to information security incidents" },
    { id: "A.5.27", requirement: "Learning from information security incidents" },
    { id: "A.5.28", requirement: "Collection of evidence" },
    { id: "A.5.29", requirement: "Information security during disruption" },
    { id: "A.5.30", requirement: "ICT readiness for business continuity" },
    { id: "A.5.31", requirement: "Legal, statutory, regulatory and contractual requirements" },
    { id: "A.5.32", requirement: "Intellectual property rights" },
    { id: "A.5.33", requirement: "Protection of records" },
    { id: "A.5.34", requirement: "Privacy and protection of personally identifiable information (PII)" },
    { id: "A.5.35", requirement: "Independent review of information security" },
    { id: "A.5.36", requirement: "Compliance with policies, rules and standards for information security" },
    { id: "A.5.37", requirement: "Documented operating procedures" },
    { id: "A.6.1", requirement: "Screening" },
    { id: "A.6.2", requirement: "Terms and conditions of employment" },
    { id: "A.6.3", requirement: "Information security awareness, education and training" },
    { id: "A.6.4", requirement: "Disciplinary process" },
    { id: "A.6.5", requirement: "Responsibilities after termination or change of employment" },
    { id: "A.6.6", requirement: "Confidentiality or non-disclosure agreements" },
    { id: "A.6.7", requirement: "Remote working" },
    { id: "A.6.8", requirement: "Information security event reporting" },
    { id: "A.7.1", requirement: "Physical security perimeters" },
    { id: "A.7.2", requirement: "Physical entry controls" },
    { id: "A.7.3", requirement: "Securing offices, rooms and facilities" },
    { id: "A.7.4", requirement: "Physical security monitoring" },
    { id: "A.7.5", requirement: "Protecting against physical and environmental threats" },
    { id: "A.7.6", requirement: "Working in secure areas" },
    { id: "A.7.7", requirement: "Clear desk and clear screen" },
    { id: "A.7.8", requirement: "Equipment siting and protection" },
    { id: "A.7.9", requirement: "Security of assets off-premises" },
    { id: "A.7.10", requirement: "Storage media" },
    { id: "A.7.11", requirement: "Supporting utilities" },
    { id: "A.7.12", requirement: "Cabling security" },
    { id: "A.7.13", requirement: "Equipment maintenance" },
    { id: "A.7.14", requirement: "Secure disposal or re-use of equipment" },
    { id: "A.8.1", requirement: "User endpoint devices" },
    { id: "A.8.2", requirement: "Privileged access rights" },
    { id: "A.8.3", requirement: "Information access restriction" },
    { id: "A.8.4", requirement: "Access to source code" },
    { id: "A.8.5", requirement: "Secure authentication" },
    { id: "A.8.6", requirement: "Capacity management" },
    { id: "A.8.7", requirement: "Protection against malware" },
    { id: "A.8.8", requirement: "Management of technical vulnerabilities" },
    { id: "A.8.9", requirement: "Configuration management" },
    { id: "A.8.10", requirement: "Information deletion" },
    { id: "A.8.11", requirement: "Data masking" },
    { id: "A.8.12", requirement: "Data leakage prevention" },
    { id: "A.8.13", requirement: "Information backup" },
    { id: "A.8.14", requirement: "Redundancy of information processing facilities" },
    { id: "A.8.15", requirement: "Logging" },
    { id: "A.8.16", requirement: "Monitoring activities" },
    { id: "A.8.17", requirement: "Clock synchronization" },
    { id: "A.8.18", requirement: "Use of privileged utility programs" },
    { id: "A.8.19", requirement: "Installation of software on operational systems" },
    { id: "A.8.20", requirement: "Network security" },
    { id: "A.8.21", requirement: "Security of network services" },
    { id: "A.8.22", requirement: "Segregation of networks" },
    { id: "A.8.23", requirement: "Web filtering" },
    { id: "A.8.24", requirement: "Use of cryptography" },
    { id: "A.8.25", requirement: "Secure development life cycle" },
    { id: "A.8.26", requirement: "Application security requirements" },
    { id: "A.8.27", requirement: "Secure system architecture and engineering principles" },
    { id: "A.8.28", requirement: "Secure coding" },
    { id: "A.8.29", requirement: "Security testing in development and acceptance" },
    { id: "A.8.30", requirement: "Outsourced development" },
    { id: "A.8.31", requirement: "Separation of development, test and production environments" },
    { id: "A.8.32", requirement: "Change management" },
    { id: "A.8.33", requirement: "Test information" },
    { id: "A.8.34", requirement: "Protection of information systems during audit testing" },
  ],
  "NIST CSF": [
    { id: "ID.AM-1", requirement: "Physical devices and systems are inventoried" },
    { id: "ID.AM-2", requirement: "Software platforms and applications are inventoried" },
    { id: "ID.AM-3", requirement: "Organizational communication and data flows are mapped" },
    { id: "ID.AM-4", requirement: "External information systems are catalogued" },
    { id: "ID.AM-5", requirement: "Resources are prioritized based on classification and criticality" },
    { id: "ID.AM-6", requirement: "Cybersecurity roles and responsibilities for the workforce are established" },
    { id: "ID.BE-1", requirement: "Organization's role in the supply chain is identified and communicated" },
    { id: "ID.BE-2", requirement: "Organization's place in critical infrastructure sector is identified" },
    { id: "ID.BE-3", requirement: "Priorities for organizational mission and objectives are established" },
    { id: "ID.BE-4", requirement: "Dependencies and critical functions for service delivery are established" },
    { id: "ID.BE-5", requirement: "Resilience requirements are established" },
    { id: "ID.GV-1", requirement: "Organizational cybersecurity policy is established and communicated" },
    { id: "ID.GV-2", requirement: "Cybersecurity roles and responsibilities are coordinated and aligned" },
    { id: "ID.GV-3", requirement: "Legal and regulatory requirements are understood and managed" },
    { id: "ID.GV-4", requirement: "Governance and risk management processes address cybersecurity risk" },
    { id: "ID.RA-1", requirement: "Asset vulnerabilities are identified and documented" },
    { id: "ID.RA-2", requirement: "Cyber threat intelligence is received from information sharing forums" },
    { id: "ID.RA-3", requirement: "Threats (internal and external) are identified and documented" },
    { id: "ID.RA-4", requirement: "Potential business impacts and likelihoods are identified" },
    { id: "ID.RA-5", requirement: "Threats, vulnerabilities and impacts are used to determine risk" },
    { id: "ID.RA-6", requirement: "Risk responses are identified and prioritized" },
    { id: "ID.RM-1", requirement: "Risk management processes are established and managed" },
    { id: "ID.RM-2", requirement: "Organizational risk tolerance is determined and communicated" },
    { id: "ID.RM-3", requirement: "Risk management strategy is established and communicated" },
    { id: "ID.SC-1", requirement: "Cyber supply chain risk management processes are identified" },
    { id: "ID.SC-2", requirement: "Suppliers and partners are identified and assessed" },
    { id: "ID.SC-3", requirement: "Contracts include cybersecurity requirements" },
    { id: "ID.SC-4", requirement: "Suppliers are monitored for cybersecurity compliance" },
    { id: "ID.SC-5", requirement: "Response and recovery planning includes suppliers and partners" },
    { id: "PR.AC-1", requirement: "Identities and credentials are managed" },
    { id: "PR.AC-2", requirement: "Physical access to assets is managed and protected" },
    { id: "PR.AC-3", requirement: "Remote access is managed" },
    { id: "PR.AC-4", requirement: "Access permissions are managed with least privilege" },
    { id: "PR.AC-5", requirement: "Network integrity is protected" },
    { id: "PR.AC-6", requirement: "Identities are verified and bound to credentials" },
    { id: "PR.AC-7", requirement: "Users and devices are authenticated" },
    { id: "PR.AT-1", requirement: "Users are informed and trained" },
    { id: "PR.AT-2", requirement: "Privileged users receive specialized training" },
    { id: "PR.AT-3", requirement: "Third-party stakeholders understand responsibilities" },
    { id: "PR.AT-4", requirement: "Senior executives understand cybersecurity roles" },
    { id: "PR.AT-5", requirement: "Physical and cybersecurity personnel coordinate activities" },
    { id: "PR.DS-1", requirement: "Data at rest is protected" },
    { id: "PR.DS-2", requirement: "Data in transit is protected" },
    { id: "PR.DS-3", requirement: "Assets are formally managed during removal or disposal" },
    { id: "PR.DS-4", requirement: "Adequate capacity ensures availability" },
    { id: "PR.DS-5", requirement: "Protections against data leaks are implemented" },
    { id: "PR.DS-6", requirement: "Integrity checking mechanisms verify software and information" },
    { id: "PR.DS-7", requirement: "Development and testing environments are separated" },
    { id: "PR.DS-8", requirement: "Data integrity is verified" },
    { id: "PR.IP-1", requirement: "Baseline configuration is created and maintained" },
    { id: "PR.IP-2", requirement: "Secure system development life cycle is implemented" },
    { id: "PR.IP-3", requirement: "Configuration change control processes exist" },
    { id: "PR.IP-4", requirement: "Backups are conducted and maintained" },
    { id: "PR.IP-5", requirement: "Policies for physical operating environment exist" },
    { id: "PR.IP-6", requirement: "Data is destroyed according to policy" },
    { id: "PR.IP-7", requirement: "Protection processes are improved continuously" },
    { id: "PR.IP-8", requirement: "Effectiveness of protection technologies is shared" },
    { id: "PR.IP-9", requirement: "Response and recovery plans are tested" },
    { id: "PR.IP-10", requirement: "Response and recovery plans are improved" },
    { id: "PR.IP-11", requirement: "Cybersecurity is included in HR practices" },
    { id: "PR.IP-12", requirement: "Vulnerability management plan is developed" },
    { id: "PR.MA-1", requirement: "Maintenance and repair are performed with approved tools" },
    { id: "PR.MA-2", requirement: "Remote maintenance is approved and logged" },
    { id: "PR.PT-1", requirement: "Audit logs are implemented and reviewed" },
    { id: "PR.PT-2", requirement: "Removable media is protected and restricted" },
    { id: "PR.PT-3", requirement: "Principle of least functionality is implemented" },
    { id: "PR.PT-4", requirement: "Communication and control networks are protected" },
    { id: "PR.PT-5", requirement: "Mechanisms protect network integrity" },
    { id: "DE.AE-1", requirement: "Baseline network operations are established" },
    { id: "DE.AE-2", requirement: "Detected events are analyzed" },
    { id: "DE.AE-3", requirement: "Event data are aggregated and correlated" },
    { id: "DE.AE-4", requirement: "Impact of events is determined" },
    { id: "DE.AE-5", requirement: "Incident alert thresholds are established" },
    { id: "DE.CM-1", requirement: "Network monitoring detects events" },
    { id: "DE.CM-2", requirement: "Physical environment monitoring detects events" },
    { id: "DE.CM-3", requirement: "Personnel activity monitoring detects events" },
    { id: "DE.CM-4", requirement: "Malicious code detection monitoring" },
    { id: "DE.CM-5", requirement: "Unauthorized mobile code detection" },
    { id: "DE.CM-6", requirement: "External service provider monitoring" },
    { id: "DE.CM-7", requirement: "Monitoring for unauthorized devices" },
    { id: "DE.CM-8", requirement: "Vulnerability scanning performed" },
    { id: "DE.DP-1", requirement: "Detection roles and responsibilities defined" },
    { id: "DE.DP-2", requirement: "Detection activities comply with requirements" },
    { id: "DE.DP-3", requirement: "Detection processes are tested" },
    { id: "DE.DP-4", requirement: "Event detection information communicated" },
    { id: "DE.DP-5", requirement: "Detection processes are improved" },
    { id: "RS.RP-1", requirement: "Response plan is executed during incidents" },
    { id: "RS.CO-1", requirement: "Personnel know roles during incidents" },
    { id: "RS.CO-2", requirement: "Incidents reported consistent with criteria" },
    { id: "RS.CO-3", requirement: "Information shared consistent with plans" },
    { id: "RS.CO-4", requirement: "Coordination with stakeholders" },
    { id: "RS.CO-5", requirement: "Voluntary information sharing" },
    { id: "RS.AN-1", requirement: "Notifications from detection systems are investigated" },
    { id: "RS.AN-2", requirement: "Impact of incident is understood" },
    { id: "RS.AN-3", requirement: "Forensic analysis performed" },
    { id: "RS.AN-4", requirement: "Incidents categorized" },
    { id: "RS.AN-5", requirement: "Processes established for receiving vulnerabilities" },
    { id: "RS.MI-1", requirement: "Incidents contained" },
    { id: "RS.MI-2", requirement: "Incidents mitigated" },
    { id: "RS.MI-3", requirement: "Newly identified vulnerabilities mitigated" },
    { id: "RS.IM-1", requirement: "Response plans improved" },
    { id: "RS.IM-2", requirement: "Response strategies updated" },
    { id: "RC.RP-1", requirement: "Recovery plan executed during incidents" },
    { id: "RC.IM-1", requirement: "Recovery plans improved" },
    { id: "RC.CO-1", requirement: "Public relations managed" },
    { id: "RC.CO-2", requirement: "Reputation repaired after incident" },
    { id: "RC.CO-3", requirement: "Recovery activities communicated" },
  ],
  "PCI DSS": [
    { id: "1.1", requirement: "Processes and mechanisms for installing and maintaining network security controls are defined and understood" },
    { id: "1.2", requirement: "Network security controls are configured and maintained" },
    { id: "1.3", requirement: "Network access to and from the cardholder data environment is restricted" },
    { id: "1.4", requirement: "Network connections between trusted and untrusted networks are controlled" },
    { id: "1.5", requirement: "Risks to the cardholder data environment from computing devices are managed" },
    { id: "2.1", requirement: "Processes and mechanisms for applying secure configurations are defined" },
    { id: "2.2", requirement: "Vendor default accounts and passwords are changed" },
    { id: "2.3", requirement: "Secure configuration standards are developed and implemented" },
    { id: "2.4", requirement: "Only necessary services, protocols and ports are enabled" },
    { id: "2.5", requirement: "Insecure services and protocols are not used" },
    { id: "2.6", requirement: "System security parameters are configured to prevent misuse" },
    { id: "3.1", requirement: "Processes and mechanisms for protecting stored cardholder data are defined" },
    { id: "3.2", requirement: "Storage of sensitive authentication data is prohibited after authorization" },
    { id: "3.3", requirement: "Sensitive cardholder data is masked when displayed" },
    { id: "3.4", requirement: "Stored cardholder data is protected using strong cryptography" },
    { id: "3.5", requirement: "Cryptographic keys are protected" },
    { id: "3.6", requirement: "Cryptographic key management processes are implemented" },
    { id: "4.1", requirement: "Processes and mechanisms for protecting transmitted cardholder data are defined" },
    { id: "4.2", requirement: "Strong cryptography and security protocols are used during transmission" },
    { id: "5.1", requirement: "Processes and mechanisms for protecting against malware are defined" },
    { id: "5.2", requirement: "Anti-malware solutions are deployed and maintained" },
    { id: "5.3", requirement: "Anti-malware mechanisms are actively running and updated" },
    { id: "5.4", requirement: "Anti-malware logs are retained and reviewed" },
    { id: "6.1", requirement: "Processes and mechanisms for secure development are defined" },
    { id: "6.2", requirement: "Software development processes incorporate security" },
    { id: "6.3", requirement: "Security vulnerabilities are identified and addressed" },
    { id: "6.4", requirement: "Security patches are installed" },
    { id: "6.5", requirement: "Secure coding practices are followed" },
    { id: "6.6", requirement: "Web applications are protected" },
    { id: "7.1", requirement: "Processes and mechanisms for access restriction are defined" },
    { id: "7.2", requirement: "Access to system components is limited by role" },
    { id: "7.3", requirement: "Access privileges are assigned based on least privilege" },
    { id: "8.1", requirement: "Processes and mechanisms for authentication are defined" },
    { id: "8.2", requirement: "Unique identification for each user is required" },
    { id: "8.3", requirement: "Strong authentication methods are implemented" },
    { id: "8.4", requirement: "Multi-factor authentication is implemented" },
    { id: "8.5", requirement: "Authentication mechanisms are secured" },
    { id: "9.1", requirement: "Processes and mechanisms for physical security are defined" },
    { id: "9.2", requirement: "Physical access to systems is restricted" },
    { id: "9.3", requirement: "Physical access for personnel is controlled" },
    { id: "9.4", requirement: "Physical access logs are maintained" },
    { id: "9.5", requirement: "Media containing cardholder data is protected" },
    { id: "10.1", requirement: "Processes and mechanisms for logging are defined" },
    { id: "10.2", requirement: "Audit logs are implemented" },
    { id: "10.3", requirement: "Logs record all critical security events" },
    { id: "10.4", requirement: "Time synchronization mechanisms are implemented" },
    { id: "10.5", requirement: "Logs are secured from alteration" },
    { id: "10.6", requirement: "Logs are reviewed regularly" },
    { id: "11.1", requirement: "Processes and mechanisms for security testing are defined" },
    { id: "11.2", requirement: "Vulnerability scans are performed" },
    { id: "11.3", requirement: "Penetration testing is performed" },
    { id: "11.4", requirement: "Intrusion detection and monitoring mechanisms are used" },
    { id: "11.5", requirement: "Unauthorized file changes are detected" },
    { id: "12.1", requirement: "Processes and mechanisms for security policies are defined" },
    { id: "12.2", requirement: "Security policies are established and maintained" },
    { id: "12.3", requirement: "Risk assessment is performed" },
    { id: "12.4", requirement: "Security responsibilities are assigned" },
    { id: "12.5", requirement: "Security awareness program is implemented" },
    { id: "12.6", requirement: "Security incident response plan is implemented" },
    { id: "12.7", requirement: "Third-party service providers are managed" },
    { id: "12.8", requirement: "Compliance monitoring and reporting are performed" },
  ],
  "SOC 2": [
    { id: "CC1.1", requirement: "Control environment and integrity values are established" },
    { id: "CC1.2", requirement: "Board independence and oversight are maintained" },
    { id: "CC1.3", requirement: "Organizational structure and responsibilities are defined" },
    { id: "CC1.4", requirement: "Commitment to competence is demonstrated" },
    { id: "CC1.5", requirement: "Accountability for internal control responsibilities is enforced" },
    { id: "CC2.1", requirement: "Objectives are clearly specified" },
    { id: "CC2.2", requirement: "Risks to objectives are identified and analyzed" },
    { id: "CC2.3", requirement: "Fraud risk is considered" },
    { id: "CC2.4", requirement: "Changes that impact internal controls are identified" },
    { id: "CC3.1", requirement: "Controls are selected and developed to mitigate risks" },
    { id: "CC3.2", requirement: "Technology-related control activities are implemented" },
    { id: "CC4.1", requirement: "Policies and procedures are established and implemented" },
    { id: "CC5.1", requirement: "Control responsibilities are communicated" },
    { id: "CC5.2", requirement: "Internal communication of security information is maintained" },
    { id: "CC5.3", requirement: "External communication regarding security matters occurs" },
    { id: "CC6.1", requirement: "Logical and physical access controls are implemented" },
    { id: "CC6.2", requirement: "Authentication mechanisms are implemented" },
    { id: "CC6.3", requirement: "Authorization controls are implemented" },
    { id: "CC6.4", requirement: "Network access is restricted" },
    { id: "CC6.5", requirement: "Segregation of duties is implemented" },
    { id: "CC6.6", requirement: "Data transmission protections are implemented" },
    { id: "CC6.7", requirement: "Data protection mechanisms are implemented" },
    { id: "CC6.8", requirement: "System configurations are managed" },
    { id: "CC7.1", requirement: "System monitoring activities are performed" },
    { id: "CC7.2", requirement: "Security events are detected and analyzed" },
    { id: "CC7.3", requirement: "Vulnerabilities are identified and managed" },
    { id: "CC7.4", requirement: "Incident response procedures are implemented" },
    { id: "CC7.5", requirement: "Security incidents are addressed and remediated" },
    { id: "CC8.1", requirement: "Change management processes are implemented" },
    { id: "CC9.1", requirement: "Risk mitigation processes are implemented" },
    { id: "CC9.2", requirement: "Vendor and third-party risks are managed" },
    { id: "A1.1", requirement: "Availability commitments and requirements are defined" },
    { id: "A1.2", requirement: "System capacity and performance are monitored" },
    { id: "A1.3", requirement: "Disaster recovery processes are implemented" },
    { id: "C1.1", requirement: "Confidential information is protected during processing and storage" },
    { id: "C1.2", requirement: "Confidential information is protected during transmission" },
    { id: "PI1.1", requirement: "System processing is authorized and accurate" },
    { id: "PI1.2", requirement: "Input data is validated and processed correctly" },
    { id: "PI1.3", requirement: "Data processing errors are detected and corrected" },
    { id: "P1.1", requirement: "Personal information is collected according to privacy commitments" },
    { id: "P2.1", requirement: "Notice of privacy practices is provided" },
    { id: "P3.1", requirement: "Consent for personal data collection and use is obtained" },
    { id: "P4.1", requirement: "Personal information is collected only for defined purposes" },
    { id: "P5.1", requirement: "Personal information is limited to relevant data" },
    { id: "P6.1", requirement: "Personal information is retained only as long as necessary" },
    { id: "P7.1", requirement: "Personal information accuracy is maintained" },
    { id: "P8.1", requirement: "Personal information access is restricted" },
    { id: "P9.1", requirement: "Personal information is securely disposed" },
    { id: "P10.1", requirement: "Personal information is protected from unauthorized disclosure" },
  ],
};

const state = loadState();

const refs = {
  controlForm: document.getElementById("control-form"),
  frameworkSelect: document.getElementById("framework-select"),
  controlIdSelect: document.getElementById("control-id-select"),
  requirementInput: document.getElementById("requirement-input"),
  controlHint: document.getElementById("control-hint"),
  assessmentForm: document.getElementById("assessment-form"),
  actionForm: document.getElementById("action-form"),
  controlRef: document.getElementById("control-ref"),
  controlsBody: document.getElementById("controls-body"),
  actionsBody: document.getElementById("actions-body"),
  heatmap: document.getElementById("heatmap"),
  scoreValue: document.getElementById("score-value"),
  scoreCaption: document.getElementById("score-caption"),
  totalControls: document.getElementById("total-controls"),
  compliantControls: document.getElementById("compliant-controls"),
  partialControls: document.getElementById("partial-controls"),
  nonCompliantControls: document.getElementById("non-compliant-controls"),
  openGaps: document.getElementById("open-gaps"),
  overdueActions: document.getElementById("overdue-actions"),
  barCompliant: document.getElementById("bar-compliant"),
  barPartial: document.getElementById("bar-partial"),
  barNon: document.getElementById("bar-non"),
  seedBtn: document.getElementById("seed-data"),
  exportBtn: document.getElementById("export-report"),
  printBtn: document.getElementById("print-report"),
  resetBtn: document.getElementById("reset-data"),
  completionTotal: document.getElementById("completion-total"),
  completionScore: document.getElementById("completion-score"),
  completionOpen: document.getElementById("completion-open"),
  completionOverdue: document.getElementById("completion-overdue"),
  completionActions: document.getElementById("completion-actions"),
  completionMessage: document.getElementById("completion-message"),
  completionRemarks: document.getElementById("completion-remarks"),
  assessmentSelect: document.getElementById("assessment-select"),
  assessmentName: document.getElementById("assessment-name"),
  workspaceMeta: document.getElementById("workspace-meta"),
  createAssessmentBtn: document.getElementById("create-assessment"),
  renameAssessmentBtn: document.getElementById("rename-assessment"),
  assessmentHistoryBody: document.getElementById("assessment-history-body"),
  cancelControlEditBtn: document.getElementById("cancel-control-edit"),
  cancelActionEditBtn: document.getElementById("cancel-action-edit"),
};

init();

function init() {
  ensureActiveAssessment();
  bindEvents();
  initializeControlAutomation();
  renderAll();
}

function bindEvents() {
  refs.controlForm?.addEventListener("submit", handleControlSubmit);
  refs.frameworkSelect?.addEventListener("change", handleFrameworkChange);
  refs.controlIdSelect?.addEventListener("change", handleControlIdChange);
  refs.assessmentForm?.addEventListener("submit", handleAssessmentSubmit);
  refs.actionForm?.addEventListener("submit", handleActionSubmit);
  refs.seedBtn?.addEventListener("click", loadDemoData);
  refs.exportBtn?.addEventListener("click", exportCsv);
  refs.printBtn?.addEventListener("click", () => window.print());
  refs.resetBtn?.addEventListener("click", resetData);
  refs.createAssessmentBtn?.addEventListener("click", createAssessmentFromInput);
  refs.renameAssessmentBtn?.addEventListener("click", renameActiveAssessment);
  refs.assessmentSelect?.addEventListener("change", handleAssessmentSelection);
  refs.cancelControlEditBtn?.addEventListener("click", resetControlForm);
  refs.cancelActionEditBtn?.addEventListener("click", resetActionForm);
  document.addEventListener("click", handleDocumentClick);
}

function handleDocumentClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "edit-control") beginControlEdit(id);
  if (action === "delete-control") deleteControl(id);
  if (action === "edit-action") beginActionEdit(id);
  if (action === "delete-action") deleteAction(id);
  if (action === "open-assessment") openAssessment(id);
}

function initializeControlAutomation() {
  if (!refs.frameworkSelect || !refs.controlIdSelect || !refs.requirementInput) return;
  refs.controlIdSelect.disabled = true;
  refs.requirementInput.value = "";
}

function handleFrameworkChange() {
  if (!refs.frameworkSelect || !refs.controlIdSelect || !refs.requirementInput) return;

  const framework = asText(refs.frameworkSelect.value);
  const controls = CONTROL_LIBRARY[framework] || [];

  refs.controlIdSelect.innerHTML =
    '<option value="">Select Control ID</option>' +
    controls.map((control) => `<option value="${escapeHtml(control.id)}">${escapeHtml(control.id)}</option>`).join("");

  refs.controlIdSelect.disabled = controls.length === 0;
  refs.requirementInput.value = "";

  if (refs.controlHint) {
    refs.controlHint.textContent = controls.length
      ? `Loaded ${controls.length} controls for ${framework}.`
      : "No mapped controls found. Select another framework.";
  }
}

function handleControlIdChange() {
  if (!refs.frameworkSelect || !refs.controlIdSelect || !refs.requirementInput) return;

  const framework = asText(refs.frameworkSelect.value);
  const selectedControlId = asText(refs.controlIdSelect.value);
  const control = (CONTROL_LIBRARY[framework] || []).find((item) => item.id === selectedControlId);
  refs.requirementInput.value = control ? control.requirement : "";
}

function loadState() {
  const fallback = { assessments: [], activeAssessmentId: null };
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "");
    if (!parsed) return fallback;
    if (Array.isArray(parsed.assessments)) {
      return {
        assessments: parsed.assessments.map(normalizeAssessment),
        activeAssessmentId: parsed.activeAssessmentId || parsed.assessments[0]?.id || null,
      };
    }
    if (Array.isArray(parsed.controls) || Array.isArray(parsed.actions)) {
      const migrated = createAssessment(defaultAssessmentName(1), {
        controls: Array.isArray(parsed.controls) ? parsed.controls : [],
        actions: Array.isArray(parsed.actions) ? parsed.actions : [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return { assessments: [migrated], activeAssessmentId: migrated.id };
    }
    return fallback;
  } catch (_error) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureActiveAssessment() {
  if (getCurrentAssessment(false)) return;
  const assessment = createAssessment(defaultAssessmentName(1));
  state.assessments.push(assessment);
  state.activeAssessmentId = assessment.id;
  saveState();
}

function createAssessment(name, overrides = {}) {
  const now = new Date().toISOString();
  return normalizeAssessment({
    id: createId("ASM"),
    name,
    controls: [],
    actions: [],
    createdAt: now,
    updatedAt: now,
    ...overrides,
  });
}

function normalizeAssessment(assessment) {
  return {
    id: assessment.id || createId("ASM"),
    name: assessment.name || defaultAssessmentName(1),
    controls: Array.isArray(assessment.controls) ? assessment.controls : [],
    actions: Array.isArray(assessment.actions) ? assessment.actions : [],
    createdAt: assessment.createdAt || new Date().toISOString(),
    updatedAt: assessment.updatedAt || new Date().toISOString(),
  };
}

function getCurrentAssessment(createIfMissing = true) {
  let assessment = state.assessments.find((item) => item.id === state.activeAssessmentId);
  if (!assessment && createIfMissing) {
    ensureActiveAssessment();
    assessment = state.assessments.find((item) => item.id === state.activeAssessmentId);
  }
  return assessment || null;
}

function touchAssessment(assessment) {
  assessment.updatedAt = new Date().toISOString();
}

function defaultAssessmentName(index) {
  return `Assessment Workspace ${index}`;
}

function currentControls() {
  return getCurrentAssessment()?.controls || [];
}

function currentActions() {
  return getCurrentAssessment()?.actions || [];
}

function createAssessmentFromInput() {
  const name = asText(refs.assessmentName?.value) || defaultAssessmentName(state.assessments.length + 1);
  const assessment = createAssessment(name);
  state.assessments.unshift(assessment);
  state.activeAssessmentId = assessment.id;
  saveState();
  resetControlForm();
  resetActionForm();
  renderAll();
}

function renameActiveAssessment() {
  const assessment = getCurrentAssessment();
  const nextName = asText(refs.assessmentName?.value);
  if (!assessment || !nextName) {
    window.alert("Enter a workspace name first.");
    return;
  }
  assessment.name = nextName;
  touchAssessment(assessment);
  saveState();
  renderAll();
}

function handleAssessmentSelection() {
  const selectedId = asText(refs.assessmentSelect?.value);
  if (!selectedId) return;
  state.activeAssessmentId = selectedId;
  saveState();
  resetControlForm();
  resetActionForm();
  renderAll();
}

function openAssessment(assessmentId) {
  state.activeAssessmentId = assessmentId;
  saveState();
  if (document.body.dataset.page === "completion") {
    window.location.href = "dashboard.html";
    return;
  }
  resetControlForm();
  resetActionForm();
  renderAll();
}

function handleControlSubmit(event) {
  event.preventDefault();
  const assessment = getCurrentAssessment();
  if (!assessment) return;

  const form = event.currentTarget;
  const data = new FormData(form);
  const editId = form.dataset.editId;
  const controlId = asText(data.get("controlId"));
  const requirement = asText(data.get("requirement"));
  const framework = asText(data.get("framework"));
  const evidence = data.get("evidence");

  if (!framework || !controlId || !requirement) {
    window.alert("Please select framework and control ID to auto-fill requirement.");
    return;
  }

  const duplicate = assessment.controls.some(
    (item) => item.id !== editId && item.framework === framework && item.controlId === controlId
  );
  if (duplicate) {
    window.alert("This control ID is already added for the selected framework.");
    return;
  }

  if (editId) {
    const control = assessment.controls.find((item) => item.id === editId);
    if (!control) return;
    control.controlId = controlId;
    control.requirement = requirement;
    control.framework = framework;
    control.owner = asText(data.get("owner"));
    control.dueDate = asText(data.get("dueDate"));
    control.priority = asText(data.get("priority"));
    control.updatedAt = new Date().toISOString();
    if (evidence && evidence.size) control.evidence.push(formatFile(evidence));
  } else {
    assessment.controls.unshift({
      id: createId("CTRL"),
      controlId,
      requirement,
      framework,
      owner: asText(data.get("owner")),
      dueDate: asText(data.get("dueDate")),
      priority: asText(data.get("priority")),
      status: "Non-Compliant",
      comments: "New requirement added. Assessment pending.",
      evidence: evidence && evidence.size ? [formatFile(evidence)] : [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  touchAssessment(assessment);
  saveState();
  resetControlForm();
  renderAll();
}

function handleAssessmentSubmit(event) {
  event.preventDefault();
  const assessment = getCurrentAssessment();
  if (!assessment) return;

  const form = event.currentTarget;
  const data = new FormData(form);
  const selected = asText(data.get("controlRef"));
  const control = assessment.controls.find((item) => item.id === selected);

  if (!control) {
    window.alert("Please select a valid control.");
    return;
  }

  const evidence = data.get("evidence");
  control.status = asText(data.get("status"));
  control.comments = asText(data.get("comments"));
  control.updatedAt = new Date().toISOString();
  if (evidence && evidence.size) control.evidence.push(formatFile(evidence));

  touchAssessment(assessment);
  saveState();
  form.reset();
  renderAll();
}

function handleActionSubmit(event) {
  event.preventDefault();
  const assessment = getCurrentAssessment();
  if (!assessment) return;

  const form = event.currentTarget;
  const data = new FormData(form);
  const editId = form.dataset.editId;

  if (editId) {
    const action = assessment.actions.find((item) => item.id === editId);
    if (!action) return;
    action.gapId = asText(data.get("gapId"));
    action.controlId = asText(data.get("controlId"));
    action.issue = asText(data.get("issue"));
    action.owner = asText(data.get("owner"));
    action.dueDate = asText(data.get("dueDate"));
    action.status = asText(data.get("status"));
    action.priority = asText(data.get("priority"));
    action.updatedAt = new Date().toISOString();
  } else {
    assessment.actions.unshift({
      id: createId("ACT"),
      gapId: asText(data.get("gapId")),
      controlId: asText(data.get("controlId")),
      issue: asText(data.get("issue")),
      owner: asText(data.get("owner")),
      dueDate: asText(data.get("dueDate")),
      status: asText(data.get("status")),
      priority: asText(data.get("priority")),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  touchAssessment(assessment);
  saveState();
  resetActionForm();
  renderAll();
}

function beginControlEdit(controlId) {
  const control = currentControls().find((item) => item.id === controlId);
  if (!control || !refs.controlForm || !refs.frameworkSelect || !refs.controlIdSelect || !refs.requirementInput) return;
  refs.controlForm.dataset.editId = control.id;
  refs.frameworkSelect.value = control.framework;
  handleFrameworkChange();
  refs.controlIdSelect.value = control.controlId;
  handleControlIdChange();
  refs.controlForm.elements.owner.value = control.owner;
  refs.controlForm.elements.dueDate.value = control.dueDate;
  refs.controlForm.elements.priority.value = control.priority;
  refs.controlForm.querySelector('button[type="submit"]').textContent = "Update Requirement";
  if (refs.cancelControlEditBtn) refs.cancelControlEditBtn.hidden = false;
}

function beginActionEdit(actionId) {
  const action = currentActions().find((item) => item.id === actionId);
  if (!action || !refs.actionForm) return;
  refs.actionForm.dataset.editId = action.id;
  refs.actionForm.elements.gapId.value = action.gapId;
  refs.actionForm.elements.controlId.value = action.controlId;
  refs.actionForm.elements.issue.value = action.issue;
  refs.actionForm.elements.owner.value = action.owner;
  refs.actionForm.elements.dueDate.value = action.dueDate;
  refs.actionForm.elements.status.value = action.status;
  refs.actionForm.elements.priority.value = action.priority;
  refs.actionForm.querySelector('button[type="submit"]').textContent = "Update Action Plan";
  if (refs.cancelActionEditBtn) refs.cancelActionEditBtn.hidden = false;
}

function deleteControl(controlId) {
  const assessment = getCurrentAssessment();
  if (!assessment) return;
  const confirmed = window.confirm("Delete this control from the current workspace?");
  if (!confirmed) return;
  assessment.controls = assessment.controls.filter((item) => item.id !== controlId);
  touchAssessment(assessment);
  saveState();
  resetControlForm();
  renderAll();
}

function deleteAction(actionId) {
  const assessment = getCurrentAssessment();
  if (!assessment) return;
  const confirmed = window.confirm("Delete this remediation action from the current workspace?");
  if (!confirmed) return;
  assessment.actions = assessment.actions.filter((item) => item.id !== actionId);
  touchAssessment(assessment);
  saveState();
  resetActionForm();
  renderAll();
}

function resetControlForm() {
  if (!refs.controlForm) return;
  refs.controlForm.reset();
  delete refs.controlForm.dataset.editId;
  initializeControlAutomation();
  refs.controlForm.querySelector('button[type="submit"]').textContent = "Add Requirement";
  if (refs.cancelControlEditBtn) refs.cancelControlEditBtn.hidden = true;
  if (refs.controlHint) refs.controlHint.textContent = "Select a framework to list mapped control IDs automatically.";
}

function resetActionForm() {
  if (!refs.actionForm) return;
  refs.actionForm.reset();
  delete refs.actionForm.dataset.editId;
  refs.actionForm.querySelector('button[type="submit"]').textContent = "Add Action Plan";
  if (refs.cancelActionEditBtn) refs.cancelActionEditBtn.hidden = true;
}

function renderAll() {
  renderAssessmentWorkspace();
  renderControlSelect();
  renderControlTable();
  renderActionTable();
  renderDashboard();
  renderHeatmap();
  renderCompletionSummary();
  renderAssessmentHistory();
}

function renderAssessmentWorkspace() {
  const active = getCurrentAssessment();
  if (refs.assessmentSelect) {
    refs.assessmentSelect.innerHTML = state.assessments
      .slice()
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .map((assessment) => `<option value="${escapeHtml(assessment.id)}">${escapeHtml(assessment.name)}</option>`)
      .join("");
    refs.assessmentSelect.value = active?.id || "";
  }
  if (refs.assessmentName) refs.assessmentName.value = active?.name || "";
  if (refs.workspaceMeta && active) {
    refs.workspaceMeta.textContent = `Last updated ${formatDateTime(active.updatedAt)}. Reopen this workspace any time from Completion page.`;
  }
}

function renderCompletionSummary() {
  const assessment = getCurrentAssessment(false);
  const controls = assessment?.controls || [];
  const actions = assessment?.actions || [];
  const compliant = countByStatus("Compliant");
  const partial = countByStatus("Partially Compliant");
  const non = countByStatus("Non-Compliant");
  const total = controls.length;
  const open = partial + non;
  const overdue = actions.filter(isOverdue).length;
  const score = total ? Math.round((compliant / total) * 100) : 0;

  if (refs.completionTotal) refs.completionTotal.textContent = String(total);
  if (refs.completionScore) refs.completionScore.textContent = `${score}%`;
  if (refs.completionOpen) refs.completionOpen.textContent = String(open);
  if (refs.completionOverdue) refs.completionOverdue.textContent = String(overdue);

  if (refs.completionMessage) {
    refs.completionMessage.textContent = assessment
      ? `Workspace: ${assessment.name}. Review residual risk, open remediation items, and closure readiness.`
      : "Review residual risk, open remediation items, and closure readiness for the assessment cycle.";
  }

  if (refs.completionRemarks) {
    refs.completionRemarks.textContent =
      total === 0
        ? "No records available yet. Create a workspace in Dashboard and your saved history will remain here for later editing."
        : `Current workspace summary: ${compliant} compliant, ${partial} partial, ${non} non-compliant controls.`;
  }

  if (!refs.completionActions) return;
  const pending = actions.filter((item) => item.status !== "Closed");
  if (!pending.length) {
    refs.completionActions.innerHTML = '<tr><td colspan="6" class="empty">No pending actions. All remediation tasks are closed.</td></tr>';
    return;
  }

  refs.completionActions.innerHTML = pending
    .map((item) => `<tr>
        <td>${escapeHtml(item.gapId)}</td>
        <td>${escapeHtml(item.controlId)}</td>
        <td>${escapeHtml(item.issue)}</td>
        <td>${escapeHtml(item.owner)}</td>
        <td>${formatDate(item.dueDate)}</td>
        <td>${statusBadge(item.status)}</td>
      </tr>`)
    .join("");
}

function renderAssessmentHistory() {
  if (!refs.assessmentHistoryBody) return;
  if (!state.assessments.length) {
    refs.assessmentHistoryBody.innerHTML = '<tr><td colspan="6" class="empty">No saved workspaces found yet.</td></tr>';
    return;
  }
  refs.assessmentHistoryBody.innerHTML = state.assessments
    .slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .map((assessment) => {
      const summary = summarizeAssessment(assessment);
      return `<tr>
        <td>${escapeHtml(assessment.name)}</td>
        <td>${formatDateTime(assessment.updatedAt)}</td>
        <td>${summary.total}</td>
        <td>${summary.score}%</td>
        <td>${summary.open}</td>
        <td><button class="btn table-btn" type="button" data-action="open-assessment" data-id="${escapeHtml(assessment.id)}">Open For Edit</button></td>
      </tr>`;
    })
    .join("");
}

function renderControlSelect() {
  if (!refs.controlRef) return;
  const options = ['<option value="">Select control</option>'];
  currentControls().forEach((item) => {
    options.push(`<option value="${escapeHtml(item.id)}">${escapeHtml(item.controlId)} - ${escapeHtml(item.requirement)}</option>`);
  });
  refs.controlRef.innerHTML = options.join("");
}

function renderControlTable() {
  if (!refs.controlsBody) return;
  const controls = currentControls();
  if (!controls.length) {
    refs.controlsBody.innerHTML = '<tr><td colspan="9" class="empty">No controls added yet.</td></tr>';
    return;
  }
  refs.controlsBody.innerHTML = controls
    .map((item) => `<tr>
        <td>${escapeHtml(item.controlId)}</td>
        <td>${escapeHtml(item.requirement)}</td>
        <td>${escapeHtml(item.framework)}</td>
        <td>${escapeHtml(item.owner)}</td>
        <td>${statusBadge(item.status)}</td>
        <td><span class="priority-${priorityClass(item.priority)}">${escapeHtml(item.priority)}</span></td>
        <td>${formatDate(item.dueDate)}</td>
        <td>${renderEvidence(item.evidence)}</td>
        <td class="table-actions"><button class="btn table-btn" type="button" data-action="edit-control" data-id="${escapeHtml(item.id)}">Edit</button><button class="btn table-btn danger-lite" type="button" data-action="delete-control" data-id="${escapeHtml(item.id)}">Delete</button></td>
      </tr>`)
    .join("");
}

function renderActionTable() {
  if (!refs.actionsBody) return;
  const actions = currentActions();
  if (!actions.length) {
    refs.actionsBody.innerHTML = '<tr><td colspan="8" class="empty">No remediation actions created yet.</td></tr>';
    return;
  }
  refs.actionsBody.innerHTML = actions
    .map((item) => `<tr>
        <td>${escapeHtml(item.gapId)}</td>
        <td>${escapeHtml(item.controlId)}</td>
        <td>${escapeHtml(item.issue)}</td>
        <td>${escapeHtml(item.owner)}</td>
        <td>${formatDate(item.dueDate)}</td>
        <td>${statusBadge(item.status)}</td>
        <td><span class="priority-${priorityClass(item.priority)}">${escapeHtml(item.priority)}</span></td>
        <td class="table-actions"><button class="btn table-btn" type="button" data-action="edit-action" data-id="${escapeHtml(item.id)}">Edit</button><button class="btn table-btn danger-lite" type="button" data-action="delete-action" data-id="${escapeHtml(item.id)}">Delete</button></td>
      </tr>`)
    .join("");
}

function renderDashboard() {
  const summary = summarizeAssessment(getCurrentAssessment(false));
  if (refs.totalControls) refs.totalControls.textContent = String(summary.total);
  if (refs.compliantControls) refs.compliantControls.textContent = String(summary.compliant);
  if (refs.partialControls) refs.partialControls.textContent = String(summary.partial);
  if (refs.nonCompliantControls) refs.nonCompliantControls.textContent = String(summary.non);
  if (refs.openGaps) refs.openGaps.textContent = String(summary.open);
  if (refs.overdueActions) refs.overdueActions.textContent = String(summary.overdue);
  if (refs.scoreValue) refs.scoreValue.textContent = `${summary.score}%`;
  if (refs.scoreCaption) refs.scoreCaption.textContent = `Gap percentage: ${summary.gapPct}% (${summary.open} of ${summary.total} controls).`;
  const ring = document.querySelector(".score-ring");
  if (ring) ring.style.setProperty("--score-angle", `${Math.round((summary.score / 100) * 360)}deg`);
  if (refs.barCompliant) refs.barCompliant.style.width = `${percent(summary.compliant, summary.total)}%`;
  if (refs.barPartial) refs.barPartial.style.width = `${percent(summary.partial, summary.total)}%`;
  if (refs.barNon) refs.barNon.style.width = `${percent(summary.non, summary.total)}%`;
}

function renderHeatmap() {
  if (!refs.heatmap) return;
  const priorities = ["High", "Medium", "Low"];
  const statuses = ["Non-Compliant", "Partially Compliant", "Compliant"];
  const controls = currentControls();
  refs.heatmap.innerHTML = priorities
    .flatMap((priority) =>
      statuses.map((status) => {
        const count = controls.filter((item) => item.priority === priority && item.status === status).length;
        return `<article class="heat-cell ${priority.toLowerCase()}"><span>${escapeHtml(priority)} / ${escapeHtml(status)}</span><strong>${count}</strong></article>`;
      })
    )
    .join("");
}

function loadDemoData() {
  const assessment = getCurrentAssessment();
  if (!assessment) return;
  if (assessment.controls.length || assessment.actions.length) {
    const proceed = window.confirm("Existing data in the current workspace will be replaced by demo data. Continue?");
    if (!proceed) return;
  }
  assessment.controls = [
    {
      id: createId("CTRL"), controlId: "AC-01", requirement: "Access Control Policy", framework: "ISO 27001", owner: "Security Team", dueDate: "2026-03-30", priority: "High", status: "Non-Compliant", comments: "Policy not approved by management.", evidence: [{ name: "draft_policy_v2.pdf", size: "420 KB" }], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
    {
      id: createId("CTRL"), controlId: "IR-02", requirement: "Incident Response Plan", framework: "NIST CSF", owner: "SOC Team", dueDate: "2026-04-10", priority: "Medium", status: "Partially Compliant", comments: "Playbook exists, tabletop test pending.", evidence: [{ name: "ir_playbook.docx", size: "190 KB" }], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
    {
      id: createId("CTRL"), controlId: "10.2", requirement: "Audit logs are implemented", framework: "PCI DSS", owner: "IT Operations", dueDate: "2026-04-20", priority: "Low", status: "Compliant", comments: "SIEM dashboards configured and reviewed weekly.", evidence: [{ name: "siem_report_march.pdf", size: "580 KB" }], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
  ];
  assessment.actions = [
    { id: createId("ACT"), gapId: "GAP-01", controlId: "AC-01", issue: "Policy not formally approved", owner: "CISO Office", dueDate: "2026-03-25", status: "In Progress", priority: "High", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: createId("ACT"), gapId: "GAP-02", controlId: "IR-02", issue: "Tabletop exercise not completed", owner: "SOC Manager", dueDate: "2026-04-15", status: "Open", priority: "Medium", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];
  touchAssessment(assessment);
  saveState();
  renderAll();
}

function exportCsv() {
  const assessment = getCurrentAssessment(false);
  const lines = ["Workspace,Section,Identifier,Requirement or Issue,Framework or Control,Owner,Status,Priority,Due Date,Comments"];
  if (assessment) {
    assessment.controls.forEach((item) => {
      lines.push(csvRow([assessment.name, "Control", item.controlId, item.requirement, item.framework, item.owner, item.status, item.priority, item.dueDate, item.comments || ""]));
    });
    assessment.actions.forEach((item) => {
      lines.push(csvRow([assessment.name, "Action", item.gapId, item.issue, item.controlId, item.owner, item.status, item.priority, item.dueDate, ""]));
    });
  }
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(assessment?.name || "compliance-workspace")}-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetData() {
  const assessment = getCurrentAssessment();
  if (!assessment) return;
  const confirmed = window.confirm("This will clear only the current workspace data. Continue?");
  if (!confirmed) return;
  assessment.controls = [];
  assessment.actions = [];
  touchAssessment(assessment);
  saveState();
  resetControlForm();
  resetActionForm();
  renderAll();
}

function summarizeAssessment(assessment) {
  const controls = assessment?.controls || [];
  const actions = assessment?.actions || [];
  const compliant = controls.filter((item) => item.status === "Compliant").length;
  const partial = controls.filter((item) => item.status === "Partially Compliant").length;
  const non = controls.filter((item) => item.status === "Non-Compliant").length;
  const total = controls.length;
  const open = partial + non;
  const overdue = actions.filter(isOverdue).length;
  const score = total ? Math.round((compliant / total) * 100) : 0;
  const gapPct = total ? Math.round((open / total) * 100) : 0;
  return { total, compliant, partial, non, open, overdue, score, gapPct };
}

function countByStatus(status) {
  return currentControls().filter((item) => item.status === status).length;
}

function statusBadge(status) {
  const text = escapeHtml(status);
  if (status === "Compliant" || status === "Closed") return `<span class="badge status-compliant">${text}</span>`;
  if (status === "Partially Compliant" || status === "In Progress") return `<span class="badge status-partial">${text}</span>`;
  return `<span class="badge status-non">${text}</span>`;
}

function renderEvidence(evidence) {
  if (!evidence || !evidence.length) return "-";
  return evidence.map((item) => `${escapeHtml(item.name)} (${escapeHtml(item.size)})`).join("<br>");
}

function isOverdue(action) {
  if (action.status === "Closed") return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(action.dueDate);
  return due < today;
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function priorityClass(priority) {
  return priority.toLowerCase();
}

function formatFile(file) {
  const kb = Math.max(1, Math.round(file.size / 1024));
  return { name: file.name, size: `${kb} KB` };
}

function percent(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

function asText(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function formatDateTime(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function slugify(value) {
  return String(value || "workspace").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function csvRow(items) {
  return items.map((item) => `"${String(item || "").replaceAll('"', '""')}"`).join(",");
}
