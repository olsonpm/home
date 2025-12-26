const email = process.env.NEXT_PUBLIC_EMAIL
const logLevelName = process.env.NEXT_PUBLIC_LOG_LEVEL

if (!email) throw new Error('NEXT_PUBLIC_EMAIL environment variable missing')

export { email, logLevelName }
