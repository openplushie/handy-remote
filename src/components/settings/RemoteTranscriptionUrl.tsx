import React, { useState, useEffect } from "react";
import { useSettingsStore } from "../../stores/settingsStore";
import { SettingContainer } from "../ui/SettingContainer";

export const RemoteTranscriptionUrl: React.FC = () => {
  const { settings, updateSetting } = useSettingsStore();
  const [localValue, setLocalValue] = useState(
    settings?.remote_transcription_url ?? ""
  );

  useEffect(() => {
    setLocalValue(settings?.remote_transcription_url ?? "");
  }, [settings?.remote_transcription_url]);

  const handleBlur = () => {
    const trimmed = localValue.trim();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateSetting("remote_transcription_url", (trimmed || null) as any);
  };

  return (
    <SettingContainer
      title="Remote Transcription URL"
      description="Route transcription to a faster-whisper-server on your network (e.g. http://192.168.50.2:9000). Leave blank to use the local model."
      descriptionMode="tooltip"
      grouped={true}
    >
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="http://192.168.50.2:9000"
        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
      />
    </SettingContainer>
  );
};
