// Lifestyle illustrations for the Make a Will website
// Inspired by Farewill's warm, friendly illustration style

// FAQ Page - Question and answer theme
export function FAQIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background blobs */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />
      <ellipse cx="100" cy="220" rx="80" ry="60" fill="#FFE8D6" />

      {/* Person thinking */}
      <ellipse cx="200" cy="250" rx="40" ry="12" fill="#E0D6CC" />
      <rect x="175" y="180" width="50" height="70" rx="10" fill="#8B4D3B" />
      <circle cx="200" cy="155" r="35" fill="#FFDAB9" />
      <path d="M185 148 Q200 142 215 148" stroke="#5C4033" strokeWidth="2" fill="none" />

      {/* Question marks floating */}
      <text x="280" y="80" fontSize="50" fill="#D4832E" opacity="0.8" fontFamily="Georgia">?</text>
      <text x="100" y="100" fontSize="35" fill="#E5A630" opacity="0.6" fontFamily="Georgia">?</text>
      <text x="320" y="180" fontSize="30" fill="#D4832E" opacity="0.5" fontFamily="Georgia">?</text>

      {/* Lightbulb - representing answers */}
      <ellipse cx="280" cy="140" rx="25" ry="30" fill="#E5A630" />
      <rect x="272" y="165" width="16" height="15" fill="#D4832E" rx="2" />
      <path d="M270 140 Q280 120 290 140" stroke="#FFFFFF" strokeWidth="3" fill="none" />

      {/* Speech bubbles */}
      <ellipse cx="120" cy="180" rx="40" ry="25" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <path d="M140 200 L150 220 L130 205" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <line x1="100" y1="175" x2="140" y2="175" stroke="#E5A630" strokeWidth="3" />
      <line x1="100" y1="185" x2="130" y2="185" stroke="#E5A630" strokeWidth="3" />
    </svg>
  );
}

// About Page - Trust and team theme
export function AboutIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="130" fill="#FFF5EB" />

      {/* Shield representing trust */}
      <path d="M200 50 L280 80 L280 150 Q280 200 200 240 Q120 200 120 150 L120 80 Z" fill="#FFFFFF" stroke="#D4832E" strokeWidth="3" />
      <path d="M200 70 L260 95 L260 145 Q260 185 200 215 Q140 185 140 145 L140 95 Z" fill="#FFE8D6" />

      {/* Checkmark inside shield */}
      <path d="M165 140 L190 165 L240 110" stroke="#D4832E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Team of people at bottom */}
      <ellipse cx="120" cy="280" rx="25" ry="8" fill="#E0D6CC" />
      <rect x="105" y="250" width="30" height="35" rx="8" fill="#D4832E" />
      <circle cx="120" cy="235" r="18" fill="#FFDAB9" />

      <ellipse cx="200" cy="280" rx="25" ry="8" fill="#E0D6CC" />
      <rect x="185" y="250" width="30" height="35" rx="8" fill="#8B4D3B" />
      <circle cx="200" cy="235" r="18" fill="#FFDAB9" />

      <ellipse cx="280" cy="280" rx="25" ry="8" fill="#E0D6CC" />
      <rect x="265" y="250" width="30" height="35" rx="8" fill="#E5A630" />
      <circle cx="280" cy="235" r="18" fill="#FFDAB9" />

      {/* Stars representing quality */}
      <polygon points="50,100 55,115 70,115 58,125 63,140 50,130 37,140 42,125 30,115 45,115" fill="#E5A630" />
      <polygon points="350,80 353,90 365,90 356,97 359,108 350,101 341,108 344,97 335,90 347,90" fill="#D4832E" opacity="0.7" />
    </svg>
  );
}

// Contact Page - Communication theme
export function ContactIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />
      <ellipse cx="320" cy="200" rx="60" ry="50" fill="#FFE8D6" />

      {/* Large envelope */}
      <rect x="100" y="100" width="200" height="140" rx="8" fill="#FFFFFF" stroke="#D4832E" strokeWidth="3" />
      <path d="M100 100 L200 180 L300 100" stroke="#D4832E" strokeWidth="3" fill="none" />
      <path d="M100 240 L170 170 M300 240 L230 170" stroke="#D4832E" strokeWidth="3" />

      {/* Letter coming out */}
      <rect x="130" y="70" width="140" height="80" rx="4" fill="#FFE8D6" stroke="#E5A630" strokeWidth="2" />
      <line x1="145" y1="90" x2="255" y2="90" stroke="#D4832E" strokeWidth="2" />
      <line x1="145" y1="105" x2="255" y2="105" stroke="#D4832E" strokeWidth="2" />
      <line x1="145" y1="120" x2="220" y2="120" stroke="#D4832E" strokeWidth="2" />

      {/* Phone icon */}
      <rect x="320" y="80" width="50" height="90" rx="8" fill="#8B4D3B" />
      <rect x="328" y="95" width="34" height="55" rx="2" fill="#87CEEB" />
      <circle cx="345" cy="160" r="5" fill="#E5A630" />

      {/* Chat bubbles */}
      <ellipse cx="70" cy="180" rx="35" ry="25" fill="#D4832E" />
      <path d="M50 200 L40 220 L65 205" fill="#D4832E" />
      <ellipse cx="70" cy="180" rx="20" ry="12" fill="#FFFFFF" opacity="0.3" />

      {/* Decorative dots */}
      <circle cx="50" cy="100" r="6" fill="#E5A630" opacity="0.5" />
      <circle cx="380" cy="140" r="8" fill="#D4832E" opacity="0.4" />
      <circle cx="30" cy="250" r="5" fill="#8B4D3B" opacity="0.3" />
    </svg>
  );
}

// Resources Page - Library/knowledge theme
export function ResourcesIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />

      {/* Bookshelf */}
      <rect x="60" y="80" width="280" height="180" fill="none" stroke="#8B4D3B" strokeWidth="4" />
      <line x1="60" y1="140" x2="340" y2="140" stroke="#8B4D3B" strokeWidth="4" />
      <line x1="60" y1="200" x2="340" y2="200" stroke="#8B4D3B" strokeWidth="4" />

      {/* Books - top shelf */}
      <rect x="80" y="90" width="25" height="45" fill="#D4832E" rx="2" />
      <rect x="110" y="95" width="20" height="40" fill="#E5A630" rx="2" />
      <rect x="135" y="88" width="30" height="47" fill="#8B4D3B" rx="2" />
      <rect x="170" y="92" width="22" height="43" fill="#D4832E" rx="2" />
      <rect x="200" y="90" width="28" height="45" fill="#87CEEB" rx="2" />
      <rect x="235" y="94" width="18" height="41" fill="#E5A630" rx="2" />
      <rect x="260" y="88" width="35" height="47" fill="#8B4D3B" rx="2" />
      <rect x="300" y="92" width="25" height="43" fill="#D4832E" rx="2" />

      {/* Books - middle shelf */}
      <rect x="75" y="150" width="30" height="45" fill="#E5A630" rx="2" />
      <rect x="110" y="155" width="25" height="40" fill="#8B4D3B" rx="2" />
      <rect x="142" y="148" width="28" height="47" fill="#D4832E" rx="2" />
      <rect x="178" y="152" width="20" height="43" fill="#87CEEB" rx="2" />
      <rect x="205" y="150" width="35" height="45" fill="#8B4D3B" rx="2" />
      <rect x="248" y="154" width="22" height="41" fill="#E5A630" rx="2" />
      <rect x="278" y="148" width="28" height="47" fill="#D4832E" rx="2" />
      <rect x="312" y="152" width="18" height="43" fill="#8B4D3B" rx="2" />

      {/* Books - bottom shelf */}
      <rect x="85" y="210" width="40" height="45" fill="#8B4D3B" rx="2" />
      <rect x="130" y="215" width="25" height="40" fill="#D4832E" rx="2" />
      <rect x="162" y="208" width="32" height="47" fill="#E5A630" rx="2" />
      <rect x="202" y="212" width="28" height="43" fill="#87CEEB" rx="2" />
      <rect x="238" y="210" width="24" height="45" fill="#D4832E" rx="2" />
      <rect x="270" y="214" width="30" height="41" fill="#8B4D3B" rx="2" />
      <rect x="308" y="208" width="22" height="47" fill="#E5A630" rx="2" />

      {/* Magnifying glass */}
      <circle cx="350" cy="60" r="25" fill="none" stroke="#D4832E" strokeWidth="4" />
      <line x1="368" y1="78" x2="390" y2="100" stroke="#D4832E" strokeWidth="4" strokeLinecap="round" />
      <circle cx="350" cy="60" r="15" fill="#FFE8D6" opacity="0.5" />
    </svg>
  );
}

// Blog Page - Reading/articles theme
export function BlogIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />
      <ellipse cx="80" cy="100" rx="60" ry="50" fill="#FFE8D6" />

      {/* Person reading */}
      <ellipse cx="150" cy="260" rx="35" ry="10" fill="#E0D6CC" />
      <rect x="125" y="200" width="50" height="60" rx="10" fill="#D4832E" />
      <circle cx="150" cy="175" r="30" fill="#FFDAB9" />
      <path d="M135 168 Q150 162 165 168" stroke="#5C4033" strokeWidth="2" fill="none" />

      {/* Open book in hands */}
      <path d="M100 210 Q150 190 200 210" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M100 210 L100 260 Q150 240 150 210" fill="#FFE8D6" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M200 210 L200 260 Q150 240 150 210" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <line x1="110" y1="225" x2="145" y2="218" stroke="#D4832E" strokeWidth="2" />
      <line x1="110" y1="238" x2="145" y2="231" stroke="#D4832E" strokeWidth="2" />
      <line x1="155" y1="218" x2="190" y2="225" stroke="#D4832E" strokeWidth="2" />
      <line x1="155" y1="231" x2="190" y2="238" stroke="#D4832E" strokeWidth="2" />

      {/* Floating article cards */}
      <rect x="250" y="60" width="100" height="70" rx="6" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <rect x="260" y="70" width="60" height="8" rx="2" fill="#E5A630" />
      <line x1="260" y1="90" x2="340" y2="90" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="260" y1="100" x2="340" y2="100" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="260" y1="110" x2="320" y2="110" stroke="#E0D6CC" strokeWidth="2" />

      <rect x="280" y="150" width="90" height="60" rx="6" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="290" y="160" width="50" height="6" rx="2" fill="#D4832E" />
      <line x1="290" y1="175" x2="360" y2="175" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="290" y1="185" x2="360" y2="185" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="290" y1="195" x2="340" y2="195" stroke="#E0D6CC" strokeWidth="2" />

      {/* Coffee cup */}
      <ellipse cx="320" cy="250" rx="20" ry="8" fill="#8B4D3B" />
      <path d="M300 250 L305 280 L335 280 L340 250" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M340 255 Q360 255 360 270 Q360 285 340 275" fill="none" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M310 240 Q315 230 320 240 Q325 230 330 240" stroke="#E0D6CC" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Sample Will Page - Document preview theme
export function SampleWillIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />

      {/* Main document */}
      <rect x="120" y="40" width="160" height="210" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="3" />

      {/* Document header */}
      <rect x="140" y="55" width="120" height="12" rx="2" fill="#D4832E" />

      {/* Document lines */}
      <line x1="140" y1="85" x2="260" y2="85" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="100" x2="260" y2="100" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="115" x2="240" y2="115" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="135" x2="260" y2="135" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="150" x2="260" y2="150" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="165" x2="220" y2="165" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="185" x2="260" y2="185" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="140" y1="200" x2="260" y2="200" stroke="#E0D6CC" strokeWidth="2" />

      {/* Signature area */}
      <path d="M155 220 Q175 210 195 225 Q215 215 235 220" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Seal/stamp */}
      <circle cx="250" cy="220" r="18" fill="none" stroke="#D4832E" strokeWidth="3" />
      <circle cx="250" cy="220" r="12" fill="#FFE8D6" />
      <path d="M244 220 L248 224 L258 214" stroke="#D4832E" strokeWidth="2" fill="none" />

      {/* Magnifying glass over document */}
      <circle cx="100" cy="120" r="40" fill="none" stroke="#D4832E" strokeWidth="4" />
      <line x1="128" y1="148" x2="160" y2="180" stroke="#D4832E" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="120" r="30" fill="#FFFFFF" opacity="0.3" />

      {/* Pen */}
      <rect x="300" y="180" width="80" height="12" rx="2" fill="#8B4D3B" transform="rotate(-45 300 180)" />
      <polygon points="300,180 290,190 295,195" fill="#E5A630" transform="rotate(-45 300 180)" />

      {/* Decorative elements */}
      <circle cx="320" cy="60" r="8" fill="#E5A630" opacity="0.5" />
      <circle cx="60" cy="200" r="6" fill="#D4832E" opacity="0.4" />
    </svg>
  );
}

// Make Your Will Page - Action/getting started theme
export function MakeWillIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />
      <ellipse cx="320" cy="80" rx="60" ry="50" fill="#FFE8D6" />

      {/* Laptop */}
      <rect x="100" y="120" width="200" height="130" rx="8" fill="#8B4D3B" />
      <rect x="110" y="130" width="180" height="100" rx="4" fill="#87CEEB" />
      <ellipse cx="200" cy="258" rx="120" ry="8" fill="#6D3A2C" />

      {/* Screen content - form */}
      <rect x="125" y="145" width="150" height="12" rx="2" fill="#FFFFFF" />
      <rect x="125" y="165" width="150" height="12" rx="2" fill="#FFFFFF" />
      <rect x="125" y="185" width="100" height="12" rx="2" fill="#FFFFFF" />
      <rect x="125" y="205" width="60" height="18" rx="4" fill="#D4832E" />

      {/* Checkmarks - progress */}
      <circle cx="115" cy="151" r="6" fill="#5a8a4a" />
      <path d="M112 151 L114 153 L118 149" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <circle cx="115" cy="171" r="6" fill="#5a8a4a" />
      <path d="M112 171 L114 173 L118 169" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <circle cx="115" cy="191" r="6" fill="#E5A630" />

      {/* Person at laptop */}
      <ellipse cx="200" cy="115" rx="20" ry="6" fill="#E0D6CC" />
      <rect x="185" y="70" width="30" height="45" rx="8" fill="#D4832E" />
      <circle cx="200" cy="55" r="20" fill="#FFDAB9" />
      <path d="M190 50 Q200 45 210 50" stroke="#5C4033" strokeWidth="2" fill="none" />

      {/* Clock showing quick time */}
      <circle cx="330" cy="140" r="30" fill="#FFFFFF" stroke="#D4832E" strokeWidth="3" />
      <line x1="330" y1="140" x2="330" y2="120" stroke="#8B4D3B" strokeWidth="3" strokeLinecap="round" />
      <line x1="330" y1="140" x2="345" y2="145" stroke="#D4832E" strokeWidth="2" strokeLinecap="round" />
      <circle cx="330" cy="140" r="4" fill="#D4832E" />
      <text x="315" y="180" fontSize="12" fill="#8B4D3B" fontWeight="bold">15 min</text>

      {/* Sparkles/stars representing success */}
      <polygon points="70,80 73,90 85,90 76,97 79,108 70,101 61,108 64,97 55,90 67,90" fill="#E5A630" />
      <polygon points="350,220 352,227 360,227 354,232 356,240 350,235 344,240 346,232 340,227 348,227" fill="#D4832E" opacity="0.7" />
    </svg>
  );
}

// Charities Page - Giving/hearts theme
export function CharitiesIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="200" cy="150" rx="180" ry="140" fill="#FFF5EB" />
      <ellipse cx="100" cy="200" rx="70" ry="60" fill="#FFE8D6" />

      {/* Hands giving/receiving */}
      <path d="M120 180 Q100 160 130 150 L180 150 Q200 150 200 170 L200 200 Q200 220 180 220 L140 220 Q120 220 120 200 Z" fill="#FFDAB9" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M280 180 Q300 160 270 150 L220 150 Q200 150 200 170 L200 200 Q200 220 220 220 L260 220 Q280 220 280 200 Z" fill="#FFDAB9" stroke="#8B4D3B" strokeWidth="2" />

      {/* Large heart in center */}
      <path d="M200 100 C200 80 220 60 245 70 C270 80 280 100 280 120 C280 160 200 200 200 200 C200 200 120 160 120 120 C120 100 130 80 155 70 C180 60 200 80 200 100Z" fill="#D4832E" />
      <path d="M200 115 C200 105 210 95 225 100 C240 105 245 115 245 125 C245 145 200 165 200 165 C200 165 155 145 155 125 C155 115 160 105 175 100 C190 95 200 105 200 115Z" fill="#FFE8D6" />

      {/* Small floating hearts */}
      <path d="M80 100 C80 92 88 84 98 88 C108 84 116 92 116 100 C116 116 98 130 98 130 C98 130 80 116 80 100Z" fill="#E5A630" opacity="0.7" />
      <path d="M300 80 C300 74 306 68 313 71 C320 68 326 74 326 80 C326 92 313 102 313 102 C313 102 300 92 300 80Z" fill="#D4832E" opacity="0.6" />
      <path d="M330 180 C330 175 335 170 341 172 C347 170 352 175 352 180 C352 190 341 198 341 198 C341 198 330 190 330 180Z" fill="#E5A630" opacity="0.5" />
      <path d="M60 160 C60 156 64 152 69 154 C74 152 78 156 78 160 C78 168 69 174 69 174 C69 174 60 168 60 160Z" fill="#8B4D3B" opacity="0.4" />

      {/* Document with heart - representing legacy */}
      <rect x="300" y="200" width="60" height="75" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M330 225 C330 220 335 215 342 218 C349 215 354 220 354 225 C354 235 342 245 342 245 C342 245 330 235 330 225Z" fill="#D4832E" />
      <line x1="310" y1="255" x2="350" y2="255" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="310" y1="265" x2="340" y2="265" stroke="#E0D6CC" strokeWidth="2" />

      {/* Decorative circles */}
      <circle cx="50" cy="80" r="8" fill="#E5A630" opacity="0.4" />
      <circle cx="370" cy="130" r="6" fill="#D4832E" opacity="0.3" />
    </svg>
  );
}

// Glossary Page - Dictionary/definitions theme
export function GlossaryIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="150" cy="100" rx="140" ry="95" fill="#FFF5EB" />

      {/* Open dictionary/book */}
      <path d="M50 60 Q150 40 250 60 L250 160 Q150 140 50 160 Z" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <line x1="150" y1="45" x2="150" y2="155" stroke="#8B4D3B" strokeWidth="2" />

      {/* Left page content */}
      <text x="70" y="80" fontSize="14" fill="#D4832E" fontWeight="bold">A</text>
      <line x1="70" y1="95" x2="130" y2="95" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="70" y1="110" x2="125" y2="110" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="70" y1="125" x2="130" y2="125" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="70" y1="140" x2="115" y2="140" stroke="#E0D6CC" strokeWidth="2" />

      {/* Right page content */}
      <text x="170" y="80" fontSize="14" fill="#D4832E" fontWeight="bold">B</text>
      <line x1="170" y1="95" x2="230" y2="95" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="170" y1="110" x2="225" y2="110" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="170" y1="125" x2="230" y2="125" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="170" y1="140" x2="210" y2="140" stroke="#E0D6CC" strokeWidth="2" />

      {/* Bookmark ribbon */}
      <path d="M145 40 L145 25 L155 35 L155 40" fill="#D4832E" />

      {/* ABC letters floating */}
      <text x="30" y="50" fontSize="18" fill="#E5A630" opacity="0.6" fontWeight="bold">A</text>
      <text x="250" y="45" fontSize="16" fill="#D4832E" opacity="0.5" fontWeight="bold">Z</text>

      {/* Magnifying glass */}
      <circle cx="260" cy="150" r="20" fill="none" stroke="#D4832E" strokeWidth="3" />
      <line x1="275" y1="165" x2="290" y2="180" stroke="#D4832E" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Lifetime Updates - Refresh/cycle theme
export function LifetimeUpdatesIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="150" cy="100" rx="140" ry="95" fill="#FFF5EB" />

      {/* Document */}
      <rect x="100" y="50" width="100" height="130" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <line x1="115" y1="75" x2="185" y2="75" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="115" y1="90" x2="185" y2="90" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="115" y1="105" x2="170" y2="105" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="115" y1="125" x2="185" y2="125" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="115" y1="140" x2="185" y2="140" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="115" y1="155" x2="160" y2="155" stroke="#E0D6CC" strokeWidth="2" />

      {/* Circular arrows - refresh symbol */}
      <path d="M60 100 A40 40 0 0 1 90 60" fill="none" stroke="#D4832E" strokeWidth="4" strokeLinecap="round" />
      <polygon points="90,55 95,70 80,68" fill="#D4832E" />

      <path d="M240 100 A40 40 0 0 1 210 140" fill="none" stroke="#D4832E" strokeWidth="4" strokeLinecap="round" />
      <polygon points="210,145 205,130 220,132" fill="#D4832E" />

      {/* Checkmark badge */}
      <circle cx="175" cy="160" r="18" fill="#5a8a4a" />
      <path d="M167 160 L173 166 L185 154" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stars */}
      <polygon points="50,150 52,156 58,156 54,160 55,166 50,163 45,166 46,160 42,156 48,156" fill="#E5A630" opacity="0.6" />
    </svg>
  );
}

// Mirror Wills - Couple/pair theme
export function MirrorWillsIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="150" cy="100" rx="140" ry="95" fill="#FFF5EB" />

      {/* Left document */}
      <rect x="40" y="40" width="80" height="110" rx="4" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <rect x="50" y="50" width="40" height="6" rx="2" fill="#D4832E" />
      <line x1="50" y1="70" x2="110" y2="70" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="50" y1="85" x2="110" y2="85" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="50" y1="100" x2="100" y2="100" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="50" y1="120" x2="110" y2="120" stroke="#E0D6CC" strokeWidth="2" />
      <path d="M60 135 Q75 128 90 135" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Right document (mirror) */}
      <rect x="180" y="40" width="80" height="110" rx="4" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <rect x="190" y="50" width="40" height="6" rx="2" fill="#D4832E" />
      <line x1="190" y1="70" x2="250" y2="70" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="190" y1="85" x2="250" y2="85" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="190" y1="100" x2="240" y2="100" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="190" y1="120" x2="250" y2="120" stroke="#E0D6CC" strokeWidth="2" />
      <path d="M200 135 Q215 128 230 135" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Mirror/reflection arrows */}
      <path d="M130 90 L145 90 L145 85 L160 95 L145 105 L145 100 L130 100 Z" fill="#E5A630" />

      {/* Couple silhouettes */}
      <circle cx="80" cy="170" r="12" fill="#FFDAB9" />
      <rect x="70" y="180" width="20" height="15" rx="4" fill="#D4832E" />

      <circle cx="220" cy="170" r="12" fill="#FFDAB9" />
      <rect x="210" y="180" width="20" height="15" rx="4" fill="#8B4D3B" />

      {/* Heart between */}
      <path d="M150 165 C150 160 155 155 162 158 C169 155 174 160 174 165 C174 175 162 185 162 185 C162 185 150 175 150 165Z" fill="#D4832E" opacity="0.7" />
    </svg>
  );
}

// Book a Call - Calendar/consultation theme
export function BookCallIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="150" cy="100" rx="140" ry="95" fill="#FFF5EB" />

      {/* Calendar */}
      <rect x="60" y="40" width="120" height="110" rx="6" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="60" y="40" width="120" height="25" rx="6" fill="#D4832E" />
      <circle cx="80" cy="40" r="5" fill="#8B4D3B" />
      <circle cx="160" cy="40" r="5" fill="#8B4D3B" />

      {/* Calendar grid */}
      <line x1="90" y1="75" x2="90" y2="140" stroke="#E0D6CC" strokeWidth="1" />
      <line x1="120" y1="75" x2="120" y2="140" stroke="#E0D6CC" strokeWidth="1" />
      <line x1="150" y1="75" x2="150" y2="140" stroke="#E0D6CC" strokeWidth="1" />
      <line x1="70" y1="95" x2="170" y2="95" stroke="#E0D6CC" strokeWidth="1" />
      <line x1="70" y1="115" x2="170" y2="115" stroke="#E0D6CC" strokeWidth="1" />

      {/* Selected date */}
      <circle cx="135" cy="105" r="12" fill="#E5A630" />
      <text x="131" y="110" fontSize="12" fill="#FFFFFF" fontWeight="bold">15</text>

      {/* Phone/video icon */}
      <rect x="200" y="60" width="60" height="90" rx="8" fill="#8B4D3B" />
      <rect x="208" y="75" width="44" height="55" rx="2" fill="#87CEEB" />

      {/* Person on screen */}
      <circle cx="230" cy="95" r="12" fill="#FFDAB9" />
      <rect x="220" y="108" width="20" height="15" rx="4" fill="#D4832E" />

      {/* Call waves */}
      <path d="M265 90 Q275 100 265 110" stroke="#E5A630" strokeWidth="2" fill="none" />
      <path d="M272 85 Q285 100 272 115" stroke="#E5A630" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Clock */}
      <circle cx="55" cy="170" r="20" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <line x1="55" y1="170" x2="55" y2="158" stroke="#8B4D3B" strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="170" x2="65" y2="175" stroke="#D4832E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Policy/Legal - Shield and document theme
export function PolicyIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="150" cy="100" rx="140" ry="95" fill="#FFF5EB" />

      {/* Shield */}
      <path d="M150 30 L210 50 L210 100 Q210 140 150 170 Q90 140 90 100 L90 50 Z" fill="#FFFFFF" stroke="#D4832E" strokeWidth="3" />
      <path d="M150 45 L195 60 L195 98 Q195 130 150 155 Q105 130 105 98 L105 60 Z" fill="#FFE8D6" />

      {/* Document inside shield */}
      <rect x="125" y="60" width="50" height="65" rx="3" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <line x1="135" y1="75" x2="165" y2="75" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="135" y1="88" x2="165" y2="88" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="135" y1="101" x2="155" y2="101" stroke="#E0D6CC" strokeWidth="2" />

      {/* Checkmark */}
      <circle cx="150" cy="135" r="12" fill="#5a8a4a" />
      <path d="M144 135 L148 139 L158 129" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Lock icon */}
      <rect x="230" y="80" width="30" height="25" rx="3" fill="#8B4D3B" />
      <path d="M237 80 L237 72 Q245 60 253 72 L253 80" fill="none" stroke="#8B4D3B" strokeWidth="3" />
      <circle cx="245" cy="92" r="3" fill="#E5A630" />

      {/* Decorative elements */}
      <circle cx="50" cy="60" r="6" fill="#E5A630" opacity="0.5" />
      <circle cx="260" cy="150" r="5" fill="#D4832E" opacity="0.4" />
    </svg>
  );
}

// Training/Learning - Presentation theme
export function TrainingIllustration() {
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '300px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="150" cy="100" rx="140" ry="95" fill="#FFF5EB" />

      {/* Presentation board */}
      <rect x="60" y="30" width="180" height="110" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="60" y="30" width="180" height="20" fill="#D4832E" rx="4" />
      <line x1="150" y1="20" x2="150" y2="30" stroke="#8B4D3B" strokeWidth="3" />
      <rect x="140" y="15" width="20" height="8" fill="#8B4D3B" rx="2" />

      {/* Chart on board */}
      <rect x="80" y="65" width="20" height="50" fill="#E5A630" />
      <rect x="110" y="55" width="20" height="60" fill="#D4832E" />
      <rect x="140" y="45" width="20" height="70" fill="#8B4D3B" />
      <rect x="170" y="60" width="20" height="55" fill="#E5A630" />
      <rect x="200" y="50" width="20" height="65" fill="#D4832E" />

      {/* Pointer stick */}
      <line x1="50" y1="140" x2="140" y2="70" stroke="#8B4D3B" strokeWidth="3" strokeLinecap="round" />
      <circle cx="140" cy="70" r="4" fill="#D4832E" />

      {/* Person presenting */}
      <circle cx="40" cy="160" r="15" fill="#FFDAB9" />
      <rect x="28" y="175" width="24" height="20" rx="5" fill="#D4832E" />

      {/* Audience dots */}
      <circle cx="200" cy="170" r="8" fill="#FFDAB9" />
      <circle cx="230" cy="175" r="8" fill="#FFDAB9" />
      <circle cx="260" cy="168" r="8" fill="#FFDAB9" />

      {/* Lightbulb - ideas */}
      <ellipse cx="270" cy="50" rx="15" ry="18" fill="#E5A630" />
      <rect x="264" y="65" width="12" height="8" fill="#D4832E" rx="2" />
    </svg>
  );
}

// Resource: Making a Will - Document with pen theme
export function MakingWillIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Main document */}
      <rect x="70" y="30" width="120" height="150" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />

      {/* Document header */}
      <rect x="85" y="45" width="90" height="10" rx="2" fill="#D4832E" />

      {/* Document lines */}
      <line x1="85" y1="70" x2="175" y2="70" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="85" x2="175" y2="85" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="100" x2="160" y2="100" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="120" x2="175" y2="120" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="135" x2="175" y2="135" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="150" x2="145" y2="150" stroke="#E0D6CC" strokeWidth="2" />

      {/* Signature */}
      <path d="M100 165 Q120 155 140 165 Q160 158 170 165" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Pen */}
      <rect x="200" y="60" width="60" height="10" rx="2" fill="#D4832E" transform="rotate(45 200 60)" />
      <polygon points="200,60 195,70 205,70" fill="#8B4D3B" transform="rotate(45 200 60)" />
      <rect x="245" y="105" width="15" height="8" rx="1" fill="#E5A630" transform="rotate(45 245 105)" />

      {/* Checkmark */}
      <circle cx="55" cy="60" r="18" fill="#5a8a4a" />
      <path d="M47 60 L53 66 L65 54" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Decorative */}
      <circle cx="230" cy="170" r="6" fill="#E5A630" opacity="0.5" />
      <circle cx="40" cy="140" r="5" fill="#D4832E" opacity="0.4" />
    </svg>
  );
}

// Resource: Executors & Probate - People and documents theme
export function ExecutorsProbateIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Person (executor) */}
      <circle cx="80" cy="70" r="25" fill="#FFDAB9" />
      <rect x="60" y="95" width="40" height="50" rx="8" fill="#D4832E" />
      <ellipse cx="80" cy="150" rx="25" ry="8" fill="#E0D6CC" />
      <path d="M68 63 Q80 57 92 63" stroke="#5C4033" strokeWidth="2" fill="none" />

      {/* Documents stack */}
      <rect x="140" y="50" width="90" height="60" rx="3" fill="#E0D6CC" transform="rotate(-5 140 50)" />
      <rect x="145" y="45" width="90" height="60" rx="3" fill="#F5F5F5" transform="rotate(-2 145 45)" />
      <rect x="150" y="40" width="90" height="60" rx="3" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />

      {/* Document lines */}
      <line x1="160" y1="55" x2="230" y2="55" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="160" y1="68" x2="230" y2="68" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="160" y1="81" x2="210" y2="81" stroke="#E0D6CC" strokeWidth="2" />

      {/* Stamp/seal */}
      <circle cx="210" cy="130" r="25" fill="#FFFFFF" stroke="#D4832E" strokeWidth="3" />
      <circle cx="210" cy="130" r="15" fill="#FFE8D6" />
      <text x="200" y="135" fontSize="12" fill="#D4832E" fontWeight="bold">OK</text>

      {/* Clipboard */}
      <rect x="50" y="155" width="50" height="35" rx="3" fill="#8B4D3B" />
      <rect x="55" y="162" width="40" height="25" rx="2" fill="#FFFFFF" />
      <rect x="68" y="152" width="14" height="8" rx="2" fill="#8B4D3B" />
      <line x1="60" y1="170" x2="90" y2="170" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="60" y1="178" x2="85" y2="178" stroke="#E0D6CC" strokeWidth="2" />
    </svg>
  );
}

// Resource: Lasting Power of Attorney - Handshake/trust theme
export function LPAIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Two people */}
      <circle cx="70" cy="80" r="22" fill="#FFDAB9" />
      <rect x="52" y="102" width="36" height="45" rx="8" fill="#D4832E" />

      <circle cx="210" cy="80" r="22" fill="#FFDAB9" />
      <rect x="192" y="102" width="36" height="45" rx="8" fill="#8B4D3B" />

      {/* Handshake in center */}
      <path d="M100 130 Q120 120 140 130 Q160 120 180 130" fill="#FFDAB9" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="95" y="125" width="25" height="15" rx="3" fill="#FFDAB9" />
      <rect x="160" y="125" width="25" height="15" rx="3" fill="#FFDAB9" />

      {/* Document above handshake */}
      <rect x="110" y="40" width="60" height="45" rx="3" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <text x="120" y="58" fontSize="10" fill="#D4832E" fontWeight="bold">LPA</text>
      <line x1="118" y1="68" x2="162" y2="68" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="118" y1="78" x2="155" y2="78" stroke="#E0D6CC" strokeWidth="2" />

      {/* Trust/shield icon */}
      <path d="M140 155 L165 165 L165 185 Q165 200 140 210 Q115 200 115 185 L115 165 Z" fill="#FFFFFF" stroke="#E5A630" strokeWidth="2" />
      <path d="M133 180 L138 185 L150 173" stroke="#5a8a4a" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Decorative elements */}
      <circle cx="40" cy="50" r="6" fill="#E5A630" opacity="0.5" />
      <circle cx="245" cy="160" r="5" fill="#D4832E" opacity="0.4" />
    </svg>
  );
}

// Resource: Family Situations - Family group theme
export function FamilyIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* House */}
      <path d="M140 30 L200 70 L200 130 L80 130 L80 70 Z" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M140 30 L80 70 M140 30 L200 70" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="120" y="90" width="40" height="40" rx="2" fill="#D4832E" />
      <circle cx="152" cy="112" r="3" fill="#E5A630" />

      {/* Family - Adult 1 */}
      <circle cx="70" cy="155" r="18" fill="#FFDAB9" />
      <rect x="55" y="173" width="30" height="35" rx="6" fill="#D4832E" />
      <ellipse cx="70" cy="215" rx="20" ry="6" fill="#E0D6CC" />

      {/* Family - Adult 2 */}
      <circle cx="210" cy="155" r="18" fill="#FFDAB9" />
      <rect x="195" y="173" width="30" height="35" rx="6" fill="#8B4D3B" />
      <ellipse cx="210" cy="215" rx="20" ry="6" fill="#E0D6CC" />

      {/* Family - Child 1 */}
      <circle cx="120" cy="165" r="14" fill="#FFDAB9" />
      <rect x="108" y="179" width="24" height="28" rx="5" fill="#E5A630" />
      <ellipse cx="120" cy="212" rx="15" ry="5" fill="#E0D6CC" />

      {/* Family - Child 2 */}
      <circle cx="160" cy="165" r="14" fill="#FFDAB9" />
      <rect x="148" y="179" width="24" height="28" rx="5" fill="#87CEEB" />
      <ellipse cx="160" cy="212" rx="15" ry="5" fill="#E0D6CC" />

      {/* Heart above */}
      <path d="M140 10 C140 5 145 0 152 3 C159 0 164 5 164 10 C164 20 152 28 152 28 C152 28 140 20 140 10Z" fill="#D4832E" opacity="0.7" />
    </svg>
  );
}

// Resource: After Death - Peaceful/memorial theme
export function AfterDeathIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Gentle landscape */}
      <ellipse cx="140" cy="180" rx="120" ry="30" fill="#E8F5E9" />

      {/* Tree */}
      <rect x="60" y="120" width="15" height="60" fill="#8B4D3B" />
      <ellipse cx="67" cy="100" rx="35" ry="40" fill="#7CB342" opacity="0.8" />
      <ellipse cx="55" cy="110" rx="25" ry="30" fill="#8BC34A" opacity="0.7" />

      {/* Candle/memorial */}
      <rect x="180" y="130" width="20" height="50" rx="3" fill="#F5F5F5" stroke="#E0D6CC" strokeWidth="2" />
      <ellipse cx="190" cy="130" rx="10" ry="4" fill="#F5F5F5" stroke="#E0D6CC" strokeWidth="2" />
      <ellipse cx="190" cy="120" rx="6" ry="10" fill="#E5A630" />
      <ellipse cx="190" cy="115" rx="3" ry="5" fill="#FFD54F" />

      {/* Dove/bird */}
      <ellipse cx="140" cy="50" rx="20" ry="12" fill="#FFFFFF" />
      <ellipse cx="155" cy="48" rx="8" ry="6" fill="#FFFFFF" />
      <polygon points="120,50 100,45 100,55" fill="#FFFFFF" />
      <circle cx="160" cy="46" r="2" fill="#8B4D3B" />

      {/* Flowers */}
      <circle cx="110" cy="160" r="8" fill="#D4832E" opacity="0.7" />
      <circle cx="125" cy="155" r="6" fill="#E5A630" opacity="0.7" />
      <circle cx="115" cy="168" r="5" fill="#D4832E" opacity="0.5" />
      <line x1="115" y1="168" x2="115" y2="180" stroke="#7CB342" strokeWidth="2" />
      <line x1="110" y1="165" x2="108" y2="180" stroke="#7CB342" strokeWidth="2" />

      {/* Stars */}
      <polygon points="220,40 222,46 228,46 224,50 225,56 220,53 215,56 216,50 212,46 218,46" fill="#E5A630" opacity="0.6" />
      <polygon points="250,70 251,74 255,74 252,77 253,81 250,79 247,81 248,77 245,74 249,74" fill="#D4832E" opacity="0.5" />
    </svg>
  );
}

// Resource: Witnesses - People observing theme
export function WitnessesIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Main person signing */}
      <circle cx="140" cy="70" r="22" fill="#FFDAB9" />
      <rect x="122" y="92" width="36" height="45" rx="8" fill="#D4832E" />

      {/* Document being signed */}
      <rect x="100" y="140" width="80" height="50" rx="3" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <line x1="110" y1="155" x2="170" y2="155" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="110" y1="168" x2="170" y2="168" stroke="#E0D6CC" strokeWidth="2" />
      <path d="M120 180 Q135 172 150 180" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Witness 1 */}
      <circle cx="50" cy="90" r="18" fill="#FFDAB9" />
      <rect x="36" y="108" width="28" height="35" rx="6" fill="#8B4D3B" />
      <circle cx="50" cy="85" r="8" fill="none" stroke="#8B4D3B" strokeWidth="2" />
      <circle cx="50" cy="85" r="4" fill="#87CEEB" />

      {/* Witness 2 */}
      <circle cx="230" cy="90" r="18" fill="#FFDAB9" />
      <rect x="216" y="108" width="28" height="35" rx="6" fill="#E5A630" />
      <circle cx="230" cy="85" r="8" fill="none" stroke="#8B4D3B" strokeWidth="2" />
      <circle cx="230" cy="85" r="4" fill="#87CEEB" />

      {/* Eyes watching - dotted lines */}
      <path d="M68 90 Q100 120 120 145" stroke="#D4832E" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      <path d="M212 90 Q180 120 160 145" stroke="#D4832E" strokeWidth="1" strokeDasharray="4 4" fill="none" />

      {/* "2 witnesses" badge */}
      <circle cx="140" cy="30" r="18" fill="#5a8a4a" />
      <text x="133" y="35" fontSize="14" fill="#FFFFFF" fontWeight="bold">2</text>
    </svg>
  );
}

// Resource: Signing a Will - Pen to paper theme
export function SigningIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Table surface */}
      <rect x="40" y="140" width="200" height="10" rx="2" fill="#8B4D3B" />
      <rect x="50" y="150" width="8" height="40" fill="#6D3A2C" />
      <rect x="222" y="150" width="8" height="40" fill="#6D3A2C" />

      {/* Document on table */}
      <rect x="70" y="70" width="140" height="70" rx="3" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" transform="rotate(-3 70 70)" />

      {/* Document content */}
      <rect x="85" y="80" width="80" height="8" rx="2" fill="#D4832E" />
      <line x1="85" y1="100" x2="195" y2="98" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="112" x2="195" y2="110" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="85" y1="124" x2="160" y2="122" stroke="#E0D6CC" strokeWidth="2" />

      {/* Hand holding pen */}
      <ellipse cx="180" cy="95" rx="25" ry="20" fill="#FFDAB9" />
      <rect x="175" y="75" width="12" height="25" rx="3" fill="#FFDAB9" />

      {/* Pen */}
      <rect x="170" y="50" width="8" height="50" rx="2" fill="#D4832E" transform="rotate(15 170 50)" />
      <polygon points="178,98 174,108 182,108" fill="#8B4D3B" transform="rotate(15 178 103)" />

      {/* Signature being written */}
      <path d="M100 125 Q120 115 140 125 Q160 118 175 123" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Ink drops */}
      <circle cx="178" cy="125" r="3" fill="#8B4D3B" opacity="0.6" />
      <circle cx="183" cy="130" r="2" fill="#8B4D3B" opacity="0.4" />

      {/* Checkmark */}
      <circle cx="220" cy="50" r="15" fill="#5a8a4a" />
      <path d="M213 50 L218 55 L228 45" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Resource: Marriage and Wills - Rings theme
export function MarriageWillsIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Interlinked rings */}
      <circle cx="110" cy="80" r="30" fill="none" stroke="#E5A630" strokeWidth="6" />
      <circle cx="150" cy="80" r="30" fill="none" stroke="#D4832E" strokeWidth="6" />

      {/* Document below */}
      <rect x="80" y="120" width="120" height="70" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="95" y="132" width="70" height="8" rx="2" fill="#D4832E" />
      <line x1="95" y1="152" x2="185" y2="152" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="95" y1="165" x2="185" y2="165" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="95" y1="178" x2="150" y2="178" stroke="#E0D6CC" strokeWidth="2" />

      {/* Hearts */}
      <path d="M130 45 C130 40 135 35 142 38 C149 35 154 40 154 45 C154 55 142 63 142 63 C142 63 130 55 130 45Z" fill="#D4832E" opacity="0.7" />

      {/* Couple silhouettes */}
      <circle cx="50" cy="150" r="15" fill="#FFDAB9" />
      <rect x="38" y="165" width="24" height="30" rx="5" fill="#8B4D3B" />

      <circle cx="230" cy="150" r="15" fill="#FFDAB9" />
      <rect x="218" y="165" width="24" height="30" rx="5" fill="#D4832E" />

      {/* Arrow showing connection */}
      <path d="M65 155 Q100 140 110 160" stroke="#E5A630" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <path d="M215 155 Q180 140 170 160" stroke="#E5A630" strokeWidth="2" strokeDasharray="4 4" fill="none" />
    </svg>
  );
}

// Generic page header illustration - small decorative element
export function PageHeaderDecoration() {
  return (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100px', height: 'auto', opacity: 0.6 }}>
      <ellipse cx="50" cy="15" rx="45" ry="12" fill="#FFE8D6" />
      <circle cx="20" cy="15" r="6" fill="#D4832E" opacity="0.5" />
      <circle cx="50" cy="15" r="4" fill="#E5A630" opacity="0.6" />
      <circle cx="80" cy="15" r="5" fill="#8B4D3B" opacity="0.4" />
    </svg>
  );
}

// Blog: Expats/International - Globe and document theme
export function ExpatsIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Globe */}
      <circle cx="100" cy="90" r="50" fill="#87CEEB" stroke="#8B4D3B" strokeWidth="2" />
      <ellipse cx="100" cy="90" rx="50" ry="20" fill="none" stroke="#8B4D3B" strokeWidth="1.5" />
      <ellipse cx="100" cy="90" rx="20" ry="50" fill="none" stroke="#8B4D3B" strokeWidth="1.5" />
      <line x1="50" y1="90" x2="150" y2="90" stroke="#8B4D3B" strokeWidth="1.5" />

      {/* Landmasses on globe */}
      <ellipse cx="85" cy="75" rx="20" ry="15" fill="#7CB342" opacity="0.7" />
      <ellipse cx="115" cy="100" rx="15" ry="12" fill="#7CB342" opacity="0.7" />

      {/* Document */}
      <rect x="160" y="50" width="80" height="100" rx="4" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2" />
      <rect x="170" y="62" width="50" height="8" rx="2" fill="#D4832E" />
      <line x1="170" y1="82" x2="230" y2="82" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="170" y1="95" x2="230" y2="95" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="170" y1="108" x2="210" y2="108" stroke="#E0D6CC" strokeWidth="2" />
      <line x1="170" y1="125" x2="230" y2="125" stroke="#E0D6CC" strokeWidth="2" />
      <path d="M180 138 Q195 130 210 138" stroke="#8B4D3B" strokeWidth="2" fill="none" />

      {/* Airplane */}
      <path d="M60 40 L80 50 L75 55 L90 60 L75 62 L70 70 L65 62 L50 60 L65 55 L60 50 Z" fill="#E5A630" />

      {/* UK flag simplified */}
      <rect x="200" y="160" width="40" height="25" rx="2" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="1" />
      <line x1="220" y1="160" x2="220" y2="185" stroke="#D4832E" strokeWidth="3" />
      <line x1="200" y1="172" x2="240" y2="172" stroke="#D4832E" strokeWidth="3" />

      {/* Connection lines */}
      <path d="M150 90 L160 80" stroke="#D4832E" strokeWidth="2" strokeDasharray="4 4" />

      {/* Decorative */}
      <circle cx="50" cy="160" r="5" fill="#E5A630" opacity="0.5" />
      <circle cx="250" cy="40" r="6" fill="#D4832E" opacity="0.4" />
    </svg>
  );
}

// Blog: General Will Guidance - Lightbulb and document
export function GeneralGuidanceIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Large lightbulb */}
      <ellipse cx="90" cy="80" rx="40" ry="50" fill="#E5A630" />
      <rect x="75" y="125" width="30" height="20" fill="#D4832E" rx="3" />
      <rect x="80" y="142" width="20" height="5" fill="#8B4D3B" rx="2" />

      {/* Light rays */}
      <line x1="40" y1="80" x2="25" y2="80" stroke="#E5A630" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="45" x2="38" y2="35" stroke="#E5A630" strokeWidth="3" strokeLinecap="round" />
      <line x1="90" y1="25" x2="90" y2="10" stroke="#E5A630" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="45" x2="142" y2="35" stroke="#E5A630" strokeWidth="3" strokeLinecap="round" />

      {/* Inner glow */}
      <ellipse cx="90" cy="75" rx="20" ry="25" fill="#FFD54F" opacity="0.6" />

      {/* Document/checklist */}
      <rect x="160" y="40" width="90" height="120" rx="4" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <rect x="172" y="52" width="60" height="8" rx="2" fill="#D4832E" />

      {/* Checklist items */}
      <rect x="172" y="72" width="12" height="12" rx="2" fill="none" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M175 78 L178 81 L182 75" stroke="#5a8a4a" strokeWidth="2" fill="none" />
      <line x1="190" y1="78" x2="238" y2="78" stroke="#E0D6CC" strokeWidth="2" />

      <rect x="172" y="92" width="12" height="12" rx="2" fill="none" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M175 98 L178 101 L182 95" stroke="#5a8a4a" strokeWidth="2" fill="none" />
      <line x1="190" y1="98" x2="238" y2="98" stroke="#E0D6CC" strokeWidth="2" />

      <rect x="172" y="112" width="12" height="12" rx="2" fill="none" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M175 118 L178 121 L182 115" stroke="#5a8a4a" strokeWidth="2" fill="none" />
      <line x1="190" y1="118" x2="238" y2="118" stroke="#E0D6CC" strokeWidth="2" />

      <rect x="172" y="132" width="12" height="12" rx="2" fill="none" stroke="#E5A630" strokeWidth="2" />
      <line x1="190" y1="138" x2="220" y2="138" stroke="#E0D6CC" strokeWidth="2" />

      {/* Decorative elements */}
      <circle cx="50" cy="170" r="6" fill="#D4832E" opacity="0.4" />
      <circle cx="260" cy="160" r="5" fill="#E5A630" opacity="0.5" />
    </svg>
  );
}

// Blog: Cohabiting/Relationships - Two people and home
export function CohabitingIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* House */}
      <path d="M140 30 L220 80 L220 160 L60 160 L60 80 Z" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M140 30 L60 80" stroke="#8B4D3B" strokeWidth="2" />
      <path d="M140 30 L220 80" stroke="#8B4D3B" strokeWidth="2" />

      {/* Door */}
      <rect x="115" y="110" width="50" height="50" rx="3" fill="#D4832E" />
      <circle cx="155" cy="138" r="4" fill="#E5A630" />

      {/* Windows */}
      <rect x="75" y="95" width="30" height="30" rx="2" fill="#87CEEB" stroke="#8B4D3B" strokeWidth="1" />
      <line x1="90" y1="95" x2="90" y2="125" stroke="#8B4D3B" strokeWidth="1" />
      <line x1="75" y1="110" x2="105" y2="110" stroke="#8B4D3B" strokeWidth="1" />

      <rect x="175" y="95" width="30" height="30" rx="2" fill="#87CEEB" stroke="#8B4D3B" strokeWidth="1" />
      <line x1="190" y1="95" x2="190" y2="125" stroke="#8B4D3B" strokeWidth="1" />
      <line x1="175" y1="110" x2="205" y2="110" stroke="#8B4D3B" strokeWidth="1" />

      {/* Two people */}
      <circle cx="90" cy="175" r="12" fill="#FFDAB9" />
      <rect x="80" y="187" width="20" height="18" rx="4" fill="#D4832E" />

      <circle cx="190" cy="175" r="12" fill="#FFDAB9" />
      <rect x="180" y="187" width="20" height="18" rx="4" fill="#8B4D3B" />

      {/* Heart between them */}
      <path d="M140 175 C140 168 148 162 155 166 C162 162 170 168 170 175 C170 188 155 200 155 200 C155 200 140 188 140 175Z" fill="#D4832E" opacity="0.7" />

      {/* Question marks - uncertainty theme */}
      <text x="45" y="60" fontSize="20" fill="#E5A630" opacity="0.6" fontFamily="Georgia">?</text>
      <text x="225" y="55" fontSize="16" fill="#D4832E" opacity="0.5" fontFamily="Georgia">?</text>
    </svg>
  );
}

// Blog: Probate - Scales of justice theme
export function ProbateBlogIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', height: 'auto' }}>
      {/* Background */}
      <ellipse cx="140" cy="100" rx="130" ry="95" fill="#FFF5EB" />

      {/* Scale post */}
      <rect x="135" y="50" width="10" height="130" fill="#8B4D3B" />
      <rect x="125" y="175" width="30" height="10" rx="2" fill="#8B4D3B" />

      {/* Scale beam */}
      <rect x="50" y="55" width="180" height="8" rx="2" fill="#D4832E" />

      {/* Left scale pan */}
      <line x1="80" y1="63" x2="80" y2="100" stroke="#8B4D3B" strokeWidth="2" />
      <ellipse cx="80" cy="105" rx="35" ry="10" fill="#E5A630" />
      <ellipse cx="80" cy="102" rx="35" ry="10" fill="#FFE8D6" />

      {/* Documents on left scale */}
      <rect x="65" y="85" width="30" height="15" rx="2" fill="#FFFFFF" stroke="#8B4D3B" strokeWidth="1" />

      {/* Right scale pan */}
      <line x1="200" y1="63" x2="200" y2="120" stroke="#8B4D3B" strokeWidth="2" />
      <ellipse cx="200" cy="125" rx="35" ry="10" fill="#E5A630" />
      <ellipse cx="200" cy="122" rx="35" ry="10" fill="#FFE8D6" />

      {/* Coins on right scale */}
      <circle cx="190" cy="108" r="8" fill="#E5A630" stroke="#D4832E" strokeWidth="1" />
      <circle cx="205" cy="105" r="8" fill="#E5A630" stroke="#D4832E" strokeWidth="1" />
      <circle cx="197" cy="95" r="8" fill="#E5A630" stroke="#D4832E" strokeWidth="1" />

      {/* Top ornament */}
      <circle cx="140" cy="45" r="12" fill="#D4832E" />
      <circle cx="140" cy="45" r="6" fill="#FFE8D6" />

      {/* Gavel */}
      <rect x="40" y="140" width="40" height="15" rx="3" fill="#8B4D3B" />
      <rect x="55" y="130" width="10" height="25" rx="2" fill="#6D3A2C" />

      {/* Decorative */}
      <circle cx="250" cy="50" r="5" fill="#E5A630" opacity="0.5" />
      <circle cx="30" cy="100" r="6" fill="#D4832E" opacity="0.4" />
    </svg>
  );
}
