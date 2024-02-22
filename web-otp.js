if ('OTPCredential' in window) {
    window.addEventListener('DOMContentLoaded', e => {
        navigator.credentials.get({
            otp: { transport: ['sms'] },
        }).then(otp => {
            window.postMessage({ type: 'flutter-web-otp', data: { "otp": otp.code } }, '*');
        }).catch(err => {
            console.log(err);
        });
    });
}