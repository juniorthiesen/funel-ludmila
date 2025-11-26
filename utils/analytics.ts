declare global {
    interface Window {
        fbq: any;
        gtag: any;
    }
}

export const Analytics = {
    init: () => {
        // Initialization is handled in index.html, but we can do post-init setup here if needed
        console.log('Analytics initialized');
    },

    trackPageView: (url: string) => {
        // Facebook Pixel
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }

        // Google Analytics
        if (window.gtag) {
            window.gtag('config', 'YOUR_GA_ID', {
                page_path: url,
            });
        }
    },

    trackEvent: (eventName: string, params: any = {}) => {
        // Facebook Pixel
        if (window.fbq) {
            window.fbq('track', eventName, params);
        }

        // Google Analytics
        if (window.gtag) {
            window.gtag('event', eventName, params);
        }
    },

    // Specific Standard Events
    trackLead: (data: { value?: number; currency?: string } = {}) => {
        Analytics.trackEvent('Lead', data);
    },

    trackCompleteRegistration: (data: { value?: number; currency?: string; content_name?: string } = {}) => {
        Analytics.trackEvent('CompleteRegistration', data);
    },

    trackInitiateCheckout: (data: { value?: number; currency?: string; content_name?: string; content_ids?: string[]; content_type?: string } = {}) => {
        Analytics.trackEvent('InitiateCheckout', data);
    },

    trackPurchase: (data: { value: number; currency: string; transaction_id?: string }) => {
        Analytics.trackEvent('Purchase', data);
    }
};
