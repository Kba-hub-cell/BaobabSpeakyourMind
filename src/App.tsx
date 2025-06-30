import React, { useState, useRef } from 'react';
import { Edit3, Save, Video, Upload, Download, Eye, EyeOff, Mic, Languages, Globe, User, Camera } from 'lucide-react';
import TreesIcon from "./Components/TreesIcon";
interface SpeechData {
  title: string;
  author: string;
  content: string;
  videoUrl: string | null;
  authorPhoto: string | null;
  biography: string;
}

interface TranslatedContent {
  fr: SpeechData;
  en: SpeechData;
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'en'>('fr');
  const [speechData, setSpeechData] = useState<TranslatedContent>({
    fr: {
      title: " Baobab Rising : nourrir l'avenir grâce à la jeunesse africaine",
      author: "Kwami Alfred Jordal BIAM",
      authorPhoto: "/WhatsApp Image 2025-06-06 à 12.43.22_10af3aed.jpg",
      biography: `Kwami Alfred Jordal BIAM est un jeune acteur du changement passionné par l'innovation sociale, l'éducation et le développement durable. Actuellemnt boursier de la fondation Mastercard poursuivant son étude en ingénierie généraliste à 2iE l'École Centrale de Casablanca, il s'engage activement dans des projets communautaires et technologiques visant à renforcer les capacités de la jeunesse africaine.

Animé par l'esprit du baobab — enraciné, résilient et porteur de vie — Kwami a organisé plusieurs initiatives locales centrées sur la sensibilisation environnementale, la formation numérique et la responsabilisation des jeunes. Il croit profondément que l'accès équitable à l'éducation et aux compétences du futur est la clé pour faire éclore le potentiel du continent africain.

Son parcours reflète une volonté de créer des ponts entre les disciplines, les générations et les communautés. À travers ses engagements, Kwami aspire à être un catalyseur de transformation positive, en inspirant d'autres jeunes à prendre en main leur avenir et celui de l'Afrique.

.`,
      content: `Mesdames et messieurs,frères et soeurs d'Afrique.Je tiens aujourd'hui ma plume dans le recoin de ma chambre , tête baissée ,  pour faire entendre les cris d'une jeunesse qui ne veut plus attendre , celle d'un continent qui ne veut plus espérer en silence. Je tiens ma plume pour dessiner un avenir enraciné dans notre histoire, mais tendu vers le ciel comme les branches d'un géant.  
 Il y a un arbre, majestueux et silencieux, qui résiste aux vents les plus violents et abrite la vie même dans les terres les plus arides. Cet arbre, c'est le baobab. Et aujourd'hui, ce n'est pas devant vous que je me tiens , mais face à un page blanche que je remplis avec l'encre de mes convictions, et la sève d'un engagement.je suis un jeune africain , fruit de ses racines profondes et temoin vivant de son essor. 

 Car moi aussi , comme le baobab j'ai grandi dans un sol sec de promesses tenues , mais riche de rêves immenses . J'ai appris à tenir bon quand tout vacille , à croire quand il n'y avait que le doute, à semer ..même sans savoir que la pluie viendrait. C'est dans cette foi silencieuse et tenace que commence mon histoire .
Comme le baobab, j'ai vécu là où l'espoir doit souvent rivaliser avec les réalités du quotidien, où on assiste à des coupures d’électricité à maintes reprises ,où l’accès à l’eau potable est comme de l’or.Pourtant, c'est dans ces défis que j'ai puisé ma force. Résilient face aux obstacles, nourri par les valeurs transmises par ma communauté, et profondément enraciné dans un rêve : celui de voir l'Afrique rayonner, portée par sa jeunesse.

Mon engagement communautaire a commencé modestement : des ateliers de sensibilisation à l'environnement dans mon quartier, des formations au numérique pour les jeunes de mon école. À chaque sourire, à chaque déclic, j'ai compris que je faisais partie d'une génération qui ne se contente plus de survivre, mais qui s'élève, crée, et transforme.

Ce qui me révolte ? C'est l'inégalité d'accès à l'éducation de qualité. Trop de jeunes talents africains sont freinés par des barrières structurelles : pauvreté, manque de ressources, ou absence de soutien. Or, une jeunesse privée de connaissances, c'est un continent privé d'avenir.

Mais je crois en une Afrique où chaque enfant a accès non seulement à une salle de classe, mais aussi à Internet, à des outils numériques, à des programmes qui développent la pensée critique, la créativité, et l'esprit entrepreneurial.

D'ici 2030, nous serons près de la moitié de la jeunesse mondiale. Ce n'est pas un chiffre, c'est une force. Une puissance capable d'impulser des transformations profondes, qu'elles soient climatiques, sociales ou économiques. À condition qu'on nous écoute. À condition qu'on nous équipe.

Nous ne voulons pas simplement hériter du monde. Nous voulons le co-construire. Par l'innovation. Par la solidarité. Et surtout, par une foi inébranlable en nos capacités.

Pour y parvenir, nous avons besoin d'espaces de formation accessibles et adaptés, de mentors qui nous guident sans nous imposer, de politiques publiques qui croient en notre potentiel. Et surtout, d'une communauté panafricaine unie, au-delà des frontières, pour partager nos savoirs, nos espoirs et nos réussites.

Je rêve d'une Afrique où les jeunes sont les premiers décideurs de leur destinée. Où la technologie sert l'agriculture. Où la santé est connectée. Où l'éducation est un droit, pas un privilège.

Je rêve d’une Afrique meilleure et prospère. Une Afrique où un jeune à Lomé, à Ouagadougou, à Yaoundé, à N’Djamena pourra créer une startup qui changera le monde, où une jeune fille à Dakar pourra diriger un laboratoire sans qu’on lui demande de baisser les yeux. 

Je rêve d’une Afrique où la politique ne sera plus un instrument d’oppression, mais un levier de justice, d’espoir et de progrès ; où les dirigeants ne seront plus les bourreaux silencieux du peuple, mais les gardiens actifs de sa dignité. Une Afrique où les nations ne se regarderont plus en ennemies, mais en sœurs, 

unies par une histoire partagée, blessées par les mêmes plaies, et portées par un même rêve. Je rêve d’un continent où un enfant ne devra plus marcher des kilomètres pour boire une eau claire, où chaque village aura la lumière non pas seulement du soleil, mais aussi celle d’une électricité stable, fiable, et accessible, 

pour éclairer les foyers et les ambitions. Je rêve d’un pays où l’on n’entendra plus une mère supplier pour un lit d’hôpital, où les soins ne seront plus un luxe réservé à quelques-uns, mais un droit fondamental pour tous. Je rêve d’une école dans chaque quartier, d’un enseignant valorisé dans chaque communauté, d’un ordinateur dans chaque sac à dos, et d’un enfant qui n’aura plus à choisir entre apprendre et survivre. Je rêve d’une Afrique où naître pauvre ne signifie plus être condamné à l’invisible, où chaque regard d’enfant brillera de la certitude qu’il a, lui aussi, un rôle à jouer, une vie à écrire, et un avenir à bâtir. Moi, je veux être un catalyseur de cette transformation. Créer des ponts entre les disciplines. Initier des projets éducatifs. Et faire de chaque initiative locale une solution globale.

J'ai été nourri par des enseignants qui ont cru en moi, par des leaders communautaires qui m'ont tendu la main, par mes parents qui m'ont appris la dignité dans le travail et la foi dans l'avenir. Aujourd'hui, je tends cette main à mon tour. Je transmets, je forme, je crois en d'autres jeunes comme moi.

Nous sommes les baobabs de demain : enracinés dans nos cultures, résistants face aux tempêtes, et porteurs de vie pour les générations futures.

Nourrissons nos rêves, cultivons notre savoir, et faisons fleurir l'Afrique.

L'avenir n'attend pas. L'avenir, c'est nous.

`,
      videoUrl: null
    },
    en: {
      title: "Baobab Rising: Nurturing the Future Through African Youth",
      author: "Kwami Alfred Jordal BIAM",
      authorPhoto: "/WhatsApp Image 2025-06-06 à 12.43.22_10af3aed.jpg",
      biography: `Kwami Alfred Jordal BIAM is a young changemaker driven by a passion for social innovation, education, and sustainable development. Currently Mastercard Foundation Scholar  pursuing his engineering studies at 2iE at  École Centrale Casablanca, he is actively involved in community and tech-based initiatives that empower African youth through knowledge and action.

Inspired by the spirit of the baobab tree — grounded, resilient, and life-giving — Kwami has led several local projects focused on environmental awareness, digital training, and youth empowerment. He strongly believes that equitable access to education and future-ready skills is key to unlocking Africa's full potential.

His journey reflects a deep commitment to building bridges across disciplines, generations, and communities. Through his work, Kwami aspires to be a catalyst for positive transformation, inspiring young people to take ownership of their future — and of Africa's.`,
      content: `Ladies and gentlemen, brothers and sisters of Africa. Today, I hold my pen in the corner of my room, head bowed, to give voice to the cries of a youth that no longer wants to wait, of a continent that no longer wants to hope in silence. I hold my pen to sketch a future rooted in our history, but reaching toward the sky like the branches of a giant.  
 There is a tree, majestic and silent, that withstands the strongest winds and shelters life even in the most arid lands. That tree is the baobab. And today, I am not standing before you, but facing a blank page that I am filling with the ink of my convictions and the sap of my commitment. I am a young African, the fruit of its deep roots and a living witness to its growth. 

 For I too, like the baobab, grew up in dry soil of broken promises, but rich in immense dreams. I learned to hold on when everything was shaking, to believe when there was only doubt, to sow... even without knowing if the rain would come. It is in this silent and tenacious faith that my story begins.
Like the baobab tree, I have lived where hope often has to compete with the realities of everyday life, where there are frequent power cuts, where access to drinking water is like gold. Yet it is in these challenges that I have drawn my strength. Resilient in the face of obstacles, nourished by the values passed down by my community, and deeply rooted in a dream: to see Africa shine, carried by its youth.

My community involvement began modestly: environmental awareness workshops in my neighborhood, digital training for young people at my school. With every smile, with every lightbulb moment, I understood that I was part of a generation that is no longer content to merely survive, but is rising up, creating, and transforming.

What upsets me? It's the inequality of access to quality education. Too many talented young Africans are held back by structural barriers: poverty, lack of resources, or lack of support. But a youth deprived of knowledge is a continent deprived of a future.

But I believe in an Africa where every child has access not only to a classroom, but also to the internet, digital tools, and programs that develop critical thinking, creativity, and entrepreneurial spirit.

By 2030, we will make up nearly half of the world's youth. That's not a number, it's a force. A power capable of driving profound transformations, whether climatic, social, or economic. Provided that we are listened to. Provided that we are equipped.

We don't just want to inherit the world. We want to co-build it. Through innovation. Through solidarity. And above all, through an unshakeable faith in our abilities.

To achieve this, we need accessible and appropriate training spaces, mentors who guide us without imposing themselves on us, and public policies that believe in our potential. And above all, we need a united pan-African community, beyond borders, to share our knowledge, our hopes, and our successes.

I dream of an Africa where young people are the primary decision-makers of their own destiny. Where technology serves agriculture. Where healthcare is connected. Where education is a right, not a privilege.

I dream of a better, prosperous Africa. An Africa where a young person in Lomé, Ouagadougou, Yaoundé, or N'Djamena can create a startup that will change the world, where a young girl in Dakar can run a laboratory without being asked to lower her gaze. 

I dream of an Africa where politics is no longer an instrument of oppression, but a lever for justice, hope, and progress; where leaders are no longer the silent executioners of the people, but the active guardians of their dignity. An Africa where nations no longer see each other as enemies, but as sisters, 

united by a shared history, wounded by the same wounds, and carried by the same dream. I dream of a continent where children will no longer have to walk miles to drink clean water, where every village will have light not only from the sun, but also from stable, reliable, and accessible electricity, 

to light homes and ambitions. I dream of a country where we will no longer hear a mother begging for a hospital bed, where healthcare will no longer be a luxury reserved for the few, but a fundamental right for all. I dream of a school in every neighborhood, a valued teacher in every community, a computer in every backpack, and a child who no longer has to choose between learning and surviving.

I dream of an Africa where being born poor no longer means being condemned to invisibility, where every child's eyes will shine with the certainty that they, too, have a role to play, a life to write, and a future to build. I want to be a catalyst for this transformation. Building bridges between disciplines. Initiating educational projects. And turning every local initiative into a global solution.

I was nurtured by teachers who believed in me, by community leaders who reached out to me, by my parents who taught me dignity in work and faith in the future. Today, I am reaching out in turn. I pass on my knowledge, I train others, I believe in other young people like me.

We are the baobabs of tomorrow: rooted in our cultures, resistant to storms, and bearers of life for future generations.

Let us nurture our dreams, cultivate our knowledge, and make Africa flourish.

The future cannot wait. The future is us.

.`,
      videoUrl: null
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<SpeechData>(speechData[currentLanguage]);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    setSpeechData(prev => ({
      ...prev,
      [currentLanguage]: editData
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(speechData[currentLanguage]);
    setIsEditing(false);
  };

  const handleLanguageSwitch = (lang: 'fr' | 'en') => {
    if (isEditing) {
      // Save current edits before switching
      setSpeechData(prev => ({
        ...prev,
        [currentLanguage]: editData
      }));
    }
    setCurrentLanguage(lang);
    setEditData(speechData[lang]);
    setIsEditing(false);
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setEditData(prev => ({ ...prev, videoUrl }));
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      setEditData(prev => ({ ...prev, authorPhoto: photoUrl }));
    }
  };

  const handleExport = () => {
    const currentSpeech = speechData[currentLanguage];
    const content = `${currentSpeech.title}\nBy: ${currentSpeech.author}\n\n${currentSpeech.content}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentSpeech.title.replace(/\s+/g, '_')}_${currentLanguage}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const currentSpeech = speechData[currentLanguage];

  return (
    
    <div className="min-h-screen relative">
      {/* Baobab Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-transparent via-black/20 to-black/40">
        {/* Header */}
        <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-xl shadow-lg">
                  <TreesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Speech Showcase</h1>
                  <p className="text-amber-200">Baobab - Racines Profondes, Avenir Radieux</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {/* Language Toggle */}
                <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
                  <button
                    onClick={() => handleLanguageSwitch('fr')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
                      currentLanguage === 'fr' 
                        ? 'bg-amber-600 text-white shadow-md' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">FR</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSwitch('en')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
                      currentLanguage === 'en' 
                        ? 'bg-amber-600 text-white shadow-md' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Languages className="w-4 h-4" />
                    <span className="text-sm font-medium">EN</span>
                  </button>
                </div>
                
                <button
                  onClick={handleExport}
                  className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-lg"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 text-white/80 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Author Biography Section */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 sticky top-8">
                <div className="bg-gradient-to-br from-amber-800 via-orange-800 to-red-900 px-6 py-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 w-16 h-16 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-12 h-12 border border-white/20 rounded-full"></div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <h2 className="text-xl font-bold mb-4">
                      {currentLanguage === 'fr' ? 'À propos de l\'auteur' : 'About the Author'}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  {/* Author Photo */}
                  <div className="mb-6">
                    {!isEditing ? (
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-amber-200">
                        {currentSpeech.authorPhoto ? (
                          <img
                            src={currentSpeech.authorPhoto}
                            alt={currentSpeech.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                            <User className="w-16 h-16 text-amber-800" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-amber-200">
                          {editData.authorPhoto ? (
                            <img
                              src={editData.authorPhoto}
                              alt={editData.author}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                              <User className="w-16 h-16 text-amber-800" />
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <button
                            onClick={() => photoInputRef.current?.click()}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm"
                          >
                            <Camera className="w-4 h-4" />
                            <span>{currentLanguage === 'fr' ? 'Changer la photo' : 'Change Photo'}</span>
                          </button>
                          <input
                            ref={photoInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Author Name */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{currentSpeech.author}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto"></div>
                  </div>

                  {/* Biography */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {currentLanguage === 'fr' ? 'Biographie' : 'Biography'}
                    </h4>
                    {!isEditing ? (
                      <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {currentSpeech.biography}
                      </div>
                    ) : (
                      <textarea
                        value={editData.biography}
                        onChange={(e) => setEditData(prev => ({ ...prev, biography: e.target.value }))}
                        className="w-full h-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-sm leading-relaxed"
                        placeholder={currentLanguage === 'fr' ? 'Entrez la biographie de l\'auteur...' : 'Enter author biography...'}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Speech Content Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                {/* Speech Header */}
                <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-900 px-8 py-12 text-white relative overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white/20 rounded-full"></div>
                  </div>
                  
                  {!isEditing ? (
                    <div className="text-center relative z-10">
                      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        {currentSpeech.title}
                      </h1>
                      <p className="text-xl text-amber-200">
                        {currentLanguage === 'fr' ? 'par' : 'by'} <span className="font-semibold text-yellow-300">{currentSpeech.author}</span>
                      </p>
                      <div className="mt-6 flex justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 relative z-10">
                      <div>
                        <label className="block text-sm font-medium text-amber-200 mb-2">
                          {currentLanguage === 'fr' ? 'Titre du Discours' : 'Speech Title'}
                        </label>
                        <input
                          type="text"
                          value={editData.title}
                          onChange={(e) => setEditData(prev => ({ ...prev, title: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-xl font-bold backdrop-blur-sm"
                          placeholder={currentLanguage === 'fr' ? 'Entrez le titre du discours...' : 'Enter speech title...'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-amber-200 mb-2">
                          {currentLanguage === 'fr' ? 'Nom de l\'Auteur' : 'Author Name'}
                        </label>
                        <input
                          type="text"
                          value={editData.author}
                          onChange={(e) => setEditData(prev => ({ ...prev, author: e.target.value }))}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                          placeholder={currentLanguage === 'fr' ? 'Entrez le nom de l\'auteur...' : 'Enter author name...'}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Section */}
                {(currentSpeech.videoUrl || editData.videoUrl || isEditing) && (
                  <div className="px-8 py-6 bg-amber-50/50 border-b border-amber-200/30">
                    {!isEditing ? (
                      currentSpeech.videoUrl && (
                        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                          <video
                            src={currentSpeech.videoUrl}
                            controls
                            className="w-full h-full object-cover"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )
                    ) : (
                      <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                          {currentLanguage === 'fr' ? 'Télécharger une Vidéo (optionnel)' : 'Upload Video (optional)'}
                        </label>
                        {editData.videoUrl ? (
                          <div className="space-y-4">
                            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                              <video
                                src={editData.videoUrl}
                                controls
                                className="w-full h-full object-cover"
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <button
                              onClick={() => setEditData(prev => ({ ...prev, videoUrl: null }))}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              {currentLanguage === 'fr' ? 'Supprimer la vidéo' : 'Remove video'}
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => videoInputRef.current?.click()}
                            className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-colors"
                          >
                            <Video className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">
                              {currentLanguage === 'fr' ? 'Cliquez pour télécharger une vidéo' : 'Click to upload a video'}
                            </p>
                            <p className="text-sm text-gray-500">MP4, WebM, or Ogg up to 100MB</p>
                            <input
                              ref={videoInputRef}
                              type="file"
                              accept="video/*"
                              onChange={handleVideoUpload}
                              className="hidden"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Speech Content */}
                <div className="px-8 py-8">
                  {!isEditing ? (
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-800 leading-relaxed whitespace-pre-line font-serif text-lg">
                        {currentSpeech.content}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        {currentLanguage === 'fr' ? 'Contenu du Discours' : 'Speech Content'}
                      </label>
                      <textarea
                        value={editData.content}
                        onChange={(e) => setEditData(prev => ({ ...prev, content: e.target.value }))}
                        className="w-full h-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none font-serif text-lg leading-relaxed"
                        placeholder={currentLanguage === 'fr' ? 'Entrez le contenu de votre discours ici...' : 'Enter your speech content here...'}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        {editData.content.length} {currentLanguage === 'fr' ? 'caractères' : 'characters'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="bg-black/20 backdrop-blur-md rounded-lg px-6 py-4 border border-white/10">
              <p className="text-sm text-white/80">
                {currentLanguage === 'fr' 
                  ? `Créé avec Speech Showcase • ${new Date().getFullYear()} • "Comme le baobab, enraciné et résistant"`
                  : `Created with Speech Showcase • ${new Date().getFullYear()} • "Like the baobab, rooted and resilient"`
                }
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;