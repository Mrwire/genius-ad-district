import { getTranslations } from 'next-intl/server';

export default async function ForgotPasswordPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Auth.Forgot' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-neutral-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <h1 className="text-2xl font-heading font-bold text-white mb-2">{t?.('title') || (locale === 'fr' ? 'Mot de passe oublié' : 'Forgot password')}</h1>
        <p className="text-white/70 mb-6">{t?.('subtitle') || (locale === 'fr' ? 'Entrez votre email pour recevoir un lien de réinitialisation.' : 'Enter your email to receive a reset link.')}</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-white/80 mb-1">Email</label>
            <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@example.com" />
          </div>
          <button type="submit" className="w-full px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors">{t?.('cta') || (locale === 'fr' ? 'Envoyer le lien' : 'Send link')}</button>
        </form>
      </div>
    </div>
  );
}

