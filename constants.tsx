
import React from 'react';
// Generic SVG Icon Props
interface SVGIconProps extends React.SVGProps<SVGSVGElement> {}

export const PremuniaLogoIcon: React.FC<SVGIconProps> = (props) => (
  <svg viewBox="0 0 200 50" fill="currentColor" {...props}>
    {/* Simplified representation - removed colored rects, kept circles as abstract logo part */}
    <circle cx="165" cy="25" r="15" className="text-premunia-purple" />
    <circle cx="165" cy="25" r="7" fill="white" />
     {/* Fallback text if SVG doesn't render or for accessibility */}
    <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" className={props.className?.includes("text-white") ? "text-white" : "text-primary"}>
      Premunia
    </text>
  </svg>
);

export const ShieldIcon: React.FC<SVGIconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
);

export const KeyIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
  </svg>
);

export const EyeSlashIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L6.228 6.228" />
  </svg>
);

export const ArrowTopRightOnSquareIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<SVGIconProps & { title?: string }> = ({ title, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    {title && <title>{title}</title>}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const ClipboardDocumentIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
  </svg>
);

export const HubSpotIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-5.5h5v-2h-5v2zm0-3h5v-2h-5v2z" />
     {/* Simplified HubSpot Sprocket - a circle with notches */}
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2087 6.55193C15.9388 6.09038 15.3891 5.86101 14.8802 5.96788L12.0003 6.58159L9.12038 5.96788C8.61148 5.86101 8.06179 6.09038 7.79187 6.55193C7.52195 7.01348 7.58739 7.62594 7.95459 8.01977L9.50974 9.7423L7.95459 11.4648C7.58739 11.8587 7.52195 12.4711 7.79187 12.9327C8.06179 13.3942 8.61148 13.6236 9.12038 13.5167L12.0003 12.903L14.8802 13.5167C15.3891 13.6236 15.9388 13.3942 16.2087 12.9327C16.4786 12.4711 16.4132 11.8587 16.046 11.4648L14.4908 9.7423L16.046 8.01977C16.4132 7.62594 16.4786 7.01348 16.2087 6.55193ZM12.0003 11.0094C11.3002 11.0094 10.7303 10.4907 10.7303 9.7423C10.7303 8.99391 11.3002 8.47522 12.0003 8.47522C12.7003 8.47522 13.2703 8.99391 13.2703 9.7423C13.2703 10.4907 12.7003 11.0094 12.0003 11.0094Z" className="text-orange-500" />
  </svg>
);


export const DashboardIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 .894.447c.894.447 1.97.447 2.864 0l1.726-1.035M21.75 12l-.894.447c-.894.447-1.97.447-2.864 0l-1.726-1.035m0 0-2.018 1.21a2.25 2.25 0 0 0-1.263 2.053v2.091c0 .662.296 1.28.796 1.696l1.042.87c.54.453 1.27.677 2.004.677h3.18a2.25 2.25 0 0 0 2.004-.677l1.041-.87a2.25 2.25 0 0 0 .796-1.696v-2.09c0-.852-.478-1.636-1.263-2.053M3.75 12.75l2.018 1.21a2.25 2.25 0 0 1 1.263 2.053v2.091c0 .662-.296 1.28-.796 1.696l-1.042.87c-.54.453-1.27.677-2.004.677H3.18a2.25 2.25 0 0 1-2.004-.677l-1.041-.87A2.25 2.25 0 0 1 0 18.092v-2.09c0-.852.478-1.636 1.263-2.053L3.75 12.75Zm6-3.375C9.75 8.662 9.004 8 8.096 8H6.904C5.996 8 5.25 8.662 5.25 9.375v.374c0 .69.528 1.277 1.236 1.349M18.75 9.375v.374c0 .69-.528 1.277-1.236 1.349M12 3.75c.621 0 1.125.504 1.125 1.125V6.375c0 .621-.504 1.125-1.125 1.125H10.875c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h1.25Z" />
  </svg>
);

export const ProspectsIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.197M13.5 18.72a9.094 9.094 0 0 1 3.741-.479 3 3 0 0 1-3.741-5.197M13.5 12.75V11.25L12 9.75M13.5 12.75V18.75m0 0A2.25 2.25 0 0 1 15.75 21H8.25A2.25 2.25 0 0 1 6 18.75V9A2.25 2.25 0 0 1 8.25 6.75h3.75M15 12.75V9A2.25 2.25 0 0 0 12.75 6.75H8.25" />
  </svg>
);

export const ContractsIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

export const CampaignsIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

export const UsersIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

export const AutomationIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

export const ImportIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3v11.25" />
  </svg>
);

export const ReportsIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 21v-7.875M3 13.125h1.5v-3.75A1.125 1.125 0 0 1 6 8.25h1.5m0 0H9m0 0c.621 0 1.125.504 1.125 1.125v3.75M9 8.25h1.5m0 0H12m0 0c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H9.75A1.125 1.125 0 0 1 9 21v-7.875M15 13.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V13.125Zm0 0h1.5V9.75a1.125 1.125 0 0 1 1.125-1.125h1.5m0 0h1.5m0 0c.621 0 1.125.504 1.125 1.125v3.75m-1.5-6.375c.621 0 1.125.504 1.125 1.125v6.75M15 3.75V21" />
  </svg>
);

export const SettingsIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.003 1.116-1.003h2.58c.556 0 1.026.461 1.116 1.003L15 4c.699 0 1.371.162 1.977.448a1.992 1.992 0 0 1 .962 2.338l-.396 1.187a1.994 1.994 0 0 0 .15.289c.307.41.517.88.625 1.378l.108.491a1.993 1.993 0 0 1-.54 2.199l-.91.733c-.22.179-.313.454-.25.709l.191.766A1.993 1.993 0 0 1 18.11 18c-.805.424-1.68.665-2.6.729l-.491.035a1.993 1.993 0 0 1-1.848-1.075l-.479-.958a1.993 1.993 0 0 0-1.802-1.226H12c-.732 0-1.396.388-1.799 1.003l-.48.957a1.993 1.993 0 0 1-1.849 1.075l-.49.035c-.92.064-1.795.305-2.6.73a1.993 1.993 0 0 1-2.198-1.742l.19-.766c.064-.255-.03-.53-.25-.709l-.91-.732a1.993 1.993 0 0 1-.54-2.2l.108-.49c.108-.498.318-.968.625-1.379a1.994 1.994 0 0 0 .15-.289l-.395-1.187a1.992 1.992 0 0 1 .962-2.338C7.629 4.162 8.301 4 9 4l.594-.06Z" />
  </svg>
);

export const LogoutIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
  </svg>
);

export const UserCircleIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const BellIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);

export const SearchIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

export const FilterIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
  </svg>
);

export const PlusIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const EditIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

export const DeleteIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

export const EyeIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const ChevronDownIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const CheckCircleIcon: React.FC<SVGIconProps> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
);

export const InformationCircleIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);

export const CurrencyDollarIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const ChartBarIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 21v-7.875M3 13.125h1.5v-3.75A1.125 1.125 0 0 1 6 8.25h1.5m0 0H9m0 0c.621 0 1.125.504 1.125 1.125v3.75M9 8.25h1.5m0 0H12m0 0c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H9.75A1.125 1.125 0 0 1 9 21v-7.875M15 13.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V13.125Z" />
  </svg>
);

export const DocumentDuplicateIcon: React.FC<SVGIconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m9.75 11.625-1.625-1.625a1.125 1.125 0 0 1 0-1.591l1.625-1.625m-1.625 3.218c.168.168.356.324.552.469m-4.013-3.687a1.125 1.125 0 0 1 0-1.591l.157-.157a1.125 1.125 0 0 1 1.591 0l.157.157a1.125 1.125 0 0 1 0 1.591l-.157.157a1.125 1.125 0 0 1-1.591 0l-.157-.157Zm-2.25-4.5a1.125 1.125 0 0 1 0-1.591l.157-.157a1.125 1.125 0 0 1 1.591 0l.157.157a1.125 1.125 0 0 1 0 1.591l-.157.157a1.125 1.125 0 0 1-1.591 0l-.157-.157Z" />
    </svg>
);

export const TicketIcon: React.FC<SVGIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.75c0 1.242-1.008 2.25-2.25 2.25H9.75a2.25 2.25 0 0 1-2.25-2.25V5.25a2.25 2.25 0 0 1 2.25-2.25h4.5a2.25 2.25 0 0 1 2.25 2.25v1.5Zm0 9.75c0 1.242-1.008 2.25-2.25 2.25H9.75a2.25 2.25 0 0 1-2.25-2.25V15a2.25 2.25 0 0 1 2.25-2.25h4.5a2.25 2.25 0 0 1 2.25 2.25v1.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21H17.25a2.25 2.25 0 0 0 2.25-2.25V15M6.75 3H17.25a2.25 2.25 0 0 1 2.25 2.25V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
  </svg>
);


export const DEFAULT_USER_AVATAR = "https://picsum.photos/seed/defaultuser/100/100"

