// app/privacy-policy/page.tsx
import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = {
    title: 'Privacy Policy - Vanguard',
    description: 'Privacy Policy for Vanguard Backup Solution.',
};

export default function PrivacyPolicy() {
    return <PrivacyPolicyPage />;
}