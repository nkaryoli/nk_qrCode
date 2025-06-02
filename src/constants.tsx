import type { QRConfig } from './types';

export const navigationLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/reader', label: 'QR Reader' },
	{ to: '/faq', label: 'FAQ' },
]

export const defaultQRConfig: QRConfig = {
    width: 250,
    height: 250,
    data: '',
    type: 'svg',
    margin: 10,
    qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q',
    },
    dotsOptions: {
        type: 'square',
        color: '#000000',
    },
    backgroundOptions: {
        color: '#ffffff',
    },
    cornersSquareOptions: {
        type: 'square',
        color: '#000000',
    },
    cornersDotOptions: {
        type: 'square',
        color: '#000000',
    },
    dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: 45,
        },
    },
    cornersSquareOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: 0,
        },
    },
    cornersDotOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: 0,
        },
    },
    imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.3,
        margin: 0,
    },
};

export const logos = Array.from({ length: 15 }, (_, i) => ({
    id: `logo${i + 1}`,
    label: `logo ${i + 1}`,
    image: `/logo${i + 1}.svg`
}));

export const reviews = [
    {
        user: "John Doe",
        text: "Amazing! I was able to generate a QR code with my brand colors and add my logo in seconds. It works perfectly and looks professional. Definitely the best tool I’ve tried.",
        rating: 5,
    },
    {
        user: "Jane Smith",
        text:  "The QR customization is excellent. I loved being able to change the colors and add a frame to make it stand out on my business cards. Highly recommended!",
        rating: 4,
    },
    {
        user: "Mike Johnson",
        text: "The QR scanner is super fast and accurate. I tested it with different types of codes, and it detects them flawlessly. Plus, the option to save generated QR codes is a great bonus.",
        rating: 5,
    },
    {
        user: "Emily Davis",
        text: "A must-have for any business! I use QR codes for my restaurant menu, and this tool allows me to update them easily without reprinting anything. Super useful and efficient.",
        rating: 5,
    },
    {
        user: "Sarah White",
        text: "This app makes QR code creation so easy! The ability to personalize the colors and add logos is just what I needed for my marketing materials. Great job!",
        rating: 5,
    },
    {
        user: "Emma Wilson",
        text: "I love how simple yet powerful this app is. Creating a custom QR code takes just a few clicks, and the results look professional. Definitely worth it!",
        rating: 5,
    },
];