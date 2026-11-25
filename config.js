// ═══════════════════════════════════════════════════════════════════
//  OSIRIS — CONFIGURATION
//  @ By Brice Jct · Alpha OS · Groupe Alpha Nex Strasbourg
// ───────────────────────────────────────────────────────────────────
//  Ce fichier est listé dans .gitignore : il ne part jamais sur GitHub
//  tant que tu gardes le .gitignore fourni avec le projet.
//
//  ✅ MÉTHODE RECOMMANDÉE — Worker Cloudflare (osiris-worker.js) :
//  les 3 clés (Groq/OpenAI/Gemini) restent chiffrées côté Cloudflare,
//  jamais exposées au navigateur. Il suffit de coller l'URL du worker
//  ici, rien d'autre :
//
//    window.OSIRIS_CONFIG = {
//      OSIRIS_WORKER_URL: "https://osiris-brain.ton-compte.workers.dev"
//    };
//
//  Alternative (sans worker, clés en clair en local uniquement — jamais
//  commitées grâce au .gitignore) :
//
//    window.OSIRIS_CONFIG = {
//      GROQ_API_KEY: "ta-cle-groq",
//      OPENAI_API_KEY: "ta-cle-openai",
//      GEMINI_API_KEY: "ta-cle-google"
//    };
//
//  Sans rien configurer : Osiris fonctionne quand même, en basculant
//  automatiquement sur Pollinations (modèle gratuit, sans clé).
// ═══════════════════════════════════════════════════════════════════
window.OSIRIS_CONFIG = {
  OSIRIS_WORKER_URL: "https://osiris-brain.strassweb67.workers.dev"
};
