import { FooterProps } from 'components/Footer/interfaces';
import { FooterIds } from 'components/Footer/enums';
import styles from 'components/Footer/footer.module.css'

export default function Footer({ footerRef }: FooterProps) {
    return <div id={FooterIds.FOOTER} ref={footerRef} className={styles['my-footer']}></div>
}
