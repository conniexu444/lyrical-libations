import React from 'react';

const SecurityNotice: React.FC = React.memo(() => {
  return (
    <div className="mt-12 text-center text-sm text-[var(--color-link)]" role="complementary" aria-label="Security information">
      <p className="mb-2">
        <span role="img" aria-label="Lock icon">🔒</span> All donations are processed securely through trusted payment platforms.
      </p>
      <p>
        We never store your payment information. Your privacy and security are our priority.
      </p>
    </div>
  );
});

SecurityNotice.displayName = 'SecurityNotice';

export default SecurityNotice;