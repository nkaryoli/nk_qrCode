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
