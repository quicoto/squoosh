# [Squoosh]!

[Squoosh] is an image compression web app that reduces image sizes through numerous formats.

# Privacy

Squoosh does not send your image to a server. All image compression processes locally.

However, Squoosh utilizes Google Analytics to collect the following:

- [Basic visitor data](https://support.google.com/analytics/answer/6004245?ref_topic=2919631).
- The before and after image size value.
- If Squoosh PWA, the type of Squoosh installation.
- If Squoosh PWA, the installation time and date.

# URL configuration

The output shown on the right can be configured with URL query parameters:

- `codec`: `avif` or `webp`.
- `quality`: an integer from 0 to 100.
- `effort`: an integer from 0 to 10 for AVIF, or 0 to 6 for WebP.
- `width`: a positive integer. This enables resizing and calculates the height from the source image's aspect ratio.

URL configuration overrides saved settings for the right side. Invalid or out-of-range values are ignored.

For AVIF at quality 50 and effort 7, resized to 2000px wide:

<https://squoosh.app/?codec=avif&quality=50&effort=7&width=2000>

For WebP at quality 85 and effort 6, resized to 1600px wide:

<https://squoosh.app/?codec=webp&quality=85&effort=6&width=1600>

# Developing

To develop for Squoosh:

1. Clone the repository
1. To install node packages, run:
   ```sh
   npm install
   ```
1. Then build the app by running:
   ```sh
   npm run build
   ```
1. After building, start the development server by running:
   ```sh
   npm run dev
   ```

# Contributing

Squoosh is an open-source project that appreciates all community involvement. To contribute to the project, follow the [contribute guide](/CONTRIBUTING.md).

[squoosh]: https://squoosh.app
