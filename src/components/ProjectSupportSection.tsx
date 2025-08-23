import React from 'react';
import type { SupportData } from '../types/support';
import DonationButton from './DonationButton';

interface ProjectSupportSectionProps {
  projectSupport: SupportData['projectSupport'];
}

const ProjectSupportSection: React.FC<ProjectSupportSectionProps> = React.memo(({ projectSupport }) => {
  return (
    <section className="bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-8 text-center">
      <h3 className="text-2xl font-[var(--font-display)] mb-4">
        Support Both Artists
      </h3>
      <p className="text-[var(--color-text)] mb-6">
        {projectSupport.description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        {projectSupport.donationLinks.map((link, index) => (
          <DonationButton
            key={link.platform}
            donationLink={link}
            variant={index === 0 ? 'primary' : 'secondary'}
            className="flex-1"
          />
        ))}
      </div>
    </section>
  );
});

ProjectSupportSection.displayName = 'ProjectSupportSection';

export default ProjectSupportSection;