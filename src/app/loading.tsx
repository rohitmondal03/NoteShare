import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center space-x-4 h-[80vh]">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}