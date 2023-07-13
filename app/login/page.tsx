import LoginView from 'views/LoginView/LoginView';

export const metadata = {
  title: 'The Backup Strategy',
  description: 'Trying out Open Graph meta tags',
  openGraph: {
    title: 'The Backup Strategy',
    description: 'Trying out Open Graph meta tags',
    url: 'https://www.talel.io',
    siteName: 'https://www.talel.io',
    images: [
      {
        url: 'https://s3.amazonaws.com/talelio-test-content/1/images/thebackupstrategy2_60a7b8d3-46ca-4860-95a1-85b0178df1b4.jpg',
        width: 1200,
        height: 628,
        alt: 'artwork',
      },
    ],
  },
};

export default function Login() {
  return <LoginView />;
}
