import { SettingsTabs } from "./components/SettingsTabs";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center border-b border-zinc-200 pb-5">

          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>

          </div>

          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">Cancel</button>
            <button  type="submit" form="settings" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm text-white hover:bg-violet-700 bg-violet-600">Save</button>
          </div>

        </div>

        <form action="" id="settings" className="mt-6 flex flex-col w-full ">

        </form>

      </div>
    </>
  )
}
