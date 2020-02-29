# capacitor-parcel

> Build hybrid apps with Capacitor and Parcel bundler

Strat an iOS/Android app setup in no time!

## What is Capacitor

[Capacitor](https://capacitor.ionicframework.com/) is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android, Electron, and the web. We call these apps "Native Progressive Web Apps" and they represent the next evolution beyond Hybrid apps. [documentation](https://capacitor.ionicframework.com/docs/)

[Aaa output on iOS](/src/images/preview.png)

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
npx cap add and
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
