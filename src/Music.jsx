import { useRef, useState, useEffect } from "react";

function Music() {
	const tracks = [
		{ title: "Track 1", source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
		{ title: "Track 2", source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
		{ title: "Track 3", source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
	];

	const audioRef = useRef(new Audio(tracks[0].source));
	const [currIdx, setCurrIdx] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	const playTrack = (idx) => {
		audioRef.current.src = tracks[idx].source;
		audioRef.current.play();
		setCurrIdx(idx);
		setIsPlaying(true);
	};

	const togglePlayPause = () => {
		if (!audioRef.current.src) {
			playTrack(currIdx);
			return;
		}
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setIsPlaying(!isPlaying);
	};

	const handleNext = () => playTrack((currIdx + 1) % tracks.length);
	const handlePrev = () => playTrack((currIdx - 1 + tracks.length) % tracks.length);

	useEffect(() => {
		const audio = audioRef.current;
		const update = () =>
			setProgress((audio.currentTime / audio.duration) * 100 || 0);

		audio.addEventListener("timeupdate", update);
		return () => audio.removeEventListener("timeupdate", update);
	}, []);

	const handleSeek = (e) => {
		const percent = e.nativeEvent.offsetX / e.currentTarget.clientWidth;
		audioRef.current.currentTime = percent * audioRef.current.duration;
	};

	return (
		<div>
			<h3>{tracks[currIdx].title}</h3>

			<div
				onClick={handleSeek}
				style={{ width: 300, height: 6, background: "#ddd", cursor: "pointer" }}
			>
				<div style={{ width: `${progress}%`, height: "100%", background: "#000" }} />
			</div>

			<br />
			<button onClick={handlePrev}>⏮️</button>
			<button onClick={togglePlayPause}>
				{isPlaying ? "⏸️ Pause" : "▶️ Play"}
			</button>
			<button onClick={handleNext}>⏭️</button>
		</div>
	);
}

export default Music;
