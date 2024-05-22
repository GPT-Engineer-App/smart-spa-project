# smart-spa-project

Stack:
- Python
- Backend: Django + DRF
- Frontend: React. Libraries like MUI can be used.
- Postgres or MySQL.
Description:
- Create a simple SPA with 2 pages: users and banks
- Users page has a list of users. Every user can be edited or deleted.
- automatically adds banks randomly when creating a user
- every 2 minutes checks for any unrelated data and deletes it. For example, a user who does not have any banks will be automatically deleted, or a bank that does not have any users will also be deleted.
User fields:
● id
● password
● first_name
● last_name
● username
● email
- Banks page has a list of banks. Every bank can be edited or deleted.
Bank fields:
● id
● bank_name
● routing_number
● swift_bic
- Every user can have several banks, and every bank can have several users. Edit page must
support these relations updates. Bank can’t be deleted if there are users associated with it.
- Every page has an add button where you specify the amount of objects to add. To fetch data
for new objects you must use https://random-data-api.com/ documentation. (id can be auto
generated, auth nor required)


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/smart-spa-project.git
cd smart-spa-project
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
