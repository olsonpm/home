const domain = process.env.NEXT_PUBLIC_DOMAIN
const email = process.env.NEXT_PUBLIC_EMAIL
const logLevelName = process.env.NEXT_PUBLIC_LOG_LEVEL

const missing = []
if (!domain) missing.push('NEXT_PUBLIC_DOMAIN')
if (!email) missing.push('NEXT_PUBLIC_EMAIL')

if (missing.length) {
  const missingStr = missing.map(m => `\n  ${m}`).join('')
  throw new Error('environment variable(s) missing:' + missingStr)
}

export { domain, email, logLevelName }
