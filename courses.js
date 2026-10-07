/* =====================================================================
   Zentrale Kursliste – NUR HIER pflegen (Coupon, Preise, Kurse, Badges)
   Die Seite (index.html) wird daraus automatisch von app.js aufgebaut.
   ===================================================================== */

var SHOP = {
  // Aktueller Udemy-Gutscheincode – wird an alle Kurs-Links angehängt
  coupon: "LINK-2026-09",

  // Gutscheinpreis
  price: 12.99,

  // Standard-Ankerpreis (durchgestrichen). WICHTIG: muss dem echten
  // Udemy-Listenpreis entsprechen. Abweichende Preise pro Kurs über
  // "listPrice" im jeweiligen Kurs setzen.
  listPrice: 49.99,

  currency: "EUR",
  locale: "de-DE",

  // Udemy-Kennzahlen fuer den Kopfbereich (von der Udemy-Statistikseite)
  stats: { rating: 4.49, students: 12439, reviews: 2218 },

  text: {
    all: "Alle",
    featured: "Kostenlos starten",
    free: "GRATIS",
    isNew: "NEU",
    bestseller: "BESTSELLER",
    cta: "Zum Kurs →",
    ctaFree: "Gratis ansehen →",
    course: "Kurs",
    courses: "Kurse",
    rating: "Bewertung",
    students: "Lernende",
    reviews: "Rezensionen"
  },

  // Reihenfolge = Reihenfolge auf der Seite; hint = kleiner Text unter dem Namen
  categories: [
    { id: "virtualisierung", label: "Virtualisierung", hint: "Proxmox · Hyper-V" },
    { id: "automatisierung", label: "Automatisierung & DevOps", hint: "Ansible · Docker · Git" },
    { id: "netzwerk", label: "Netzwerk & Tools", hint: "FortiGate · Jira" },
    { id: "ki", label: "KI (Claude/Codex)", hint: "Agentic Engineering · Admin" },
    { id: "windows", label: "Windows & Microsoft", hint: "Server · PowerShell · Azure" },
    { id: "linux", label: "Linux", hint: "Ubuntu · Debian · RHEL · Security" }
  ],

  /* Felder pro Kurs:
     slug       Udemy-Kurs-Slug (aus udemy.com/course/<slug>/)
     title      Anzeigetitel
     img        Bild in img/
     cats       Kategorien; die ERSTE bestimmt den Abschnitt in "Alle"
     level      optional: "Einsteiger", "Fortgeschritten", "Einsteiger bis Profi"
     bestseller optional: true -> Badge "BESTSELLER" (meistverkaufte Kurse)
     isNew      optional: true -> Badge "NEU"
     free       optional: true -> Gratis-Kurs (oben hervorgehoben)
     url        optional: kompletter Link statt slug + coupon
     listPrice  optional: abweichender Ankerpreis */
  // Reihenfolge: neue Kurse zuerst, dann Gratis, dann nach Verkaeufen (Stand 10/2026)
  courses: [
    {
      slug: "linux-security-hardening-auditing-praxiskurs",
      title: "Linux Security Hardening & Auditing: Praxiskurs",
      img: "thumb-tux-security-1-lock-orange-sq.png", cats: ["linux", "netzwerk"], isNew: true
    },
    {
      slug: "openai-codex-agentic-engineering-next-level-ki-entwicklung",
      title: "Codex & Agentic Engineering: Next-Level KI-Entwicklung",
      img: "codex-thumbnail-de-sq.png", cats: ["ki"], isNew: true
    },
    {
      slug: "linux-fur-einsteiger-ubuntu-linux-mint-shell-grundlagen",
      url: "https://www.udemy.com/course/linux-fur-einsteiger-ubuntu-linux-mint-shell-grundlagen/?referralCode=69A8B801A3E6183CA13E",
      title: "Linux für Einsteiger: Ubuntu, Linux Mint & Shell-Grundlagen",
      img: "linux-free.jpg", cats: ["linux"], level: "Einsteiger", free: true
    },
    {
      slug: "proxmox-ve-virtualisierung-fur-fortgeschrittene",
      title: "Proxmox VE 8 – Virtualisierung für Fortgeschrittene",
      img: "proxmox-advanced.png", cats: ["virtualisierung"], bestseller: true, level: "Fortgeschritten"
    },
    {
      slug: "proxmox-praxiskurs",
      title: "Proxmox VE 8 Praxiskurs für Virtualisierung",
      img: "proxmox.jpg", cats: ["virtualisierung"], bestseller: true
    },
    {
      slug: "claude-code-agentic-engineering-next-level-ki-entwicklung",
      title: "Claude Code & Agentic Engineering: Next-Level KI-Entwicklung",
      img: "claude-code.jpg", cats: ["ki"], bestseller: true
    },
    {
      slug: "jira-confluence-atlassian-praxiskurs",
      title: "Jira & Confluence – Atlassian Praxiskurs",
      img: "atlassian.jpg", cats: ["netzwerk"]
    },
    {
      slug: "fortinet-fortigate-firewall-praxiskurs",
      title: "Fortinet FortiGate: Firewall Praxiskurs",
      img: "fortinet.png", cats: ["netzwerk"]
    },
    {
      slug: "ansible-praxiskurs",
      title: "Ansible: IT-Automatisierung für Beginner",
      img: "ansible.jpg", cats: ["automatisierung"], level: "Einsteiger"
    },
    {
      slug: "ansible-fur-fortgeschrittene-praxiskurs",
      title: "Ansible für Fortgeschrittene – Praxiskurs",
      img: "ansible-advanced.jpg", cats: ["automatisierung"], level: "Fortgeschritten"
    },
    {
      slug: "docker-fur-beginner-einsteigerfreundlicher-praxiskurs-2023",
      title: "Docker Container: Einsteigerfreundlicher Praxiskurs",
      img: "docker.jpg", cats: ["automatisierung"], level: "Einsteiger"
    },
    {
      slug: "microsoft-azure-der-schnelle-und-praxisnahe-einstieg",
      title: "Microsoft Azure Praxiskurs 2025: Vom Einsteiger zum Profi",
      img: "azure.jpg", cats: ["windows"], level: "Einsteiger bis Profi"
    },
    {
      slug: "microsoft-hyper-v-unter-windows-server-2025-windows-11",
      title: "Microsoft Hyper-V unter Windows Server 2025 & Windows 11",
      img: "hyper-v-de.jpg", cats: ["windows", "virtualisierung"]
    },
    {
      slug: "windows-server-masterclass",
      title: "Windows Server Masterclass – Vom Einsteiger zum Experten",
      img: "winserver-masterclass.jpg", cats: ["windows"], level: "Einsteiger bis Profi"
    },
    {
      slug: "next-level-systemadministration-devops-mit-claude-code",
      title: "Next-Level Systemadministration & DevOps mit Claude Code",
      img: "claude-sysadmin.jpg", cats: ["ki", "automatisierung"]
    },
    {
      slug: "powershell-praxiskurs",
      title: "PowerShell Praxiskurs – Vom Einsteiger zum Profi",
      img: "powershell-de-sq.jpg", cats: ["windows", "automatisierung"], level: "Einsteiger bis Profi"
    },
    {
      slug: "git-praxiskurs",
      title: "Git/Versionskontrolle: Beginnerfreundlicher Praxiskurs",
      img: "git.jpg", cats: ["automatisierung"], level: "Einsteiger"
    },
    {
      slug: "ubuntu-linux-cli-praxiskurs",
      title: "Ubuntu Linux: Command Line für Beginner – Praxiskurs",
      img: "ubuntu.jpg", cats: ["linux"], level: "Einsteiger"
    },
    {
      slug: "ansible-awx-praxiskurs",
      title: "Ansible AWX Praxiskurs",
      img: "awx.jpg", cats: ["automatisierung"]
    },
    {
      slug: "next-level-windows-systemadministration-mit-claude-code",
      title: "Next-Level Windows Systemadministration mit Claude Code",
      img: "claude-windows-admin.jpg", cats: ["ki", "windows"]
    },
    {
      slug: "next-level-linux-systemadministration-mit-claude-code",
      title: "Next-Level Linux Systemadministration mit Claude Code",
      img: "thumb-tux-auto-dark-sq.png", cats: ["ki", "linux"]
    },
    {
      slug: "windows-server-2025-praxiskurs",
      title: "Windows Server 2025 – Einsteigerfreundlicher Praxiskurs",
      img: "server2025-de.jpg", cats: ["windows"], level: "Einsteiger"
    },
    {
      slug: "next-level-ai-ki-fur-coding-scripting-administration",
      title: "Next-Level AI (KI) für Coding, Scripting & Administration",
      img: "ai.jpg", cats: ["ki"]
    },
    {
      slug: "debian-praxiskurs",
      title: "Debian Linux 12: Command Line für Einsteiger – Praxiskurs",
      img: "debian.jpg", cats: ["linux"], level: "Einsteiger"
    },
    {
      slug: "rhel-praxiskurs",
      title: "Red Hat Enterprise Linux 9: CLI Praxiskurs für Anfänger",
      img: "rhel.jpg", cats: ["linux"], level: "Einsteiger"
    }
  ]
};
