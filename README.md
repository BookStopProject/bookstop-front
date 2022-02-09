# ![BookStop](https://raw.githubusercontent.com/BookStopProject/bookstop-home/main/src/assets/logo-text-original.png)

Exchange books with each other, share your thoughts, participate in events, all in one stop. BookStop is the final destination for every reader.

Website: https://bookstop.app

| Codebase                                                            |                Description                 |
| :------------------------------------------------------------------ | :----------------------------------------: |
| [bookstop-front](https://github.com/BookStopProject/bookstop-front) |        Next.js Frontend Application        |
| [bookstop-api](https://github.com/BookStopProject/bookstop-api)     | Golang API Server (GraphQL) and Admin Page |
| [bookstop-home](https://github.com/BookStopProject/bookstop-home)   |              Preact homepage               |

## Setup

The following environment variable is required:

- `API_URI`: The URL of the API.
- `APP_URI`: The URL of the app (this very app)

## Development

Install all dependencies using:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Deployment

### Self-hosted

To self host BookStop, you need to start both the frontend app and the API server.

#### API Server

See https://github.com/hoangvvo/bookstop-api.

#### Frontend application

To build the app:

```bash
npm run build
```

After building, start the production server:

```bash
npm run start
```

### Managed service

For community projects, we offer to set up and manage BookStop instance with no technical knowledge needed. You only need to pay for the deployment cost. For inquiry, contact us via our email read@bookstop.app.

## Contribution

Please see my [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[GPL-3.0 License](LICENSE).

Please respect the conditions of the license, such as the acknowledgement of this license in your app (eg. in the footer). Let us know if you have any problems!
