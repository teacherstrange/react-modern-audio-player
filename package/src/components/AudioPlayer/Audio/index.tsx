import { useNonNullableContext } from "@/hooks/useNonNullableContext";
import { audioPlayerStateContext } from "@/components/AudioPlayer/Context/StateContext";
import { FC } from "react";
import { Basic } from "./Basic";
import { WaveSurferAudio } from "./WaveSurfer";

export const Audio: FC = () => {
  const { activeUI } = useNonNullableContext(audioPlayerStateContext);

  return activeUI.progress === "waveform" ? <WaveSurferAudio /> : <Basic />;
};
