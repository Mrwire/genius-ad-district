import { redirect } from 'next/navigation';

export default function ClientPortalIndex() {
  redirect('./dashboard');
}

