import { AppSkeleton } from "@/features/app/components";

const SidebarPlaylistLoading = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div className="d-flex gap-3" key={index}>
          <AppSkeleton height="47px" width="47px" rounded />
          <div className="d-flex flex-column flex-1 justify-between">
            <AppSkeleton height="20px" rounded />
            <AppSkeleton height="20px" width="170px" rounded />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarPlaylistLoading;
