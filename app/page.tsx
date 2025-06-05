"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  Globe,
  Droplets,
  GraduationCap,
  TrendingUp,
  University,
  Calculator,
  Medal,
  Database,
  Brain,
  BarChart3,
  Code,
  Settings,
  Users,
  Lightbulb,
  Clock,
  Zap,
  User,
  Download,
} from "lucide-react"
import Image from "next/image"

type Section = "intro" | "projects" | "experiences" | "skills" | "cv"

export default function CVOnline() {
  const [activeSection, setActiveSection] = useState<Section>("intro")

  const showSection = (section: Section) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            MOHAMED LEMINE MOHAMED
          </h1>
          <p className="text-xl text-gray-300 mb-8">Élève Ingénieur en Statistique et Ingénierie des Données</p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10" asChild>
              <a href="https://www.linkedin.com/in/mohamed-lemine-mohamed" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10" asChild>
              <a href="https://github.com/mohamed-lemine" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/10"
              onClick={() => showSection("cv")}
            >
              <FileText className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={activeSection === "intro" ? "default" : "outline"}
              onClick={() => showSection("intro")}
              className="border-white/20 hover:bg-white/10"
            >
              À propos
            </Button>
            <Button
              variant={activeSection === "projects" ? "default" : "outline"}
              onClick={() => showSection("projects")}
              className="border-white/20 hover:bg-white/10"
            >
              Projets
            </Button>
            <Button
              variant={activeSection === "experiences" ? "default" : "outline"}
              onClick={() => showSection("experiences")}
              className="border-white/20 hover:bg-white/10"
            >
              Expériences
            </Button>
            <Button
              variant={activeSection === "skills" ? "default" : "outline"}
              onClick={() => showSection("skills")}
              className="border-white/20 hover:bg-white/10"
            >
              Compétences
            </Button>
            <Button
              variant={activeSection === "cv" ? "default" : "outline"}
              onClick={() => showSection("cv")}
              className="border-white/20 hover:bg-white/10"
            >
              CV
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="mailto:23014@esp.mr" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              23014@esp.mr
            </a>
            <a href="tel:+22227202827" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +222 27 20 28 27
            </a>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* À propos Section */}
        {activeSection === "intro" && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <Image
                    src="/placeholder.svg?height=192&width=192"
                    alt="Mohamed Lemine Mohamed"
                    width={192}
                    height={192}
                    className="rounded-full border-4 border-blue-500/50"
                  />
                </div>
                <CardTitle className="text-3xl text-white">À propos de moi</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <p className="text-lg leading-relaxed">
                  Élève ingénieur en deuxième année à l'École Supérieure Polytechnique de Nouakchott, département
                  Statistique et Ingénierie des Données (SID). Passionné par l'analyse de données, la programmation et
                  l'innovation technologique.
                </p>
                <p className="leading-relaxed">
                  J'ai développé une expertise solide en data science, machine learning et développement web à travers
                  mes projets académiques et professionnels. Mon parcours m'a permis d'acquérir une vision globale des
                  enjeux de la transformation numérique et de l'analyse de données.
                </p>

                <Separator className="bg-slate-600" />

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Centres d'intérêt</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <strong className="text-white">Football :</strong> Passionné de football, suivi régulier des
                        grands tournois et compétitions
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      </div>
                      <div>
                        <strong className="text-white">Cinéma :</strong> Grand amateur de films, particulièrement
                        d'action et de comédie
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      </div>
                      <div>
                        <strong className="text-white">Poèmes :</strong> Grand amateur de poèmes arabes
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Vie associative</h3>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <strong className="text-white">Membre, Association Jeunesse de Sava :</strong>
                      <p className="text-gray-400 text-sm">Sava • 2018 - Présent</p>
                      <p className="mt-2">
                        Participation active à l'organisation d'activités communautaires et coordination des tournois de
                        football durant les vacances scolaires
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Projets Section */}
        {activeSection === "projects" && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Projets Académiques</h2>
            <div className="grid gap-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-blue-400" />
                    <div>
                      <CardTitle className="text-white">Plateforme de traitement de données géostatistiques</CardTitle>
                      <CardDescription className="text-gray-400">
                        Projet Django - ESP, Nouakchott • Oct 2024 - Présent
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Développement d'une plateforme Django pour l'analyse de données géologiques. Permet l'importation,
                    la gestion, l'analyse et la modélisation des données de forage. Intégration de visualisations
                    interactives (cartes, graphiques) pour l'exploration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Visualisation de données</Badge>
                  </div>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                    <a
                      href="https://github.com/mohamed-lemine/geostat-platform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Voir le code source
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Droplets className="w-8 h-8 text-green-400" />
                    <div>
                      <CardTitle className="text-white">Système d'Arrosage Automatique</CardTitle>
                      <CardDescription className="text-gray-400">
                        Projet d'Innovation - ESP, Nouakchott • Oct 2023 - Juin 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Conception et mise en œuvre d'une plateforme d'arrosage automatisé avec développement d'un système
                    d'alerte pour dissuader les oiseaux. Projet innovant combinant IoT et agriculture intelligente.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Arduino</Badge>
                    <Badge variant="secondary">Capteurs IoT</Badge>
                    <Badge variant="secondary">Systèmes embarqués</Badge>
                  </div>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                    <a
                      href="https://github.com/mohamed-lemine/auto-irrigation-system"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Voir le code source
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                    <div>
                      <CardTitle className="text-white">Site Web de gestion de scolarité</CardTitle>
                      <CardDescription className="text-gray-400">
                        Projet Académique - ESP, Nouakchott • Oct 2023 - Juin 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">
                    Développement d'un site web full-stack pour la gestion de scolarité. Mise en place de systèmes
                    d'authentification et d'inscription.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Développement Full-Stack</Badge>
                    <Badge variant="secondary">Authentification</Badge>
                    <Badge variant="secondary">Base de données</Badge>
                  </div>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                    <a
                      href="https://github.com/mohamed-lemine/school-management"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Voir le code source
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Expériences Section */}
        {activeSection === "experiences" && (
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Expériences Professionnelles</h2>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                    <div>
                      <CardTitle className="text-white">
                        Stage - Agence Nationale de la Statistique et de l'Analyse Démographique et Economique (ANSADE)
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        Nouakchott, Mauritanie • Juillet 2024 - Août 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="space-y-2 mb-4">
                    <li>• Analyse de la relation entre la pauvreté et la santé en Mauritanie</li>
                    <li>• Utilisation de modèles statistiques et économétriques pour modéliser cette relation</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-green-400/50 text-green-400">
                      Modélisation économétrique
                    </Badge>
                    <Badge variant="outline" className="border-green-400/50 text-green-400">
                      Analyse statistique
                    </Badge>
                    <Badge variant="outline" className="border-green-400/50 text-green-400">
                      Recherche socio-économique
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-center mb-12 text-white">Formation</h2>
              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <University className="w-8 h-8 text-blue-400" />
                      <div>
                        <CardTitle className="text-white">
                          Diplôme d'Ingénieur en Statistique et Ingénierie des Données
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          École Supérieure Polytechnique - Nouakchott • 2023 - Présent
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      <strong className="text-white">Cours principaux :</strong> Statistique avancée, Machine Learning,
                      Économétrie, Ingénierie des données
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Calculator className="w-8 h-8 text-purple-400" />
                      <div>
                        <CardTitle className="text-white">Classes Préparatoires aux Grandes Écoles</CardTitle>
                        <CardDescription className="text-gray-400">
                          Institut Préparatoire - Nouakchott • 2020 - 2023
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>Formation intensive en mathématiques, physique et sciences de l'ingénieur</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Medal className="w-8 h-8 text-yellow-400" />
                      <div>
                        <CardTitle className="text-white">Baccalauréat en Mathématiques</CardTitle>
                        <CardDescription className="text-gray-400">El Khiyar - Nouakchott • 2020</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>
                      <strong className="text-white">Mention :</strong> Assez Bien
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Compétences Section */}
        {activeSection === "skills" && (
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Compétences Techniques</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Database className="w-6 h-6 text-blue-400" />
                      <CardTitle className="text-white">Data Science</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>Pandas</Badge>
                      <Badge>NumPy</Badge>
                      <Badge>R</Badge>
                      <Badge>SQL</Badge>
                      <Badge>Scala</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Brain className="w-6 h-6 text-purple-400" />
                      <CardTitle className="text-white">Machine Learning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Scikit-learn</Badge>
                      <Badge>TensorFlow</Badge>
                      <Badge>Modélisation Prédictive</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-6 h-6 text-green-400" />
                      <CardTitle className="text-white">Visualisation de Données</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Matplotlib</Badge>
                      <Badge>Seaborn</Badge>
                      <Badge>Plotly</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Code className="w-6 h-6 text-orange-400" />
                      <CardTitle className="text-white">Développement Web</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Django</Badge>
                      <Badge>HTML/CSS</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Calculator className="w-6 h-6 text-red-400" />
                      <CardTitle className="text-white">Analyse Statistique</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Régression</Badge>
                      <Badge>Séries Temporelles</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-cyan-400" />
                      <CardTitle className="text-white">Ingénierie des Données</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Nettoyage de données</Badge>
                      <Badge>Feature Engineering</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">Langues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">🌍 Arabe</h3>
                    <p className="text-gray-300">Langue maternelle</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">🇫🇷 Français</h3>
                    <p className="text-gray-300">Professionnel (DELF B2)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">🇺🇸 Anglais</h3>
                    <p className="text-gray-300">Intermédiaire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">Atouts Professionnels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="outline" className="border-blue-400/50 text-blue-400 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Gestion d'équipe
                  </Badge>
                  <Badge variant="outline" className="border-purple-400/50 text-purple-400 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Créativité
                  </Badge>
                  <Badge variant="outline" className="border-green-400/50 text-green-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Ponctualité
                  </Badge>
                  <Badge variant="outline" className="border-red-400/50 text-red-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Résolution de problèmes sous pression
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CV Section */}
        {activeSection === "cv" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Mon CV</h2>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center">
              <CardHeader>
                <CardTitle className="text-white">CV Complet</CardTitle>
                <CardDescription className="text-gray-400">
                  Vous pouvez consulter ou télécharger mon CV complet ici
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="/cv-mohamed-lemine.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger mon CV PDF
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-white">Références</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <User className="w-8 h-8 text-blue-400" />
                      <div>
                        <CardTitle className="text-white">Sidi BIHA</CardTitle>
                        <CardDescription className="text-gray-400">
                          Directeur du département Statistique et Ingénierie des Données
                          <br />
                          École Supérieure Polytechnique
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-gray-400">#</span>
                      <a href="mailto:sidi.biha@esp.mr" className="hover:text-white transition-colors">
                        sidi.biha@esp.mr
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+22226340338" className="hover:text-white transition-colors">
                        +222 26 34 03 38
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <User className="w-8 h-8 text-green-400" />
                      <div>
                        <CardTitle className="text-white">Abou DIENG</CardTitle>
                        <CardDescription className="text-gray-400">
                          Professeur
                          <br />
                          École Supérieure Polytechnique
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:abou.dieng@esp.mr" className="hover:text-white transition-colors">
                        abou.dieng@esp.mr
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+22246722143" className="hover:text-white transition-colors">
                        +222 46 72 21 43
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Mohamed Lemine Mohamed. Tous droits réservés.</p>
          <p className="mt-2">CV en ligne créé pour GitHub Pages</p>
        </div>
      </footer>
    </div>
  )
}
