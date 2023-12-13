'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.svg';

const menuItems = [
    {
        name: 'Meniu',
        items: [
            { name: 'Acasa', href: '/' },
            { name: 'Despre noi', href: '/' },
            { name: 'Portofoliu', href: '/' },
            { name: 'Contact', href: '/' },
        ],
    },
    {
        name: 'Servicii',
        items: [

        ],
    },
    {
        name: 'Legal',
        items: [
            { name: 'Termeni si conditii', href: '/termeni-si-conditii' },
            { name: 'Politica de confidentialitate', href: '/' },
            { name: 'Politica de cookie-uri', href: '/' },
            { name: 'ANPC', href: 'https://anpc.ro' },
            { name: 'Datele firmei', href: '/' },
        ],
    },
];

function FooterSocialLinks() {
    return (
        <div className="flex gap-2 my-2 items-center space-x-2">
            <Link href="https://www.facebook.com/irisphera" target="_blank">
                <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </Link>
            <Link href="https://www.twitter.com/irisphera" target="_blank">
                <svg className="text-gray-400 h-6 w-6" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9752 3.18782L18.0963 1.87967C18.4209 1.52538 18.5094 1.25285 18.5389 1.11659C17.6538 1.60714 16.8276 1.77066 16.2966 1.77066H16.09L15.972 1.66165C15.2639 1.08933 14.3788 0.789551 13.4346 0.789551C11.3693 0.789551 9.74652 2.37023 9.74652 4.19618C9.74652 4.3052 9.74652 4.46871 9.77603 4.57773L9.86454 5.12279L9.24495 5.09553C5.46835 4.98652 2.37037 1.98869 1.86879 1.47088C1.04266 2.83353 1.51473 4.14168 2.01631 4.95927L3.01947 6.48544L1.42622 5.66785C1.45572 6.81248 1.9278 7.71183 2.84244 8.3659L3.63907 8.91096L2.84244 9.21075C3.34402 10.6007 4.4652 11.173 5.29133 11.391L6.383 11.6635L5.35034 12.3176C3.69808 13.4077 1.63275 13.326 0.718109 13.2442C2.5769 14.4433 4.78975 14.7159 6.32399 14.7159C7.47467 14.7159 8.3303 14.6069 8.53683 14.5251C16.7981 12.7264 17.1817 5.91313 17.1817 4.55047V4.3597L17.3587 4.25069C18.3619 3.37859 18.7749 2.91529 19.011 2.64276C18.9225 2.67001 18.8044 2.72452 18.6864 2.75177L16.9752 3.18782Z" fill="currentColor" />
                </svg>
            </Link>
            <Link href="https://www.instagram.com/irisphera" target="_blank">
                <svg className="h-7 w-7 text-gray-400" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </Link>
            <Link href="https://www.linkedin.com/company/irisphera" target="_blank">
                <svg className="text-gray-400 h-6 w-6" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9714 0.7948H2.29108C1.55004 0.7948 0.957214 1.37239 0.957214 2.09438V17.4005C0.957214 18.0936 1.55004 18.7001 2.29108 18.7001H17.9121C18.6532 18.7001 19.246 18.1225 19.246 17.4005V2.0655C19.3053 1.37239 18.7124 0.7948 17.9714 0.7948ZM6.3816 16.0143H3.68423V7.49483H6.3816V16.0143ZM5.01809 6.31078C4.12885 6.31078 3.44709 5.61767 3.44709 4.78016C3.44709 3.94266 4.15849 3.24955 5.01809 3.24955C5.87769 3.24955 6.58909 3.94266 6.58909 4.78016C6.58909 5.61767 5.93698 6.31078 5.01809 6.31078ZM16.6079 16.0143H13.9105V11.8845C13.9105 10.9026 13.8809 9.60303 12.4877 9.60303C11.0649 9.60303 10.8575 10.7005 10.8575 11.7979V16.0143H8.16008V7.49483H10.7982V8.67889H10.8278C11.2132 7.98578 12.0728 7.29268 13.4066 7.29268C16.1633 7.29268 16.6672 9.02544 16.6672 11.3936V16.0143H16.6079Z" fill="currentColor" />
                </svg>
            </Link>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="mx-auto max-w-7xl mb-6">
            <div className="grid md:grid-cols-2 py-10 gap-4 border-b-[1px] border-gray-300 px-14">
                <div className="flex flex-row space-x-5">
                    <Image src="/logo.svg" width={80} height={80} alt="" />
                    <div>
                        <p className="text-black text-2xl font-bold">Fit & try</p>
                        <p className="text-black text-2xl">before you buy</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-5 justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                        <p className="text-black text-xl font-medium mb-3">Get in touch with us</p>
                        <p className="text-gray-400 text-md mb-2">+40 123 456 789</p>
                        <p className="text-gray-400 text-md"> contact@yourdomain.com </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-xs py-3 text-gray-400 ml-6">
                    &copy; Copyright {new Date().getFullYear()} Irisphera. All rights reserved.
                </div>
                <div className="flex flex-row space-x-4 py-3 mr-6">
                    <FooterSocialLinks />
                </div>
            </div>
        </footer>
    );
}
