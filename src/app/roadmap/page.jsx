import React from 'react';

export default function Page() {
  return (
    <div style={{ overflow: 'auto', maxWidth: '100%', height: '100vh' }}>
      <embed src="/RewardRoadMap.pdf" type="application/pdf" width="100%" height="100%" />
    </div>
  );
}
