import { useLang } from '../../i18n/LanguageContext'

/**
 * Full-page flash render for deprecated entry deep-links.
 * Visible for 1.8s, then EntryDetailRoute redirects to #library.
 * The deprecatedId is shown as a small subtitle for transparency.
 */
export default function RedirectFlash({ deprecatedId }) {
  const { t } = useLang()
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: 'var(--bg-modal-backdrop)' }}>
      <div className="glass max-w-md w-full p-8 text-center rounded-2xl">
        <div className="text-xs uppercase tracking-wider mb-3 opacity-70"
          style={{ color: 'var(--accent, #00ff99)' }}>
          {t('entry.deprecated.eyebrow')}
        </div>
        <h2 className="text-2xl font-semibold mb-2">
          {t('entry.deprecated.title')}
        </h2>
        <p className="text-sm opacity-80 mb-4">
          {t('entry.deprecated.body')}
        </p>
        <div className="text-xs opacity-50 mb-6">
          {(t('entry.deprecated.idLabel') || 'Original ID: {id}').replace('{id}', deprecatedId)}
        </div>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin opacity-60" />
        </div>
      </div>
    </div>
  )
}
