# ![BookStop](https://bookstop.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-text.1e32d3ba.png&w=3840&q=75)

Exchange books with each other, share your thoughts, participate in events, all in one stop. BookStop is the final destination for every reader.

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

To build the app:

```bash
npm run build
```

After building, start the production server:

```bash
npm run start
```

### Managed service

We also provide a service where we set up and manage your BookStop instance with no technical knowledge needed. For inquiry, contact us through this page or the email read@bookstop.app.

## Contribution

Please see my [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[GPL-3.0 License](LICENSE). 

By deploying your own instance, please respect the conditions of the license, such as the acknowledgement of this license in your app (eg. in the footer)
