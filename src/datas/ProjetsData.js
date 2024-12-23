import _ from "./Const"

/* example
      name: "Don't Starve Together Unofficial Documentation",
      date: MMXXIV,
      preview: fileCompleteName(IMAGE_PREVIEW_PATH, "dstUnofficialDocumentation", EXTENSION_PNG),
      custom_link: "https://github.com/gaetanse/Don-t-Starve-Together-Unofficial-Documentation",
      demonstration_link: "", BONUS
      description: ["Projet permettant aux modders Don't Starve Together d'avoir des ressources plus accessible!"],
      type: fileCompleteName(IMAGE_PREVIEW_PATH, "dstUnofficialDocumentation", EXTENSION_PNG),
      tags: [TAG_REACT, TAG_JAVASCRIPT, TAG_CSS, TAG_MATERIAL_UI, TAG_LUA],
      expanded: false,
*/

export const importData = [
    {
      name: "Don't Starve Together Unofficial Documentation",
      date: _.MMXXIV,
      preview: _.fileCompleteName(_.IMAGE_PREVIEW_PATH, "dst_unofficial_documentation"),
      custom_link: "https://github.com/gaetanse/Don-t-Starve-Together-Unofficial-Documentation",
      demonstration_link: "https://gaetanse.fr/Dont%20Starve%20Together%20Unofficial%20Documentation",
      description: ["Projet permettant aux modders Don't Starve Together d'avoir des ressources plus accessible!"],
      type: _.fileCompleteName(_.VIDEO_PATH, "dst_unofficial_documentation"),
      tags: [_.TAG_REACT, _.TAG_JAVASCRIPT, _.TAG_CSS, _.TAG_MATERIAL_UI, _.TAG_LUA],
      expanded: false,
    },
    {
      name: "French translate",
      date: _.MMXXIV,
      preview: "/images/previews/french_translate_dst_mod.png",
      custom_link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2595875363",
      description: ["Mod de traduction en français pour le jeu Don't starve together, ce mod a été mit sur le workshop Steam.","Communauté de 52 000 utilisateurs."],
      type: _.fileCompleteName(_.VIDEO_PATH, _.PROJECT_DST),
      tags: [_.TAG_STEAM, _.TAG_POEDIT, _.TAG_LUA],
      expanded: false,
    },
    {
      name: _.TITLE_GAETANSE_FR,
      date: _.MMXXIV,
      preview: _.fileCompleteName(_.IMAGE_PREVIEW_PATH, _.PROJECT_GAETANSE_FR),
      custom_link: _.CUSTOM_LINK_GAETANSE_FR,
      description: [_.DESCRIPTION_GAETANSE_FR_1],
      type: _.fileCompleteName(_.IMAGE_PREVIEW_PATH, _.PROJECT_GAETANSE_FR),
      tags: [_.TAG_REACT, _.TAG_JAVASCRIPT, _.TAG_CSS, _.TAG_HTML, _.TAG_MATERIAL_UI],
      expanded: false,
    },
    {
      name: _.TITLE_IOT_MODULE,
      date: _.MMXXIV,
      preview: "/images/previews/iot-modules.png",
      custom_link: _.CUSTOM_LINK_IOT_MODULE,
      description: [_.DESCRIPTION_IOT_MODULE_1],
      type: "/videos/iot_modules_compress.mp4",
      tags: [_.TAG_SYMFONY, _.TAG_PHP, _.TAG_JAVASCRIPT, _.TAG_CSS, _.TAG_SQLITE],
      expanded: false,
    },
    {
      name: "Big-Town",
      date: _.MMXXIII,
      preview: "/images/previews/big.png",
      description: ["Projet 3D utilisant Opengl, C++ et Sfml permettant la création d'un parser de .obj et sa lecture. Utilisation d'une skybox. Possibilité de créer ou supprimer des objets 3D, afficher des objets 3D ainsi que leurs animations. Caméra en vue fps et création de maps."],
      type: _.fileCompleteName(_.VIDEO_PATH, _.PROJECT_BIGTOWN),
      tags: [_.TAG_CPLUSPLUS, _.TAG_OPENGL, _.TAG_SFML, _.TAG_3D, _.TAG_2D],
      expanded: false,
    },
    {
      name: "React-express-imc",
      date: _.MMXXII,
      preview: "/images/previews/imc.png",
      custom_link: _.CUSTOM_LINK_IMC,
      description: ["Projet utilisant redux et router permettant de s'inscrire et de se connecter. Avec une barre de navigation (sidebar) qui utilise react-router-dom ainsi que un formulaire pour ajouter un IMC.","Liste des cards IMC avec des informations en graphique camembert et graphique en ligne."],
      type: "/videos/reactexpressimc.mp4",
      tags: [_.TAG_REACT, _.TAG_ANTD, _.TAG_CSS, _.TAG_JSON],
      expanded: false,
    },
    {
      name: "Redux-react-pokemon",
      date: _.MMXXII,
      preview: "/images/previews/redux-react-pokemon.png",
      custom_link: _.CUSTOM_LINK_POKEMON,
      description: ["Projet utilisant Redux, Router, Bootstrap et Json permettant d'afficher une liste des pokemons sous forme de 'card' avec leurs détails.","Barre de navigation qui utilise react-router-dom et un panier qui peut être rempli avec des pokemons."],
      type: "/videos/redux-react-pokemon.mp4",
      tags: [_.TAG_REACT, _.TAG_BOOTSTRAP, _.TAG_CSS, _.TAG_JSON],
      expanded: false,
    },
    {
      name: "Adopte-un-chat",
      date: _.MMXXII,
      preview: "/images/previews/adopte_un_chat.png",
      custom_link: _.CUSTOM_LINK_ADOPTE_UN_CHAT,
      description: ["Site vitrine, utilisant Html, Css et Json."],
      type: "/videos/adopteUnChat.mp4",
      tags: [_.TAG_HTML, _.TAG_CSS, _.TAG_JSON],
      expanded: false,
    },
    {
      name: "Cube-That-Do-Things",
      date: _.MMXXII,
      preview: "/images/previews/cubethatdothings.png",
      custom_link: _.CUSTOM_LINK_CUBE_THAT_DO_THINGS,
      description: ["Site sur un thème précis, utilisant Html, Css et Js, avec des 'eventListener'."],
      type: "/videos/cube.mp4",
      tags: [_.TAG_HTML, _.TAG_CSS, _.TAG_JAVASCRIPT],
      expanded: false,
    },
    {
      name: "Gaetanse.fr",
      date: _.MMXXII,
      preview: "/images/previews/portfolio0.png",
      description: ["Site portfolio sur Wordpress, utilisant comme extension Elementor, wp dark mode et yast seo."],
      type: "/videos/wordpress-gaetanse.fr.mp4",
      tags: [_.TAG_WORDPRESS],
      expanded: false,
    },
    {
      name: "Stay safe",
      date: _.MMXXII,
      preview: "/images/previews/stay_safe.png",
      description: ["Projet Unity et C#, utilisant de la 3D, 2D, une caméra. Mise en pratique des colisions et des animations."],
      type: _.fileCompleteName(_.VIDEO_PATH, _.PROJECT_STAYSAFE),
      tags: [_.TAG_CSHARP, _.TAG_UNITY, _.TAG_3D],
      expanded: false,
    },
    {
      name: "Farm dungeon rpg",
      date: _.MMXXI,
      preview: "/images/previews/fdr.png",
      description: ["Jeu Android et Java, création d'un serveur Java relié au client.","Utilisant Android, java, 2D et de Tcp/ip."],
      type: "/videos/fdr.mp4",
      tags: [_.TAG_ANDROID, _.TAG_TCP_IP, _.TAG_JAVA, _.TAG_2D],
      expanded: false,
    },
    {
      name: "Yoddle",
      date: _.MMXIX,
      preview: "/images/previews/yoddle.png",
      description: ["Projet en groupe pour créer un jeu 2D multijoueurs, utilisant C++, Box2d, Tcp/ip et Sfml."],
      type: "/videos/yoodle.mp4",
      tags: [_.TAG_CPLUSPLUS, _.TAG_2D, _.TAG_BOX2D, _.TAG_TCP_IP, _.TAG_SFML],
      expanded: false,
    },
    {
      name: "Match",
      date: _.MMXIX,
      preview: "/images/previews/match.png",
      custom_link: _.CUSTOM_LINK_MATCH,
      description: ["Projet Php utilisant des objets avec semantic pour le design."],
      type: "/videos/matchCompress.mp4",
      tags: [_.TAG_PHP, _.TAG_SEMANTIC, _.TAG_HTML, _.TAG_CSS],
      expanded: false,
    },
    {
      name: "Char",
      date: _.MMXIX,
      preview: "/images/previews/char.png",
      custom_link: _.CUSTOM_LINK_CHAR,
      description: ["Projet d'un jeu vidéo 2D solo, utilisant du C++ et Sfml."],
      type: "/videos/char.mp4",
      tags: [_.TAG_CPLUSPLUS, _.TAG_SFML, _.TAG_2D],
      expanded: false,
    },
    {
      name: "Survive and craft",
      date: _.MMXIX,
      preview: "/images/previews/survive.png",
      description: ["Projet d'un jeu vidéo 2D solo, utilisant de C++ et Sfml."],
      type: "/videos/survive.mp4",
      tags: [_.TAG_CPLUSPLUS, _.TAG_SFML, _.TAG_2D],
      expanded: false,
    },
    {
      name: "Map",
      date: _.MMXVIII,
      preview: "/images/previews/map.png",
      custom_link: _.CUSTOM_LINK_MAP,
      description: ["Projet de groupe, gestion de base de donnée, utilisant du Html, Php, Css et Mysql."],
      type: "/images/previews/map.png",
      tags: [_.TAG_HTML, _.TAG_PHP, _.TAG_MYSQL, _.TAG_CSS],
      expanded: false,
    },
    {
      name: "Smash-patanimal",
      date: _.MMXVIII,
      preview: "/images/previews/smash.png",
      custom_link: _.CUSTOM_LINK_SMASH_PATANIMAL,
      description: ["Projet de jeu en 48h pour le Game Off 2018 sur itch.io (196 / 328).","Utilisant du C++ et de Sfml."],
      type: "/videos/smash.mp4",
      tags: [_.TAG_CPLUSPLUS, _.TAG_SFML, _.TAG_2D, _.TAG_GAME_OFF_2018],
      expanded: false,
    },
    {
      name: "Filmothèque",
      date: _.MMXVIII,
      preview: "/images/previews/filmotheque.png",
      custom_link: _.CUSTOM_LINK_FILMOTHEQUE,
      description: ["Projet en groupe, utilisant axios pour récupérer des données en fichier Json,"," avec Vuejs, Js, Html, Json et Bootstrap"],
      type: "/videos/filmotheque.mp4",
      tags: [_.TAG_VUEJS, _.TAG_JAVASCRIPT, _.TAG_HTML, _.TAG_BOOTSTRAP, _.TAG_JSON],
      expanded: false,
    },
    {
      name: "Provins",
      date: _.MMXVII,
      preview: _.fileCompleteName(_.IMAGE_PREVIEW_PATH, "provins_project"),
      description: ["Projet de cours en groupe, ayant pour but de créer un site vitrine d'une ville.","Ainsi qu'un système de connexion avec un utilisateur et une base de donnée, utlisant de Html, Css, Php et Mysql."],
      type: _.fileCompleteName(_.IMAGE_PREVIEW_PATH, "provins_project"),
      tags: [_.TAG_HTML, _.TAG_CSS, _.TAG_MYSQL, _.TAG_PHP],
      expanded: false,
    },
  ]