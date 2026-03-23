import { redirect } from 'next/navigation';

export default function ServicesPage() {
  // Ye user ko automatically healthcare page par bhej dega
  redirect('/services/healthcare-provider');
}