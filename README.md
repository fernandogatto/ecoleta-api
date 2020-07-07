<p align="center">
   <img src="./github/logo.png" width="300"/>
   <br />
</p>

<br />
 <p align="center">
  <img src=https://img.shields.io/badge/author-fernandogatto-%2334CB79 alt="Auhtor" />
  <img src=https://img.shields.io/github/languages/count/fernandogatto/ecoleta-api?color=%2334CB79 alt="Languages" />
  <img src=https://img.shields.io/github/stars/fernandogatto/ecoleta-api?color=%2334CB79 alt="Stars" />
  <img src=https://img.shields.io/github/forks/fernandogatto/ecoleta-api?color=%2334CB79 alt="Forks" />
  <img src=https://img.shields.io/github/contributors/fernandogatto/ecoleta-api?color=%2334CB79 alt="Contributors" />
  <a href=https://choosealicense.com/licenses/mit/>
     <img src=https://img.shields.io/badge/license-MIT-%2334CB79 alt="License" />
  </a>
  
</p>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-starting">Starting</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <br />
  <a href="#-status-codes">Status codes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contribute">Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<br />

## 💻 Project
Ecoleta is a Web and Mobile application to help people find collection points for recycling. Build on **Next Week Level**, organized by [Rocketseat](https://rocketseat.com.br/).

## 📚 Features 

- Points CRUD
- Items CRUD
- DDD and architeture SOLID
- TDD (comming soon)

To view the Web project, follow this [Ecoleta Web](https://github.com/fernandogatto/ecoleta-web).

## 📌 Technologies

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

## 📂 Installation

First of all, it is important that you have installed [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

So, run this command in terminal to clone the project via HTTPS:

```bash
git clone https://github.com/fernandogatto/ecoleta-api.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```bash
git@github.com:fernandogatto/ecoleta-api.git
```

## 🚀 Starting

ORM configuration is on ```ormconfig.json```. There you can configure your database settings.

Run the following command in order in terminal:

```bash
# Configure the database schema
$ yarn schema:sync

# Run previous seed
$ yarn seed:run

# Start the server
$ yarn dev:server
```

## ⚙ Status codes

| Status   | Description           |
| ---      | ---                   |
| 200      | OK                    |
| 400      | BAD REQUEST           |
| 401      | UNAUTHORIZED          |
| 404      | NOT FOUND             |
| 500      | INTERNAL SERVER ERROR |

## 👍 Contribute

- Fork this repository.
- Create a branch with your resource: ```git checkout -b my-feature```
- Submit changes: ```git commit -m "feat: My new feature"```
- Push your branch: ```git push origin my-feature```

## 📕 License

Released in 2020. This project is under the [MIT License](https://choosealicense.com/licenses/mit/).

---
Build with 💜 by [Fernando Gatto](https://github.com/fernandogatto/).
