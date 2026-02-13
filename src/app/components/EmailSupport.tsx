import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const SUPPORT_EMAIL = 'support@sefitness.com';

export function EmailSupport() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = `mailto:${SUPPORT_EMAIL}`;
    // Go back after opening mail client
    const timeout = setTimeout(() => navigate(-1), 500);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return null;
}
