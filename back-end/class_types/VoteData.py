from pydantic import BaseModel, Field

class VoteData(BaseModel):
    song_name: str = Field(alias="songName")
    vote_type: str = Field(alias="voteType")

    class Config:
        populate_by_name = True
        allow_population_by_field_name = True