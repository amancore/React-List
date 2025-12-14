import { useRef, useState, useEffect } from "react";

function Music() {
	const tracks = [
		{
			title: "Track 1",
			source: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
		},
		{
			title: "Track 2",
			source: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
		},
	];

	const audioRef = useRef(new Audio());
	const [currIdx, setCurrIdx] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const playTrack = (idx) => {
		const audio = audioRef.current;
		audio.pause();
		audio.src = tracks[idx].source;
		audio.load();
		audio.play();
		setCurrIdx(idx);
		setIsPlaying(true);
	};

	const togglePlayPause = () => {
		const audio = audioRef.current;
		if (!audio.src) {
			playTrack(currIdx);
			return;
		}
		isPlaying ? audio.pause() : audio.play();
		setIsPlaying(!isPlaying);
	};

	const handleNext = () =>
		playTrack((currIdx + 1) % tracks.length);

	const handlePrev = () =>
		playTrack((currIdx - 1 + tracks.length) % tracks.length);

	useEffect(() => {
		const audio = audioRef.current;

		const update = () => {
			setCurrentTime(audio.currentTime);
			setDuration(audio.duration || 0);
			setProgress((audio.currentTime / audio.duration) * 100 || 0);
		};

		audio.addEventListener("loadedmetadata", update);
		audio.addEventListener("timeupdate", update);

		return () => {
			audio.removeEventListener("loadedmetadata", update);
			audio.removeEventListener("timeupdate", update);
		};
	}, []);

	const handleSeek = (e) => {
		const bar = e.currentTarget.getBoundingClientRect();
		const clickX = e.clientX - bar.left;
		const percent = clickX / bar.width;

		audioRef.current.currentTime =
			percent * audioRef.current.duration;

		setProgress(percent * 100);
		setCurrentTime(audioRef.current.currentTime);
	};

	const formatTime = (t) => {
		const m = Math.floor(t / 60);
		const s = Math.floor(t % 60);
		return `${m}:${s < 10 ? "0" : ""}${s}`;
	};

	return (
		<div>
			<h3>{tracks[currIdx].title}</h3>
			<div className="w-50 h-3 cursor-pointer bg-black" onClick={handleSeek} >
				<div className="h-full bg-red-500" style={{ width: `${progress}%` }} />
			</div>
			<p>{formatTime(currentTime)} / {formatTime(duration)}</p>
			<button onClick={handlePrev}>⏮️</button>
			<button onClick={togglePlayPause}>
				{isPlaying ? "⏸️ Pause" : "▶️ Play"}
			</button>
			<button onClick={handleNext}>⏭️</button>
		</div>
	);
}

export default Music;
