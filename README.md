# SSS Starter kit v.0.2

Sapper + Svelte + Sass -> Typescript bien sûr 😏 

# Les petites règles à respecter pour un code propre et compréhensible pour tous 👨‍🏭👨🏻‍🔧


## 1. Nommage 🗣 :

### Général :
On écrit tout le **code en anglais** :
- Nom de dossier ;
- Nom de fichier ;
- Nom de composant ;
- Nom de variable ;
- Texte HTML (ça va je rigole...)

### JavaScript :
Variables et fonctions JS : **lowerCamelCase** ;

### CSS :
- Variables CSS : **$a-useless-var** ;

Classes et Ids :
Expliciter clairement par le nom, en plaçant -judicieusement- le nom de la balise HTML à la fin, si besoin. Ex :
- **btn-div** : div qui comporte (principalement) un bouton ;
- **flex-btn** : bouton qui possède une propriété flex ;
- **cgu-section** : section qui contient les cgu ;

## 2. Commentaires 💬 :
- Nous sommes une équipe de développeurs français, alors écrivons nos **commentaires en français** 😉
- Ajouter un commentaire pour la compréhension si malgré le nommage des variables le code reste complexe, pour un gain de temps

### Hiérarchie des commentaires
Nous utilisons un formattage de commentaire, extension VS Code : **ASCII Decorator**.
Une fois l'extension ajoutée, nous utilisons la typo Calvin. Pour l'utiliser, il faut l'ajouter au fichier *setttings.json* avec la ligne de code suivante :
**"asciidecorator.defaultFont": "Calvin S"**

Valeurs des commentaires :
1. Commentaire très important, qui délimite une partie du code etc : format Calvin S
2. /* ---- Un commentaire important (titre d'une section...) ---- */
3. /* Un commentaire moins important */
4. // Un commentaire spécifique (précise, explique un code un peu complexe...)

### Bonnes pratiques :
- Ajouter **//TODO:** pour les choses à faire plus tard
- Ajouter **//WIP:** pour les choses en cours de développement
- Ajouter **//FIX:** pour les choses qui bug

