"use client";
import { setUserName } from "@/app/redux/slice/project-title-status.slice";
import { DataResponseForUser, User } from "@/app/types/page";
import {
  Bell,
  Bot,
  Camera,
  ChevronRight,
  Lock,
  Palette,
  Save,
  Shield,
  Trash2,
  User2,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoSnapshot, setAutoSnapshot] = useState(true);
  const [publicDesigns, setPublicDesigns] = useState(false);
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | undefined>();
  const [verified, setVerified] = useState("");
  const handleDetailsOfUser = async () => {
    const response = await fetch("http://localhost:4000/auth/user", {
      method: "GET",
      credentials: "include",
    });
    const data: DataResponseForUser = await response.json();

    setUser(data?.user);
    dispatch(setUserName(data.user.name));
    if (user?.isVerified) {
      setVerified("User is Verified");
    }
    setVerified("User is not Verified");
  };
  const handleChangePass = async () => {
    const response = await fetch("http://localhost:4000/user/update-pass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
      credentials: "include",
    });
    const data: DataResponseForUser = await response.json();

    setUser(data?.user);
    dispatch(setUserName(data.user.name));
    if (user?.isVerified) {
      setVerified("User is Verified");
    }
    setVerified("User is not Verified");
  };
  useEffect(() => {
    handleDetailsOfUser();
  }, []);

  return (
    <div
      className="
      min-h-screen
      bg-black/20
      text-white
      px-10
      py-10
      "
    >
      <div className=" mx-auto">
        {/* Header */}

        <div className="mb-10">
          <h1
            className="
            text-4xl
            font-bold
            "
          >
            Settings
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage your account, AI preferences and application settings.
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile */}

          <Section
            icon={<User2 size={20} />}
            title="Profile"
            description="Manage your personal information"
          >
            <Input label="Name" value={user?.name} />

            <Input label="Email" value={user?.email} />

            <Input label="Verification Status" value={verified} />
          </Section>

          {/* AI Settings */}

          <Section
            icon={<Bot size={20} />}
            title="AI Generation"
            description="Customize architecture generation behavior"
          >
            <SettingRow
              title="AI Model"
              description="Model used for architecture generation"
              action={
                <button
                  className="
                px-4
                py-2
                rounded-lg
                bg-white/10
                border
                border-white/10
                "
                >
                  GPT
                  <ChevronRight className="inline ml-2" size={15} />
                </button>
              }
            />

            <SettingRow
              title="Automatic Snapshot"
              description="Automatically save architecture preview images"
              action={
                <Toggle enabled={autoSnapshot} setEnabled={setAutoSnapshot} />
              }
            />
          </Section>

          {/* Appearance */}

          <Section
            icon={<Palette size={20} />}
            title="Appearance"
            description="Customize your workspace"
          >
            <SettingRow
              title="Dark Mode"
              description="Use dark visualizer interface"
              action={<Toggle enabled={darkMode} setEnabled={setDarkMode} />}
            />
          </Section>

          {/* Visualizer */}

          <Section
            icon={<Camera size={20} />}
            title="Visualizer"
            description="Control architecture canvas behaviour"
          >
            <SettingRow
              title="Public Designs"
              description="Allow others to view your designs"
              action={
                <Toggle enabled={publicDesigns} setEnabled={setPublicDesigns} />
              }
            />

            <SettingRow
              title="Default Canvas Theme"
              description="Color scheme of generated diagrams"
              action={
                <button
                  className="
                px-4
                py-2
                bg-purple-500/20
                text-purple-300
                rounded-lg
                "
                >
                  Midnight
                </button>
              }
            />
          </Section>

          {/* Notifications */}

          <Section
            icon={<Bell size={20} />}
            title="Notifications"
            description="Manage alerts"
          >
            <SettingRow
              title="Email Notifications"
              description="Receive updates about your designs"
              action={
                <Toggle enabled={notifications} setEnabled={setNotifications} />
              }
            />
          </Section>

          {/* Security */}

          <Section
            icon={<Shield size={20} />}
            title="Security"
            description="Protect your account"
          >
            <SettingRow
              title="Change Password"
              description="Update your account password"
              action={
                <button
                  className="
              px-4
              py-2
              rounded-lg
              border
              border-white/10
              "
                >
                  Change
                </button>
              }
            />
          </Section>

          {/* Danger */}

          <Section
            icon={<Lock size={20} />}
            title="Danger Zone"
            description="Irreversible actions"
            danger
          >
            <button
              className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          bg-red-500/20
          text-red-400
          border
          border-red-500/20
          "
            >
              <Trash2 size={18} />
              Delete Account
            </button>
          </Section>

          <button
            className="
          flex
          items-center
          gap-2
          px-6
          py-3
          rounded-xl
          bg-accent
          hover:bg-accent/80
          cursor-pointer
         
          font-semibold
          "
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ children, icon, title, description, danger = false }: any) {
  return (
    <div
      className={`
rounded-2xl
border
p-6
bg-white/[0.03]
backdrop-blur-xl
${danger ? "border-red-500/20" : "border-white/10"}
`}
    >
      <div className="flex gap-3 mb-6">
        <div
          className="
h-10
w-10
rounded-xl
bg-purple-500/20
flex
items-center
justify-center
text-purple-400
"
        >
          {icon}
        </div>

        <div>
          <h2 className="font-semibold text-lg">{title}</h2>

          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      </div>

      <div className="space-y-5">{children}</div>
    </div>
  );
}

function SettingRow({ title, description, action }: any) {
  return (
    <div
      className="
flex
items-center
justify-between
gap-4
"
    >
      <div>
        <h3 className="font-medium">{title}</h3>

        <p
          className="
text-sm
text-zinc-400
"
        >
          {description}
        </p>
      </div>

      {action}
    </div>
  );
}

function Toggle({ enabled, setEnabled }: any) {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`
w-12
h-6
rounded-full
transition
relative
${enabled ? "bg-purple-500" : "bg-white/20"}
`}
    >
      <span
        className={`
absolute
top-1
h-4
w-4
rounded-full
bg-white
transition
${enabled ? "left-7" : "left-1"}
`}
      />
    </button>
  );
}

function Input({ label, value }: unknown) {
  return (
    <div>
      <label
        className="
text-sm
text-zinc-400
"
      >
        {label}
      </label>

      <input
        value={value}
        readOnly
        className="
mt-2
w-full
rounded-xl
bg-white/5
border
border-white/10
px-4
py-3
outline-none
"
      />
    </div>
  );
}
