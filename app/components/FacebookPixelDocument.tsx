import Script from 'next/script';

const FB_PIXEL_ID = "25168737529434799";

export const FB_DOMAIN_VERIFICATION = "sqdlftxyzogfn58pxgdc3ynmlfl83m";

// This component adds Facebook Pixel script to the head
export function FacebookPixelHead() {
  return (
    <Script
      id="facebook-pixel"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');

          fbq('track', 'PageView');
        `
      }}
    />
  );
}

export function FacebookPixelNoscript() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        height="1"
        width="1"
        style={{display: 'none'}}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </>
  );
}
