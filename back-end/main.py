from class_types.Song import Song
from class_types.VoteData import VoteData
from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from components.get_song_links import get_song_links
from components.user_interactions import user_suggestion, user_vote

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/song-links/{song_title}")
def song_links(song_title: str) -> List[Song]:
    return get_song_links(song_title)


@app.post("/user-interactions/votes")
def user_votes(vote_data: VoteData):
    print(vote_data)
    user_vote(vote_data)