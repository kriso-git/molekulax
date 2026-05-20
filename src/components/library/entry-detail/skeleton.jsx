// Loading skeleton and error states for EntryDetailRoute. Shows a Hero-shaped
// placeholder with a spinning ring while loadEntry() resolves. Uses the
// active library's accent color so the user sees continuity from the
// gallery tile they tapped.

import { useLibrary } from '../../../context/LibraryContext'
import { useLang } from '../../../i18n/LanguageContext'

export function EntryDetailSkeleton() {
  const { library } = useLibrary()
  const accent = library?.accent || '#00ff99'
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--bg-base)' }}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className="w-24 h-24 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: accent, borderTopColor: 'transparent' }}
        />
        <p className="text-sm opacity-70">Betöltés / Loading / Ładowanie…</p>
      </div>
    </div>
  )
}

const ERROR_COPY = {
  hu: {
    notFoundTitle: 'Nincs ilyen entry',
    connectionTitle: 'Kapcsolódási hiba',
    notFoundBody: 'Ez az URL nem mutat létező adatra.',
    connectionBody: 'Nem sikerült letölteni az adatot. Próbáld újra.',
    retry: 'Újra',
    back: 'Vissza a könyvtárhoz',
  },
  en: {
    notFoundTitle: 'Entry not found',
    connectionTitle: 'Connection error',
    notFoundBody: 'This URL does not point to existing data.',
    connectionBody: 'Could not load the data. Please try again.',
    retry: 'Retry',
    back: 'Back to library',
  },
  pl: {
    notFoundTitle: 'Nie znaleziono wpisu',
    connectionTitle: 'Błąd połączenia',
    notFoundBody: 'Ten URL nie wskazuje istniejących danych.',
    connectionBody: 'Nie udało się pobrać danych. Spróbuj ponownie.',
    retry: 'Ponów',
    back: 'Powrót do biblioteki',
  },
}

export function EntryDetailError({ error, onRetry, onBack }) {
  const { library } = useLibrary()
  const { lang } = useLang()
  const accent = library?.accent || '#00ff99'
  const isNotFound = error?.code === 'ENTRY_NOT_FOUND'
  const copy = ERROR_COPY[lang] || ERROR_COPY.hu
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--bg-base)' }}
      role="alert"
    >
      <div className="max-w-md text-center px-6">
        <h2 className="text-2xl font-bold mb-3">
          {isNotFound ? copy.notFoundTitle : copy.connectionTitle}
        </h2>
        <p className="opacity-70 mb-6 text-sm">
          {isNotFound ? copy.notFoundBody : copy.connectionBody}
        </p>
        <div className="flex gap-3 justify-center">
          {!isNotFound && (
            <button
              onClick={onRetry}
              className="px-5 py-2 rounded-full border-2 font-semibold"
              style={{ borderColor: accent, color: accent }}
            >
              {copy.retry}
            </button>
          )}
          <button
            onClick={onBack}
            className="px-5 py-2 rounded-full"
            style={{ background: 'var(--tint-medium)', color: 'var(--text-primary)' }}
          >
            {copy.back}
          </button>
        </div>
      </div>
    </div>
  )
}
