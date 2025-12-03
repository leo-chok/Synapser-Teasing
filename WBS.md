# WBS - Work Breakdown Structure : Synapser

> **Version :** 1.0.0
> **Statut :** Phase d'Initialisation
> **Description :** Décomposition hiérarchique des tâches pour le développement de la plateforme de neurofeedback Synapser.

---

## 1. 🧠 Phase Scientifique & Conception (R&D)
*Cette phase définit les règles du jeu pour les développeurs en se basant sur la littérature scientifique.*

- [ ] **1.1 Définition des Protocoles Thérapeutiques**
    - [ ] Analyse des bandes de fréquences cibles (Alpha, Delta, Theta) pour le traitement des acouphènes.
    - [ ] Définition des seuils de déclenchement du feedback (Reward thresholds).
    - [ ] Rédaction de la spec : "Algorithme de Feedback".
- [ ] **1.2 Architecture Système**
    - [ ] Diagramme de flux de données (Data Flow Diagram) : Casque -> App -> Cloud -> VR.
    - [ ] Choix final du hardware EEG (ex: Muse, NeuroSky, OpenBCI) et étude du SDK.
    - [ ] Conception de la BDD (Schéma relationnel : Users, Sessions, RawData).

## 2. 🔌 Hardware Bridge & Signal Processing (IoT Layer)
*Le "Pont" qui traduit le Bluetooth en données utilisables.*

- [ ] **2.1 Driver Bluetooth (BLE)**
    - [ ] Initialisation du module `react-native-ble-plx`.
    - [ ] Implémentation du scanning et appairage des devices.
    - [ ] Gestion de la reconnexion automatique et gestion des erreurs.
- [ ] **2.2 Traitement du Signal (Engine)**
    - [ ] Parsing des paquets de données brutes (Raw Packets).
    - [ ] Implémentation FFT (Fast Fourier Transform) si non géré par le casque (Conversion Temps -> Fréquence).
    - [ ] Lissage des données (Smoothing) pour éviter les "sauts" graphiques.
    - [ ] Détection des artefacts (clignements d'yeux, mâchoire) pour ignorer les faux signaux.

## 3. 📱 Core Application (Mobile - React Native)
*L'interface principale pour le patient.*

- [ ] **3.1 UX/UI Design**
    - [ ] Maquettes Figma (Login, Setup Casque, Session, Rapport).
    - [ ] Intégration du Design System (Tailwind/StyleSheet).
- [ ] **3.2 Module Authentification & Profil**
    - [ ] Inscription / Connexion (Sécurisée).
    - [ ] Gestion du profil "Patient" vs "Praticien".
- [ ] **3.3 Feedback Visuel 2D (Canvas)**
    - [ ] Création du moteur de rendu graphique temps réel.
    - [ ] Développement des exercices (ex: Jauge de relaxation, Objet en lévitation).
    - [ ] Feedback sonore (génération de bruits blancs ou sons relaxants modifiés par l'EEG).

## 4. ☁️ Backend API & Infrastructure (Node.js)
*Le cerveau central et la mémoire du projet.*

- [ ] **4.1 API RESTful**
    - [ ] Setup Serveur Express + TypeScript.
    - [ ] Endpoints `POST /session` (Sauvegarde des logs).
    - [ ] Endpoints `GET /stats` (Pour le dashboard).
- [ ] **4.2 WebSocket Server (Real-time)**
    - [ ] Setup Socket.io.
    - [ ] Room management (Lier un casque mobile à un client VR).
    - [ ] Broadcasting des données EEG normalisées (latence < 50ms).
- [ ] **4.3 Base de Données**
    - [ ] Setup PostgreSQL ou MongoDB (Time-series).
    - [ ] Chiffrement des données sensibles (Santé).

## 5. 🥽 Immersive Module (VR Extension)
*L'extension Unity/Unreal pour l'immersion totale.*

- [ ] **5.1 Environnement 3D**
    - [ ] Création de la scène "Zen" (Low Poly pour perf Quest/Mobile).
    - [ ] Lighting et Ambiance sonore.
- [ ] **5.2 Connectivité**
    - [ ] Client WebSocket (C# ou C++) pour réception des données.
    - [ ] Mapping : Donnée "Alpha" -> Variable "Intensité Pluie/Soleil".
- [ ] **5.3 Optimisation**
    - [ ] Gestion du framerate (72/90 FPS stables pour éviter la motion sickness).

## 6. 📊 Dashboard Praticien (Web - React)
*L'outil d'analyse pour les chercheurs.*

- [ ] **6.1 Data Visualization**
    - [ ] Intégration de librairie de charts (Recharts/D3.js).
    - [ ] Affichage des courbes de progression des sessions.
    - [ ] Heatmaps des fréquences cérébrales.
- [ ] **6.2 Gestion de Cohorte**
    - [ ] Liste des patients et assignation des exercices.

## 7. 🚀 Gestion de Projet & Livrables ESP
*Tâches obligatoires liées au cursus scolaire.*

- [ ] **7.1 Documents de Gestion**
    - [ ] [cite_start]Rédaction du PBS (Product Breakdown Structure)[cite: 37].
    - [ ] Planification des Sprints (Jira/GitHub Projects).
    - [ ] [cite_start]Définition des KPIs et objectifs SMART[cite: 120, 141].
- [ ] **7.2 Promotion & Recrutement**
    - [ ] Création de la Landing Page (React).
    - [ ] [cite_start]Réalisation de la vidéo de pitch (Promotion)[cite: 63].
    - [ ] [cite_start]Sessions de recrutement des membres manquants (Unity, Data)[cite: 88, 89].

---
> *Généré par l'équipe Synapser - Architecture validée pour la phase de sélection.*