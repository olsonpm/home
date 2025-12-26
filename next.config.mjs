const nextConfig = {
  output: 'export',
  webpack: config => {
    config.module.rules.push({
      test: /\.mp4$/,
      type: 'asset/resource',
    })
    return config
  },
}

export default nextConfig
