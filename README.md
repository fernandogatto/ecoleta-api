![](/github/logo.png)

# ♻ Ecoleta API

<a href="https://github.com/fernandogatto/">
<img src="https://img.shields.io/badge/author-fernandogatto-%2334CB79" alt="author" />
</a>
<a href="https://choosealicense.com/licenses/mit/">
<img src="https://img.shields.io/badge/license-MIT-%2334CB79" alt="license" />
</a>
<br>

Ecoleta is a Web and Mobile application to help people find collection points for recycling. Build on **Next Week Level**, organized by [Rocketseat](https://rocketseat.com.br/).

## 🔗 Table of contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Starting](#starting)
- [Status codes](#status)
- [Contribute](#contribute)
- [License](#license)

## 📚 Features <a name="features"/>

- Points CRUD
- Items CRUD
- DDD and architeture SOLID
- TDD (comming soon)

## 📌 Technologies <a name="technologies"/>

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

## 📂 Installation <a name="installation"/>

First of all, it is important that you have installed [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

So, run this command in terminal to clone the project via HTTPS:

```bash
git clone https://github.com/fernandogatto/ecoleta-api.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```bash
git@github.com:fernandogatto/ecoleta-api.git
```

## 🚀 Starting <a name="starting"/>

ORM configuration is on ```ormconfig.json```. There you can configure your database settings.

Run the following command in order in terminal:

```bash
# Configure the database schema
yarn schema:sync

# Run previous seed
yarn seed:run

# Start the server
yarn dev:server
```

## ⚙ Status codes <a name="status"/>

| Status   | Description           |
| ---      | ---                   |
| 200      | OK                    |
| 400      | BAD REQUEST           |
| 401      | UNAUTHORIZED          |
| 404      | NOT FOUND             |
| 500      | INTERNAL SERVER ERROR |

## 👍 Contribute <a name="contribute"/>

- Fork this repository.
- Create a branch with your resource: ```git checkout -b my-feature```
- Submit changes: ```git commit -m "feat: My new feature"```
- Push your branch: ```git push origin my-feature```

## 📕 License <a name="license"/>

Released in 2020. This project is under the [MIT License](https://choosealicense.com/licenses/mit/).

Build with 💜 by [Fernando Gatto](https://github.com/fernandogatto/).
