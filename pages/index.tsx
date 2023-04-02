import type { NextPage } from 'next';
import styles from './style.module.scss';
import PricingSection from 'components/PricingSection';
import Container from 'components/Container';

const Home: NextPage = () => {
    return (
        <>
            <header>
                <h1 className={styles.hidden}>
                    Pricing component with toggle
                </h1>
            </header>
            <main className={styles.main}>
                <Container>
                    <PricingSection />
                </Container>
            </main>
        </>
    );
}

export default Home
