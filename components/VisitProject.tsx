import { FaGithub, FaGoogleDrive, FaGlobe } from "react-icons/fa";

export default function VisitProject({ url }: { url: string | null }) {
  if (!url || url === "#") {
    return null; // Return nothing if the URL is "#" or null
  }

  let label;
  let icon;

  if (url.includes("github.com")) {
    const repoName = url.split("github.com/")[1];
    label = repoName;
    icon = <FaGithub />;
  } else if (url.includes("drive.google.com")) {
    label = "Google Drive";
    icon = <FaGoogleDrive />;
  } else {
    label = "Visit Project";
    icon = <FaGlobe />;
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