import React from "react";
import { operatingSystem, prodcutImage } from "./assets/image";
import {
  CircleUserRound,
  FileBadge2,
  FileVolume,
  MonitorPlay,
  PlugZap,
  ShieldCheck,
} from "lucide-react";

export const product = [
  {
    id: 1,
    Downloads: true,
    Brand: "Ample Sound",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.one,
    rating: 3,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [
      operatingSystem.OsAvailable,
      operatingSystem.OsAvailable,
      operatingSystem.OsAvailable,
    ],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 2,
    Downloads: false,
    Brand: "Spectrasonics",
    category: "synthesizer",
    name: "Spectrasonics – Omnisphere 2.8",
    mainImage: prodcutImage.two,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 19.99,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 3,
    Downloads: true,
    Brand: "Spectrasonics",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.three,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 4,
    Downloads: true,
    Brand: "Spectrasonics",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.four,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 5,
    Downloads: true,
    Brand: "Spectrasonics",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.five,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 6,
    Downloads: true,
    Brand: "Spectrasonics",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.six,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 7,
    Downloads: true,
    Brand: "Spectrasonics",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.seven,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
  {
    id: 8,
    Downloads: true,
    Brand: "Spectrasonics",
    category: "Plug-ins",
    name: "Lexicon PCM Total Bundle",
    mainImage: prodcutImage.eight,
    rating: 5,
    totalReviews: 115,
    BulletPoints: [
      "Software Type:Reverb, Effects Bundle",
      "Platform:Mac",
      "Download/Boxed:Download",
      "Bit Depth:32-bit, 64-bit",
      "Format: VST, AU",
      "Hardware Requirements – Mac:Intel processor, 2GB RAM or more recommended",
      "OS Requirements – Mac:OS X 10.8.5 or 13",
    ],
    img: [],
    price: 300.0,
    operatingSystem: ["Mac", "Window"],
    Description: `Totally Lexicon
The Lexicon PCM Native Total Plug-in Bundle gives you the very same algorithms that have been gracing hit records for the last four decades. Fourteen legendary reverbs and effects (seven each) fortify your DAW with essential hit-making ingredients. What you do with this powerful arsenal is up to you. Use its graphical real-time display to ignite your creativity and speed your workflow. Get access to the same world-class reverbs and effects as world-class studios and post houses – with Lexicon’s PCM Native Total Plug-in Bundle.

Mythical reverbs in your studio
The Lexicon PCM Native Reverb Plug-in Bundle puts seven world-class Lexicon reverbs under your control. Lexicon has been recognized as an industry leader in digital reverb and effects for more than 35 years – and here, you get their finest sounds in hundreds of amazing presets. Ready to function as an, VST, AU, or RTAS plug-in, the PCM Native Reverb Plug-in Bundle includes a visual EQ section, savable presets, and full automation support. Prepare yourself for amazing reverb quality with the Lexicon PCM Native Reverb Plug-in Bundle.

Jaw-dropping effects
Lexicon’s PCM Native Effects Plug-in Bundle gives you seven jaw-droppers. Lexicon has a storied history of delivering top-drawer professional algorithms, and this collection is the cream-of-the-crop, pulled from decades of industry-leading Lexicon effects. From pitch shifting and chorus, to random delays and multi-voice effects, PCM Native Effects gives you the tools to produce truly inspiring mixes within your DAW. PCM Native Effects delivers the highest sonic quality and cutting edge functionality. Having all these classic Lexicon sounds in plug-in format is a dream come true around Sweetwater.

Lexicon quality
Lexicon’s PCM Native Effects Plug-in Bundle springs from grand lineage. Since the 1970s, Lexicon has been synonymous with world-class digital reverb and effects. Top music and post studios around the planet rely on Lexicon for the pro polish that adorns their product. Just turn on the radio or watch a Hollywood film – you won’t get very far without hearing Lexicon reverb or effects. Add genuine Lexicon vibe to your studio’s virtual rack, with PCM Native Effects.`,
    reviewsList: [
      {
        userId: 1,
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Tahir",
        rating: 4,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
      {
        userId: 2,
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Haider",
        rating: 5,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
      {
        userId: 3,
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Ladi",
        rating: 5,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
      {
        userId: 4,
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Aqib",
        rating: 2,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
      {
        userId: 5,
        imgUser: <CircleUserRound className="h-10 w-10" />,
        name: "Zahid",
        rating: 3,
        description:
          "The Lexicon PCM Total Bundle has taken my music production to the next level – the reverb presets are top-notch and the interface is user-friendly.",
      },
    ],
  },
];

export const highLights = [
  {
    icon: <MonitorPlay className="w-10 h-10" />,
    Title: "Discover Premium Tools for Your Music Production Journey",
    paragraph:
      "Dive into our diverse categories to enhance your music production experience.",
  },
  {
    icon: <FileVolume className="w-10 h-10 " />,
    Title: "Unlock Freebies to Elevate Your Sound Without Spending a Dime",
    paragraph:
      "Grab exclusive free libraries that inspire creativity and innovation.",
  },
  {
    icon: <PlugZap className="w-10 h-10" />,
    Title: "Bundle Up and Save Big on Your Favorite Plugins and Libraries",
    paragraph:
      "Check out our bundles for unbeatable value on top-notch audio tools.",
  },
];

export const customerTrust = [
  {
    icon: <FileBadge2 className="w-10 h-10" />,
    Title: "Experience Unmatched Quality and Service with Every Purchase",
    paragraph: "We prioritize your satisfaction with our top-notch services.",
  },
  {
    icon: <MonitorPlay className="w-10 h-10 " />,
    Title: "Fast Delivery for All Your Music Production Software Needs",
    paragraph: "Get your products delivered swiftly and efficiently.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    Title: "Safe Checkout Process Ensuring Your Data is Protected",
    paragraph: "Shop with confidence knowing your information is secure.",
  },
];
