import { useEffect } from 'react';

export default function InsuranceIframe() {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'setHeight') {
        const iframe = document.querySelector('#insurtech-iframe');
        if (iframe) {
          iframe.style.height = event.data.height + 'px';
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div style={{ width: '100%', marginBottom: '2rem' }}>
      <iframe 
        id="insurtech-iframe"
        style={{ width: '100%', height: '700px', border: 'none', overflow: 'hidden' }}
        src="/poe-preview111.html?embedded=true" 
        title="保险科技趋势分析" 
        frameBorder="0" 
        scrolling="no"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </div>
  );
}