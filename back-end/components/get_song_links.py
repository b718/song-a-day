from class_types.Song import Song

def get_apple_music_link(song_title: str) -> Song:
    return {
        "service_name": "Apple Music",
        "song_url": "https://www.youtube.com/watch?v=eizDlMTanE4"
    }

def get_spotify_link(song_title: str) -> Song:
      return {
        "service_name": "Spotify",
        "song_url": "https://www.youtube.com/watch?v=eizDlMTanE4"
    }

def get_soundcloud_link(song_title: str) -> Song:
       return {
        "service_name": "SoundCloud",
        "song_url": "https://www.youtube.com/watch?v=eizDlMTanE4"
    }

def get_youtube_link(song_title: str) -> Song:
    return {
        "service_name": "YouTube",
        "song_url": "https://www.youtube.com/watch?v=eizDlMTanE4"
    }

def get_song_links(song_title: str) -> dict[str, Song]:
    # soundcloud, apple, spotify, and youtubecall
    return [get_apple_music_link(song_title),
            get_spotify_link(song_title),
            get_soundcloud_link(song_title),
            get_youtube_link(song_title)]
