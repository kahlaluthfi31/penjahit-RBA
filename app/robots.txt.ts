import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Jika ada folder yang tidak boleh di-index
        },
        sitemap: 'https://www.rumahpenjahitannur.com/sitemap.xml', // GANTI dengan URL kamu
    };
}