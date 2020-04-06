# capacitor-parcel

> Build hybrid apps with Capacitor and Parcel bundler

Strat an iOS/Android app setup in no time!

## What is Capacitor

[Capacitor](https://capacitor.ionicframework.com/) is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android, Electron, and the web. We call these apps "Native Progressive Web Apps" and they represent the next evolution beyond Hybrid apps.

## Capacitor documentation

[Capacitor documentation](https://capacitor.ionicframework.com/docs/)

## Tutorial video
[Watch the tutorial video on YouTube](https://www.youtube.com/watch?v=VbvQs9JEKF8)

## Demo app

![App output on iOS](https://raw.githubusercontent.com/asangadev/capacitor-parcel/HEAD/src/images/preview.png)

## Installation
```
git clone https://github.com/asangadev/capacitor-parcel.git my-app
cd my-app
rm -rf .git
```

## Setup
```
npm i
npm run setup
npx cap init
```

## Add iOS platform
```
npx cap add ios
npx cap open ios
```

## Add Android platform
```
npx cap add android
npx cap open android
```

## Test app on browser
```
npm run dev
```

## Push chnages to the Xcode/Android Studio
```
npm run app
```

## License

MIT license
