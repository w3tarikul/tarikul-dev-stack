function LoadingSpinner() {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white py-20">
      <span className="size-10 animate-spin rounded-full border-4 border-pink-100 border-t-brand" />
      <p className="text-sm leading-5 font-medium text-slate-500">Loading technologies...</p>
    </div>
  )
}

export default LoadingSpinner
