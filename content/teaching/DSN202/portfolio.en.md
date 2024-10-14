---
members: ["PLevy"]
title: "DSN202 · Portfolio annoté"
slug: "portfolio-annote"
institution:
    logo: cnam
    short: Cnam
    name: "Conservatoire national des Arts et Métiers"
    web: "https://www.cnam.fr/"
    colo: "#c1002a"
chaire: false
date: 2021-10-01T00:55:28+02:00
draft: false
layout: single
tablecontent: true
searchFilter: Teaching
searchWeight: 1
notListed: true
chaire: false
place: "Cnam"
level: "bachelor"
language: French
ects: 4
teacher:
    teacher1:
        name: "Pierre Lévy"
frontphoto: "https://live.staticflickr.com/65535/52427464765_8fe12aeeee_h.jpg"
---

## CSS
### CSS3

Le CSS (cascade style sheet) est un language transformant l'apparence d'une page écrite dans un language de balisage. La version actuelle est le CSS3.

Dans le cadre de ce cours, il va permettre de styliser nos pages HTML. Le code CSS peut se mettre soit entre les balises \<style\>...\</style\> elles-mêmes placées entre les balises \<head\>...\</head\>, soit dans un autre fichier (e.g., style.css) que le fichier html doit appeler. C'est cette deuxième approche que nous utilisons.

### Appel du fichier CSS

*media* peut prendre les valeurs: all, media, print, speech

```html
<link rel="stylesheet" href="style.css" media="all">
```

&nbsp;
{{<exercice "Créez un fichier CSS à côté de vos fichiers HTML et liez un des fichiers HTML à ce fichier CSS. Collez ensuite le code ci-dessous dans le fichier CSS pour voir l'effet sur la page HTML.">}}

```css
html, body {
	backgroud-color: rgb(28, 28, 28);
	color: lightcoral;
	font-size: 15px;
	line-height: 1.5rem;
  font-family: Avenir, sans-serif;
}
```

### Correspondances

**HTML / CSS**

```html
<body>...</body>
<div ID="Name">...</div>
<div class="Name">...</div>
```
&nbsp;
```css
body {...}
#Name {...}
.Name {...}
```

- un *ID* s'applique à un **objet unique** : il ne peut pas y avoir deux  ID identitques dans une page
- une *class* peut caractériser **plusieurs objets** (identiques ou non)
- 

### Styliser

un sélecteur peut être une *balise*, in *#ID*, ou une *.class*

```css
selecteur { 
	propriété1: valeurs;
	propriété2: valeurs;
}

body {
	background-color: black;
}
#pagename {
	font-size: 15px;
}
.textInRed {
	color: red;
}
```

### Conteneurs génériques

```html
<div>...</div> // div pour créer une division dans la page
<span>...</span>  //span pour une section en ligne

<flex>...</flex>  //flex pour créer un layout de divs
<grid>...</grid>  //grid pour créer une grille de divs
//(flex et grid ne s'applique pas qu'aux divs, mais c'est conseillé)
```

### Style: page

```css
selecteur { 
	propriété1: valeurs;
	propriété2: valeurs;
}

body {
	background-color: black;
}

#pagename {
	font-size: 15px;
}

.textInRed {
	color: red;
}

p.textInBlue {
	color: blue;
}

div p {
  text-decoration: underline;
}

div.type1, div.type2 {
	text-transform: uppercase;
}
```

### Commentaires en CSS

```css
selecteur { 
	propriété1: valeurs;
	propriété2: valeurs;
}

/* ceci est un commentaire */

body {
	background-color: black; /* ceci est un autre commentaire */
}
```

### Pseudo-classes

```html
<a href="#">...</a>
<a href="#">...</a>
<a href="#" class="firsta">...</a>
```

```css
/*  pseudo-classe lien visté (:visited)
    pseudo-classe lien souris par-dessus (:hover)
		pseudo-classe lien actif (:active)
		pseudo-classe premier du type (:first-child)
*/
a {
	color: red;
}
a:visited {
	color: yellow;
}
a:hover {
	color: green;
}
a:active {
	color: orange;
}
a:first-child {
	font-size: 26px;
}
```

Dernier exemple vu en cours

```html
<!DOCTYPE html> 
<head>
    <title>...</title>  <!-- titre -->
    <meta charset="UTF-8">  <!-- format du texte -->
      <meta name="keywords" content="mes, mots, clés">  <!-- mots clés -->
      <meta name="description" content="description du site"> <!-- description courte du contenu -->
      <meta name="author" content="Mon Nom">  <!-- nom de l'auteur de la page -->
      <meta http-equiv="refresh" content="30">  <!-- période avant reload -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- viewpoint pour une apparence correcte sur de multiple écrans -->
      <link rel=stylesheet href="style.css" media="all">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"> 
  </head>
  

  <body class="page1">
    <div class="section1">
      <h1>titre 1</h1>
      <p>texte 1a</p>
      <p>texte 1b</p>
    </div>
    <div class="section2">
      <h1>titre 2</h1>
      <p>texte 2</p>
    </div>

  <div>
    <a href="https://google.com">vers google</a>
  </div>
  </body>
```
&nbsp;
```css
html, body{
	font-family: 'Dancing Script', cursive;
}

div.section1 {
	background-color: yellow;
}

div.section1 p {
	color: red;
}

div.section2 {
	background-color: aqua;
}
div.section2 p{
	text-decoration: underline;
}
div.section2 p:hover{
	color: tomato;
}

a {
	color:red;
	text-decoration: none;
	font-family: 'Courier New', Courier, monospace
}
a:hover {
	color: green;
	text-decoration: underline red;
	font-size: 50px;
	background-color: yellow;;
}
```

## Pour aller plus loin

{{<linkBox "CSS Tutorial" "https://www.w3schools.com/css/default.asp" "https://www.w3schools.com/images/w3schools_logo_436_2.png">}}

{{<linkBox "Apprendre à coder en HTML et CSS | Cours complet (2020) - Pierre Giraud" "https://www.pierre-giraud.com/html-css-apprendre-coder-cours" "https://www.pierre-giraud.com/wp-content/uploads/2019/08/html-css-cours.png">}}
 
{{<linkBox "Snippets in HTML" "https://css-tricks.com/snippets/html/" "https://css-tricks.com/wp-json/social-image-generator/v1/image/3231">}}
 
{{<linkBox "Snippets in CSS" "https://css-tricks.com/snippets/css/" "https://css-tricks.com/wp-json/social-image-generator/v1/image/3222">}}

{{<linkBox "Create a new pen" "https://codepen.io/pen/" "https://assets.codepen.io/internal/screenshots/pens/default.png">}}
 
##  La structure du HTML: les balises

{{<linkBox "Commencer avec le HTML - Apprendre le développement web | MDN" "https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started" "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png">}}

{{<linkBox "Tryit Editor v3.7" "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document" "https://www.w3schools.com/images/w3schools_logo_436_2.png">}}

[]()

Le HTML (HyperText Markup Language) est, pour faire simple, le language informatique qui indique au navigateur ce qui doit être affiché (texte, image, video...) et comment. C'est ensuite le rôle du navigateur de "traduire" le HTML en une forme intelligible pour l'utilisateur.

"hypertext" renvoie au fait que le texte contient des liens que l'on peut cliquer pour naviguer entre pages web.

"markup" renvoie au fait que le language est structuré par des balises qui permettent de structurer le contenu et le comportement de la page.

## Installation de Visual Studio Codium

{{<linkBox "Visual Studio: IDE and Code Editor for Software Developers and Teams" "https://vscodium.com/" "https://vscodium.com/img/vscodium.png">}}

*VSCodium is a community-driven, freely-licensed binary distribution of Microsoft’s editor VS Code. It is the Free/Libre Open Source Software Binaries of VS Code.*

## HTML

### La structure du HTML: les balises

{{<linkBox "HTML Examples" "https://www.w3schools.com/html/html_examples.asp" "https://www.w3schools.com/images/w3schools_logo_436_2.png">}}

{{<linkBox "Liste de toutes les balises HTML" "https://facemweb.com/creation-site-internet/liste-balises-html" "https://facemweb.com/wp-content/uploads/2019/02/Image-facebook-balises-html.jpg">}}

{{<linkBox "Liste des balises HTML" "https://jaetheme.com/balises-html5/" "https://jaetheme.com/wp-content/themes/paris/dist/img/liste-balises-html5.jpg">}}


&nbsp;
### Le document HTML

```html
<!DOCTYPE html> 

<html>...</html>  <!-- conteneur du html -->
<head>...</head>  <!-- conteneur des méta-données -->
<body>...</body>  <!-- conteneur du corps principal -->

<header>...</header>  <!-- barre de titre -->
<nav>...</nav>  <!-- menu -->
<content>...</content>  <!-- contenu -->
<article>...</article>  <!-- article (blog) -->
<aside>...</aside>  <!-- partie latérale -->
<footer>...</footer>  <!-- pied de page -->
```
&nbsp;
### Les titres

```html
<h1>...</h1>  <!-- titre niveau 1 -->
<h2>...</h2>  <!-- titre niveau 2 -->
...
<hn>...</hn>  <!-- titre niveau n -->
```

&nbsp;
### Les paragraphes  et retours à la ligne et séparateurs

```html
<p>...</p>  <!-- paragraphe -->
<br/>  <!-- retour à la ligne -->
<hr/>  <!-- séparateur -->
```

&nbsp;
### Les styles

```html
<b>...</b>  <!-- bold -->
<strong>...</strong>  <!-- bold -->

<i>...</i>  <!-- italique -->
<em>...</em>  <!-- italique -->

<del>...</del>  <!-- barre -->
<ins>...</ins>  <!-- souslignage -->
<mark>...</mark>  <!-- surlignage -->

<small>...</small>  <!-- petit texte -->

<pre>...</pre>  <!-- pre -->
<cite>...</cite>  <!-- citation -->
<q>...</q>  <!-- guillemets -->

<sub>...</sub>  <!-- subscript -->
<sup>...</sup>  <!-- supscript -->

<bdo dir="rtl">...</bdo>  <!-- droite à gauche (bi-directional override) -->
```

&nbsp;
### Abbréviations

```html
<abbr title="...">...</abbr>  <!-- abréviation
```

&nbsp;
### Les liens
*target* peut prendre les valeurs:
_blank, _self, _parent, _top, *framename*

```html
<!-- lien normal -->
<a href="https://..." title="...">...</a>

<!-- lien email -->
<a href="mailto:someone@example.com?
cc=someoneelse@example.com
&bcc=andsomeoneelse@example.com
&subject=Summer%20Party
&body=You%20are%20invited%20to%20a%20big%20summer%20party!"
target="_top">Send mail!</a>

<!-- lien interne -->
<a href="#tohere">...</a>
...
<p id="tohere">...</p>
```

&nbsp;
### Images

```html
<img src="....jpg|webp|png|gif" alt="..." width="#" height="#" border="0">
```

&nbsp;
### Listes

*ol* peut prendre les valeurs:
i, I,a, A, 1

```html
<ul>...</ul>  <!-- liste simple -->
	<li>...</li>

<ol type="#">...</ol>  <!-- liste numérotée -->
	<li>...</li>
```

Tableaux

```html
<table> <!-- tableau -->
	<tr> <!-- ligne 1 -->
		<td>.1.</td>  <!-- case -->
		<td>.2.</td>
	</tr>
	<tr> <!-- ligne 2 -->
		<td colspan="2">.1.</td> <!-- case étalée sur deux colonnes -->
	</tr>
</table>
```

&nbsp;
### Les méta-données

```html
<head>
  <title>...</title>  <!-- titre -->
  <meta charset="UTF-8">  <!-- format du texte -->
	<meta name="keywords" content="mes, mots, clés">  <!-- mots clés -->
	<meta name="description" content="description du site"> <!-- description courte du contenu -->
	<meta name="author" content="Mon Nom">  <!-- nom de l'auteur de la page -->
	<meta http-equiv="refresh" content="30">  <!-- période avant reload -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- viewpoint pour une apparence correcte sur de multiple écrans -->
	<style>...</style>  <!-- style (le plus souvent css) -->
	<script>...</script>  <!-- script (le plus souvent javascript) -->
	<link rel=stylesheet href="..." media="all">
</head>
```

&nbsp;
### Commentaires

```html
<!-- Ceci est un commentaire -->

<!--
<p>Large commentaire avec du HTML</p>
<img border="0" src="" alt="">
-->

```

<aside>
💡 EXERCICE: Créez trois (ou plus) pages HTML sur un sujet de votre choix, incluant au moins des images, des liens internes et externes. 
Créer des méta-données pertinentes. 
N'oubliez pas de commenter votre page pour que quelqu'un d'autre comprennent le contenu et la structure. 


&nbsp;
**Ne vous inquiétez pas du style, nous nous en occuperons plus tard.**

</aside>