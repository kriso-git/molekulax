// Inline the entire emitted CSS bundle into <head> as a <style> tag,
// removing the separate <link rel="stylesheet"> request. Eliminates the
// render-blocking CSS round-trip on initial load. The CSS bundle is
// ~8.83 kB gzip, small enough that inlining is a net win for LCP/FCP
// without bloating the HTML beyond reason.
export function inlineCss() {
  return {
    name: 'inline-css',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html
      const cssAssets = Object.values(ctx.bundle).filter(
        (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css')
      )
      if (cssAssets.length === 0) return html
      const inlinedCss = cssAssets.map((a) => a.source).join('\n')
      const inlineTag = `<style>${inlinedCss}</style>`
      // Remove every <link rel="stylesheet"...> that Vite injected.
      let out = html.replace(/<link\s+rel="stylesheet"[^>]*>/g, '')
      // Insert the inline <style> before </head>.
      out = out.replace('</head>', `${inlineTag}</head>`)
      return out
    },
  }
}
