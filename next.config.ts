/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config: any) => {
        config.module.rules.push({
            test: /\.(mp3|wav|ogg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/_next/static/media/',
                    outputPath: 'static/media/',
                },
            },
        });
        return config;
    },
}

module.exports = nextConfig