function Settings() {

  return (

    <div>

      <h1 className="text-5xl font-black mb-8">
        Settings
      </h1>

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

        <h2 className="text-2xl font-bold mb-6">
          Platform Preferences
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between">

            <span>Email Notifications</span>

            <button className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-bold">
              Enabled
            </button>

          </div>

          <div className="flex justify-between">

            <span>AI Auto Analysis</span>

            <button className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-bold">
              Active
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Settings;