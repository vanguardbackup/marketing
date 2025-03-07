// app/terms-of-service/page.tsx
import type { Metadata } from 'next';
import TermsOfServicePage from '@/components/TermsOfServicePage';

export const metadata: Metadata = {
    title: 'Terms of Service - Vanguard',
    description: 'Terms of Service for using Vanguard Backup Solution.',
};

export default function TermsOfService() {
    return <TermsOfServicePage />;
}