import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import WelcomeSection from '@/components/home/WelcomeSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import HomesSection from '@/components/home/HomesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import FaqSection from '@/components/home/FaqSection';
import CtaBand from '@/components/home/CtaBand';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <TrustStrip />
      <WelcomeSection />
      <ServicesGrid />
      <HomesSection />
      <ReviewsSection />
      <GalleryTeaser />
      <FaqSection />
      <CtaBand />
    </PageLayout>
  );
}
