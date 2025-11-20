const FB_PIXEL_ID = "25168737529434799";

// This component is specifically designed for _document.tsx
export function FacebookPixelHead() {
  return (
    <>
      {/* Facebook Pixel Script */}
      <script
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
            fbq('init', '25168737529434799');

            fbq('track', 'PageView');
          `
        }}
      />
      <meta name="facebook-domain-verification" content="sqdlftxyzogfn58pxgdc3ynmlfl83m" />
    </>
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
        src={`https://www.facebook.com/tr?id=25168737529434799&ev=PageView&noscript=1`}
      />
    </>
  );
}
