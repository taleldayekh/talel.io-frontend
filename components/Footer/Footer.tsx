import gitHubMarkWhite from 'assets/images/logos/github-mark-white.svg';
import { FooterIds } from 'components/Footer/enums';
import styles from 'components/Footer/footer.module.css';
import { FooterProps } from 'components/Footer/interfaces';
import Image from 'next/image';

export default function Footer({ footerRef }: FooterProps) {
  return (
    <footer id={FooterIds.FOOTER} ref={footerRef} className={styles.footer}>
      <div className={styles.footer__content}>
        <ul>
          <li>&#169; {new Date().getFullYear()} Talel Dayekh</li>
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/taleldayekh"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={gitHubMarkWhite}
                alt="GitHub Invertocat Logo"
                width="20"
                height="20"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
