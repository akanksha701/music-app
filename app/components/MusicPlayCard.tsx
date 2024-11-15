'use client'
import { Card, CardBody, Image, Button, Slider } from '@nextui-org/react'
import React from 'react'
import { HeartIcon } from './HeartIcon'
import { RepeatOneIcon } from './RepeatOneIcon';
import { PreviousIcon } from './PreviousIcon';
import { PauseCircleIcon } from './PauseCircleIcon';
import { NextIcon } from './NextIcon';
import { ShuffleIcon } from './ShuffleIcon';
const songs = [
    {
        title: "Song 1", 
        artist: "Artist 1",
        path: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",  // This is a sample aud
        cover: "https://nextui.org/images/album-cover.png"
    },
    {
        title: "Song 2", 
        artist: "Artist 1",
        path: "/music/song1.mp3", 
        cover: "https://nextui.org/images/album-cover.png"
    }
];
const MusicPlayCard = () => {
    const [liked, setLiked] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
    const [audio] = React.useState(new Audio(songs[0].path));
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [isRepeat, setIsRepeat] = React.useState(false);
    const [isShuffle, setIsShuffle] = React.useState(false);
    const [title, setTitle] = React.useState(songs[0].title);
    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    const playNextSong = () => {
        let nextIndex;
        if (isShuffle) {
            nextIndex = Math.floor(Math.random() * songs.length);
        } else {
            nextIndex = (currentSongIndex + 1) % songs.length;
        }
        setCurrentSongIndex(nextIndex);
        audio.src = songs[nextIndex].path;
        console.log(songs[nextIndex].title);
        setTitle(songs[nextIndex].title);
        audio.play();
        setIsPlaying(true);
    };
    const playPreviousSong = () => {
        let prevIndex;
        if (isShuffle) {
            prevIndex = Math.floor(Math.random() * songs.length);
        } else {
            prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
        }
        setCurrentSongIndex(prevIndex);
        audio.src = songs[prevIndex].path;
        console.log(songs[prevIndex].title);
        setTitle(songs[prevIndex].title);
        audio.play();
        setIsPlaying(true);
    };
    React.useEffect(() => {
        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
        });

        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        audio.addEventListener('ended', () => {
            if (isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else {
                playNextSong();
            }
        });

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio, isRepeat]);
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSliderChange = (value: number | number[]) => {
        const newValue = Array.isArray(value) ? value[0] : value;
        const newTime = (newValue / 100) * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };
    
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={songs[currentSongIndex].cover}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">{title}</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                    track: "bg-default-500/30",
                    thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSliderChange}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={playPreviousSong}
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={togglePlay}
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={playNextSong}
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onPress={() => setIsShuffle((v) => !v)}
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default MusicPlayCard