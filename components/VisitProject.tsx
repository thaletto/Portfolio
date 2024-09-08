import { FaGithub, FaGoogleDrive, FaGlobe } from "react-icons/fa";
import { getHostFromUrl, isHostAllowed } from "@/utils/utils";

export default function VisitProject({ url }: { url: string | null }) {
  if (!url || url === "#") {
    return null;
  }

  let label;
  let icon;

  // Parse URL and get the host
  const host = getHostFromUrl(url);

  // Check if the host is in the whitelist
  if (!isHostAllowed(host)) {
    label = "Invalid URL";
    icon = <FaGlobe />;
  } else {
    // Determine label and icon based on the host
    if (host === 'github.com') {
      const repoName = url.split("github.com/")[1];
      label = repoName;
      icon = <FaGithub />;
    } else if (host === 'drive.google.com') {
      label = "Google Drive";
      icon = <FaGoogleDrive />;
    } else {
      label = "Visit Project";
      icon = <FaGlobe />;
    }
  }

  return (
    <div className="mt-4">
      <span
        className="inline-block md:text-sm sm:text-xs bg-customGreen p-2 text-charcoal rounded-full"
        style={{ width: 'auto', maxWidth: '100%' }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <div>{icon}</div>
          <div>{label}</div>
        </a>
      </span>
    </div>
  );
}