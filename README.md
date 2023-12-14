This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project Description

### Objective

Implementing a web application which handles task planning, allocation and monitoring

### Description

The application has to allow for task creation, task allocation to users and task status monitoring.

The application is built on a Single Page Application architecture and is accessible from the browser on the desktop, mobile devices or tablets (depending on user preference).

### Functionality (minimal)

- The application has a series of users, out of which some are marked as managers
- The application has an administrator, which can add users, be it managers or executing users
- A user which is not a manager has an assigned manager
- A manager can create a task, which should have a sufficient description to fulfill the task. On creation, a task is in the OPEN state
- A manager can allocate the task to a user, at which time the task becomes PENDING
- An executing user can see the list of tasks that have been allocated to them and can mark them as being fulfilled, changing the task state to COMPLETED
- A manager can see the list of tasks and their statuses
- A manager can mark a COMPLETED task as being CLOSED
- A user can consult their history of tasks
- A manager can consult the history of tasks for an executing user

# Getting Started

### Install the dependencies

```bash
npm install
# or
npm i
```

Create a `.env` file similar to the `.env.example` file.

### Create the Database

> ⚠️ **Warning**: Make sure you have Docker installed on your machine. For more information, please visit [Docker](https://www.docker.com/).

To create the docker image, run the following command:

```bash
docker build -t my-postgres-image .
```

Then, to create the container, run the following command:

```bash
docker run -d --name my-postgres-container -p 5432:5432 my-postgres-image
```

### Database Configuration

To generate the database schema, run the following command:

```bash
npm run db:migrate
```

To migrate the database schema, run the following command:

```bash
npm run db:migrate
```

To seed the database, run the following command:

```bash
npm run db:seed
```

To visualize the database, you can use:
```bash
npm run db:studio
```
> ⚠️ **Warning**:
 Currently, the database visualization is working properly only on Firefox and Google Chrome.


## Run the development server

```bash
npm run dev
```