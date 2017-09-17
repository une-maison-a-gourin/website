---
template: landing.html
site:
    title: Start Bootstrap Theme
head:
    title: Hi
    description: This is the description
    author: This is the author
masthead:
    title: Just hack'n
nav:
  items:
    -
      title: "About"
      href: "#about"
    -
      title: "Services"
      href: "#services"
    -
      title: "Portfolio"
      href: "#portfolio"
    -
      title: "Contact"
      href: "#contact"
sections:
    - 
      name: services
    - 
      name: portfolio
    -
      name: extra
footer:
  companyName: "Copyleft"
---

# {{head.title}} 

And this is the body of the content with the description of 

{{head.description}} 

inserted by bundlebars and also a partial of 

{{include extracontent}}

inserted.
